var age = getElement("Age_dd_Id");
var stage = getElement("Stage_dd_Id");
var site = getElement("site_dd_Id");
var ldh = getElement("LDH_dd_Id");
var stst = getElement("status_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "age", values: age },
    { name: "stage", values: stage },
    { name: "site", values: site },
    { name: "ldh", values: ldh },
    { name: "status", values: stst },
]

var countUnit = [
    { name: "<60 years", value: 0 },
    { name: ">60 years", value: 1 },
];

var timeUnit = [
    { name: "I-II", value: 0 },
    { name: "III-IV", value: 1 },
];

var nadirUnit = [
    { name: "0 or 1", value: 0 },
    { name: "> 1", value: 1 },
];

var thromboUnit = [
    { name: "Normal (≤ 280 U/L)", value: 0 },
    { name: "Elevated (> 280 U/L)", value: 1 },
];

var statUnit = [
    { name: "0-1", value: 0 },
    { name: "2-4", value: 1 },
];


function init() {
    createDropDown(countUnit, age);
    createDropDown(timeUnit, stage);
    createDropDown(nadirUnit, site);
    createDropDown(thromboUnit, ldh);
    createDropDown(statUnit, stst);
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();


function getExact() {
    var Nage = Number(getSelectedValue(age))
    var staging = Number(getSelectedValue(stage))
    var siting = Number(getSelectedValue(site))
    var ldhs = Number(getSelectedValue(ldh))
    var stat = Number(getSelectedValue(stst))

    var result = 0;

    result = Nage + staging + siting + ldhs + stat;

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
    div1.innerHTML = "Total points: " + "  " + result.toFixed(0);

    if (percentile == 0) {
        div2.innerHTML = '• Estimated 4-year progression-free survival: <b> 94% ';
        div3.innerHTML = '• </b>Overall survival: <b> 94% <br>Very good prognosis </b> (formerly <i>Low risk</i>)'
    }
    else if (percentile == 1) {
        div2.innerHTML = '• Estimated 4-year progression-free survival: <b> 80%';
        div3.innerHTML = '• </b>Overall survival: 79% <br>Good prognosis </b> (formerly <i>Low risk</i>)  ';
    }
    else if (percentile == 2) {
        div2.innerHTML = '• Estimated 4-year progression-free survival: <b> 80% ';
        div3.innerHTML = '• </b>Overall survival: 79%<br>Good prognosis </b> (formerly <i>Low-intermediate risk</i>)   ';
    }
    else if (percentile == 3) {
        div2.innerHTML = '• Estimated 4-year progression-free survival: <b>  53% ';
        div3.innerHTML = '• </b>Overall survival: 55%<br>Poor prognosis </b> (formerly <i>High-intermediate risk </i>)';
    }
    else if (percentile > 3) {
        div2.innerHTML = '• Estimated 4-year progression-free survival: <b>  53% ';
        div3.innerHTML = '• </b>Overall survival: 55%<br>Poor prognosis </b> (formerly <i>High-intermediate risk</i>)';
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
};

calcBtn.addEventListener("click", showResult);

