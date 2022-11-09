var glycemic = getElement("index_input_Id")
var portion = getElement("portion_input_Id")
var portion_dd = getElement("portion_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "glycemic", values: glycemic },
    { name: "portion", values: portion },
    { name: "portionUnit", values: portion_dd },
];

var gluUnit = [
    {
        name: "grams",
        value: 0,
    },
    {
        name: "decagrams",
        value: 1,
    },
    {
        name: "kilograms",
        value: 2,
    },
    {
        name: "grains",
        value: 3,
    },
    {
        name: "drachms",
        value: 4,
    },
    {
        name: "ounces",
        value: 5,
    },
    {
        name: "pounds",
        value: 6,
    },
];




function init() {
    createDropDown(gluUnit, portion_dd)

}

init()

function getExact() {
    var agl = Number(glycemic.value)
    var port = Number(portion.value)

    var result = 0;

    result =(agl * port / 100);

    console.log(result);
    return math.bignumber(result)
}

function validateAge() {
   
    var agly = Number(glycemic.value);
    var msg;
    var parentId = "calculator-row-1";
    var elementName = "glycemicError";
    
    if (agly > 100) {
      msg =
        "The glycemic index can't be higher than 100.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "Glycemic load" +
        "  " +
        result.toFixed(2) ;

    var percentile = result;
    if (percentile <= 10) {
        div2.innerHTML = "🟢 This food product has a low GL.";
        } else if (percentile > 10 && percentile < 20) {
         div2.innerHTML =  " 🟠 This food product has a medium GL.";
        } else if (percentile >= 20) {
        div2.innerHTML =   "🔴 This food product has a high GL.";
        }

    output.append(div1);
    output.append(div2);
};

glycemic.addEventListener('input', validateAge)
calcBtn.addEventListener('click', showResult)

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};