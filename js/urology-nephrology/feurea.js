var creatinine = getElement("creatinine_input_Id");
var dd_creatinine = getElement("creatinine_dd_Id");
var nitro = getElement("nitrogen_input_Id");
var dd_nitro = getElement("nitrogen_dd_Id");
var urine = getElement("Urine_input_Id");
var dd_urine = getElement("Urine_dd_Id");
var urea = getElement("urea_input_Id");
var dd_urea = getElement("urea_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "creatinine", values: creatinine },
  { name: "creatinineUnit", values: dd_creatinine },
  { name: "nitrogen", values: nitro },
  { name: "nitrogenUnit", values: dd_nitro },
  { name: "urinecr", values: urine },
  { name: "urinecrUnit", values: dd_urine },
  { name: "urea", values: urea },
  { name: "ureaUnit", values: dd_urea },
];


var mili = [
  { name: "miligrams per decliter mg/dl", value: 1 },
  { name: "micromiles per liter mol/l", value: 88.42 },
];


function init() {
  createDropDown(mili, dd_creatinine);
  createDropDown(mili, dd_nitro);
  createDropDown(mili, dd_urine);
  createDropDown(mili, dd_urea);
}

init();


function getExact() {
  var pcreatinine = Number(creatinine.value);
  var pnitro = Number(nitro.value);
  var curine = Number(urine.value);
  var curea = Number(urea.value);

  var result = 0;


  result = [(curea * pcreatinine) / (pnitro * curine)] * 100;

  console.log(result);
  return math.bignumber(result);

};

function showResult() {
  resultPage2(queryParams);
  var result = Number(getExact());

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  output.innerHTML = "";
  div1.innerHTML = "Fractional excretion of urea" +
    "  " + "  " +
  result.toFixed(2) +
    "%";

  var percentile = result;
  if (percentile < 36) {
    div2.innerHTML = "The patient is likely to have prerenal disease."
  } else if (percentile > 35 && percentile < 50) {
    div2.innerHTML =  "The patient is likely to have intrinsic renal disease. However, only a result greater than 50% implies strong evidence of intrinsic renal pathology."
  } else if (percentile > 49) {
   div2.innerHTML =  "The patient is likely to have intrinsic renal disease."
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