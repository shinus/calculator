var bun = getElement("bun_input_Id");
var bun_dd = getElement("bun_dd_Id");
var creat = getElement("Serum_input_Id");
var creat_dd = getElement("Serum_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "bun", values: bun },
  { name: "bunUnit", values: bun_dd },
  { name: "creatinine", values: creat },
  { name: "creatinineUnit", values: creat_dd },
];


  var coef = [ 
    {name: "mg/dl", value: 0 },
    {name: "mm/mol", value: 1 }
  ];
  
  function init() {
    createDropDown(coef, bun_dd);
    createDropDown(coef, creat_dd);

  }
  
  init();
  
  
  function getExact() {
    var urea = Number(bun.value)
    var creatin = Number(creat.value);
  
  
    var result = 0;
  

    result =  urea / creatin
  
 
  console.log(result);
    return math.bignumber(result);
  
  };
  
  function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());
  
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
  
    output.innerHTML = "";
    div1.innerHTML =
      "<b>Bun Creatinie Ratio </b> :" +
      " " +
      result.toFixed(2);
  
      var percentile = result;
     if( percentile >= 20) {
      div2.innerHTML = "The ratio is over 20, which suggests that the kidney malfunction is due to a <b>prerenal cause</b>.";
     } else if( percentile < 10) {
       div2.innerHTML = "The ratio it under 10, which suggests that the kidney malfunction is due to an <b>intrinsic renal cause</b>.";
     } else {
       div2.innerHTML = "The ratio does not point to any kind of kidney damage; run additional tests to state the correct diagnosis.";
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