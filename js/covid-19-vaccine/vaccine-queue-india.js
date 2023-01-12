var live = getElement("live_dd_Id");
var age = getElement("Age_input_Id");
var health = getElement("health_dd_Id");
var frontline = getElement("frontline_dd_Id");
var co = getElement("co-morbidities_dd_Id");
var pregnant = getElement("Pregnant_dd_Id");
var vaccine = getElement("Vaccination_input_Id");
var vaccine_dd = getElement("Vaccination_dd_Id");
var everyone = getElement("everyone_input_Id");
var everyone_dd = getElement("everyone_dd_Id");
var uptake = getElement("uptake_input_Id");
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "live", values: live },
    { name: "age", values: age },
    { name: "frontline", values: frontline },
    { name: "cp-morbiditites", values: co },
    { name: "pregnant", values: pregnant },
    { name: "vaccine", values: vaccine },
    { name: "vaccineUnit", values: vaccine_dd },
    { name: "evevryone", values: everyone },
    { name: "everyoneUnit", values: everyone_dd },
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
        name: "per day",
        value: 0
    },
    {
        name: "per week",
        value: 1
    },
    {
        name: "per Month",
        value: 2
    },
];

var liUnit = [ 
    {
        name: "Karnataka",
        value: 0
    },
    {
        name: "Kerala",
        value: 1
    },
    {
        name: "Ladaakh",
        value: 2
    },
];

var evUnit = [
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
    createDropDown(liUnit, live)
    createDropDown(gluUnit, health)
    createDropDown(gluUnit, frontline)
    createDropDown(gluUnit, co)
    createDropDown(gluUnit, pregnant)
    createDropDown(vaUnit, vaccine_dd)
    createDropDown(evUnit, everyone_dd)
}

init()

function validateAge() {
    var ageValue = Number(age.value);
    var msg;
    var parentId = "calculator-row-13";
    var elementName = "eosError";

    if (ageValue < 18 ) {
        msg =
            "It is not generally recommended to give the vaccine to children less than 18 years old at this time.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}

function validateAge2() {
    var ageValue = Number(uptake.value);
    var msg;
    var parentId = "calculator-row-20";
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
    var heal = Number(health.value)
    var front = Number(frontline.value)
    var c = Number(co.value)
    var vac = Number(vaccine.value)
    var up = Number(uptake.value)

    var result = 0;

    result = ag + c + preg + heal + front + vac + up;

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

        div2.innerHTML = '🚶‍♂️🚶‍♀️🚶‍♂️🚶🏿🚶‍♂️🚶‍♀️🚶‍♂️ <br> Based on your profile, there are between 1,44,26,200 and 5,38,17,500 people in front of you in the queue for a COVID vaccine across Karnataka.'
        div3.innerHTML = "📅 Given a vaccination rate of 63,091 a week and an uptake of 80%, you should expect to receive your two doses of vaccine and have maximum protection by between mid November 2031 and mid October 2055."


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