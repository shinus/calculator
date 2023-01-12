var irv = getElement("IRV_input_Id");
var irv_dd = getElement("IRV_dd_Id");
var tv = getElement("TV_input_Id");
var tv_dd = getElement("TV_dd_Id");
var erv = getElement("ERV_input_Id");
var erv_dd = getElement("ERV_dd_Id");
var rv = getElement("RV_input_Id")
var rv_dd = getElement("RV_dd_Id")
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "IRV", values: irv },
  { name: "IRVUnit", values: irv_dd },
  { name: "TV", values: tv },
  { name: "TVUnit", values: tv_dd },
  { name: "ERV", values: erv },
  { name: "ERVUnit", values: erv_dd },
  { name: "RV", values: rv },
  { name: "RVUnit", values: rv_dd },
];

var faUnit = [
    {
        name: "liters",
        value: 0,
    },
    {
        name: "mililiters",
        value: 1,
    },
];

function init() {
    createDropDown(faUnit, irv_dd)
    createDropDown(faUnit, tv_dd)
    createDropDown(faUnit, erv_dd)
    createDropDown(faUnit, rv_dd)
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
}

init()

function getExact() {
    var IRVS = Number(irv.value)
    var TVS = Number(tv.value)
    var ERVS = Number(erv.value)
    var RVS = Number(rv.value)

    var result, result2, result3, result4 = 0;
    
    result = IRVS + TVS + ERVS + RVS;

    result2 = IRVS + TVS + ERVS ;

    result3 = ERVS + RVS;

    result4 = IRVS + TVS;

    console.log(result, result2, result3, result4);
    return [result, result2, result3, result4]
}

function showResult() {
    resultPage2(queryParams)

    var [result, result2, result3, result4] = getExact()

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    output.innerHTML = "";
    

   div1.innerHTML = "Lung capacities";
   div2.innerHTML = "Total lung capacity (TLC) " + "  \xa0\xa0\xa0\xa0\xa0\xa0 <b> " +  result.toFixed(0) + "liters </b>";
   div3.innerHTML = "Vital capacity (VC) " + " \xa0\xa0\xa0\xa0\xa0\xa0 <b>" + result2.toFixed(0) + "liters </b>";
   div4.innerHTML = "Functional residual capacity (FRC) " + " \xa0\xa0\xa0\xa0\xa0\xa0 <b>" + result3.toFixed(0) + "liters </b>";
   div5.innerHTML = "Inspiratory capacity (IC) " + " \xa0\xa0\xa0\xa0\xa0\xa0 <b>" + result4.toFixed(0) + "liters </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);

