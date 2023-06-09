var indication_ele = getElement("dd_indication");
var age_ele = getElement("inputAge");
var weight = getElement("inputWeight");
var wUnit = getElement("weightUnit");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "indication_ele", values: indication_ele },
  { name: "age", values: age_ele },
  { name: "weight", values: weight },
  { name: "wUnit", values: wUnit },
];

function showResult() {
  resultPage2(queryParams);
  var indication = Number(getSelectedValue(indication_ele));
  console.log(indication,'indeic');
  var age = Number(age_ele.value);
  var weight_val = Number(weight.value);
  var weightUnit = getSelectedValue(wUnit);
  output.innerHTML = "";
  weight_val = getWeightInKg(weight_val, weightUnit);

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  var a = weight_val * 10;
  var b = weight_val * 15;
  var c = weight_val * 40;
  var d = weight_val * 25;
  var e = weight_val * 35;
  var f = weight_val * 50;

  if (age < 12 && indication == 0) {
      div1.innerHTML =
        "<b>Starting dose:</b> " +
        round_to(a, 0).toLocaleString() +
        "-" +
        round_to(b, 0).toLocaleString() +
        " mg/day, given in 3 doses.(~" +
        round_to(a / 3, 0).toLocaleString() +
        "-" +
        round_to(b / 3, 0).toLocaleString() +
        " mg per dose) <br><br>• Increase the dose during the next <b>3 days.</b>";

      if (age < 5) {
        div1.innerHTML =
          "<b>Final dose:</b> " +
          round_to(c, 0).toLocaleString() +
          " mg/day, given in 3 doses. (~" +
          round_to(c / 3, 0).toLocaleString() +
          " mg per dose) ";
        div1.innerHTML =
          "<b>Final dose:</b> " +
          round_to(d, 0).toLocaleString() +
          "-" +
          round_to(e, 0).toLocaleString() +
          " mg/day, given in 3 doses. (~" +
          round_to(d / 3, 0).toLocaleString() +
          "-" +
          round_to(e / 3, 0).toLocaleString() +
          " mg per dose) ";
      }
      div2.innerHTML =
        "❌ <b>Maximum dose:</b> " +
        round_to(f, 0).toLocaleString() +
        " mg/day";
    
  } else if (age >= 12 && (indication == 0 || indication == 1 || indication == 2 || indication == 3 || indication == 4))  {
    div1.innerHTML =
    "For this indication, gabapentin shouldn't be used in people younger than 12 years.";
  } else if (age <= 12 && indication == 0) {
    div1.innerHTML =
    "• <b>Day 1:</b> 300 mg, 1x per day <br>• <b>Day 2:</b> 300 mg, 2x per day = 600 mg<br>• <b>Day 3:</b> 300 mg, 3x per day = 900 mg<br><br><b>Maintenance:</b> 300-600 mg, 3x per day = 900-1800 mg<br><br>❌ <b>Maximum dose:</b> 3,600 mg";
  } else if (age <= 12 && indication == 1) {
    div1.innerHTML =
      "<b>Typical dosage:</b> 600 mg, 1x day with food at about 5 PM or later";
  } else if (age <= 12 && indication == 2) {
    div1.innerHTML =
      "• <b>Day 1:</b> 300 mg, 1x per day <br>• <b>Day 2:</b> 300 mg, 2x per day = 600 mg<br>• <b>Day 3:</b> 300 mg, 3x per day = 900 mg<br><br>Taken with an evening meal. 🍲<br><br>❌ <b>Maximum dose:</b> 1,800 mg (600 mg, 3x times per day)";
  } else if (age <= 12 && indication == 3) {
    div1.innerHTML =
      "• <b>Day 1:</b> 300 mg, 1x per day <br>• <b>Day 2:</b> 300 mg, 2x per day = 600 mg<br>• <b>Day 3:</b> 300 mg, 3x per day = 900 mg<br><br>❌ <b>Maximum dose:</b> 3,600 mg (600 mg, 3x times per day)";
  } else if (age <= 12 && indication == 4) {
    div1.innerHTML =
      "Some studies have proved that gabapentin <b>might be effective in treating anxiety</b>; especially in patients who do not respond to other kind of drugs.<br><br>💊";
  }
  output.append(div1);
  output.append(div2);
}

var indication_VS = [
  { name: "Epilepsy", value: 0 },
  { name: "Restless Legs Syndrome", value: 1 },
  { name: "Postherpetic Neuralgia", value: 2 },
  { name: "Peripheral neuropathy", value: 3 },
  { name: "Anxiety", value: 4 },
];

function showVariables() {
  var age_val = Number(age_ele.value);
  if (age_val > 9 || age_val == 0) {
    $("#calculator-row-3").hide();
  } else {
    $("#calculator-row-3").show();
  }
}

function round_to(n, k) {
  var factor = Math.pow(10, k + 1);
  n = Math.round(Math.round(n * factor) / 10);
  return n / (factor / 10);
}
function init() {
  createDropDown(indication_VS, indication_ele);
  createDropDown(unitsForWeight, wUnit);
  showVariables();
}
init();

calcBtn.addEventListener("click", showResult);
age_ele.addEventListener("input", () => {
  showVariables();
});

window.onload = function () {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
};
