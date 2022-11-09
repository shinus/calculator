var serum = getElement("serum_input_Id");
var urine = getElement("urine_input_Id");
var sosmality = getElement("sosmolality_input_Id");
var uosmolality = getElement("uosmolality_input_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "serum", values: serum },
  { name: "urine", values: urine },
  { name: "serumosmality", values: sosmality },
  { name: "urineosmality", values: uosmolality },

];


function getExact() {
  var aserum = Number(serum.value);
  var aurine = Number(urine.value);
  var sos = Number(sosmality.value);
  var uso = Number(uosmolality.value);

  var result = 0;


  result = (aurine / aserum) / (uso / sos)

  console.log(result);
  return math.bignumber(result);

};

function showResult() {
  resultPage2(queryParams);
  var result = Number(getExact());

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  output.innerHTML = "";
  div1.innerHTML = "";


  div2.innerHTML = "Transtubular potassium gradient" + "\xa0" + math.ceil(result);


  var percentile = result;

  // output.append(div1);
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
