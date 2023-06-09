var consci = getElement("Consciousness_dd_Id");
var mobility = getElement("Mobility_dd_Id");
var beath = getElement("Breathing_dd_Id");
var circulation = getElement("Circulation_dd_Id");
var colors = getElement("Color_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "Consciousness", values: consci },
    { name: "Mobility", values: mobility },
    { name: "Breathing", values: beath },
    { name: "Circulation", values: circulation },
    { name: "Color", values: colors },
]

var coUnit = [
    {
        name: "Not responding",
        value: 0
    },
    {
        name: "Arousable",
        value: 1
    },
    {
        name: "Fully awake",
        value: 2
    },
];

var moUnit = [
    {
        name: "Unable to move extremities",
        value: 0
    },
    {
        name: "Able to move 2 extremities",
        value: 1
    },
    {
        name: "Able to move 4 extremities",
        value: 2
    },
];

var brUnit = [
    {
        name: "Apnoeic",
        value: 0
    },
    {
        name: "Dyspnoea",
        value: 1
    },
    {
        name: "Able to breathe/cough freely",
        value: 2
    },
];

var crUnit = [
    {
        name: "BP ±50%",
        value: 0
    },
    {
        name: "BP ±20-49%",
        value: 1
    },
    {
        name: "BP ±20%",
        value: 2
    },
];

var colUnit = [
    {
        name: "Cyanotic",
        value: 0
    },
    {
        name: "Pale/dusky/blotchy/jaundiced",
        value: 1
    },
    {
        name: "Normal",
        value: 2
    },
];

function init() {
    createDropDown(coUnit, consci)
    createDropDown(moUnit, mobility)
    createDropDown(brUnit, beath)
    createDropDown(crUnit, circulation)
    createDropDown(colUnit, colors)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();


function getExact() {
    var a = Number(getSelectedValue(consci))
    var b = Number(getSelectedValue(mobility))
    var c = Number(getSelectedValue(beath))
    var d = Number(getSelectedValue(circulation))
    var e = Number(getSelectedValue(colors))

    var result = 0;

    result = a + b + c + d + e;

    console.log(result);
    return result;

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = "Aldrete score " + result + " pts" 
    if (percentile > 8) {
        div2.innerHTML = '✅ Your patient <b>can leave</b> the Post Anaesthetic Care Unit.';
    } else {
        div2.innerHTML = '❌ Your patient <b>is not yet ready</b> to be discharged from the Post Anaesthetic Care Unit.';
    }

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener("click", showResult);

