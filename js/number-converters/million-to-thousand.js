var million = getElement("million_input_id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "million", values: million },
]

function init() { 
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var mill = Number(million.value)

    var result, result2 = 0;

    result = mill * 1000;
    result2 = mill * 1000000;


    console.log(result, result2);
    return [result, result2];

};

function showResult() {
    resultPage2(queryParams)
    var [result, result2] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = 'Value in thousands ' +  result;
    div2.innerHTML = 'Decimal number ' + result2 + ' ×10⁰';
  

    output.append(div1);
    output.append(div2);
    output.append(div3);
};

calcBtn.addEventListener("click", showResult);

