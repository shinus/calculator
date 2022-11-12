var gender = getElement("gender_dd_Id")
var age = getElement("age_input_Id")
var height = getElement("height_input_Id")
var height_dd = getElement("height_dd_Id")
var weight = getElement("weight_input_Id")
var weight_dd = getElement("weight_dd_Id")
var histo = getElement("history_dd_Id")
var ethnicity = getElement("eth_dd_Id")
var glucose = getElement("glucose_input_Id")
var glucose_dd = getElement("glucose_dd_Id")
var blood = getElement("blood_input_Id")
var hdl = getElement("hdl_input_Id")
var hdl_dd = getElement("hdl_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "genderUnit", values: gender },
    { name: "age", values: age },
    { name: "height", values: height },
    { name: "heightUnit", values: height_dd },
    { name: "weight", values: weight },
    { name: "weightUnit", values: weight_dd },
    { name: "history", values: histo },
    { name: "ethnicity", values: ethnicity },
    { name: "glucose", values: glucose },
    { name: "glucoseUnit", values: glucose_dd },
    { name: "blood", values: blood },
    { name: "hdl", values: hdl },
    { name: "hdlUnit", values: hdl_dd },
];

var genderUnit = [
    {
        name: "male",
        value: 0,
    },
    {
        name: "female",
        value: 1,
    },
];

var unitsForCm = [
    { name: "cm", value: 1 },
    { name: "m", value: 100 },
    { name: "inches", value: 2.54 },
    { name: "feet", value: 30.48 },
];

var weightUnit = [
    {
        name: "kg",
        value: 0,
    },
    {
        name: "pounds",
        value: 1,
    },
];

var familyUnit = [
    {
        name: "No family history of diabetes",
        value: 0,
    },
    {
        name: "At least one parent or sibling has diabetes",
        value: 1,
    },
];

var ethnicityUnit = [
    {
        name: "Non-Hispanic white",
        value: 0,
    },
    {
        name: "Latin American",
        value: 1,
    },
];

var gluUnit = [
    {
        name: "mg/dL",
        value: 0,
    },
    {
        name: "mmol/L",
        value: 0.0555,
    },
];



function init() {
    createDropDown(genderUnit, gender)
    createDropDown(unitsForCm, height_dd)
    createDropDown(weightUnit, weight_dd)
    createDropDown(familyUnit, histo)
    createDropDown(ethnicityUnit, ethnicity)
    createDropDown(gluUnit, glucose_dd)
    createDropDown(gluUnit, hdl_dd)
}

init()

function getExact() {
    var  e = -2.718;
    var nAge = 0.028 * age.value;
    var sex = 0.661 * getSelectedValue(gender)
    var ethnic =0.412 * getSelectedValue(ethnicity)
    var gluc = 0.079 * glucose.value
    var pressure =0.018 * blood.value
    var hd =0.039 * hdl.value
    var we = Number(weight.value)
    var he = Number(height.value)
    // var bmi = weight / (height * height);
    var hist =0.481 * getSelectedValue(histo)

    var bmi = we / (he * he)

    var result = 0;

    result = 100 / (e * nAge + sex + ethnic + gluc + pressure - hd + (0.07 * bmi) + hist - 13.41);

    console.log(bmi);

    console.log(result);
    return math.bignumber(result)
}


function showResult() {
    resultPage2(queryParams);
      var result = Number(getExact());
  
      var div1 = document.createElement("div");
      var div2 = document.createElement("div");
  
      output.innerHTML = "";
      div1.innerHTML = "When converted" + 
       "  " +
        result.toFixed(0)  + " " + "mg/dL";
  
      var percentile = result;
  
      output.append(div1);
      output.append(div2);
  };

  calcBtn.addEventListener('click', showResult)

  window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  };