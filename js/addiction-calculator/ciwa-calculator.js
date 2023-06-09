var vomit = getElement("vomiting_dd_Id")
var tremor = getElement("Tremor_dd_Id")
var parox = getElement("Paroxysmal_dd_Id")
var anxiety = getElement("Anxiety_dd_Id")
var agitation = getElement("Agitation_dd_Id")
var disturb = getElement("disturbances_dd_Id")
var audi = getElement("Auditory_dd_Id")
var visual = getElement("Visual_dd_Id")
var head = getElement("Headache_dd_Id")
var Oriented = getElement("Orientation_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "vomiting", values: vomit },
    { name: "tremor", values: tremor },
    { name: "paroxysmal", values: parox },
    { name: "anxiety", values: anxiety },
    { name: "agitation", values: agitation },
    { name: "disturbance", values: disturb },
    { name: "auditory", values: audi },
    { name: "visual", values: visual },
    { name: "headache", values: head },
    { name: "orientation", values: Oriented },
];

var voUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Mild nausea, no vomiting (1p)",
        value: 1,
    },
    {
        name: "Symptoms more severe (2p)",
        value: 2
    },
    {
        name: "Symptoms more severe (3p)",
        value: 3
    },
    {
        name: "Intermittent nausea with dry heaves (4p)",
        value: 4
    },
    {
        name: "Symptoms more severe (5p)",
        value: 5
    },
    {
        name: "Symptoms more severe (6p)",
        value: 6
    },
    {
        name: "Constant nausea, frequent vomiting (7p)",
        value: 7
    },
];

var trUnit = [
    {
        name: "No tremor (0p)",
        value: 0
    },
    {
        name: "Not visible, but can be felt fingertip to fingertip (1p)",
        value: 1
    },
    {
        name: "symptoms more severe (2p)",
        value: 2
    },
    {
        name: "Symptoms more severe (3p)",
        value: 3
    },
    {
        name: "Moderate, with patient's arms extended (4p)",
        value: 4
    },
    {
        name: "Symptoms more severe (5p)",
        value: 5
    },
    {
        name: "Symptoms more severe (6p)",
        value: 6
    },
    {
        name: "Severe, even with arms not extended (7p)",
        value: 7
    },
];

var paiUnit = [
    {
        name: "No sweat visible (0p)",
        value: 0
    },
    {
        name: "Barely perceptible sweating, palms moist (1p)",
        value: 1
    },
    {
        name: "Symptoms more severe (2pt)",
        value: 2
    },
    {
        name: "Symptoms more severe (3p)",
        value: 3
    },
    {
        name: "Beads of sweat obvious on forehead (4p)",
        value: 4
    },
    {
        name: "Symptoms more severe (5p)",
        value: 5
    },
    {
        name: "Symptoms more severe (6p)",
        value: 6
    },
    {
        name: "Drenching sweats (7p)",
        value: 7
    },
];

var anUnit = [
    {
        name: "No anxiety, at ease (0p)",
        value: 0
    },
    {
        name: "Mildly anxious (1p)",
        value: 1
    },
    {
        name: "Symptoms more severe (2p)",
        value: 2
    },
    {
        name: "Symptoms more severe (3p)",
        value: 3
    },
    {
        name: "Moderately anxious (4p)",
        value: 4
    },
    {
        name: "Symptoms more severe (5p)",
        value: 5
    },
    {
        name: "Symptoms more severe (6p)",
        value: 6
    },
    {
        name: "Acute panic states, e.g. as in severe delirium (7p)",
        value: 7
    },
];

var agUnit = [
    {
        name: "Normal activity (0p)",
        value: 0
    },
    {
        name: "Somewhat more than normal activity (1p)",
        value: 1
    },
    {
        name: "Symptoms more severe (2p)",
        value: 2
    },
    {
        name: "Symptoms more severe (3p)",
        value: 3
    },
    {
        name: "nModerately fidgety and restless (4p)",
        value: 4
    },
    {
        name: "Symptoms more severe (5p)",
        value: 5
    },
    {
        name: "Symptoms more severe (6p)",
        value: 6
    },
    {
        name: "Paces back and forth or constantly thrashes about (7p)",
        value: 7
    },
];

var taUnit = [
    {
        name: "None (0p)",
        value: 0
    },
    {
        name: "Very mild itching, pins and needles, burning or numbness (1p)",
        value: 1
    },
    {
        name: "Mild itching, pins and needles, burning or numbness (2p)",
        value: 2
    },
    {
        name: "Moderate itching, pins and needles, burning or numbness (3p)",
        value: 3
    },
    {
        name: "Moderately severe hallucinations (4p)",
        value: 4
    },
    {
        name: "Severe hallucinations (5p)",
        value: 5
    },
    {
        name: "Extremely severe hallucinations (6p)",
        value: 6
    },
    {
        name: "Continuous hallucinations (7p)",
        value: 7
    },
];

var auUnit = [
    {
        name: "Not present (0p)",
        value: 0
    },
    {
        name: "Very mild harshness or ability to frighten (1p)",
        value: 1
    },
    {
        name: "Mild harshness or ability to frighten (2p)",
        value: 2
    },
    {
        name: "Moderate harshness or ability to frighten (3p)",
        value: 3
    },
    {
        name: "Moderately severe hallucinations (4p)",
        value: 4
    },
    {
        name: "Severe hallucinations (5p)",
        value: 5
    },
    {
        name: "Extremely severe hallucinations (6p)",
        value: 6
    },
    {
        name: "Continuous hallucinations (7p)",
        value: 7
    },
];

var viUnit = [
    {
        name: "Not present (0p)",
        value: 0
    },
    {
        name: "Very mild sensitivity (1p)",
        value: 1
    },
    {
        name: "Mild sensitivity (2p)",
        value: 2
    },
    {
        name: "Moderate sensitivity (3p)",
        value: 3
    },
    {
        name: "Moderately severe hallucinations (4p)",
        value: 4
    },
    {
        name: "Severe hallucinations (5p)",
        value: 5
    },
    {
        name: "Extremely severe hallucinations (6p)",
        value: 6
    },
    {
        name: "Continuous hallucinations (7p)",
        value: 7
    },
];

var heUnit = [
    {
        name: "Not present (0p)",
        value: 0
    },
    {
        name: "Very mild (1p)",
        value: 1
    },
    {
        name: "Mild (2p)",
        value: 2
    },
    {
        name: "Moderate (3p)",
        value: 3
    },
    {
        name: "Moderately severe (4p)",
        value: 4
    },
    {
        name: "Severe (5p)",
        value: 5
    },
    {
        name: "Very severe (6p)",
        value: 6
    },
    {
        name: "Extremely severe (7p)",
        value: 7
    },
];

var orUnit = [
    {
        name: "Oriented (0p)",
        value: 0
    },
    {
        name: "Cannot do serial additions or is uncertain about date (1p)",
        value: 1
    },
    {
        name: "Disoriented for date by no more than 2 calendar days (2p)",
        value: 2
    },
    {
        name: "Disoriented for date by more than 2 calendar days (3p)",
        value: 3
    },
    {
        name: "Disoriented for place/or person (4p)",
        value: 4
    },
];

function init() {
    createDropDown(voUnit, vomit)
    createDropDown(trUnit, tremor)
    createDropDown(paiUnit, parox)
    createDropDown(anUnit, anxiety)
    createDropDown(agUnit, agitation)
    createDropDown(taUnit, disturb)
    createDropDown(auUnit, audi)
    createDropDown(viUnit, visual)
    createDropDown(heUnit, head)
    createDropDown(orUnit, Oriented)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

function getExact() {

    var a = Number(getSelectedValue(vomit))
    var b = Number(getSelectedValue(tremor))
    var c = Number(getSelectedValue(parox))
    var d = Number(getSelectedValue(anxiety))
    var e = Number(getSelectedValue(agitation))
    var f = Number(getSelectedValue(disturb))
    var g = Number(getSelectedValue(audi))
    var h = Number(getSelectedValue(visual))
    var i = Number(getSelectedValue(head))
    var j = Number(getSelectedValue(Oriented))

    var result = 0;

    result = a + b + c + d + e + f + g + h + i + j;

    console.log(result);
    return [result]
}

function showResult() {
    resultPage2(queryParams);
    var [result] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "CIWA-Ar score " + "  " + result;

    var percentile = result;

    if (percentile < 10) {
        div2.innerHTML = '<b>Mild alcohol withrawal</b>. Pharmacological treatment is not indicated for score < 10.';
    } else if (percentile >= 10 && percentile <= 20) {
        div2.innerHTML = '<b>Moderate alcohol withdrawal</b>. Clinical judgement should determine whether drugs are needed for patients scoring between 10 - 20 points.';
    } else if (percentile > 20) {
        div2.innerHTML = '<b>Severe withdrawal</b>. Most patients with score >20 require medication.';
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
    output.append(div7);
    output.append(div8);
};

calcBtn.addEventListener('click', showResult)

