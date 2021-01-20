#!/usr/bin/env perl

use Mojolicious::Lite;

get '/' => { template => 'index' };

my %clients;

websocket '/news' => sub {
    my $self = shift;

    app->log->debug(sprintf 'Client connected: %s', $self->tx);
    Mojo::IOLoop->stream( $self->tx->connection )->timeout(0);

    my $id = $self->tx =~ /(0x\w+)/ && $1;
    $clients{$id} = $self;

    $self->on( message => sub {
        my ($ws, $msg) = @_;
        for (keys %clients) {
            $clients{$_}->send($msg);
        }
    });

    $self->on(error => sub {
        my ($client, $err) = @_;
        app->log->debug('websocket error '.$err);
    });

    $self->on( finish => sub {
        app->log->debug('Client disconnected');
        delete $clients{$id};
    });
};


push @{app->static->paths}, './public';
push @{app->renderer->paths}, './';

app->start;