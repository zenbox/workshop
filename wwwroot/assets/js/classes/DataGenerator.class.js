export default class DataGenerator {
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
