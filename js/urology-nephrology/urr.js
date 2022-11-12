var pre = getElement("level_input_Id")
var dd_pre = getElement("level_dd_Id");
var post = getElement("Postlevel_input_Id");
var dd_post = getElement("Postlevel_dd_Id");

var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "pre-bun", values: pre },
  { name: "preUnit", values: dd_pre },
  { name: "post-bun", values: post },
  { name: "postUnit", values: dd_post },
];


var mili = [
  { name: "miligrams per decliter mg/dl", value: 1 },
  { name: "micromiles per liter mol/l", value: 88.42 },
];


function init() {
  createDropDown(mili, dd_pre);
  createDropDown(mili, dd_post);

}

init();



function getExact() {
  var apre = Number(pre.value);
  var apost = Number(post.value);



  var result = 0;


  result = ([(apre - apost) / apre] * 100);

  console.log(result);
  return math.bignumber(result);

};

function validateAge() {
  var poss = Number(post.value)
  var pres = Number(pre.value);
  var msg;
  var parentId = "calculator-row-2";
  var elementName = "bunError";
 
  if (poss > pres ) {
    msg =
      "Pre-dialysis level must be greater than or equal to the post-dialysis level (pre ≥ post).";
    showError(parentId, elementName, msg);
  } else {
    removeError(elementName);
  }
}

function showResult() {
  resultPage2(queryParams)
  var result = Number(getExact());

  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");

  output.innerHTML = "";
  div1.innerHTML = "Urea reduction ratio (URR)" + "  " + result.toFixed(2) + "%";

  var percentile = result;

  if (percentile >= 65) {
    div2.innerHTML = '✅ The dialysis was <b>adequate</b> (URR is ≥65%).';
  }
  else if (percentile < 65) {
    div2.innerHTML = '❌ The dialysis was <b>not adequate</b> (URR is <65%).';
  }


  output.append(div1);
  output.append(div2);
  output.append(div3);
};

post.addEventListener('input', validateAge);
calcBtn.addEventListener("click", showResult);

window.onload = function () {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
};

