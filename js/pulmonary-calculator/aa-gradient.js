var age = getElement("Age_input_Id");
var fio = getElement("FiO_input_Id");
var paco = getElement("PaCO_input_Id");
var paco_dd = getElement("PaCO_dd_Id");
var pao = getElement("PaO_input_Id");
var pao_dd = getElement("PaO_dd_Id");
var atmospher = getElement("pressure_input_Id")
var atmospher_dd = getElement("pressure_dd_Id")
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "age", values: age },
  { name: "FIO", values: fio },
  { name: "PACO", values: paco },
  { name: "PACOUnit", values: paco_dd },
  { name: "PAO", values: pao },
  { name: "PAOUnit", values: pao_dd },
  { name: "Atmospher", values: atmospher },
  { name: "AtmospherUnit", values: atmospher_dd },
];

var faUnit = [
    {
        name: "mmhg",
        value: 0,
    },
    {
        name: "kPa",
        value: 1,
    },
    {
        name: "atm",
        value: 2,
    },
];

var atUnit = [
    {
        name: "kPa",
        value: 0,
    },
    {
        name: "atm",
        value: 1,
    },
    {
        name: "mmhg",
        value: 2,
    },
];

function init() {
    createDropDown(faUnit, paco_dd)
    createDropDown(faUnit, pao_dd)
    createDropDown(atUnit, atmospher_dd)
}

init()

function getExact() {
    var nAge = Number(age.value)
    var fi = Number(fio.value)
    var pac = Number(paco.value)
    var pa = Number(pao.value)
    var atm = Number(atmospher.value)
    var PH20 = 45;
    var a = fi / 100;
    var b = 8

    var result, result2 = 0;
    
    var PAO2 = (a * (701 - 47) - pac / b);
    result = PAO2 - 45;

    result2 = nAge / 4 + 4 ;

    console.log(result, result2);
    return [result, result2]
}

function showResult() {
    resultPage2(queryParams)

    var [result, result2] = getExact()

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    // var div3 = document.createElement("div");

    output.innerHTML = "";
    

   div1.innerHTML = "AA gradient" + "    " + result.toFixed(2) + "mmhg";
   div2.innerHTML = "Expected AA gradient for age " + "    " +  result2.toFixed(2) + "mmhg";

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