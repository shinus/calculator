var torr = document.getElementById("torr_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "torer", values: torr },
];

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var tor = Number(torr.value)
   
    var result,result2, result3,result4 =  0;
    result = tor  / 760;
    result2 = tor * 133.322368;
    result3 = tor * 0.019337;
    result4 = tor * 1.359510;

    return [result, result2, result3, result4]
}


function showResult() {
    resultPage2(queryParams);
    var [result, result2, result3, result4] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b> " + result.toFixed(4) + " " + " atm</b>"
    div2.innerHTML = "<b> Conversion to other units </b>"
    div3.innerHTML = "<b> Metric" + " " + result2.toFixed(0) + " " + " pa</b>";
    div4.innerHTML = "<b>imperial " + " " + result3.toFixed(2) + " " + " psi</b>";
    div5.innerHTML = "<b>Others " + " " + result4.toFixed(2) + " " + " cmH₂O</b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);