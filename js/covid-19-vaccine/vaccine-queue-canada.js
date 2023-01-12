var age = getElement("Age_input_Id");
var care = getElement("Care_dd_Id");
var pregnant = getElement("Pregnant_dd_Id");
var health = getElement("Health_dd_Id");
var indi = getElement("Indigenous_dd_Id");
var live = getElement("Live_dd_Id");
var worker = getElement("worker_dd_Id");
var vaccine = getElement("Vaccination_dd_Id");
var uptake = getElement("Uptake_input_Id");
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "age", values: age },
    { name: "care", values: care },
    { name: "pregnant", values: pregnant },
    { name: "health", values: health },
    { name: "unpaid", values: indi },
    { name: "a", values: live },
    { name: "b", values: worker },
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
        name: "Canadian government's plan",
        value: 1
    },
];

function init() {
    createDropDown(gluUnit, care)
    createDropDown(gluUnit, pregnant)
    createDropDown(gluUnit, health)
    createDropDown(gluUnit, indi)
    createDropDown(gluUnit, live)
    createDropDown(gluUnit, worker)
    createDropDown(vaUnit, vaccine)
}

init()

function validateAge() {
    var ageValue = Number(age.value);
    var msg;
    var parentId = "calculator-row-4";
    var elementName = "eosError";

    if (ageValue < 18 ) {
        msg =
            "It is not generally recommended to give the vaccine to children at this time..";
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

    var vac = Number(vaccine.value)
    var up = Number(uptake.value)

    var result = 0;

    result = ag + ca + preg + heal + vac + up;

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

    if (result > 80) {
        div2.innerHTML = '🚶‍♂️🚶‍♀️🚶‍♂️🚶🏿🚶‍♂️🚶‍♀️🚶‍♂️ <br> Based on your profile, you could be in Stage 3 of the national guidelines for the COVID vaccine rollout. There are between 11,287,574 and 22,039,690 people in front of you in the queue for a COVID vaccine across Canada. Be aware that while the overall trend holds on a national scale, your priority group could differ under your provincial guidelines. Consult the rollout plan for your province or territory for details.'
        div3.innerHTML = "📅 Using these vaccination rates and an uptake of 70.3%, you should expect to receive your two doses of vaccine and get maximum immunity by late Invalid Date NaN."
        div4.innerHTML = "Disclaimer: Some variation in the rollout is expected due to logistics and as each Province and Territory is responsible for determining priority of the various groups within each Stage and organizing the rollout of the vaccine. The predicted vaccination rate assumes that the approved vaccines are delivered on schedule."
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