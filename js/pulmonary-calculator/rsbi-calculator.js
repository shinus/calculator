var rate = getElement("rate_input_Id");
var tidal = getElement("volume_input_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "resiporatoryRate", values: rate },
    { name: "tidalVolume", values: tidal },
];

function getExact() {
    var resipo = Number(rate.value)
    var volume = Number(tidal.value)

    var result = 0;

    result = resipo / volume * 1000;

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;

    div1.innerHTML = "RSBI   " + " <b> " + result.toFixed(3) + "</b> ";

    if (percentile < 105) {
        div2.innerHTML = 'The patient is likely to be successfully weaned from mechanical ventilation';
    } else{
        div2.innerHTML = 'The patient is likely to be unsuccessfully weaned from mechanical ventilation.';
    }

    output.append(div1);
    output.append(div2);
}

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};