var mcv = getElement("MCV_input_Id");
var rbc = getElement("RBC_input_Id");
var rbc_dd = getElement("RBC_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "MCV", values: mcv },
    { name: "RBC", values: rbc },
    { name: "RBCUnit", values: rbc_dd },
];

var mmUNit = [
    {
        name: "mm³",
        value: 0,
    },
    {
        name: "µl",
        value: 1,
    },
];

function init() {
    createDropDown(mmUNit, rbc_dd)
}

init()

function getExact() {
    var mmm = Number(mcv.value)
    var rrr = Number(rbc.value)

    var result = 0;

    result = mmm / rrr;

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
    div1.innerHTML = "Mentzer index   " + "  " + result.toFixed(2);

    if (percentile !== undefined){
    if (percentile < 13) {
        div2.innerHTML = 'The Mentzer index is below 13. </br> <b>It\'s probably thallasemia.</b> </br> Consult a physician for further diagnosis.';
    } else if (percentile > 13) {
        div2.innerHTML = 'The Mentzer index is more than 13. </br> <b>It\'s probably iron-deficiency anemia.</b> </br> Consult a physician for further diagnosis.';
    } else {
        div2.innerHTML = 'The Mentzer index is 13. </br> <b>Both, iron-deficiency anemia and thallasemia are equally probable.</b> </br> Consult a physician for further diagnosis.';
    }}

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