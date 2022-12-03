var gender = getElement("Sex_dd_Id");
var age = getElement("Age_input_Id");
var weight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var height = getElement("Height_input_Id");
var Height_dd = getElement("Height_dd_Id");
var smoke = getElement("Smoking_input_Id")
var cigar = getElement("Cigarettes_input_Id")
var quit = getElement("quitting_input_Id")
var hour = getElement("Hours_input_Id")
var cough = getElement("cough_dd_Id")
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "gender", values: gender },
  { name: "age", values: age },
  { name: "weight", values: weight },
  { name: "weightUnit", values: weight_dd },
  { name: "height", values: height },
  { name: "heightUnut", values: Height_dd },
  { name: "smoking", values: smoke },
  { name: "quitting", values: quit },
  { name: "hours", values: hour },
  { name: "cough", values: cough },
];

var faUnit = [
    {
        name: "Male",
        value: 1,
    },
    {
        name: "Female",
        value: 0,
    },
];
var coUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 1,
    },
];

var kgUnit = [
    {
        name: "kg",
        value: 0,
    },
    {
        name: "grams",
        value: 1,
    },
    {
        name: "micrograms",
        value: 1,
    },
    {
        name: "miligrams",
        value: 2,
    },
    {
        name: "decagrams",
        value: 3,
    },
    {
        name: "metric tons",
        value: 4,
    },
    {
        name: "grains",
        value: 5,
    },
    {
        name: "drachms",
        value: 6,
    },
    {
        name: "ounces",
        value: 7,
    },
    {
        name: "punda",
        value: 8,
    },
];
var cmUnit = [
    {
        name: "cm",
        value: 0,
    },
    {
        name: "mm",
        value: 1,
    },
    {
        name: "m",
        value: 1,
    },
    {
        name: "km",
        value: 2,
    },
    {
        name: "in",
        value: 3,
    },
    {
        name: "ft",
        value: 4,
    },
    {
        name: "yrd",
        value: 5,
    },
    {
        name: "mi",
        value: 6,
    },
    {
        name: "nmi",
        value: 7,
    },
];

function init() {
    createDropDown(faUnit, gender)
    createDropDown(kgUnit, weight_dd)
    createDropDown(cmUnit, Height_dd)
    createDropDown(coUnit, cough)
}

init()

function getExact() {
    var sex = Number(getSelectedValue(gender))
    var ages = Number(age.value)
    var heig = Number(height.value)
    var weig = Number(weight.value)
    var smoking = Number(smoke.value)
    var cigarate = Number(cigar.value)
    var quitting = Number(quit.value)
    var hourss = Number(hour.value)
    var cou = Number(cough.value)
    var pack = (cigarate / 20) * smoking
    var a = math.pow(heig, -2)
    var BMI = weig / a 
    var aging = math.pow(ages / 100, -1)
    var ss = sex - 1.985
    var coughss = (0.4921 * cou)
    var abc = (0.0807 * math.log(hourss))
    var pop = (1.7024 * math.log(BMI))

    var result, result2 = 0;
    
    result = (1.49773062) * (ss) * (aging)  + (1.120 * math.log(pack))  - (0.040 * cigarate) - (0.2402 * math.log(quitting)) - (pop) + (abc) + (coughss);

    result2 = 0;
    console.log(pop, abc);
    console.log(result, result2);
    return [result, result2]
}

function showResult() {
    resultPage2(queryParams)

    var [result, result2, result3, result4] = getExact()

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    

   div1.innerHTML = "Lung capacities";
   div2.innerHTML = "Total lung capacity (TLC) " + "  \xa0\xa0\xa0\xa0\xa0\xa0 <b> " +  result.toFixed(0) + "liters </b>";
  
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