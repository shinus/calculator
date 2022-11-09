var nage = getElement("Age_input_Id");
var gender_dd = getElement("Sex_dd_Id");
var bweight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var bheight = getElement("Height_input_Id");
var height_dd = getElement("Height_dd_Id");
var serum = getElement("serum_input_Id");
var serum_dd = getElement("serum_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "age", values: nage },
  { name: "genderUnit", values: gender_dd },
  { name: "weight", values: bweight },
  { name: "weightUnit", values: weight_dd },
  { name: "height", values: bheight },
  { name: "heightUnit", values: height_dd },
  { name: "serum", values: serum },
  { name: "serumUnit", values: serum_dd },
];

var yearVS = [
  {
    name: "year",
    value: 0,
  },
];

var sex_VS = [
  {
    name: "male",
    value: 1,
  },
  {
    name: "female",
    value: 0.85,
  },
];

var unitsForLength = [
  { name: "cm", value: "cm" },
  { name: "inch", value: "inch" },
  { name: "feet", value: "ft" },
  { name: "m", value: "m" },
];

var unitsForWeight = [
  { name: "kilogram (kg)", value: "kg" },
  { name: "grams (g)", value: "g" },
  { name: "ounces (oz)", value: "oz" },
  { name: "pounds (lb)", value: "lb" },
  { name: "Stones (stone)", value: "stone" },
];

var mili = [
  { name: "miligrams per decliter mg/dl", value: 1 },
  { name: "micromiles per liter mol/l", value: 88.42 },
];



function init() {
  createDropDown(sex_VS, gender_dd);
  createDropDown(unitsForWeight, weight_dd);
  createDropDown(unitsForLength, height_dd);
  createDropDown(mili, serum_dd);


}

init();


function getExact() {
  var age = Number(nage.value)
  var sex = getSelectedValue(gender_dd);
  var weight = Number(bweight.value);
  var height = Number(bheight.value)
  var dserum = Number(serum.value)

  var result = 0;


  result = (140 - age) * weight * sex / (72 * dserum)


  console.log(result);
  return math.bignumber(result);

};

function validateAge(parentId, elementName, msg, condition) {

  var ageValue = Number(nage.value);
  var message;
  var parentId = parentId;
  var elementName = elementName;
  console.log(condition);
  if (condition) {
    message = msg;
    showError(parentId, elementName, message);
  } else {
    removeError(elementName);
  }
}

function showResult() {
  resultPage2(queryParams)
  var result = Number(getExact());

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");

  output.innerHTML = "";
  div1.innerHTML =
    "<b>Creatinine clearance</b> :" +
    " " +
    result.toFixed(2) + " " + "mL/min";

  var percentile = result;

  if( percentile >= 0 && percentile <= 90){
    div2.innerHTML = "Your creatinine clearance is below the normal range, which can be associated with the decreased renal function. Please consult your doctor."
  } else if( percentile >= 91 ){
    div2.innerHTML = "Your creatinine clearance is within normal range."
  }

  output.append(div1);
  output.append(div2);
};

nage.addEventListener("input", () => {
  console.log(nage.value);
  validateAge("calculator-row-1","ageError", "This calculator is aimed for adults (18 years and over", (Number(nage.value) < 18))
});
bweight.addEventListener('input', () => {validateAge("calculator-row-3","weightError", "Please enter a weight greater than 20 kg (45 lb).",Number(bweight.value) < 20)})
bheight.addEventListener('input', () => {validateAge("calculator-row-4","heightError", "Please enter a height of more than 50 cm (20 inch).",Number(bheight.value) < 50)})
calcBtn.addEventListener("click", showResult);

window.onload = function () {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
};