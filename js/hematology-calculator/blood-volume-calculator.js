
var height = getElement("Height_input_Id");
var height_dd = getElement("Height_dd_Id");
var weight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "height", values: height },
    { name: "heightUnit", values: height_dd },
    { name: "weight", values: weight },
    { name: "weightUnit", values: weight_dd },
]

function getExact() {
    var hei = Number(height.value)
    // var hei_dd = Number(getSelectedValue(height_dd))
    var wei = Number(weight.value)
    // var wei_dd = Number(getSelectedValue(weight_dd))

    var result, result2, result3, result4  = 0;

    result = 0.3561 * math.cbrt(hei) + 0.03308 * wei + 0.1833 ;

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
    div1.innerHTML = "Absolute neutrophil count (ANC)  " + "  " + result.toFixed(2) + " " + " ×10³/μL";

    if (percentile > 2) {
        div2.innerHTML = '<b>Category 0</b> – Your result is within normal limits.';
      } else if (percentile > 1.5) {
        div2.innerHTML = '<b>Category 1</b> – Your result is mildly decreased.';
      } else if (percentile > 1.0) {
        div2.innerHTML = '<b>Category 2</b> – Your result suggests mild neutropenia.';
      } else if (percentile > 0.5) {
        div2.innerHTML = '<b>Category 3</b> – Your result suggests moderate neutropenia.';
      } else {
        div2.innerHTML = '<b>Category 4</b> – Your result suggests severe neutropenia.';
      }

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