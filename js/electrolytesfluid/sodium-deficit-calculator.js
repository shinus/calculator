var cate = getElement("category_dd_Id");
var weight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var serum = getElement("Serum_input_Id");
var desired = getElement("Desired_input_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "category", values: cate },
  { name: "weight", values: weight },
  { name: "weightUnit", values: weight_dd },
  { name: "serum", values: serum },
  { name: "desired", values: desired },
];

var caUnit = [
    {
        name: "kg",
        value: 0,
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
    {
        name: "stones",
        value: 4,
    },
];

var alUnit = [
    {
        name: "Adult female",
        value: 50,
    },
    {
        name: "Adult male",
        value: 60,
    },
    {
        name: "Child",
        value: 60,
    },
    {
        name: "Elderly male",
        value: 50,
    },
    {
        name: "Elderly female",
        value: 45,
    },
];

function init() {
    createDropDown(alUnit, cate)
    createDropDown(caUnit, weight_dd)
}

init()

function validateAge(parentId, elementName, msg, condition) {

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

function getExact() {
    var category = Number(getSelectedValue(cate));
    var weig = Number(weight.value);
    var ser = Number(serum.value);
    var desi = Number(desired.value);

    var result = 0;

    TBW = weig * category; 

    result = TBW * (desi - ser) / 100;

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    var percentile = result;

   div1.innerHTML = "Sodium deficit   " + "\xa0\xa0\xa0 <b> " + result.toFixed(0) + " mmol </b>";

    output.append(div1);
    output.append(div2);
}

weight.addEventListener('input', () => {validateAge("calculator-row-2","weightError", "Weight should be greater than 0 and less than 500 kg (1102 lb).",Number(weight.value) >= 500)})
calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  };