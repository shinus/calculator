var soda = getElement("sodium_input_Id");
var trogger = getElement("triglycerides_input_Id");
var trigger_dd = getElement("triglycerides_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "Sodium", values: soda },
  { name: "triglycerides", values: trogger },
  { name: "triglyceridesUnit", values: trigger_dd },
];

var alUnit = [
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
    createDropDown(alUnit, trigger_dd)
}

init()

function getExact() {
    var sodium = Number(soda.value);
    var trigger = Number(trogger.value)
    var a = trigger * 0.0555;
    
    var result, result2 = 0;

    if(trigger == 1) {
        result2 = 0.08
    } else {
        result2 = trigger * 0.02;
    }
  
    result = sodium + a ;

    console.log(result, result2);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    var percentile = result;

   div1.innerHTML = "Corrected serum sodium   " + "\xa0\xa0\xa0 <b> " + result.toFixed(1) + " mEq/L </b>";

    output.append(div1);
    output.append(div2);
}

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  };