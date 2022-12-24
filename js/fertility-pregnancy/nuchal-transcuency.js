var length = getElement("length_input_Id");
var length_dd = getElement("length_dd_Id");
var trans = getElement("translucency_input_Id");
var tran_dd = getElement("translucency_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "length", values: length },
    { name: "legthUnit", values: length_dd },
    { name: "translucency", values: trans },
    { name: "translucencyUnit", values: tran_dd },
];

var ddUnit = [
    {
        name: "mm",
        value: 0
    },
    {
        name: "cm",
        value: 1
    },
];

function init() {
    createDropDown(ddUnit, length_dd);
    createDropDown(ddUnit, tran_dd);
}

init();

function getExact() {
    var a = Number(length.value);
    var ba = Number(trans.value);

    var result = 0.437 + (0.01969 * a);

    console.log(result);
    return result;
};

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;
    div1.innerHTML = "Expected nuchal translucency " + "    " + result.toFixed(2) + " mm";

    output.append(div1);
    output.append(div2);

};

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};