var age = getElement("dd_age");

//2
var weight_ele = getElement("inputWeight");
var weightUnit = getElement("dd_weight");

var kidney = getElement("dd_kidney");
var dosage = getElement("dd_dosage");
var desiredDosage = getElement("inputDesiredDosage");
var nTablets = getElement("inputTablets");
var frequencyOfDosing = getElement("frequency_dosing");
var tabletStrength = getElement("dd_tabletStrength");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  {
    name: "age",
    values: age,
  },
  {
    name: "weight",
    values: weight_ele,
  },
  {
    name: "weightUnit",
    values: weightUnit,
  },

  {
    name: "kidney",
    values: kidney,
  },
  {
    name: "dosage",
    values: desiredDosage,
  },
  {
    name: "frequency",
    values: frequencyOfDosing,
  },
  {
    name: "tablet-strength",
    values: tabletStrength,
  },
];

function showResult() {
  resultPage2(queryParams);

  var choice = Number(getSelectedValue(age));
  var kidneyLiver = Number(getSelectedValue(kidney));
  var dose = Number(getSelectedValue(dosage));
  var weight = Number(weight_ele.value);
  var kidsDosage = weight * 1;
  var timesPerDay = Number(getSelectedValue(frequencyOfDosing));

  output.innerHTML = "";

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");

  if (choice === 0) {
    if (weight > 0 && weight <= 50) {
      div1.innerHTML =
        "Daily dosage: <b>" +
        kidsDosage +
        "-" +
        2 * kidsDosage +
        " mg.</b><br> Maximum dosage: " +
        weight * 8 +
        " mg/day.<br><br>Recommended form: <b>drops</b> 💧";
    } else if (weight > 50) {
      div1.innerHTML =
        "Daily dosage: <b>" +
        kidsDosage +
        "-" +
        2 * kidsDosage +
        " mg.</b><br> Maximum dosage: 400 mg/day.<br><br>Recommended form: <b>drops</b> 💧 ";
    }

    div2.innerHTML =
      '❗ <b>Warning</b> - <a href="https://www.fda.gov/home">FDA</a> warns against use of tramadol in pediatric patients. This indication, however, might be allowed in other different countries.<b><br> Always consult your doctor first.</b>';
  } else if (choice === 1) {
    if (kidneyLiver === 0) {
      if (dose === 50) {
        div1.innerHTML =
          "<b>Immediate release</b> tablets (50 mg) needed per day: " +
          (timesPerDay * dose) / 50 +
          "-8 💊<br><br><b>Total daily dose:</b> " +
          timesPerDay * dose +
          "-400 mg<br><br>Maximum dose: 400 mg/day";

        div2.innerHTML =
          "<b>Recommended dosing: " +
          dose +
          "-" +
          2 * dose +
          " mg, 4-6 times per day.</b>";
      } else if (dose === 100) {
        //extended release tablets

        div1.innerHTML =
          "💊 Recommended dose: <b> 100 mg/day</b>.<br><br> You may add extra 100 mg every 5 days, till the painkilling effect is satisfactory. <br><br>Maximum dose: 300 mg/day.";
      }
      div3.innerHTML =
        "<b>Number of tablets needed:</b>" +
        " " +
        Number(desiredDosage.value) / Number(tabletStrength.value);
    } else if (kidneyLiver === 1) {
      div1.innerHTML =
        "💊 Recommended dosage: <b>50 mg orally every 12 hours</b> (twice per day).<br><br>• Number of <b>immediate release</b> tablets (50 mg) needed per day: 2<br><br>• Extended release tablets <b>shouldn't be used</b> in liver or kidney insufficiency.<br><br><b>Always consult your doctor!</b>";
    }
  } else if (choice === 2) {
    div1.innerHTML =
      "Dosage should be assessed <b>individualy</b>, and should start from the <b>lowest doses possible</b> - it's all due to a different metabolism in eldery. 💊<br><br>• <b>Extend intervals between the doses.</b><br><br>• Raise the dose <b>slowly</b>.<br><br>• Watch out for any <b>adverse effects</b> (e.g., slow breathing, disturbance of consciousness). <br><br>• Regularly check the function of <b>kidneys</b> and <b>liver</b> (descrese the dose if needed).<br><br><b>Maximum dose: 300 mg/day</b> (immediate release tablets - IR)";
  }
  output.append(div3);
  output.append(div1);
  output.append(div2);

  calcBtn.scrollIntoView({ behaviour: "smooth" });
}

var choice_VS = [
  { name: "<17 years", value: 0 },
  { name: "17-75 years", value: 1 },
  { name: ">75 years", value: 2 },
];
var yesNoVS = [
  { name: "Yes", value: 1 },
  { name: "No", value: 0 },
];
var dose_VS = [
  { name: "Acute pain", value: 50 },
  { name: "Chronic pain ", value: 100 },
];
var timesPerDay_VS = [
  { name: "4x per day", value: 4 },
  { name: "5x per day ", value: 5 },
  { name: "6x per day ", value: 6 },
];

var tablets_VS = [
  { name: "100 mg", value: 100 },
  { name: "150 mg", value: 150 },
  { name: "200 mg", value: 200 },
  { name: "300 mg", value: 300 },
];

var kidney_VS = [
  { name: "No", value: 0 },
  { name: "Yes", value: 1 },
];

function showVariables() {
  var age_val = Number(getSelectedValue(age));
  var dosage_val = Number(getSelectedValue(dosage));

  if (age_val == 0) {
    $("#calculator-row-2").show();
    $("#calculator-row-3").hide();
    $("#calculator-row-4").hide();
    $("#calculator-row-5").hide();
    $("#calculator-row-6").hide();
    $("#calculator-row-7").hide();
  } else if (age_val == 1) {
    $("#calculator-row-2").hide();
    $("#calculator-row-3").show();
    $("#calculator-row-4").show();
    $("#calculator-row-5").show();
    $("#calculator-row-6").show();
    $("#calculator-row-7").hide();
  } else if (age_val == 2) {
    $("#calculator-row-2").hide();
    $("#calculator-row-3").hide();
    $("#calculator-row-4").hide();
    $("#calculator-row-5").hide();
    $("#calculator-row-6").hide();
    $("#calculator-row-7").hide();
  }

  if (age_val == 1 && dosage_val == 50) {
    $("#calculator-row-7").show();
    $("#calculator-row-4").show();
    $("#calculator-row-5").hide();
    $("#calculator-row-6").hide();
  }
}

function showVariables2() {
  var kidneyInsufficiency = Number(getSelectedValue(kidney));
  if (kidneyInsufficiency == 1) {
    $("#calculator-row-7").hide();
    $("#calculator-row-2").hide();
    $("#calculator-row-3").show();
    $("#calculator-row-4").hide();
    $("#calculator-row-5").hide();
    $("#calculator-row-6").hide();
    $("#calculator-row-7").hide();
  } else if (kidneyInsufficiency == 0) {
    $("#calculator-row-7").hide();
    $("#calculator-row-2").show();
    $("#calculator-row-3").show();
    $("#calculator-row-4").show();
    $("#calculator-row-5").show();
    $("#calculator-row-6").show();
    $("#calculator-row-7").show();
  }
}
function init() {
  createDropDown(unitsForWeight, weightUnit);
  createDropDown(choice_VS, age);
  createDropDown(yesNoVS, kidney);
  createDropDown(dose_VS, dosage);
  createDropDown(tablets_VS, tabletStrength);
  createDropDown(timesPerDay_VS, frequencyOfDosing);
  dosage.selectedIndex = 1;
  age.selectedIndex = 1;
  kidney.selectedIndex = 1;
  showVariables();
  showVariables2();

  $("#calculator-row-2").hide();
  $("#calculator-row-7").hide();
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }

  // showVariables2();
}

init();

age.addEventListener("change", showVariables);
dosage.addEventListener("change", showVariables);

calcBtn.addEventListener("click", showResult);

kidney.addEventListener("change", showVariables2);

desiredDosage.addEventListener("input", () => {
  var val = Number(desiredDosage.value);
  var parentId = "calculator-row-6";
  var error = "error101";
  if (val <= 50) {
    var msg = "Daily dosage must be greater than 50 mg.";
    showError(parentId, error, msg);
  } else if (val > 300) {
    var msg = "Desired daily dosage cannot exceed 300 mg/day.";
    showError(parentId, error, msg);
  } else if (val == "") {
    removeError(error);
  } else {
    removeError(error);
  }
});

weight_ele.addEventListener("input", () => {
  var val = Number(weight.value);
  if (val <= 50) {
    var msg = "Daily dosage must be greater than 50 mg.";
    showError(parentId, error, msg);
  } else if (val > 300) {
    var msg = "Desired daily dosage cannot exceed 300 mg/day.";
    showError(parentId, error, msg);
  } else if (val == "") {
    removeError(error);
  } else {
    removeError(error);
  }
});
