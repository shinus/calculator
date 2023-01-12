var age = getElement("Age_input_Id");
var care = getElement("Care_dd_Id");
var pregnant = getElement("Pregnant_dd_Id");
var health = getElement("Health_dd_Id");
var unpaid = getElement("Unpaid_dd_Id");
var a = getElement("a_dd_Id");
var b = getElement("b_dd_Id");
var vaccine = getElement("Vaccine_dd_Id");
var uptake = getElement("Uptake_input_Id");
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "age", values: age },
    { name: "care", values: care },
    { name: "pregnant", values: pregnant },
    { name: "health", values: health },
    { name: "unpaid", values: unpaid },
    { name: "a", values: a },
    { name: "b", values: b },
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
        name: "Welsh government's plan",
        value: 1
    },
];

function init() {
    createDropDown(gluUnit, care)
    createDropDown(gluUnit, pregnant)
    createDropDown(gluUnit, health)
    createDropDown(gluUnit, unpaid)
    createDropDown(gluUnit, a)
    createDropDown(gluUnit, b)
    createDropDown(vaUnit, vaccine)
}

init()

function validateAge() {
    var ageValue = Number(age.value);
    var msg;
    var parentId = "calculator-row-4";
    var elementName = "eosError";

    if (ageValue < 16 ) {
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
    var parentId = "calculator-row-12";
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
    var un = Number(unpaid.value)
    var aa = Number(a.value)
    var bb = Number(b.value)
    var vac = Number(vaccine.value)
    var up = Number(uptake.value)

    var result = 0;

    result = ag + ca + preg + heal + un + aa + bb + vac + up;

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
        div2.innerHTML = '🚶‍♂️🚶‍♀️🚶‍♂️🚶🏿🚶‍♂️🚶‍♀️🚶‍♂️ <br> Based on your profile, you are in priority Group 12. Given an uptake of 92.5%, there are between 0 and 3,648,481 people in front of you in the queue for a first dose of COVID vaccine across the UK.'
        div3.innerHTML = "📅 Given a vaccination rate of 1,452,057 a week and an uptake of 92.5%, you should expect to receive your first dose of vaccine by 27/02/2023."
        div4.innerHTML = "You should then get your second dose by 22/05/2023."
        div5.innerHTML = "Last 7 days vaccination rate calculated using daily data from gov.uk's vaccination dashboard."
    } else if (result < 100) {
        div2.innerHTML = 'You are in priority Group 12, which, taking into account an uptake rate of 9%, seems to be complete.';
        div3.innerHTML = "If you haven't had your first dose, try increasing the uptake rate to get a date. Furthermore, please book an appointment here or phone 119."
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