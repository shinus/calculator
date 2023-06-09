var all = getElement("all_dd_id");
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
    { name: "all", values: all },
    { name: "not", values: not },
    { name: "trouble", values: trouble },
    { name: "worrying", values: worrying },
    { name: "being", values: being },
    { name: "becoming", values: becoming },
    { name: "feeling", values: feeling },
]

var neUnit = [
    {
        name: "All words repeated",
        value: 3
    },
    {
        name: "Two words repeated",
        value: 2
    },
    {
        name: "One word repeated",
        value: 1
    },
    {
        name: "No word repeated",
        value: 0
    },
];

var noUniit = [
    {
        name: "Correct",
        value: 3
    },
    {
        name: "Missed by 1 year",
        value: 2
    },
    {
        name: "Missed by 2-5 years",
        value: 1
    },
    {
        name: "Missed by > 5 year or n answer",
        value: 0
    },
];

var woUnit = [
    {
        name: "Accurate within 5 days",
        value: 2
    },
    {
        name: "Missed by 6 days to one month",
        value: 1
    },
    {
        name: "Missed by > 1 month or no answer",
        value: 0
    },
];

var trUnit = [
    {
        name: "Correct",
        value: 1
    },
    {
        name: "Incorrect, or no answer",
        value: 0
    },
];

var beUnit = [
    {
        name: "Yes, no cue required",
        value: 2
    },
    {
        name: "Yes, after cueing “something to wear”",
        value: 1
    },
    {
        name: "No, could not recall",
        value: 0
    },
];

var bcUnit = [
    {
        name: "Yes, no cue required",
        value: 2
    },
    {
        name: "Yes, after cueing “color”",
        value: 1
    },
    {
        name: "No, could not recall",
        value: 0
    },
];

var feUnit = [
    {
        name: "Yes, no cue required",
        value: 2
    },
    {
        name: "Yes, after cueing “a piece of furniture”",
        value: 1
    },
    {
        name: "No, could not recall",
        value: 0
    },
];

function init() {
    createDropDown(neUnit, all)
    createDropDown(noUniit, not)
    createDropDown(woUnit, worrying)
    createDropDown(trUnit, trouble)
    createDropDown(beUnit, being)
    createDropDown(bcUnit, becoming)
    createDropDown(feUnit, feeling)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();


function getExact() {
    var a = Number(getSelectedValue(all))
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

    div1.innerHTML = "BIMS score " + result; 
    if (percentile <= 6) {
        div2.innerHTML = 'According to the score of <b>' +  percentile + ' points, </b>the patient has severe cognitive impact.';
    } else if (percentile == 7) {
        div2.innerHTML = ' ';
    } else if (percentile >= 8 && percentile <=12) {
        div2.innerHTML = 'According to the score of <b> '+ percentile + ' points, </b> the patient has moderate impariment.';
    } else if (percentile >= 13) {
        div2.innerHTML = 'According to the score of <b> ' + percentile + ' points, </b> the patient has an intact cognitive response.';
    }

  div3.innerHTML = '❗ Note the BIMS cannot be used to diagnose dementia. The tool only assesses various aspects of cognition in the elderly population. To learn more about the scale, click here.';

    output.append(div1);
    output.append(div2);
    output.append(div3);
};

calcBtn.addEventListener("click", showResult);


window.onload = function () {
  
};  