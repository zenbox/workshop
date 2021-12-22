/** Search class
 *
 * @package Webapplication
 * @module 
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2021-12-22
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2021 Michael Reichart, Cologne
 */

const {
    Db
} = require('./classes/Db.js');

class Search extends Db {

    constructor(k = undefined) {
        super(); // Parent class constructor!
        this._db = this.createConnection();
        this._keyword = k;

        this._result = this.queryByWord(k);
        return this._result;
    }

    setKeyword(k) {
        this._keword = k;
    }
    getKeyword() {
        if (!this._keyword) return;
        return this._keyword;
    }

}

module.exports.Search = Search;

// Common JS - Imports!
// index.js: import {Search} from './classes/Search.js';
// let result = new Search('word');

// search.keyword -> getKeyword()