/** A simple https server connection
 *
 *  @desc uses a key and a certificate
 *        in fixtures
 *
 * @package Webapplication
 * @module security
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-11
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 * 
 * @example start the https server, then call localhost
 *          $ nodemon https,js
 *          $ curl -k https://localhost:8001/
 */

const https = require('https');
const fs = require('fs');

const tls = require('tls');
const crypto = require('crypto');

let
    EXAMPLES = {
        1: false, // Using a key and a certificate
        2: false, // Using a certifcate (plx)
        3: false, // get via https
        4: false, // get via https with options
        5: false, // get via https with tls options
        6: false // Example pinning on certificate fingerprint, or the public key
    },
    example = 6;
// Set current example;
EXAMPLES[example] = true;

// Example 1
if (EXAMPLES[1]) {
    // - - - - -
    const options = {
        key: fs.readFileSync('fixtures/keys/agent2-key.pem'),
        cert: fs.readFileSync('fixtures/keys/agent2-cert.pem')
    };

    https.createServer(options, (request, response) => {
        response.writeHead(200);
        response.end('hello world 1\n');
    }).listen(8000);
    // - - - - -
}

// Example 2
if (EXAMPLES[2]) {
    // - - - - -
    const options = {
        pfx: fs.readFileSync('fixtures/test_cert.pfx'),
        passphrase: 'sample'
    };

    https.createServer(options, (request, response) => {
        response.writeHead(200);
        response.end('hello world 2\n');
    }).listen(8000);
    // - - - - -
}

// Example 3
if (EXAMPLES[3]) {
    // - - - - -
    https.get('https://www.google.com/', (response) => {
        console.log('statusCode:', response.statusCode);
        console.log('headers:', response.headers);

        response.on('data', (d) => {
            process.stdout.write(d);
        });

    }).on('error', (e) => {
        console.error(e);
    });
    // - - - - -
}

if (EXAMPLES[4]) {
    // - - - - -
    const options = {
        hostname: 'encrypted.google.com',
        port: 443,
        path: '/',
        method: 'GET'
    };

    const request = https.request(options, (response) => {
        console.log('statusCode:', response.statusCode);
        console.log('headers:', response.headers);

        response.on('data', (d) => {
            process.stdout.write(d);
        });
    });

    request.on('error', (e) => {
        console.error(e);
    });
    request.end();
    // - - - - -
}

if (EXAMPLES[5]) {
    // - - - - -
    const options = {
        hostname: 'encrypted.google.com',
        port: 443,
        path: '/',
        method: 'GET',
        key: fs.readFileSync('fixtures/keys/agent2-key.pem'),
        cert: fs.readFileSync('fixtures/keys/agent2-cert.pem')
    };
    options.agent = new https.Agent(options);

    const request = https.request(options, (response) => {
        console.log('statusCode:', response.statusCode);
        console.log('headers:', response.headers);

        response.on('data', (d) => {
            process.stdout.write(d);
        });
    });

    request.on('error', (e) => {
        console.error(e);
    });
    request.end();
    // - - - - -
}

if (EXAMPLES[6]) {
    // - - - - -
    function sha256(s) {
        return crypto.createHash('sha256').update(s).digest('base64');
    }

    const options = {
        hostname: 'github.com',
        port: 443,
        path: '/',
        method: 'GET',
        checkServerIdentity: function (host, cert) {
            // Make sure the certificate is issued to the host we are connected to
            const err = tls.checkServerIdentity(host, cert);
            if (err) {
                return err;
            }

            // Pin the public key, similar to HPKP pin-sha25 pinning
            const pubkey256 = 'pL1+qb9HTMRZJmuC/bB/ZI9d302BYrrqiVuRyW+DGrU=';

            if (sha256(cert.pubkey) !== pubkey256) {
                const msg = 'Certificate verification error: ' +
                    `The public key of '${cert.subject.CN}' ` +
                    'does not match our pinned fingerprint';
                return new Error(msg);
            }

            // Pin the exact certificate, rather then the pub key
            const cert256 = '25:FE:39:32:D9:63:8C:8A:FC:A1:9A:29:87:' +
                'D8:3E:4C:1D:98:DB:71:E4:1A:48:03:98:EA:22:6A:BD:8B:93:16';

            if (cert.fingerprint256 !== cert256) {
                const msg = 'Certificate verification error: ' +
                    `The certificate of '${cert.subject.CN}' ` +
                    'does not match our pinned fingerprint';
                return new Error(msg);
            }

            // This loop is informational only.
            // Print the certificate and public key fingerprints of all certs in the
            // chain. Its common to pin the public key of the issuer on the public
            // internet, while pinning the public key of the service in sensitive
            // environments.
            do {
                console.log('Subject Common Name:', cert.subject.CN);
                console.log('  Certificate SHA256 fingerprint:', cert.fingerprint256);

                hash = crypto.createHash('sha256');
                console.log('  Public key ping-sha256:', sha256(cert.pubkey));

                lastprint256 = cert.fingerprint256;
                cert = cert.issuerCertificate;
            } while (cert.fingerprint256 !== lastprint256);

        },
    };

    options.agent = new https.Agent(options);

    const request = https.request(options, (response) => {
        console.log('All OK. Server matched our pinned cert or public key');
        console.log('statusCode:', response.statusCode);
        // Print the HPKP values
        console.log('headers:', response.headers['public-key-pins']);

        response.on('data', (d) => {});
    });

    request.on('error', (e) => {
        console.error(e.message);
    });
    request.end();
    // - - - - -
}