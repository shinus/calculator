var na = document.getElementById("nm_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "Nm", values: na },
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
    var n = Number(na.value)
   
    var result, result2, result3 =  0;
    result = n / 1.3558;
    result2 = n / 0.09807;
    result3 = n / 1;

    return [result, result2, result3]
}


function showResult() {
    resultPage2(queryParams);
    var [result, result2, result3] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>" +  result.toFixed(3) + " " + " lbf-ft</b>"
    div2.innerHTML = "<b> Other torque units </b>";
    div3.innerHTML = "<b>" + result2.toFixed(3) + " " + " kgf-cm </b>"
    div4.innerHTML = "<b>" + result3.toFixed(0) + " " + " J/rad </b>"
    
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
}

calcBtn.addEventListener("click", showResult);