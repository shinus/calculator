var drinking = getElement("drinking_dd_Id")
var criti = getElement("criticising_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "drinking", values: drinking },
    { name: "criticising", values: criti },
];

function getExact() {

    var a = Number(getSelectedValue(drinking))
    var b = Number(getSelectedValue(criti))

    var result = 0;

    result = a + b;

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "";

    var percentile = result;

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener('click', showResult)

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};