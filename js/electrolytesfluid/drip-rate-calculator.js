var dose = getElement("dose_input_Id");
var dose_dd = getElement("dose_dd_Id");
var weight = getElement("weight_input_Id");
var weight_dd = getElement("weight_dd_Id");
var concet = getElement("Concentration_input_Id");
var concet_dd = getElement("Concentration_dd_Id");
var volume = getElement("volume_input_Id");
var volume_dd = getElement("volume_dd_Id");
var factor = getElement("factor_input_Id");
var factor_dd = getElement("factor_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "dose", values: dose },
    { name: "doseUnit", values: dose_dd },
    { name: "weight", values: weight },
    { name: "weightUnit", values: weight_dd },
    { name: "concetration", values: concet },
    { name: "concetrationUnit", values: concet_dd },
    { name: "volume", values: volume },
    { name: "volumeUnit", values: volume_dd },
    { name: "factor", values: factor },
    { name: "factorUnit", values: factor_dd },
];

var doUnit = [
    {
        name: "kg",
        value: 0,
    },
    {
        name: "ounce",
        value: 1,
    },
    {
        name: "pound",
        value: 2,
    },
    {
        name: "stone",
        value: 3,
    },
];

var weUnit = [
    {
        name: "mg/dL",
        value: 0,
    },
    {
        name: "mg/mL",
        value: 1,
    },
    {
        name: "g/dL",
        value: 2,
    },
    {
        name: "g/L",
        value: 3,
    },
    {
        name: "g/mL",
        value: 4,
    },
    {
        name: "kg/L",
        value: 5,
    },
];

var coUnit = [
    {
        name: "ml",
        value: 0,
    },
    {
        name: "cl",
        value: 1,
    },
    {
        name: "liters",
        value: 2,
    },
    {
        name: "gallon(US gal)",
        value: 3,
    },
    {
        name: "gallons(UK gal)",
        value: 4,
    },
    {
        name: "fluid ounces",
        value: 5,
    },
];

var baUnit = [
    {
        name: "miligrams",
        value: 0,
    },
    {
        name: "micrograms",
        value: 1,
    },
    {
        name: "grams",
        value: 2,
    },
];

function init() {
    createDropDown(doUnit, dose_dd)
    createDropDown(weUnit, weight_dd)
    createDropDown(coUnit, concet_dd)
    createDropDown(baUnit, volume_dd)
    createDropDown(baUnit, factor_dd)
}

init()

function validateAge(parentId, elementName, msg, condition) {

    var message;
    var parentId = parentId;
    var elementName = elementName;
    console.log(condition);
    if (condition) {
      message = msg;
      showError(parentId, elementName, message);
    } else {
      removeError(elementName);
    }
  }

function getExact() {
    var DOSE = Number(dose.value);
    var WEIGHT = Number(weight.value);
    var CONCETRATION = Number(concet.value);
    var VOLUME = Number(volume.value);
    var FACTOR = Number(factor.value);
    var bag = CONCETRATION * VOLUME / 1000

    var result, result2, result3 = 0;

    result = ((60 * DOSE) / 1000 * (WEIGHT * VOLUME)) / (1000 * bag) * 1000000;

    result2 = result * FACTOR;

    result3 = result / VOLUME;

    console.log(result, result2, result3, bag);
    return [bag, result, result2, result3]
}

function showResult() {
    resultPage2(queryParams)

    var [bag, result, result2, result3] = getExact()

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";
    var percentile = result;

    div1.innerHTML = "Drug in bag  " + "\xa0\xa0\xa0 <b> " + bag.toFixed(3) + " mg </b>";

    div2.innerHTML = "Drip rate   " + "\xa0\xa0\xa0 <b> " + result.toFixed(0) + " ml/h </b>";

    div3.innerHTML = "Flow rate  " + "\xa0\xa0\xa0 <b> " + result2.toFixed(0) + " gtts/per minute </b>"

    div4.innerHTML = "Time to end bag " + "\xa0\xa0\xa0 <b> " + result3.toFixed(0) + " hrs </b>"

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

weight.addEventListener('input', () => {validateAge("calculator-row-2","weightError", "Body weight great than 0 and less than 300 kg.",Number(weight.value) >= 300)})

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};