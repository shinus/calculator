var cigarate = getElement("Cigarettes_input_Id");
var smoking = getElement("smoking_input_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "cigarattes", values: cigarate },
  { name: "smoking", values: smoking },
];

function init() {
  var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
}

function getExact() {
    var cigar = Number(cigarate.value)
    var smoke = Number(smoking.value)
    var pack = 20;

    var result = 0;

    result = (cigar / pack) * smoke ;

    console.log(result);
    return result
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

   div1.innerHTML = "Pack years   " + "\xa0\xa0\xa0 <b> " + result.toFixed(2) + "</b>";

    output.append(div1);
    output.append(div2);
}

calcBtn.addEventListener("click", showResult);

