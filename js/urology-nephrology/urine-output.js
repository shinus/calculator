var nAge = getElement("age_dd_Id");
var weight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var time = getElement("Time_input_Id");
var time_dd = getElement("Time_dd_Id");
var volume = getElement("volume_input_Id");
var volume_dd = getElement("volume_dd_Id");
var intake = getElement("intake_input_Id");
var intake_dd = getElement("intake_dd_Id");
var rate = getElement("rate_input_Id");
var rate_dd = getElement("rate_dd_Id");
var balance = getElement("balance_input_Id");
var balance_dd = getElement("balance_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "ageUnit", values: nAge },
  { name: "weight", values: weight },
  { name: "weightUnit", values: weight_dd },
  { name: "time", values: time },
  { name: "timeUnit", values: time_dd },
  { name: "urineVolume", values: volume },
  { name: "urineVolumeUnit", values: volume_dd },
  { name: "fluidIntake", values: intake },
  { name: "fluidIntakeUnit", values: intake_dd },
  { name: "outputrate", values: rate },
  { name: "outputrateUnit", values: rate_dd },
  { name: "fluidbal", values: balance },
  { name: "fluidbalUnit", values: balance_dd },
];

var ageUnit = [
    {
        name: "≥18 years",
        value: 0
    },
    {
        name: "<18 years",
        value: 1,
    },
];

var unitsForWeight = [
    { name: "kilogram (kg)", value: "kg" },
    { name: "grams (g)", value: "g" },
    { name: "pounds (lb)", value: "lb" },
    { name: "Stones (stone)", value: "stone" },
];

var timeUnit = [
    {
        name: "hours",
        value: 0,
    },
    {
        name: "minutes",
        value: 1,
    },
    {
        name: "seconds",
        value: 2,
    },
    {
        name: "days",
        value: 3,
    },
];

var volumeUnit = [
    {
        name: "mililiters",
        value: 0,
    },
    {
        name: "centiliters",
        value: 1,
    },
    {
        name: "liters",
        value: 2,
    },
    {
        name: "cubic mililiters",
        value: 3,
    },
    {
        name: "gallons",
        value: 4,
    },
    {
        name: "fluid ounces",
        value: 5,
    },
    {
        name: "cubic inches",
        value: 6,
    },
]

var intakeUnits = [
    {
        name: "mililiters",
        value: 0,
    },
    {
        name: "centiliters",
        value: 1,
    },
    {
        name: "liters",
        value: 2,
    },
    {
        name: "cubic mililiters",
        value: 3,
    },
    {
        name: "gallons",
        value: 4,
    },
    {
        name: "fluid ounces",
        value: 5,
    },
    {
        name: "cubic inches",
        value: 6,
    },
];

var rateUnits = [
    { name: "kilogram (kg)", value: "kg" },
    { name: "decagram (g)", value: "g" },
    { name: "pounds (lb)", value: "lb" },
    { name: "Stones (stone)", value: "stone" },
];


function init() {
    createDropDown(ageUnit, nAge);
    createDropDown(unitsForWeight, weight_dd);
    createDropDown(timeUnit, time_dd);
    createDropDown(volumeUnit, volume_dd);
    createDropDown(intakeUnits, intake_dd);
   
  
}


init();


  
function getExact() {
    var avol = Number(volume.value)
    var atime = Number(time.value);
    var aweight = Number(weight.value);
    // var height = Number(bheight.value)
    // var dserum = Number(serum.value)
  
    var result = 0;
  
   result =  avol / (aweight * atime);
   

    // result = (140 - age) * weight * sex / (72 * dserum)
  
 
  console.log(result);
    return math.bignumber(result);
  
  };
  
  function getres() {
    var avol = Number(volume.value)
    var into = Number(intake.value)

    var result2 = 0;

    result2 = into - avol ;

    console.log(result2);
    return math.bignumber(result2);
  }


  function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());
    var result2 = Number(getres());
  
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
  
    output.innerHTML = "Results";
    div1.innerHTML =
    //   "<b>The actual volume may vary by ± </b> :" +
    //   " " 
      result.toFixed(2) + "ml/kg/hr";

      div2.innerHTML  = result2.toFixed(2) + "cm³";
  
      var percentile = result;
    
    output.append(div1);
    output.append(div2);
  };
  
  calcBtn.addEventListener("click", showResult);

  window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  };