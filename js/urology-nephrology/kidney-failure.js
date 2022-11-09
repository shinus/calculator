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

var ageUnit = [
  {
    name: "<30",
    value: -4,
  },
  {
    name: "30-39",
    value: -2,
  },
  {
    name: "40-49",
    value: 0,
  },
  {
    name: "50-59",
    value: 2,
  },
  {
    name: "60-69",
    value: 4,
  },
  {
    name: "70-79",
    value: 6,
  },
  {
    name: "80-89",
    value: 8,
  },
  {
    name: ">90",
    value: 10,
  },
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
    name: "<30",
    value: 0,
  },
  {
    name: "30-300",
    value: -14,
  },
  {
    name: ">300",
    value: -22,
  },
];

var gfrUnit = [
  {
    name: "10-14",
    value: -35,
  },
  {
    name: "15-19",
    value: -30,
  },
  {
    name: "20-24",
    value: -25,
  },
  {
    name: "25-29",
    value: -20,
  },
  {
    name: "30-34",
    value: -15,
  },
  {
    name: "35-39",
    value: -10,
  },
  {
    name: "40-44",
    value: -5,
  },
  {
    name: "45-49",
    value: 0,
  },
  {
    name: "50-54",
    value: 5,
  },
  {
    name: "55-59",
    value: 10,
  },
];

var serumUnit = [
  {
    name: "<2.5",
    value: -5,
  },
  {
    name: "2.6-3.0",
    value: 0,
  },
  {
    name: "3.1-3.5",
    value: 2,
  },
  {
    name: ">3.6",
    value: 4,
  },
];

var bicUnit = [
  {
    name: "<18",
    value: -7,
  },
  {
    name: "18-22",
    value: -4,
  },
  {
    name: "23-25",
    value: -1,
  },
  {
    name: ">25",
    value: 0,
  },
]

var calUnit = [
  {
    name: "≤8.5",
    value: -3,
  },
  {
    name: "8.6-9.5",
    value: 0,
  },
  {
    name: "≥9.6",
    value: 2,
  },
];

var phosUnit = [
  {
    name: "<3.5",
    value: 3
  },
  {
    name: "3.5-4.5",
    value: 0,
  },
  {
    name: "4.6-5.5",
    value: -3,
  },
  {
    name: ">5.5",
    value: -5,
  },
]


function init() {
  createDropDown(genderUNit, gender )
  createDropDown(urineUnit, ratio)
  createDropDown(gfrUnit, Albumin_dd)
  createDropDown(serumUnit, carbonate_dd)
  createDropDown(bicUnit, Calcium_dd)
}

init();


function getExact() {
  var Age = Number(nAge.value);
  var Sex = Number(gender.value);
  var all = Number(ratio.value);
  var gff = Number(eGFR.value);
  var Albumin = Number(albumin.value);
  var Bicarbonate = Number(carbonate.value);
  var aCalcium = Number(calcium.value);
  var Phosphorus = Number(phospho.value);

    var result = 0;

 
    result = Age + Sex + all + gff + Albumin + Bicarbonate + aCalcium + Phosphorus ;

    console.log(result);
    return math.bignumber(result);

};

function showResult() {
  resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "FENA" + 
     "  " + "  " + "    " +
       
        
      result.toFixed(2) +
       "%" ;

    var percentile = result;

    output.append(div1);
    output.append(div2);
};

window.onload = function () {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
};