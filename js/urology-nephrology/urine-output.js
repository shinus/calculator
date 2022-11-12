var nAge = getElement("age_dd_Id");
var weight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var time = getElement("Time_input_Id");
var time_dd = getElement("Time_dd_Id");
var volume = getElement("volume_input_Id");
var volume_dd = getElement("volume_dd_Id");
var intake = getElement("intake_input_Id");
var intake_dd = getElement("intake_dd_Id");
var rate = getElement("rate_input_Id");
var rate_dd = getElement("rate_dd_Id");
var balance = getElement("balance_input_Id");
var balance_dd = getElement("balance_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "age", values: nAge },
    { name: "weight", values: weight },
    { name: "weightdd", values: weight_dd },
    { name: "time", values: time },
    { name: "timedd", values: time_dd },
    { name: "urine", values: volume },
    { name: "urinedd", values: volume_dd },
    { name: "fluid", values: intake },
    { name: "fluidUnit", values: intake_dd },
];


var ageUnit = [
    {
        name: "≥18 years",
        value: 0
    },
    {
        name: "<18 years",
        value: 1,
    },
];

var unitsForWeight = [
    { name: "kilogram (kg)", value: 0 },
    { name: "grams (g)", value: 1 },
    { name: "pounds (lb)", value: 2 },
    { name: "Stones (stone)", value: 3 },
];

var timeUnit = [
    {
        name: "hours",
        value: 0,
    },
    {
        name: "minutes",
        value: 1,
    },
    {
        name: "seconds",
        value: 2,
    },
    {
        name: "days",
        value: 3,
    },
];

var volumeUnit = [
    {
        name: "mililiters",
        value: 0,
    },
    {
        name: "centiliters",
        value: 1,
    },
    {
        name: "liters",
        value: 2,
    },
    {
        name: "cubic mililiters",
        value: 3,
    },
    {
        name: "gallons",
        value: 4,
    },
    {
        name: "fluid ounces",
        value: 5,
    },
    {
        name: "cubic inches",
        value: 6,
    },
]

var intakeUnits = [
    {
        name: "mililiters",
        value: 0,
    },
    {
        name: "centiliters",
        value: 1,
    },
    {
        name: "liters",
        value: 2,
    },
    {
        name: "cubic mililiters",
        value: 3,
    },
    {
        name: "gallons",
        value: 4,
    },
    {
        name: "fluid ounces",
        value: 5,
    },
    {
        name: "cubic inches",
        value: 6,
    },
];

var rateUnits = [
    { name: "kilogram (kg)", value: 0 },
    { name: "decagram (g)", value: 1 },
    { name: "pounds (lb)", value: 2 },
    { name: "Stones (stone)", value: 3 },
];


function init() {
    createDropDown(ageUnit, nAge);
    createDropDown(unitsForWeight, weight_dd);
    createDropDown(timeUnit, time_dd);
    createDropDown(volumeUnit, volume_dd);
    createDropDown(intakeUnits, intake_dd);
}


init();



function getExact() {
    var avol = Number(volume.value)
    var atime = Number(time.value);
    var aweight = Number(weight.value);
    var into = Number(intake.value)

    var result = 0;

    result = avol / (aweight * atime);

    var result2 = 0;

    result2 = into - avol;
    // result = (140 - age) * weight * sex / (72 * dserum)


    console.log(result2);
    return [result, result2]

};



function showResult() {
    resultPage2(queryParams);
    var choice = Number(getSelectedValue(nAge))
    var [result, result2] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "Results";
    div1.innerHTML =
        //   "<b>The actual volume may vary by ± </b> :" +
        //   " " 
        result.toFixed(2) + "ml/kg/hr";

    div3.innerHTML = result2.toFixed(2) + "cm³";

    var percentile = result;
    if (choice == 1) {
        if (percentile >= 1 && percentile < 3) {
            div2.innerHTML = '✅ Urine output is within the normal range';
        }
        if (percentile < 1) {
            div2.innerHTML = '❌ Urine output is low - a sign of <b>oligouria</b>. ';
        }
        if (percentile < 0.5) {
            div2.innerHTML = 'This result might be indicative of <b>acute kindey injury</b>! ';
        }
        if (percentile > 3) {
            div2.innerHTML = '❌ Urine output is high - a sign of <b>polyuria</b>.';
        }
    }


    //adults
    if (choice == 0) {
        if (percentile >= 0.5 && percentile < 5) {
            div2.innerHTML = '✅ Urine output is within normal range';
        } else if (percentile < 0.5) {
            div2.innerHTML = '❌ Urine output is low - a sign of <b>oligouria</b>. ';
        } if (percentile < 0.5) {
            div2.innerHTML = 'This result might be indicative of <b>acute kindey injury</b>! ';
        } else if (percentile > 5) {
            div2.innerHTML = '❌ Urine output is high - a sign of <b>polyuria</b>.';
        }
    };

    var percentile2 = result2;
    var fivePercentBodyWeight = -(weight*50);

    if (percentile2 > 0) {
        div4.innerHTML = 'Your patient\'s fluid balance is <b>positive</b>.  ';
    } else if (percentile2 < 0) {
        div4.innerHTML = 'Your patient\'s fluid balance is <b>negative</b>.  ';
        if (percentile2 < fivePercentBodyWeight) {
            div4.innerHTML = '🔺 <b>Your patient might be dehydrated!</b> Fluid loss exceeded 5% of their body weight.';
        }
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
};

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};