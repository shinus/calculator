var nAge = getElement("Age_input_Id")
var gender = getElement("Sex_dd_Id")
var ratio = getElement("ratio_dd_Id")
var eGFR = getElement("eGFR_input_Id")
var albumin = getElement("Albumin_input_Id")
var Albumin_dd = getElement("Albumin_dd_Id")
var carbonate = getElement("Bicarbonate_input_Id")
var carbonate_dd = getElement("Bicarbonate_dd_Id")
var calcium = getElement("Calcium_input_Id")
var Calcium_dd = getElement("Calcium_dd_Id")
var phospho = getElement("Phosphorus_input_Id")
var score = getElement("score_input_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "age", values: nAge },
  { name: "gender", values: gender },
  { name: "ratio", values: ratio },
  { name: "GFR", values: eGFR },
  { name: "albumin", values: albumin },
  { name: "albuminUnit", values: Albumin_dd },
  { name: "carbonate", values: carbonate },
  { name: "carbonateUnit", values: carbonate_dd },
  { name: "calcium", values: calcium },
  { name: "calciumUnit", values: Calcium_dd },
  { name: "Phospo", values: phospho },
];



var genderUNit = [
  {
    name: "male",
    value: -2,
  },
  {
    name: "female",
    value: 0,
  },
];

var urineUnit = [
  {
    name: "<30 mg/g",
    value: 0,
  },
  {
    name: "30-300 mg/g",
    value: -14,
  },
  {
    name: ">300 mg/g",
    value: -22,
  },
];



var serumUnit = [
  {
    name: "g/dL",
    value: 0,
  },
  {
    name: "g/L",
    value: 1,
  },
];

var bicUnit = [
  {
    name: "mEq/L",
    value: 0,
  },
  {
    name: "mmol/L",
    value: 1,
  },
]

var calUnit = [
  {
    name: "mg/dL",
    value: 0,
  },
  {
    name: "mmol/L",
    value: 1,
  },
];


function init() {
  createDropDown(genderUNit, gender)
  createDropDown(urineUnit, ratio)
  createDropDown(serumUnit, Albumin_dd)
  createDropDown(bicUnit, carbonate_dd)
  createDropDown(calUnit, Calcium_dd)
}

init();

var agejson = {
  '<30': -4,
  '30-39': -2,
  '40-49': 0,
  '50-59': 2,
  '60-69': 4,
  '70-79': 6,
  '80-89': 8,
  '>90': 10,
}

var urinejson = {
  '<30': 0,
  '30-300': -14,
  '>300': -22,
}

var gfjson = {
  '10=14': -35,
  '15-19': -30,
  '20-24': -25,
  '25-29': -20,
  '30-34': -15,
  '35-39': -10,
  '40-44': -5,
  '45-49': 0,
  '50-54': 5,
  '55-59': 10,
}

var serjson = {
  '≤2.5': -5,
  '2.6-3.0': 0,
  '3.1-3.5': 2,
  '≥3.6': 4,
}

var bijson = {
  "<18": -7,
  "18-22": -4,
  "23-25": -1,
  ">25": 0,
}

var caljson = {
  '≤8.5': -3,
  '8.6-9.5': 0,
  '≥9.6': 2,
}

var phojson = {
  '<3.5': 3,
  '3.5-4.5': 0,
  '4.6-5.5': -3,
  '>5.5': -5,
}



function getExact() {
  var age = Number(nAge.value);
  var Sex = Number(getSelectedValue(gender))
  var rat = Number(getSelectedValue(ratio))
  var gff = Number(eGFR.value);
  var Albumin = Number(albumin.value);
  var Bicarbonate = Number(carbonate.value);
  var aCalcium = Number(calcium.value);
  var Phosphorus = Number(phospho.value);

  var result = 0;
var resultage,resultgfr,resultserum,resultbicar,resultcal, resultpho;
  if(age < 30) {
   resultage = agejson["<30"]
  } else if(age >= 30 && age <= 39) {
    resultage = agejson["30-39"]
  } else if(age >= 40 && age <= 49) {
    resultage = agejson["40-49"]
  } else if(age >= 50 && age <= 59) {
    resultage = agejson["50-59"]
  } else if(age >= 60 && age <= 69) {
    resultage =agejson["60-69"]
  } else if(age >= 70 && age <= 79) {
    resultage = agejson["70-79"]
  } else if(age >= 80 && age <= 89) {
    resultage = agejson["80-89"]
  } else if(age >= 90) {
    resultage = agejson[">90"]
  }

  if( gff >= 10 && gff <= 14 ) {
    resultgfr = gfjson["10=14"]
  } else if(gff >= 15 && gff <= 19) {
    resultgfr = gfjson["15-19"]
  } else if(gff >= 20 && gff <= 24) {
    resultgfr = gfjson["20-24"]
  } else if(gff >= 25 && gff <= 29) {
    resultgfr = gfjson["25-29"]
  } else if(gff >= 30 && gff <= 34) {
    resultgfr = gfjson["30-34"]
  } else if(gff >= 35 && gff <= 39) {
    resultgfr = gfjson["35-39"]
  } else if(gff >= 40 && gff <= 44) {
    resultgfr = gfjson["40-44"]
  } else if(gff >= 45 && gff <= 49) {
    resultgfr = gfjson["45-49"]
  } else if(gff >= 50 && gff <= 54) {
    resultgfr = gfjson["50-54"]
  } else if(gff >= 55 && gff <= 59) {
    resultgfr = gfjson["55-59"]
  } 


  if(Albumin <= 2.5) {
    resultserum = serjson["≤2.5"]
  } else if(Albumin >= 2.6 && Albumin <= 3 ) {
    resultserum = serjson["2.6-3.0"]
  } else if(Albumin >= 3.1 && Albumin <= 3.5 ) {
    resultserum = serjson["3.1-3.5"]
  } else if(Albumin >= 3.6 ) {
    resultserum = serjson["≥3.6"]
  }

  if(Bicarbonate < 18) {
    resultbicar = bijson["<18"]
  } else if( Bicarbonate >= 18 && Bicarbonate <= 22) {
    resultbicar = bijson["18-22"]
  } else if( Bicarbonate >= 23 && Bicarbonate <= 25) {
    resultbicar = bijson["23-25"]
  } else if( Bicarbonate > 25 ) {
    resultbicar = bijson[">25"]
  }

  if(aCalcium <= 8.5) {
    resultcal = caljson["≤8.5"]
  } else if(aCalcium >= 8.6 && aCalcium <= 9.5) {
    resultcal = caljson["8.6-9.5"]
  } else if(aCalcium >= 9.6) {
    resultcal = caljson["≥9.6"]
  }

  if(Phosphorus < 3.5) {
    resultpho = phojson["<3.5"]
  } else if(Phosphorus >= 3.5 && Phosphorus <= 4.5) {
    resultpho = phojson["3.5-4.5"]
  } else if(Phosphorus >= 4.6 && Phosphorus <= 5.5) {
    resultpho = phojson["4.6-5.5"]
  } else if(Phosphorus > 5.5 ) {
    resultpho = phojson[">5.5"]
  }
  
  result =  resultage + Sex + rat + resultgfr + resultserum + resultbicar + resultcal + resultpho;

  console.log(resultage, Sex, rat, resultgfr,resultserum, resultcal,resultbicar,resultpho);

  console.log(result);
  return math.bignumber(result);

};

function validateAge(parentId, elementName, msg, condition) {

  // var ageValue = Number(nage.value);
  var message;
  var parentId = parentId;
  var elementName = elementName;
  console.log(condition);
  if (condition) {
    message = msg;
    showError(parentId, elementName, message);
  } else {
    removeError(elementName);
  }
}

function showResult() {
  resultPage2(queryParams);
  var result = Number(getExact());

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  output.innerHTML = "";
  div1.innerHTML = "Kidney failure risk score" + "  "  + result.toFixed(2) + "pts";

  var percentile = result;

  if( percentile < -41) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 90%"
  } else if(percentile = -41 ) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 89.0%"
  } else if(percentile = -40 ) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 86.9%"
  } else if(percentile = -39 ) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 84.1%"
  } else if(percentile =  -38 ) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 81.0%"
  } else if(percentile = -37 ) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 81.0%"
  } else if(percentile = -36 ) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 74.4%"
  } else if(percentile = -35 ) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 70.9%"
  } else if(percentile = -34 ) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 67.3%"
  } else if(percentile = -33) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 63.6%"
  } else if(percentile = -32) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 59.9%"
  } else if(percentile = -31) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 59.3%"
  } else if(percentile = -30) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 52.8%"
  } else if(percentile = -29) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 49.3%"
  } else if(percentile = -28) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 45.9%"
  } else if(percentile = -27) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 42.7%"
  } else if(percentile = -26) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 39.6%"
  } else if(percentile = -25) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 36.6%"
  } else if(percentile = -24) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 33.8%"
  } else if(percentile = -23) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 31.2%"
  } else if(percentile = -22) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 28.7%"
  } else if(percentile = -21) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 26.4%"
  } else if(percentile = -20) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 24.2%"
  } else if(percentile = -19) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 22.2%"
  } else if(percentile = -18) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 20.3%"
  } else if(percentile = -17) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 18.6%"
  } else if(percentile = -16) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 17.0%"
  } else if(percentile = -15) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 15.5%"
  } else if(percentile = -14) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 14.1%"
  } else if(percentile = -13) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 12.9%"
  } else if(percentile = -12) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 11.7%"
  } else if(percentile = -11) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 10.7%"
  } else if(percentile = -10) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 9.7%"
  } else if(percentile = -9) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 8.%"
  } else if(percentile = -8) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 8.0%"
  } else if(percentile = -7) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 7.%"
  } else if(percentile = -6) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 6.6%"
  } else if(percentile = -5) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 6.0%"
  } else if(percentile = -4) {
    div2.innerHTML = "Probability of kidney failure at 5 years: 5.5%"
  } else if(percentile >= -3) {
    div2.innerHTML = "Probability of kidney failure at 5 years: <5.0%"
  }

  output.append(div1);
  output.append(div2);
};

eGFR.addEventListener('input', () => {validateAge("calculator-row-4","weightError", "eGFR cannot be lower than 10 & cannot be more than 60. ",Number(eGFR.value) < 10)})
albumin.addEventListener('input', () => {validateAge("calculator-row-5","albuminError", "Albumin level cannot exceed 10 g/dL (100 g/L).",Number(albumin.value) > 100)})
carbonate.addEventListener('input', () => {validateAge("calculator-row-6","carboError","Bicarbonate's maximum level is 50 mEq/L.",Number(carbonate.value) > 50)})
calcium.addEventListener('input', () => {validateAge("calculator-row-7","calError","Calcium level cannot exceed 30 mg/dL.",Number(calcium.value) > 30)})
phospho.addEventListener('input', () => {validateAge("calculator-row-8","PhospoError","Phosphorus's maximum level is 12 mg/dL.",Number(phospho.value) > 12)})


calcBtn.addEventListener("click", showResult)

window.onload = function () {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
};