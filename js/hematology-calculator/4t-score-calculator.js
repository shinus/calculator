var platelet = getElement("fall_dd_Id");
var timing = getElement("Timing_dd_Id");
var nadir = getElement("nadir_dd_Id");
var thrombosis = getElement("Thrombosis_dd_Id");
var other = getElement("causes_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "platelet", values: platelet },
    { name: "timing", values: timing },
    { name: "nadir", values: nadir },
    { name: "thrombosis", values: thrombosis },
    { name: "other", values: other },
]

var countUnit = [
    { name: "<30%", value: 0 },
    { name: "30-50%", value: 1 },
    { name: ">50%", value: 0 },
];

var timeUnit = [
    { name: "Onset <4 days, no heparin exposure", value: 0 },
    { name: "Onset <1 days (+exposure 30-100 days)", value: 1 },
    { name: "Onset after 10 days", value: 1 },
    { name: "Not-clear onset: 5-10 days", value: 1 },
    { name: "Onset <1 days (+exposure <30 days)", value: 2 },
    { name: "Clear onset: 5-10 days", value: 2 },
];

var nadirUnit = [
    { name: "<10 × 10⁹/ L", value: 0 },
    { name: "10 - 19.9 × 10⁹/ L", value: 1 },
    { name: ">20 × 10⁹/ L", value: 2 },
];

var thromboUnit = [
    { name: "None", value: 0 },
    { name: "New thrombosis / skin necrosis", value: 2 },
    { name: "Acute systemic reaction", value: 2 },
    { name: "Progressive / recurrent thrombosis", value: 1 },
    { name: "Non-necrotising skin lesions", value: 1 },
    { name: "Suspected thrombosis", value: 1 },
];

var otherUnit = [
    { name: "Definite", value: 0 },
    { name: "Possible", value: 1 },
    { name: "None", value: 2 },
];

function init() {
    createDropDown(countUnit, platelet);
    createDropDown(timeUnit, timing);
    createDropDown(nadirUnit, nadir);
    createDropDown(thromboUnit, thrombosis);
    createDropDown(otherUnit, other);
}

init();


function getExact() {
    var plate = Number(getSelectedValue(platelet))
    var time = Number(getSelectedValue(timing))
    var nad = Number(getSelectedValue(nadir))
    var thro = Number(getSelectedValue(thrombosis))
    var oth = Number(getSelectedValue(other))

    var result = 0;

    result = plate + time + nad + thro + oth;

    console.log(result);
    return math.bignumber(result);

};


function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "4Ts score " + "  " + result.toFixed(0) + " " + " pts";

    if(percentile <=3){
        div2.innerHTML = '✅ The probability of HIT <i>Heparin-Induced Thrombocytopenia</i> <b>is low</b>(~5%).';
    } else if(percentile > 3 && percentile < 6){
        div2.innerHTML = '🔶 The probability of HIT (<i>Heparin-Induced Thrombocytopenia</i>) <b>is intermediate</b> (~14%).';
    } else if(percentile >= 6 ){
        div2.innerHTML = '🛑 The probability of HIT (<i>Heparin-Induced Thrombocytopenia</i>) <b>is high</b> (~64%).';
    }
 
    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener("click", showResult);


window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};