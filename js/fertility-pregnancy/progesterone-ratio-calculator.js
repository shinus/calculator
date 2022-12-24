var prog = getElement("Progesterone_input_Id");
var prog_dd = getElement("Progesterone_dd_Id");
var estra = getElement("Estradiol_input_Id");
var estra_dd = getElement("Estradiol_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "progesterone", values: prog },
    { name: "progesteroneUnit", values: prog_dd },
    { name: "estradiol", values: estra },
    { name: "estradiolUnit", values: estra_dd },
];

var ddUnit = [
    {
        name: "ng/mL",
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
    createDropDown(ddUnit, prog_dd);
    createDropDown(daUnit, estra_dd);
}

init();

function getExact() {
    var a = Number(prog.value);
    var b = Number(estra.value);

    var result = (a / b) * 1000;

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
    div1.innerHTML = "Ratio (Pg/E2 or P/E2) " + "    " + result.toFixed(0);

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