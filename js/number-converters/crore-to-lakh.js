var crore = getElement("crore_input_id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "crore", values: crore },
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
    var cr = Number(crore.value)

    var result, result2 = 0;

    result = cr * 100;
    result2 = cr * 10000000;

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

    div1.innerHTML = "Lakh(s) " + result + " L" 
    div2.innerHTML = 'Your number written using digits:  ' +  result2 ;
   
  

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener("click", showResult);

