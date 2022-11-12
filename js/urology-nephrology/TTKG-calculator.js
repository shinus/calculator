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

function validateAge() {

  var uos = Number(uosmolality.value);
  var msg;
  var parentId = "calculator-row-4";
  var elementName = "osmaError";

  if (uos < 300) {
    msg =
      "The formula only applies when urine osmolality is at least 300.";
    showError(parentId, elementName, msg);
  } else {
    removeError(elementName);
  }
}


function showResult() {
  resultPage2(queryParams);
  var result = Number(getExact());

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  output.innerHTML = "";
  // div1.innerHTML = "";


  div1.innerHTML = "Transtubular potassium gradient" + "\xa0" + math.ceil(result);


  var percentile = result;

  if (percentile > 7 && percentile < 10) {
    div2.innerHTML = 'If the patient has a normal diet, this value is <b>normal</b>.';
  }

  else if (percentile < 8) {
    div2.innerHTML = 'TTKG result is low. It may require further diagnosis.';
  }

  else if (percentile > 9) {
    div2.innerHTML = 'TTKG result is high for this serum potassium concentration. It may require further diagnosis.';
  }

  if (percentile > 6) { // hyperkalemia and OK
    div2.innerHTML = 'The transtubular potassium gradient for the given serum potassium value is <b>normal</b>. Altough <b>optimally it should be over 10</b>.';
  } else if (percentile < 7) { // hyperkalemia not OK
    div2.innerHTML = 'The result is <b>too low</b> for the given serum potassium concentration (hyperkalemia). It suggests <b>hypoaldosteronism</b>.';
  }

  if (percentile < 4) { // hypokalemia OK
    div2.innerHTML = 'The transtubular potassium gradient is <b>normal</b> for the given serum potassium concentration.';
  } else if (percentile > 3) { // hypokalemia not OK
    div2.innerHTML = 'The result is <b>too big</b> for the given serum potassium concentration (hypokalemia). It suggests <b>renal potassium wasting</b>.';
  }

  output.append(div1);
  output.append(div2);
};

uosmolality.addEventListener('input', validateAge)
calcBtn.addEventListener("click", showResult);

window.onload = function () {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
};
