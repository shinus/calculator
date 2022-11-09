var glucose = getElement("mg_input_Id")
var glucose_dd = getElement("mg_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "glucose", values: glucose },
  { name: "glucoseUnit", values: glucose_dd },
];

var gluUnit = [
    {
        name: "mmol/L",
        value: 0,
    },
    {
        name: "mg/dL",
        value: 1,
    },
];




function init() {
    createDropDown(gluUnit, glucose_dd)

}   

init()

function getExact() {
    var aglu = Number(glucose.value)
 
    var result = 0;

    result = aglu * 18;

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams);
      var result = Number(getExact());
  
      var div1 = document.createElement("div");
      var div2 = document.createElement("div");
  
      output.innerHTML = "";
      div1.innerHTML = "When converted" + 
       "  " +
        result.toFixed(0)  + " " + "mg/dL";
  
      var percentile = result;
  
      output.append(div1);
      output.append(div2);
  };

  calcBtn.addEventListener('click', showResult)

  window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  };