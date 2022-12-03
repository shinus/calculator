var pleural = getElement("Pleural_input_Id");
var pleural_dd = getElement("Pleural_dd_Id");
var serum = getElement("Serum_input_Id");
var serum_dd = getElement("Serum_dd_Id");
var fluid = getElement("fluid_input_Id");
var ldh = getElement("LDH_input_Id");
var upper = getElement("Upper_input_Id")
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "pleural", values: pleural },
  { name: "pleuralUnit", values: pleural_dd },
  { name: "serum", values: serum },
  { name: "serumUnit", values: serum_dd },
  { name: "fluid", values: fluid },
  { name: "LDH", values: ldh },
  { name: "upper", values: upper },
];

var faUnit = [
    {
        name: "g/dL",
        value: 0,
    },
    {
        name: "g/L",
        value: 1,
    },
    {
        name: "mg/L",
        value: 2,
    },
    {
        name: "mg/dL",
        value: 3,
    },
];

function init() {
    createDropDown(faUnit, pleural_dd)
    createDropDown(faUnit, serum_dd)
}

init()

function getExact() {
    var Pprotein = Number(pleural.value)
    var Sprotein = Number(serum.value)
    var FLDH = Number(fluid.value)
    var SLDH = Number(ldh.value)
    var ULDH = Number(upper.value)

    var result, result2, result3 = 0;

    result = Pprotein / Sprotein ;
    result2 = FLDH / SLDH ;
    result3 = FLDH / ULDH ;

    console.log(result, result2, result3);
    return [result, result2, result3]
}

function showResult() {
    resultPage2(queryParams)

    var [result, result2, result3] = getExact()

    var div1 = document.createElement("div");

    output.innerHTML = "";
    
    if(result >= 0.5 || result2 >= 0.6 || result3 >= 0.67) {
        div1.innerHTML = " The pleural fluid is <b> exudative. </b>"
    } else {
        div1.innerHTML = " The pleural fluid is <b> transudative. </b>"
    }

    output.append(div1);
}

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  };