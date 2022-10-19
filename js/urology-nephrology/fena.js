var creatinine = getElement("Creatinine_input_Id");
var Sodium = getElement("Sodium_input_Id");
var urine = getElement("Urine_input_Id");
var usodium = getElement("Usodium_input_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");



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
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "FENA" + 
     "  " + "  " + "      " +
       
        
      result.toFixed(2) +
       "%" ;

    var percentile = result;

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener("click", showResult);
