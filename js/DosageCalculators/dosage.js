var weight = getElement("inputWeight");
var wUnit = getElement("dd_weight");

var dosage = getElement("inputDosage");

var frequency = getElement("dd_frequency");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "weight", values: weight },
  { name: "wUnit", values: wUnit },
  { name: "dosage", values: dosage },
  { name: "frequency", values: frequency },
];

function calcDosage() {
  var weight_val = Number(weight.value);

  var weightUnit = getSelectedValue(wUnit);
  weight_val = getWeightInKg(weightUnit, weight_val);

  var dosage_val = Number(dosage.value);
  var dose = weight_val * dosage_val;
  return dose.toFixed(2);
}

var frequency_VS = [
  { name: "once per day", value: 1 },
  { name: "twice per day", value: 2 },
  { name: "three times/day", value: 3 },
  { name: "four times/day", value: 4 },
  { name: "every 4 hours", value: 6 },
  { name: "every 3 hours", value: 8 },
  { name: "every 2 hours", value: 12 },
  { name: "every hour", value: 24 },
];

function init() {
  createDropDown(frequency_VS, frequency);
  createDropDown(unitsForWeight, wUnit);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}
init();

function showResult() {
  resultPage2(queryParams);
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  var totalDose = Number(calcDosage());

  var frequency_val = Number(getSelectedValue(frequency));

  var dailyDose = totalDose / frequency_val;

  output.innerHTML = "";

  if (frequency != 0) {
    div1.innerHTML =
      "<b> Dose :" + " " + dailyDose.toFixed(2) + " " + "mg" + "</b>";
    output.append(div1);
  }

  div2.innerHTML = "<b> Total Dose :" + " " + totalDose + " " + "mg" + "</b>";
  output.append(div2);
}

calcBtn.addEventListener("click", showResult);

