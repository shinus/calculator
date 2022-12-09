var bicar = getElement("Bicarbonate_input_Id");
var carbon = getElement("Carbon_input_Id");
var carbon_dd = getElement("Carbon_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "Bicarbonate", values: bicar },
  { name: "carbon", values: carbon },
  { name: "carbon", values: carbon_dd },
];

var caUnit = [
    {
        name: "mmHg",
        value: 0,
    },
    {
        name: "inHg",
        value: 1,
    },
    {
        name: "kPa",
        value: 2,
    },
    {
        name: "Torr",
        value: 3,
    },
];

function init() {
    createDropDown(caUnit, carbon_dd)
}

init()

function getExact() {
    var bicarbonate = Number(bicar.value);
    var dioxide = Number(carbon.value);

    var result = 0;

    result = 6.1 + math.log10(bicarbonate / (0.0308 * dioxide));

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    output.innerHTML = "";
    var percentile = result;

   div1.innerHTML = "Arterial blood pH   " + "\xa0\xa0\xa0 <b> " + result.toFixed(2) + " </b>";

   if(percentile >= 7) {
       div2.innerHTML = "This arterial blood pH indicates <b> alkalosis. </b>";
   } else {
       div2.innerHTML = "This arterial blood pH indicates <b> acidosis. </b>"
   }

   div3.innerHTML = "In this case, values in mEq/L are equal to those in mmol/L, and those in mmHg are equal to those in torr. If your results are in mmol/L or in mmHg, type in these values."

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  };