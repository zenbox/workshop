"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * an node app with typescript
 */
var express = __importStar(require("express"));
var App = /** @class */ (function () {
    function App() {
        this.app = express.default();
        this.mountRoutes();
    }
    App.prototype.mountRoutes = function () {
        var router = express.Router();
        router.get('/', function (request, response) {
            response.json({ message: 'Hello World' });
        });
        this.app.use('/', router);
    };
    return App;
}());
exports.default = new App().app;
