var pao = getElement("PaO_input_Id");
var pao_dd = getElement("PaO_dd_Id");
var fio = getElement("FiO_input_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "PAO", values: pao },
    { name: "PAOUnit", values: pao_dd },
    { name: "FIO", values: fio },
];

var paUnit = [
    {
        name: "mmHg",
        value: 0,
    },
    {
        name: "inHg",
        value: 1,
    },
    {
        name: "kPa",
        value: 2,
    },
    {
        name: "hPa",
        value: 3,
    },
    {
        name: "Pa",
        value: 4,
    },
];

function init() {
    createDropDown(paUnit, pao_dd)
}

init()

function getExact() {
    var pa = Number(pao.value)
    var fi = Number(fio.value)

    var result = 0;

    result = pa / fi * 100;

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;

    div1.innerHTML = "PaO₂/FiO₂ ratio   " + " <b> " + result.toFixed(2) + "</b> ";

    if (percentile < 400) {
        div2.innerHTML = 'The patients PF ratio is below the healthy range. Consult a doctor as soon as possible';
    }
    output.append(div1);
    output.append(div2);
}

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};