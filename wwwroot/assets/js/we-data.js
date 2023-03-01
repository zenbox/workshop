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
    constructor(dataContext) {
        this.dataContext = dataContext;
    }

    getTemplateTable() {
        this.templateTable =
            document.querySelector("template").content.children[0];
    }

    setDatapoint(dataIndex, datapoint) {
        let nValue = datapoint.value,
            sUnit = datapoint.unit;

        let oValueField = this.templateTable.querySelector(
                `[data-value="${dataIndex}"]`
            ),
            oUnitField = this.templateTable.querySelector(
                `[data-unit="${dataIndex}"]`
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

    // Data ...
    let dataIndex = 1,
        dataContext = "#we-2";

    let oTableBuilder = new TableBuilder(dataContext);

    oTableBuilder.getTemplateTable();

    data.forEach((datapoint) => {
        oTableBuilder.setDatapoint(dataIndex, datapoint);
        dataIndex++;
    });

    // Prototyping
    // console.log(document.importNode(document.querySelector("template").content))

    let myTable = $(document.querySelector("template").content).children();

    myTable.find("[data-value]").addClass("selected");

    myTable.appendTo("#we-3");

    // let children = $("table").children("")
    // children.addClass("selected")
    // children.appendTo("#we-4")

    // - - - - - - - - - -
});
