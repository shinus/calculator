var NA = getElement("Na_input_Id");
var nitro = getElement("nitrogen_input_Id");
var nitro_dd = getElement("nitrogen_dd_Id");
var gluc = getElement("Glucose_input_Id");
var gluc_dd = getElement("Glucose_dd_Id");
var conce = getElement("concetration_input_Id");
var conce_dd = getElement("concetration_dd_Id");
var osmo = getElement("osmolality_input_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "Na", values: NA },
  { name: "nitro", values: nitro },
  { name: "nitroUnit", values: nitro_dd },
  { name: "glucose", values: gluc },
  { name: "glucoseUnit", values: gluc_dd },
  { name: "concetration", values: conce },
  { name: "concetrationUnit", values: conce_dd },
  { name: "osmolality", values: osmo },
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
        name: "mmol/L",
        value: 50,
    },
    {
        name: "mg/dL",
        value: 60,
    },
];

function init() {
    createDropDown(caUnit, nitro_dd)
    createDropDown(caUnit, gluc_dd)
    createDropDown(alUnit, conce_dd)
}

init()

function getExact() {
    var na = Number(NA.value);
    var nitrogen = Number(nitro.value);
    var glucose = Number(gluc.value);
    var concetration = Number(conce.value);
    var osmolality = Number(osmo.value);

    var result,result2 = 0;

    result = (2*na) + (nitrogen/2.8) + (glucose/18) + (concetration/3.7);

    result2 = osmolality - result;

    console.log(result, result2);
    return [result, result2]
}

function showResult() {
    resultPage2(queryParams)

    var [result, result2] = getExact()

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    var percentile = result;

   div1.innerHTML = "Serum osmolality   " + "\xa0\xa0\xa0 <b> " + result.toFixed(0) + " mOsm/kg H₂O </b>";
   div2.innerHTML = "Osmotic gap   " + "\xa0\xa0\xa0 <b> " + result2.toFixed(0) + " mOsm/kg </b>";

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