var weight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var category = getElement("category_dd_Id");
var level = getElement("level_input_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "weight", values: weight },
  { name: "weightUnit", values: weight_dd },
  { name: "category", values: category },
  { name: "level", values: level },
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
    createDropDown(caUnit, weight_dd)
    createDropDown(alUnit, category)
}

init()

function getExact() {
    var weig = Number(weight.value);
    var cate = Number(getSelectedValue(category));
    var lev = Number(level.value);
    var TBW = 0;
    desired = 140;

    var result = 0;

    TBW = weig * cate

    result = TBW * ((lev / desired) - 1) / 100;

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

   div1.innerHTML = "Free water deficit   " + "\xa0\xa0\xa0 <b> " + result.toFixed(0) + " liters </b>";

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