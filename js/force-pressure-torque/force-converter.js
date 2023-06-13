var force = document.getElementById("force_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "force", values: force },
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
    var forc = Number(force.value)
   
    var result, result2, result3, result4, result5,result6 =  0;
    result = forc / 1000;
    result2 = forc / 0.00001;
    result3 = forc / 9.80665;
    result4 = forc / 4.4482216153;
    result5 = forc / 0.1382549544;
    result6 = forc / 4448.2216152548;

    return [result, result2, result3, result4, result5, result6]
}


function showResult() {
    resultPage2(queryParams);
    var [result, result2, result3, result4, result5, result6] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "<b>" +  result.toFixed(3) + " " + " kN</b>"
    div2.innerHTML = "<b>" + result2.toFixed(0)  + " " + " dyn </b>";
    div3.innerHTML = "<b>" + result3.toFixed(3) + " " + " kp </b>"
    div4.innerHTML = "<b>" + result4.toFixed(3) + " " + " lbf </b>"
    div5.innerHTML = "<b>" + result5.toFixed(2) + " " + " pdl </b>"
    div6.innerHTML = "<b>" + result6.toFixed(6) + " " + " kip </b>"
    
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
}

calcBtn.addEventListener("click", showResult);