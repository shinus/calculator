var what_dd = getElement("What_dd_Id")
var nAge = getElement("Age_input_Id")
var gender_dd = getElement("Sex_dd_Id")
var Ethnicity_dd = getElement("Ethnicity_dd_Id")
var creatinine = getElement("Creatinine_input_Id")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "markerUnit", values: what_dd },
  { name: "age", values: nAge },
  { name: "henderUnit", values: gender_dd },
  { name: "ethnivityUnit", values: Ethnicity_dd },
  { name: "creatinine", values: creatinine },

];

var markerUnit = [ 
    {
        name: "serum creatinine",
        value: 0,
    },
    {
        name: "serum crystatine",
        value: 1,
    },
    {
        name: "both",
        value: 2,
    },
];

var genderUnit = [ 
    {
        name: "male",
        value: 0,   
    },
    {
        name: "female",
        value: 1,   
    }
];

var ethUnits =[
    {
        name: "black",
        value: 0,
    },
    {
        name: "White / Hispanic / Asian / Other",
        value: 1,
    },
];

function init() {
    createDropDown(markerUnit, what_dd)
    createDropDown(genderUnit, gender_dd)
    createDropDown(ethUnits, Ethnicity_dd)
}

init()


function getExact() {
    var SCr = Number(creatinine.value);
    var pnitro = Number(nitro.value);
    var curine = Number(urine.value);
    var curea = Number(urea.value);
  
    var result = 0;
  
  
    result = 141 * min(SCr/k, 1) * max(SCr/k, 1)-1.209 * 0.993*nAge * a * b;
  
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