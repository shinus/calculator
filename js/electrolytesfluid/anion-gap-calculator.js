var NA = getElement("Na_input_Id");
var CL = getElement("Cl_input_Id");
var HCO = getElement("HCO_input_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "NA", values: NA },
  { name: "CL", values: CL },
  { name: "HCO", values: HCO },
];

function getExact() {
    var na = Number(NA.value);
    var cl = Number(CL.value);
    var hco = Number(HCO.value);

    var result = 0;

    result = (na - (cl + hco));

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

   div1.innerHTML = "Anion gap   " + "\xa0\xa0\xa0 <b> " + result.toFixed(0) + " mEq/L </b>";

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