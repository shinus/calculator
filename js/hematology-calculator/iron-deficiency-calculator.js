var weight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var hemoglobin = getElement("hemoglobin_input_Id");
var hemoglobin_dd = getElement("hemoglobin_dd_Id");
var target = getElement("Target_input_Id");
var target_dd = getElement("Target_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "weight", values: weight },
    { name: "weightUnit", values: weight_dd },
    { name: "actualHemoglobin", values: hemoglobin },
    { name: "actualHemoglobinUnit", values: hemoglobin_dd },
    { name: "targetHemoglobin", values: target },
    { name: "targetHemoglobinUnit", values: target_dd },
];

var weightUnit = [
    {
        name: "kg",
        value: 0,
    },
    {
        name: "lb",
        value: 1,
    },
    {
        name: "stone",
        value: 2,
    },
];

var mmUNit = [
    {
        name: "µg/dL",
        value: 0,
    },
    {
        name: "g/dL",
        value: 1,
    },
    {
        name: "mg/dl",
        value: 2,
    },
    {
        name: "g/ml",
        value: 3,
    },
    {
        name: "mg/mL",
        value: 4,
    },
];

function init() {
    createDropDown(weightUnit, weight_dd)
    createDropDown(mmUNit, hemoglobin_dd)
    createDropDown(mmUNit, target_dd)
}

init();

function validateAge() {
    var ageValue = Number(target.value);
    var ageValue1 = Number(hemoglobin.value);
    var msg;
    var parentId = "calculator-row-3";
    var elementName = "eosError";
    
    if (ageValue <= ageValue1) {
      msg =
        "The target hemoglobin must be higher than the actual one.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }

function getExact() {
    var wei = Number(weight.value)
    var hemo = Number(hemoglobin.value)
    var targ = Number(target.value)
    var ab = wei * 15;

   

    var result = wei * (targ - hemo) * 2.4 + ab
    console.log(wei, ab);

    console.log(result , ab );
    return [ab, result]

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact()[1]);
    var store = Number(getExact()[0]);

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "Iron stores  " + "  <b>" + store.toFixed(0) + " " + "mg</b>";
    div2.innerHTML = "Deficit " + "  <b>" + result.toFixed(2) + "  " + "mg</b>";
    div3.innerHTML = 'The result refers to parenteral (non-oral) replenishment. Doses for oral iron supplement will differ.';

    output.append(div1);
    output.append(div2);
    output.append(div3);
};

target.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}; 