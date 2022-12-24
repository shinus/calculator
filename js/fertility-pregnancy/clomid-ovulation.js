var duration = getElement("Duration_input_Id");
var date = document.querySelectorAll('input[type="date"]')
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "duration", values: duration },
];

function getExact() {
    var a = Number(duration.value);
    var b = date.stepUp(a)
    console.log(b,'test');
    var result = 0;

    result = a + b + 7;

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