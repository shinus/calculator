var weight_p = getElement("input_patients_weight");
var weight_U = getElement("dd_patients_weight");
var ingestion = getElement("inputAfterIngestion");
var aceta = getElement("inputSerumLevel");
var route = getElement("dd_route");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  {
    name: "weight",
    values: weight_p,
  },
  {
    name: "weightUnit",
    values: weight_U,
  },
  {
    name: "serum",
    values: aceta,
  },
  {
    name: "route",
    values: route,
  },
];

var choice = [
  { name: "Oral (PO)", value: 1 },
  { name: "Intravenous (IV)", value: 2 },
];

function showResult() {
  resultPage2(queryParams);
  var weight_val = Number(weight_p.value);
  var way = Number(getSelectedValue(route));
  var loadDose;

  output.innerHTML = "";

  if (way == 1) {
    loadDose = weight_val * 140;
  } else {
    loadDose = weight_val * 150;
  }

  var secDose = weight_val * 50;
  var thirdDose = weight_val * 100;

  var loadDoseR = roundToPrecision(loadDose, 4);
  var secDoseR = roundToPrecision(secDose, 4);
  var thirdDoseR = roundToPrecision(thirdDose, 4);
  var loadDoseG = loadDoseR / 1000;
  var secDoseG = secDoseR / 1000;
  var thirdDoseG = thirdDoseR / 1000;

  var loadDiluent = "";
  var secDiluent = "";
  var thirdDiluent = "";

  // diluent amounts for patients <20 kg

  var load20 = 3 * weight_val;
  var sec20 = 7 * weight_val;
  var third20 = 14 * weight_val;

  switch (true) {
    case weight_val <= 20:
      loadDiluent = "" + load20 + " mL ()";
      secDiluent = "" + sec20 + " mL (7 mL/kg)";
      thirdDiluent = "" + third20 + " mL (14 mL/kg)";
      break;
    case weight_val > 20 && weight_val < 40:
      loadDiluent = "100 mL";
      secDiluent = "250 mL";
      thirdDiluent = "500 mL";
      break;
    case weight_val >= 40:
      loadDiluent = "200 mL";
      secDiluent = "500 mL";
      thirdDiluent = "1000 mL";
      break;
    default:
  }

  var poLoadDose = roundToPrecision(140 * weight_val, 5);
  var poNextDose = roundToPrecision(70 * weight_val, 5);
  var poLoadDoseG = poLoadDose / 1000;
  var poNextDoseG = poNextDose / 1000;

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  if (way === 2) {
    div1.innerHTML =
      "<b>N-acetylcysteine (NAC) dosage for the patient:</b><br><br>1️⃣ Loading dose: <b>" +
      loadDoseR +
      " mg (" +
      loadDoseG +
      " g)</b> in " +
      loadDiluent +
      " diluent administered over 60 min.<br>2️⃣ Second dose: <b>" +
      secDoseR +
      " mg (" +
      secDoseG +
      " g)</b> in " +
      secDiluent +
      " diluent administered over 4 hours<br>3️⃣ Third dose: <b>" +
      thirdDoseR +
      " mg (" +
      thirdDoseG +
      " g)</b> in " +
      thirdDiluent +
      " diluent administered over 16 hours<br><br><b>Diluent</b> - 5 % glucose or 0.9% NaCl";
  } else if (way === 1) {
    div1.innerHTML =
      "<b>N-acetylcysteine (NAC) dosage for the patient:</b><br><br>1️⃣ Loading dose: <b>" +
      poLoadDose +
      " mg (" +
      poLoadDoseG +
      " g)</b><br><br>2️⃣ Then: 17 more doses of <b>" +
      poNextDose +
      " mg (" +
      poNextDoseG +
      " g)</b> administered <b>every four hours</b>.";
  }

  var toxLevel = 200;
  var currentLevel = Number(aceta.value);
  var treatLevel = roundToPrecision(toxLevel * 0.75, 4);
  var TXlvl = roundToPrecision(toxLevel, 4);

  if (currentLevel < treatLevel) {
    div2.innerHTML =
      "<b>Hepatic disfunction is not likely.</b><br> Current acetaminophen level doesn't exceed neither the toxicity threshold (" +
      TXlvl +
      " µg/mL), nor the treatment threshold (" +
      treatLevel +
      " µg/mL) for the time being.";
  } else if (currentLevel >= treatLevel && currentLevel < toxLevel) {
    div2.innerHTML =
      "<b>Hepatic disfunction is not likely, but treatment can be started. </b><br> Current acetaminophen level doesn't exceed the toxicity threshold (" +
      TXlvl +
      " µg/mL), but exceeds the treatment threshold (" +
      treatLevel +
      " µg/mL) for the time being.";
  } else {
    div2.innerHTML =
      "<b>Liver damage is probable.</b><br> Current acetaminophen level exceeds both the toxicity threshold (" +
      TXlvl +
      " µg/mL) and treatment threshold (" +
      treatLevel +
      " µg/mL) for the time being.";
  }

  output.append(div1);
  output.append(div2);
  calcBtn.scrollIntoView({ behaviour: "smooth" });
}

function roundToPrecision(number, precision) {
  precision = precision > 0 ? precision : 0;
  var str = number.toPrecision(precision).toString();
  return Number(str);
}

function init() {
  createDropDown(choice, route);
  createDropDown(unitsForWeight, weight_U);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

init();
calcBtn.addEventListener("click", showResult);
ingestion.addEventListener("input", () => {
  var ingestion_val = Number(ingestion.value);
  var parentId = "calculator-row-2";
  var error = "error101";
  var msg = "Input hours in the range of 4-24 hrs after ingestion.";
  if (ingestion_val > 24 && ingestion_val != 0) {
    showError(parentId, error, msg);
  } else if (ingestion_val < 4 && ingestion_val != 0) {
    showError(parentId, error, msg);
  } else {
    removeError(error);
  }
});


