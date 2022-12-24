var preg = getElement("I_dd_Id");
var height = getElement("Height_input_Id");
var height_dd = getElement("Height_dd_Id");
var weight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var years = getElement("years_dd_Id");
var vte = getElement("VTE_dd_Id");
var surgery = getElement("surgery_dd_Id");
var thromb = getElement("thrombophilia_dd_Id");
var comor = getElement("Comorbidity_dd_Id");
var realtive = getElement("relative_dd_Id");
var low_risk = getElement("Low-risk_dd_Id");
var parity = getElement("Parity_dd_Id");
var smoker = getElement("Smoker_dd_Id");
var gross = getElement("Gross_dd_Id");
var eclampsia = getElement("Pre-eclampsia_dd_Id");
var art = getElement("ART/IVF_dd_Id");
var multiple = getElement("Multiple_dd_Id");
var puerperium = getElement("puerperium_dd_Id");
var hypermesis = getElement("Hyperemesis_dd_Id");
var ohss = getElement("OHSS_dd_Id");
var current = getElement("Current_dd_Id");
var imobility = getElement("Immobility_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "pregnant", values: preg },
    { name: "height", values: height },
    { name: "heightUnit", values: height_dd },
    { name: "weight", values: weight },
    { name: "weightUnit", values: weight_dd },
    { name: "years", values: years },
    { name: "VTE", values: vte },
    { name: "surgery", values: surgery },
    { name: "thrombophilia", values: thromb },
    { name: "Comorbidity", values: comor },
    { name: "relative", values: realtive },
    { name: "Low-risk", values: low_risk },
    { name: "Parity", values: parity },
    { name: "Smoker", values: smoker },
    { name: "Gross", values: gross },
    { name: "Pre-eclampsia", values: eclampsia },
    { name: "ART/IVF", values: art },
    { name: "Multiple", values: multiple },
    { name: "puerperium", values: puerperium },
    { name: "Hyperemesis", values: hypermesis },
    { name: "OHSS", values: ohss },
    { name: "Current", values: current },
    { name: "Immobility", values: imobility },
];

var iiUnit = [
    {
        name: "am pregnant 🤰",
        value: 0
    },
    {
        name: "have given birth 👶",
        value: 1
    },
];

var heUnit = [
    {
        name: "m",
        value: 0
    },
    {
        name: "cm",
        value: 1
    },
    {
        name: "in",
        value: 2
    },
    {
        name: "ft",
        value: 3
    },
];

var weUnit = [
    {
        name: "kg",
        value: 0
    },
    {
        name: "ounces",
        value: 1
    },
    {
        name: "pounds",
        value: 2
    },
    {
        name: "stones",
        value: 3
    },
];

var ageUnit = [
    {
       name: "No",
       value: 0
    },
    {
        name: "Yes",
        value: 1
    }
];

var vteUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "Yes",
        value: 4
    },
];

var surgUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "Yes",
        value: 3
    },
];


function init() {
    createDropDown(iiUnit, preg)
    createDropDown(heUnit, height_dd);
    createDropDown(weUnit, weight_dd);
    createDropDown(ageUnit, years);
    createDropDown(vteUnit, vte);
    createDropDown(surgUnit, surgery);
    createDropDown(surgUnit, thromb);
    createDropDown(surgUnit, comor);
    createDropDown(ageUnit, realtive);
    createDropDown(ageUnit, low_risk);
    createDropDown(ageUnit, parity);
    createDropDown(ageUnit, smoker);
    createDropDown(ageUnit, gross);
    createDropDown(ageUnit, eclampsia);
    createDropDown(ageUnit, art);
    createDropDown(ageUnit, multiple);
    createDropDown(surgUnit, puerperium);
    createDropDown(surgUnit, hypermesis);
    createDropDown(vteUnit, ohss);
    createDropDown(ageUnit, current);
    createDropDown(ageUnit, imobility);
}

init();



function getExact() {
    var ab = Number(getSelectedValue(preg))
    var b = Number(height.value);
    var c = Number(weight.value);
    var d = Number(getSelectedValue(years));
    var e = Number(getSelectedValue(vte));
    var f = Number(getSelectedValue(surgery));
    var g = Number(getSelectedValue(thromb));
    var h = Number(getSelectedValue(comor));
    var i = Number(getSelectedValue(realtive));
    var j = Number(getSelectedValue(low_risk));
    var k = Number(getSelectedValue(parity));
    var l = Number(getSelectedValue(smoker));
    var m = Number(getSelectedValue(gross));
    var n = Number(getSelectedValue(eclampsia));
    var o = Number(getSelectedValue(art));
    var p = Number(getSelectedValue(multiple));
    var q = Number(getSelectedValue(puerperium));
    var r = Number(getSelectedValue(hypermesis));
    var s = Number(getSelectedValue(ohss));
    var t = Number(getSelectedValue(current));
    var u = Number(getSelectedValue(imobility));
    

    var result, result2 = 0;

    result = d + e + f + g + h + i + j + k + l + m + n + o + p + q + r + s + t + u;

    result2 = b + c ;

    console.log(result);
    return [result, result2];
};

function showResult() {
    resultPage2(queryParams);
    var [result, result2] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;
    var percentile2 = result2;
    div1.innerHTML = "Total sperm " + "    " + result.toFixed(0) + " mln" ;

    div2.innerHTML = "Functional sperm " + "  " + result2.toFixed(2) + " mln";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
    output.append(div7);
    output.append(div8);

};

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};