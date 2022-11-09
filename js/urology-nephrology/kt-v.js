var prebun = getElement("PreBUN_input_Id")
var prebun_dd = getElement("PreBUN_dd_Id")
var postbun = getElement("PostBUN_input_Id")
var postbun_dd = getElement("PostBUN_dd_Id")
var dial = getElement("dialysis_input_Id")
var dial_dd = getElement("dialysis_dd_Id")
var ultra = getElement("ultrafiltrate_input_Id")
var ultra_dd = getElement("ultrafiltrate_dd_Id")
var weight = getElement("weight_input_Id")
var weight_dd = getElement("weight_dd_Id")
var calcBtn = getElement("calculate_btn")



const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "pre_bun", values: prebun },
  { name: "pre_bunUnit", values: prebun_dd },
  { name: "post_bun", values: postbun },
  { name: "post_bunUnit", values: postbun_dd },
  { name: "dialysis", values: dial },
  { name: "dialysisUnit", values: dial_dd },
  { name: "ultrafiltrate", values: ultra },
  { name: "ultrafiltrateUnit", values: ultra_dd },
  { name: "weight", values: weight },
  { name: "weightUnit", values: weight_dd },
];

var pbun = [
    {
        name: "mg/dl",
        value: 0,
    },
    {
        name: "mmol/l",
        value: 1,
    },
];

var timeUnit = [
    {
        name: "min",
        value: 0,
    },
    {
        name: "hrs",
        value: 1,
    },
];

var volUnit = [
    {
        name: "liters",
        value: 0,
    },
    {
        name: "cl",
        value: 1,
    },
    {
        name: "ml",
        value: 2,
    },
    {
        name: "cu in",
        value: 3,
    },
    {
        name: "US gal",
        value: 4,
    },
    {
        name: "UK gal",
        value: 5,
    },
];

var weUnit = [
    {
        name: "kg",
        value: 0,
    },
    {
        name: "dag",
        value: 1,
    },
    {
        name: "lb",
        value: 2,
    },
    {
        name: "stone",
        value: 3,
    },
];

function init() {
    createDropDown(pbun, prebun_dd)
    createDropDown(pbun ,postbun_dd)
    createDropDown(timeUnit ,dial_dd)
    createDropDown(volUnit ,ultra_dd)
    createDropDown(weUnit , weight_dd)
}

init();


function getExact() {
    var pre_dial = Number(prebun.value)
    var post_dial = Number(postbun.value)
    var adial = Number(dial.value)
    var aultra = Number(ultra.value)
    var aweight = Number(weight.value)

    var result = 0;

    result = ((-0.693147) * ((post_dial/pre_dial)- (0.008 * adial)) + (4 - 3.5 * (post_dial/pre_dial)) * (aultra/aweight))

    console.log(result, 'wroked');
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams);

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "Kt/V" + "   " + result.toFixed(4) ;

    div2.innerHTML = "'✅ The dialysis was <b>efficient</b> - the proccess exceeded the minimal value of Kt/V ≥ 1.2).'"


    output.append(div1);
    output.append(div2);
}

calcBtn.addEventListener('click', showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  };



