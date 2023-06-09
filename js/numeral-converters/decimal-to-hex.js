var decimal = document.getElementById("decimal_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "decimal", values: decimal },
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
    var dec = Number(decimal.value)
    var result = dec.toString(16);
    return result;
}


function showResult() {
    resultPage2(queryParams);
    var result = getExact();
    var deci = Number(decimal.value)

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";
   
    div1.innerHTML = " <b> Decimal to hexadecimal conversion </b>"
    div2.innerHTML = "Decimal " + " " + deci;
    div3.innerHTML = "Hexadecimal " + " " + result.toUpperCase(); 
 
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);