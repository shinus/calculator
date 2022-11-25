var hema = getElement("Hematocrit_input_Id");
var hemoglo = getElement("Hemoglobin_input_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "hemtocrit", values: hema },
    { name: "hemglobin", values: hemoglo },
];

function getExact() {
    var hematocrit = Number(hema.value)
    var hemoglobin = Number(hemoglo.value)


    var result = 0;

    result = hematocrit / hemoglobin ;

    console.log(result);
    return math.bignumber(result);

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "Hct/Hgb ratio  " + "  " + result.toFixed(2);

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