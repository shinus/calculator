var weight = getElement("inputWeight");
var wUnit = getElement("ddWeight");
var dailyDose = getElement("inputCustomDose");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "weight", values: weight },
  { name: "weight_unit", values: wUnit },
  { name: "daily_dose", values: dailyDose },
];

function showResult() {
  resultPage2(queryParams);
  var weight_val = Number(weight.value);
  var DailyDose = Number(dailyDose.value);

  var yourDosePerKg = calcDosePerKg();
  var maximumDose = calcMaximumDose();

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  output.innerHTML = "";

  if (weight_val > 0) {
    div1.innerHTML =
      "📈 Maximum daily dose of hydroxychloroquine for your patient: <b>" +
      round_to(maximumDose, 2) +
      " mg</b>";
  }
  if (DailyDose > 0) {
    if (yourDosePerKg <= 5) {
      div2.innerHTML =
        "✅ Your custom daily dose (" +
        round_to(yourDosePerKg, 2) +
        " mg/kg) <b>does not exceed</b> the recommended 5 mg per kilogram.<br><br><b>Retinopathy risk:</b><br>• 10-year: 2%<br>• 20-year: 20%";
    } else if (yourDosePerKg > 5) {
      div2.innerHTML =
        "❗ Your custom daily dose (" +
        round_to(yourDosePerKg, 2) +
        " mg/kg) <b>exceeds</b> the recommended 5 mg per kilogram.<br><br><b>Retinopathy risk:</b> <br>• 10-year: 10%<br>• 20-year: 40%";
    }
  }

  output.append(div1);
  output.append(div2);
}

function round_to(n, k) {
  var factor = Math.pow(10, k + 1);
  n = Math.round(Math.round(n * factor) / 10);
  return n / (factor / 10);
}

function calcMaximumDose() {
  var weight_val = Number(weight.value);
  var maximumDose = weight_val * 5;
  return maximumDose;
}

function calcDosePerKg() {
  var weight_val = Number(weight.value);
  var weightUnit = getSelectedValue(wUnit);
  weight_val = getWeightInKg(weightUnit, weight_val);

  var dailyDose_val = Number(dailyDose.value);
  var dosePerKg = dailyDose_val / weight_val;

  return dosePerKg;
}

function init() {
  createDropDown(unitsForWeight, wUnit);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

init();
calcBtn.addEventListener("click", showResult);

