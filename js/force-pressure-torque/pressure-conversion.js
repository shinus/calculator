var ba = document.getElementById("bar_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "bar", values: ba },
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
    var bars = Number(ba.value)
   
    var result,result2,result3 =  0;
    result = bars / 101325 * 100000;
    result2 = (result * 14.7);
    result3 = bars * 100000;

    return [result, result2, result3]
}


function showResult() {
    resultPage2(queryParams);
    var [result, result2, result3] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b> " + result2.toFixed(3) + " " + " psi</b>"
    div2.innerHTML = "<b> " + result.toFixed(5) + " " + " atm</b>"
    div3.innerHTML = "<b> " + result3.toFixed(0) + " " + " pa</b>"

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);