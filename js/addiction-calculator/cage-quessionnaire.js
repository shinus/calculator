var drinking = getElement("drinking_dd_Id")
var criti = getElement("criticising_dd_Id")
var guilty = getElement("Guilty_dd_Id")
var morno = getElement("morning_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "drinking", values: drinking },
    { name: "criticising", values: criti },
    { name: "guilty", values: guilty },
    { name: "morning", values: morno },
];

var gluUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 1,
    },
];

function init() {
    createDropDown(gluUnit, drinking)
    createDropDown(gluUnit, criti)
    createDropDown(gluUnit, guilty)
    createDropDown(gluUnit, morno)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }

}

init()

function getExact() {

    var a = Number(getSelectedValue(drinking))
    var b = Number(getSelectedValue(criti))
    var c = Number(getSelectedValue(guilty))
    var d = Number(getSelectedValue(morno))

    var result = 0;

    result = a + b + c + d;

    console.log(result);
    return result
}

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    if (result == 0) {
        div1.innerHTML = 'Your result is <b>0 points</b>. You probably do not have an alcohol problem.';
    } else if (result == 1) {
        div1.innerHTML = 'Your result is <b>1 point</b>. This is a red flag - you may be developing an alcohol problem.';
    } else {
        div1.innerHTML = 'Your result is <b>' + (result) + ' points</b>. The screening is positive - you may have an alcohol problem. Check out the <a href="https://www.omnicalculator.com/all/cage-questionnaire#alcohol-cage-questionnaire-test-results-interpretation">result section</a> for more information.';
    }

    var percentile = result;

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener('click', showResult)

