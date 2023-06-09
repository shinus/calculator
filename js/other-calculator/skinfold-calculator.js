var gender = getElement("Gender_dd_Id");
var age = getElement("Age_dd_Id");
var measurment = getElement("measurment_input_Id");
var measurment_dd = getElement("measurment_dd_Id");
var subscapular = getElement("subscapular_input_Id");
var subscapular_dd = getElement("subscapular_dd_Id");
var supra = getElement("Suprailiac_input_Id");
var supra_dd = getElement("Suprailiac_dd_Id");
var tricep = getElement("Tricep_input_Id");
var ticep_dd = getElement("Tricep_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "gender", values: gender },
    { name: "age", values: age },
    { name: "bicep", values: measurment },
    { name: "bicepUnit", values: measurment_dd },
    { name: "subscapular", values: subscapular },
    { name: "subscapularUnit", values: subscapular_dd },
    { name: "suprailiac", values: supra },
    { name: "suprailiacUnit", values: supra_dd },
    { name: "tricep", values: tricep },
    { name: "tricepUnit", values: ticep_dd },
]

var gdUnit = [
    {
        name: "Male",
        value: 0
    },
    {
        name: "Female",
        value: 1
    },
];

var agUnit = [
    {
        name: "<17",
        value: 0
    },
    {
        name: "17-19",
        value: 1
    },
    {
        name: "20-29",
        value: 2
    },
    {
        name: "30-39",
        value: 3
    },
    {
        name: "40-49",
        value: 4
    },
    {
        name: ">50",
        value: 5
    },
];

var meUnit = [
    {
        name: "mm",
        value: 0
    },
    {
        name: "cm",
        value: 1
    },
    {
        name: "dm",
        value: 2
    },
    {
        name: "in",
        value: 3
    },
];

function init() {
    createDropDown(gdUnit, gender)
    createDropDown(agUnit, age)
    createDropDown(meUnit, measurment_dd)
    createDropDown(meUnit, subscapular_dd)
    createDropDown(meUnit, supra_dd)
    createDropDown(meUnit, ticep_dd)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();


function getExact() {
    var gen = Number(getSelectedValue(gender))
    var ages = Number(getSelectedValue(age))
    var bicep = Number(measurment.value)
    var sub = Number(subscapular.value)
    var suprailiac = Number(supra.value)
    var tri = Number(tricep.value) 

    var result, abb, L,acc = 0;

    acc = bicep + sub + suprailiac + tri;

    L = Math.log10(acc)


    if(gen == 0 && ages == 0) {
        abb = 1.1533 - (0.0643 * L)
    } else if(gen == 0 && ages == 1) {
        abb = 1.1620 - (0.0630 * L)
    } else if(gen == 0 && ages == 2) {
        abb =  1.1631 - (0.0632 * L)
    } else if(gen == 0 && ages == 3) {
        abb = 1.1422 - (0.0544 * L)
    } else if(gen == 0 && ages == 4) {
        abb = 1.1620 - (0.0700 * L)
    } else if(gen == 0 && ages == 5) {
        abb = 1.1715 - (0.0779 * L)
    } else if(gen == 1 && ages == 0) {
        abb = 1.1369 - (0.0598 * L) 
    } else if(gen == 1 && ages == 1) {
        abb = 1.1549 - (0.0678 * L)
    } else if(gen == 1 && ages == 2) {
        abb = 1.1599 - (0.0717 * L)
    } else if(gen == 1 && ages == 3) {
        abb = 1.1423 - (0.0632 * L)
    } else if(gen == 1 && ages == 4) {
        abb = 1.1333 - (0.0612 * L)
    } else if(gen == 1 && ages == 5) {
        abb =  1.1339 - (0.0645 * L)
    } 

    result = (495 / abb) - 450

    console.log(result);
    return result;

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = "Body fat percentage (%)  " + result.toFixed(2) + " %";
 
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
};

calcBtn.addEventListener("click", showResult);
