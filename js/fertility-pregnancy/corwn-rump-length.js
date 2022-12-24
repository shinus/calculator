var length = getElement("length_input_Id");
var length_dd = getElement("length_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "crownlength", values: length },
    { name: "lengthUnit", values: length_dd },
];

var ddUnit = [
    {
        name: "mm",
        value: 0
    },
    {
        name: "cm",
        value: 1
    },
    {
        name: "in",
        value: 2
    },
];

function init() {
    createDropDown(ddUnit, length_dd);
}

init();

function getExact() {
    var a = Number(length.value);

    var result, ab = 0;

    ab = 8.052 * math.sqrt(a * 1.037) + 23.73;

    result = ab / 7;

    console.log(result);
    return result;
};

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;
    div1.innerHTML = "Gestational age " + "    " + result.toFixed(1) + " wks";

    div2.innerHTML = "Pregnancies over 14 weeks require different kind of measurements."

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