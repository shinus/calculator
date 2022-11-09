var creatinine = getElement("Creatinine_input_Id");
var Sodium = getElement("Sodium_input_Id");
var urine = getElement("Urine_input_Id");
var usodium = getElement("Usodium_input_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "creatinine", values: creatinine },
  { name: "sodium", values: Sodium },
  { name: "urine-creatinine", values: urine },
  { name: "urine-sodium", values: usodium },
];



function getExact() {
  var pcreatinine = Number(creatinine.value);
  var pSodium = Number(Sodium.value);
  var curine = Number(urine.value);
  var csodium = Number(usodium.value);

    var result = 0;

 
    result =(pcreatinine * csodium) / (pSodium * curine) * 100 ;

    console.log(result);
    return math.bignumber(result);

};

function showResult() {
  resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "FENA" + 
     "  " + "  " + "    " +
       
        
      result.toFixed(2) +
       "%" ;

    var percentile = result;

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
