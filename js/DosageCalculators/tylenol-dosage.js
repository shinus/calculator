var symptomsEle = getElement("dd_symptoms");
var productEle = getElement("dd_product");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  {
    name: "symptoms",
    values: symptomsEle,
  },
  {
    name: "productEle",
    values: productEle,
  },
];
var symptomsVS = [
  {
    name: "Headache and muscle pain",
    value: 0,
  },
  {
    name: "Sinus problems",
    value: 1,
  },
  {
    name: "Cold and flu",
    value: 2,
  },

  {
    name: "Sleep and pain",
    value: 3,
  },
];

var productVS0 = [
  {
    name: "Regular strength",
    value: 0,
  },
  {
    name: "Regular strength liquid gels",
    value: 1,
  },
  {
    name: "Extra strength",
    value: 2,
  },
  {
    name: "Coated Tablets",
    value: 3,
  },
  {
    name: "Rapid release gels",
    value: 4,
  },
  {
    name: "8 hr arthiritis",
    value: 5,
  },
  {
    name: "8 hr muscle aches and pain",
    value: 6,
  },
  {
    name: "Dissolve packs",
    value: 7,
  },
];
var productVS1 = [
  {
    name: "Sinus + Headache Daytime caplets ",
    value: 0,
  },
  {
    name: "Sinus severe daytime caplets",
    value: 1,
  },
];
var productVS2 = [
  {
    name: "Cold +Flu Severe Day/Night",
    value: 0,
  },
  {
    name: "Cold + Flu Severe Caplets",
    values: 1,
  },
  {
    name: "Cold Max Daytime caplets ",
    values: 2,
  },
  {
    name: "Cold +Head severe caplets  ",
    values: 3,
  },
  {
    name: "Cold + Flu + Cough Nighttime",
    values: 4,
  },
  {
    name: "Cold + Flu Severe Warming Honey Lemon",
    values: 5,
  },
  {
    name: "Cold + Mucus Severe COOL BURST Liquid",
    values: 6,
  },
  {
    name: "Cold Max Daytime Citrus Burst Liquid",
    values: 7,
  },
];
var productVS3 = [
  {
    name: "Simply Sleep Nighttime Sleep Aid",
    values: 0,
  },
  {
    name: "PM Extra Strength Caplets",
    values: 1,
  },
  {
    name: "PM Extra Strength Liquid",
    values: 2,
  },
];

function getResult() {
  resultPage2(queryParams);
  var usage = Number(getSelectedValue(symptomsEle));
  var type1 = Number(getSelectedValue(productEle));
  var type2 = Number(getSelectedValue(productEle));
  var type3 = Number(getSelectedValue(productEle));
  var type4 = Number(getSelectedValue(productEle));

  output.innerHTML = "";

  if (usage === 0 && type1 === 0) {
    output.innerHTML =
      "Take <b>2 tablets 💊💊 every 4-6 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>10 tablets</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 0 && type1 === 1) {
    output.innerHTML =
      "Take <b>2 capsules 💊💊 every 4-6 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>10 capsules</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 0 && type1 === 2) {
    output.innerHTML =
      "Take <b>2 caplets 💊💊 every 6 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>6 caplets</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 0 && type1 === 3) {
    output.innerHTML =
      "Take <b>2 tablets 💊💊 every 6 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>6 tablets</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 0 && type1 === 4) {
    output.innerHTML =
      "Take <b>2 gelcaps 💊💊 every 6 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>6 gelcaps</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 0 && type1 === 5) {
    output.innerHTML =
      "Take <b>2 caplets 💊💊 every 8 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>6 caplets</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 0 && type1 === 6) {
    output.innerHTML =
      "Take <b>2 caplets 💊💊 every 8 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>6 caplets</b> in 24 hours (unless directed by a doctor).</i></p";
  } else if (usage === 0 && type1 === 7) {
    output.innerHTML =
      "Take <b>2 powders 🍬🍬 every 6 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>6 powders</b> in 24 hours (unless directed by a doctor).</i></p";
  } else if (usage === 1 && type2 === 0) {
    output.innerHTML =
      "Take <b>2 caplets 💊💊 every 4 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>10 caplets</b> in 24 hours (unless directed by a doctor).</i></p";
  } else if (usage === 1 && type2 === 1) {
    output.innerHTML =
      "Take <b>2 caplets 💊💊 every 4 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>10 caplets</b> in 24 hours (unless directed by a doctor).</i></p";
  } else if (usage === 2 && type3 === 0) {
    output.innerHTML =
      "Take <b>2 caplets 💊💊 every 4 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>10 caplets</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 2 && type3 === 1) {
    output.innerHTML =
      "Take <b>2 caplets 💊💊 every 4 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>10 caplets</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 2 && type3 === 2) {
    output.innerHTML =
      "Take <b>2 caplets 💊💊 every 4 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>10 caplets</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 2 && type3 === 3) {
    output.innerHTML =
      "Take <b>2 caplets 💊💊 every 4 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>10 caplets</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 2 && type3 === 4) {
    output.innerHTML =
      "Take <b>30 ml</b> 🧪 in the dosing cup provided <b>every 4 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>150 ml</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 2 && type3 === 5) {
    output.innerHTML =
      "Take <b>30 ml</b> 🧪 in the dosing cup provided <b>every 4 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>150 ml</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 2 && type3 === 6) {
    output.innerHTML =
      "Take <b>30 ml</b> 🧪 in the dosing cup provided <b>every 4 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>150 ml</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 2 && type3 === 7) {
    output.innerHTML =
      "Take <b>30 ml</b> 🧪 in the dosing cup provided <b>every 4 hours</b> while symptoms last." +
      "<p><i>Do not exceed <b>150 ml</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 3 && type4 === 0) {
    output.innerHTML =
      "Take <b>2 caplets 💊💊 at bedtime</b> if needed, or as directed by a doctor.";
  } else if (usage === 3 && type4 === 1) {
    output.innerHTML =
      "Take <b>2 caplets 💊💊 at bedtime</b>." +
      "<p><i>Do not exceed <b>2 caplets</b> in 24 hours (unless directed by a doctor).</i></p>";
  } else if (usage === 3 && type4 === 2) {
    output.innerHTML =
      "Take <b>30 ml</b> 🧪 in the dosing cup provided at bedtime." +
      "<p><i>Do not exceed <b>30 ml</b> in 24 hours (unless directed by a doctor).</i></p>";
  }
}

function init() {
  createDropDown(symptomsVS, symptomsEle);
  createDropDown(productVS0, productEle);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    getResult();
  }
}

function changeDropDown() {
  let symptoms_val = Number(getSelectedValue(symptomsEle));

  if (symptoms_val == 0) {
    createDropDown(productVS0, productEle);
  } else if (symptoms_val == 1) {
    createDropDown(productVS1, productEle);
  } else if (symptoms_val == 2) {
    createDropDown(productVS2, productEle);
  } else if (symptoms_val == 3) {
    createDropDown(productVS3, productEle);
  }
}

init();

symptomsEle.addEventListener("change", changeDropDown);
calcBtn.addEventListener("click", getResult);

