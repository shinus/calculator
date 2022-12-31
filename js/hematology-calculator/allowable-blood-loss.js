var Category = getElement("category_dd_Id");
var weight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var initial = getElement("patient_input_Id");
var lowest = getElement("hemoglobin_input_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "ageCategorUnit", values: Category },
    { name: "weight", values: weight },
    { name: "weightUnit", values: weight_dd },
    { name: "initialHemoglobin", values: initial },
    { name: "lowestHemoglobin", values: lowest },
]

var catUnit = [
    {
        name: "Adult female",
        value: 65,
    },
    {
        name: "Adult male",
        value: 75,
    },
    {
        name: "Adolescent female",
        value: 65,
    },
    {
        name: "Adolescent male",
        value: 70,
    },
    {
        name: "Children over the age of 3 months",
        value: 75,
    },
    {
        name: "Babies younger than 3 months",
        value: 85,
    },
    {
        name: "Premature neonates",
        value: 100,
    },
];

var weiUnit = [
    {
        name: "kg",
        value: 0, 
    },
    {
        name: "grams",
        value: 1,
    },
    {
        name: "ounces",
        value: 2,
    },
    {
        name: "pondes",
        value: 3,
    },
    {
        name: "stones",
        value: 4,
    },
];

function init() {
    createDropDown(catUnit, Category)
    createDropDown(weiUnit, weight_dd);
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
} 

init()

function validateAge() {
    var ageValue = Number(initial.value);
    var ageValue1 = Number(lowest.value);
    var msg;
    var parentId = "calculator-row-3";
    var elementName = "eosError";
    
    if (ageValue <= ageValue1) {
      msg =
        "Initial hemoglobin must be greater than or equal to allow any blood loss.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }


function getExact() {
    var cate = Number(getSelectedValue(Category))
    var weog = Number(weight.value)
    var initi = Number(initial.value)
    var low = Number(lowest.value)

    var result = 0;

    result = weog * cate * (initi - low ) / initi;
    // console.log(we);

    console.log(result);
    return result;

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "Allowable blood loss  " + "  <b>" + result.toFixed(0) + " " + "ml</b>";

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener("click", showResult);
initial.addEventListener("input", validateAge);


 