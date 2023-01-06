var age = getElement("Age_input_Id");
var heig = getElement("Height_input_Id");
var heig_dd = getElement("Height_dd_Id");
var weig = getElement("Weight_input_Id");
var weig_dd = getElement("Weight_dd_Id");
var gender = getElement("Sex_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "age", values: age },
  { name: "height", values: heig },
  { name: "heightUnit", values: heig_dd },
  { name: "weight", values: weig },
  { name: "weightUnit", values: weig_dd },
  { name: "gender", values: gender },
];

var gUnit = [
  {
    name: "Female",
    value: 0,
  },
  {
    name: "Male",
    value: 1,
  },
];

var heUnit = [
  {
    name: "feet",
    value: 0,
  },
  {
    name: "inches",
    value: 1,
  },
  {
    name: "meters",
    value: 2,
  },
  {
    name: "centimeters",
    value: 3,
  },
];

var weUnit = [
  {
    name: "kg",
    value: 0
  },
  {
    name: "grams",
    value: 1,
  },
  {
    name: "ounces",
    value: 2,
  },
  {
    name: "pounds",
    value: 3,
  },
];

function init() {
  createDropDown(heUnit, heig_dd)
  createDropDown(weUnit, weig_dd)
  createDropDown(gUnit, gender)
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

  init()

function getExact() {
    var agess = Number(age.value);
    var height = Number(heig.value);
    var weight = Number(weig.value);
    var gen = Number(getSelectedValue(gender));

    var a = height * 30.48;

    var result, result2, result3 = 0;

    if(gen == 0) {
      result = -2.097 + 0.1069 * a + 0.2466 *weight
    } else if(gen == 1){
      result = 2.447 - 0.09156 * agess + 0.1074 * a + 0.3362 * weight;
    }

    result2 = result * 2.1133;

    result3 = result / weight * 100;

    console.log(result, result2,result3);
    return [result, result2, result3]
}

function showResult() {
    resultPage2(queryParams)

    var [result, result2, result3] = getExact()

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    output.innerHTML = "";
    var percentile = result;

    div1.innerHTML = "Total body water (volume)  "  +  "\xa0\xa0\xa0  <b> "  + result2.toFixed(2) + " US pt </b>" 
    div2.innerHTML = "Total body water (weight)   " + "\xa0\xa0\xa0 <b> " + result.toFixed(2) + " kg </b>";
    div3.innerHTML = "Percentage of body weight  "  + "\xa0\xa0\xa0 <b> " + result3.toFixed(0) + " % </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);

