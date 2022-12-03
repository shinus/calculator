var country = getElement("Country_dd_Id");
var gender_dd = getElement("Sex_dd_Id");
var age = getElement("Age_input_Id");
var age_dd = getElement("Age_dd_Id");
var smok = getElement("I_input_Id");
var smok_dd = getElement("I_dd_Id");
var smoked = getElement("smoked_input_Id");
var smoked_dd = getElement("smoked_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "country", values: country },
    { name: "genderUnit", values: gender_dd },
    { name: "age", values: age },
    { name: "ageUnit", values: age_dd },
    { name: "smoking", values: smok },
    { name: "smokingUnit", values: smok_dd },
    { name: "smoked", values: smoked },
    { name: "smokedUnit", values: smoked_dd },
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

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};