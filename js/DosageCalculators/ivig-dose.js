//1
var calculation = getElement("dd_calc");

//2
var choice_ele = getElement("dd_choice");

//3
var maternalBloodVolume = getElement("inputMaternal");

//4
var fetalCells = getElement("inputFetal");

//5
var gender = getElement("dd_sex");

//6
var weight = getElement("inputWeight");
var weightUnit = getElement("dd_weight");

//7
var height = getElement("inputHeight");
var heightUnit = getElement("dd_height");

//8
var dosing = getElement("inputDosing");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "calculation", values: calculation },
  { name: "choice_ele", values: choice_ele },
  { name: "maternalBloodVolume", values: maternalBloodVolume },
  { name: "fetalCells", values: fetalCells },
  { name: "gender", values: gender },
  { name: "weight", values: weight },
  { name: "weightUnit", values: weightUnit },
  { name: "height", values: height },
  { name: "heightUnit", values: heightUnit },
  { name: "dosing", values: dosing },
];

function showResult() {
  resultPage2(queryParams);
  var calc = Number(getSelectedValue(calculation));
  if (calc == 1) {
    var iDose = calcIvigDose();
    output.innerHTML = "<b>IVIG dose</b>: " + iDose;
  } else if (calc == 0) {
    var rHigDose = getRhigDose();
    output.innerHTML =
      "<b>RhIG vials (300 µg in 30 mL) : </b>" + rHigDose + " " + "#";
  }
}

var choice_VS = [
  { name: "Yes", value: 1 },
  { name: "No", value: 0 },
];

var type_VS = [
  { name: "General", value: 1 },
  { name: "Pregnancy hemorrhage", value: 0 },
];

var sex_VS = [
  { name: "Female", value: 1 },
  { name: "Male", value: 0 },
];

function calcIdealWeight() {
  var height = Number(inputHeight.value);
  var hUnit = getSelectedValue(heightUnit);

  height = getHeightInM(hUnit, height);

  var idealWeight;

  if (getSelectedValue(gender) == 0) {
    idealWeight = 45.5 + (2.3 * (height - 1.524)) / 0.0254;
  } else {
    idealWeight = 50.0 + (2.3 * (height - 1.524)) / 0.0254;
  }
  return idealWeight;
}

function calcIvigDose() {
  var dosing_val = Number(dosing.value);
  var idealWeight_val = Number(calcIdealWeight());
  var dose = dosing_val * idealWeight_val;
  return dose;
}

function init() {
  createDropDown(sex_VS, gender);
  createDropDown(choice_VS, choice_ele);
  createDropDown(type_VS, calculation);
  createDropDown(unitsForWeight, weightUnit);
  createDropDown(unitsForLength, heightUnit);
  showVariables();
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

init();

function showVariables() {
  if (Number(getSelectedValue(calculation)) == 0) {
    $("#calculator-row-2").show();
    $("#calculator-row-3").show();
    $("#calculator-row-4").show();
    $("#calculator-row-5").hide();
    $("#calculator-row-6").hide();
    $("#calculator-row-7").hide();
    $("#calculator-row-8").hide();
  } else if (Number(getSelectedValue(calculation)) == 1) {
    $("#calculator-row-2").hide();
    $("#calculator-row-3").hide();
    $("#calculator-row-4").hide();
    $("#calculator-row-5").show();

    $("#calculator-row-6").show();
    $("#calculator-row-7").show();
    $("#calculator-row-8").show();
  }
}

calculation.addEventListener("change", showVariables);

function showVariables2() {
  var choice = Number(getSelectedValue(choice_ele));

  if (choice == 0) {
    $("#calculator-row-6").show();
    $("#calculator-row-7").show();
    $("#calculator-row-3").hide();
  } else if (choice == 1) {
    $("#calculator-row-6").hide();
    $("#calculator-row-7").hide();
  }
}

choice_ele.addEventListener("change", () => {
  showVariables2();
});

function calcMaternalBloodVol() {
  var height_val = Number(height.value);
  var hUnit = getSelectedValue(heightUnit);
  height_val = getHeightInM(hUnit, height_val);

  var weight_val = Number(weight.value);

  var maternalBloodVolume =
    356.1 * Math.pow(height_val, 3) + 33.08 * weight_val + 183.3;
  return maternalBloodVolume;
}

function getRhigDose() {
  var fetalCells_val = Number(fetalCells.value);

  var maternalBlood;
  if (maternalBlood.value == "") {
    maternalBlood = Number(calcMaternalBloodVol());
  } else {
    maternalBlood = Number(maternalBlood.value);
  }
  var rHigDose = (fetalCells_val * maternalBlood) / 30 + 1;
  return rHigDose;
}

calcBtn.addEventListener("click", showResult);
