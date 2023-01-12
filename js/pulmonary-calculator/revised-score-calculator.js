var years = getElement("years_dd_Id");
var month = getElement("month_dd_Id");
var condition = getElement("condition_dd_Id");
var hist = getElement("History_dd_Id");
var heart = getElement("Heart_dd_Id");
var pain = getElement("pain_dd_Id");
var palp = getElement("palpation_dd_Id");
var hema = getElement("Hematoptysis?_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "years", values: years },
    { name: "month", values: month },
    { name: "condition", values: condition },
    { name: "history", values: hist },
    { name: "heart", values: heart },
    { name: "pain", values: pain },
    { name: "palp", values: palp },
    { name: "hematoptysis", values: hema },
];

var yUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 1,
    },
];

var moUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 2,
    },
];

var hisUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 3,
    },
];

var ratUnit = [
    {
        name: "<75/min",
        value: 0,
    },
    {
        name: "75-94/min",
        value: 3,
    },
    {
        name: ">95/min",
        value: 5,
    },
];

var palUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 4,
    },
];

function init() {
    createDropDown(yUnit, years);
    createDropDown(moUnit, month);
    createDropDown(moUnit, condition);
    createDropDown(hisUnit, hist);
    createDropDown(ratUnit, heart);
    createDropDown(hisUnit, pain);
    createDropDown(palUnit, palp);
    createDropDown(moUnit, hema);
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

function getExact() {
    var year = Number(getSelectedValue(years))
    var moth = Number(getSelectedValue(month))
    var cond = Number(getSelectedValue(condition))
    var hi = Number(getSelectedValue(hist))
    var rate = Number(getSelectedValue(heart))
    var painss = Number(getSelectedValue(pain))
    var pal = Number(getSelectedValue(palp))
    var hematop = Number(getSelectedValue(hema))

    var result = 0;

    result = year + moth + cond + hi + rate + painss + pal + hematop;

    console.log(result);
    return result
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;

    div1.innerHTML = "Revised Geneva Score   " + " <b> " + result.toFixed(3) + "</b> ";

    div2.innerHTML = '<u><b>2-level scoring system:</u></b>';
    if (percentile <= 5) {
        div3.innerHTML = '<b>Pulmonary embolism unlikely.</b>';
        div4.innerHTML = 'The incidence of PE in this group can be expected to be around <b>16%</b>. <br>Check the D-dimer level.';
    } else {
        div3.innerHTML = '<b>Pulmonary embolism is probable.</b>';
        div4.innerHTML = 'The incidence of PE in this group can be expected to be around <b>38%</b>. <br>CT is highly recommended.';
    }
    div5.innerHTML = '<u><b>3-level scoring system:</u></b>';
    if (percentile <= 3) {
        div6.innerHTML = '<b>The clinical probability of pulmonary embolism is low.</b>';
        div7.innerHTML = 'The incidence of PE in this group can be expected to be around <b>8-10%</b>. <br>Check the D-dimer level.';
    } else if (percentile >= 4 & percentile <= 10) {
        div6.innerHTML = '<b>The clinical probability of pulmonary embolism is intermediate.</b>';
        div7.innerHTML = 'The incidence of PE in this group can be expected to be around <b>22-28%</b>.<br> Check the D-dimer level.';
    } else {
        div6.innerHTML = '<b>The clinical probability of pulmonary embolism is high.</b>';
        div7.innerHTML = 'The incidence of PE in this group can be expected to be around <b>48-74%</b>. <br>CT is highly recommended.';
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
    output.append(div7);
}

calcBtn.addEventListener("click", showResult);
