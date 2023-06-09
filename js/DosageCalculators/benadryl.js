var age_ele = getElement("inputAge");
var ageUnit = getElement("dd_age");
var medicationType = getElement("dd_medication");

var medicationTypeVS = [
  {
    name: "Benadryl® Allergy ULTRATAB",
    value: 0,
  },
  {
    name: "Benadryl® Allergy LIQUI-GELS",
    value: 1,
  },
  {
    name: "Benadryl® Allergy Plus Congestion",
    value: 2,
  },
  {
    name: "Children’s Benadryl® Allergy Liquid",
    value: 3,
  },
  {
    name: "Children’s Benadryl® Allergy Plus Congestion",
    value: 4,
  },
  {
    name: "Children’s Benadryl® Chewables",
    value: 5,
  },
  {
    name: "Benadryl® Extra Strength Allergy ULTRATAB",
    value: 6,
  },
];

var ageVS = [
  {
    name: "yrs",
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

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "age_ele", values: age_ele },
  { name: "ageUnit", values: ageUnit },
  { name: "medicationType", values: medicationType },
];

function validation() {
  var age = Number(age_ele.value);
  age = convertInMonths(age);
  var typetype = Number(getSelectedValue(medicationType));

  var parentId = "calculator-row-1";
  var elementName = "error101";
  var msg;

  if (typetype === 0 && age < 72 && age != 0) {
    msg =
      "Do not give Benadryl Allergy ULTRATAB tablets to children under 6 years of age .";
    showError(parentId, elementName, msg);
  } else if (typetype === 1 && age < 72 && age != 0) {
    msg =
      "Do not give Benadryl Allergy LIQUI-GELS to children under 6 years of age.";
    showError(parentId, elementName, msg);
  } else if (typetype === 2 && age < 144 && age != 0) {
    msg =
      "Ask a doctor before giving Benadryl Allergy Plus Congestion to children under 12 years of age.";
    showError(parentId, elementName, msg);
  } else if (typetype === 3 && age < 24 && age != 0) {
    msg =
      "Do not give Children’s Benadryl Allergy Liquid to children under 2 years of age.";
    showError(parentId, elementName, msg);
  } else if (typetype === 3 && age >= 24 && age < 72 && age != 0) {
    msg =
      "Do not give Children’s Benadryl Allergy Liquid to children between 2 and 5 years of age, unless instructed to by a doctor.";
    showError(parentId, elementName, msg);
  } else if (typetype === 3 && age >= 144 && age != 0) {
    msg = "This medication is intended for children aged 6 to 11 years old.";
    showError(parentId, elementName, msg && age != 0);
  } else if (typetype === 4 && age < 48) {
    msg =
      "Do not give Children’s Benadryl Allergy Plus Congestion to children under 4 years of age.";
    showError(parentId, elementName, msg && age != 0);
  } else if (typetype === 4 && age >= 48 && age < 72) {
    msg =
      "Do not give Children’s Benadryl Allergy Plus Congestion to children between 4 and 5 years of age, unless instructed to by a doctor.";
  } else if (typetype === 5 && age < 24 && age != 0) {
    msg =
      "Do not give Children’s Benadryl Chewables to children under 2 years of age.";
    showError(parentId, elementName, msg);
  } else if (typetype === 5 && age >= 24 && age < 72 && age != 0) {
    msg =
      "Do not give Children’s Benadryl Chewables to children between 2 and 5 years of age, unless instructed to by a doctor.";
    showError(parentId, elementName, msg);
  } else if (age > 1560) {
    msg = "Please enter corect age";
    showError(parentId, elementName, msg);
  } else {
    removeError(elementName);
  }
}

function showInformation() {
  var typetype = Number(getSelectedValue(medicationType));
  var info;
  if (typetype === 0 || typetype === 1) {
    info =
      "🧐 This medication temporarily relieves the symptoms of <b>hay fever</b> and other upper respiratory allergies: runny nose, sneezing, itchy and watery eyes, itching of the nose or throat, as well as symptoms of the <b>common cold</b> such as runny nose and sneezing.";
  } else if (typetype === 2 || typetype === 4) {
    info =
      "🧐 This medication temporarily <b>reduces nasal congestion and pressure</b>, and relieves symptoms due to hay fever, other upper respiratory allergies, and the common cold.";
  } else if (typetype === 3 || typetype === 5) {
    info =
      "🧐 This medication temporarily relieves symptoms due to <b>hay fever</b> and other upper respiratory allergies: runny nose, sneezing, itchy and watery eyes, itching of the nose or throat.";
  }
  return info;
}

function showResult() {
  resultPage2(queryParams);
  output.innerHTML = "";
  var age = Number(age_ele.value);
  age = Number(convertInMonths(age));

  var typetype = Number(getSelectedValue(medicationType));

  var div0 = document.createElement("div");
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  div0.innerHTML = showInformation();

  if (typetype === 0 && age >= 72 && age < 144) {
    div1.innerHTML =
      "Take 1 tablet 💊 every 4 to 6 hours, or as directed by a doctor.";
  } else if (typetype === 0 && age >= 144) {
    div1.innerHTML =
      "Take 1 💊 or 2 💊💊 tablets every 4 to 6 hours, or as directed by a doctor.";
  } else if (typetype === 1 && age >= 72 && age < 144) {
    div1.innerHTML = "Take 1 capsule 💊 every 4 to 6 hours.";
  } else if (typetype === 1 && age >= 144) {
    div1.innerHTML = "Take 1 💊 or 2 💊💊 capsules every 4 to 6 hours.";
  } else if (typetype === 2 && age >= 144) {
    div1.innerHTML = "Take 1 💊 tablet every 4 hours.";
  } else if (typetype === 3 && age >= 72 && age < 144) {
    div1.innerHTML =
      "Take 5-10 ml 🧪 in the dosing cup provided every 4-6 hours (or as directed by a doctor).";
  } else if (typetype === 4 && age >= 72 && age < 144) {
    div1.innerHTML = "Take 5 ml 🧪 in the dosing cup provided every 4 hours.";
  } else if (typetype === 4 && age >= 144) {
    div1.innerHTML = "Take 10 ml 🧪 in the dosing cup provided every 4 hours.";
  } else if (typetype === 5 && age >= 72 && age < 144) {
    div1.innerHTML = "Take 1 💊 to 2 💊💊 chewable tablets every 4 to 6 hours.";
  } else if (typetype === 5 && age >= 144) {
    div1.innerHTML =
      "Take 2 💊💊 to 4 💊💊💊💊 chewable tablets every 4 to 6 hours.";
  }
  div2.innerHTML = "⚕️ Administer <b>a maximum of 6 doses</b> over 24 hours.";

  output.append(div0);
  output.append(div1);
  output.append(div2);
}

function init() {
  createDropDown(medicationTypeVS, medicationType);
  createDropDown(ageVS, ageUnit);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

init();
calcBtn.addEventListener("click", showResult);
age_ele.addEventListener("input", () => {
  validation();
});

function convertInMonths(ageValue) {
  var age_Unit = Number(getSelectedValue(ageUnit));
  var age;

  if (age_Unit == 0) {
    return (age = ageValue * 12);
  } else if (age_Unit == 1) {
    return (age = ageValue);
  } else if (age_Unit == 2) {
    return (age = ageValue / 52.143);
  }
}


