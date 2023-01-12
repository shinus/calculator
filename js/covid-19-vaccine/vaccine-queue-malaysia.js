var age = getElement("Age_input_Id");
var disease = getElement("diseases_dd_Id");
var medical = getElement("Medical_dd_Id");
var essential = getElement("Essential_dd_Id");
var teacher = getElement("Teacher_dd_Id");
var pregnant = getElement("Pregnant_dd_Id");
var rate = getElement("rate_dd_Id");
var vaccine = getElement("Vaccination_input_Id");
var vaccine_dd = getElement("Vaccination_dd_Id");
var uptake = getElement("Uptake_input_Id");
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "age", values: age },
    { name: "disease", values: disease },
    { name: "medical", values: medical },
    { name: "essential", values: essential },
    { name: "teacher", values: teacher },
    { name: "pregnant", values: pregnant },
    { name: "rate", values: rate },
    { name: "vaccine", values: vaccine },
    { name: "vaccineUnit", values: vaccine_dd },
    { name: "uptake", values: uptake },
];

var gluUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 1,
    },
];

var vaUnit = [
    {
        name: "Actual rate",
        value: 0
    },
    {
        name: "Government projections",
        value: 1
    },
];

var yrUnit = [
    {
        name: "years",
        value: 0
    },
    {
        name: "month",
        value: 1
    },
    {
        name: "week",
        value: 2
    },
    {
        name: "days",
        value: 3
    },
];

function init() {
    createDropDown(gluUnit, disease)
    createDropDown(gluUnit, medical)
    createDropDown(gluUnit, essential)
    createDropDown(gluUnit, teacher)
    createDropDown(gluUnit, pregnant)
    createDropDown(vaUnit, rate)
    createDropDown(yrUnit, vaccine_dd)
}

init()

function validateAge() {
    var ageValue = Number(age.value);
    var msg;
    var parentId = "calculator-row-3";
    var elementName = "eosError";

    if (ageValue < 18 ) {
        msg =
            "Age should be 18 or older.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}

function validateAge2() {
    var ageValue = Number(uptake.value);
    var msg;
    var parentId = "calculator-row-11";
    var elementName = "eosError";

    if (ageValue > 100 ) {
        msg =
            "Uptake percentage must be 100% or less.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}

function getExact() {
    var ag = Number(age.value)
    var preg = Number(pregnant.value)
    var vac = Number(vaccine.value)
    var up = Number(uptake.value)

    var result = 0;

    result = ag + preg  + vac + up;

    console.log(result);
    return result
}

function showResult() {

    resultPage2(queryParams);
    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "Your vaccine queue results ";

    if (result > 100) {
        div2.innerHTML = '🚶‍♂️🚶‍♀️🚶‍♂️🚶🏿🚶‍♂️🚶‍♀️🚶‍♂️ <br>Based on your profile and an uptake of 80%, there are between 7,630,935 and 17,369,181 people in front of you in the queue for a COVID vaccine across Malaysia.'
        div3.innerHTML = "📅 Given a vaccination rate of 21,512 a day and an uptake of 80%, you should expect to receive your first dose of vaccine between 20/12/2024 and 14/6/2027."
        div4.innerHTML = "You should then get your second dose by between <br> 10/1/2025 and 5/7/2027."
    } else if (result < 100) {
        div2.innerHTML = 'You are in priority Group 12, which, taking into account an uptake rate of 8%, seems to be complete. ✔';
        div3.innerHTML = "If you haven't been offered your first dose and think you've been missed, checkout this web page for further information."
        div4.innerHTML = "Alteratively, try increasing the uptake percentage in the calculator."
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
};

age.addEventListener("input", validateAge)
uptake.addEventListener("input", validateAge2)
calcBtn.addEventListener('click', showResult)

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};