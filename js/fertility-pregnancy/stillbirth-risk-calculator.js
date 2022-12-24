var age = getElement("Age_input_Id");
var height = getElement("Height_input_Id");
var height_dd = getElement("Height_dd_Id");
var weight = getElement("weight_input_Id");
var weight_dd = getElement("weight_dd_Id");
var ethnicity = getElement("Ethnicity_dd_Id");
var previous = getElement("Previous_dd_Id");
var assisted = getElement("Assisted_dd_Id");
var diabetes = getElement("Diabetes_dd_Id");
var hypertension = getElement("Hypertension_dd_Id");
var systemic = getElement("Systemic_dd_Id");
var anti = getElement("Anti_dd_Id");
var alcohol = getElement("Alcohol_dd_Id");
var smoking = getElement("Smoking_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "age", values: age },
    { name: "height", values: height },
    { name: "heightUnit", values: height_dd },
    { name: "weight", values: weight },
    { name: "weightUnit", values: weight_dd },
    { name: "ethnicity", values: ethnicity },
    { name: "previous", values: previous },
    { name: "assisted", values: assisted },
    { name: "diabetes", values: diabetes },
    { name: "hypertension", values: hypertension },
    { name: "systemic", values: systemic },
    { name: "anti", values: anti },
    { name: "alcohol", values: alcohol },
    { name: "smoking", values: smoking },
];

var heUnit = [
    {
        name: "cm",
        value: 0
    },
    {
        name: "m",
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

var etUnit = [
    {
        name: "Non-Hispanic white",
        value: 1,
    },
    {
        name: "Non-Hispanic black",
        value: 2.08
    },
    {
        name: "Hispanic",
        value: 1.5
    },
    {
        name: "Asian/Pacific Islander",
        value: 0.5
    },
    {
        name: "Mixed",
        value: 1.0001
    },
];

var parityUnit = [
    {
        name: "No",
        value: 1.2
    },
    {
        name: "Yes",
        value: 0
    },
];

var hyperUnit = [
    {
        name: "No",
        value: 1
    },
    {
        name: "Yes",
        value: 2
    },
];

var lupusUnit = [
    {
        name: "No",
        value: 1
    },
    {
        name: "Yes",
        value: 2.13
    },
];

var antiUnit = [
    {
        name: "No",
        value: 1
    },
    {
        name: "Yes",
        value: 3.43
    },
];

var alcoholUnit = [
    {
        name: "No",
        value: 1
    },
    {
        name: "Yes",
        value: 1.7
    },
];

var smokeUnit = [
    {
        name: "No",
        value: 1
    },
    {
        name: "Yes",
        value: 1.6
    },
];

var artUnit = [
    {
        name: "No",
        value: 1
    },
    {
        name: "Yes",
        value: 2.1
    },
];

var tyUnit = [
    {
        name: "No",
        value: 1
    },
    {
        name: "Type I",
        value: 1.04
    },
    {
        name: "Type II",
        value: 1.05
    },
];

function init() {
    createDropDown(heUnit, height_dd);
    createDropDown(weUnit, weight_dd);
    createDropDown(etUnit, ethnicity);
    createDropDown(parityUnit, previous);
    createDropDown(artUnit, assisted);
    createDropDown(tyUnit, diabetes);
    createDropDown(hyperUnit, hypertension);
    createDropDown(lupusUnit, systemic);
    createDropDown(antiUnit, anti);
    createDropDown(alcoholUnit, alcohol);
    createDropDown(smokeUnit, smoking);
}

init();

function getExact() {
    var a = Number(age.value);
    var b = Number(height.value);
    var c = Number(weight.value);
    var d = Number(getSelectedValue(ethnicity));
    var f = Number(getSelectedValue(previous));
    var g = Number(getSelectedValue(assisted));
    var h = Number(getSelectedValue(diabetes));
    var i = Number(getSelectedValue(hypertension));
    var j = Number(getSelectedValue(systemic));
    var k = Number(getSelectedValue(anti));
    var l = Number(getSelectedValue(alcohol));
    var m = Number(getSelectedValue(smoking));
    

    var result, result2 = 0;

    result = b * a;

    result2 = (a * b * d  * c) / 1000000 ;

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