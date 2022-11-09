var insulin = getElement("insulin_input_Id")
var glucose = getElement("glucose_input_Id")
var glucose_dd = getElement("glucose_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "insulin", values: insulin },
    { name: "glucose", values: glucose },
    { name: "glucoseUnit", values: glucose_dd },
];

var gluUnit = [
    {
        name: "mg/dL",
        value: 0,
    },
    {
        name: "mmol/L",
        value: 1,
    },
];

function init() {
    createDropDown(gluUnit, glucose_dd)

}

init()

function getExact() {
    var ain = Number(insulin.value)
    var glu = Number(glucose.value)

    var result = 0;
let ainsulinf = parseFloat((Math.log(glu) / Math.log(10)).toFixed(3))
let glus = parseFloat((Math.log(ain) / Math.log(10)).toFixed(3))

    result = 1 / (ainsulinf + glus);
  console.log(ainsulinf,   "ss");
  console.log(glus,   "as");

    console.log(result, 'result');
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "QUICKI" +
        "  " +
        result.toFixed(4) ;

    var percentile = result;
     
      div2.innerHTML = '💡 QUICKI ranges from <b>0.45</b> in healthy individuals to <b>0.30</b>, which is the value associated with diabetes. A score below <b>0.339</b> indicates insulin resistance.';
      

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener('click', showResult)

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};