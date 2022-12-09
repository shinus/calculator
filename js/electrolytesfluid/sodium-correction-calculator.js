var sodi = getElement("sodium_input_Id");
var gluc = getElement("glucose_input_Id");
var gluc_dd = getElement("glucose_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "Sodium", values: sodi },
  { name: "glucose", values: gluc },
  { name: "glucoseUnit", values: gluc_dd },
];

var alUnit = [
    {
        name: "mg/dL",
        value: 0,
    },
    {
        name: "mmol/L",
        value: 1,
    },
];

function init() {
    createDropDown(alUnit, gluc_dd)
}

init()

function getExact() {
    var sodium = Number(sodi.value);
    var glucose = Number(gluc.value);

    var result = 0;

    result = sodium + 0.024 * (glucose - 100);

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

   div1.innerHTML = "Corrected sodium   " + "\xa0\xa0\xa0 <b> " + result.toFixed(2) + " mEq/L </b>";

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