"use strict";
/**
 * a node application
 */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var App_1 = __importDefault(require("./App")); // let app = require('./App')
var port = process.env.PORT || 3001;
App_1.default.listen(port, function (error) {
    if (error)
        return console.log(error);
    return console.log("Server is running on port " + port);
});
