var cigar = getElement("Cigarettes_input_Id")
var smoke = getElement("smoking_input_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "cigerattes", values: cigar },
    { name: "smoking", values: smoke },
];

function getExact() {

    var a = Number(cigar.value)
    var b = Number(smoke.value)

    var result = 0;

    result = (a / 20 ) * b;

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "Pack years    " + result;

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