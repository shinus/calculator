var aa = getElement("a_dd_Id")
var bb = getElement("b_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "cigeratte", values: aa },
    { name: "smoke", values: bb },
];

var gluUnit = [
    {
        name: "Within 5 min",
        value: 3,
    },
    {
        name: "6-30 min",
        value: 2,
    },
    {
        name: "31-60min",
        value: 1
    },
    {
        name: "After 60 min",
        value: 0
    },
];

var soUnit = [
    {
        name: "10 or fewer",
        value: 0
    },
    {
        name: "11-20",
        value: 1
    },
    {
        name: "21-30",
        value: 2
    },
    {
        name: "31 or more",
        value: 3
    },
];

function init() {
    createDropDown(gluUnit, aa)
    createDropDown(soUnit, bb)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

function getExact() {

    var a = Number(getSelectedValue(aa))
    var b = Number(getSelectedValue(bb))

    var result = 0;

    result = a + b;

    console.log(result);
    return result
}

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "Heaviness of Smoking Index (HSI) " + result;
    var percentile = result;
    if (percentile <= 2) {
        div2.innerHTML = 'Results interpretation: <b>low addiction</b>.';
    } else if (percentile > 2 && percentile < 5) {
        div2.innerHTML = 'Results interpretation: <b>moderate addiction</b>.';
    }
    else if (percentile >= 5) {
        div2.innerHTML = 'Results interpretation: <b>high addiction</b>.';
    }

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener('click', showResult)

