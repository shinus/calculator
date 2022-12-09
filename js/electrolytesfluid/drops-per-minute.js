var volume = getElement("Volume_input_Id");
var volume_dd = getElement("Volume_dd_Id");
var time = getElement("Time_input_Id");
var time_dd = getElement("Time_dd_Id");
var factor = getElement("factor_input_Id");
var factor_dd = getElement("factor_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "volume", values: volume },
  { name: "volumeUnit", values: volume_dd },
  { name: "time", values: time },
  { name: "timeUnit", values: time_dd },
  { name: "factor", values: factor },
  { name: "factorUnit", values: factor_dd },
];

var caUnit = [
    {
        name: "mililiters",
        value: 0,
    },
    {
        name: "centiliters",
        value: 1,
    },
    {
        name: "liters",
        value: 2,
    },
    {
        name: "cubic mililiters",
        value: 3,
    },
    {
        name: "fluid ounces",
        value: 4,
    },
];

var alUnit = [
    {
        name: "minutes",
        value: 50,
    },
    {
        name: "seconds",
        value: 60,
    },
    {
        name: "hour",
        value: 60,
    },
];

function init() {
    createDropDown(caUnit, volume_dd)
    createDropDown(alUnit, time_dd)
    createDropDown(caUnit, factor_dd)
}

init()

function getExact() {
    var vol = Number(volume.value);
    var tim = Number(time.value);
    var fact = Number(factor.value);

    var result = 0;

    result = (vol * fact) / (tim);

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

   div1.innerHTML = "Drops per minute   " + "\xa0\xa0\xa0 <b> " + result.toFixed(2) + " </b>";

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