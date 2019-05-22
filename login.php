<?php
// data from database
$userData = array(
  'username'   => 'Michael',
  'email'      => 'michael.reichart@gfu.net',
  'lastLogin'  => '2019-05-10 12:00:00',
  'userStatus' => 'good boy!'
);
// deliver a response
echo json_encode($userData);
