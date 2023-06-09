var weight = getElement("inputWeight");
var weightUnit = getElement("dd_weight");
var ageEle = getElement("inputAge");
var ageUnit = getElement("dd_age");
var medication = getElement("dd_medication");

// row 4
var cSolution = getElement("inputCustomSolution");

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
  {
    name: "age",
    values: ageEle,
  },
  {
    name: "ageUnit",
    values: ageUnit,
  },
  {
    name: "medication",
    values: medication,
  },
];
function result() {
  resultPage2(queryParams);
  output.innerHTML = "";
  var typetype = Number(getSelectedValue(medication));

  var max_single = 0;
  var childs_weight = Number(weight.value);
  var wUnit = getSelectedValue(weightUnit);
  childs_weight = getWeightInKg(wUnit, childs_weight);
  var dose;
  if (typetype != 3) {
    dose = getDose();
  } else {
    dose = childs_weight * 15;
  }

  var age = Number(ageEle.value);
  age = convertInMonths(age);
  var solution_strength = Number(cSolution.value);
  var solution_amount = (5 * dose) / 250;
  var a = 0;
  var div0 = document.createElement("div");
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  if (typetype === 0 || typetype == 1) {
    if (typetype === 0) {
      max_single = childs_weight * 15;
      if (age < 2) {
        max_single = 0;
        div1.innerHTML =
          "<i>Infant syrup</i> is not suitable for children under the age of 2 months. Consult a doctor for individualised dosing scheme.";

        a = 1;
      } else if (age > 72) {
        max_single = 0;
        div1.innerHTML =
          "For children older than 6 years, try <i>Six plus syrup</i>.";

        a = 1;
      }
    } else {
      max_single = childs_weight * 15;
      if (age < 72) {
        max_single = 0;
        div1.innerHTML =
          "<i>Six plus syrup</i> is not suitable for children under the age of 6 years. Try <i>Infant syrup</i>.";

        a = 1;
      }
    }
  } else if (typetype == 2) {
    max_single = childs_weight * 15;
    if (age < 72) {
      max_single = 0;
      div1.innerHTML =
        "<i>Tablets</i> are not suitable for children under the age of 6 years. Try <i>Infant syrup</i>.";
      a = 1;
    }
  } else if (typetype == 3) {
    max_single = childs_weight * 15;
    if (solution_amount * solution_strength > 1000) {
      div1.innerHTML;
      "Solution amount: " +
        Math.round((1000 / solution_strength) * 100) / 100 +
        "ml";
    }

    // max_single = solution_strength * solution_amount;
  }

  if (dose === 0 && typetype !== 3 && a === 0) {
    div2.innerHTML =
      "The form of medication is not suitable for chosen weight. Try a different type or consult a physician.";
  }
  if (max_single > 1000) {
    max_single = 1000;
  }
  div2.innerHTML =
    "<i>Administer maximum 4 times in 24 hours. Wait at least 4 hours between doses</i>.";

  if (!isNaN(max_single) && max_single !== 0) {
    div3.innerHTML =
      "Maximum <u>single dose</u> of paracetamol is " +
      max_single +
      " mg.</br>" +
      "Maximum <u>daily dose</u> of paracetamol is " +
      Math.round(max_single * 400) / 100 +
      " mg.";
  }

  if (age > 72 && typetype != 2 && typetype != 3) {
    div0.innerHTML = "Maximum single dose" + " " + dose + " " + "mL";
  }

  output.append(div0);
  output.append(div1);
  output.append(div2);
  output.append(div3);
}

function getDose() {
  var dose = 0;
  var typetype = Number(getSelectedValue(medication));
  var childs_weight = Number(weight.value);
  if (typetype === 0 || typetype == 1) {
    if (childs_weight < 5) {
      //syrup
      dose = 0;
    } else if (childs_weight < 8) {
      dose = 4;
    } else if (childs_weight < 10) {
      dose = 5;
    } else if (childs_weight < 15) {
      dose = 6;
    } else if (childs_weight < 20) {
      dose = 9;
    } else if (childs_weight < 25) {
      dose = 12;
    } else if (childs_weight < 30) {
      dose = 15;
    } else if (childs_weight < 35) {
      dose = 18;
    } else if (childs_weight < 40) {
      dose = 21;
    } else if (childs_weight < 45) {
      dose = 25;
    } else if (childs_weight < 30) {
      dose = 28;
    } else {
      dose = 0;
    }
    if (typetype == 1) {
      dose = dose / 2;
    }
  } else if (typetype == 2) {
    //tabletki - trzeba sprawdzic
    if (childs_weight < 35) {
      dose = 0;
    } else if (childs_weight < 50) {
      dose = 1;
    } else if (childs_weight < 65) {
      dose = 1.5;
    } else if (childs_weight >= 65) {
      dose = 2;
    }
  } else {
    dose = 0;
  }

  return dose;
}

var ageVS = [
  {
    name: "years",
    value: 0,
  },
  {
    name: "months",
    value: 1,
  },
  {
    name: "weeks",
    value: 2,
  },
];

var medicationVS = [
  {
    name: "infant syrup(120 mg/5 ml)",
    value: 0,
  },
  {
    name: "six plus syrup(250 mg/ml)",
    value: 1,
  },
  {
    name: "Tablet (500 mg)",
    value: 2,
  },
  {
    name: "Custom solution",
    value: 3,
  },
];

function init() {
  createDropDown(unitsForWeight, weightUnit);
  createDropDown(ageVS, ageUnit);
  createDropDown(medicationVS, medication);

  showVariables();
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    result();
  }
}

init();

function showVariables() {
  var medication_val = Number(getSelectedValue(medication));

  if (medication_val == 3) {
    $("#calculator-row-4").show();
  } else {
    $("#calculator-row-4").hide();
  }
}

medication.addEventListener("change", () => {
  showVariables();
});

calcBtn.addEventListener("click", result);

function convertInMonths(ageValue) {
  var age_Unit = Number(getSelectedValue(ageUnit));

  if (age_Unit == 0) {
    return (age = ageValue * 12);
  } else if (age_Unit == 1) {
    return (age = ageValue);
  } else if (age_Unit == 2) {
    return (age = ageValue / 4.345);
  }
}


