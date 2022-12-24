var testo = getElement("Testosterone_input_Id");
var testo_dd = getElement("Testosterone_dd_Id");
var estra = getElement("Estradiol_input_Id");
var estra_dd = getElement("Estradiol_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "Testosterone", values: testo },
    { name: "TestosteroneUnit", values: testo_dd },
    { name: "estradiol", values: estra },
    { name: "estradiolUnit", values: estra_dd },
];

var ddUnit = [
    {
        name: "ng/dL",
        value: 0
    },
    {
        name: "nmol/L",
        value: 1
    },
    {
        name: "pg/mL",
        value: 2
    },
    {
        name: "pmol/L",
        value: 2
    },
];

var daUnit = [
    {
        name: "pg/mL",
        value: 0
    },
    {
        name: "pmol/L",
        value: 1
    },
    {
        name: "ng/mL",
        value: 2
    },
];

function init() {
    createDropDown(ddUnit, testo_dd);
    createDropDown(daUnit, estra_dd);
}

init();

function getExact() {
    var a = Number(testo.value);
    var ba = Number(estra.value);

    var result = (a * 34.66 ) / (ba * 3.6713 );

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
    div1.innerHTML = "Ratio (T/E2) " + "    " + result.toFixed(2);

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