var patient = getElement("PT_input_Id");
var control = getElement("CTA_input_Id");
var isi = getElement("ISI_input_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "patientPT", values: patient },
    { name: "controlPt", values: control },
    { name: "ISI", values: isi },
];

function getExact() {
    var pat = Number(patient.value)
    var cat = Number(control.value)
    var is = Number(isi.value)


    var abc = pat / cat;

    var result = math.pow(abc, is)

    console.log(result);
    return math.bignumber(result);

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "INR  " + "  " + result.toFixed(2);

    if (percentile <= 1.1) {
        div2.innerHTML = '✅ Your INR is within the normal range.';
    } else if (percentile > 1.1 && percentile < 2.0) {
        div2.innerHTML = '⭕ Your INR is elevated, yet still below the therapeutic range.';
    } else if (percentile >= 2.0 && percentile <= 3.0) {
        div2.innerHTML = '☑️ Your INR is within the therapeutic range.';
    }
    if (percentile > 3.0) {
        div2.innerHTML = '❌ Your INR is too high! <br><br>In certain circumstances, such as with the previous generation of implanted mechanical heart valves, an INR > 3.0 <b>may still be beneficial</b>!';
    }

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}; 