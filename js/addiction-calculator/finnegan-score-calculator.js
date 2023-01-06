var cry = getElement("Cry_dd_Id")
var sleep = getElement("Sleep_dd_Id")
var reflex = getElement("reflex_dd_Id")
var tremors = getElement("Tremors_dd_Id")
var muscle = getElement("muscle_dd_Id")
var excoriation = getElement("Excoriation_dd_Id")
var myoclonic = getElement("Myoclonic_dd_Id")
var generalized = getElement("Generalized_dd_Id")
var sweating = getElement("Sweating_dd_Id")
var body = getElement("Body_dd_Id")
var yawing = getElement("yawning_dd_Id")
var mottling = getElement("Mottling_dd_Id")
var stuffiness = getElement("stuffiness_dd_Id")
var sneezing = getElement("Sneezing_dd_Id")
var nasal = getElement("Nasal_dd_Id")
var resiporatory = getElement("Respiratory_dd_Id")
var sucking = getElement("sucking_dd_Id")
var feeding = getElement("feeding_dd_Id")
var regurgitation = getElement("Regurgitation_dd_Id")
var vimiting = getElement("vomiting_dd_Id")
var stools = getElement("Stools_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "cry", values: cry },
    { name: "sleep", values: sleep },
    { name: "reflex", values: reflex },
    { name: "tremors", values: tremors },
    { name: "muscle", values: muscle },
    { name: "excoriation", values: excoriation },
    { name: "myoclonic", values: myoclonic },
    { name: "generalized", values: generalized },
    { name: "sweating", values: sweating },
    { name: "body", values: body },
    { name: "yawing", values: yawing },
    { name: "mottling", values: mottling },
    { name: "stuffiness", values: stuffiness },
    { name: "sneezing", values: sneezing },
    { name: "nasal", values: nasal },
    { name: "respiratory", values: resiporatory },
    { name: "sucking", values: sucking },
    { name: "feeding", values: feeding },
    { name: "regurgitation", values: regurgitation },
    { name: "vomiting", values: vimiting },
    { name: "stolls", values: stools },
];

var crUnit = [
    {
        name: "Normal",
        value: 0,
    },
    {
        name: "Excessive high-pitched cry <5 min",
        value: 2,
    },
    {
        name: "Continuous high-pitched cry >5 min",
        value: 3
    },
];

var slUnit = [
    {
        name: "Normal",
        value: 0
    },
    {
        name: "Sleeps <3 hrs after feeding",
        value: 1
    },
    {
        name: "Sleeps <2 hrs after feeding",
        value: 2
    },
    {
        name: "Sleeps <1 hrs after feeding",
        value: 3
    },
];

var reUnit = [
    {
        name: "Normal",
        value: 0
    },
    {
        name: "Hyperactive",
        value: 2
    },
    {
        name: "Markedly hyperactive",
        value: 3
    },
];

var trUnit = [
    {
        name: "None",
        value: 0
    },
    {
        name: "Mild tremors: disturbed",
        value: 1
    },
    {
        name: "Moderate-severe tremors: disturbed",
        value: 2
    },
    {
        name: "Mild tremors: undisturbed",
        value: 3
    },
    {
        name: "Moderate-severe tremors: undisturbed",
        value: 4
    },
];

var muUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "Yes",
        value: 1
    },
];

var myUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "Yes",
        value: 3
    },
];

var geUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "Yes",
        value: 5
    },
];

var boUnit = [
    {
        name: "Normal (up to 37.2°C/99°F)",
        value: 0
    },
    {
        name: "37.2-38.3°C (99-100.9°F)",
        value: 1
    },
    {
        name: "Over 38.3°C (100.9°F)",
        value: 2
    },
];

var naUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "Yes",
        value: 2
    },
];

var rsUnit = [
    {
        name: "Normal (40-60 breaths/minute)",
        value: 0
    },
    {
        name: ">60 breaths/minute, no retractions",
        value: 1
    },
    {
        name: ">60 breaths/minute with retractions",
        value: 2
    },
];

var rgUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "≥ 2 times during/post feeding",
        value: 2
    },
];

var stUnit = [
    {
        name: "Normal",
        value: 0
    },
    {
        name: "Loose",
        value: 2
    },
    {
        name: "Watery",
        value: 3
    },
];

function init() {
    createDropDown(crUnit, cry)
    createDropDown(slUnit, sleep)
    createDropDown(reUnit, reflex)
    createDropDown(trUnit, tremors)
    createDropDown(muUnit, muscle)
    createDropDown(muUnit, excoriation)
    createDropDown(myUnit, myoclonic)
    createDropDown(geUnit, generalized)
    createDropDown(muUnit, sweating)
    createDropDown(boUnit, body)
    createDropDown(muUnit, yawing)
    createDropDown(muUnit, mottling)
    createDropDown(muUnit, stuffiness)
    createDropDown(muUnit, sneezing)
    createDropDown(naUnit, nasal)
    createDropDown(rsUnit, resiporatory)
    createDropDown(muUnit, sucking)
    createDropDown(naUnit, feeding)
    createDropDown(rgUnit, regurgitation)
    createDropDown(myUnit, vimiting)
    createDropDown(stUnit, stools)
}

init()

function getExact() {

    var a = Number(getSelectedValue(cry))
    var b = Number(getSelectedValue(sleep))
    var c = Number(getSelectedValue(reflex))
    var d = Number(getSelectedValue(tremors))
    var e = Number(getSelectedValue(muscle))
    var f = Number(getSelectedValue(excoriation))
    var g = Number(getSelectedValue(myoclonic))
    var h = Number(getSelectedValue(generalized))
    var i = Number(getSelectedValue(sweating))
    var j = Number(getSelectedValue(body))
    var k = Number(getSelectedValue(yawing))
    var l = Number(getSelectedValue(mottling))
    var m = Number(getSelectedValue(stuffiness))
    var n = Number(getSelectedValue(sneezing))
    var o = Number(getSelectedValue(nasal))
    var p = Number(getSelectedValue(resiporatory))
    var q = Number(getSelectedValue(sucking))
    var r = Number(getSelectedValue(feeding))
    var s = Number(getSelectedValue(regurgitation))
    var t = Number(getSelectedValue(vimiting))
    var u = Number(getSelectedValue(stools))

    var result = 0;

    result = a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p + q + s + t + u;

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;

    if (percentile == 1) {
        div1.innerHTML = '<b>The Finnegan score is ' + percentile + ' point.</b><br><br>Monitor the Finnegan NAS score every 3-4 hours.<br><br>Initiate pharmacological treatment if two consecutive scores are ≥12 or three consecutive scores are ≥8.';
    } else {
        div1.innerHTML = '<b>The Finnegan score is ' + percentile + ' points.</b><br><br>Monitor the Finnegan NAS score every 3-4 hours.<br><br>Initiate pharmacological treatment if two consecutive scores are ≥12 or three consecutive scores are ≥8.';
    }

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener('click', showResult)

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};