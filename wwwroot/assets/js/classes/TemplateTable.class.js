export default class TemplateTable {
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
