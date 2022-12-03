var height = getElement("height_input_Id");
var height_dd = getElement("height_dd_Id");
var gender = getElement("Sex_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "height", values: height },
    { name: "heightUnit", values: height_dd },
    { name: "gender", values: gender },
];

var heUnit = [
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

var geUnit = [
    {
        name: "Female",
        value: 0,
    },
    {
        name: "Male",
        value: 1,
    },
];

function init() {
    createDropDown(heUnit, height_dd)
    createDropDown(geUnit, gender)
}

init()


function validateAge() {
    var ageValue = Number(height.value);
    var msg;
    var parentId = "calculator-row-1";
    var elementName = "eosError";

    if (ageValue >= 250) {
        msg =
            "That would be a new Guiness World Record!";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}

function getExact() {
    var heigh = Number(height.value)

    var result = 0;

    result = 0.1 * heigh + 4;

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;

    div1.innerHTML = "Ideal ETT depth   " + " <b> " + result.toFixed(0) + "cm </b> ";

    output.append(div1);
    output.append(div2);
}

height.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};