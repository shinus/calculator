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
  
   
      result = [(curea*pcreatinine)/(pnitro *curine)]*100 ;
  
      console.log(result);
      return math.bignumber(result);
  
  };
  
  function showResult() {
      var result = Number(getExact());
  
      var div1 = document.createElement("div");
      var div2 = document.createElement("div");
  
      output.innerHTML = "";
      div1.innerHTML = "Fractional excretion of urea" + 
       "  " + "  " + "      " +
         
          
        result.toFixed(2) +
         "%" ;
  
      var percentile = result;
  
      output.append(div1);
      output.append(div2);
  };
  
  calcBtn.addEventListener("click", showResult);
  