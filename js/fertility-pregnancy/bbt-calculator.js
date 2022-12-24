var usual = getElement("Usual_input_Id");
var usual_dd = getElement("Usual_dd_Id");
var actual = getElement("Actual_input_Id");
var actual_dd = getElement("Actual_dd_Id");
var measured = getElement("Measured_input_Id");
var measured_dd = getElement("Measured_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "usaual_temp", values: usual },
    { name: "usaualUnit_temp", values: usual_dd },
    { name: "actual_temp", values: actual },
    { name: "actualUnit_temp", values: actual_dd },
    { name: "measured_temp", values: measured },
    { name: "measuredUnit_temp", values: measured_dd },
];

var usUnit = [
    {
        name: "minutes",
        value: 0
    },
    {
        name: "hours",
        value: 1,
    },
];

var meUnit = [
    {
        name: "°C",
        value: 0
    },
    {
        name:"°F",
        value: 1
    },
    {
        name: "K",
        value: 3
    },
];

function init() {
    createDropDown(usUnit, usual_dd)
    createDropDown(usUnit, actual_dd)
    createDropDown(meUnit, measured_dd)
}

init()

function getExact() {
    var us = Number(usual.value);
    var ac = Number(actual.value);
    var me = Number(measured.value);
   
    var result, abc = 0;

    abc = ((us - ac) / 30) * 0.05 ;

    result = abc + me;

    console.log(result);
    return result;
};

function validateAge() {
    var dil = Number(measured.value)
    var msg;
    var parentId = "calculator-row-3";
    var elementName = "bunError";
   
    if (dil > 40) {
      msg =
        "We really hope that your temperature doesn't exceed 104 °F (40 °C)!";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());
    var us = Number(usual.value);
    var ac = Number(actual.value);
    var me = Number(measured.value);

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;
    div1.innerHTML = "Adjusted temperature " + "    " + result.toFixed(2) + " °C";


    if(us > ac) {
        div2.innerHTML = "You measured your basal body temperature <b>" + (us - ac) + " minutes earlier </b> than usual."
    } else if(us < ac ) {
        div2.innerHTML = "You measured your basal body temperature <b>" + (ac - us)   + " minutes later </b> than usual."
    } else {
        div2.innerHTML = ""
    }

    div3.innerHTML = "🌡️ Your adjusted BBT is equal to " +  me  + " °C."

    output.append(div1);
    output.append(div2);
    output.append(div3);

};

measured.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};