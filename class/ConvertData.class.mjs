/**
 * @desc      ConvertData - converts between JSON, XML and CSV
 *            from local and remote data sources
 * @package   Webapplication
 * @module    ConvertData
 * @author    Michael <michael.reichart@gfu.net>
 * @version   v1.0.0
 * @since     2022-11-29
 * @license   MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2022 Michael Reichart, Cologne
 */
import fs from "fs";
import path from "path";

export default class ConvertData {
    // - - -

    /**
     * @desc    constructor
     * @returns {boolean}
     */
    constructor() {
        try {
            // - - -
            // this.init(file);
            // - - -
        } catch (error) {
            console.log("constructor error.", error.message, error.name);
            return undefined;
        }
    }

    init(file) {
        this.extension = this.getType(file);
        this.filename = this.getFilename(file);
        this.keys = [];
    }

    getType(file) {
        let _extension = path.extname(file);

        switch (_extension) {
            default:
                return undefined;
                break;
            case ".csv":
            case ".json":
            case ".html":
                return _extension;
                break;
        }
    }

    getFilename(file) {
        return path.basename(file);
    }

    setKeys(line) {
        line.split(",").forEach((key) => {
            this.keys.push(key.trim());
        });

        return this.keys
    }

    addValues(line) {
        let obj = {},
            index = 0;

        line.split(",").forEach((value) => {
            obj[this.keys[index++]] = value;
        });

        return obj;
    }

    toJson(data) {
        this.init(file);

        let flag = 0,
            json = [];

        data.split("\n").forEach((line) => {
            if (flag === 0) {
                this.setKeys(line);
                flag++;
            } else {
                json.push(this.addValues(line));
            }
        });
        return json;
    }

    /**
     * @desc    add some numbers as integer or float
     *          but not strings!
     * @param   {number} a - integer, float (signed)
     * @param   {number} b - integer, float (signed)
     * @returns {number}
     */
    add(a, b) {
        try {
            if (typeof a === "number" && typeof b === "number") {
                return a + b;
            }
            return undefined;
        } catch (error) {
            return undefined;
        }
    }
}

/*
    name, prename, code, location
    Mair, Michael, 60987, Musterstadt
    Leer, Lisa,  56987, Leibingen
    Kerle, Klaus, 43789, Katerling
*/
let convert = new ConvertData(),
    file = "data/data.csv";

fs.readFile(file, (error, data) => {
    if (error) console.log(error);
    data = data.toString();
    let json = convert.toJson(data);

    // console.log("READY:", json);
});



// if ( a === undefined) { }