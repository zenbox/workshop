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

class DataGenerator {
    constructor() {
        return true;
    }

    /**
     * @desc    Generates a random value between 0 and 9999
     * @returns {number}
     */
    fnCreateDatapointValue() {
        let nValue = undefined;
        nValue = Math.round(Math.random() * 9999);

        return nValue;
    }

    fnUpdateDatapointValue() {}

    /**
     * @desc    Set any datapoint into a grid table
     * @param   {object} datapoint - contains grid infos and an optional value
     * @returns {void}
     */
    fnSetDatapoint(datapoint) {
        let nSection = datapoint.section,
            nRow = datapoint.row,
            nValue = datapoint.value,
            sDescription = datapoint.description;

        if (nValue === undefined) {
            nValue = this.fnCreateDatapointValue();
        }
        /* 
            #we-${nSection}
                tbody
                    > tr:nth-child(${nRow})
                        > td:first-child 
        */

        document.querySelector(
            `#we-${nSection} tbody>tr:nth-child(${nRow})>td:first-child`
        ).textContent = nValue;

        // $(
        //     `#we-${nSection} tbody>tr:nth-child(${nRow})>td:first-child`
        // ).text(nValue);
    }
}

// PROCESS
// - - - - - - - - - -
$(document).ready(() => {
    "use strict";
    // - - - - - - - - - -

    // DECLARATION
    let oGenerator = new DataGenerator();

    // CONTROLS
    for (let section = 1; section <= 1; section++) {
        for (let row = 1; row <= 3; row++) {
            oGenerator.fnSetDatapoint({
                description: "Stück",
                value: undefined,
                section: section,
                row: row,
            });
        }
    }

    // - - - - - - - - - -
});
