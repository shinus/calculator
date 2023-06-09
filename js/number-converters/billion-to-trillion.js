var billion = getElement("billion_input_id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "billion", values: billion },
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
    var bill = Number(billion.value)

    var result, result2 = 0;

    result = bill / 1000;
    result2 = bill / 10;

    console.log(result, result2);
    return [result, result2];

};

function showResult() {
    resultPage2(queryParams)
    var [result, result2] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = result + " trillion" 
    div2.innerHTML = 'Scientific notation ' +  result2 + " ×10¹⁰";
   
  

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener("click", showResult);

