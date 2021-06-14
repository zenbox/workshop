/** Crypto with nodejs
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2019-12-11
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2019 Michael Reichart, Cologne
 */
'use strict'

let
    crypto = require('crypto'),
    algorithm = 'aes-192-cbc',
    password = 'Password to generate a key',
    salt = 'toosalty',
    key, iv, cipher, decipher, encrypted = '',
    decrypted;

key = crypto.scryptSync(password, salt, 24);
iv = Buffer.alloc(16, 0);

// Cipher
cipher = crypto.createCipheriv(algorithm, key, iv);

cipher.on('readable', function () {
    let chunk;
    while (null !== (chunk = cipher.read())) {
        encrypted += chunk.toString('hex');
    }
})

cipher.on('end', () => {
    console.log(encrypted);
})

cipher.write('Cras justo odio, dapibus ac facilisis in, egestas eget quam.');
cipher.write('Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.');
cipher.end();

// Decipher
decipher = crypto.createDecipheriv(algorithm, key, iv);

decipher.on('readable', () => {
    while (null !== (chunk = decipher.read())) {
        decrypted += chunk.toString('utf8');
    }
});

decipher.on('end', () => {
    console.log(decrypted);
});

// decipher.write(encrypted, 'hex');
// decipher.end();


// Example 2
// Cipher
cipher = crypto.createCipheriv(algorithm, key, iv);
encrypted = cipher.update('some clear text data', 'utf8', 'hex');
encrypted += cipher.final('hex');
console.log(encrypted);

// Decipher
decipher = crypto.createDecipheriv(algorithm, key, iv);
decrypted = decipher.update(encrypted, 'hex', 'utf8');
decrypted += decipher.final('utf8');
console.log(decrypted);