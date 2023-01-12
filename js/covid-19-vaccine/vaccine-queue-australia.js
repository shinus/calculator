var age = getElement("Age_input_Id");
var care = getElement("Care_dd_Id");
var pregnant = getElement("Pregnant_dd_Id");
var hotel = getElement("Hotel_dd_Id");
var frontline = getElement("Frontline_dd_Id");
var health = getElement("health_dd_Id");
var indi = getElement("Indigenous_dd_Id");
var critical = getElement("Critical_dd_Id");
var other = getElement("Other_dd_Id");
var under = getElement("Underlying_dd_Id");
var vaccine = getElement("Vaccine_dd_Id");
var vaccinate = getElement("vaccinate_input_Id");
var vaccinate_dd = getElement("vaccinate_dd_Id");
var uptake = getElement("Uptake_input_Id");
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "age", values: age },
    { name: "care", values: care },
    { name: "pregnant", values: pregnant },
    { name: "hotel", values: hotel },
    { name: "frontline", values: frontline },
    { name: "health", values: health },
    { name: "indigenous", values: indi },
    { name: "critical", values: critical },
    { name: "other", values: other },
    { name: "under", values: under },
    { name: "vaccine", values: vaccine },
    { name: "vaccinate", values: vaccinate },
    { name: "vaccinateUnit", values: vaccinate_dd },
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
        name: "Last 7 Days",
        value: 0
    },
    {
        name: "Australian government's plan",
        value: 1
    },
];

var yyUnit = [
    {
        name: "year",
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
    createDropDown(gluUnit, care)
    createDropDown(gluUnit, pregnant)
    createDropDown(gluUnit, hotel)
    createDropDown(gluUnit, frontline)
    createDropDown(gluUnit, health)
    createDropDown(gluUnit, indi)
    createDropDown(gluUnit, critical)
    createDropDown(gluUnit, other)
    createDropDown(gluUnit, under)
    createDropDown(vaUnit, vaccine)
    createDropDown(yyUnit, vaccinate_dd)
}

init()

function validateAge() {
    var ageValue = Number(age.value);
    var msg;
    var parentId = "calculator-row-4";
    var elementName = "eosError";

    if (ageValue < 18 ) {
        msg =
            "It is not generally recommended to give the vaccine to children at this time. Population younger than 18 years old might be vaccinated in the phase 3 if recommended.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}

function validateAge2() {
    var ageValue = Number(uptake.value);
    var msg;
    var parentId = "calculator-row-16";
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
    var ca = Number(care.value)
    var preg = Number(pregnant.value)
    var heal = Number(health.value)

    var vac = Number(vaccine.value)
    var up = Number(uptake.value)

    var result = 0;

    result = ag + ca + preg + heal  + vac + up;

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

    if (result > 70) {
        div2.innerHTML = '🚶‍♂️🚶‍♀️🚶‍♂️🚶🏿🚶‍♂️🚶‍♀️🚶‍♂️ <br> Based on your profile, you belong to Phase 2b of the national guidelines for the COVID vaccine rollout. Assuming an uptake of 73%, there are between 9,637,407 and 14,486,797 people in front of you in the queue for a COVID vaccine across Australia.'
        div3.innerHTML = "📅 Given a vaccination rate of 500,000 a week and an uptake of 73%, you should expect to receive your first dose of vaccine between 08/10/2023 and 21/02/2024."
        div4.innerHTML = "You should then get your second dose by between 29/10/2023 and 13/03/2024."
    } else if (result < 60) {
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