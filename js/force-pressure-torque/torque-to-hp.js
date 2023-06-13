var torq = document.getElementById("tor_input_id");
var speed = document.getElementById("speed_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "torque", values: torq },
    { name: "speed", values: speed },
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
    var torr = Number(torq.value)
    var spe = Number(speed.value)
   
    var result,result2 =  0;
    result = ((torr * spe) / 9.5488) / 1000;
    result2 = (result / 745.70) * 1000;

    return [result, result2]
}


function showResult() {
    resultPage2(queryParams);
    var [result, result2] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b> Power " + result.toFixed(3) + " " + " kW</b>"
    div2.innerHTML = "<b> Horse Power" + result2.toFixed(3) + " " + " hp(l)</b>"

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);