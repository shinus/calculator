var age_ele = getElement("inputAge");
var indication = getElement("dd_indication");
var tStrength = getElement("dd_strength");

var c_dose = getElement("inputCustom");
const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "age", values: age_ele },
  { name: "indication", values: indication },
  { name: "strength", values: tStrength },
  { name: "dose", values: c_dose },
];

// omni.onInit(function (ctx) {
//   ctx.setDefault("tablet", 5);
//   ctx.bindValueSelect(tablet_VS, "tablet");
//   omni.createValueSetter("choice", choice_ValueSetter);
//   ctx.setDefault("choice", 2);
// });

function showResult() {
  var error = getElement("error101");
  if (error == null) {
    resultPage2(queryParams);
    var choice = Number(getSelectedValue(indication));
    var dose;
    if (choice != 0) {
      dose = Number(indicationVS[choice - 1].dose);
    } else {
      dose = Number(indicationVS[choice].dose);
    }

    var doseValue = Number(calcDose());
    var age = Number(age_ele.value);
    var tablet = $("#dd_strength option:selected").text();
    var numberNeeded = Number(calcTablets(doseValue));

    output.innerHTML = "";

    var msg = "👶 Typical dosage for children aged";
    var inc =
      "<i>Daily dose may be raised by " +
      doseValue +
      " mg once a week, until you obtain a proper response.</i>";

    var name;

    if (round_to(numberNeeded, 1) === 1) {
      name = "tablet";
    } else if (round_to(numberNeeded, 1) !== 1) {
      name = "tablets";
    }
    var tabl =
      "💊 For a daily treatment, you'll need <b>" +
      round_to(numberNeeded, 1) +
      " " +
      name +
      "</b> of " +
      tablet;

    // if (choice === 0) {
    //   ctx.showVariables("dose");
    // }

    var div1 = document.createElement("div");

    if (dose === 2.5 && age < 6 && choice !== 0) {
      div1.innerHTML =
        msg +
        " 3-5 years: <br>•<b> 2.5 mg daily</b>, taken after waking up.<br><br>" +
        inc +
        "<br><br>🚫 <b>Maximum recommended dose:</b> 40 mg/day.";
    } else if (dose === 2.5 && age >= 6 && age < 18 && choice !== 0) {
      div1.innerHTML =
        msg +
        " 6 years or older: <br>•<b> 5 mg daily</b>, divided into one or two doses<br><br> First dose taken after waking up, subsequent doses after 4-6 hours.<br><br>" +
        inc +
        "<br><br>🚫 <b>Maximum recommended dose:</b> 40 mg/day.";
    } else if (dose === 5 && age < 6 && choice !== 0) {
      div1.innerHTML =
        "Adderall for narcolepsy is not recommended for children younger than 6 years old.";
    } else if (dose === 5 && age >= 6 && age < 12 && choice !== 0) {
      div1.innerHTML =
        msg +
        " 6-11 years:<br>• <b>5 mg daily</b>, taken after waking up.<br><br>" +
        inc +
        "<br><br>🚫 <b>Maximum recommended dose:</b> 60 mg/day.<br>Reduce dosage if insomnia or anorexia appear.";
    } else if (dose === 5 && age >= 12 && age < 18 && choice !== 0) {
      div1.innerHTML =
        msg +
        " 12 years or older:<br>• <b>10 mg daily</b>, taken after waking up.<br><br>" +
        inc +
        "<br><br>🚫 <b>Maximum recommended dose:</b> 60 mg/day.<br>Reduce dosage if insomnia or anorexia appear.";
    } else if (dose === 5 && age >= 18 && choice !== 0) {
      div1.innerHTML =
        "🚶 Typical dosage for an adult: <br>• <b>10 mg daily</b>, taken after waking up.<br><br>" +
        inc +
        "<br><br>🚫 <b>Maximum recommended dose:</b> 60 mg/day.<br>Reduce dosage if insomnia or anorexia appear.";
    } else if (dose === 2.5 && age >= 18 && choice !== 0) {
      div1.innerHTML =
        "🚶 Typical dosage for an adult: <br>• <b>5 mg daily</b>, divided into one or two doses<br><br> First dose taken after waking up, subsequent doses after 4-6 hours.<br><br>" +
        inc +
        "<br><br>🚫 <b>Maximum recommended dose:</b> 40 mg/day.";
    } else if (age !== undefined && dose !== undefined) {
      div1.innerHTML =
        "🚫 Remember that you <b>shouldn't exceed the maximum doses</b>:<br>•<b> 40 mg/day</b> for ADHD<br>•<b> 60 mg/day</b> for narcolepsy ";
    }

    var div2 = document.createElement("div");
    div2.innerHTML = tabl;

    output.append(div1);
    output.append(div2);
  }
  //still need to add dosage for adults
  //still need to add the number of tablets needed </3
}

// omni.define("get_age", function (age, dose) {
//   age = age.toNumber();
//   dose = dose.toNumber();

//   var age2;

//   if (dose === 2.5 && age < 6) {
//     age2 = 1;
//   } else if (dose === 2.5 && age >= 6 && age < 18) {
//     age2 = 2;
//   } else if (dose === 5 && age < 12) {
//     age2 = 1;
//   } else if (dose === 5 && age >= 12 && age < 18) {
//     age2 = 2;
//   } else if (dose === 5 && age >= 18) {
//     age2 = 2;
//   } else if (dose === 2.5 && age >= 18) {
//     age2 = 2;
//   } else {
//     age2 = 1;
//   }

//   return age2;
// });

var choice_ValueSetter = [
  { name: "Narcolepsy", uid: "5", values: { dose: 5 } },
  { name: "ADHD", uid: "2", values: { dose: 2.5 } },
  { name: "Custom dose", uid: "0", values: {} },
];

var tablet_VS = [
  { name: "5 mg", value: 5 },
  { name: "7.5 mg", value: 7.5 },
  { name: "10 mg", value: 10 },
  { name: "12.5 mg", value: 12.5 },
  { name: "15 mg", value: 15 },
  { name: "20 mg", value: 20 },
  { name: "30 mg", value: 30 },
];
function round_to(n, k) {
  var factor = Math.pow(10, k + 1);
  n = Math.round(Math.round(n * factor) / 10);
  return n / (factor / 10);
}

var adhdVs = [
  {
    age: "3-5",
    dose: 2.5,
  },
  {
    age: "6-17",
    dose: 5,
  },
  {
    age: ">18",
    dose: 5,
  },
];

var narcolepsyVS = [
  {
    age: "3-5",
    dose: 5,
  },
  {
    age: "6-17",
    dose: 10,
  },
  {
    age: ">18",
    dose: 10,
  },
];

var indicationVS = [
  {
    name: "ADHD",
    value: 1,
    dose: 2.5,
  },
  {
    name: "Narcolepsy",
    value: 2,
    dose: 5,
  },
  {
    name: "custom dose",
    value: 0,
    dose: 0,
  },
];

function init() {
  createDropDown(indicationVS, indication);
  createDropDown(tablet_VS, tStrength);
  showVariables();
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

function showVariables() {
  if (Number(getSelectedValue(indication) == 0)) {
    $("#calculator-row-3").show();
  } else {
    $("#calculator-row-3").hide();
  }
}

function calcTablets(dose) {
  var strength = Number(getSelectedValue(tStrength));
  var tablets = Number(dose) / strength;
  return tablets.toFixed(2);
}

indication.addEventListener("change", showVariables);

function calcDose() {
  var age = Number(age_ele.value);
  var dose = 0;
  var indicator = Number(getSelectedValue(indication));
  var cust_dose = Number(c_dose.value);

  if (indicator == 1) {
    if (age >= 3 && age <= 5) {
      dose = adhdVs[0].dose;
    } else if (age >= 6 && age >= 17) {
      dose = adhdVs[1].dose;
    } else if (age > 17) {
      dose = adhdVs[2].dose;
    }
  } else if (indicator == 2) {
    if (age >= 3 && age <= 5) {
      dose = narcolepsyVS[0].dose;
    } else if (age >= 6 && age >= 17) {
      dose = narcolepsyVS[1].dose;
    } else if (age > 17) {
      dose = narcolepsyVS[2].dose;
    }
  } else {
    dose = cust_dose;
  }

  return dose;
}
init();
calcBtn.addEventListener("click", showResult);

age_ele.addEventListener("input", () => {
  var parentId = "calculator-row-1";
  var elementName = "error101";

  if (
    Number(age_ele.value) < 3 &&
    Number(getSelectedValue(indication)) == 1 &&
    Number(age_ele.value) != 0
  ) {
    var msg =
      "<b>Adderall shouldn't be administered to children younger than 3 years old.</b>";
    showError(parentId, elementName, msg);
  } else if (
    Number(age_ele.value) < 6 &&
    Number(getSelectedValue(indication)) == 2 &&
    Number(age_ele.value) != 0
  ) {
    var msg =
      "<b>Adderall shouldn't be administered to children younger than 6 years old.</b>";
    showError(parentId, elementName, msg);
  } else {
    removeError(elementName);
  }
});
