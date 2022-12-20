/** My Example
 *
 * @package Webapplication
 * @module My Example Class
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2022-12-20
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */
class Interface { }

export default class Time {
    static getAsDateMonth(timestamp) {
        return value;
    }
}

import Time from "./Time";

class Helicopter {
    constructor(type = "XYZ123") {
        this.type = type;
    }

    getTotalTime() {
        let db = new mySql.connect();

        let result = db.query(
            `SELECT SUM(time) FROM Helicpter WHERE Kennung='${this.type}'`
        );

        db.close();

        totalTime = Time.getAsDateMonth(timestamp);

        return totalTime;
    }
    
    setAnotherTimestamp() { }

    setTimestamp() {
        try {
            let db = new mySql.connect();

            let result = db.query(
                `INSERT INTO Helicopter SET time="" WHERE Kennung='${this.type}'`
            );

            db.close();
            return true;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

// /**
//  * @desc    setValue
//  * @param   {type} desc
//  * @returns {boolean}
//  */
// setValue (a = undefined) {
//  try {
//  // - - -
//    let a

//    return true
//  // - - -
//  } catch (error) {
//    console.log("setValue error.", error.message, error.name)

//    return undefined
//  }
// }

class User {
    contructor(name = undefined) {
        // Public property
        this.name = name;
    }

    // Public method
    changeName(name = "Karl Heinz") {
        this.name = name;
    }
}

// Process
myHeli = new Helicopter();
let totalTime = myHeli.getTotalTime();
