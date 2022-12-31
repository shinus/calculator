var bed = getElement("bedsED_input_Id");
var hl = getElement("bedsHL_input_Id");
var patient = getElement("patierntED_input_Id");
var critical = getElement("critical_input_Id");
var admit = getElement("admitsED_input_Id");
var adpt = getElement("admitspt_input_Id");
var adpt_dd = getElement("admitspt_dd_Id");
var longpt = getElement("longestpt_input_Id");
var lontpt_dd = getElement("longestpt_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "bedsED", values: bed },
    { name: "bedsHospital", values: hl },
    { name: "patientED", values: patient },
    { name: "Critical", values: critical },
    { name: "admitsED", values: admit },
    { name: "admitspatient", values: adpt },
    { name: "admitspatientUnit", values: adpt_dd },
    { name: "longestpt", values: longpt },
    { name: "longestptUnit", values: lontpt_dd },
]

var gdUnit = [
    {
        name: "min",
        value: 0
    },
    {
        name: "sec",
        value: 1
    },
    {
        name: "hrs",
        value: 2
    },
];

function init() {
    createDropDown(gdUnit, adpt_dd)
    createDropDown(gdUnit, lontpt_dd)
}

init();


function getExact() {
    var a = Number(bed.value)
    var b = Number(hl.value)
    var c = Number(patient.value)
    var d = Number(critical.value)
    var e = Number(longpt.value)
    var f = Number(admit.value)
    var g = Number(adpt.value)

    var result,abb,acc, k, s = 0;
    abb= c/a
    acc = f/b

    k = e / 60
    s = g / 60

    aee = 85.8 * abb
    aff = 600 * acc
    agg = 13.4 * d
    ahh = 0.93 * k
    aii = 5.64 * s


    result = ((aee + aff + agg + ahh + aii) - 20);

    console.log(result);
    return math.bignumber(result);

};

function validateAge() {
    var dil = Number(albumin.value)
    var msg;
    var parentId = "calculator-row-1";
    var elementName = "bunError";
   
    if (dil > 15) {
      msg =
        "Your albumin level cannot exceed 15 g/dL.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }


function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = "NEDOCS score  " + result.toFixed(0);

    if(percentile >= 0 && percentile <= 20 ) {
        div2.innerHTML = "Your score of " + (percentile.toFixed(0)) + " points indicates the ED is Not busy"
    } else if(percentile >= 21 && percentile <= 60) {
        div2.innerHTML = "Your score of " + (percentile.toFixed(0)) + " points indicates the ED is busy"
    } else if(percentile >= 61 && percentile <= 100) {
        div2.innerHTML = "Your score of " + (percentile.toFixed(0)) + " points indicates the ED is Extremely busy but not overcrowded"
    } else if(percentile >= 101 && percentile <= 140) {
        div2.innerHTML = "Your score of " + (percentile.toFixed(0)) + " points indicates the ED is Over-crowded"
    } else if(percentile >= 141 && percentile <= 180) {
        div2.innerHTML = "Your score of " + (percentile.toFixed(0)) + " points indicates the ED is Severely over-crowded"
    } else if(percentile >= 181) {
        div2.innerHTML = "Your score of " + (percentile.toFixed(0)) + " points indicates the ED is Dangerously over-crowded"
    }
 
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
};

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};