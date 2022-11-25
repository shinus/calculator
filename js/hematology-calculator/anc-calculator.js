var blood = getElement("White_input_Id");
var neutro = getElement("Neutrophil_input_Id");
var band = getElement("band_input_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "whiteBlood", values: blood },
    { name: "neutrophil", values: neutro },
    { name: "bands", values: band },
]

function getExact() {
    var wbc = Number(blood.value)
    var segs = Number(neutro.value)
    var bands = Number(band.value)

    var result = 0;

    result = wbc * (segs + bands) / 100;

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