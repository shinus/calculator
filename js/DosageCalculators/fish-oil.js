var splReq_ele = getElement("dd_splReq");
var age_ele = getElement("dd_age");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "Special req", values: splReq_ele },
  { name: "age", values: age_ele },
];

var age_VS = [
  { name: "6-24 months", value: "250-350 " },
  { name: "2-4 years", value: "350-500 " },
  { name: "4-6 years", value: "500-650 " },
  { name: "6-10 years ", value: "650-850 " },
  { name: "10+ years", value: "850-1000 " },
];

var splreq_VS = [
  { name: "select", value: "0" },
  { name: "Pregnancy", value: "1000" },
  { name: "Lactation", value: "1000" },
  { name: "Coronary heart condition", value: "3350 " },
  { name: "hypertriglyceride", value: "4000 " },
  { name: "Symptoms of depression", value: "4650 " },
  { name: "Osteoarthritis", value: "1000" },
];

function showResult() {
  resultPage2(queryParams);
  var age_val = getSelectedValue(age_ele);
  var spl_req = Number(getSelectedValue(splReq_ele));

  output.innerHTML = "";
  if (spl_req == 0) {
    output.innerHTML =
      "<b>Recommended Fish oil dosage :</b>" + " " + age_val + " " + "mg";
  } else {
    output.innerHTML =
      "<b>Recommended Fish oil dosage :</b>" + " " + spl_req + " " + "mg";
  }
}

function getFishOil() {
  var age = getSelectedValue(age_ele);

  if (age === 0) {
    return 0;
  } else if (age === 1) {
    return 1;
  } else if (age === 2) {
    return 2;
  } else if (age === 3) {
    return 3;
  } else if (age === 4) {
    return 4;
  } else if (age === 5) {
    return 5;
  }
  return 0;
}

function getSplReq() {
  var spl_req = Number(getSelectedValue(spl_req));

  if (spl_req === 0) {
    return 0;
  } else if (spl_req === 0) {
    return 1;
  } else if (spl_req === 1) {
    return 1;
  } else if (spl_req === 2) {
    return 2;
  } else if (spl_req === 3) {
    return 3;
  } else if (spl_req === 4) {
    return 4;
  } else if (spl_req === 5) {
    return 1;
  }

  return 0;
}

function init() {
  createDropDown(splreq_VS, splReq_ele);
  createDropDown(age_VS, age_ele);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}
init();
calcBtn.addEventListener("click", showResult);

