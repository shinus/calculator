var nAge = getElement("Age_input_Id")
var height = getElement("Height_input_Id")
var height_dd = getElement("Height_dd_Id")
var weight = getElement("Weight_input_Id")
var weight_dd = getElement("Weight_dd_Id")
var score = getElement("score_dd_Id")
var metastates = getElement("metastases_dd_Id")
var health = getElement("level_dd_Id")
var smoker = getElement("smoker_dd_Id")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "age", values: nAge },
  { name: "height", values: height },
  { name: "heightUnit", values: height_dd },
  { name: "weight", values: weight },
  { name: "weightUnit", values: weight_dd },
  { name: "scoreUnit", values: score },
  { name: "metasesUnit", values: metastates },
  { name: "healthUnit", values: health },
  { name: "smokeUnit", values: smoker },
];

var unitsForCm = [
    { name: "cm", value: 1 },
    { name: "m", value: 100 },
    { name: "inches", value: 2.54 },
    { name: "feet", value: 30.48 },
];

var unitsForWeight = [
    { name: "kilogram (kg)", value: "kg" },
    { name: "pounds (lb)", value: "lb" },
];

var gleson = [
    {
        name: "2-4",
        value: 6,
    },
    {
        name: "5",
        value: 12,
    },
    {
        name: "6",
        value: 30,
    },
    {
        name: "7",
        value: 65,
    },
    {
        name: "8-10",
        value: 121,
    },
]

var metaUnits = [
    {
        name: "no",
        value: 0,
    },
    {
        name: "yes",
        value: 1,
    },
]

var modUnits = [
    {
        name: "Moderate (25-75%)",
        value: 0,
    },
    {
        name: "Very good (> 75%)",
        value: 1,
    },
    {
        name: "Very bad (<25%)",
        value: 2,
    },
]

function init() {
    createDropDown(unitsForCm, height_dd)
    createDropDown(unitsForWeight, weight_dd)
    createDropDown(gleson, score)
    createDropDown(metaUnits, metastates)
    createDropDown(modUnits, health)
    createDropDown(metaUnits, smoker)
}

init();


function getExact() {
    var aheight = Number(height.value)
    var aweight = Number(weight.value)


  var cal =  calcBmi(aheight, aweight);

  
}




// function showResult() {
//     calcBmi()

//     console.log(calcBmi(), "worked");


// }

// calcBtn.addEventListener("click", showResult);


