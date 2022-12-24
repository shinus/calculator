var dilatuon = getElement("Dilation_input_Id");
var dilation_dd = getElement("Dilation_dd_Id");
var efface = getElement("Effacement_dd_Id");
var consis = getElement("Consistency_dd_Id");
var station = getElement("station_dd_Id");
var position = getElement("position_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "Dilation", values: dilatuon },
    { name: "DilationUnit", values: dilation_dd },
    { name: "Effacement", values: efface },
    { name: "Consistency", values: consis },
    { name: "station", values: station },
    { name: "position", values: position },
];

var ddUnit = [
    {
        name: "cm",
        value: 0
    },
    {
        name: "in",
        value: 1
    },
];

var efUnit = [
    {
        name: "0-30%",
        value: 0
    },
    {
        name: "40-50%",
        value: 1
    },
    {
        name: "60-70%",
        value: 2
    },
    {
        name: "> 80%",
        value: 3
    },
];

var coUnit = [
    {
        name: "Firm",
        value: 0
    },
    {
        name: "Moderately firm",
        value: 1
    },
    {
        name: "Soft",
        value: 2
    },
];

var laUnit = [
    {
        name: "-1 or 0",
        value: 2
    },
    {
        name: "+1 or +2",
        value: 3
    },
    {
        name: "-2",
        value: 1
    },
    {
        name: "-3",
        value: 0
    },
];

var poUnit = [
    {
        name: "Posterior",
        value: 0
    },
    {
        name: "Mid-position",
        value: 1
    },
    {
        name: "Anterior position",
        value: 2
    },
];

function init() {
    createDropDown(ddUnit, dilation_dd);
    createDropDown(efUnit, efface);
    createDropDown(coUnit, consis);
    createDropDown(laUnit, station);
    createDropDown(poUnit, position);
}

init();

function dd() {
    var di = Number(dilatuon.value)

    if (di == 2) {
        di = 1
    } else if (di == 3 && di == 4) {
        di = 2
    } else if (di >= 5) {
        di = 3
    }

    return di
}

function validateAge() {
    var dil = Number(dilatuon.value)
    var msg;
    var parentId = "calculator-row-1";
    var elementName = "bunError";
   
    if (dil > 10) {
      msg =
        "Normally, the maximum dilation of cervix is 10 cm.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }

function getExact() {
    var a = Number(dd());
    var b = Number(getSelectedValue(efface));
    var c = Number(getSelectedValue(consis));
    var d = Number(getSelectedValue(station));
    var e = Number(getSelectedValue(position));

    var result = a + b + c + d + e;

    console.log(result);
    return result;
};

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;
    div1.innerHTML = "Bishop score" + "    " + result.toFixed(0) ;

    if (percentile <= 6) {
        div2.innerHTML = 'You are not expected to go into labor in the upcoming weeks. If induction is needed, consider adding a cervical ripening agents.'; 
       } else if (percentile >=8) {
         div2.innerHTML = 'You are expected to go into labor within a few days. If induction is needed, it\'s likely to be successful.';
       }

    output.append(div1);
    output.append(div2);

};

dilatuon.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};