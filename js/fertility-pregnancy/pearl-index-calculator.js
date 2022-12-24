var study = getElement("study_input_Id");
var dura = getElement("duration_input_Id");
var dura_dd = getElement("duration_dd_Id");
var preg = getElement("pregnancies_input_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "study", values: study },
    { name: "duration", values: dura },
    { name: "durationUnit", values: dura_dd },
    { name: "pregnancies", values: preg },
];

var ddUnit = [
    {
        name: "months",
        value: 0
    },
    {
        name: "years",
        value: 1
    },
    {
        name: "weeks",
        value: 2
    },
    {
        name: "days",
        value: 3
    },
];

function init() {
    createDropDown(ddUnit, dura_dd);
}

init();

function getExact() {
    var studd = Number(study.value);
    var duration = Number(dura.value);
    var pregnancy = Number(preg.value);

    var result = (pregnancy * 12) * 100 / (studd * duration);

    console.log(result);
    return result;
};

function validateAge() {
    var a = Number(study.value)
    var b = Number(preg.value)
    var msg;
    var parentId = "calculator-row-3";
    var elementName = "bunError";
   
    if (b > a) {
      msg =
        "Number of women must be greater than the number of pregnancies.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;
    div1.innerHTML = "Pearl index" + "    " + result.toFixed(2);

    if (percentile > 0) {
        div2.innerHTML = '<table><tr><td>💡 The <b>lower</b> the index, the <b>better</b> the contraception.</td></tr></table><br><b>Let\'s compare it with other methods\' results:</b><br>• Implant: 0.05<br>• Condoms: 3 <br>• Estrogen + progesterone pill: 0.1 <br>• Pull-out method: 25 <br>• Calendar method: 9';
    }


    output.append(div1);
    output.append(div2);

};

preg.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};