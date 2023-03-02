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
     * @desc    Set any oDatapoint into a grid table
     * @param   {object} oDatapoint - contains grid infos and an optional value
     * @returns {void}
     */
    fnSetDatapoint(oDatapoint) {
        let nSection = oDatapoint.section,
            nRow = oDatapoint.row,
            nValue = oDatapoint.value,
            sDescription = oDatapoint.description;

        if (nValue === undefined) {
            nValue = this.fnCreateDatapointValue();
        }

        document.querySelector(
            `#we-${nSection} [data-value="${nRow}"]`
        ).textContent = nValue;

        document.querySelector(
            `#we-${nSection} [data-unit="${nRow}"]`
        ).textContent = sDescription;

        // $(`#we-${nSection} [data-value=${nRow}]`).text(nValue);
        // $(`#we-${nSection} [data-unit=${nRow}]`).text(sDescription);
    }
}

class TableBuilder {
    constructor(sDataContext) {
        this.sDataContext = sDataContext;
    }

    fnGetTemplateTable() {
        this.templateTable =
            document.querySelector("template").content.children[0];
    }

    fnSetTemplateTable() {
        document
            .querySelector(this.sDataContext)
            .appendChild(this.templateTable);
    }

    fnSetDatapoint(nDataIndex, oDatapoint) {
        let nValue = oDatapoint.value,
            sUnit = oDatapoint.unit;

        let oValueField = this.templateTable.querySelector(
                `[data-value="${nDataIndex}"]`
            ),
            oUnitField = this.templateTable.querySelector(
                `[data-unit="${nDataIndex}"]`
            );

        oValueField.textContent = nValue;
        oUnitField.textContent = sUnit;
    }
}

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
        sDataContext = "#we-4";

    let oTableBuilder = new TableBuilder(sDataContext);

    oTableBuilder.fnGetTemplateTable();

    data.forEach((oDatapoint) => {
        oTableBuilder.fnSetDatapoint(nDataIndex, oDatapoint);
        nDataIndex++;
    });

    oTableBuilder.fnSetTemplateTable();
    // - - - - - - - - - -
});
