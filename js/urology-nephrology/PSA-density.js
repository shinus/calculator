var Length = getElement("Length_input_Id");
var Length_dd = getElement("Length_dd_Id");
var Width = getElement("Width_input_Id");
var Width_dd = getElement("Width_dd_Id");
var Height = getElement("Height_input_Id");
var Height_dd = getElement("Height_dd_Id");

var PSA = getElement("PSA_input_Id");
var density = getElement("density_input_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "length", values: Length },
  { name: "lengthUnit", values: Length_dd },
  { name: "width", values: Width },
  { name: "widthUnit", values: Width_dd },
  { name: "height", values: Height },
  { name: "heightUnit", values: Height_dd },
  { name: "PSA", values: PSA },
];

var unitsForLength = [
  { name: "cm", value: "cm" },
  { name: "mm", value: "mm" },
  { name: "inch", value: "inch" },
];




function init() {
  createDropDown(unitsForLength, Length_dd)
  createDropDown(unitsForLength, Width_dd)
  createDropDown(unitsForLength, Height_dd)

}

init();


function getExact() {
  var alength = Number(Length.value);
  var awidth = Number(Width.value);
  var aheight = Number(Height.value);
  var apsa = Number(PSA.value);
  var pi = Number(3.141)


  var result = 0;
  
  
  result = alength * awidth * aheight * 0.523;
  
  var result2 = 0;

  result2 = (apsa / result);

 


  console.log(result);
  return [result, result2];

};


function showResult() {
  resultPage2(queryParams)
  var [result, result2] = getExact();


  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  output.innerHTML = "";
  div1.innerHTML = " Prostate volume " + "  " + result.toFixed(4) + "cm³";

  div2.innerHTML = " PSA density "  + "  " +  result2.toFixed(3) + "ng/ml²";

  var percentile = result;

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