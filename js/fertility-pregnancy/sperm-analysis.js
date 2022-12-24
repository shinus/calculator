var ejaculate = getElement("Ejaculate_input_Id");
var ejaculate_dd = getElement("Ejaculate_dd_Id");
var sperm = getElement("Sperm_input_Id");
var sperm_dd = getElement("Sperm_dd_Id");
var morpho = getElement("morphology_input_Id");
var moti = getElement("motility_input_Id");
var vital = getElement("Vitality_input_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "ejaculate", values: ejaculate },
    { name: "ejaculateUnit", values: ejaculate_dd },
    { name: "sperm", values: sperm },
    { name: "spermUnit", values: sperm_dd },
    { name: "morphology", values: morpho },
    { name: "motility", values: moti },
    { name: "vitality", values: vital },
];

var ejUnit = [
    {
        name: "ml",
        value: 0
    },
    {
        name: "cl",
        value: 1
    },
    {
        name: "(15ml) (tbsp)",
        value: 2
    },
    {
        name: "(5ml) (tsp)",
        value: 3
    },
    {
        name: "cc",
        value: 4
    },
    {
        name: "cu in",
        value: 5
    },
    {
        name: "cm³",
        value: 6
    },
];

function init() {
    createDropDown(ejUnit, ejaculate_dd);
    createDropDown(ejUnit, sperm_dd);
}

init();

function validateAge(parentId, elementName, msg, condition) {

    var message;
    var parentId = parentId;
    var elementName = elementName;
    console.log(condition);
    if (condition) {
        message = msg;
        showError(parentId, elementName, message);
    } else {
        removeError(elementName);
    }
}

function getExact() {
    var a = Number(ejaculate.value);
    var b = Number(sperm.value);
    var c = Number(morpho.value);
    var d = Number(moti.value);
    var e = Number(vital.value);

    var result, result2 = 0;

    result = b * a;

    result2 = (a * b * d * e * c) / 1000000;

    console.log(result);
    return [result, result2];
};

function showResult() {
    resultPage2(queryParams);
    var [result, result2] = getExact();
    var a = Number(ejaculate.value);
    var b = Number(sperm.value);
    var c = Number(morpho.value);
    var d = Number(moti.value);
    var e = Number(vital.value);

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;
    var percentile2 = result2;
    div1.innerHTML = "Total sperm " + "    " + result.toFixed(0) + " mln";

    div2.innerHTML = "Functional sperm " + "  " + result2.toFixed(2) + " mln";


    if (percentile2 > 10) {
        div3.innerHTML = '<table><tr><td>✅ The amount of functional sperm is <b>acceptable</b>.</td></tr></table>';
    } else if (percentile2 <= 10) {
        div3.innerHTML = '<table><tr><td>❌ The amount of functional sperm is <b>not acceptable</b>.</td></tr></table>';
    }

    if (a < 1.5) {
        div4.innerHTML = '❗ The ejaculate volume is <b>too low</b>! This condition is called <b><i>hypospermia</i></b>.';
    }

    if (b < 15 && percentile >= 39) {
        div5.innerHTML = '❗ The sperm concentration is <b>too low</b>! This condition is called <b><i>oligospermia</i></b>.';
    } else if (b >= 15 && percentile < 39) {
        div5.innerHTML = '❗ The total amount of semen is <b>too low</b>! This condition is called <b><i>oligospermia</i></b>.';
    } else if (b < 15 && percentile < 39) {
        div5.innerHTML = '❗ The total amount of semen and its concentration are <b>too low</b>! This condition is called <b><i>oligospermia</i></b>.';
    }

    if (d <= 0.32) {
        div6.innerHTML = '❗ The motility is <b>too low</b>! This condition is called <b><i>asthenozoospermia</i></b>.';
    }
    if (c < 0.04) {
        div7.innerHTML = '❗ There is not enough sperm with normal morphology. This condition is called <b><i>teratospermia</i></b>.';
    }
    if (e < 0.58) {
        div8.innerHTML = '❗ There is not enough live sperm. This condition is called <b><i>necrozoospermia</i></b>.';
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

morpho.addEventListener('input', () => { validateAge("calculator-row-3", "weightError", "The morphology cannot exceed 100%.", Number(morpho.value) > 100) })
moti.addEventListener('input', () => { validateAge("calculator-row-4", "heightError", "The motility cannot exceed 100%.", Number(moti.value) > 100) })
vital.addEventListener('input', () => { validateAge("calculator-row-5", "heightError", "The vitality cannot exceed 100%.", Number(vital.value) > 100) })

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};