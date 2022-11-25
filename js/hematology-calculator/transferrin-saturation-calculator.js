var serumIron = getElement("concentration_input_Id");
var serumIron_dd = getElement("concentration_dd_Id");
var total = getElement("Total_input_Id");
var total_dd = getElement("Total_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "serumIron", values: serumIron },
    { name: "serumIronUnit", values: serumIron_dd },
    { name: "totalIron", values: total },
    { name: "totalIronUnit", values: total_dd },
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
    createDropDown(mmUNit, serumIron_dd)
    createDropDown(mmUNit, total_dd)
}

init();

function validateAge() {
    var ageValue = Number(serumIron.value);
    var ageValue1 = Number(total.value);
    var msg;
    var parentId = "calculator-row-2";
    var elementName = "eosError";
    
    if (ageValue >= ageValue1) {
      msg =
        "Iron concentration cannot not exceed total iron-binding capacity.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }

function getExact() {
    var serum = Number(serumIron.value)
    var totals = Number(total.value)

    var result = 0;

    result = serum / totals * 100;

    console.log(result);
    return math.bignumber(result);

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "Transferrin saturation (TSAT)   " + "  " + result.toFixed(2) + "  " + "%";

    output.append(div1);
    output.append(div2);
};

total.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}; 