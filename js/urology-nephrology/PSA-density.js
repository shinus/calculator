var Length = getElement("Length_input_Id");
var Length_dd = getElement("Length_dd_Id");
var Width = getElement("Width_input_Id");
var Width_dd = getElement("Width_dd_Id");
var Height = getElement("Height_input_Id");
var Height_dd = getElement("Height_dd_Id");
var volume = getElement("volume_input_Id");
var volume_dd = getElement("volume_dd_Id");
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

var volumeUnits = [
  { name: "cubic centimeters", value: "cm" },
  { name: "cubic milimeters", value: "mm" },
  { name: "cubic inches", value: "cu in" },
  { name: "mililiters", value: "ml" },
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
  var pi = Number(3.141)


  var result = 0;

  result = (alength * awidth * aheight * (pi / 6));


  // result = (140 - age) * weight * sex / (72 * dserum)


  console.log(result);
  return math.bignumber(result);

};

function getExact2() {
  var avolume = Number(volume.value);
  var apsa = Number(PSA.value);

  var result2 = 0;

  result2 = (apsa / avolume);

  console.log(result2);
  return math.bignumber(result2);
};

function showResult() {
  resultPage2(queryParams)
  var result = Number(getExact());
  var result2 = Number(getExact2());

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  output.innerHTML = "";
  div1.innerHTML 

     = result.toFixed(2);

  div2.innerHTML =  result2.toFixed(2);

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