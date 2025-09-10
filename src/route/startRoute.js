/**
 *
 * @package Webapplication
 * @module ROUTES
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2025-09-08
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2025 Michael Reichart, Cologne
 */

import express from "express";
const startRoute = express.Router();

startRoute.get("/", (request, response) => {
    // render uses the views-folder: view
    // "start" is the filename of an ejs template
    /* JSON:
    
    Common JavaScript Object Notation:
    {
       "string"  : "value",
       "bool"    : true,
       "number1" : 123,
       "number2" : 3.1415,

       "object"  : { "key": "value", "number": 123 },
       "array"   : [ 1, "two", "3" ]
    }

    
     JS-specific JSON:
{
       string  : "value",
       bool    : true,
       number1 : 123,
       number2 : 3.1415,

       object  : { "key": "value", "number": 123 },
       array   : [ 1, "two", "3" ],
       fn      : function () {},
       afn     : () => {}
    }

    */
    response.render("start", {
        "title": "Startseite",
        "message": "Hello World!",
        "fn": function () {
            console.log("embedded function");
        },
        "fn-1": () => {
            console.log("yeah");
        },
    });
});

export default startRoute;
