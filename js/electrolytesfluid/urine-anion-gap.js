var NA = getElement("Na_input_Id");
var K = getElement("K_input_Id");
var CL = getElement("Cl_input_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "NA", values: NA },
  { name: "K", values: K },
  { name: "CL", values: CL },
];

function getExact() {
    var na = Number(NA.value);
    var k = Number(K.value);
    var cl = Number(CL.value);

    var result = 0;

    result = na + k - cl;

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

   div1.innerHTML = "Urine anion gap   " + "\xa0\xa0\xa0 <b> " + result.toFixed(2) + " mEq/L </b>";
   div2.innerHTML = 'In this case, the values in mEq/L are equal to those in mmol/L. If your results are in mmol/L, type in these values.'

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