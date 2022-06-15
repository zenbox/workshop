
const http = require('http');
const fs = require('fs');
const cheerio = require('cheerio');

const url = 'data.html';

let host = 'http://localhost',
    port = 3000,
    server = null;

http.get();