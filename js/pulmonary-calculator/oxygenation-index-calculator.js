var fio = getElement("FiO_input_Id");
var map = getElement("MAP_input_Id");
var map_dd = getElement("MAP_dd_Id");
var pao = getElement("PaO_input_Id");
var pao_dd = getElement("PaO_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "FIO", values: fio },
    { name: "MAP", values: map },
    { name: "MAPUnit", values: map_dd },
    { name: "PAO", values: pao },
    { name: "PAOUnit", values: pao_dd },
];

var faUnit = [
    {
        name: "mmhg",
        value: 0,
    },
    {
        name: "kPa",
        value: 1,
    },
    {
        name: "cmH₂O",
        value: 2,
    },
    {
        name: "mmH₂O",
        value: 2,
    },
];

function init() {
    createDropDown(faUnit, map_dd)
    createDropDown(faUnit, pao_dd)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

function validateAge() {
    var ageValue = Number(fio.value);
    var msg;
    var parentId = "calculator-row-1";
    var elementName = "eosError";

    if (ageValue > 100) {
        msg =
            "FiO₂ value ranges from 0 - 100%.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}
function validateAge2() {
    var ageValue = Number(map.value);
    var msg;
    var parentId = "calculator-row-2";
    var elementName = "eosError";

    if (ageValue >= 100) {
        msg =
            "Mean Airway Pressure is too high.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}
function validateAge3() {
    var ageValue = Number(pao.value);
    var msg;
    var parentId = "calculator-row-3";
    var elementName = "eosError";

    if (ageValue >= 800) {
        msg =
          "PaO2₂ is too high.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}

function getExact() {
    var fi = Number(fio.value)
    var pa = Number(pao.value)
    var ma = Number(map.value)

    var result, result2 = 0;

    result = pa / fi * 100;

    result2 = (fi * ma) / pa;

    console.log(result, result2);
    return [result, result2]
}

function showResult() {
    resultPage2(queryParams)

    var [result, result2] = getExact()

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result2
    div1.innerHTML = "PaO₂/FiO₂ ratio " + "    " + result.toFixed(2);
    div2.innerHTML = "Oxygenation Index (OI) " + "    " + result2.toFixed(2);

    if (percentile < 5) {
        div3.innerHTML = '<b>Good outcome.</b>';
        div4.innerHTML = 'The typical result of a healthy person.';
    } else if (percentile >= 5 & percentile <= 25) {
        div3.innerHTML = '<b>Poor outcome</b>';
        div4.innerHTML = 'Indicates an ongoing pathological process.';
    } else {
        div3.innerHTML = '<b>Severe condition</b>';
        div4.innerHTML = 'Chance of death >40%.';
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

pao.addEventListener("input", validateAge3)
map.addEventListener("input", validateAge2)
fio.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);

