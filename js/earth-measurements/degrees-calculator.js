var degree = getElement("degree_input_Id");
var minute = getElement("minute_input_Id");
var second = getElement("second_input_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "degree", values: degree },
  { name: "minute", values: minute },
  { name: "second", values: second },
];

function calcDosage() {
  var deg = Number(degree.value);
  var min = Number(minute.value);
  var sec = Number(second.value);
  
  var result = 0;

  result = deg + ( min / 60 ) + (sec / 3600); 

  return result;

}

function init() {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}
init();

function showResult() {
  resultPage2(queryParams);
  var result = Number(calcDosage());
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  output.innerHTML = "";
 
   div1.innerHTML = result.toFixed(3) + " " + " deg";

   output.append(div1);
}

calcBtn.addEventListener("click", showResult);

