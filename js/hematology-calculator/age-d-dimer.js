var age = getElement("Age_input_Id");
var dimer = getElement("type_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "age", values: age },
    { name: "dimerUnit", values: dimer },
]

var dimerUnit = [
    {
        name: "FEU",
        value: 10,
    },
    {
        name: "DDU",
        value: 5,
    }
];

function init() {
    createDropDown(dimerUnit, dimer)
}

init()

function validateAge() {
    var ageValue = Number(age.value);
    var msg;
    var parentId = "calculator-row-1";
    var elementName = "ageError";
    
    if (ageValue < 50) {
      msg =
        "This calculator is meant for patients who are >50 years old..";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }

function getExact() {
    var Nage = Number(age.value)
    var dimer_d = Number(getSelectedValue(dimer))

    var result = 0;

    result = Nage * dimer_d;

    console.log(result);
    return math.bignumber(result);

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "D-dimer cutoff value  " + "  " + "0." + math.ceil(result) + " " + " µg/mL";

    div2.innerHTML = 'Check your D-dimer level lab test result. <br><br>If they are lower than the calculated cutoff value, and there are no alarming clinical symptoms,<br> you can rule out the diagnosis of pulmonary embolism and deep vein thrombosis. ';

    output.append(div1);
    output.append(div2);
};

age.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);


window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}; 