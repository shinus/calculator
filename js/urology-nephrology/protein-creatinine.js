var protein = getElement("protein_input_Id");
var creatinine = getElement("creatinine_input_Id");
var dd_creatinine = getElement("creatinine_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");


const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "protein", values: protein },
  { name: "creatinine", values: creatinine },
  { name: "creatinineUnit", values: dd_creatinine },
//   { name: "ratio", values: ratio },
];



var mili = [
    { name: "miligrams per decliter mg/dl", value: 1 },
    { name: "micromiles per liter mol/l", value: 88.42 },
];


function init() {
    createDropDown(mili, dd_creatinine);
}

init();


function getExact() {
  var aprotein = Number(protein.value);
  var acreatinine = Number(creatinine.value);
  var creatinine_dd = getSelectedValue(dd_creatinine);
//   var rat = Number(ratio.value);

    var result = 0;


    result =(aprotein / acreatinine)

    console.log(result);
    return math.bignumber(result);

};

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
   
       
        
     div1.innerHTML = result.toFixed(4) +
       "g/day" ;

    var percentile = result;
    if(percentile < 0.2) {
        div2.innerHTML = "✔️ A protein creatinie ratio smaller than 0.2 g/day is considered to be physiological."
    } else if (percentile >= 0.2 && percentile < 3.5) {
       div2.innerHTML =   "❓ A patient with a protein creatinine ratio between 0.2 and 3.5 g/day needs further investigation."
    } else if (percentile >= 3.5) {
       div2.innerHTML =   "❗ A protein creatinine ratio higher than 3.5 g/day is correlated with massive proteinuria (nephrotic range)"
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