var glucose = getElement("glucose_input_Id")
var glucose_dd = getElement("glucose_dd_Id")
var insulin = getElement("insulin_input_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "glucose", values: glucose },
  { name: "glucoseUnit", values: glucose_dd },
  { name: "insulin", values: insulin },
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
  var aglu = Number(glucose.value)
  var insu = Number(insulin.value)

  var result = 0;

  result = ((insu * aglu) / 405);

  console.log(result);
  return math.bignumber(result)
}
function getExact2() {
  var aglu = Number(glucose.value)
  var insu = Number(insulin.value)

  var result2 = 0;

  let ainsulinf = parseFloat((Math.log(aglu) / Math.log(10)).toFixed(3))
  let glus = parseFloat((Math.log(insu) / Math.log(10)).toFixed(3))

  result2 = 1 / (ainsulinf + glus);
  console.log(ainsulinf, "ss");
  console.log(glus, "as");

 

  console.log(result2);
  return math.bignumber(result2)
}

function showResult() {
  resultPage2(queryParams);
  var result = Number(getExact());
  var result2 = Number(getExact2());

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var div4 = document.createElement("div");

  output.innerHTML = "";
  div1.innerHTML = "HOMA-IR" +
    "  " +
    result.toFixed(2);



  var percentile = result;
  var percentile2 = result2;
  if (percentile < 2) {
    div2.innerHTML = 'Your HOMA-IR index indicates that you are probably not insulin resistant.';
  }

  else {
    div2.innerHTML = 'Your HOMA-IR index indicates that you might be insulin resistant.';
  }

  div3.innerHTML = "QUICKI" + " " + result2.toFixed(2);

  if (percentile2 >= 0.45) {
    div4.innerHTML = 'Your QUICKI index indicates that you are healthy.';
  }

  else if (percentile2 < 0.45 && percentile2 > 0.30) {
    div4.innerHTML = 'Your QUICKI index indicates that you might be insulin resistant.';
  } else {
    div4.innerHTML = "Your QUICKI index indicates that you might be diabetic. Consult your general practitioner."
  }

  output.append(div1);
  output.append(div2);
  output.append(div3);
  output.append(div4);
};

calcBtn.addEventListener('click', showResult)

window.onload = function () {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
};