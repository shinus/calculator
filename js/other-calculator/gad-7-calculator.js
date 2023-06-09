var nervous = getElement("nervous_dd_Id");
var not = getElement("Not_dd_Id");
var worrying = getElement("Worrying_dd_Id");
var trouble = getElement("Trouble_dd_Id");
var being = getElement("Being_dd_Id");
var becoming = getElement("Becoming_dd_Id");
var feeling = getElement("Feeling_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "nervous", values: nervous },
    { name: "not", values: not },
    { name: "trouble", values: trouble },
    { name: "worrying", values: worrying },
    { name: "being", values: being },
    { name: "becoming", values: becoming },
    { name: "feeling", values: feeling },
]

var neUnit = [
    {
        name: "select",
        value: 0
    },
    {
        name: "Not at all",
        value: 0
    },
    {
        name: "Several days",
        value: 1
    },
    {
        name: "More than half days",
        value: 2
    },
    {
        name: "Nearly every day",
        value: 3
    },
];

function init() {
    createDropDown(neUnit, nervous)
    createDropDown(neUnit, not)
    createDropDown(neUnit, worrying)
    createDropDown(neUnit, trouble)
    createDropDown(neUnit, being)
    createDropDown(neUnit, becoming)
    createDropDown(neUnit, feeling)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();


function getExact() {
    var a = Number(getSelectedValue(nervous))
    var b = Number(getSelectedValue(not))
    var c = Number(getSelectedValue(worrying))
    var d = Number(getSelectedValue(trouble))
    var e = Number(getSelectedValue(being))
    var f = Number(getSelectedValue(becoming))
    var g = Number(getSelectedValue(feeling))

    var result = 0;

    result = a + b + c + d + e + f + g;

    console.log(result);
    return result;

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = "Total GAD-7 score " + result; 
    if (percentile <= 4) {
        div2.innerHTML = 'Your overall anxiety score is <b> ' + percentile + ' Points</b>, which indicates minimal anxiety.';
    } else if (percentile >= 5 && percentile<=9) {
        div2.innerHTML = 'Your overall anxiety score is <b> ' + percentile + ' Points</b>, which indicates mild anxiety.';
    } else if (percentile >= 10 && percentile<=14) {
        div2.innerHTML = 'Your overall anxiety score is <b> ' + percentile + ' Points</b>,  which indicates moderate anxiety.';
    } else if (percentile >= 15) {
        div2.innerHTML = 'Your overall anxiety score is <b> ' + percentile  + ' Points</b>, which indicates severe anxiety.';}

  div3.innerHTML = '<i>❗ This tool should not replace the professional diagnosis of a health care provider.</i>';

    output.append(div1);
    output.append(div2);
    output.append(div3);
};

calcBtn.addEventListener("click", showResult);


