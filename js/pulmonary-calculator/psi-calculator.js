var age = getElement("Age_input_Id");
var gender = getElement("Sex_dd_Id");
var resident = getElement("resident?_dd_Id");
var disease = getElement("disease_dd_Id");
var celeb = getElement("Celebrovascular_dd_Id");
var liver = getElement("Liver_dd_Id");
var neoplasm = getElement("Neoplasm_dd_Id")
var chf = getElement("CHF_dd_Id")
var statuss = getElement("status_dd_Id")
var effusion = getElement("effusion_dd_Id")
var respiratory = getElement("Respiratory_dd_Id")
var bpm = getElement("BPM_dd_Id")
var systolic = getElement("Systolic_dd_Id")
var tempr = getElement("Temperature_dd_Id")
var bun = getElement("BUN_dd_Id")
var hema = getElement("Hematocrit_dd_Id")
var sodium = getElement("Sodium_dd_Id")
var glucose = getElement("Glucose_dd_Id")
var ph = getElement("pH_dd_Id")
var po = getElement("pO_dd_Id")
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "Age", values: age },
    { name: "gender", values: gender },
    { name: "resident", values: resident },
    { name: "renalDisease", values: disease },
    { name: "Celebrovascular", values: celeb },
    { name: "liver", values: liver },
    { name: "neoplasm", values: neoplasm },
    { name: "CHF", values: chf },
    { name: "status", values: statuss },
    { name: "effusion", values: effusion },
    { name: "Respiratory", values: respiratory },
    { name: "BPM", values: bpm },
    { name: "Systolic", values: systolic },
    { name: "Temperature", values: tempr },
    { name: "BUN", values: bun },
    { name: "Hematocrit", values: hema },
    { name: "Sodium", values: sodium },
    { name: "Glucose", values: glucose },
    { name: "pH", values: ph },
    { name: "pO", values: po },
];

var genUnit = [
    {
        name: "Male",
        value: 0
    },
    {
        name: "Female",
        value: -10
    },
];

var resUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 10,
    },
];

var desUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 10,
    },
];

var celebUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 10,
    },
];

var liverbUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 20,
    },
];

var neoUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 30,
    },
];

var chfUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 10,
    },
];

var statUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 20,
    },
];

var effUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 10,
    },
];

var resUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 20,
    },
];

var bpUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 10,
    },
];

var sysUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 20,
    },
];

var tempUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 15,
    },
];

var bunUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 20,
    },
];

var hemaUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 10,
    },
];

var sodUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 20,
    },
];

var gluUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 10,
    },
];

var phUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 30,
    },
];

var poUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 10,
    },
];

function init() {
    createDropDown(genUnit, gender)
    createDropDown(resUnit, resident)
    createDropDown(desUnit, disease)
    createDropDown(celebUnit, celeb)
    createDropDown(liverbUnit, liver)
    createDropDown(neoUnit, neoplasm)
    createDropDown(chfUnit, chf)
    createDropDown(statUnit, statuss)
    createDropDown(effUnit, effusion)
    createDropDown(resUnit, respiratory)
    createDropDown(bpUnit, bpm)
    createDropDown(sysUnit, systolic)
    createDropDown(tempUnit, tempr)
    createDropDown(bunUnit, bun)
    createDropDown(hemaUnit, hema)
    createDropDown(sodUnit, sodium)
    createDropDown(gluUnit, glucose)
    createDropDown(phUnit, ph)
    createDropDown(poUnit, po)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

function getExact() {
    var nAge = Number(age.value)
    var sex = Number(getSelectedValue(gender))
    var resi = Number(getSelectedValue(resident))
    var dis = Number(getSelectedValue(disease))
    var celebri = Number(getSelectedValue(celeb))
    var live = Number(getSelectedValue(liver))
    var neop = Number(getSelectedValue(neoplasm))
    var chfss = Number(getSelectedValue(chf))
    var stat = Number(getSelectedValue(statuss))
    var eff = Number(getSelectedValue(effusion))
    var eff = Number(getSelectedValue(effusion))
    var respi = Number(getSelectedValue(respiratory))
    var bpmss = Number(getSelectedValue(bpm))
    var syst = Number(getSelectedValue(systolic))
    var tempre = Number(getSelectedValue(tempr))
    var bunss = Number(getSelectedValue(bun))
    var hems = Number(getSelectedValue(hema))
    var soda = Number(getSelectedValue(sodium))
    var glu = Number(getSelectedValue(glucose))
    var phos = Number(getSelectedValue(ph))
    var pos = Number(getSelectedValue(po))

    var result = 0;

    result = nAge + sex + resi + dis + celebri + live + neop + chfss + stat + eff + respi + bpmss + syst + tempre + bunss + hems + soda + glu + phos + pos;

    console.log(result);
    return result
}

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;

    div1.innerHTML = "PSI/PORT    " + " \xa0\xa0 <b> " + result + "points </b>";
    if (percentile > 130) {
        div2.innerHTML = 'V, <b>high</b> risk. 🔴 <br> <br>';
        div3.innerHTML = '27.0-29.2% <br> <br>';
        div4.innerHTML = '<b>recommended</b>.';
    } else if (percentile > 90 && percentile <= 130) {
        div2.innerHTML = 'IV, <b>moderate</b> risk. 🟠 <br> <br>';
        div3.innerHTML = '8.2-9.3% <br> <br>';
        div4.innerHTML = '<b>recommended</b>.';
    } else if (percentile > 70 && percentile <= 90) {
        div2.innerHTML = 'III, <b>low</b> risk. 🟡 <br> <br>';
        div3.innerHTML = '0.9-2.8% <br> <br>';
        div4.innerHTML = '<b>might be recommended</b>, depending on the overall state of the patient.';
    } else if (percentile <= 70 && percentile != 0) {
        div2.innerHTML = 'II, <b>low</b> risk. 🟢 <br> <br>';
        div3.innerHTML = '0.6-0.9% <br> <br>';
        div4.innerHTML = '<b>generally not recommended</b>.';
    } else if (percentile == 0) {
        div2.innerHTML = 'I, <b>low</b> risk. 🟢<br> <br>';
        div3.innerHTML = '0.1% <br> <br>';
        div4.innerHTML = '<b>generally not recommended</b>.';
    };

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);

