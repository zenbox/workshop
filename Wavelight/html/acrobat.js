//-------------------------------------------------------------
//-----------------Bearbeiten Sie nicht die XML-Tags--------------------
//-------------------------------------------------------------

//<Document-Level>
//<ACRO_source>onOpen</ACRO_source>
//<ACRO_script>
/*********** gehört zu: Document-Level:onOpen ***********/
// Brings up following message, when Document is opened.
// And sets the Service Request No. field on focus, when document is opened.
if ((this.getField("1.1.5").value == "") || (this.getField("1.1.5").readonly == false)) {
    app.alert("You have to fill out the Case/Service Request before you can edit the document.", 3);
    this.getField("1.1.5").setFocus()
}

// Sets the Related Service Report field on focus, when Service Request No. field is filled.
if (this.getField("1.1.5").value != "" && this.getField("1.1.5").readonly == true && this.getField("1.1.6").value == "") {
    app.alert("You have to fill out the Related Service Report before you can edit the document.", 3);
    this.getField("1.1.6").setFocus()
}



//</ACRO_script>
//</Document-Level>

//<AcroForm>
//<ACRO_source>1.1.10_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.1.10_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("1.1.10_cb").value;
var cb2 = getField("1.1.11_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.1.10_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.1.10_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("1.1.10_cb").value;
var txt = getField("1.1.10_comment");

if (cb !== "Off") {
    txt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.1.11_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.1.11_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("1.1.11_cb").value;
var cb2 = getField("1.1.10_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.1.11_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.1.11_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("1.1.11_cb").value;
var txt = getField("1.1.10_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.1.5:Annot1:OnFocus:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.1.5:Annot1:OnFocus:Action1 ***********/
event.target.strokeColor = color.green

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.1.5:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.1.5:Annot1:OnBlur:Action1 ***********/
event.target.strokeColor = color.transparent
if (event.target.readonly == false) {
    if (event.target.value == "") {
        app.alert("You must enter and verify a Case/Service Request before you can edit the document.")
        this.getField("1.1.5").setFocus()
    } else {
        this.getField("SRN confirm text").hidden = false
        this.getField("SRN cancel").hidden = false
        this.getField("SRN verify").hidden = false
        this.getField("SRN verify").setFocus()
    }
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.1.6:Annot1:OnFocus:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.1.6:Annot1:OnFocus:Action1 ***********/
event.target.strokeColor = color.green
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.1.6:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.1.6:Annot1:OnBlur:Action1 ***********/
event.target.strokeColor = color.transparent
if (event.target.readonly == false && this.getField("1.1.5").readonly == true) {
    if (event.target.value == "") {
        app.alert("You must enter and verify a Related Service Report before you can edit the document..")
        this.getField("1.1.6").setFocus()
    } else {
        this.getField("RSR confirm text").hidden = false
        this.getField("RSR cancel").hidden = false
        this.getField("RSR verify").hidden = false
        this.getField("RSR verify").setFocus()
    }
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.1.7:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.1.7:Annot1:OnBlur:Action1 ***********/
//Installation,Service
var one = this.getField('1.1.7');
var two = this.getField('3.1.1_cb');
var txt2 = getField("3.1.2_cb");
var txt3 = getField("3.1.3_cb");
var txt4 = getField("3.1.4_cb");
var cmt1 = getField("3.1.1_comment");
var cmt2 = getField("3.1.2_comment");
var cmt3 = getField("3.1.3_comment");
var cmt4 = getField("3.1.4_comment");

if (one.value == 'Service') {
    two.checkThisBox(0, true);
    two.readonly = true;
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    cmt1.value = 'No Installation';
    cmt1.readonly = true;
    cmt2.value = 'N/A';
    cmt2.readonly = true;
    cmt3.value = 'N/A';
    cmt3.readonly = true;
    cmt4.value = 'N/A';
    cmt4.readonly = true;
} else {
    two.checkThisBox(0, false);
    two.readonly = false;
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    cmt1.value = 'N/A';
    cmt1.readonly = false;
    cmt2.value = '';
    cmt2.readonly = false;
    cmt3.value = '';
    cmt3.readonly = false;
    cmt4.value = '';
    cmt4.readonly = false;
}


var one = this.getField('1.1.7');
var two = this.getField('3.2.1_cb');
var txt2 = getField("3.2.2_cb");
var txt3 = getField("3.2.3_cb");
var txt4 = getField("3.2.4_cb");
var txt5 = getField("3.2.5_cb");
var txt6 = getField("3.2.6_cb");
var txt7 = getField("3.2.7_cb");
var txt8 = getField("3.2.8_cb");
var txt9 = getField("3.2.9_cb");
var txt10 = getField("3.2.10_cb");
var txt11 = getField("3.2.11_cb");
var txt12 = getField("3.2.12_cb");
var cmt1 = getField("3.2.1_comment");
var cmt2 = getField("3.2.2_comment");
var cmt3 = getField("3.2.3_comment");
var cmt4 = getField("3.2.4_comment");
var cmt5 = getField("3.2.5_comment");
var cmt6 = getField("3.2.6_comment");
var cmt7 = getField("3.2.7_comment");
var cmt8 = getField("3.2.8_comment");
var cmt9 = getField("3.2.9_comment");
var cmt10 = getField("3.2.10_comment");
var cmt11 = getField("3.2.11_comment");
var cmt12 = getField("3.2.12_comment");

if (one.value == 'Service') {
    two.checkThisBox(0, true);
    two.readonly = true;
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    txt5.display = display.hidden;
    txt6.display = display.hidden;
    txt7.display = display.hidden;
    txt8.display = display.hidden;
    txt9.display = display.hidden;
    txt10.display = display.hidden;
    txt11.display = display.hidden;
    txt12.display = display.hidden;
    cmt1.value = 'No Installation';
    cmt1.readonly = true;
    cmt2.value = 'N/A';
    cmt2.readonly = true;
    cmt3.value = 'N/A';
    cmt3.readonly = true;
    cmt4.value = 'N/A';
    cmt4.readonly = true;
    cmt5.value = 'N/A';
    cmt5.readonly = true;
    cmt6.value = 'N/A';
    cmt6.readonly = true;
    cmt7.value = 'N/A';
    cmt7.readonly = true;
    cmt8.value = 'N/A';
    cmt8.readonly = true;
    cmt9.value = 'N/A';
    cmt9.readonly = true;
    cmt10.value = 'N/A';
    cmt10.readonly = true;
    cmt11.value = 'N/A';
    cmt11.readonly = true;
    cmt12.value = 'N/A';
    cmt12.readonly = true;
} else {
    two.checkThisBox(0, false);
    two.readonly = false;
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt5.display = display.visible;
    txt6.display = display.visible;
    txt7.display = display.visible;
    txt8.display = display.visible;
    txt9.display = display.visible;
    txt10.display = display.visible;
    txt11.display = display.visible;
    txt12.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    txt5.value = false;
    txt6.value = false;
    txt7.value = false;
    txt8.value = false;
    txt9.value = false;
    txt10.value = false;
    txt11.value = false;
    txt12.value = false;
    cmt1.value = 'N/A';
    cmt1.readonly = false;
    cmt2.value = '';
    cmt2.readonly = false;
    cmt3.value = '';
    cmt3.readonly = false;
    cmt4.value = '';
    cmt4.readonly = false;
    cmt5.value = '';
    cmt5.readonly = false;
    cmt6.value = '';
    cmt6.readonly = false;
    cmt7.value = '';
    cmt7.readonly = false;
    cmt8.value = '';
    cmt8.readonly = false;
    cmt9.value = '';
    cmt9.readonly = false;
    cmt10.value = '';
    cmt10.readonly = false;
    cmt11.value = '';
    cmt11.readonly = false;
    cmt12.value = '';
    cmt12.readonly = false;
}


var one = this.getField('1.1.7');
var two = this.getField('3.3.1_cb');
var cb = getField("3.3.1_cb").value;
var txt2 = getField("3.3.2_cb");
var txt3 = getField("3.3.3_cb");
var txt4 = getField("3.3.4_cb");
var txt5 = getField("3.3.5_cb");
var txt6 = getField("3.3.6_cb");
var cmt1 = getField("3.3.1_comment");
var cmt2 = getField("3.3.2_comment");
var cmt3 = getField("3.3.3_comment");
var cmt4 = getField("3.3.4_comment");
var cmt5 = getField("3.3.5_comment");
var cmt6 = getField("3.3.6_comment");

if (one.value == 'Service') {
    two.checkThisBox(0, true);
    two.readonly = true;
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    txt5.display = display.hidden;
    txt6.display = display.hidden;
    cmt1.value = 'No Installation';
    cmt1.readonly = true;
    cmt2.value = 'N/A';
    cmt2.readonly = true;
    cmt3.value = 'N/A';
    cmt3.readonly = true;
    cmt4.value = 'N/A';
    cmt4.readonly = true;
    cmt5.value = 'N/A';
    cmt5.readonly = true;
    cmt6.value = 'N/A';
    cmt6.readonly = true;
} else {
    two.checkThisBox(0, false);
    two.readonly = false;
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt5.display = display.visible;
    txt6.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    txt5.value = false;
    txt6.value = false;
    cmt1.value = 'N/A';
    cmt1.readonly = false;
    cmt2.value = '';
    cmt2.readonly = false;
    cmt3.value = '';
    cmt3.readonly = false;
    cmt4.value = '';
    cmt4.readonly = false;
    cmt5.value = '';
    cmt5.readonly = false;
    cmt6.value = '';
    cmt6.readonly = false;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.10_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.10_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.10_cb").value;
var txt = getField("1.3.10_companyID");
var date = getField("1.3.10_calibdate");
var cmt = getField("1.3.10_comment");

if (cb !== "Off") {
    txt.value = '';
    date.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    date.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.11_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.11_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.11_cb").value;
var txt = getField("1.3.11_companyID");
// var date = getField("1.3.11_calibdate");
var cmt = getField("1.3.11_comment");

if (cb !== "Off") {
    txt.value = '';
    // date.value='';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    // date.value='N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.12_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.12_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.12_cb").value;
var txt = getField("1.3.12_companyID");
var date = getField("1.3.12_calibdate");
var cmt = getField("1.3.12_comment");

if (cb !== "Off") {
    txt.value = '';
    date.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    date.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.13_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.13_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.13_cb").value;
var txt = getField("1.3.13_companyID");
var date = getField("1.3.13_calibdate");
var cmt = getField("1.3.13_comment");

if (cb !== "Off") {
    txt.value = '';
    date.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    date.value = 'N/A';
    cmt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.13_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.13_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("1.3.13_cb").value;
var txt = getField("1.3.13_description");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.14_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.14_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.14_cb").value;
var txt = getField("1.3.14_companyID");
var date = getField("1.3.14_calibdate");
var cmt = getField("1.3.14_comment");

if (cb !== "Off") {
    txt.value = '';
    date.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    date.value = 'N/A';
    cmt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.14_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.14_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("1.3.14_cb").value;
var txt = getField("1.3.14_description");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.1_checkbox:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.1_checkbox:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.1_checkbox").value;
var txt = getField("1.3.1_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.2_cb").value;
var txt = getField("1.3.2_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.2_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.2_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("1.3.2_cb").value;
var cb3 = getField("1.3.3_cb");
var cb4 = getField("1.3.4_cb");
var cb5 = getField("1.3.5_cb");
var cb6 = getField("1.3.6_cb");
var cb7 = getField("1.3.7_cb");
var cb8 = getField("1.3.8_cb");
var cb9 = getField("1.3.9_cb");
var cb10 = getField("1.3.10_cb");
var cb11 = getField("1.3.11_cb");
var cb12 = getField("1.3.12_cb");
var cb13 = getField("1.3.13_cb");
var cb14 = getField("1.3.14_cb");
var txt3 = getField("1.3.3_companyID");
var txt4 = getField("1.3.4_companyID");
var txt5 = getField("1.3.5_companyID");
var txt6 = getField("1.3.6_companyID");
var txt7 = getField("1.3.7_companyID");
var txt8 = getField("1.3.8_companyID");
var txt9 = getField("1.3.9_companyID");
var txt10 = getField("1.3.10_companyID");
var txt11 = getField("1.3.11_companyID");
var txt12 = getField("1.3.12_companyID");
var txt13 = getField("1.3.13_companyID");
var txt14 = getField("1.3.14_companyID");
var date3 = getField("1.3.3_calibdate");
var date4 = getField("1.3.4_calibdate");
var date5 = getField("1.3.5_calibdate");
var date6 = getField("1.3.6_calibdate");
var date7 = getField("1.3.7_calibdate");
var date8 = getField("1.3.8_calibdate");
var date9 = getField("1.3.9_calibdate");
var date10 = getField("1.3.10_calibdate");
// var date11 = getField("1.3.11_calibdate");
var date12 = getField("1.3.12_calibdate");
var date13 = getField("1.3.13_calibdate");
var date14 = getField("1.3.14_calibdate");
var cmt3 = getField("1.3.3_comment");
var cmt4 = getField("1.3.4_comment");
var cmt5 = getField("1.3.5_comment");
var cmt6 = getField("1.3.6_comment");
var cmt7 = getField("1.3.7_comment");
var cmt8 = getField("1.3.8_comment");
var cmt9 = getField("1.3.9_comment");
var cmt10 = getField("1.3.10_comment");
var cmt11 = getField("1.3.11_comment");
var cmt12 = getField("1.3.12_comment");
var cmt13 = getField("1.3.13_comment");
var cmt14 = getField("1.3.14_comment");
var desc13 = this.getField("1.3.13_description");
var desc14 = this.getField("1.3.14_description");

if (cb !== "Off") {
    cb3.display = display.hidden;
    cb4.display = display.hidden;
    cb5.display = display.hidden;
    cb6.display = display.hidden;
    cb7.display = display.hidden;
    cb8.display = display.hidden;
    cb9.display = display.hidden;
    cb10.display = display.hidden;
    cb11.display = display.hidden;
    cb12.display = display.hidden;
    cb13.display = display.hidden;
    cb14.display = display.hidden;
    txt3.value = 'N/A';
    txt4.value = 'N/A';
    txt5.value = 'N/A';
    txt6.value = 'N/A';
    txt7.value = 'N/A';
    txt8.value = 'N/A';
    txt9.value = 'N/A';
    txt10.value = 'N/A';
    txt11.value = 'N/A';
    txt12.value = 'N/A';
    txt13.value = 'N/A';
    txt14.value = 'N/A';
    date3.value = 'N/A';
    date4.value = 'N/A';
    date5.value = 'N/A';
    date6.value = 'N/A';
    date7.value = 'N/A';
    date8.value = 'N/A';
    date9.value = 'N/A';
    date10.value = 'N/A';
    // date11.value='N/A';
    date12.value = 'N/A';
    date13.value = 'N/A';
    date14.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
    cmt5.value = 'N/A';
    cmt6.value = 'N/A';
    cmt7.value = 'N/A';
    cmt8.value = 'N/A';
    cmt9.value = 'N/A';
    cmt10.value = 'N/A';
    cmt11.value = 'N/A';
    cmt12.value = 'N/A';
    cmt13.value = 'N/A';
    cmt14.value = 'N/A';
    desc13.value = 'N/A';
    desc14.value = 'N/A';
} else {
    cb3.display = display.visible;
    cb4.display = display.visible;
    cb5.display = display.visible;
    cb6.display = display.visible;
    cb7.display = display.visible;
    cb8.display = display.visible;
    cb9.display = display.visible;
    cb10.display = display.visible;
    cb11.display = display.visible;
    cb12.display = display.visible;
    cb13.display = display.visible;
    cb14.display = display.visible;
    txt3.value = 'N/A';
    txt4.value = 'N/A';
    txt5.value = 'N/A';
    txt6.value = 'N/A';
    txt7.value = 'N/A';
    txt8.value = 'N/A';
    txt9.value = 'N/A';
    txt10.value = 'N/A';
    txt11.value = 'N/A';
    txt12.value = 'N/A';
    txt13.value = 'N/A';
    txt14.value = 'N/A';
    date3.value = 'N/A';
    date4.value = 'N/A';
    date5.value = 'N/A';
    date6.value = 'N/A';
    date7.value = 'N/A';
    date8.value = 'N/A';
    date9.value = 'N/A';
    date10.value = 'N/A';
    // date11.value='N/A';
    date12.value = 'N/A';
    date13.value = 'N/A';
    date14.value = 'N/A';
    cb3.value = false;
    cb4.value = false;
    cb5.value = false;
    cb6.value = false;
    cb7.value = false;
    cb8.value = false;
    cb9.value = false;
    cb10.value = false;
    cb11.value = false;
    cb12.value = false;
    cb13.value = false;
    cb14.value = false;
    cmt3.value = '';
    cmt4.value = '';
    cmt5.value = '';
    cmt6.value = '';
    cmt7.value = '';
    cmt8.value = '';
    cmt9.value = '';
    cmt10.value = '';
    cmt11.value = '';
    cmt12.value = '';
    cmt13.value = 'N/A';
    cmt14.value = 'N/A';
    desc13.value = 'N/A';
    desc14.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.3_cb").value;
var txt = getField("1.3.3_companyID");
var date = getField("1.3.3_calibdate");
var cmt = getField("1.3.3_comment");

if (cb !== "Off") {
    txt.value = '';
    date.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    date.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.4_cb").value;
var txt = getField("1.3.4_companyID");
var date = getField("1.3.4_calibdate");
var cmt = getField("1.3.4_comment");

if (cb !== "Off") {
    txt.value = '';
    date.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    date.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.5_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.5_cb").value;
var txt = getField("1.3.5_companyID");
var date = getField("1.3.5_calibdate");
var cmt = getField("1.3.5_comment");

if (cb !== "Off") {
    txt.value = '';
    date.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    date.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.6_cb").value;
var txt = getField("1.3.6_companyID");
var date = getField("1.3.6_calibdate");
var cmt = getField("1.3.6_comment");

if (cb !== "Off") {
    txt.value = '';
    date.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    date.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.7_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.7_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.7_cb").value;
var txt = getField("1.3.7_companyID");
var date = getField("1.3.7_calibdate");
var cmt = getField("1.3.7_comment");

if (cb !== "Off") {
    txt.value = '';
    date.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    date.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.8_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.8_cb").value;
var txt = getField("1.3.8_companyID");
var date = getField("1.3.8_calibdate");
var cmt = getField("1.3.8_comment");

if (cb !== "Off") {
    txt.value = '';
    date.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    date.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.3.9_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.3.9_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.3.9_cb").value;
var txt = getField("1.3.9_companyID");
var date = getField("1.3.9_calibdate");
var cmt = getField("1.3.9_comment");

if (cb !== "Off") {
    txt.value = '';
    date.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    date.value = 'N/A';
    cmt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.4.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.4.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.4.1_cb").value;
var txt = getField("1.4.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.4.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.4.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("1.4.1_cb").value;
var txt2 = getField("1.4.2_cb");
var txt3 = getField("1.4.3_cb");
var txt4 = getField("1.4.4_cb");
var txt5 = getField("1.4.5_cb");
var cmt2 = getField("1.4.2_comment");
var cmt3 = getField("1.4.3_comment");
var cmt4 = getField("1.4.4_comment");
var cmt5 = getField("1.4.5_comment");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    txt5.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
    cmt5.value = 'N/A';
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt5.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    txt5.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';
    cmt5.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.4.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.4.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.4.2_cb").value;
var txt = getField("1.4.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.4.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.4.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.4.3_cb").value;
var txt = getField("1.4.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.4.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.4.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.4.4_cb").value;
var txt = getField("1.4.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>1.4.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:1.4.5_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("1.4.5_cb").value;
var txt = getField("1.4.5_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>10.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:10.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("10.1.1_cb").value;
var txt = getField("10.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>10.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:10.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("10.1.1_cb").value;
var txt2 = getField("10.1.2_cb");
var txt3 = getField("10.1.3_NA");
var txt4 = getField("10.1.4_cb");
var txt5 = getField("10.1.5_NA");
var txt6 = getField("10.1.6_NA");
var txt7 = getField("10.1.7_NA");
var txt8 = getField("10.1.8_NA");
var cmt2 = getField("10.1.2_comment");
var cmt3 = getField("10.1.3_value");
var cmt4 = getField("10.1.4_comment");
var cmt5 = getField("10.1.5_value");
var cmt6 = getField("10.1.6_value");
var cmt7 = getField("10.1.7_value");
var cmt8 = getField("10.1.8_value");
var valo1 = getField("18.1.10");
var nao1 = getField("18.1.10_NA");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.visible;
    txt3.value = 'N/A';
    txt4.display = display.hidden;
    txt5.display = display.visible;
    txt5.value = 'N/A';
    txt6.display = display.visible;
    txt6.value = 'N/A';
    txt7.display = display.visible;
    txt7.value = 'N/A';
    txt8.display = display.visible;
    txt8.value = 'N/A';
    cmt2.value = 'N/A';
    cmt3.value = '1000';
    cmt3.display = display.hidden;
    cmt4.value = 'N/A';
    cmt5.value = '120';
    cmt5.display = display.hidden;
    cmt6.value = '484';
    cmt6.display = display.hidden;
    cmt7.value = '848';
    cmt7.display = display.hidden;
    cmt8.value = '1650';
    cmt8.display = display.hidden;
    valo1.display = display.hidden;
    nao1.display = display.visible;
} else {
    txt2.display = display.visible;
    txt4.display = display.visible;
    txt2.value = false;
    txt4.value = false;
    cmt2.value = '';
    cmt3.value = '1000';
    cmt4.value = '';
    cmt5.value = '120';
    cmt6.value = '484';
    cmt7.value = '848';
    cmt8.value = '1650';
    valo1.display = display.hidden;
    nao1.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>10.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:10.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("10.1.2_cb").value;
var txt = getField("10.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>10.1.2_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:10.1.2_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("10.1.2_cb").value;
var val = this.getField("10.1.3_value");
var na = this.getField("10.1.3_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
} else {
    val.display = display.hidden;
    val.value = "1000";
    na.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>10.1.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:10.1.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("10.1.4_cb").value;
var txt = getField("10.1.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>10.1.4_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:10.1.4_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("10.1.4_cb").value;
var va3 = this.getField("10.1.5_value");
var va4 = this.getField("10.1.6_value");
var va5 = this.getField("10.1.7_value");
var va6 = this.getField("10.1.8_value");
var na3 = this.getField("10.1.5_NA");
var na4 = this.getField("10.1.6_NA");
var na5 = this.getField("10.1.7_NA");
var na6 = this.getField("10.1.8_NA");
var valo1 = getField("18.1.10");
var nao1 = getField("18.1.10_NA");

if (cb !== "Off") {
    va3.display = display.visible;
    va3.value = '';
    va4.display = display.visible;
    va4.value = '';
    va5.display = display.visible;
    va5.value = '';
    va6.display = display.visible;
    va6.value = '';
    na3.display = display.hidden;
    na3.value = "N/A";
    na4.display = display.hidden;
    na4.value = "N/A";
    na5.display = display.hidden;
    na5.value = "N/A";
    na6.display = display.hidden;
    na6.value = "N/A";
    valo1.display = display.visible;
    nao1.display = display.hidden;
} else {
    va3.display = display.hidden;
    va3.value = '120';
    na3.display = display.visible;
    va4.display = display.hidden;
    va4.value = '484';
    na4.display = display.visible;
    va5.display = display.hidden;
    va5.value = '848';
    na5.display = display.visible;
    va6.display = display.hidden;
    va6.value = '1650';
    na6.display = display.visible;
    valo1.display = display.hidden;
    nao1.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.11_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.11_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.11_cb").value;
var txt = getField("11.1.11_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.12_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.12_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.12_cb").value;
var txt = getField("11.1.12_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.12_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.12_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("11.1.12_cb").value;
var va13 = this.getField("11.1.13_value");
var va14 = this.getField("11.1.14_value");
var na13 = this.getField("11.1.13_NA");
var na14 = this.getField("11.1.14_NA");
var valo14 = this.getField("18.1.14");
var nao14 = this.getField("18.1.14_NA");
var valo15 = this.getField("18.1.15");
var nao15 = this.getField("18.1.15_NA");

if (cb !== "Off") {
    va13.display = display.visible;
    va13.value = '';
    na13.display = display.hidden;
    na13.value = "N/A";
    va14.display = display.visible;
    va14.value = '';
    na14.display = display.hidden;
    na14.value = "N/A";
    valo14.display = display.visible;
    nao14.display = display.hidden;
    valo15.display = display.visible;
    nao15.display = display.hidden;
} else {
    va13.display = display.hidden;
    va13.value = "725";
    na13.display = display.visible;
    va14.display = display.hidden;
    va14.value = "725";
    na14.display = display.visible;
    valo14.display = display.hidden;
    nao14.display = display.visible;
    valo15.display = display.hidden;
    nao15.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.15_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.15_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.15_cb").value;
var txt = getField("11.1.15_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.15_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.15_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("11.1.15_cb").value;
var va16 = this.getField("11.1.16_value");
var va17 = this.getField("11.1.17_value");
var na16 = this.getField("11.1.16_NA");
var na17 = this.getField("11.1.17_NA");
var valo16 = this.getField("18.1.16");
var nao16 = this.getField("18.1.16_NA");
var valo17 = this.getField("18.1.17");
var nao17 = this.getField("18.1.17_NA");

if (cb !== "Off") {
    va16.display = display.visible;
    va16.value = '';
    na16.display = display.hidden;
    na16.value = "N/A";
    va17.display = display.visible;
    va17.value = '';
    na17.display = display.hidden;
    na17.value = "N/A";
    valo16.display = display.visible;
    nao16.display = display.hidden;
    valo17.display = display.visible;
    nao17.display = display.hidden;
} else {
    va16.display = display.hidden;
    va16.value = "725";
    na16.display = display.visible;
    va17.display = display.hidden;
    va17.value = "725";
    na17.display = display.visible;
    valo16.display = display.hidden;
    nao16.display = display.visible;
    valo17.display = display.hidden;
    nao17.display = display.visible;

}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.18_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.18_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.18_cb").value;
var txt = getField("11.1.18_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.18_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.18_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("11.1.18_cb").value;
var va3 = this.getField("11.1.19_value");
var va4 = this.getField("11.1.20_value");
var va5 = this.getField("11.1.21_value");
var va6 = this.getField("11.1.22_value");
var na3 = this.getField("11.1.19_NA");
var na4 = this.getField("11.1.20_NA");
var na5 = this.getField("11.1.21_NA");
var na6 = this.getField("11.1.22_NA");
var valo18 = this.getField("18.1.18");
var nao18 = this.getField("18.1.18_NA");

if (cb !== "Off") {
    va3.display = display.visible;
    va3.value = '';
    va4.display = display.visible;
    va4.value = '';
    va5.display = display.visible;
    va5.value = '';
    va6.display = display.visible;
    va6.value = '';
    na3.display = display.hidden;
    na3.value = "N/A";
    na4.display = display.hidden;
    na4.value = "N/A";
    na5.display = display.hidden;
    na5.value = "N/A";
    na6.display = display.hidden;
    na6.value = "N/A";
    valo18.display = display.visible;
    nao18.display = display.hidden;
} else {
    va3.display = display.hidden;
    va3.value = '0';
    na3.display = display.visible;
    va4.display = display.hidden;
    va4.value = '0';
    na4.display = display.visible;
    va5.display = display.hidden;
    va5.value = '0';
    na5.display = display.visible;
    va6.display = display.hidden;
    va6.value = '-0.70000';
    na6.display = display.visible;
    valo18.display = display.hidden;
    nao18.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.1_cb").value;
var txt = getField("11.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("11.1.1_cb").value;
var txt2 = getField("11.1.2_cb");
var txt3 = getField("11.1.3_cb");
var txt4 = getField("11.1.4_cb");
var txt5 = getField("11.1.5_NA");
var txt6 = getField("11.1.6_cb");
var txt7 = getField("11.1.7_NA");
var txt8 = getField("11.1.8_cb");
var txt9 = getField("11.1.9_cb");
var txt10 = getField("11.1.10_NA");
var txt11 = getField("11.1.11_cb");
var txt12 = getField("11.1.12_cb");
var txt13 = getField("11.1.13_NA");
var txt14 = getField("11.1.14_NA");
var txt15 = getField("11.1.15_cb");
var txt16 = getField("11.1.16_NA");
var txt17 = getField("11.1.17_NA");
var txt18 = getField("11.1.18_cb");
var txt19 = getField("11.1.19_NA");
var txt20 = getField("11.1.20_NA");
var txt21 = getField("11.1.21_NA");
var txt22 = getField("11.1.22_NA");
var txt23 = getField("11.1.23_cb");
var txt24a = getField("11.1.24a_NA");
var txt24b = getField("11.1.24b_NA");
var txt25a = getField("11.1.25a_NA");
var txt25b = getField("11.1.25b_NA");
var txt26 = getField("11.1.26_cb");
var txt27 = getField("11.1.27_cb");
var na27 = getField("11.1.27_NA");
var txt28 = getField("11.1.28_cb");
var txt29 = getField("11.1.29_cb");
var txt30 = getField("11.1.30_cb");
var txt31 = getField("11.1.31_cb");
var txt32 = getField("11.1.32_NA");
var txt33 = getField("11.1.33_NA");
var txt34 = getField("11.1.34_NA");
var txt35 = getField("11.1.35_NA");
var txt36 = getField("11.1.36_NA");
var txt37 = getField("11.1.37_NA");
var txt38 = getField("11.1.38_NA");
var txt39 = getField("11.1.39_NA");
var txt40 = getField("11.1.40_NA");
var txt41 = getField("11.1.41_NA");
var txt42 = getField("11.1.42_NA");
var txt43 = getField("11.1.43_NA");
var txt44 = getField("11.1.44_NA");
var txt45 = getField("11.1.45_NA");
var cmt2 = getField("11.1.2_comment");
var cmt3 = getField("11.1.3_comment");
var cmt4 = getField("11.1.4_comment");
var cmt5 = getField("11.1.5_value");
var cmt6 = getField("11.1.6_comment");
var cmt7 = getField("11.1.7_value");
var cmt8 = getField("11.1.8_comment");
var cmt9 = getField("11.1.9_comment");
var cmt10 = getField("11.1.10_value");
var cmt11 = getField("11.1.11_comment");
var cmt12 = getField("11.1.12_comment");
var cmt13 = getField("11.1.13_value");
var cmt14 = getField("11.1.14_value");
var cmt15 = getField("11.1.15_comment");
var cmt16 = getField("11.1.16_value");
var cmt17 = getField("11.1.17_value");
var cmt18 = getField("11.1.18_comment");
var cmt19 = getField("11.1.19_value");
var cmt20 = getField("11.1.20_value");
var cmt21 = getField("11.1.21_value");
var cmt22 = getField("11.1.22_value");
var cmt23 = getField("11.1.23_comment");
var cmt24a = getField("11.1.24a_value");
var cmt24b = getField("11.1.24b_value");
var cmt25a = getField("11.1.25a_value");
var cmt25b = getField("11.1.25b_value");
var cmt26 = getField("11.1.26_comment");
var cmt27 = getField("11.1.27_comment");
var val27 = getField("11.1.27_value");
var cmt28 = getField("11.1.28_comment");
var cmt29 = getField("11.1.29_comment");
var cmt30 = getField("11.1.30_comment");
var cmt31 = getField("11.1.31_comment");
var cmt32 = getField("11.1.32_value");
var cmt33 = getField("11.1.33_value");
var cmt34 = getField("11.1.34_value");
var cmt35 = getField("11.1.35_value");
var cmt36 = getField("11.1.36_value");
var cmt37 = getField("11.1.37_value");
var cmt38 = getField("11.1.38_value");
var cmt39 = getField("11.1.39_value");
var cmt40 = getField("11.1.40_value");
var cmt41 = getField("11.1.41_value");
var cmt42 = getField("11.1.42_value");
var cmt43 = getField("11.1.43_value");
var cmt44 = getField("11.1.44_value");
var cmt45 = getField("11.1.45_value");
var valo11 = getField("18.1.11");
var nao11 = getField("18.1.11_NA");
var valo12 = getField("18.1.12");
var nao12 = getField("18.1.12_NA");
var valo13 = getField("18.1.13");
var nao13 = getField("18.1.13_NA");
var valo14 = getField("18.1.14");
var nao14 = getField("18.1.14_NA");
var valo15 = getField("18.1.15");
var nao15 = getField("18.1.15_NA");
var valo16 = getField("18.1.16");
var nao16 = getField("18.1.16_NA");
var valo17 = getField("18.1.17");
var nao17 = getField("18.1.17_NA");
var valo18 = getField("18.1.18");
var nao18 = getField("18.1.18_NA");
var valo19a = getField("18.1.19a");
var nao19a = getField("18.1.19a_NA");
var valo19b = getField("18.1.19b");
var nao19b = getField("18.1.19b_NA");
var valo20a = getField("18.1.20a");
var nao20a = getField("18.1.20a_NA");
var valo20b = getField("18.1.20b");
var nao20b = getField("18.1.20b_NA");
var valo21 = getField("18.1.21");
var nao21 = getField("18.1.21_NA");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    txt5.display = display.visible;
    txt5.value = 'N/A';
    txt6.display = display.hidden;
    txt7.display = display.visible;
    txt7.value = 'N/A';
    txt8.display = display.hidden;
    txt9.display = display.hidden;
    txt10.display = display.visible;
    txt10.value = 'N/A';
    txt11.display = display.hidden;
    txt12.display = display.hidden;
    txt13.display = display.visible;
    txt13.value = 'N/A';
    txt14.display = display.visible;
    txt14.value = 'N/A';
    txt15.display = display.hidden;
    txt16.display = display.visible;
    txt16.value = 'N/A';
    txt17.display = display.visible;
    txt17.value = 'N/A';
    txt18.display = display.hidden;
    txt19.display = display.visible;
    txt19.value = 'N/A';
    txt20.display = display.visible;
    txt20.value = 'N/A';
    txt21.display = display.visible;
    txt21.value = 'N/A';
    txt22.display = display.visible;
    txt22.value = 'N/A';
    txt23.display = display.hidden;
    txt24a.display = display.visible;
    txt24a.value = 'N/A';
    txt24b.display = display.visible;
    txt24b.value = 'N/A';
    txt25a.display = display.visible;
    txt25a.value = 'N/A';
    txt25b.display = display.visible;
    txt25b.value = 'N/A';
    txt26.display = display.hidden;
    txt27.display = display.hidden;
    na27.display = display.visible;
    na27.value = 'N/A';
    txt28.display = display.hidden;
    txt29.display = display.hidden;
    txt30.display = display.hidden;
    txt31.display = display.hidden;
    txt32.display = display.visible;
    txt32.value = 'N/A';
    txt33.display = display.visible;
    txt33.value = 'N/A';
    txt34.display = display.visible;
    txt34.value = 'N/A';
    txt35.display = display.visible;
    txt35.value = 'N/A';
    txt36.display = display.visible;
    txt36.value = 'N/A';
    txt37.display = display.visible;
    txt37.value = 'N/A';
    txt38.display = display.visible;
    txt38.value = 'N/A';
    txt39.display = display.visible;
    txt39.value = 'N/A';
    txt40.display = display.visible;
    txt40.value = 'N/A';
    txt41.display = display.visible;
    txt41.value = 'N/A';
    txt42.display = display.visible;
    txt42.value = 'N/A';
    txt43.display = display.visible;
    txt43.value = 'N/A';
    txt44.display = display.visible;
    txt44.value = 'N/A';
    txt45.display = display.visible;
    txt45.value = 'N/A';
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
    cmt5.value = '0.05';
    cmt5.display = display.hidden;
    cmt6.value = 'N/A';
    cmt7.value = '2000';
    cmt7.display = display.hidden;
    cmt8.value = 'N/A';
    cmt9.value = 'N/A';
    cmt10.value = '2000';
    cmt10.display = display.hidden;
    cmt11.value = 'N/A';
    cmt12.value = 'N/A';
    cmt13.value = '725';
    cmt13.display = display.hidden;
    cmt14.value = '725';
    cmt14.display = display.hidden;
    cmt15.value = 'N/A';
    cmt16.value = '725';
    cmt16.display = display.hidden;
    cmt17.value = '725';
    cmt17.display = display.hidden;
    cmt18.value = 'N/A';
    cmt19.value = '0';
    cmt19.display = display.hidden;
    cmt20.value = '0';
    cmt20.display = display.hidden;
    cmt21.value = '0';
    cmt21.display = display.hidden;
    cmt22.value = '-0.7000';
    cmt22.display = display.hidden;
    cmt23.value = 'N/A';
    cmt24a.value = '0';
    cmt24a.display = display.hidden;
    cmt24b.value = '0';
    cmt24b.display = display.hidden;
    cmt25a.value = '0';
    cmt25a.display = display.hidden;
    cmt25b.value = '0';
    cmt25b.display = display.hidden;
    cmt26.value = 'N/A';
    cmt27.value = 'N/A';
    val27.value = '0';
    val27.display = display.hidden;
    cmt28.value = 'N/A';
    cmt29.value = 'N/A';
    cmt30.value = 'N/A';
    cmt31.value = 'N/A';
    cmt32.value = '725.00';
    cmt32.display = display.hidden;
    cmt33.value = '725';
    cmt33.display = display.hidden;
    cmt34.value = '65';
    cmt34.display = display.hidden;
    cmt35.value = '75';
    cmt35.display = display.hidden;
    cmt36.value = '0';
    cmt36.display = display.hidden;
    cmt37.value = '0';
    cmt37.display = display.hidden;
    cmt38.value = '0';
    cmt38.display = display.hidden;
    cmt39.value = '0';
    cmt39.display = display.hidden;
    cmt40.value = '0.02500';
    cmt40.display = display.hidden;
    cmt41.value = '0.000100';
    cmt41.display = display.hidden;
    cmt42.value = '0.03000';
    cmt42.display = display.hidden;
    cmt43.value = '0.000100';
    cmt43.display = display.hidden;
    cmt44.value = '1000';
    cmt44.display = display.hidden;
    cmt45.value = '1000';
    cmt45.display = display.hidden;
    valo11.display = display.hidden;
    nao11.display = display.visible;
    valo12.display = display.hidden;
    nao12.display = display.visible;
    valo13.display = display.hidden;
    nao13.display = display.visible;
    valo14.display = display.hidden;
    nao14.display = display.visible;
    valo15.display = display.hidden;
    nao15.display = display.visible;
    valo16.display = display.hidden;
    nao16.display = display.visible;
    valo17.display = display.hidden;
    nao17.display = display.visible;
    valo18.display = display.hidden;
    nao18.display = display.visible;
    valo19a.display = display.hidden;
    nao19a.display = display.visible;
    valo19b.display = display.hidden;
    nao19b.display = display.visible;
    valo20a.display = display.hidden;
    nao20a.display = display.visible;
    valo20b.display = display.hidden;
    nao20b.display = display.visible;
    valo21.display = display.hidden;
    nao21.display = display.visible;
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt6.display = display.visible;
    txt8.display = display.visible;
    txt9.display = display.visible;
    txt11.display = display.visible;
    txt12.display = display.visible;
    txt15.display = display.visible;
    txt18.display = display.visible;
    txt23.display = display.visible;
    txt26.display = display.visible;
    txt27.display = display.visible;
    txt28.display = display.visible;
    txt29.display = display.visible;
    txt30.display = display.visible;
    txt31.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    txt6.value = false;
    txt8.value = false;
    txt9.value = false;
    txt11.value = false;
    txt12.value = false;
    txt15.value = false;
    txt18.value = false;
    txt23.value = false;
    txt26.value = false;
    txt27.value = false;
    txt28.value = false;
    txt29.value = false;
    txt30.value = false;
    txt31.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';
    cmt5.value = '0.05';
    cmt6.value = '';
    cmt7.value = '2000';
    cmt8.value = '';
    cmt9.value = '';
    cmt10.value = '2000';
    cmt11.value = '';
    cmt12.value = '';
    cmt13.value = '725';
    cmt14.value = '725';
    cmt15.value = '';
    cmt16.value = '725';
    cmt17.value = '725';
    cmt18.value = '';
    cmt19.value = '0';
    cmt20.value = '0';
    cmt21.value = '0';
    cmt22.value = '-0.7000';
    cmt23.value = '';
    cmt24a.value = '0';
    cmt24b.value = '0';
    cmt25a.value = '0';
    cmt25b.value = '0';
    cmt26.value = '';
    cmt27.value = '';
    val27.value = '2';
    cmt28.value = '';
    cmt29.value = '';
    cmt30.value = '';
    cmt31.value = '';
    cmt32.value = '725';
    cmt33.value = '725';
    cmt34.value = '65';
    cmt35.value = '75';
    cmt36.value = '0';
    cmt37.value = '0';
    cmt38.value = '0';
    cmt39.value = '0';
    cmt40.value = '0.02500';
    cmt41.value = '0.000100';
    cmt42.value = '0.03000';
    cmt43.value = '0.000100';
    cmt44.value = '1000';
    cmt45.value = '1000';
    valo11.display = display.hidden;
    nao11.display = display.visible;
    valo12.display = display.hidden;
    nao12.display = display.visible;
    valo13.display = display.hidden;
    nao13.display = display.visible;
    valo14.display = display.hidden;
    nao14.display = display.visible;
    valo15.display = display.hidden;
    nao15.display = display.visible;
    valo16.display = display.hidden;
    nao16.display = display.visible;
    valo17.display = display.hidden;
    nao17.display = display.visible;
    valo18.display = display.hidden;
    nao18.display = display.visible;
    valo19a.display = display.hidden;
    nao19a.display = display.visible;
    valo19b.display = display.hidden;
    nao19b.display = display.visible;
    valo20a.display = display.hidden;
    nao20a.display = display.visible;
    valo20b.display = display.hidden;
    nao20b.display = display.visible;
    valo21.display = display.hidden;
    nao21.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.23_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.23_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.23_cb").value;
var txt = getField("11.1.23_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.23_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.23_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("11.1.23_cb").value;
var va24a = this.getField("11.1.24a_value");
var va25a = this.getField("11.1.25a_value");
var va24b = this.getField("11.1.24b_value");
var va25b = this.getField("11.1.25b_value");
var na24a = this.getField("11.1.24a_NA");
var na25a = this.getField("11.1.25a_NA");
var na24b = this.getField("11.1.24b_NA");
var na25b = this.getField("11.1.25b_NA");
var valo19a = this.getField("18.1.19a");
var nao19a = this.getField("18.1.19a_NA");
var valo19b = this.getField("18.1.19b");
var nao19b = this.getField("18.1.19b_NA");
var valo20a = this.getField("18.1.20a");
var nao20a = this.getField("18.1.20a_NA");
var valo20b = this.getField("18.1.20b");
var nao20b = this.getField("18.1.20b_NA");

if (cb !== "Off") {
    va24a.display = display.visible;
    va24a.value = '';
    na24a.display = display.hidden;
    na24a.value = "N/A";
    va24b.display = display.visible;
    va24b.value = '';
    na24b.display = display.hidden;
    na24b.value = "N/A";
    va25a.display = display.visible;
    va25a.value = '';
    na25a.display = display.hidden;
    na25a.value = "N/A";
    va25b.display = display.visible;
    va25b.value = '';
    na25b.display = display.hidden;
    na25b.value = "N/A";
    valo19a.display = display.visible;
    nao19a.display = display.hidden;
    valo19b.display = display.visible;
    nao19b.display = display.hidden;
    valo20a.display = display.visible;
    nao20a.display = display.hidden;
    valo20b.display = display.visible;
    nao20b.display = display.hidden;
} else {
    va24a.display = display.hidden;
    va24a.value = '0';
    na24a.display = display.visible;
    va25a.display = display.hidden;
    va25a.value = '0';
    na25a.display = display.visible;
    va24b.display = display.hidden;
    va24b.value = '0';
    na24b.display = display.visible;
    va25b.display = display.hidden;
    va25b.value = '0';
    na25b.display = display.visible;
    valo19a.display = display.hidden;
    nao19a.display = display.visible;
    valo19b.display = display.hidden;
    nao19b.display = display.visible;
    valo20a.display = display.hidden;
    nao20a.display = display.visible;
    valo20b.display = display.hidden;
    nao20b.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.24a_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.24a_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('11.1.24a_value');
var two = this.getField('11.1.24b_value');

if (two.value !== "") {
    if (one.value > (two.value + 20) || one.value < (two.value - 20)) {
        app.alert("Value must be +-20 to \"Strahlposition x\" in Z-Max");
        one.value = '';
        one.strokeColor = color.red;
        two.strokeColor = color.red;
    } else {
        one.strokeColor = color.transparent;
        two.strokeColor = color.transparent;
    }
} else {
    one.strokeColor = color.transparent;
    two.strokeColor = color.transparent;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.24b_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.24b_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('11.1.24b_value');
var two = this.getField('11.1.24a_value');

if (two.value !== "") {
    if (one.value > (two.value + 20) || one.value < (two.value - 20)) {
        app.alert("Value must be +-20 to \"Strahlposition x\" in Z-Min");
        one.value = '';
        one.strokeColor = color.red;
        two.strokeColor = color.red;
    } else {
        one.strokeColor = color.transparent;
        two.strokeColor = color.transparent;
    }
} else {
    one.strokeColor = color.transparent;
    two.strokeColor = color.transparent;
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.25a_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.25a_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('11.1.25b_value');
var two = this.getField('11.1.25a_value');

if (two.value !== "") {
    if (one.value > (two.value + 20) || one.value < (two.value - 20)) {
        app.alert("Value must be +-20 to \"Strahlposition y\" in Z-Max");
        one.value = '';
        one.strokeColor = color.red;
        two.strokeColor = color.red;
    } else {
        one.strokeColor = color.transparent;
        two.strokeColor = color.transparent;
    }
} else {
    one.strokeColor = color.transparent;
    two.strokeColor = color.transparent;
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.25b_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.25b_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('11.1.25b_value');
var two = this.getField('11.1.25a_value');

if (two.value !== "") {
    if (one.value > (two.value + 20) || one.value < (two.value - 20)) {
        app.alert("Value must be +-20 to \"Strahlposition y\" in Z-Min");
        one.value = '';
        one.strokeColor = color.red;
        two.strokeColor = color.red;
    } else {
        one.strokeColor = color.transparent;
        two.strokeColor = color.transparent;
    }
} else {
    one.strokeColor = color.transparent;
    two.strokeColor = color.transparent;
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.26_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.26_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.26_cb").value;
var txt = getField("11.1.26_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.27_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.27_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.27_cb").value;
var txt = getField("11.1.27_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.27_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.27_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("11.1.27_cb").value;
var val = this.getField("11.1.27_value");
var na = this.getField("11.1.27_NA");
var valo21 = this.getField("18.1.21");
var nao21 = this.getField("18.1.21_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
    valo21.display = display.visible;
    nao21.display = display.hidden;
} else {
    val.display = display.hidden;
    val.value = "2";
    na.display = display.visible;
    valo21.display = display.hidden;
    nao21.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.28_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.28_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.28_cb").value;
var txt = getField("11.1.28_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.29_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.29_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.29_cb").value;
var txt = getField("11.1.29_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.2_cb").value;
var txt = getField("11.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.30_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.30_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.30_cb").value;
var txt = getField("11.1.30_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.31_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.31_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.31_cb").value;
var txt = getField("11.1.31_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.31_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.31_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("11.1.31_cb").value;
var va32 = this.getField("11.1.32_value");
var va33 = this.getField("11.1.33_value");
var va34 = this.getField("11.1.34_value");
var va35 = this.getField("11.1.35_value");
var va36 = this.getField("11.1.36_value");
var va37 = this.getField("11.1.37_value");
var va38 = this.getField("11.1.38_value");
var va39 = this.getField("11.1.39_value");
var va40 = this.getField("11.1.40_value");
var va41 = this.getField("11.1.41_value");
var va42 = this.getField("11.1.42_value");
var va43 = this.getField("11.1.43_value");
var va44 = this.getField("11.1.44_value");
var va45 = this.getField("11.1.45_value");
var na32 = this.getField("11.1.32_NA");
var na33 = this.getField("11.1.33_NA");
var na34 = this.getField("11.1.34_NA");
var na35 = this.getField("11.1.35_NA");
var na36 = this.getField("11.1.36_NA");
var na37 = this.getField("11.1.37_NA");
var na38 = this.getField("11.1.38_NA");
var na39 = this.getField("11.1.39_NA");
var na40 = this.getField("11.1.40_NA");
var na41 = this.getField("11.1.41_NA");
var na42 = this.getField("11.1.42_NA");
var na43 = this.getField("11.1.43_NA");
var na44 = this.getField("11.1.44_NA");
var na45 = this.getField("11.1.45_NA");




if (cb !== "Off") {
    va32.display = display.visible;
    va32.value = '';
    va33.display = display.visible;
    va33.value = '';
    va34.display = display.visible;
    va34.value = '';
    va35.display = display.visible;
    va35.value = '';
    va36.display = display.visible;
    va36.value = '';
    va37.display = display.visible;
    va37.value = '';
    va38.display = display.visible;
    va38.value = '';
    va39.display = display.visible;
    va39.value = '';
    va40.display = display.visible;
    va40.value = '';
    va41.display = display.visible;
    va41.value = '';
    va42.display = display.visible;
    va42.value = '';
    va43.display = display.visible;
    va43.value = '';
    va44.display = display.visible;
    va44.value = '';
    va45.display = display.visible;
    va45.value = '';
    na32.display = display.hidden;
    na32.value = "N/A";
    na33.display = display.hidden;
    na33.value = "N/A";
    na34.display = display.hidden;
    na34.value = "N/A";
    na35.display = display.hidden;
    na35.value = "N/A";
    na36.display = display.hidden;
    na36.value = "N/A";
    na37.display = display.hidden;
    na37.value = "N/A";
    na38.display = display.hidden;
    na38.value = "N/A";
    na39.display = display.hidden;
    na39.value = "N/A";
    na40.display = display.hidden;
    na40.value = "N/A";
    na41.display = display.hidden;
    na41.value = "N/A";
    na42.display = display.hidden;
    na42.value = "N/A";
    na43.display = display.hidden;
    na43.value = "N/A";
    na44.display = display.hidden;
    na44.value = "N/A";
    na45.display = display.hidden;
    na45.value = "N/A";
} else {
    va32.display = display.hidden;
    va32.value = '725';
    va33.display = display.hidden;
    va33.value = '725';
    va34.display = display.hidden;
    va34.value = '65';
    va35.display = display.hidden;
    va35.value = '75';
    va36.display = display.hidden;
    va36.value = '0';
    va37.display = display.hidden;
    va37.value = '0';
    va38.display = display.hidden;
    va38.value = '0';
    va39.display = display.hidden;
    va39.value = '0';
    va40.display = display.hidden;
    va40.value = '0.02500';
    va41.display = display.hidden;
    va41.value = '0.000100';
    va42.display = display.hidden;
    va42.value = '0.03000';
    va43.display = display.hidden;
    va43.value = '0.000100';
    va44.display = display.hidden;
    va44.value = '1000';
    va45.display = display.hidden;
    va45.value = '1000';
    na32.display = display.visible;
    na33.display = display.visible;
    na34.display = display.visible;
    na35.display = display.visible;
    na36.display = display.visible;
    na37.display = display.visible;
    na38.display = display.visible;
    na39.display = display.visible;
    na40.display = display.visible;
    na41.display = display.visible;
    na42.display = display.visible;
    na43.display = display.visible;
    na44.display = display.visible;
    na45.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.33_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.33_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.24_value');
var two = this.getField('9.1.25_value');

if ((two.value < (one.value - 20)) || (two.value > (one.value + 20))) {
    app.alert("FUN 2 out of range");
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.34_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.34_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.24_value');
var two = this.getField('9.1.26_value');

if ((two.value < (one.value * 0.3 - 20)) || (two.value > (one.value * 0.3 + 20))) {
    app.alert("SHG 1 out of range");
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.35_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.35_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.26_value');
var two = this.getField('9.1.27_value');

if ((two.value < (one.value - 20)) || (two.value > (one.value + 20))) {
    app.alert("SHG 2 out of range");
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.36_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.36_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.24_value');
var two = this.getField('9.1.28_value');

if ((two.value < (one.value * 0.5 - 20)) || (two.value > (one.value * 0.5 + 20))) {
    app.alert("FUN 1up out of range");
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.37_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.37_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.24_value');
var two = this.getField('9.1.28_value');

if ((two.value < (one.value * 0.5 - 20)) || (two.value > (one.value * 0.5 + 20))) {
    app.alert("FUN 1up out of range");
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.38_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.38_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.28_value');
var two = this.getField('9.1.29_value');

if ((two.value < (one.value - 20)) || (two.value > (one.value + 20))) {
    app.alert("FUN 2up out of range");
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.39_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.39_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.28_value');
var two = this.getField('9.1.29_value');

if ((two.value < (one.value - 20)) || (two.value > (one.value + 20))) {
    app.alert("FUN 2up out of range");
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.3_cb").value;
var txt = getField("11.1.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.41_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.41_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.24_value');
var two = this.getField('9.1.25_value');

if ((two.value < (one.value - 20)) || (two.value > (one.value + 20))) {
    app.alert("FUN 2 out of range");
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.42_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.42_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.24_value');
var two = this.getField('9.1.26_value');

if ((two.value < (one.value * 0.3 - 20)) || (two.value > (one.value * 0.3 + 20))) {
    app.alert("SHG 1 out of range");
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.43_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.43_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.26_value');
var two = this.getField('9.1.27_value');

if ((two.value < (one.value - 20)) || (two.value > (one.value + 20))) {
    app.alert("SHG 2 out of range");
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.44_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.44_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.24_value');
var two = this.getField('9.1.26_value');

if ((two.value < (one.value * 0.3 - 20)) || (two.value > (one.value * 0.3 + 20))) {
    app.alert("SHG 1 out of range");
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.45_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.45_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.26_value');
var two = this.getField('9.1.27_value');

if ((two.value < (one.value - 20)) || (two.value > (one.value + 20))) {
    app.alert("SHG 2 out of range");
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.4_cb").value;
var txt = getField("11.1.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.4_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.4_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("11.1.4_cb").value;
var val = this.getField("11.1.5_value");
var na = this.getField("11.1.5_NA");
var valo11 = this.getField("18.1.11");
var nao11 = this.getField("18.1.11_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = "";
    na.display = display.hidden;
    na.value = "N/A";
    valo11.display = display.visible;
    nao11.display = display.hidden;
} else {
    val.display = display.hidden;
    val.value = "0.05";
    na.display = display.visible;
    valo11.display = display.hidden;
    nao11.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.6_cb").value;
var txt = getField("11.1.6_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.6_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.6_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("11.1.6_cb").value;
var val = this.getField("11.1.7_value");
var na = this.getField("11.1.7_NA");
var valo12 = this.getField("18.1.12");
var nao12 = this.getField("18.1.12_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
    valo12.display = display.visible;
    nao12.display = display.hidden;
} else {
    val.display = display.hidden;
    val.value = "2000";
    na.display = display.visible;
    valo12.display = display.hidden;
    nao12.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.8_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.8_cb").value;
var txt = getField("11.1.8_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.9_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.9_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("11.1.9_cb").value;
var txt = getField("11.1.9_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>11.1.9_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:11.1.9_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("11.1.9_cb").value;
var val = this.getField("11.1.10_value");
var na = this.getField("11.1.10_NA");
var valo13 = this.getField("18.1.13");
var nao13 = this.getField("18.1.13_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
    valo13.display = display.visible;
    nao13.display = display.hidden;
} else {
    val.display = display.hidden;
    val.value = "2000";
    na.display = display.visible;
    valo13.display = display.hidden;
    nao13.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("12.1.1_cb").value;
var txt = getField("12.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("12.1.1_cb").value;
var txt2 = getField("12.1.2_cb");
var txt3 = getField("12.1.3_NA");
var txt4 = getField("12.1.4_cb");
var txt5 = getField("12.1.5_NA");
var txt6 = getField("12.1.6_cb");
var txt7 = getField("12.1.7_NA");
var txt8 = getField("12.1.8_cb");
var txt9 = getField("12.1.9_cb");
var cmt2 = getField("12.1.2_comment");
var cmt3 = getField("12.1.3_value");
var cmt4 = getField("12.1.4_comment");
var cmt5 = getField("12.1.5_value");
var cmt6 = getField("12.1.6_comment");
var cmt7 = getField("12.1.7_value");
var cmt8 = getField("12.1.8_comment");
var cmt9 = getField("12.1.9_comment");
var valo1 = getField("18.1.22");
var nao1 = getField("18.1.22_NA");
var valo2 = getField("18.1.23");
var nao2 = getField("18.1.23_NA");
var valo3 = getField("18.1.24");
var nao3 = getField("18.1.24_NA");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.visible
    txt3.value = 'N/A';
    txt4.display = display.hidden;
    txt5.display = display.visible
    txt5.value = 'N/A';
    txt6.display = display.hidden;
    txt7.display = display.visible
    txt7value = 'N/A';
    txt8.display = display.hidden;
    txt9.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = '0.75';
    cmt3.display = display.hidden;
    cmt4.value = 'N/A';
    cmt5.value = '2';
    cmt5.display = display.hidden;
    cmt6.value = 'N/A';
    cmt7.value = '5';
    cmt7.display = display.hidden;
    cmt8.value = 'N/A';
    cmt9.value = 'N/A';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
    valo3.display = display.hidden;
    nao3.display = display.visible;
} else {
    txt2.display = display.visible;
    txt4.display = display.visible;
    txt6.display = display.visible;
    txt8.display = display.visible;
    txt9.display = display.visible;
    txt2.value = false;
    txt4.value = false;
    txt6.value = false;
    txt8.value = false;
    txt9.value = false;
    cmt2.value = '';
    cmt3.value = '0.75';
    cmt4.value = '';
    cmt5.value = '2';
    cmt6.value = '';
    cmt7.value = '5';
    cmt8.value = '';
    cmt9.value = '';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
    valo3.display = display.hidden;
    nao3.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("12.1.2_cb").value;
var txt = getField("12.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.1.2_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.1.2_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("12.1.2_cb").value;
var val = this.getField("12.1.3_value");
var na = this.getField("12.1.3_NA");
var valo1 = this.getField("18.1.22");
var nao1 = this.getField("18.1.22_NA")

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
    valo1.display = display.visible;
    nao1.display = display.hidden;
} else {
    val.display = display.hidden;
    val.value = "0.75";
    na.display = display.visible;
    valo1.display = display.hidden;
    nao1.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.1.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.1.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("12.1.4_cb").value;
var txt = getField("12.1.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.1.4_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.1.4_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("12.1.4_cb").value;
var val = this.getField("12.1.5_value");
var na = this.getField("12.1.5_NA");
var valo1 = this.getField("18.1.23");
var nao1 = this.getField("18.1.23_NA")

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
    valo1.display = display.visible;
    nao1.display = display.hidden;
} else {
    val.display = display.hidden;
    val.value = "2";
    na.display = display.visible;
    valo1.display = display.hidden;
    nao1.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.1.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.1.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("12.1.6_cb").value;
var txt = getField("12.1.6_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.1.6_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.1.6_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("12.1.6_cb").value;
var val = this.getField("12.1.7_value");
var na = this.getField("12.1.7_NA");
var valo1 = this.getField("18.1.24");
var nao1 = this.getField("18.1.24_NA")

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
    valo1.display = display.visible;
    nao1.display = display.hidden;
} else {
    val.display = display.hidden;
    val.value = "5";
    na.display = display.visible;
    valo1.display = display.hidden;
    nao1.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.1.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.1.8_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("12.1.8_cb").value;
var txt = getField("12.1.8_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.1.9_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.1.9_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("12.1.9_cb").value;
var txt = getField("12.1.9_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.2.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.2.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("12.2.1_cb").value;
var txt = getField("12.2.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.2.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.2.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("12.2.1_cb").value;
var txt2 = getField("12.2.2_cb");
var txt3 = getField("12.2.3_NA");
var txt4 = getField("12.2.4_cb");
var txt5 = getField("12.2.5_NA");
var txt6 = getField("12.2.6_cb");
var txt7 = getField("12.2.7_NA");
var txt8 = getField("12.2.8_cb");
var txt9 = getField("12.2.9_cb");
var cmt2 = getField("12.2.2_comment");
var cmt3 = getField("12.2.3_value");
var cmt4 = getField("12.2.4_comment");
var cmt5 = getField("12.2.5_value");
var cmt6 = getField("12.2.6_comment");
var cmt7 = getField("12.2.7_value");
var cmt8 = getField("12.2.8_comment");
var valo1 = getField("18.1.25");
var nao1 = getField("18.1.25_NA");
var valo2 = getField("18.1.26");
var nao2 = getField("18.1.26_NA");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.visible;
    txt3.value = 'N/A';
    txt4.display = display.hidden;
    txt5.display = display.visible;
    txt5.value = 'N/A';
    txt6.display = display.hidden;
    txt7.display = display.visible;
    txt7.value = 'N/A';
    txt8.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = '1000';
    cmt3.display = display.hidden;
    cmt4.value = 'N/A';
    cmt5.value = '125';
    cmt5.display = display.hidden;
    cmt6.value = 'N/A';
    cmt7.value = '300';
    cmt7.display = display.hidden;
    cmt8.value = 'N/A';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
} else {
    txt2.display = display.visible;
    txt4.display = display.visible;
    txt6.display = display.visible;
    txt8.display = display.visible;
    txt2.value = false;
    txt4.value = false;
    txt6.value = false;
    txt8.value = false;
    cmt2.value = '';
    cmt3.value = '1000';
    cmt4.value = '';
    cmt5.value = '125';
    cmt6.value = '';
    cmt7.value = '300';
    cmt8.value = '';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.2.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.2.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("12.2.2_cb").value;
var txt = getField("12.2.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.2.2_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.2.2_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("12.2.2_cb").value;
var val = this.getField("12.2.3_value");
var na = this.getField("12.2.3_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
} else {
    val.display = display.hidden;
    val.value = "1000";
    na.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.2.3_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.2.3_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('12.2.3_value');

if (one.value !== '') {
    if (one.value !== 1000) {
        app.alert("Value must be exactly 1000g. Recalibrate your scale.");
        one.value = '';
    }
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.2.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.2.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("12.2.4_cb").value;
var txt = getField("12.2.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.2.4_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.2.4_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("12.2.4_cb").value;
var val = this.getField("12.2.5_value");
var na = this.getField("12.2.5_NA");
var valo1 = this.getField("18.1.25");
var nao1 = this.getField("18.1.25_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
    valo1.display = display.visible;
    nao1.display = display.hidden;
} else {
    val.display = display.hidden;
    val.value = "125";
    na.display = display.visible;
    valo1.display = display.hidden;
    nao1.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.2.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.2.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("12.2.6_cb").value;
var txt = getField("12.2.6_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.2.6_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.2.6_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("12.2.6_cb").value;
var val = this.getField("12.2.7_value");
var na = this.getField("12.2.7_NA");
var valo2 = this.getField("18.1.26");
var nao2 = this.getField("18.1.26_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
    valo2.display = display.visible;
    nao2.display = display.hidden;
} else {
    val.display = display.hidden;
    val.value = "300";
    na.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>12.2.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:12.2.8_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("12.2.8_cb").value;
var txt = getField("12.2.8_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>13.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:13.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("13.1.1_cb").value;
var txt = getField("13.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>13.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:13.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("13.1.1_cb").value;
var txt2 = getField("13.1.2_cb");
var txt3 = getField("13.1.3_cb");
var txt4 = getField("13.1.4_NA");
var txt5 = getField("13.1.5_cb");
var na5 = getField("13.1.5_NA");
var txt6 = getField("13.1.6_cb");
var txt7 = getField("13.1.7_NA");
var cmt2 = getField("13.1.2_comment");
var cmt3 = getField("13.1.3_comment");
var cmt4 = getField("13.1.4_value");
var cmt5 = getField("13.1.5_comment");
var val5 = getField("13.1.5_value");
var cmt6 = getField("13.1.6_comment");
var cmt7 = getField("13.1.7_value");
var valo1 = getField("18.1.27");
var nao1 = getField("18.1.27_NA");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.visible;
    txt5.display = display.hidden;
    na5.display = display.visible;
    txt6.display = display.hidden;
    txt7.display = display.visible;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = '125';
    cmt4.display = display.hidden;
    cmt5.value = 'N/A';
    val5.value = '0';
    val5.display = display.hidden;
    cmt6.value = 'N/A';
    cmt7.value = '30';
    cmt7.display = display.hidden;
    valo1.display = display.hidden;
    nao1.display = display.visible;
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt5.display = display.visible;
    txt6.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt5.value = false;
    txt6.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '125';
    cmt5.value = '';
    val5.value = '0';
    cmt6.value = '';
    cmt7.value = '30';
    valo1.display = display.hidden;
    nao1.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>13.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:13.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("13.1.2_cb").value;
var txt = getField("13.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>13.1.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:13.1.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("13.1.3_cb").value;
var txt = getField("13.1.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>13.1.3_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:13.1.3_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("13.1.3_cb").value;
var val = this.getField("13.1.4_value");
var na = this.getField("13.1.4_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
} else {
    val.display = display.hidden;
    val.value = "122";
    na.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>13.1.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:13.1.5_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("13.1.5_cb").value;
var txt = getField("13.1.5_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>13.1.5_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:13.1.5_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("13.1.5_cb").value;
var val = this.getField("13.1.5_value");
var na = this.getField("13.1.5_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
} else {
    val.display = display.hidden;
    val.value = "0";
    na.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>13.1.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:13.1.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("13.1.6_cb").value;
var txt = getField("13.1.6_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>13.1.6_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:13.1.6_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("13.1.6_cb").value;
var val = this.getField("13.1.7_value");
var na = this.getField("13.1.7_NA");
var valo1 = this.getField("18.1.27");
var nao1 = this.getField("18.1.27_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = "";
    na.display = display.hidden;
    na.value = "N/A";
    valo1.display = display.visible;
    nao1.display = display.hidden;
} else {
    val.display = display.hidden;
    val.value = "30";
    na.display = display.visible;
    valo1.display = display.hidden;
    nao1.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>14.1.12_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:14.1.12_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("14.1.12_cb").value;
var txt = getField("14.1.12_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>14.1.12_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:14.1.12_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("14.1.12_cb").value;
var va13 = this.getField("14.1.13_value");
var va14 = this.getField("14.1.14_value");
var va15 = this.getField("14.1.15_value");
var na13 = this.getField("14.1.13_NA");
var na14 = this.getField("14.1.14_NA");
var na15 = this.getField("14.1.15_NA");
var valo7 = this.getField("18.1.34");
var nao7 = this.getField("18.1.34_NA");
var valo8 = this.getField("18.1.35");
var nao8 = this.getField("18.1.35_NA");
var valo9 = this.getField("18.1.36");
var nao9 = this.getField("18.1.36_NA");

if (cb !== "Off") {
    va13.display = display.visible;
    va13.value = '';
    va14.display = display.visible;
    va14.value = '';
    va15.display = display.visible;
    va15.value = '';
    na13.display = display.hidden;
    na13.value = "N/A";
    na14.display = display.hidden;
    na14.value = "N/A";
    na15.display = display.hidden;
    na15.value = "N/A";
    valo7.display = display.visible;
    nao7.display = display.hidden;
    valo8.display = display.visible;
    nao8.display = display.hidden;
    valo9.display = display.visible;
    nao9.display = display.hidden;
} else {
    va13.display = display.hidden;
    va13.value = '1530';
    na13.display = display.visible;
    va14.display = display.hidden;
    va14.value = '10';
    na14.display = display.visible;
    va15.display = display.hidden;
    va15.value = '5';
    na15.display = display.visible;
    valo7.display = display.hidden;
    nao7.display = display.visible;
    valo8.display = display.hidden;
    nao8.display = display.visible;
    valo9.display = display.hidden;
    nao9.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>14.1.16_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:14.1.16_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("14.1.16_cb").value;
var txt = getField("14.1.16_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>14.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:14.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("14.1.1_cb").value;
var txt = getField("14.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>14.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:14.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("14.1.1_cb").value;
var txt2 = getField("14.1.2_cb");
var txt3 = getField("14.1.3_cb");
var txt5 = getField("14.1.5_NA");
var txt6 = getField("14.1.6_NA");
var txt7 = getField("14.1.7_NA");
var txt9 = getField("14.1.9_NA");
var txt10 = getField("14.1.10_NA");
var txt11 = getField("14.1.11_NA");
var txt12 = getField("14.1.12_cb");
var txt13 = getField("14.1.13_NA");
var txt14 = getField("14.1.14_NA");
var txt15 = getField("14.1.15_NA");
var txt16 = getField("14.1.16_cb");
var cmt2 = getField("14.1.2_comment");
var cmt3 = getField("14.1.3_comment");
var cmt5 = getField("14.1.5_value");
var cmt6 = getField("14.1.6_value");
var cmt7 = getField("14.1.7_value");
var cmt9 = getField("14.1.9_value");
var cmt10 = getField("14.1.10_value");
var cmt11 = getField("14.1.11_value");
var cmt12 = getField("14.1.12_comment");
var cmt13 = getField("14.1.13_value");
var cmt14 = getField("14.1.14_value");
var cmt15 = getField("14.1.15_value");
var cmt16 = getField("14.1.16_comment");
var valo1 = getField("18.1.28");
var nao1 = getField("18.1.28_NA");
var valo2 = getField("18.1.29");
var nao2 = getField("18.1.29_NA");
var valo3 = getField("18.1.30");
var nao3 = getField("18.1.30_NA");
var valo4 = getField("18.1.31");
var nao4 = getField("18.1.31_NA");
var valo5 = getField("18.1.32");
var nao5 = getField("18.1.32_NA");
var valo6 = getField("18.1.33");
var nao6 = getField("18.1.33_NA");
var valo7 = getField("18.1.34");
var nao7 = getField("18.1.34_NA");
var valo8 = getField("18.1.35");
var nao8 = getField("18.1.35_NA");
var valo9 = getField("18.1.36");
var nao9 = getField("18.1.36_NA");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt5.display = display.visible;
    txt5.value = 'N/A';
    txt6.display = display.visible;
    txt6.value = 'N/A';
    txt7.display = display.visible;
    txt7.value = 'N/A';
    txt9.display = display.visible;
    txt9.value = 'N/A';
    txt10.display = display.visible;
    txt10.value = 'N/A';
    txt11.display = display.visible;
    txt11.value = 'N/A';
    txt12.display = display.hidden;
    txt13.display = display.visible;
    txt13.value = 'N/A';
    txt14.display = display.visible;
    txt14.value = 'N/A';
    txt15.display = display.visible;
    txt15.value = 'N/A';
    txt16.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt5.value = '158';
    cmt5.display = display.hidden;
    cmt6.value = '158';
    cmt6.display = display.hidden;
    cmt7.value = '158';
    cmt7.display = display.hidden;
    cmt9.value = '158';
    cmt9.display = display.hidden;
    cmt10.value = '158';
    cmt10.display = display.hidden;
    cmt11.value = '158';
    cmt11.display = display.hidden;
    cmt12.value = 'N/A';
    cmt13.value = '1530';
    cmt13.display = display.hidden;
    cmt14.value = '10';
    cmt14.display = display.hidden;
    cmt15.value = '5';
    cmt15.display = display.hidden;
    cmt16.value = 'N/A';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
    valo3.display = display.hidden;
    nao3.display = display.visible;
    valo4.display = display.hidden;
    nao4.display = display.visible;
    valo5.display = display.hidden;
    nao5.display = display.visible;
    valo6.display = display.hidden;
    nao6.display = display.visible;
    valo7.display = display.hidden;
    nao7.display = display.visible;
    valo8.display = display.hidden;
    nao8.display = display.visible;
    valo9.display = display.hidden;
    nao9.display = display.visible;
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt12.display = display.visible;
    txt16.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt12.value = false;
    txt16.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt5.value = '158';
    cmt6.value = '158';
    cmt7.value = '158';
    cmt9.value = '158';
    cmt10.value = '158';
    cmt11.value = '158';
    cmt12.value = '';
    cmt13.value = '1530';
    cmt14.value = '10';
    cmt15.value = '5';
    cmt16.value = '';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
    valo3.display = display.hidden;
    nao3.display = display.visible;
    valo4.display = display.hidden;
    nao4.display = display.visible;
    valo5.display = display.hidden;
    nao5.display = display.visible;
    valo6.display = display.hidden;
    nao6.display = display.visible;
    valo7.display = display.hidden;
    nao7.display = display.visible;
    valo8.display = display.hidden;
    nao8.display = display.visible;
    valo9.display = display.hidden;
    nao9.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>14.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:14.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("14.1.2_cb").value;
var txt = getField("14.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>14.1.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:14.1.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("14.1.3_cb").value;
var txt = getField("14.1.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>14.1.3_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:14.1.3_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("14.1.3_cb").value;
var va5 = this.getField("14.1.5_value");
var va6 = this.getField("14.1.6_value");
var va7 = this.getField("14.1.7_value");
var va9 = this.getField("14.1.9_value");
var va10 = this.getField("14.1.10_value");
var va11 = this.getField("14.1.11_value");
var na5 = this.getField("14.1.5_NA");
var na6 = this.getField("14.1.6_NA");
var na7 = this.getField("14.1.7_NA");
var na9 = this.getField("14.1.9_NA");
var na10 = this.getField("14.1.10_NA");
var na11 = this.getField("14.1.11_NA");
var valo1 = this.getField("18.1.28");
var nao1 = this.getField("18.1.28_NA");
var valo2 = this.getField("18.1.29");
var nao2 = this.getField("18.1.29_NA");
var valo3 = this.getField("18.1.30");
var nao3 = this.getField("18.1.30_NA");
var valo4 = this.getField("18.1.31");
var nao4 = this.getField("18.1.31_NA");
var valo5 = this.getField("18.1.32");
var nao5 = this.getField("18.1.32_NA");
var valo6 = this.getField("18.1.33");
var nao6 = this.getField("18.1.33_NA");


if (cb !== "Off") {
    va5.display = display.visible;
    va5.value = '';
    va6.display = display.visible;
    va6.value = '';
    va7.display = display.visible;
    va7.value = '';
    va9.display = display.visible;
    va9.value = '';
    va10.display = display.visible;
    va10.value = '';
    va11.display = display.visible;
    va11.value = '';
    na5.display = display.hidden;
    na5.value = "N/A";
    na6.display = display.hidden;
    na6.value = "N/A";
    na7.display = display.hidden;
    na7.value = "N/A";
    na9.display = display.hidden;
    na9.value = "N/A";
    na10.display = display.hidden;
    na10.value = "N/A";
    na11.display = display.hidden;
    na11.value = "N/A";
    valo1.display = display.visible;
    nao1.display = display.hidden;
    valo2.display = display.visible;
    nao2.display = display.hidden;
    valo3.display = display.visible;
    nao3.display = display.hidden;
    valo4.display = display.visible;
    nao4.display = display.hidden;
    valo5.display = display.visible;
    nao5.display = display.hidden;
    valo6.display = display.visible;
    nao6.display = display.hidden;
} else {
    va5.display = display.hidden;
    va5.value = '158';
    na5.display = display.visible;
    va6.display = display.hidden;
    va6.value = '158';
    na6.display = display.visible;
    va7.display = display.hidden;
    va7.value = '158';
    na7.display = display.visible;
    va9.display = display.hidden;
    va9.value = '158';
    na9.display = display.visible;
    va10.display = display.hidden;
    va10.value = '158';
    na10.display = display.visible;
    va11.display = display.hidden;
    va11.value = '158';
    na11.display = display.visible;
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
    valo3.display = display.hidden;
    nao3.display = display.visible;
    valo4.display = display.hidden;
    nao4.display = display.visible;
    valo5.display = display.hidden;
    nao5.display = display.visible;
    valo6.display = display.hidden;
    nao6.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.10_NA:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.10_NA:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.10_NA").value;
var txt = getField("15.1.10_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.10_NA:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.10_NA:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("15.1.10_NA").value; // nimmt wert von erster checkbox
var cb2 = getField("15.1.10_cb"); // nimmt wert von zweiter checkbox

if (cb1 !== "Off") { // wenn erste box “on”
    cb2.value = "Off"; // zweite box “off”
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.10_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.10_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.10_cb").value;
var txt = getField("15.1.10_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.10_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.10_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("15.1.10_cb").value;
var cb2 = getField("15.1.10_NA");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.11_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.11_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.11_cb").value;
var txt = getField("15.1.11_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.12_NA:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.12_NA:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.12_NA").value;
var txt = getField("15.1.12_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.12_NA:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.12_NA:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("15.1.12_NA").value; // nimmt wert von erster checkbox
var cb2 = getField("15.1.12_cb"); // nimmt wert von zweiter checkbox

if (cb1 !== "Off") { // wenn erste box “on”
    cb2.value = "Off"; // zweite box “off”
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.12_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.12_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.12_cb").value;
var txt = getField("15.1.12_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.12_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.12_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("15.1.12_cb").value;
var cb2 = getField("15.1.12_NA");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.13_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.13_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.13_cb").value;
var txt = getField("15.1.13_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.1_cb").value;
var txt = getField("15.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("15.1.1_cb").value;
var txt2 = getField("15.1.2_cb");
var txt3 = getField("15.1.3_cb");
var txt4 = getField("15.1.4_cb");
var txt5 = getField("15.1.5_cb");
var txt6 = getField("15.1.6_cb");
var txt7 = getField("15.1.7_cb");
var txt8 = getField("15.1.8_cb");
var txt9 = getField("15.1.9_cb");
var na9 = getField("15.1.9_NA");
var txt10 = getField("15.1.10_cb");
var na10 = getField("15.1.10_NA");
var txt11 = getField("15.1.11_cb");
var txt12 = getField("15.1.12_cb");
var na12 = getField("15.1.12_NA");
var txt13 = getField("15.1.13_cb");
var cmt2 = getField("15.1.2_comment");
var cmt3 = getField("15.1.3_comment");
var cmt4 = getField("15.1.4_comment");
var cmt5 = getField("15.1.5_comment");
var cmt6 = getField("15.1.6_comment");
var cmt7 = getField("15.1.7_comment");
var cmt8 = getField("15.1.8_comment");
var cmt9 = getField("15.1.9_comment");
var cmt10 = getField("15.1.10_comment");
var cmt11 = getField("15.1.11_comment");
var cmt12 = getField("15.1.12_comment");
var cmt13 = getField("15.1.13_comment");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    txt5.display = display.hidden;
    txt6.display = display.hidden;
    txt7.display = display.hidden;
    txt8.display = display.hidden;
    txt9.display = display.hidden;
    na9.display = display.hidden;
    txt10.display = display.hidden;
    na10.display = display.hidden;
    txt11.display = display.hidden;
    txt12.display = display.hidden;
    na12.display = display.hidden;
    txt13.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
    cmt5.value = 'N/A';
    cmt6.value = 'N/A';
    cmt7.value = 'N/A';
    cmt8.value = 'N/A';
    cmt9.value = 'N/A';
    cmt10.value = 'N/A';
    cmt11.value = 'N/A';
    cmt12.value = 'N/A';
    cmt13.value = 'N/A';
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt5.display = display.visible;
    txt6.display = display.visible;
    txt7.display = display.visible;
    txt8.display = display.visible;
    txt9.display = display.visible;
    na9.display = display.visible;
    txt10.display = display.visible;
    na10.display = display.visible;
    txt11.display = display.visible;
    txt12.display = display.visible;
    na12.display = display.visible;
    txt13.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    txt5.value = false;
    txt6.value = false;
    txt7.value = false;
    txt8.value = false;
    txt9.value = false;
    na9.value = false;
    txt10.value = false;
    na10.value = false;
    txt11.value = false;
    na12.value = false;
    txt12.value = false;
    txt13.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';
    cmt5.value = '';
    cmt6.value = '';
    cmt7.value = '';
    cmt8.value = '';
    cmt9.value = '';
    cmt10.value = '';
    cmt11.value = '';
    cmt12.value = '';
    cmt13.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.2_cb").value;
var txt = getField("15.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.3_cb").value;
var txt = getField("15.1.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.4_cb").value;
var txt = getField("15.1.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.5_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.5_cb").value;
var txt = getField("15.1.5_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.6_cb").value;
var txt = getField("15.1.6_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.7_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.7_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.7_cb").value;
var txt = getField("15.1.7_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.8_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.8_cb").value;
var txt = getField("15.1.8_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.9_NA:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.9_NA:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.9_NA").value;
var txt = getField("15.1.9_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.9_NA:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.9_NA:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("15.1.9_NA").value; // nimmt wert von erster checkbox
var cb2 = getField("15.1.9_cb"); // nimmt wert von zweiter checkbox

if (cb1 !== "Off") { // wenn erste box “on”
    cb2.value = "Off"; // zweite box “off”
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.9_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.9_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("15.1.9_cb").value;
var txt = getField("15.1.9_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>15.1.9_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:15.1.9_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("15.1.9_cb").value;
var cb2 = getField("15.1.9_NA");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>16.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:16.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("16.1.1_cb").value;
var txt = getField("16.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>16.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:16.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("16.1.1_cb").value;
var txt2 = getField("16.1.2_cb");
var txt3 = getField("16.1.3_NA");
var txt4 = getField("16.1.4_NA");
var cmt2 = getField("16.1.2_comment");
var cmt3 = getField("16.1.3_value");
var cmt4 = getField("16.1.4_value");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.visible;
    txt3.value = 'N/A';
    txt4.display = display.visible;
    txt4.value = 'N/A';
    cmt2.value = 'N/A';
    cmt3.value = '230';
    cmt3.display = display.hidden;
    cmt4.value = '50';
    cmt4.display = display.hidden;
} else {
    txt2.display = display.visible;
    txt2.value = false;
    cmt2.value = '';
    cmt3.value = '230';
    cmt4.value = '50';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>16.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:16.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("16.1.2_cb").value;
var txt = getField("16.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>16.1.2_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:16.1.2_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("16.1.2_cb").value;
var va3 = this.getField("16.1.3_value");
var va4 = this.getField("16.1.4_value");
var na3 = this.getField("16.1.3_NA");
var na4 = this.getField("16.1.4_NA");

if (cb !== "Off") {
    va3.display = display.visible;
    va3.value = '';
    na3.display = display.hidden;
    na3.value = "N/A";
    va4.display = display.visible;
    va4.value = '';
    na4.display = display.hidden;
    na4.value = "N/A";
} else {
    va3.display = display.hidden;
    va3.value = "230";
    na3.display = display.visible;
    va4.display = display.hidden;
    va4.value = "50";
    na4.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>16.2.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:16.2.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("16.2.1_cb").value;
var txt = getField("16.2.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>16.2.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:16.2.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("16.2.1_cb").value;
var txt2 = getField("16.2.2_cb");
var txt3 = getField("16.2.3_NA");
var txt4 = getField("16.2.4_NA");
var txt5 = getField("16.2.5_cb");
var txt6 = getField("16.2.6_NA");
var txt7 = getField("16.2.7_NA");
var txt8 = getField("16.2.8_cb");
var txt9 = getField("16.2.9_NA");
var cmt2 = getField("16.2.2_comment");
var cmt3 = getField("16.2.3_value");
var cmt4 = getField("16.2.4_value");
var cmt5 = getField("16.2.5_comment");
var cmt6 = getField("16.2.6_value");
var cmt7 = getField("16.2.7_value");
var cmt8 = getField("16.2.8_comment");
var cmt9 = getField("16.2.9_value");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.visible;
    txt3.value = 'N/A';
    txt4.display = display.visible;
    txt4.value = 'N/A';
    txt5.display = display.hidden;
    txt6.display = display.visible;
    txt6.value = 'N/A';
    txt7.display = display.visible;
    txt7.value = 'N/A';
    txt8.display = display.hidden;
    txt9.display = display.visible;
    txt9.value = 'N/A';
    cmt2.value = 'N/A';
    cmt3.value = '0';
    cmt3.display = display.hidden;
    cmt4.value = '0';
    cmt4.display = display.hidden;
    cmt5.value = 'N/A';
    cmt6.value = '0';
    cmt6.display = display.hidden;
    cmt7.value = '0';
    cmt7.display = display.hidden;
    cmt8.value = 'N/A';
    cmt9.value = '0';
    cmt9.display = display.hidden;
} else {
    txt2.display = display.visible;
    txt5.display = display.visible;
    txt8.display = display.visible;
    txt2.value = false;
    txt5.value = false;
    txt8.value = false;
    cmt2.value = '';
    cmt3.value = '0';
    cmt4.value = '0';
    cmt5.value = '';
    cmt6.value = '0';
    cmt7.value = '0';
    cmt2.value = '';
    cmt8.value = '';
    cmt9.value = '0';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>16.2.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:16.2.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("16.2.2_cb").value;
var txt = getField("16.2.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>16.2.2_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:16.2.2_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("16.2.2_cb").value;
var va3 = this.getField("16.2.3_value");
var va4 = this.getField("16.2.4_value");
var na3 = this.getField("16.2.3_NA");
var na4 = this.getField("16.2.4_NA");

if (cb !== "Off") {
    va3.display = display.visible;
    va3.value = '';
    na3.display = display.hidden;
    na3.value = "N/A";
    va4.display = display.visible;
    va4.value = '';
    na4.display = display.hidden;
    na4.value = "N/A";
} else {
    va3.display = display.hidden;
    va3.value = "0";
    na3.display = display.visible;
    va4.display = display.hidden;
    va4.value = "0";
    na4.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>16.2.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:16.2.5_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("16.2.5_cb").value;
var txt = getField("16.2.5_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>16.2.5_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:16.2.5_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("16.2.5_cb").value;
var va3 = this.getField("16.2.6_value");
var va4 = this.getField("16.2.7_value");
var na3 = this.getField("16.2.6_NA");
var na4 = this.getField("16.2.7_NA");

if (cb !== "Off") {
    va3.display = display.visible;
    va3.value = '';
    na3.display = display.hidden;
    na3.value = "N/A";
    va4.display = display.visible;
    va4.value = '';
    na4.display = display.hidden;
    na4.value = "N/A";
} else {
    va3.display = display.hidden;
    va3.value = "0";
    na3.display = display.visible;
    va4.display = display.hidden;
    va4.value = "0";
    na4.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>16.2.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:16.2.8_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("16.2.8_cb").value;
var txt = getField("16.2.8_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>16.2.8_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:16.2.8_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("16.2.8_cb").value;
var va9 = this.getField("16.2.9_value");
var na9 = this.getField("16.2.9_NA");

if (cb !== "Off") {
    va9.display = display.visible;
    va9.value = '';
    na9.display = display.hidden;
    na9.value = "N/A";
} else {
    va9.display = display.hidden;
    va9.value = "0";
    na9.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.10_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.10_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.10_cb").value;
var txt = getField("17.1.10_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.11_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.11_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.11_cb").value;
var txt = getField("17.1.11_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.12_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.12_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.12_cb").value;
var txt = getField("17.1.12_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.12_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.12_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("17.1.12_cb").value;
var va3 = this.getField("17.1.13_value");
var va4 = this.getField("17.1.14_value");
var na3 = this.getField("17.1.13_NA");
var na4 = this.getField("17.1.14_NA");
var valo4 = getField("18.1.40");
var nao4 = getField("18.1.40_NA");
var valo5 = getField("18.1.41");
var nao5 = getField("18.1.41_NA");

if (cb !== "Off") {
    va3.display = display.visible;
    va3.value = '';
    na3.display = display.hidden;
    na3.value = "N/A";
    va4.display = display.visible;
    va4.value = '';
    na4.display = display.hidden;
    na4.value = "N/A";
    valo4.display = display.visible;
    nao4.display = display.hidden;
    valo5.display = display.visible;
    nao5.display = display.hidden;
} else {
    va3.display = display.hidden;
    va3.value = "125";
    na3.display = display.visible;
    va4.display = display.hidden;
    va4.value = "0";
    na4.display = display.visible;
    valo4.display = display.hidden;
    nao4.display = display.visible;
    valo5.display = display.hidden;
    nao5.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.15_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.15_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.15_cb").value;
var txt = getField("17.1.15_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.16_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.16_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.16_cb").value;
var txt = getField("17.1.16_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.17_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.17_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.17_cb").value;
var txt = getField("17.1.17_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.18_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.18_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.18_cb").value;
var txt = getField("17.1.18_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.19_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.19_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.19_cb").value;
var txt = getField("17.1.19_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.1_cb").value;
var txt = getField("17.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("17.1.1_cb").value;
var txt2 = getField("17.1.2_cb");
var txt3 = getField("17.1.3_cb");
var txt4 = getField("17.1.4_cb");
var txt5 = getField("17.1.5_NA");
var txt6 = getField("17.1.6_NA");
var txt7 = getField("17.1.7_cb");
var txt8 = getField("17.1.8_NA");
var txt9 = getField("17.1.9_cb");
var txt10 = getField("17.1.10_cb");
var txt11 = getField("17.1.11_cb");
var txt12 = getField("17.1.12_cb");
var txt13 = getField("17.1.13_NA");
var txt14 = getField("17.1.14_NA");
var txt15 = getField("17.1.15_cb");
var txt16 = getField("17.1.16_cb");
var txt17 = getField("17.1.17_cb");
var txt18 = getField("17.1.18_cb");
var txt19 = getField("17.1.19_cb");
var cmt2 = getField("17.1.2_comment");
var cmt3 = getField("17.1.3_comment");
var cmt4 = getField("17.1.4_comment");
var cmt5 = getField("17.1.5_value");
var cmt6 = getField("17.1.6_value");
var cmt7 = getField("17.1.7_comment");
var cmt8 = getField("17.1.8_value");
var cmt9 = getField("17.1.9_comment");
var cmt10 = getField("17.1.10_comment");
var cmt11 = getField("17.1.11_comment");
var cmt12 = getField("17.1.12_comment");
var cmt13 = getField("17.1.13_value");
var cmt14 = getField("17.1.14_value");
var cmt15 = getField("17.1.15_comment");
var cmt16 = getField("17.1.16_comment");
var cmt17 = getField("17.1.17_comment");
var cmt18 = getField("17.1.18_comment");
var cmt19 = getField("17.1.19_comment");
var valo1 = getField("18.1.37");
var nao1 = getField("18.1.37_NA");
var valo2 = getField("18.1.38");
var nao2 = getField("18.1.38_NA");
var valo3 = getField("18.1.39");
var nao3 = getField("18.1.39_NA");
var valo4 = getField("18.1.40");
var nao4 = getField("18.1.40_NA");
var valo5 = getField("18.1.41");
var nao5 = getField("18.1.41_NA");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    txt5.display = display.visible;
    txt5.value = 'N/A';
    txt6.display = display.visible;
    txt6.value = 'N/A';
    txt7.display = display.hidden;
    txt8.display = display.visible;
    txt8.value = 'N/A';
    txt9.display = display.hidden;
    txt10.display = display.hidden;
    txt11.display = display.hidden;
    txt12.display = display.hidden;
    txt13.display = display.visible;
    txt13.value = 'N/A';
    txt14.display = display.visible;
    txt14.value = 'N/A';
    txt15.display = display.hidden;
    txt16.display = display.hidden;
    txt17.display = display.hidden;
    txt18.display = display.hidden;
    txt19.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
    cmt5.value = '0';
    cmt5.display = display.hidden;
    cmt6.value = '0';
    cmt6.display = display.hidden;
    cmt7.value = 'N/A';
    cmt8.value = '0';
    cmt8.display = display.hidden;
    cmt9.value = 'N/A';
    cmt10.value = 'N/A';
    cmt11.value = 'N/A';
    cmt12.value = 'N/A';
    cmt13.value = '125';
    cmt13.display = display.hidden;
    cmt14.value = '0';
    cmt14.display = display.hidden;
    cmt15.value = 'N/A';
    cmt16.value = 'N/A';
    cmt17.value = 'N/A';
    cmt18.value = 'N/A';
    cmt19.value = 'N/A';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
    valo3.display = display.hidden;
    nao3.display = display.visible;
    valo4.display = display.hidden;
    nao4.display = display.visible;
    valo5.display = display.hidden;
    nao5.display = display.visible;
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt7.display = display.visible;
    txt9.display = display.visible;
    txt10.display = display.visible;
    txt11.display = display.visible;
    txt12.display = display.visible;
    txt15.display = display.visible;
    txt16.display = display.visible;
    txt17.display = display.visible;
    txt18.display = display.visible;
    txt19.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    txt7.value = false;
    txt9.value = false;
    txt10.value = false;
    txt11.value = false;
    txt12.value = false;
    txt15.value = false;
    txt16.value = false;
    txt17.value = false;
    txt18.value = false;
    txt19.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';
    cmt5.value = '0';
    cmt6.value = '0';
    cmt7.value = '';
    cmt8.value = '0';
    cmt9.value = '';
    cmt10.value = '';
    cmt11.value = '';
    cmt12.value = '';
    cmt13.value = '125';
    cmt14.value = '0';
    cmt15.value = '';
    cmt16.value = '';
    cmt17.value = '';
    cmt18.value = '';
    cmt19.value = '';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
    valo3.display = display.hidden;
    nao3.display = display.visible;
    valo4.display = display.hidden;
    nao4.display = display.visible;
    valo5.display = display.hidden;
    nao5.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.2_cb").value;
var txt = getField("17.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.3_cb").value;
var txt = getField("17.1.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.4_cb").value;
var txt = getField("17.1.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.4_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.4_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("17.1.4_cb").value;
var va3 = this.getField("17.1.5_value");
var va4 = this.getField("17.1.6_value");
var na3 = this.getField("17.1.5_NA");
var na4 = this.getField("17.1.6_NA");
var valo1 = this.getField("18.1.37");
var nao1 = this.getField("18.1.37_NA");
var valo2 = this.getField("18.1.38");
var nao2 = this.getField("18.1.38_NA");

if (cb !== "Off") {
    va3.display = display.visible;
    va3.value = "";
    na3.display = display.hidden;
    na3.value = "N/A";
    va4.display = display.visible;
    va4.value = "";
    na4.display = display.hidden;
    na4.value = "N/A";
    valo1.display = display.visible;
    nao1.display = display.hidden;
    valo2.display = display.visible;
    nao2.display = display.hidden;
} else {
    va3.display = display.hidden;
    va3.value = "0";
    na3.display = display.visible;
    va4.display = display.hidden;
    va4.value = "0";
    na4.display = display.visible;
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.7_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.7_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.7_cb").value;
var txt = getField("17.1.7_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.7_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.7_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("17.1.7_cb").value;
var va3 = this.getField("17.1.8_value");
var na3 = this.getField("17.1.8_NA");
var valo3 = this.getField("18.1.39");
var nao3 = this.getField("18.1.39_NA");

if (cb !== "Off") {
    va3.display = display.visible;
    va3.value = '';
    na3.display = display.hidden;
    na3.value = "N/A";
    valo3.display = display.visible;
    nao3.display = display.hidden;
} else {
    va3.display = display.hidden;
    va3.value = "0";
    na3.display = display.visible;
    valo3.display = display.hidden;
    nao3.display = display.visible
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>17.1.9_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:17.1.9_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("17.1.9_cb").value;
var txt = getField("17.1.9_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.1:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.1:Calculate ***********/
val = getField("7.1.5_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.10:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.10:Calculate ***********/
val = getField("10.1.8_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.11:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.11:Calculate ***********/
val = getField("11.1.5_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.12:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.12:Calculate ***********/
val = getField("11.1.7_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.13:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.13:Calculate ***********/
val = getField("11.1.10_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.14:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.14:Calculate ***********/
val = getField("11.1.13_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.15:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.15:Calculate ***********/
val = getField("11.1.14_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.16:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.16:Calculate ***********/
val = getField("11.1.16_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.17:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.17:Calculate ***********/
val = getField("11.1.17_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.18:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.18:Calculate ***********/
val = getField("11.1.22_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.19a:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.19a:Calculate ***********/
val = getField("11.1.24a_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.19b:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.19b:Calculate ***********/
val = getField("11.1.24b_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.2:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.2:Calculate ***********/
val = getField("7.1.11_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.20a:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.20a:Calculate ***********/
val = getField("11.1.25a_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.20b:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.20b:Calculate ***********/
val = getField("11.1.25b_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.21:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.21:Calculate ***********/
val = getField("11.1.27_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.22:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.22:Calculate ***********/
val = getField("12.1.3_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.23:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.23:Calculate ***********/
val = getField("12.1.5_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.24:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.24:Calculate ***********/
val = getField("12.1.7_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.25:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.25:Calculate ***********/
val = getField("12.2.5_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.26:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.26:Calculate ***********/
val = getField("12.2.7_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.27:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.27:Calculate ***********/
val = getField("13.1.7_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.28:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.28:Calculate ***********/
val = getField("14.1.5_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.29:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.29:Calculate ***********/
val = getField("14.1.6_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.3:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.3:Calculate ***********/
val = getField("8.1.13_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.30:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.30:Calculate ***********/
val = getField("14.1.7_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.31:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.31:Calculate ***********/
val = getField("14.1.9_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.32:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.32:Calculate ***********/
val = getField("14.1.10_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.33:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.33:Calculate ***********/
val = getField("14.1.11_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.34:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.34:Calculate ***********/
val = getField("14.1.13_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.35:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.35:Calculate ***********/
val = getField("14.1.14_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.36:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.36:Calculate ***********/
val = getField("14.1.15_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.37:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.37:Calculate ***********/
val = getField("17.1.5_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.38:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.38:Calculate ***********/
val = getField("17.1.6_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.39:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.39:Calculate ***********/
val = getField("17.1.8_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.4:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.4:Calculate ***********/
val = getField("8.1.14_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.40:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.40:Calculate ***********/
val = getField("17.1.13_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.41:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.41:Calculate ***********/
val = getField("17.1.14_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.5:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.5:Calculate ***********/
val = getField("9.1.3_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.6:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.6:Calculate ***********/
val = getField("9.1.4_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.7:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.7:Calculate ***********/
val = getField("9.1.5_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.8:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.8:Calculate ***********/
val = getField("9.1.6_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>18.1.9:Calculate</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:18.1.9:Calculate ***********/
val = getField("9.1.8_value");
event.value = val.value;

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.1.1_cb").value;
var txt = getField("2.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.1.1_cb:Annot1:MouseUp:Action2 ***********/
//Tabelle

var cb = getField("2.1.1_cb").value;
var cb2 = getField("2.1.2_cb");
var cb3 = getField("2.1.3_cb");
var cb4 = getField("2.1.4_cb");
var cb5 = getField("2.1.5_cb");
var cb6 = getField("2.1.6_cb");
var cb7 = getField("2.1.7_cb");
var txt2 = getField("2.1.2_SN");
var txt3 = getField("2.1.3_SN");
var txt4 = getField("2.1.4_SN");
var txt5 = getField("2.1.5_SN");
var txt6 = getField("2.1.6_SN");
var txt7 = getField("2.1.7_SN");
var cmt2 = getField("2.1.2_comment");
var cmt3 = getField("2.1.3_comment");
var cmt4 = getField("2.1.4_comment");
var cmt5 = getField("2.1.5_comment");
var cmt6 = getField("2.1.6_comment");
var cmt7 = getField("2.1.7_comment");
var dev7 = this.getField("2.1.7_device");

if (cb !== "Off") {
    cb2.display = display.hidden;
    cb3.display = display.hidden;
    cb4.display = display.hidden;
    cb5.display = display.hidden;
    cb6.display = display.hidden;
    cb7.display = display.hidden;
    txt2.value = 'N/A';
    txt3.value = 'N/A';
    txt4.value = 'N/A';
    txt5.value = 'N/A';
    txt6.value = 'N/A';
    txt7.value = 'N/A';
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
    cmt5.value = 'N/A';
    cmt6.value = 'N/A';
    cmt7.value = 'N/A';
    dev7.value = 'N/A';
} else {
    cb2.display = display.visible;
    cb3.display = display.visible;
    cb4.display = display.visible;
    cb5.display = display.visible;
    cb6.display = display.visible;
    cb7.display = display.visible;
    txt2.value = 'N/A';
    txt3.value = 'N/A';
    txt4.value = 'N/A';
    txt5.value = 'N/A';
    txt6.value = 'N/A';
    txt7.value = 'N/A';
    cb2.value = false;
    cb3.value = false;
    cb4.value = false;
    cb5.value = false;
    cb6.value = false;
    cb7.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';
    cmt5.value = '';
    cmt6.value = '';
    cmt7.value = 'N/A';
    dev7.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.1.1_cb:Annot1:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.1.1_cb:Annot1:MouseUp:Action3 ***********/
var cb = getField("2.1.1_cb").value;
var txt2 = getField("2.1.8_cb");
var txt3 = getField("2.1.9_cb");
var cmt2 = getField("2.1.8_comment");
var cmt3 = getField("2.1.9_comment");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    cmt2.value = '';
    cmt3.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.1.2_cb").value;
var txt = getField("2.1.2_SN");
var cmt = getField("2.1.2_comment");

if (cb !== "Off") {
    txt.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.1.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.1.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.1.3_cb").value;
var txt = getField("2.1.3_SN");
var cmt = getField("2.1.3_comment");

if (cb !== "Off") {
    txt.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.1.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.1.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.1.4_cb").value;
var txt = getField("2.1.4_SN");
var cmt = getField("2.1.4_comment");

if (cb !== "Off") {
    txt.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.1.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.1.5_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.1.5_cb").value;
var txt = getField("2.1.5_SN");
var cmt = getField("2.1.5_comment");

if (cb !== "Off") {
    txt.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.1.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.1.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.1.6_cb").value;
var txt = getField("2.1.6_SN");
var cmt = getField("2.1.6_comment");

if (cb !== "Off") {
    txt.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.1.7_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.1.7_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.1.7_cb").value;
var txt = getField("2.1.7_SN");
var cmt = getField("2.1.7_comment");

if (cb !== "Off") {
    txt.value = "";
    cmt.value = "N/A";
} else {
    txt.value = "N/A";
    cmt.value = "N/A";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.1.7_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.1.7_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("2.1.7_cb").value;
var txt = getField("2.1.7_device");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.1.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.1.8_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.1.8_cb").value;
var txt = getField("2.1.8_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.1.9_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.1.9_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.1.9_cb").value;
var txt = getField("2.1.9_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.2.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.2.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.2.1_cb").value;
var txt = getField("2.2.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.2.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.2.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("2.2.1_cb").value;
var txt2 = getField("2.2.2_comment");
var txt3 = getField("2.2.3_comment");
var txt4 = getField("2.2.4_comment");
var txt5 = getField("2.2.5_comment");

if (cb !== "Off") {
    txt2.value = 'N/A';
    txt3.value = 'N/A';
    txt4.value = 'N/A';
    txt5.value = 'N/A';
} else {
    txt2.value = '';
    txt3.value = '';
    txt4.value = '';
    txt5.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.3.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.3.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.3.1_cb").value;
var txt = getField("2.3.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.3.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.3.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("2.3.1_cb").value;
var txt2 = getField("2.3.2_cb");
var txt3 = getField("2.3.3_cb");
var cmt2 = getField("2.3.2_comment");
var cmt3 = getField("2.3.3_comment");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    cmt2.value = '';
    cmt3.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.3.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.3.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.3.2_cb").value;
var txt = getField("2.3.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>2.3.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:2.3.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("2.3.3_cb").value;
var txt = getField("2.3.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.1.1_cb").value;
var txt = getField("3.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("3.1.1_cb").value;
var txt2 = getField("3.1.2_cb");
var txt3 = getField("3.1.3_cb");
var txt4 = getField("3.1.4_cb");
var cmt2 = getField("3.1.2_comment");
var cmt3 = getField("3.1.3_comment");
var cmt4 = getField("3.1.4_comment");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';

}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.1.2_cb").value;
var txt = getField("3.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.1.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.1.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.1.3_cb").value;
var txt = getField("3.1.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.1.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.1.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.1.4_cb").value;
var txt = getField("3.1.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.10_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.10_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.2.10_cb").value;
var txt = getField("3.2.10_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.11_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.11_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.2.11_cb").value;
var txt = getField("3.2.11_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.12_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.12_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.2.12_cb").value;
var txt = getField("3.2.12_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.2.1_cb").value;
var txt = getField("3.2.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("3.2.1_cb").value;
var txt2 = getField("3.2.2_cb");
var txt3 = getField("3.2.3_cb");
var txt4 = getField("3.2.4_cb");
var txt5 = getField("3.2.5_cb");
var txt6 = getField("3.2.6_cb");
var txt7 = getField("3.2.7_cb");
var txt8 = getField("3.2.8_cb");
var txt9 = getField("3.2.9_cb");
var txt10 = getField("3.2.10_cb");
var txt11 = getField("3.2.11_cb");
var txt12 = getField("3.2.12_cb");
var cmt2 = getField("3.2.2_comment");
var cmt3 = getField("3.2.3_comment");
var cmt4 = getField("3.2.4_comment");
var cmt5 = getField("3.2.5_comment");
var cmt6 = getField("3.2.6_comment");
var cmt7 = getField("3.2.7_comment");
var cmt8 = getField("3.2.8_comment");
var cmt9 = getField("3.2.9_comment");
var cmt10 = getField("3.2.10_comment");
var cmt11 = getField("3.2.11_comment");
var cmt12 = getField("3.2.12_comment");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    txt5.display = display.hidden;
    txt6.display = display.hidden;
    txt7.display = display.hidden;
    txt8.display = display.hidden;
    txt9.display = display.hidden;
    txt10.display = display.hidden;
    txt11.display = display.hidden;
    txt12.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
    cmt5.value = 'N/A';
    cmt6.value = 'N/A';
    cmt7.value = 'N/A';
    cmt8.value = 'N/A';
    cmt9.value = 'N/A';
    cmt10.value = 'N/A';
    cmt11.value = 'N/A';
    cmt12.value = 'N/A';
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt5.display = display.visible;
    txt6.display = display.visible;
    txt7.display = display.visible;
    txt8.display = display.visible;
    txt9.display = display.visible;
    txt10.display = display.visible;
    txt11.display = display.visible;
    txt12.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    txt5.value = false;
    txt6.value = false;
    txt7.value = false;
    txt8.value = false;
    txt9.value = false;
    txt10.value = false;
    txt11.value = false;
    txt12.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';
    cmt5.value = '';
    cmt6.value = '';
    cmt7.value = '';
    cmt8.value = '';
    cmt9.value = '';
    cmt10.value = '';
    cmt11.value = '';
    cmt12.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.2.2_cb").value;
var txt = getField("3.2.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.2.3_cb").value;
var txt = getField("3.2.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.2.4_cb").value;
var txt = getField("3.2.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.5_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.2.5_cb").value;
var txt = getField("3.2.5_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.2.6_cb").value;
var txt = getField("3.2.6_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.7_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.7_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.2.7_cb").value;
var txt = getField("3.2.7_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.8_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.2.8_cb").value;
var txt = getField("3.2.8_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.2.9_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.2.9_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.2.9_cb").value;
var txt = getField("3.2.9_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.3.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.3.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.3.1_cb").value;
var txt = getField("3.3.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.3.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.3.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("3.3.1_cb").value;
var txt2 = getField("3.3.2_cb");
var txt3 = getField("3.3.3_cb");
var txt4 = getField("3.3.4_cb");
var txt5 = getField("3.3.5_cb");
var txt6 = getField("3.3.6_cb");
var cmt2 = getField("3.3.2_comment");
var cmt3 = getField("3.3.3_comment");
var cmt4 = getField("3.3.4_comment");
var cmt5 = getField("3.3.5_comment");
var cmt6 = getField("3.3.6_comment");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    txt5.display = display.hidden;
    txt6.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
    cmt5.value = 'N/A';
    cmt6.value = 'N/A';
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt5.display = display.visible;
    txt6.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    txt5.value = false;
    txt6.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';
    cmt5.value = '';
    cmt6.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.3.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.3.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.3.2_cb").value;
var txt = getField("3.3.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.3.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.3.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.3.3_cb").value;
var txt = getField("3.3.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.3.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.3.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.3.4_cb").value;
var txt = getField("3.3.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.3.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.3.5_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.3.5_cb").value;
var txt = getField("3.3.5_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>3.3.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:3.3.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("3.3.6_cb").value;
var txt = getField("3.3.6_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.10_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.10_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("4.1.10_cb").value;
var txt = getField("4.1.10_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.11_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.11_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("4.1.11_cb").value;
var txt = getField("4.1.11_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.12_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.12_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("4.1.12_cb").value;
var txt = getField("4.1.12_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.13_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.13_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("4.1.13_cb").value;
var txt = getField("4.1.13_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.14_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.14_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("4.1.14_cb").value;
var txt = getField("4.1.14_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("4.1.1_cb").value;
var txt = getField("4.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("4.1.1_cb").value;
var txt2 = getField("4.1.2_cb");
var txt3 = getField("4.1.3_cb");
var txt4 = getField("4.1.4_cb");
var txt6 = getField("4.1.6_cb");
var txt5 = getField("4.1.5_NA");
var txt7 = getField("4.1.7_cb");
var txt8 = getField("4.1.8_NA");
var txt9 = getField("4.1.9_NA");
var txt10 = getField("4.1.10_cb");
var txt11 = getField("4.1.11_cb");
var txt12 = getField("4.1.12_cb");
var txt13 = getField("4.1.13_cb");
var txt14 = getField("4.1.14_cb");
var cmt2 = getField("4.1.2_comment");
var cmt3 = getField("4.1.3_comment");
var cmt4 = getField("4.1.4_comment");
var cmt5 = getField("4.1.5_value");
var cmt6 = getField("4.1.6_comment");
var cmt7 = getField("4.1.7_comment");
var cmt8 = getField("4.1.8_value");
var cmt9 = getField("4.1.9_value");
var cmt10 = getField("4.1.10_comment");
var cmt11 = getField("4.1.11_comment");
var cmt12 = getField("4.1.12_comment");
var cmt13 = getField("4.1.13_comment");
var cmt14 = getField("4.1.14_comment");
var set1 = getField("4.1.8_setpoint");
var set2 = getField("4.1.9_setpoint");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    txt5.display = display.visible;
    txt6.display = display.hidden;
    txt7.display = display.hidden;
    txt8.display = display.visible;
    txt9.display = display.visible;
    txt10.display = display.hidden;
    txt11.display = display.hidden;
    txt12.display = display.hidden;
    txt13.display = display.hidden;
    txt14.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
    cmt6.value = 'N/A';
    cmt5.value = '0';
    cmt5.display = display.hidden;
    cmt7.value = 'N/A';
    cmt8.value = '0';
    cmt8.display = display.hidden;
    cmt9.value = '0';
    cmt9.display = display.hidden;
    cmt10.value = 'N/A';
    cmt11.value = 'N/A';
    cmt12.value = 'N/A';
    cmt13.value = 'N/A';
    cmt14.value = 'N/A';
    set1.value = set1.getItemAt(0);
    set2.value = set1.getItemAt(0);
    set1.readonly = true;
    set2.readonly = true;
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt6.display = display.visible;
    txt7.display = display.visible;
    txt10.display = display.visible;
    txt11.display = display.visible;
    txt12.display = display.visible;
    txt13.display = display.visible;
    txt14.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    txt6.value = false;
    txt7.value = false;
    txt10.value = false;
    txt11.value = false;
    txt12.value = false;
    txt13.value = false;
    txt14.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';
    cmt5.value = '0';
    cmt6.value = '';
    cmt7.value = '';
    cmt8.value = '0';
    cmt9.value = '0';
    cmt10.value = '';
    cmt11.value = '';
    cmt12.value = '';
    cmt13.value = '';
    cmt14.value = '';
    set1.readonly = true;
    set2.readonly = true;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("4.1.2_cb").value;
var txt = getField("4.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("4.1.3_cb").value;
var txt = getField("4.1.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("4.1.4_cb").value;
var txt = getField("4.1.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.4_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.4_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("4.1.4_cb").value;
var val = this.getField("4.1.5_value");
var na = this.getField("4.1.5_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = "";
    na.display = display.hidden;
} else {
    val.display = display.hidden;
    val.value = "0";
    na.value = "N/A";
    na.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("4.1.6_cb").value;
var txt = getField("4.1.6_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.7_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.7_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("4.1.7_cb").value;
var txt = getField("4.1.7_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.7_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.7_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("4.1.7_cb").value;
var val1 = this.getField("4.1.8_value");
var na1 = this.getField("4.1.8_NA");
var val2 = this.getField("4.1.9_value");
var na2 = this.getField("4.1.9_NA");
var set1 = this.getField("4.1.8_setpoint");
var set2 = this.getField("4.1.9_setpoint");

if (cb !== "Off") {
    val1.display = display.visible;
    val1.value = "";
    na1.display = display.hidden;
    val2.display = display.visible;
    val2.value = "";
    na2.display = display.hidden;
    set1.readonly = false;
    set2.readonly = false;
} else {
    set1.value = set1.getItemAt(0);
    val1.display = display.hidden;
    val1.value = "0";
    na1.value = "N/A";
    na1.display = display.visible;
    set2.value = set1.getItemAt(0);
    val2.display = display.hidden;
    val2.value = "0";
    na2.value = "N/A";
    na2.display = display.visible;
    set1.readonly = true;
    set2.readonly = true;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.8_setpoint:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.8_setpoint:Annot1:OnBlur:Action1 ***********/
var one = this.getField('4.1.8_setpoint');
var two = this.getField('4.1.8_value');

if (one.value == true) {
    two.value = '';
}

if (one.value == '800') {
    if ((two.value < 760 || two.value > 840) && two.value !== '') {
        app.alert("Value 4.1.8 must be in range from 760 to 840");
        two.value = '';
    }
}

if (one.value == '750') {
    if ((two.value < 712 || two.value > 788) && two.value !== '') {
        app.alert("Value 4.1.8 must be in range from 712 to 788");
        two.value = '';
    }
}

if (one.value == '700') {
    if ((two.value < 665 || two.value > 735) && two.value !== '') {
        app.alert("Value 4.1.8 must be in range from 665 to 735");
        two.value = '';
    }
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.8_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.8_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('4.1.8_setpoint');
var two = this.getField('4.1.8_value');


if (two.value != '') {
    if (one.value == true) {
        app.alert("Please choose Setpoint first.");
        two.value = '';
    }

    if (one.value == '800') {
        if (two.value < 760 || two.value > 840) {
            app.alert("Value 4.1.8 must be in range from 760 to 840");
            two.value = '';
        }
    }

    if (one.value == '750') {
        if (two.value < 712 || two.value > 788) {
            app.alert("Value 4.1.8 must be in range from 712 to 788");
            two.value = '';
        }
    }

    if (one.value == '700') {
        if (two.value < 665 || two.value > 735) {
            app.alert("Value 4.1.8 must be in range from 665 to 735");
            two.value = '';
        }
    }
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.9_setpoint:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.9_setpoint:Annot1:OnBlur:Action1 ***********/
var one = this.getField('4.1.9_setpoint');
var two = this.getField('4.1.9_value');

if (one.value == true) {
    two.value = '';
}

if (one.value == '800') {
    if ((two.value < 760 || two.value > 840) && two.value !== '') {
        app.alert("Value 4.1.9 must be in range from 760 to 840");
        two.value = '';
    }
}

if (one.value == '750') {
    if ((two.value < 712 || two.value > 788) && two.value !== '') {
        app.alert("Value 4.1.9 must be in range from 712 to 788");
        two.value = '';
    }
}

if (one.value == '700') {
    if ((two.value < 665 || two.value > 735) && two.value !== '') {
        app.alert("Value 4.1.9 must be in range from 665 to 735");
        two.value = '';
    }
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>4.1.9_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:4.1.9_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('4.1.9_setpoint');
var two = this.getField('4.1.9_value');

if (two.value != '') {
    if (one.value == true) {
        app.alert("Please choose Setpoint first.");
        two.value = '';
    }

    if (one.value == '800') {
        if (two.value < 760 || two.value > 840) {
            app.alert("Value 4.1.8 must be in range from 760 to 840");
            two.value = '';
        }
    }

    if (one.value == '750') {
        if (two.value < 712 || two.value > 788) {
            app.alert("Value 4.1.8 must be in range from 712 to 788");
            two.value = '';
        }
    }

    if (one.value == '700') {
        if (two.value < 665 || two.value > 735) {
            app.alert("Value 4.1.8 must be in range from 665 to 735");
            two.value = '';
        }
    }
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.1.10_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.1.10_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.1.10_cb").value;
var txt = getField("5.1.10_before");
var txt2 = getField("5.1.10_after");
var cmt = getField("5.1.10_comment");

if (cb !== "Off") {
    txt.value = '';
    txt2.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    txt2.value = 'N/A';
    cmt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.1.11_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.1.11_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.1.11_cb").value;
var txt = getField("5.1.11_before");
var txt2 = getField("5.1.11_after");
var cmt = getField("5.1.11_comment");

if (cb !== "Off") {
    txt.value = '';
    txt2.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    txt2.value = 'N/A';
    cmt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.1.1_cb").value;
var txt = getField("5.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.1.1_cb:Annot1:MouseUp:Action2 ***********/
//Codebeispiel 5.1.1

var cb = getField("5.1.1_cb").value;
var cb2 = getField("5.1.2_cb");
var cb3 = getField("5.1.3_cb");
var cb4 = getField("5.1.4_cb");
var cb5 = getField("5.1.5_cb");
var cb6 = getField("5.1.6_cb");
var cb7 = getField("5.1.7_cb");
var cb8 = getField("5.1.8_cb");
var cb9 = getField("5.1.9_cb");
var cb10 = getField("5.1.10_cb");
var cb11 = getField("5.1.11_cb");
var txt2 = getField("5.1.2_before");
var txt3 = getField("5.1.3_before");
var txt4 = getField("5.1.4_before");
var txt5 = getField("5.1.5_before");
var txt6 = getField("5.1.6_before");
var txt7 = getField("5.1.7_before");
var txt8 = getField("5.1.8_before");
var txt9 = getField("5.1.9_before");
var txt10 = getField("5.1.10_before");
var txt11 = getField("5.1.11_before");
var txt2a = getField("5.1.2_after");
var txt3a = getField("5.1.3_after");
var txt4a = getField("5.1.4_after");
var txt5a = getField("5.1.5_after");
var txt6a = getField("5.1.6_after");
var txt7a = getField("5.1.7_after");
var txt8a = getField("5.1.8_after");
var txt9a = getField("5.1.9_after");
var txt10a = getField("5.1.10_after");
var txt11a = getField("5.1.11_after");
var cmt2 = getField("5.1.2_comment");
var cmt3 = getField("5.1.3_comment");
var cmt4 = getField("5.1.4_comment");
var cmt5 = getField("5.1.5_comment");
var cmt6 = getField("5.1.6_comment");
var cmt7 = getField("5.1.7_comment");
var cmt8 = getField("5.1.8_comment");
var cmt9 = getField("5.1.9_comment");
var cmt10 = getField("5.1.10_comment");
var cmt11 = getField("5.1.11_comment");

if (cb !== "Off") {
    cb2.display = display.hidden;
    cb3.display = display.hidden;
    cb4.display = display.hidden;
    cb5.display = display.hidden;
    cb6.display = display.hidden;
    cb7.display = display.hidden;
    cb8.display = display.hidden;
    cb9.display = display.hidden;
    cb10.display = display.hidden;
    cb11.display = display.hidden;
    txt2.value = 'N/A';
    txt3.value = 'N/A';
    txt4.value = 'N/A';
    txt5.value = 'N/A';
    txt6.value = 'N/A';
    txt7.value = 'N/A';
    txt8.value = 'N/A';
    txt9.value = 'N/A';
    txt10.value = 'N/A';
    txt11.value = 'N/A';
    txt2a.value = 'N/A';
    txt3a.value = 'N/A';
    txt4a.value = 'N/A';
    txt5a.value = 'N/A';
    txt6a.value = 'N/A';
    txt7a.value = 'N/A';
    txt8a.value = 'N/A';
    txt9a.value = 'N/A';
    txt10a.value = 'N/A';
    txt11a.value = 'N/A';
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
    cmt5.value = 'N/A';
    cmt6.value = 'N/A';
    cmt7.value = 'N/A';
    cmt8.value = 'N/A';
    cmt9.value = 'N/A';
    cmt10.value = 'N/A';
    cmt11.value = 'N/A';
} else {
    cb2.display = display.visible;
    cb3.display = display.visible;
    cb4.display = display.visible;
    cb5.display = display.visible;
    cb6.display = display.visible;
    cb7.display = display.visible;
    cb8.display = display.visible;
    cb9.display = display.visible;
    cb10.display = display.visible;
    cb11.display = display.visible;
    txt2.value = 'N/A';
    txt3.value = 'N/A';
    txt4.value = 'N/A';
    txt5.value = 'N/A';
    txt6.value = 'N/A';
    txt7.value = 'N/A';
    txt8.value = 'N/A';
    txt9.value = 'N/A';
    txt10.value = 'N/A';
    txt11.value = 'N/A';
    txt2a.value = 'N/A';
    txt3a.value = 'N/A';
    txt4a.value = 'N/A';
    txt5a.value = 'N/A';
    txt6a.value = 'N/A';
    txt7a.value = 'N/A';
    txt8a.value = 'N/A';
    txt9a.value = 'N/A';
    txt10a.value = 'N/A';
    txt11a.value = 'N/A';
    cb2.value = false;
    cb3.value = false;
    cb4.value = false;
    cb5.value = false;
    cb6.value = false;
    cb7.value = false;
    cb8.value = false;
    cb9.value = false;
    cb10.value = false;
    cb11.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';
    cmt5.value = '';
    cmt6.value = '';
    cmt7.value = '';
    cmt8.value = '';
    cmt9.value = '';
    cmt10.value = '';
    cmt11.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.1.2_cb").value;
var txt = getField("5.1.2_before");
var txt2 = getField("5.1.2_after");
var cmt = getField("5.1.2_comment");

if (cb !== "Off") {
    txt.value = '';
    txt2.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    txt2.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.1.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.1.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.1.3_cb").value;
var txt = getField("5.1.3_before");
var txt2 = getField("5.1.3_after");
var cmt = getField("5.1.3_comment");

if (cb !== "Off") {
    txt.value = '';
    txt2.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    txt2.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.1.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.1.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.1.4_cb").value;
var txt = getField("5.1.4_before");
var txt2 = getField("5.1.4_after");
var cmt = getField("5.1.4_comment");

if (cb !== "Off") {
    txt.value = '';
    txt2.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    txt2.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.1.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.1.5_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.1.5_cb").value;
var txt = getField("5.1.5_before");
var txt2 = getField("5.1.5_after");
var cmt = getField("5.1.5_comment");

if (cb !== "Off") {
    txt.value = '';
    txt2.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    txt2.value = 'N/A';
    cmt.value = '';
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.1.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.1.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.1.6_cb").value;
var txt = getField("5.1.6_before");
var txt2 = getField("5.1.6_after");
var cmt = getField("5.1.6_comment");

if (cb !== "Off") {
    txt.value = '';
    txt2.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    txt2.value = 'N/A';
    cmt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.1.7_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.1.7_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.1.7_cb").value;
var txt = getField("5.1.7_before");
var txt2 = getField("5.1.7_after");
var cmt = getField("5.1.7_comment");

if (cb !== "Off") {
    txt.value = '';
    txt2.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    txt2.value = 'N/A';
    cmt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.1.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.1.8_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.1.8_cb").value;
var txt = getField("5.1.8_before");
var txt2 = getField("5.1.8_after");
var cmt = getField("5.1.8_comment");

if (cb !== "Off") {
    txt.value = '';
    txt2.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    txt2.value = 'N/A';
    cmt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.1.9_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.1.9_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.1.9_cb").value;
var txt = getField("5.1.9_before");
var txt2 = getField("5.1.9_after");
var cmt = getField("5.1.9_comment");

if (cb !== "Off") {
    txt.value = '';
    txt2.value = '';
    cmt.value = 'N/A';
} else {
    txt.value = 'N/A';
    txt2.value = 'N/A';
    cmt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.10_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.10_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.10_cb").value;
var cb2 = getField("5.2.11_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.10_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.10_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.10_cb").value;
var cb2 = getField("5.2.11_cb").value;
var cb3 = getField("5.2.12_cb").value;
var cb4 = getField("5.2.13_cb").value;
var txt = getField("5.2.10_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.11_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.11_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.11_cb").value;
var cb2 = getField("5.2.10_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.11_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.11_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.10_cb").value;
var cb2 = getField("5.2.11_cb").value;
var cb3 = getField("5.2.12_cb").value;
var cb4 = getField("5.2.13_cb").value;
var txt = getField("5.2.10_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.12_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.12_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.12_cb").value;
var cb2 = getField("5.2.13_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.12_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.12_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.10_cb").value;
var cb2 = getField("5.2.11_cb").value;
var cb3 = getField("5.2.12_cb").value;
var cb4 = getField("5.2.13_cb").value;
var txt = getField("5.2.10_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.13_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.13_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.13_cb").value;
var cb2 = getField("5.2.12_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.13_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.13_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.10_cb").value;
var cb2 = getField("5.2.11_cb").value;
var cb3 = getField("5.2.12_cb").value;
var cb4 = getField("5.2.13_cb").value;
var txt = getField("5.2.10_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.14_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.14_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.14_cb").value;
var cb2 = getField("5.2.15_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.14_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.14_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.14_cb").value;
var cb2 = getField("5.2.15_cb").value;
var cb3 = getField("5.2.16_cb").value;
var cb4 = getField("5.2.17_cb").value;
var txt = getField("5.2.14_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.15_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.15_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.15_cb").value;
var cb2 = getField("5.2.14_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.15_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.15_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.14_cb").value;
var cb2 = getField("5.2.15_cb").value;
var cb3 = getField("5.2.16_cb").value;
var cb4 = getField("5.2.17_cb").value;
var txt = getField("5.2.14_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.16_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.16_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.16_cb").value;
var cb2 = getField("5.2.17_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.16_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.16_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.14_cb").value;
var cb2 = getField("5.2.15_cb").value;
var cb3 = getField("5.2.16_cb").value;
var cb4 = getField("5.2.17_cb").value;
var txt = getField("5.2.14_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.17_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.17_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.17_cb").value;
var cb2 = getField("5.2.16_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.17_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.17_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.14_cb").value;
var cb2 = getField("5.2.15_cb").value;
var cb3 = getField("5.2.16_cb").value;
var cb4 = getField("5.2.17_cb").value;
var txt = getField("5.2.14_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.18_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.18_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.18_cb").value;
var cb2 = getField("5.2.19_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.18_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.18_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.18_cb").value;
var cb2 = getField("5.2.19_cb").value;
var cb3 = getField("5.2.20_cb").value;
var cb4 = getField("5.2.21_cb").value;
var txt = getField("5.2.18_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.19_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.19_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.19_cb").value;
var cb2 = getField("5.2.18_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.19_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.19_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.18_cb").value;
var cb2 = getField("5.2.19_cb").value;
var cb3 = getField("5.2.20_cb").value;
var cb4 = getField("5.2.21_cb").value;
var txt = getField("5.2.18_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.2.1_cb").value;
var txt = getField("5.2.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.1_cb:Annot1:MouseUp:Action2 ***********/
//Codebeispiel 5.2.1

var cb = getField("5.2.1_cb").value;
var cb2 = getField("5.2.2_cb");
var cb3 = getField("5.2.3_cb");
var cb4 = getField("5.2.4_cb");
var cb5 = getField("5.2.5_cb");
var cb6 = getField("5.2.6_cb");
var cb7 = getField("5.2.7_cb");
var cb8 = getField("5.2.8_cb");
var cb9 = getField("5.2.9_cb");
var cb10 = getField("5.2.10_cb");
var cb11 = getField("5.2.11_cb");
var cb12 = getField("5.2.12_cb");
var cb13 = getField("5.2.13_cb");
var cb14 = getField("5.2.14_cb");
var cb15 = getField("5.2.15_cb");
var cb16 = getField("5.2.16_cb");
var cb17 = getField("5.2.17_cb");
var cb18 = getField("5.2.18_cb");
var cb19 = getField("5.2.19_cb");
var cb20 = getField("5.2.20_cb");
var cb21 = getField("5.2.21_cb");
var cb22 = getField("5.2.22_cb");
var cb23 = getField("5.2.23_cb");
var cb24 = getField("5.2.24_cb");
var cb25 = getField("5.2.25_cb");
var cb26 = getField("5.2.26_cb");
var cb27 = getField("5.2.27_cb");
var cb28 = getField("5.2.28_cb");
var cb29 = getField("5.2.29_cb");
var cmt2 = getField("5.2.2_comment");
var cmt6 = getField("5.2.6_comment");
var cmt10 = getField("5.2.10_comment");
var cmt14 = getField("5.2.14_comment");
var cmt18 = getField("5.2.18_comment");
var cmt22 = getField("5.2.22_comment");
var cmt26 = getField("5.2.26_comment");

if (cb !== "Off") {
    cb2.display = display.hidden;
    cb3.display = display.hidden;
    cb4.display = display.hidden;
    cb5.display = display.hidden;
    cb6.display = display.hidden;
    cb7.display = display.hidden;
    cb8.display = display.hidden;
    cb9.display = display.hidden;
    cb10.display = display.hidden;
    cb11.display = display.hidden;
    cb12.display = display.hidden;
    cb13.display = display.hidden;
    cb14.display = display.hidden;
    cb15.display = display.hidden;
    cb16.display = display.hidden;
    cb17.display = display.hidden;
    cb18.display = display.hidden;
    cb19.display = display.hidden;
    cb20.display = display.hidden;
    cb21.display = display.hidden;
    cb22.display = display.hidden;
    cb23.display = display.hidden;
    cb24.display = display.hidden;
    cb25.display = display.hidden;
    cb26.display = display.hidden;
    cb27.display = display.hidden;
    cb28.display = display.hidden;
    cb29.display = display.hidden;
    cmt2.value = 'N/A';
    cmt6.value = 'N/A';
    cmt10.value = 'N/A';
    cmt14.value = 'N/A';
    cmt18.value = 'N/A';
    cmt22.value = 'N/A';
    cmt26.value = 'N/A';
} else {
    cb2.display = display.visible;
    cb3.display = display.visible;
    cb4.display = display.visible;
    cb5.display = display.visible;
    cb6.display = display.visible;
    cb7.display = display.visible;
    cb8.display = display.visible;
    cb9.display = display.visible;
    cb10.display = display.visible;
    cb11.display = display.visible;
    cb12.display = display.visible;
    cb13.display = display.visible;
    cb14.display = display.visible;
    cb15.display = display.visible;
    cb16.display = display.visible;
    cb17.display = display.visible;
    cb18.display = display.visible;
    cb19.display = display.visible;
    cb20.display = display.visible;
    cb21.display = display.visible;
    cb22.display = display.visible;
    cb23.display = display.visible;
    cb24.display = display.visible;
    cb25.display = display.visible;
    cb26.display = display.visible;
    cb27.display = display.visible;
    cb28.display = display.visible;
    cb29.display = display.visible;
    cb2.value = false;
    cb3.value = false;
    cb4.value = false;
    cb5.value = false;
    cb6.value = false;
    cb7.value = false;
    cb8.value = false;
    cb9.value = false;
    cb10.value = false;
    cb11.value = false;
    cb12.value = false;
    cb13.value = false;
    cb14.value = false;
    cb15.value = false;
    cb16.value = false;
    cb17.value = false;
    cb18.value = false;
    cb19.value = false;
    cb20.value = false;
    cb21.value = false;
    cb22.value = false;
    cb23.value = false;
    cb24.value = false;
    cb25.value = false;
    cb26.value = false;
    cb27.value = false;
    cb28.value = false;
    cb29.value = false;
    cmt2.value = '';
    cmt6.value = '';
    cmt10.value = '';
    cmt14.value = '';
    cmt18.value = '';
    cmt22.value = '';
    cmt26.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.20_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.20_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.20_cb").value;
var cb2 = getField("5.2.21_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.20_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.20_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.18_cb").value;
var cb2 = getField("5.2.19_cb").value;
var cb3 = getField("5.2.20_cb").value;
var cb4 = getField("5.2.21_cb").value;
var txt = getField("5.2.18_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.21_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.21_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.21_cb").value;
var cb2 = getField("5.2.20_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.21_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.21_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.18_cb").value;
var cb2 = getField("5.2.19_cb").value;
var cb3 = getField("5.2.20_cb").value;
var cb4 = getField("5.2.21_cb").value;
var txt = getField("5.2.18_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.22_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.22_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.22_cb").value;
var cb2 = getField("5.2.23_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.22_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.22_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.22_cb").value;
var cb2 = getField("5.2.23_cb").value;
var cb3 = getField("5.2.24_cb").value;
var cb4 = getField("5.2.25_cb").value;
var txt = getField("5.2.22_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.23_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.23_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.23_cb").value;
var cb2 = getField("5.2.22_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.23_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.23_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.22_cb").value;
var cb2 = getField("5.2.23_cb").value;
var cb3 = getField("5.2.24_cb").value;
var cb4 = getField("5.2.25_cb").value;
var txt = getField("5.2.22_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.24_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.24_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.24_cb").value;
var cb2 = getField("5.2.25_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.24_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.24_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.22_cb").value;
var cb2 = getField("5.2.23_cb").value;
var cb3 = getField("5.2.24_cb").value;
var cb4 = getField("5.2.25_cb").value;
var txt = getField("5.2.22_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.25_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.25_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.25_cb").value;
var cb2 = getField("5.2.24_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.25_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.25_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.22_cb").value;
var cb2 = getField("5.2.23_cb").value;
var cb3 = getField("5.2.24_cb").value;
var cb4 = getField("5.2.25_cb").value;
var txt = getField("5.2.22_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.26_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.26_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.26_cb").value;
var cb2 = getField("5.2.27_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.26_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.26_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.26_cb").value;
var cb2 = getField("5.2.27_cb").value;
var cb3 = getField("5.2.28_cb").value;
var cb4 = getField("5.2.29_cb").value;
var txt = getField("5.2.26_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.27_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.27_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.27_cb").value;
var cb2 = getField("5.2.26_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.27_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.27_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.26_cb").value;
var cb2 = getField("5.2.27_cb").value;
var cb3 = getField("5.2.28_cb").value;
var cb4 = getField("5.2.29_cb").value;
var txt = getField("5.2.26_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.28_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.28_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.28_cb").value;
var cb2 = getField("5.2.29_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.28_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.28_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.26_cb").value;
var cb2 = getField("5.2.27_cb").value;
var cb3 = getField("5.2.28_cb").value;
var cb4 = getField("5.2.29_cb").value;
var txt = getField("5.2.26_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.29_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.29_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.29_cb").value;
var cb2 = getField("5.2.28_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.29_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.29_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.26_cb").value;
var cb2 = getField("5.2.27_cb").value;
var cb3 = getField("5.2.28_cb").value;
var cb4 = getField("5.2.29_cb").value;
var txt = getField("5.2.26_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.2_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.2_cb").value;
var cb2 = getField("5.2.3_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.2_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.2_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.2_cb").value;
var cb2 = getField("5.2.3_cb").value;
var cb3 = getField("5.2.4_cb").value;
var cb4 = getField("5.2.5_cb").value;
var txt = getField("5.2.2_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.3_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.3_cb").value;
var cb2 = getField("5.2.2_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.3_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.3_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.2_cb").value;
var cb2 = getField("5.2.3_cb").value;
var cb3 = getField("5.2.4_cb").value;
var cb4 = getField("5.2.5_cb").value;
var txt = getField("5.2.2_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.4_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.4_cb").value;
var cb2 = getField("5.2.5_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.4_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.4_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.2_cb").value;
var cb2 = getField("5.2.3_cb").value;
var cb3 = getField("5.2.4_cb").value;
var cb4 = getField("5.2.5_cb").value;
var txt = getField("5.2.2_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.5_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.5_cb").value;
var cb2 = getField("5.2.4_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.5_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.5_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.2_cb").value;
var cb2 = getField("5.2.3_cb").value;
var cb3 = getField("5.2.4_cb").value;
var cb4 = getField("5.2.5_cb").value;
var txt = getField("5.2.2_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.6_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.6_cb").value;
var cb2 = getField("5.2.7_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.6_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.6_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.6_cb").value;
var cb2 = getField("5.2.7_cb").value;
var cb3 = getField("5.2.8_cb").value;
var cb4 = getField("5.2.9_cb").value;
var txt = getField("5.2.6_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.7_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.7_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.7_cb").value;
var cb2 = getField("5.2.6_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.7_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.7_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.6_cb").value;
var cb2 = getField("5.2.7_cb").value;
var cb3 = getField("5.2.8_cb").value;
var cb4 = getField("5.2.9_cb").value;
var txt = getField("5.2.6_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.8_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.8_cb").value;
var cb2 = getField("5.2.9_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.8_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.8_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.6_cb").value;
var cb2 = getField("5.2.7_cb").value;
var cb3 = getField("5.2.8_cb").value;
var cb4 = getField("5.2.9_cb").value;
var txt = getField("5.2.6_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.9_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.9_cb:Annot1:MouseUp:Action1 ***********/
var cb1 = getField("5.2.9_cb").value;
var cb2 = getField("5.2.8_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.2.9_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.2.9_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("5.2.6_cb").value;
var cb2 = getField("5.2.7_cb").value;
var cb3 = getField("5.2.8_cb").value;
var cb4 = getField("5.2.9_cb").value;
var txt = getField("5.2.6_comment");

if ((cb1 !== "Off" || cb2 !== "Off") && (cb3 !== "Off" || cb4 !== "Off")) {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.3.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.3.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.3.1_cb").value;
var txt = getField("5.3.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.3.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.3.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("5.3.1_cb").value;
var txt2 = getField("5.3.2_cb");
var txt3 = getField("5.3.3_cb");
var txt4 = getField("5.3.4_cb");
var cmt2 = getField("5.3.2_comment");
var cmt3 = getField("5.3.3_comment");
var cmt4 = getField("5.3.4_comment");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.3.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.3.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.3.2_cb").value;
var txt = getField("5.3.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.3.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.3.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.3.3_cb").value;
var txt = getField("5.3.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>5.3.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:5.3.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("5.3.4_cb").value;
var txt = getField("5.3.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.1.1_cb").value;
var txt = getField("6.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("6.1.1_cb").value;
var txt2 = getField("6.1.2_cb");
var txt3 = getField("6.1.3_cb");
var txt4 = getField("6.1.4_cb");
var txt5 = getField("6.1.5_cb");
var na5 = getField("6.1.5_NA");
var txt6 = getField("6.1.6_cb");
var cmt2 = getField("6.1.2_comment");
var cmt3 = getField("6.1.3_comment");
var cmt4 = getField("6.1.4_comment");
var cmt5 = getField("6.1.5_comment");
var cmt6 = getField("6.1.6_comment");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    txt5.display = display.hidden;
    na5.display = display.hidden;
    txt6.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
    cmt5.value = 'N/A';
    cmt6.value = 'N/A';
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt5.display = display.visible;
    na5.display = display.visible
    txt6.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    txt5.value = false;
    txt6.value = false;
    na5.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';
    cmt5.value = '';
    cmt6.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.1.2_cb").value;
var txt = getField("6.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.1.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.1.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.1.3_cb").value;
var txt = getField("6.1.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.1.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.1.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.1.4_cb").value;
var txt = getField("6.1.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.1.5_NA:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.1.5_NA:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.1.5_NA").value;
var txt = getField("6.1.5_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.1.5_NA:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.1.5_NA:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("6.1.5_NA").value; // nimmt wert von erster checkbox
var cb2 = getField("6.1.5_cb"); // nimmt wert von zweiter checkbox

if (cb1 !== "Off") { // wenn erste box “on”
    cb2.value = "Off"; // zweite box “off”
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.1.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.1.5_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.1.5_cb").value;
var txt = getField("6.1.5_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.1.5_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.1.5_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("6.1.5_cb").value; // nimmt wert von erster checkbox
var cb2 = getField("6.1.5_NA"); // nimmt wert von zweiter checkbox

if (cb1 !== "Off") { // wenn erste box “on”
    cb2.value = "Off"; // zweite box “off”
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.1.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.1.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.1.6_cb").value;
var txt = getField("6.1.6_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.2.10_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.2.10_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.2.10_cb").value;
var txt = getField("6.2.10_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.2.11_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.2.11_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.2.11_cb").value;
var txt = getField("6.2.11_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.2.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.2.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.2.1_cb").value;
var txt = getField("6.2.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.2.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.2.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("6.2.1_cb").value;
var txt2 = getField("6.2.2_cb");
var txt3 = getField("6.2.3_cb");
var txt4 = getField("6.2.4_cb");
var txt5 = getField("6.2.5_cb");
var txt6 = getField("6.2.6_cb");
var txt7 = getField("6.2.7_cb");
var txt8 = getField("6.2.8_cb");
var txt9 = getField("6.2.9_cb");
var txt10 = getField("6.2.10_cb");
var txt11 = getField("6.2.11_cb");
var cmt2 = getField("6.2.2_comment");
var cmt3 = getField("6.2.3_comment");
var cmt4 = getField("6.2.4_comment");
var cmt5 = getField("6.2.5_comment");
var cmt6 = getField("6.2.6_comment");
var cmt7 = getField("6.2.7_comment");
var cmt8 = getField("6.2.8_comment");
var cmt9 = getField("6.2.9_comment");
var cmt10 = getField("6.2.10_comment");
var cmt11 = getField("6.2.11_comment");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.hidden;
    txt4.display = display.hidden;
    txt5.display = display.hidden;
    txt6.display = display.hidden;
    txt7.display = display.hidden;
    txt8.display = display.hidden;
    txt9.display = display.hidden;
    txt10.display = display.hidden;
    txt11.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = 'N/A';
    cmt4.value = 'N/A';
    cmt5.value = 'N/A';
    cmt6.value = 'N/A';
    cmt7.value = 'N/A';
    cmt8.value = 'N/A';
    cmt9.value = 'N/A';
    cmt10.value = 'N/A';
    cmt11.value = 'N/A';
} else {
    txt2.display = display.visible;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt5.display = display.visible;
    txt6.display = display.visible;
    txt7.display = display.visible;
    txt8.display = display.visible;
    txt9.display = display.visible;
    txt10.display = display.visible;
    txt11.display = display.visible;
    txt2.value = false;
    txt3.value = false;
    txt4.value = false;
    txt5.value = false;
    txt6.value = false;
    txt7.value = false;
    txt8.value = false;
    txt9.value = false;
    txt10.value = false;
    txt11.value = false;
    cmt2.value = '';
    cmt3.value = '';
    cmt4.value = '';
    cmt5.value = '';
    cmt6.value = '';
    cmt7.value = '';
    cmt8.value = '';
    cmt9.value = '';
    cmt10.value = '';
    cmt11.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.2.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.2.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.2.2_cb").value;
var txt = getField("6.2.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.2.3_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.2.3_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.2.3_cb").value;
var txt = getField("6.2.3_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.2.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.2.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.2.4_cb").value;
var txt = getField("6.2.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.2.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.2.5_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.2.5_cb").value;
var txt = getField("6.2.5_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.2.6_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.2.6_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.2.6_cb").value;
var txt = getField("6.2.6_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.2.7_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.2.7_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.2.7_cb").value;
var txt = getField("6.2.7_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.2.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.2.8_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.2.8_cb").value;
var txt = getField("6.2.8_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>6.2.9_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:6.2.9_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("6.2.9_cb").value;
var txt = getField("6.2.9_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.14_NA:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.14_NA:Annot1:MouseUp:Action1 ***********/
var cb = getField("7.1.14_NA").value;
var txt15 = getField("7.1.15_cb");
var txt16 = getField("7.1.16_cb");
var txt17 = getField("7.1.17_cb");

if (cb !== "Off") {
    txt15.display = display.hidden;
    txt16.display = display.hidden;
    txt17.display = display.hidden;
} else {
    txt15.display = display.visible;
    txt16.display = display.visible;
    txt17.display = display.visible;
    txt15.value = false;
    txt16.value = false;
    txt17.value = false;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.18_NA:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.18_NA:Annot1:MouseUp:Action1 ***********/
var cb = getField("7.1.18_NA").value;
var txt = getField("7.1.18_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.18_NA:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.18_NA:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("7.1.18_NA").value;
var cb2 = getField("7.1.18_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.18_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.18_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("7.1.18_cb").value;
var txt = getField("7.1.18_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.18_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.18_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("7.1.18_cb").value;
var cb2 = getField("7.1.18_NA");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("7.1.1_cb").value;
var txt = getField("7.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("7.1.1_cb").value;
var txt2 = getField("7.1.2_cb");
var na2 = getField("7.1.2_NA");
var txt3 = getField("7.1.3_NA");
var txt4 = getField("7.1.4_NA");
var txt5 = getField("7.1.5_NA");
var txt6 = getField("7.1.6_cb");
var txt7 = getField("7.1.7_cb");
var txt8 = getField("7.1.8_cb");
var txt9 = getField("7.1.9_NA");
var txt10 = getField("7.1.10_NA");
var txt11 = getField("7.1.11_NA");
var txt12 = getField("7.1.12_cb");
var txt13 = getField("7.1.13_cb");
var na14 = getField("7.1.14_NA");
var txt15 = getField("7.1.15_cb");
var txt16 = getField("7.1.16_cb");
var txt17 = getField("7.1.17_cb");
var txt18 = getField("7.1.18_cb");
var na18 = getField("7.1.18_NA");
var cmt2 = getField("7.1.2_comment");
var cmt3 = getField("7.1.3_value");
var cmt4 = getField("7.1.4_value");
var cmt5 = getField("7.1.5_value");
var cmt8 = getField("7.1.8_comment");
var cmt9 = getField("7.1.9_value");
var cmt10 = getField("7.1.10_value");
var cmt11 = getField("7.1.11_value");
var cmt18 = getField("7.1.18_comment");
var valo1 = getField("18.1.1");
var nao1 = getField("18.1.1_NA");
var valo2 = getField("18.1.2");
var nao2 = getField("18.1.2_NA");

if (cb !== "Off") {
    txt2.display = display.hidden;
    na2.display = display.hidden;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt5.display = display.visible;
    txt6.display = display.hidden;
    txt7.display = display.hidden;
    txt8.display = display.hidden;
    txt9.display = display.visible;
    txt10.display = display.visible;
    txt11.display = display.visible;
    txt12.display = display.hidden;
    txt13.display = display.hidden;
    na14.display = display.hidden;
    txt15.display = display.hidden;
    txt16.display = display.hidden;
    txt17.display = display.hidden;
    txt18.display = display.hidden;
    na18.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = '0';
    cmt3.display = display.hidden;
    cmt4.value = '0';
    cmt4.display = display.hidden;
    cmt5.value = '0';
    cmt5.display = display.hidden;
    cmt8.value = 'N/A';
    cmt9.value = '0';
    cmt9.display = display.hidden;
    cmt10.value = '0';
    cmt10.display = display.hidden;
    cmt11.value = '0';
    cmt11.display = display.hidden;
    cmt18.value = 'N/A';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
} else {
    txt2.display = display.visible;
    na2.display = display.visible;
    //txt6.display= display.visible;
    //txt7.display= display.visible;
    txt8.display = display.visible;
    //txt12.display= display.visible;
    //txt13.display= display.visible;
    //na14.display= display.visible;
    //txt15.display= display.visible;
    //txt16.display= display.visible;
    //txt17.display= display.visible;
    txt18.display = display.visible;
    na18.display = display.visible;
    txt2.value = false;
    na2.value = false;
    txt6.value = false;
    txt7.value = false;
    txt8.value = false;
    txt12.value = false;
    txt13.value = false;
    na14.value = false;
    txt15.value = false;
    txt16.value = false;
    txt17.value = false;
    txt18.value = false;
    na18.value = false;
    cmt2.value = '';
    cmt3.value = '0';
    cmt4.value = '0';
    cmt5.value = '0';
    cmt8.value = '';
    cmt9.value = '0';
    cmt10.value = '0';
    cmt11.value = '0';
    cmt18.value = '';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.2_NA:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.2_NA:Annot1:MouseUp:Action1 ***********/
var cb = getField("7.1.2_NA").value;
var txt = getField("7.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.2_NA:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.2_NA:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("7.1.2_NA").value;
var cb2 = getField("7.1.2_cb");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.2_NA:Annot1:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.2_NA:Annot1:MouseUp:Action3 ***********/
var cb = getField("7.1.2_NA").value;
var txt3 = getField("7.1.3_NA");
var txt4 = getField("7.1.4_NA");
var txt5 = getField("7.1.5_NA");
var txt6 = getField("7.1.6_cb");
var txt7 = getField("7.1.7_cb");
var cmt3 = getField("7.1.3_value");
var cmt4 = getField("7.1.4_value");
var cmt5 = getField("7.1.5_value");
var valo1 = getField("18.1.1");
var nao1 = getField("18.1.1_NA");


if (cb !== "Off") {
    txt3.display = display.visible;
    txt3.value = 'N/A';
    txt4.display = display.visible;
    txt4.value = 'N/A';
    txt5.display = display.visible;
    txt5.value = 'N/A';
    txt6.display = display.hidden;
    txt7.display = display.hidden;
    cmt3.value = '0';
    cmt3.display = display.hidden;
    cmt4.value = '0';
    cmt4.display = display.hidden;
    cmt5.value = '0';
    cmt5.display = display.hidden;
    valo1.display = display.hidden;
    nao1.display = display.visible;
} else {
    txt6.display = display.hidden;
    txt7.display = display.hidden;
    txt6.value = false;
    txt7.value = false;
    valo1.display = display.hidden;
    nao1.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("7.1.2_cb").value;
var txt = getField("7.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.2_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.2_cb:Annot1:MouseUp:Action2 ***********/
var cb1 = getField("7.1.2_cb").value;
var cb2 = getField("7.1.2_NA");

if (cb1 !== "Off") {
    cb2.value = "Off";
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.2_cb:Annot1:MouseUp:Action3</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.2_cb:Annot1:MouseUp:Action3 ***********/
var cb = getField("7.1.2_cb").value;
var na3 = getField("7.1.3_NA");
var na4 = getField("7.1.4_NA");
var na5 = getField("7.1.5_NA");
var val3 = getField("7.1.3_value");
var val4 = getField("7.1.4_value");
var val5 = getField("7.1.5_value");
var cb6 = getField("7.1.6_cb");
var cb7 = getField("7.1.7_cb");
var valo1 = getField("18.1.1");
var nao1 = getField("18.1.1_NA");

if (cb !== "Off") {
    na3.display = display.hidden;
    na3.value = 'N/A';
    na4.display = display.hidden;
    na4.value = 'N/A';
    na5.display = display.hidden;
    na5.value = 'N/A';
    val3.display = display.visible;
    val3.value = '';
    val4.display = display.visible;
    val4.value = '';
    val5.display = display.visible;
    val5.value = '';
    cb6.display = display.visible;
    cb6.value = false;
    cb7.display = display.visible;
    cb7.value = false;
    valo1.display = display.visible;
    nao1.display = display.hidden;
} else {
    na3.display = display.visible;
    na4.display = display.visible;
    na5.display = display.visible;
    val3.value = '0';
    val3.display = display.hidden;
    val4.value = '0';
    val4.display = display.hidden;
    val5.value = '0';
    val5.display = display.hidden;
    cb6.display = display.hidden;
    cb7.display = display.hidden;
    valo1.display = display.hidden;
    nao1.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.8_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("7.1.8_cb").value;
var txt = getField("7.1.8_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>7.1.8_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:7.1.8_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("7.1.8_cb").value;
var na3 = this.getField("7.1.9_NA");
var na4 = this.getField("7.1.10_NA");
var na5 = this.getField("7.1.11_NA");
var val3 = this.getField("7.1.9_value");
var val4 = this.getField("7.1.10_value");
var val5 = this.getField("7.1.11_value");
var cb12 = this.getField("7.1.12_cb");
var cb13 = this.getField("7.1.13_cb");
var cb14 = this.getField("7.1.14_NA");
var cb15 = this.getField("7.1.15_cb");
var cb16 = this.getField("7.1.16_cb");
var cb17 = this.getField("7.1.17_cb");
var valo1 = this.getField("18.1.2");
var nao1 = this.getField("18.1.2_NA");

if (cb !== "Off") {
    na3.display = display.hidden;
    na3.value = 'N/A';
    na4.display = display.hidden;
    na4.value = 'N/A';
    na5.display = display.hidden;
    na5.value = 'N/A';
    val3.display = display.visible;
    val3.value = '';
    val4.display = display.visible;
    val4.value = '';
    val5.display = display.visible;
    val5.value = '';
    cb12.display = display.visible;
    cb13.display = display.visible;
    cb14.display = display.visible;
    cb15.display = display.visible;
    cb16.display = display.visible;
    cb17.display = display.visible;
    valo1.display = display.visible;
    nao1.display = display.hidden;
} else {
    na3.display = display.visible;
    na4.display = display.visible;
    na5.display = display.visible;
    val3.value = '0';
    val3.display = display.hidden;
    val4.value = '0';
    val4.display = display.hidden;
    val5.value = '0';
    val5.display = display.hidden;
    cb12.display = display.hidden;
    cb12.value = false;
    cb13.display = display.hidden;
    cb13.value = false;
    cb14.display = display.hidden;
    cb14.value = false;
    cb15.display = display.hidden;
    cb15.value = false;
    cb16.display = display.hidden;
    cb16.value = false;
    cb17.display = display.hidden;
    cb17.value = false;
    valo1.display = display.hidden;
    nao1.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.10a_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.10a_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('8.1.10a_value');
var two = this.getField('8.1.10b_value');

if (two.value !== "") {
    if (one.value > (two.value + 20) || one.value < (two.value - 20)) {
        app.alert("Value must be +-20 to \"Strahlposition x\" in Z-Max");
        one.value = '';
        one.strokeColor = color.red;
        two.strokeColor = color.red;
    } else {
        one.strokeColor = color.transparent;
        two.strokeColor = color.transparent;
    }
} else {
    one.strokeColor = color.transparent;
    two.strokeColor = color.transparent;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.10b_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.10b_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('8.1.10b_value');
var two = this.getField('8.1.10a_value');

if (two.value !== "") {
    if (one.value > (two.value + 20) || one.value < (two.value - 20)) {
        app.alert("Value must be +-20 to \"Strahlposition x\" in Z-Min");
        one.value = '';
        one.strokeColor = color.red;
        two.strokeColor = color.red;
    } else {
        one.strokeColor = color.transparent;
        two.strokeColor = color.transparent;
    }
} else {
    one.strokeColor = color.transparent;
    two.strokeColor = color.transparent;
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.11a_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.11a_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('8.1.11b_value');
var two = this.getField('8.1.11a_value');

if (two.value !== "") {
    if (one.value > (two.value + 20) || one.value < (two.value - 20)) {
        app.alert("Value must be +-20 to \"Strahlposition y\" in Z-Max");
        one.value = '';
        one.strokeColor = color.red;
        two.strokeColor = color.red;
    } else {
        one.strokeColor = color.transparent;
        two.strokeColor = color.transparent;
    }
} else {
    one.strokeColor = color.transparent;
    two.strokeColor = color.transparent;
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.11b_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.11b_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('8.1.11b_value');
var two = this.getField('8.1.11a_value');

if (two.value !== "") {
    if (one.value > (two.value + 20) || one.value < (two.value - 20)) {
        app.alert("Value must be +-20 to \"Strahlposition y\" in Z-Min");
        one.value = '';
        one.strokeColor = color.red;
        two.strokeColor = color.red;
    } else {
        one.strokeColor = color.transparent;
        two.strokeColor = color.transparent;
    }
} else {
    one.strokeColor = color.transparent;
    two.strokeColor = color.transparent;
}


//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.12_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.12_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("8.1.12_cb").value;
var txt = getField("8.1.12_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.12_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.12_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("8.1.12_cb").value;
var va13 = this.getField("8.1.13_value");
var va14 = this.getField("8.1.14_value");
var na13 = this.getField("8.1.13_NA");
var na14 = this.getField("8.1.14_NA");
var valo1 = this.getField("18.1.3");
var nao1 = this.getField("18.1.3_NA");
var valo2 = this.getField("18.1.4");
var nao2 = this.getField("18.1.4_NA");

if (cb !== "Off") {
    va13.display = display.visible;
    va13.value = '';
    na13.display = display.hidden;
    na13.value = "N/A";
    va14.display = display.visible;
    va14.value = '';
    na14.display = display.hidden;
    na14.value = "N/A";
    valo1.display = display.visible;
    nao1.display = display.hidden;
    valo2.display = display.visible;
    nao2.display = display.hidden;
} else {
    va13.display = display.hidden;
    va13.value = '0';
    na13.display = display.visible;
    va14.display = display.hidden;
    va14.value = '0';
    na14.display = display.visible;
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.15_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.15_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("8.1.15_cb").value;
var txt = getField("8.1.15_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("8.1.1_cb").value;
var txt = getField("8.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("8.1.1_cb").value;
var txt2 = getField("8.1.2_cb");
var txt3 = getField("8.1.3_NA");
var txt4 = getField("8.1.4_cb");
var txt5 = getField("8.1.5_cb");
var txt6 = getField("8.1.6_NA");
var txt7 = getField("8.1.7_cb");
var txt8 = getField("8.1.8_cb");
var txt9 = getField("8.1.9_cb");
var txt10a = getField("8.1.10a_NA");
var txt10b = getField("8.1.10b_NA");
var txt11a = getField("8.1.11a_NA");
var txt11b = getField("8.1.11b_NA");
var txt12 = getField("8.1.12_cb");
var txt13 = getField("8.1.13_NA");
var txt14 = getField("8.1.14_NA");
var txt15 = getField("8.1.15_cb");
var cmt2 = getField("8.1.2_comment");
var cmt3 = getField("8.1.3_value");
var cmt4 = getField("8.1.4_comment");
var cmt5 = getField("8.1.5_comment");
var cmt6 = getField("8.1.6_value");
var cmt7 = getField("8.1.7_comment");
var cmt8 = getField("8.1.8_comment");
var cmt9 = getField("8.1.9_comment");
var cmt10a = getField("8.1.10a_value");
var cmt10b = getField("8.1.10b_value");
var cmt11a = getField("8.1.11a_value");
var cmt11b = getField("8.1.11b_value");
var cmt12 = getField("8.1.12_comment");
var cmt13 = getField("8.1.13_value");
var cmt14 = getField("8.1.14_value");
var cmt15 = getField("8.1.15_comment");
var valo1 = getField("18.1.3");
var nao1 = getField("18.1.3_NA");
var valo2 = getField("18.1.4");
var nao2 = getField("18.1.4_NA");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.visible;
    txt4.display = display.hidden;
    txt5.display = display.hidden;
    txt6.display = display.visible;
    txt7.display = display.hidden;
    txt8.display = display.hidden;
    txt9.display = display.hidden;
    txt10a.display = display.visible;
    txt10b.display = display.visible;
    txt11a.display = display.visible;
    txt11b.display = display.visible;
    txt12.display = display.hidden;
    txt13.display = display.visible;
    txt14.display = display.visible;
    txt15.display = display.hidden;
    cmt2.value = 'N/A';
    cmt3.value = '5';
    cmt3.display = display.hidden;
    cmt4.value = 'N/A';
    cmt5.value = 'N/A';
    cmt6.value = '0';
    cmt6.display = display.hidden;
    cmt7.value = 'N/A';
    cmt8.value = 'N/A';
    cmt9.value = 'N/A';
    cmt10a.value = '0';
    cmt10a.display = display.hidden;
    cmt10b.value = '0';
    cmt10b.display = display.hidden;
    cmt11a.value = '0';
    cmt11a.display = display.hidden;
    cmt11b.value = '0';
    cmt11b.display = display.hidden;
    cmt12.value = 'N/A';
    cmt13.value = '0';
    cmt13.display = display.hidden;
    cmt14.value = '0';
    cmt14.display = display.hidden;
    cmt15.value = 'N/A';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
} else {
    txt2.display = display.visible;
    txt4.display = display.visible;
    txt5.display = display.visible;
    txt7.display = display.visible;
    txt8.display = display.visible;
    txt9.display = display.visible;
    txt12.display = display.visible;
    txt15.display = display.visible;
    txt2.value = false;
    txt4.value = false;
    txt5.value = false;
    txt7.value = false;
    txt8.value = false;
    txt9.value = false;
    txt12.value = false;
    txt15.value = false;
    cmt2.value = '';
    cmt3.value = '5';
    cmt4.value = '';
    cmt5.value = '';
    cmt6.value = '0';
    cmt7.value = '';
    cmt8.value = '';
    cmt9.value = '';
    cmt10a.value = '0';
    cmt10b.value = '0';
    cmt11a.value = '0';
    cmt11b.value = '0';
    cmt12.value = '';
    cmt13.value = '0';
    cmt14.value = '0';
    cmt15.value = '';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("8.1.2_cb").value;
var txt = getField("8.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.2_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.2_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("8.1.2_cb").value;
var val = this.getField("8.1.3_value");
var na = this.getField("8.1.3_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
} else {
    val.display = display.hidden;
    val.value = '5';
    na.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.4_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.4_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("8.1.4_cb").value;
var txt = getField("8.1.4_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.5_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.5_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("8.1.5_cb").value;
var txt = getField("8.1.5_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.5_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.5_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("8.1.5_cb").value;
var val = this.getField("8.1.6_value");
var na = this.getField("8.1.6_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
} else {
    val.display = display.hidden;
    val.value = '0';
    na.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.7_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.7_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("8.1.7_cb").value;
var txt = getField("8.1.7_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.8_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.8_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("8.1.8_cb").value;
var txt = getField("8.1.8_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.9_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.9_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("8.1.9_cb").value;
var txt = getField("8.1.9_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>8.1.9_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:8.1.9_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("8.1.9_cb").value;
var va10a = this.getField("8.1.10a_value");
var va11a = this.getField("8.1.11a_value");
var va10b = this.getField("8.1.10b_value");
var va11b = this.getField("8.1.11b_value");
var na10a = this.getField("8.1.10a_NA");
var na11a = this.getField("8.1.11a_NA");
var na10b = this.getField("8.1.10b_NA");
var na11b = this.getField("8.1.11b_NA");

if (cb !== "Off") {
    va10a.display = display.visible;
    va10a.value = '';
    na10a.display = display.hidden;
    na10a.value = "N/A";
    va10b.display = display.visible;
    va10b.value = '';
    na10b.display = display.hidden;
    na11a.value = "N/A";
    va11a.display = display.visible;
    va11a.value = '';
    na11a.display = display.hidden;
    na10b.value = "N/A";
    va11b.display = display.visible;
    va11b.value = '';
    na11b.display = display.hidden;
    na11b.value = "N/A";
} else {
    va10a.display = display.hidden;
    va10a.value = '0';
    na10a.display = display.visible;
    va11a.display = display.hidden;
    va11a.value = '0';
    na11a.display = display.visible;
    va10b.display = display.hidden;
    va10b.value = '0';
    na10b.display = display.visible;
    va11b.display = display.hidden;
    va11b.value = '0';
    na11b.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.10_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.10_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.10_cb").value;
var txt = getField("9.1.10_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.11_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.11_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.11_cb").value;
var txt = getField("9.1.11_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.12_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.12_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.12_cb").value;
var txt = getField("9.1.12_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.13_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.13_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.13_cb").value;
var txt = getField("9.1.13_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.14_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.14_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.14_cb").value;
var txt = getField("9.1.14_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.15_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.15_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.15_cb").value;
var txt = getField("9.1.15_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.16_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.16_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.16_cb").value;
var txt = getField("9.1.16_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.16_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.16_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("9.1.16_cb").value;
var va17 = this.getField("9.1.17_value");
var va18 = this.getField("9.1.18_value");
var va19 = this.getField("9.1.19_value");
var va20 = this.getField("9.1.20_value");
var va21 = this.getField("9.1.21_value");
var va22 = this.getField("9.1.22_value");
var na17 = this.getField("9.1.17_NA");
var na18 = this.getField("9.1.18_NA");
var na19 = this.getField("9.1.19_NA");
var na20 = this.getField("9.1.20_NA");
var na21 = this.getField("9.1.21_NA");
var na22 = this.getField("9.1.22_NA");

if (cb !== "Off") {
    va17.display = display.visible;
    va17.value = '';
    va18.display = display.visible;
    va18.value = '';
    va19.display = display.visible;
    va19.value = '';
    va20.display = display.visible;
    va20.value = '';
    va21.display = display.visible;
    va21.value = '';
    va22.display = display.visible;
    va22.value = '';
    na17.display = display.hidden;
    na17.value = "N/A";
    na18.display = display.hidden;
    na18.value = "N/A";
    na19.display = display.hidden;
    na19.value = "N/A";
    na20.display = display.hidden;
    na20.value = "N/A";
    na21.display = display.hidden;
    na21.value = "N/A";
    na22.display = display.hidden;
    na22.value = "N/A";
} else {
    va17.display = display.hidden;
    va17.value = '100';
    va18.display = display.hidden;
    va18.value = '100';
    va19.display = display.hidden;
    va19.value = '200';
    va20.display = display.hidden;
    va20.value = '200';
    va21.display = display.hidden;
    va21.value = '100';
    va22.display = display.hidden;
    va22.value = '100';
    na17.display = display.visible;
    na18.display = display.visible;
    na19.display = display.visible;
    na20.display = display.visible;
    na21.display = display.visible;
    na22.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.1_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.1_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.1_cb").value;
var txt = getField("9.1.1_comment");

if (cb !== "Off") {
    txt.value = '';
} else {
    txt.value = 'N/A';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.1_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.1_cb:Annot1:MouseUp:Action2 ***********/
var cb = getField("9.1.1_cb").value;
var txt2 = getField("9.1.2_cb");
var txt3 = getField("9.1.3_NA");
var txt4 = getField("9.1.4_NA");
var txt5 = getField("9.1.5_NA");
var txt6 = getField("9.1.6_NA");
var txt7 = getField("9.1.7_cb");
var txt8 = getField("9.1.8_NA");
var txt9 = getField("9.1.9_cb");
var txt10 = getField("9.1.10_cb");
var txt11 = getField("9.1.11_cb");
var txt12 = getField("9.1.12_cb");
var txt13 = getField("9.1.13_cb");
var txt14 = getField("9.1.14_cb");
var txt15 = getField("9.1.15_cb");
var txt16 = getField("9.1.16_cb");
var txt17 = getField("9.1.17_NA");
var txt18 = getField("9.1.18_NA");
var txt19 = getField("9.1.19_NA");
var txt20 = getField("9.1.20_NA");
var txt21 = getField("9.1.21_NA");
var txt22 = getField("9.1.22_NA");
var txt23 = getField("9.1.23_cb");
var txt24 = getField("9.1.24_NA");
var txt25 = getField("9.1.25_NA");
var txt26 = getField("9.1.26_NA");
var txt27 = getField("9.1.27_NA");
var txt28 = getField("9.1.28_NA");
var txt29 = getField("9.1.29_NA");
var txt30 = getField("9.1.30_cb");
var txt31 = getField("9.1.31_cb");
var na31 = getField("9.1.31_NA")
var txt32 = getField("9.1.32_cb");
var na32 = getField("9.1.32_NA")
var cmt2 = getField("9.1.2_comment");
var cmt3 = getField("9.1.3_value");
var cmt4 = getField("9.1.4_value ");
var cmt5 = getField("9.1.5_value ");
var cmt6 = getField("9.1.6_value ");
var cmt7 = getField("9.1.7_comment");
var cmt8 = getField("9.1.8_value ");
var cmt9 = getField("9.1.9_comment");
var cmt10 = getField("9.1.10_comment");
var cmt11 = getField("9.1.11_comment");
var cmt12 = getField("9.1.12_comment");
var cmt13 = getField("9.1.13_comment");
var cmt14 = getField("9.1.14_comment");
var cmt15 = getField("9.1.15_comment");
var cmt16 = getField("9.1.16_comment");
var cmt17 = getField("9.1.17_value");
var cmt18 = getField("9.1.18_value");
var cmt19 = getField("9.1.19_value");
var cmt20 = getField("9.1.20_value");
var cmt21 = getField("9.1.21_value");
var cmt22 = getField("9.1.22_value");
var cmt23 = getField("9.1.23_comment");
var cmt24 = getField("9.1.24_value");
var cmt25 = getField("9.1.25_value");
var cmt26 = getField("9.1.26_value");
var cmt27 = getField("9.1.27_value");
var cmt28 = getField("9.1.28_value");
var cmt29 = getField("9.1.29_value");
var cmt30 = getField("9.1.30_comment");
var cmt31 = getField("9.1.31_comment");
var val31 = getField("9.1.31_value");
var cmt32 = getField("9.1.32_comment");
var val32 = getField("9.1.32_value");
var valo1 = getField("18.1.5");
var nao1 = getField("18.1.5_NA");
var valo2 = getField("18.1.6");
var nao2 = getField("18.1.6_NA");
var valo3 = getField("18.1.7");
var nao3 = getField("18.1.7_NA");
var valo4 = getField("18.1.8");
var nao4 = getField("18.1.8_NA");
var valo5 = getField("18.1.9");
var nao5 = getField("18.1.9_NA");

if (cb !== "Off") {
    txt2.display = display.hidden;
    txt3.display = display.visible;
    txt4.display = display.visible;
    txt5.display = display.visible;
    txt6.display = display.visible;
    txt7.display = display.hidden;
    txt8.display = display.visible;
    txt9.display = display.hidden;
    txt10.display = display.hidden;
    txt11.display = display.hidden;
    txt12.display = display.hidden;
    txt13.display = display.hidden;
    txt14.display = display.hidden;
    txt15.display = display.hidden;
    txt16.display = display.hidden;
    txt17.display = display.visible;
    txt18.display = display.visible;
    txt19.display = display.visible;
    txt20.display = display.visible;
    txt21.display = display.visible;
    txt22.display = display.visible;
    txt23.display = display.hidden;
    txt24.display = display.visible;
    txt25.display = display.visible;
    txt26.display = display.visible;
    txt27.display = display.visible;
    txt28.display = display.visible;
    txt29.display = display.visible;
    txt30.display = display.hidden;
    txt31.display = display.hidden;
    na31.display = display.visible;
    txt32.display = display.hidden;
    na32.display = display.visible;
    cmt2.value = 'N/A';
    cmt3.value = '0';
    cmt3.display = display.hidden;
    cmt4.value = '0';
    cmt4.display = display.hidden;
    cmt5.value = '0';
    cmt5.display = display.hidden;
    cmt6.value = '0';
    cmt6.display = display.hidden;
    cmt7.value = 'N/A';
    cmt8.value = '0';
    cmt8.display = display.hidden;
    cmt9.value = 'N/A';
    cmt10.value = 'N/A';
    cmt11.value = 'N/A';
    cmt12.value = 'N/A';
    cmt13.value = 'N/A';
    cmt14.value = 'N/A';
    cmt15.value = 'N/A';
    cmt16.value = 'N/A';
    cmt17.value = '100';
    cmt17.display = display.hidden;
    cmt18.value = '100';
    cmt18.display = display.hidden;
    cmt19.value = '200';
    cmt19.display = display.hidden;
    cmt20.value = '200';
    cmt20.display = display.hidden;
    cmt21.value = '100';
    cmt21.display = display.hidden;
    cmt22.value = '100';
    cmt22.display = display.hidden;
    cmt23.value = 'N/A';
    cmt24.value = '0';
    cmt24.display = display.hidden;
    cmt25.value = '0';
    cmt25.display = display.hidden;
    cmt26.value = '0';
    cmt26.display = display.hidden;
    cmt27.value = '0';
    cmt27.display = display.hidden;
    cmt28.value = '0';
    cmt28.display = display.hidden;
    cmt29.value = '0';
    cmt29.display = display.hidden;
    cmt30.value = 'N/A';
    cmt31.value = 'N/A';
    val31.value = '0';
    val31.display = display.hidden;
    cmt32.value = 'N/A';
    val32.value = '0';
    val32.display = display.hidden;
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
    valo3.display = display.hidden;
    nao3.display = display.visible;
    valo4.display = display.hidden;
    nao4.display = display.visible;
    valo5.display = display.hidden;
    nao5.display = display.visible;
} else {
    txt2.display = display.visible;
    txt7.display = display.visible;
    txt9.display = display.visible;
    txt10.display = display.visible;
    txt11.display = display.visible;
    txt12.display = display.visible;
    txt13.display = display.visible;
    txt14.display = display.visible;
    txt15.display = display.visible;
    txt16.display = display.visible;
    txt23.display = display.visible;
    txt30.display = display.visible;
    txt31.display = display.visible;
    txt32.display = display.visible;
    txt2.value = false;
    txt7.value = false;
    txt9.value = false;
    txt10.value = false;
    txt11.value = false;
    txt12.value = false;
    txt13.value = false;
    txt14.value = false;
    txt15.value = false;
    txt16.value = false;
    txt23.value = false;
    txt30.value = false;
    txt31.value = false;
    txt32.value = false;
    cmt2.value = '';
    cmt3.value = '0';
    cmt4.value = '0';
    cmt5.value = '0';
    cmt6.value = '0';
    cmt7.value = '';
    cmt8.value = '0';
    cmt9.value = '';
    cmt10.value = '';
    cmt11.value = '';
    cmt12.value = '';
    cmt13.value = '';
    cmt14.value = '';
    cmt15.value = '';
    cmt16.value = '';
    cmt17.value = '100';
    cmt18.value = '100';
    cmt19.value = '200';
    cmt20.value = '200';
    cmt21.value = '100';
    cmt22.value = '100';
    cmt23.value = '';
    cmt24.value = '0';
    cmt25.value = '0';
    cmt26.value = '0';
    cmt27.value = '0';
    cmt28.value = '0';
    cmt29.value = '0';
    cmt30.value = '';
    cmt31.value = '';
    val31.value = '0';
    cmt32.value = '';
    val32.value = '0';
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
    valo3.display = display.hidden;
    nao3.display = display.visible;
    valo4.display = display.hidden;
    nao4.display = display.visible;
    valo5.display = display.hidden;
    nao5.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.23_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.23_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.23_cb").value;
var txt = getField("9.1.23_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.23_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.23_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("9.1.23_cb").value;
var va17 = this.getField("9.1.24_value");
var va18 = this.getField("9.1.25_value");
var va19 = this.getField("9.1.26_value");
var va20 = this.getField("9.1.27_value");
var va21 = this.getField("9.1.28_value");
var va22 = this.getField("9.1.29_value");
var na17 = this.getField("9.1.24_NA");
var na18 = this.getField("9.1.25_NA");
var na19 = this.getField("9.1.26_NA");
var na20 = this.getField("9.1.27_NA");
var na21 = this.getField("9.1.28_NA");
var na22 = this.getField("9.1.29_NA");

if (cb !== "Off") {
    va17.display = display.visible;
    va17.value = '';
    va18.display = display.visible;
    va18.value = '';
    va19.display = display.visible;
    va19.value = '';
    va20.display = display.visible;
    va20.value = '';
    va21.display = display.visible;
    va21.value = '';
    va22.display = display.visible;
    va22.value = '';
    na17.display = display.hidden;
    na17.value = "N/A";
    na18.display = display.hidden;
    na18.value = "N/A";
    na19.display = display.hidden;
    na19.value = "N/A";
    na20.display = display.hidden;
    na20.value = "N/A";
    na21.display = display.hidden;
    na21.value = "N/A";
    na22.display = display.hidden;
    na22.value = "N/A";
} else {
    va17.display = display.hidden;
    va17.value = '0';
    va18.display = display.hidden;
    va18.value = '0';
    va19.display = display.hidden;
    va19.value = '0';
    va20.display = display.hidden;
    va20.value = '0';
    va21.display = display.hidden;
    va21.value = '0';
    va22.display = display.hidden;
    va22.value = '0';
    na17.display = display.visible;
    na18.display = display.visible;
    na19.display = display.visible;
    na20.display = display.visible;
    na21.display = display.visible;
    na22.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.25_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.25_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.24_value');
var two = this.getField('9.1.25_value');

if ((two.value < (one.value - 20)) || (two.value > (one.value + 20))) {
    if (two.value != '') {
        app.alert("FUN 2 out of range");
        two.value = '';
    }
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.26_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.26_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.24_value');
var two = this.getField('9.1.26_value');

if ((two.value < (one.value * 0.3 - 20)) || (two.value > (one.value * 0.3 + 20))) {
    if (two.value != '') {
        app.alert("SHG 1 out of range");
        two.value = '';
    }
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.27_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.27_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.26_value');
var two = this.getField('9.1.27_value');

if ((two.value < (one.value - 20)) || (two.value > (one.value + 20))) {
    if (two.value != '') {
        app.alert("SHG 2 out of range");
        two.value = '';
    }
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.28_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.28_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.24_value');
var two = this.getField('9.1.28_value');

if ((two.value < (one.value * 0.5 - 20)) || (two.value > (one.value * 0.5 + 20))) {
    if (two.value != '') {
        app.alert("FUN 1up out of range");
        two.value = '';
    }
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.29_value:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.29_value:Annot1:OnBlur:Action1 ***********/
var one = this.getField('9.1.28_value');
var two = this.getField('9.1.29_value');

if ((two.value < (one.value - 20)) || (two.value > (one.value + 20))) {
    if (two.value != '') {
        app.alert("FUN 2up out of range");
        two.value = '';
    }
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.2_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.2_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.2_cb").value;
var txt = getField("9.1.2_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.2_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.2_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("9.1.2_cb").value;
var va3 = this.getField("9.1.3_value");
var va4 = this.getField("9.1.4_value");
var va5 = this.getField("9.1.5_value");
var va6 = this.getField("9.1.6_value");
var na3 = this.getField("9.1.3_NA");
var na4 = this.getField("9.1.4_NA");
var na5 = this.getField("9.1.5_NA");
var na6 = this.getField("9.1.6_NA");
var valo1 = this.getField("18.1.5");
var nao1 = this.getField("18.1.5_NA");
var valo2 = this.getField("18.1.6");
var nao2 = this.getField("18.1.6_NA");
var valo3 = this.getField("18.1.7");
var nao3 = this.getField("18.1.7_NA");
var valo4 = this.getField("18.1.8");
var nao4 = this.getField("18.1.8_NA");

if (cb !== "Off") {
    va3.display = display.visible;
    va3.value = '';
    va4.display = display.visible;
    va4.value = '';
    va5.display = display.visible;
    va5.value = '';
    va6.display = display.visible;
    va6.value = '';
    na3.display = display.hidden;
    na3.value = "N/A";
    na4.display = display.hidden;
    na4.value = "N/A";
    na5.display = display.hidden;
    na5.value = "N/A";
    na6.display = display.hidden;
    na6.value = "N/A";
    valo1.display = display.visible;
    nao1.display = display.hidden;
    valo2.display = display.visible;
    nao2.display = display.hidden;
    valo3.display = display.visible;
    nao3.display = display.hidden;
    valo4.display = display.visible;
    nao4.display = display.hidden;
} else {
    va3.display = display.hidden;
    va3.value = '0';
    na3.display = display.visible;
    va4.display = display.hidden;
    va4.value = '0';
    na4.display = display.visible;
    va5.display = display.hidden;
    va5.value = '0';
    na5.display = display.visible;
    va6.display = display.hidden;
    va6.value = '0';
    na6.display = display.visible;
    valo1.display = display.hidden;
    nao1.display = display.visible;
    valo2.display = display.hidden;
    nao2.display = display.visible;
    valo3.display = display.hidden;
    nao3.display = display.visible;
    valo4.display = display.hidden;
    nao4.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.30_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.30_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.30_cb").value;
var txt = getField("9.1.30_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.31_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.31_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.31_cb").value;
var txt = getField("9.1.31_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.31_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.31_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("9.1.31_cb").value;
var val = this.getField("9.1.31_value");
var na = this.getField("9.1.31_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = 'N/A';
} else {
    val.display = display.hidden;
    val.value = '0';
    na.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.32_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.32_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.32_cb").value;
var txt = getField("9.1.32_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.32_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.32_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("9.1.32_cb").value;
var val = this.getField("9.1.32_value");
var na = this.getField("9.1.32_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
} else {
    val.display = display.hidden;
    val.value = '0';
    na.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.7_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.7_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.7_cb").value;
var txt = getField("9.1.7_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.7_cb:Annot1:MouseUp:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.7_cb:Annot1:MouseUp:Action2 ***********/
var cb = this.getField("9.1.7_cb").value;
var val = this.getField("9.1.8_value");
var na = this.getField("9.1.8_NA");
var valo1 = this.getField("18.1.9");
var nao1 = this.getField("18.1.9_NA");

if (cb !== "Off") {
    val.display = display.visible;
    val.value = '';
    na.display = display.hidden;
    na.value = "N/A";
    valo1.display = display.visible;
    nao1.display = display.hidden;
} else {
    val.display = display.hidden;
    val.value = '0';
    na.display = display.visible;
    valo1.display = display.hidden;
    nao1.display = display.visible;
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>9.1.9_cb:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:9.1.9_cb:Annot1:MouseUp:Action1 ***********/
var cb = getField("9.1.9_cb").value;
var txt = getField("9.1.9_comment");

if (cb !== "Off") {
    txt.value = 'N/A';
} else {
    txt.value = '';
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RSR cancel:Annot1:MouseDown:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:RSR cancel:Annot1:MouseDown:Action1 ***********/
this.getField("RSR confirm text").hidden = true;
this.getField("RSR verify").hidden = true;
this.getField("RSR cancel").hidden = true;
this.getField("1.1.6").value = "";
this.getField("1.1.6").setFocus();

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RSR verify:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:RSR verify:Annot1:MouseUp:Action1 ***********/
this.getField("RSR confirm text").hidden = true;
this.getField("RSR verify").hidden = true;
this.getField("RSR cancel").hidden = true;
this.getField("1.1.6").readonly = true;
// clear_all_on_SR_num_change ();
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>RSR verify:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:RSR verify:Annot1:OnBlur:Action1 ***********/
if (this.getField("RSR verify").hidden == false) {
    this.getField("RSR verify").setFocus();
    app.alert("Please click re-enter to revice the Related Service Report or verify it.");
    this.getField("RSR verify").setFocus();
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SRN cancel:Annot1:MouseDown:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:SRN cancel:Annot1:MouseDown:Action1 ***********/
this.getField("SRN confirm text").hidden = true;
this.getField("SRN verify").hidden = true;
this.getField("SRN cancel").hidden = true;
this.getField("1.1.5").value = "";
this.getField("1.1.5").setFocus();

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SRN verify:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:SRN verify:Annot1:MouseUp:Action1 ***********/
this.getField("SRN confirm text").hidden = true;
this.getField("SRN verify").hidden = true;
this.getField("SRN cancel").hidden = true;
this.getField("1.1.5").readonly = true;
this.getField("1.1.6").setFocus();
// clear_all_on_SR_num_change ();

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>SRN verify:Annot1:OnBlur:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:SRN verify:Annot1:OnBlur:Action1 ***********/
if (this.getField("SRN verify").hidden == false) {
    this.getField("SRN verify").setFocus();
    app.alert("Please click re-enter to revice the Case/Service Request or verify it.");
    this.getField("SRN verify").setFocus();
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Signature:Annot1:MouseDown:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Signature:Annot1:MouseDown:Action1 ***********/
allgood();

function allgood() {
    var mel;
    mel = ""
    for (var i = 0; i < this.numFields; i++) {
        var fName = this.getNthFieldName(i);
        var f = this.getField(fName);
        if ((f.type != "button") && (f.value.length < 1) && (f.name != "Signature")) {
            mel = mel + fName + ", ";
        }
    }
    var sig = getField("Signature");
    if (mel == "") {
        app.alert("All fields are filled", 3);
        sig.display = display.visible;
    } else {
        app.alert("Please fill fields: " + mel);
        sig.display = display.hidden;
    }
}

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Signature:Annot1:MouseDown:Action2</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Signature:Annot1:MouseDown:Action2 ***********/
app.alert("When you sign, the pdf will be locked for editing!", 1, 1);

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Summary:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Summary:Annot1:MouseUp:Action1 ***********/
this.pageNum = 40;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot1:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot2:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot2:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot3:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot3:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot4:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot4:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot5:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot5:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot6:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot6:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot7:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot7:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot8:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot8:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot9:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot9:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot10:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot10:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot11:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot11:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot12:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot12:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot13:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot13:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot14:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot14:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot15:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot15:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot16:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot16:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot17:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot17:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot18:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot18:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot19:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot19:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot20:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot20:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot21:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot21:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot22:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot22:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot23:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot23:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot24:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot24:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot25:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot25:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot26:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot26:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot27:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot27:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot28:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot28:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot29:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot29:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot30:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot30:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot31:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot31:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot32:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot32:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot33:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot33:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot34:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot34:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot35:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot35:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot36:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot36:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot37:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot37:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot38:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot38:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot39:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot39:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot40:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot40:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot41:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot41:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot42:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot42:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Top:Annot43:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Top:Annot43:MouseUp:Action1 ***********/
this.pageNum = 0;
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>Verify:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:Verify:Annot1:MouseUp:Action1 ***********/
allgood();

function allgood() {
    var mel;
    mel = ""
    for (var i = 0; i < this.numFields; i++) {
        var fName = this.getNthFieldName(i);
        var f = this.getField(fName);
        if ((f.type != "button") && (f.value.length < 1) && (f.name != "Signature")) {
            mel = mel + fName + ", ";
        }
    }
    var sig = getField("Signature");
    if (mel == "") {
        app.alert("All fields are filled", 3);
        sig.display = display.visible;
    } else {
        app.alert("Please fill fields: " + mel);
        sig.display = display.hidden;
    }
}
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>open:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:open:Annot1:MouseUp:Action1 ***********/
this.getField("1.3.2_cb").value = "YES";
var cb = this.getField("1.3.2_cb").value;
var cb3 = this.getField("1.3.3_cb");
var cb4 = this.getField("1.3.4_cb");
var cb5 = this.getField("1.3.5_cb");
var cb6 = this.getField("1.3.6_cb");
var cb7 = this.getField("1.3.7_cb");
var cb8 = this.getField("1.3.8_cb");
var cb9 = this.getField("1.3.9_cb");
var cb10 = this.getField("1.3.10_cb");
var cb11 = this.getField("1.3.11_cb");
var cb12 = this.getField("1.3.12_cb");
var cb13 = this.getField("1.3.13_cb");
var cb14 = this.getField("1.3.14_cb");

cb3.display = display.visible;
cb4.display = display.visible;
cb5.display = display.visible;
cb6.display = display.visible;
cb7.display = display.visible;
cb8.display = display.visible;
cb9.display = display.visible;
cb10.display = display.visible;
cb11.display = display.visible;
cb12.display = display.visible;
cb13.display = display.visible;
cb14.display = display.visible;

//IMPORT FDF  
importAnFDF({
    aFields: ["1.3.3_cb", "1.3.3_companyID", "1.3.3_calibdate", "1.3.3_comment",
        "1.3.4_cb", "1.3.4_companyID", "1.3.4_calibdate", "1.3.4_comment",
        "1.3.5_cb", "1.3.5_companyID", "1.3.5_calibdate", "1.3.5_comment",
        "1.3.6_cb", "1.3.6_companyID", "1.3.6_calibdate", "1.3.6_comment",
        "1.3.7_cb", "1.3.7_companyID", "1.3.7_calibdate", "1.3.7_comment",
        "1.3.8_cb", "1.3.8_companyID", "1.3.8_calibdate", "1.3.8_comment",
        "1.3.9_cb", "1.3.9_companyID", "1.3.9_calibdate", "1.3.9_comment",
        "1.3.10_cb", "1.3.10_companyID", "1.3.10_calibdate", "1.3.10_comment",
        "1.3.11_cb", "1.3.11_companyID", "1.3.11_calibdate", "1.3.11_comment",
        "1.3.12_cb", "1.3.12_companyID", "1.3.12_calibdate", "1.3.12_comment",
        "1.3.13_cb", "1.3.13_companyID", "1.3.13_calibdate", "1.3.13_comment",
        "1.3.14_cb", "1.3.14_companyID", "1.3.14_calibdate", "1.3.14_comment"
    ]
});

//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>reset test:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:reset test:Annot1:MouseUp:Action1 ***********/
this.getField("1.1.5").readonly = false
this.getField("1.1.5").value = ""
this.getField("SRN verify").readonly = false
this.getField("SRN cancel").readonly = false

this.getField("1.1.6").readonly = false
this.getField("1.1.6").value = ""
this.getField("RSR verify").readonly = false
this.getField("RSR cancel").readonly = false
//</ACRO_script>
//</AcroForm>

//<AcroForm>
//<ACRO_source>save:Annot1:MouseUp:Action1</ACRO_source>
//<ACRO_script>
/*********** gehört zu: AcroForm:save:Annot1:MouseUp:Action1 ***********/
//EXPORT FDF  
exportAsFDF({
    aFields: ["1.3.3_cb", "1.3.3_companyID", "1.3.3_calibdate", "1.3.3_comment",
        "1.3.4_cb", "1.3.4_companyID", "1.3.4_calibdate", "1.3.4_comment",
        "1.3.5_cb", "1.3.5_companyID", "1.3.5_calibdate", "1.3.5_comment",
        "1.3.6_cb", "1.3.6_companyID", "1.3.6_calibdate", "1.3.6_comment",
        "1.3.7_cb", "1.3.7_companyID", "1.3.7_calibdate", "1.3.7_comment",
        "1.3.8_cb", "1.3.8_companyID", "1.3.8_calibdate", "1.3.8_comment",
        "1.3.9_cb", "1.3.9_companyID", "1.3.9_calibdate", "1.3.9_comment",
        "1.3.10_cb", "1.3.10_companyID", "1.3.10_calibdate", "1.3.10_comment",
        "1.3.11_cb", "1.3.11_companyID", "1.3.11_calibdate", "1.3.11_comment",
        "1.3.12_cb", "1.3.12_companyID", "1.3.12_calibdate", "1.3.12_comment",
        "1.3.13_cb", "1.3.13_companyID", "1.3.13_calibdate", "1.3.13_comment",
        "1.3.14_cb", "1.3.14_companyID", "1.3.14_calibdate", "1.3.14_comment"
    ]
});

//</ACRO_script>
//</AcroForm>