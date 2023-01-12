var gender = getElement("Sex_dd_Id");
var nAge = getElement("Age_input_Id");
var height = getElement("Height_input_Id");
var Height_dd = getElement("Height_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "genderUnit", values: gender },
  { name: "Age", values: nAge },
  { name: "height", values: height },
  { name: "heightUnit", values: Height_dd },
];

var genUnit = [
    {
        name: "female",
        value: 0,
    },
    {
        name: "male",
        value: 1,
    },
];

var heiUnit = [
    {
        name: "cm",
        value: 0,
    },
    {
        name: "m",
        value: 1,
    },
    {
        name: "in",
        value: 2,
    },
    {
        name: "ft",
        value: 3,
    },
];

function init() {
    createDropDown(genUnit, gender)
    createDropDown(heiUnit, Height_dd)
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
}

init()

function validateAge() {
    var ageValue = Number(nAge.value);
    var msg;
    var parentId = "calculator-row-2";
    var elementName = "eosError";

    if (ageValue > 120) {
        msg =
            "Age should be between 0 and 120 years.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}
function validateAge2() {
    var ageValue = Number(height.value);
    var msg;
    var parentId = "calculator-row-3";
    var elementName = "eosError";

    if (ageValue > 280) {
        msg =
            "Height should be between 0 and 280 cm.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}

function getExact() {
    var gend = Number(getSelectedValue(gender))
    var age = Number(nAge.value)
    var heigh = Number(height.value);

    var result = 0;

    if(gend == 0 ) {
        result = heigh * (21.78 - 0.101 * age) / 1000;
    } else if(gend == 1) {
        result = heigh * (27.63 - 0.112 * age) /1000;
    }

    console.log(result);
    return result
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

   div1.innerHTML = "Vital capacity   " + "\xa0\xa0\xa0 <b> " + result.toFixed(3) + "  liters </b> ";

    output.append(div1);
    output.append(div2);
}

nAge.addEventListener("input", validateAge)
height.addEventListener("input", validateAge2)
calcBtn.addEventListener("click", showResult);
