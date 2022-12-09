var cate = getElement("category_dd_Id");
var weight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var serum = getElement("Serum_input_Id");
var flu = getElement("Fluid_dd_Id");
var pota = getElement("potassium_input_Id");
var aim = getElement("Aimed_input_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "category", values: cate },
  { name: "weight", values: weight },
  { name: "weightUnit", values: weight_dd },
  { name: "serum", values: serum },
  { name: "fluid", values: flu },
  { name: "potassium", values: pota },
  { name: "aimed", values: aim },
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
        name: "Adult male",
        value: 60,
    },
    {
        name: "Adult female",
        value: 50,
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

var fluUnit = [
    {
        name: "0.9% NaCl (154 mmol/L)",
        value: 154,
    },
    {
        name: "3% NaCl (513 mmol/L)",
        value: 513,
    },
    {
        name: "Ringers (130mmol/L)",
        value: 130,
    },
    {
        name: "0.45% NaCl / 4% glucose(77 mmol/L)",
        value: 77,
    },
    {
        name: "0.18% NaCl / 4% glucose (31 mmol/L)",
        value: 31,
    },
    {
        name: "5% glucose (0 mmol/L)",
        value: 0,
    },
];

function init() {
    createDropDown(alUnit, cate)
    createDropDown(caUnit, weight_dd)
    createDropDown(fluUnit, flu)
}

init()

function getExact() {
    var category = Number(getSelectedValue(cate));
    var weig = Number(weight.value);
    var ser = Number(serum.value);
    var fluid = Number(getSelectedValue(flu));
    var potassium = Number(pota.value);
    var aimed = Number(aim.value);

    var result, result2 = 0;


    TBW = weig * category; 

    result = ((fluid - ser) / (TBW + 1)) * 100;

    result2 = 1000 * (aimed * (TBW + 1) / (fluid + potassium - ser))


    console.log(fluid, category);

    console.log(TBW, ser, aimed, potassium);
    console.log(result, result2);
    return [result, result2]
}

function showResult() {
    resultPage2(queryParams)

    var [result, result2] = getExact()

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    var percentile = result;

   div1.innerHTML = "Sodium change per liter   " + "\xa0\xa0\xa0 <b> " + result.toFixed(3) + " mEq/L/h </b>";

   div2.innerHTML = "Correction rate  " + "\xa0\xa0\xa0 <b> "  + result2.toFixed(0) + "mL/h </b>"
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