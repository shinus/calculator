var weight = getElement("inputWeight");
var weightUnit = getElement("dd_weight");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  {
    name: "weight",
    values: weight,
  },
  {
    name: "weightUnit",
    values: weightUnit,
  },
];

function init() {
  createDropDown(unitsForWeight, weightUnit);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    result();
  }
}
init();

function result() {
  resultPage2(queryParams);
  var weight_val = Number(weight.value);
  var dose = Number(calcTpa());

  output.innerHTML = "";
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  if (weight_val > 0 && weight_val <= 100) {
    div1.innerHTML =
      "<b>Total dose of tPA needed: " +
      dose +
      " mg.</b> <br><br>• Administer <b>" +
      Math.round(dose / 10, 1) +
      " mg</b> (10%) in a 1 min bolus. <br>• Administer the remaining <b>" +
      Math.round(dose * 0.9, 1) +
      " mg</b> (90%) in a 60 min infusion.  ";
  } else if (weight > 100) {
    div1.innerHTML =
      "❗ Your calculated dose <b>exceeded 90 mg</b> - 90 mg is the maximum total dosage allowed, and that's also the amount you should administer in this case.";

    div2.innerHTML =
      "• Administer <b>9 mg</b> (10%) in a 1 min bolus. <br>• Administer the remaining <b>81 mg</b> (90%) in a 60 min infusion.  ";
  }

  output.append(div1);
  output.append(div2);
}

function calcTpa() {
  var weightInKg = Number(weight.value);
  var wUnit = getSelectedValue(weightUnit);
  weightInKg = getWeightInKg(wUnit, weightInKg);

  var tpa = weightInKg * 0.9;

  return tpa.toFixed(2);
}

calcBtn.addEventListener("click", result);


