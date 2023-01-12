var age = getElement("Age_input_Id");
var pregnant = getElement("Pregnant_dd_Id");
var health = getElement("Health_dd_Id");
var unpaid = getElement("worker_dd_Id");
var setting = getElement("setting_dd_Id");
var a = getElement("a_dd_Id");
var vaccine = getElement("vaccination_dd_Id");
var uptake = getElement("Uptake_input_Id");
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "age", values: age },
    { name: "pregnant", values: pregnant },
    { name: "health", values: health },
    { name: "unpaid", values: unpaid },
    { name: "setting", values: setting },
    { name: "a", values: a },
    { name: "vaccine", values: vaccine },
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
        name: "South African government's plan",
        value: 1
    },
];

function init() {
    createDropDown(gluUnit, setting)
    createDropDown(gluUnit, pregnant)
    createDropDown(gluUnit, health)
    createDropDown(gluUnit, unpaid)
    createDropDown(gluUnit, a)
    createDropDown(vaUnit, vaccine)
}

init()

function validateAge() {
    var ageValue = Number(age.value);
    var msg;
    var parentId = "calculator-row-4";
    var elementName = "eosError";

    if (ageValue < 16) {
        msg =
            "It is not generally recommended to give the vaccine to children under 16 at this time.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}

function validateAge2() {
    var ageValue = Number(uptake.value);
    var msg;
    var parentId = "calculator-row-13";
    var elementName = "eosError";

    if (ageValue > 100) {
        msg =
            "Uptake percentage must be 100% or less.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}

function getExact() {
    var ag = Number(age.value)
    var set = Number(setting.value)
    var preg = Number(pregnant.value)
    var heal = Number(health.value)
    var un = Number(unpaid.value)
    var aa = Number(a.value)
    var vac = Number(vaccine.value)
    var up = Number(uptake.value)

    var result = 0;

    result = ag + set + preg + heal + un + aa  + vac + up;

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
    var div6 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "Your vaccine queue results ";

    if (result > 80) {
        div2.innerHTML = '🚶‍♂️🚶‍♀️🚶‍♂️🚶🏿🚶‍♂️🚶‍♀️🚶‍♂️ Based on your profile, you are in Phase 3 of the COVID vaccine rollout plan. There are between 11 913 909 and 33 631 009 people in front of you in the queue for a COVID vaccine across South Africa.'
        div3.innerHTML = "📅 Using these vaccination rates and an uptake of 79%, you should expect to receive your first dose of vaccine by Tue Jan 10 2023 18:52:51 GMT+0530 (India Standard Time)."
        div4.innerHTML = "You should then get your second dose by between Invalid Date and Invalid Date."
        div5.innerHTML = "If you get the JNJ vaccine, you will not need a second dose"
        div6.innerHTML = "Disclaimer: <br>We assume that, in case of a two-dose vaccine, every citizen gets a second dose of the vaccine after 21 days.</br><br>Some variation in the rollout is expected due to logistics and as each Province and Territory is responsible for administering the vaccine. The predicted vaccination rate assumes that all of the vaccines South Africa orders go through clinical trials successfully and are delivered on schedule.</br>"
    } else if (result < 70) {
        div2.innerHTML = '✔ All the people in your group should have been vaccinated. If you havent, you should get yours very soon.';
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
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