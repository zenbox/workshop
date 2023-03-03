/** WE Data
 *
 * @package Webapplication
 * @module Data
 * @author Michael <michael.reichart@gfu.net>
 * @version v1.0.0
 * @since 2023-03-01
 * @see i.e. inspired by ... {link to}
 * @license MIT {https://opensource.org/licenses/MIT}
 * @copyright (c) 2023 Michael Reichart, Cologne
 */

import DataGenerator from "./classes/DataGenerator.class.js";
import TemplateTable from "./classes/TemplateTable.class.js";

const dataset = [];

let data = (dataset[0] = [
    { value: 1234, unit: "LE" },
    { value: 376, unit: "POS" },
    { value: 5129, unit: "STK" },
]);

// PROCESS
// - - - - - - - - - -
$(document).ready(() => {
    "use strict";
    // - - - - - - - - - -

    // DECLARATION
    let oGenerator = new DataGenerator();

    // CONTROLS
    // for (let section = 1; section <= 1; section++) {
    //     for (let row = 1; row <= 3; row++) {
    //         oGenerator.fnSetDatapoint({
    //             description: "Stück",
    //             value: undefined,
    //             section: section,
    //             row: row,
    //         });
    //     }
    // }

    // Data ...
    let nDataIndex = 1,
        sDataContext = "#we-3";

    let oTableBuilder = new TemplateTable(sDataContext);

    oTableBuilder.fnGetTemplateTable();

    data.forEach((oDatapoint) => {
        oTableBuilder.fnSetDatapoint(nDataIndex, oDatapoint);
        nDataIndex++;
    });

    oTableBuilder.fnSetTemplateTable();

    $("p").closable();

    // let collection = document.querySelectorAll("p");
    // collection.forEach((element) => {
    //     element.closable();
    // });

    // - - - - - - - - - -
});
