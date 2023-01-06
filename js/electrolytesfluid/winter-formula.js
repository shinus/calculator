var hco = getElement("HCO_input_Id");
var hco_dd = getElement("HCO_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "HCO", values: hco },
  { name: "HCOUnit", values: hco_dd },
];

var caUnit = [
    {
        name: "mmol/L",
        value: 0,
    },
    {
        name: "mEq/L",
        value: 1,
    },
];

var pUnit = [
    {
        name: "kPa",
        value: 0,
    },
    {
        name: "hPa",
        value: 1,
    },
];

function init() {
    createDropDown(caUnit, hco_dd)
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
}

init()

function getExact() {
    var HCO = Number(hco.value);

    var result = 0;

    result = (1.5 * HCO) + 8 ;

    console.log(result);
    return result
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    var percentile = result;

   div1.innerHTML = "pCO₂   " + "\xa0\xa0\xa0 <b> " + result.toFixed(2) + " mmHg </b>";

    output.append(div1);
    output.append(div2);
}

calcBtn.addEventListener("click", showResult);

