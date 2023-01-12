var tumor = getElement("tumor_dd_Id");
var nodes = getElement("nodes_dd_Id");
var invasion = getElement("invasion_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "tumor", values: tumor },
    { name: "nodes", values: nodes },
    { name: "invasion", values: invasion },
];

var usUnit = [
    {
        name: "I",
        value: 6
    },
    {
        name: "II",
        value: 12,
    },
    {
        name: "III",
        value: 18
    },
];

var meUnit = [
    {
        name: "Negative",
        value: 6
    },
    {
        name:"Positive",
        value: 12
    },
];

var inUnit = [
    {
        name: "None",
        value: 4
    },
    {
        name: "Present",
        value: 8
    },
];

function init() {
    createDropDown(usUnit, tumor)
    createDropDown(meUnit, nodes)
    createDropDown(inUnit, invasion)
}

init()

function getExact() {
    var a = Number(getSelectedValue(tumor));
    var b = Number(getSelectedValue(nodes));
    var c = Number(getSelectedValue(invasion));
   
    var result = 0;

    result = a + b + c;

    console.log(result);
    return result;
};

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;
    div1.innerHTML = "Breast cancer recurrence risk score " + "    " + result;

    if (percentile == 16) {
          div2.innerHTML = 'According to your score, the breast cancer local recurrence risk is <b>8.50%</b>.'
      } else if (percentile == 20) {
          div2.innerHTML = 'According to your score, the breast cancer local recurrence risk is <b>12.50%</b>.'
      } else if (percentile == 22) {
          div2.innerHTML = 'According to your score, the breast cancer local recurrence risk is <b>15.80%</b>.'
      } else if (percentile == 26) {
          div2.innerHTML = 'According to your score, the breast cancer local recurrence risk is <b>10%</b>.'
      } else if (percentile == 28) {
          div2.innerHTML = 'According to your score, the breast cancer local recurrence risk is <b>15.50%</b>.'
      } else if (percentile == 32) {
          div2.innerHTML = 'According to your score, the breast cancer local recurrence risk is <b>33%</b>.'
      } else if (percentile == 34) {
          div2.innerHTML = 'According to your score, the breast cancer local recurrence risk is <b>38.50%</b>.'
      } else if (percentile == 38) {
          div2.innerHTML = 'According to your score, the breast cancer local recurrence risk is <b>48%</b>.'
      }
    
        div3.innerHTML = '❗ <i>Disclaimer: This tool can not replace the professional advice of a health care provider.</i>';

    output.append(div1);
    output.append(div2);
    output.append(div3);

};

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};