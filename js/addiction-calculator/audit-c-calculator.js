var gender = getElement("Sex_dd_Id")
var alcohol = getElement("alcohol_dd_Id")
var drinking = getElement("drinking_dd_Id")
var once = getElement("once_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "gender", values: gender },
    { name: "alcohon", values: alcohol },
    { name: "drinking", values: drinking },
    { name: "once", values: once },
];

var gluUnit = [
    {
        name: "Female",
        value: 0,
    },
    {
        name: "Male",
        value: 1,
    },
];

var drUnit = [
    {
        name: "Never",
        value: 0
    },
    {
        name: "Monthly or less",
        value: 1
    },
    {
        name: "2-4 times a month",
        value: 2
    },
    {
        name: "2-3 times a week",
        value: 3
    },
    {
        name: "4 or more times a week",
        value: 4
    }
];

var driUnit = [
    {
        name: "None",
        value: 0
    },
    {
        name: "1-2 drinks",
        value: 0
    },
    {
        name: "3-4 drinks",
        value: 1
    },
    {
        name: "5-6 drinks",
        value: 2
    },
    {
        name: "7-9 drinks",
        value: 3
    },
    {
        name: "10 or more drinks",
        value: 4
    },
];

var onUnit = [
    {
        name: "Never",
        value: 0
    },
    {
        name: "Less than month",
        value: 1
    },
    {
        name: "Monthly",
        value: 2
    },
    {
        name: "Weekly",
        value: 3
    },
    {
        name: "Daily or almost daily",
        value: 4
    },
];


function init() {
    createDropDown(gluUnit, gender)
    createDropDown(drUnit, alcohol)
    createDropDown(driUnit, drinking)
    createDropDown(onUnit, once)

}

init()

function getExact() {

    var al = Number(getSelectedValue(alcohol))
    var dr = Number(getSelectedValue(drinking))
    var on = Number(getSelectedValue(once))

    var result = 0;

    result = al + dr + on;

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());
    var gen = Number(getSelectedValue(gender))

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "Result " + "  " + result;

    var percentile = result;
    if (gen == 0 && percentile == 0) {
        div2.innerHTML = 'Your result is <b>' + (percentile) + ' points</b>. You consume a normal amount of alcohol - <a href="https://www.omnicalculator.com/all/audit-c#audit-c-score-interpretation">there is nothing to worry about!</a> ';
    } else if (gen == 0 && percentile == 1) {
        div2.innerHTML = 'Your result is <b>' + (percentile) + ' point</b>. You consume a normal amount of alcohol - <a href="https://www.omnicalculator.com/all/audit-c#audit-c-score-interpretation">there is nothing to worry about!</a> ';
    } else if (gen == 0 && percentile == 2) {
        div2.innerHTML = 'Your result is <b>' + (percentile) + ' points</b>. You consume a normal amount of alcohol - <a href="https://www.omnicalculator.com/all/audit-c#audit-c-score-interpretation">there is nothing to worry about!</a> ';
    } else if (gen == 0 && percentile > 2 && percentile < 6) {
        div2.innerHTML = 'Your result is <b>' + (percentile) + ' points</b>. You are in the moderate risk category. <a href="https://www.omnicalculator.com/all/audit-c#audit-c-score-interpretation">Please keep an eye on your drinking.</a>';
    } else if (gen == 0 && percentile > 5 && percentile < 8) {
        div2.innerHTML = 'Your result is <b>' + (percentile) + ' points</b>. You are in the high risk category - <a href="https://www.omnicalculator.com/all/audit-c#audit-c-score-interpretation">consider seeking professional advice.</a>';
    } else if (gen === 0 && result > 8) {
        div2.innerHTML = 'Your result is <b>' + (result) + ' points</b>. You are in the severe risk category. <a href="https://www.omnicalculator.com/all/audit-c#audit-c-score-interpretation">Seeking professional help is strongly recommended.</a>';
    } else if (gen == 1 && result == 0) {
        div2.innerHTML = 'Your result is <b>' + (percentile) + ' points</b>. You consume a normal amount of alcohol - <a href="https://www.omnicalculator.com/all/audit-c#audit-c-score-interpretation">there is nothing to worry about!</a>';
    } else if (gen == 1 && percentile == 1) {
        div2.innerHTML = 'Your result is <b>' + (percentile) + ' point</b>. You consume a normal amount of alcohol - <a href="https://www.omnicalculator.com/all/audit-c#audit-c-score-interpretation">there is nothing to worry about!</a>';
    } else if (gen == 1 && percentile > 1 && percentile < 4) {
        div2.innerHTML = 'Your result is <b>' + (percentile) + ' points</b>. You consume a normal amount of alcohol - <a href="https://www.omnicalculator.com/all/audit-c#audit-c-score-interpretation">there is nothing to worry about!</a>';
    } else if (gen == 1 && percentile > 3 && percentile < 6) {
        div2.innerHTML = 'Your result is <b>' + (percentile) + ' points</b>. You are in the moderate risk category. <a href="https://www.omnicalculator.com/all/audit-c#audit-c-score-interpretation">Please keep an eye on your drinking.</a>';
    } else if (gen == 1 && percentile > 5 && percentile < 8) {
        div2.innerHTML = 'Your result is <b>' + (percentile) + ' points</b>. You are in the high risk category - <a href="https://www.omnicalculator.com/all/audit-c#audit-c-score-interpretation">consider seeking professional advice.</a>';
    } else {
        div2.innerHTML = 'Your result is <b>' + (percentile) + ' points</b>. You are in the severe risk category. <a href="https://www.omnicalculator.com/all/audit-c#audit-c-score-interpretation">Seeking professional help is strongly recommended.</a>';
    }

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener('click', showResult)

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};