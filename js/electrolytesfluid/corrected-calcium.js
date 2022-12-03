var cal = getElement("calcium_input_Id");
var cal_dd = getElement("calcium_dd_Id");
var albu = getElement("Albumin_input_Id");
var albu_dd = getElement("Albumin_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "calcium", values: cal },
  { name: "calciumUnit", values: cal_dd },
  { name: "albumin", values: albu },
  { name: "albuminUnit", values: albu_dd },
];

var caUnit = [
    {
        name: "mg/dL",
        value: 0,
    },
    {
        name: "mmol/L",
        value: 1,
    },
];

var alUnit = [
    {
        name: "g/dL",
        value: 0,
    },
    {
        name: "g/L",
        value: 1,
    },
];

function init() {
    createDropDown(caUnit, cal_dd)
    createDropDown(alUnit, albu_dd)
}

init()

function getExact() {
    var calcium = Number(cal.value);
    var albumin = Number(albu.value);

    var result = 0;

    result = 0.8 * (4 - albumin) + calcium;

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

   div1.innerHTML = "Corrected calcium   " + "\xa0\xa0\xa0 <b> " + result.toFixed(2) + " mg/dL </b>";

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