var mag = getElement("magnesium_input_Id");
var mag_dd = getElement("magnesium_dd_Id");
var albu = getElement("albumin_input_Id");
var albu_dd = getElement("albumin_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "magnesium", values: mag },
  { name: "magnesiumUnit", values: mag_dd },
  { name: "albumin", values: albu },
  { name: "albuminUnit", values: albu_dd },
];

var caUnit = [
    {
        name: "mEq/dL",
        value: 0,
    },
    {
        name: "mmol/L",
        value: 1,
    },
    {
        name: "mg/dL",
        value: 1,
    },
];

var alUnit = [
    {
        name: "g/L",
        value: 0,
    },
    {
        name: "g/dL",
        value: 1,
    },
];

function init() {
    createDropDown(caUnit, mag_dd)
    createDropDown(alUnit, albu_dd)
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
}

init()

function getExact() {
    var magnesium = Number(mag.value);
    var albumin = Number(albu.value);

    var result = 0;

    result = magnesium + 0.005 * (40 - albumin);

    console.log(result);
    return result
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    var percentile = result;

   div1.innerHTML = "Corrected magnesium   " + "\xa0\xa0\xa0 <b> " + result.toFixed(2) + " mEq/L </b>";
   if(percentile <= 0) {
     div2.innerHTML = "<p style=color:red>" + "This value has to be greater than 0." + "</p>";
   } else {
       div2.innerHTML = ""
   }
 
    output.append(div1);
    output.append(div2);
}

calcBtn.addEventListener("click", showResult);
