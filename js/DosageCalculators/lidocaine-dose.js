var weight = getElement("inputWeight");
var weightUnit = getElement("dd_weight");

var concentration = getElement("dd_concent");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "weight", values: weight },
  { name: "weightUnit", values: weightUnit },
  { name: "concentration", values: concentration },
];
function showResult() {
  resultPage2(queryParams);
  var max = Number(calcDoseInml());
  var maxmg = Number(calcDoseInMg());

  var weight_val = Number(weight.value);
  var weight_unit = getSelectedValue(weightUnit);
  weight_val = getWeightInKg(weight_unit, weight_val);
  var concentration_val = Number(concentration.value);

  output.innerHTML = "";

  output.innerHTML =
    "For a patient weighing <b>" +
    Math.round(weight_val, 1) +
    " kg, </b> maximum allowable subcutaneous dose of <b>" +
    concentration_val +
    "%</b> lidocaine (without epi) is <b>" +
    Math.round(max) +
    " ml</b> (<b>" +
    Math.round(maxmg) +
    " mg</b> lidocaine)<br><br>" +
    "❗ It is recommended that a single dose of lidocaine without epinephrine <b>should not exceed 300 mg</b>.";
}

function calcDoseInMg() {
  var weight_val = Number(weight.value);
  var dose = 4.5 * weight_val;
  return dose;
}

function calcDoseInml() {
  var concentration_val = Number(getSelectedValue(concentration));
  var weight_val = Number(weight.value);
  var dose = 4.5 * (weight_val / 10) * (1 / concentration_val);
  return dose;
}

var concentVS = [
  { name: "0.25", value: 0.25 },
  { name: "0.50", value: 0.5 },
  { name: "0.75", value: 0.75 },
  { name: "1", value: 1 },
  { name: "1.5", value: 1.5 },
  { name: "2", value: 2 },
  { name: "3", value: 3 },
  { name: "4", value: 4 },
];

function init() {
  createDropDown(concentVS, concentration);
  createDropDown(unitsForWeight, weightUnit);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}
init();

calcBtn.addEventListener("click", showResult);

