var hco = getElement("HCO₃_input_Id");
var paco = getElement("PaCO₂_input_Id");
var paco_dd = getElement("PaCO₂_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "HCO", values: hco },
    { name: "PACO", values: paco },
    { name: "PACO", values: paco_dd },
];

var caUnit = [
    {
        name: "mmHg",
        value: 0,
    },
    {
        name: "inHg",
        value: 1,
    },
    {
        name: "kPa",
        value: 2,
    },
    {
        name: "torr",
        value: 3,
    },
];

function init() {
    createDropDown(caUnit, paco_dd)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

function getExact() {
    var HCO = Number(hco.value);
    var PACO = Number(paco.value);

    var result = 0;

    result = 6.1 + Math.log10(HCO / (0.0308 * PACO));

    console.log(result);
    return result
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    var percentile = result;

    div1.innerHTML = "Venous blood pH   " + "\xa0\xa0\xa0 <b> " + result.toFixed(2) + " </b>";

    if (percentile >= 7) {
        div2.innerHTML = "This arterial blood pH indicates <b> alkalosis. </b>";
    } else {
        div2.innerHTML = "This arterial blood pH indicates <b> acidosis. </b>"
    }

    div3.innerHTML = "In this case, values in mEq/L are equal to those in mmol/L, and those in mmHg are equal to those in torr. If your results are in mmol/L or in mmHg, type in these values."

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);

