var gender = getElement("Sex_dd_Id")
var drank = getElement("drank_dd_Id")
var average = getElement("average_dd_Id")
var drinks = getElement("drinks_dd_Id")
var drinking = getElement("drinking_dd_Id")
var day = getElement("day_dd_Id")
var morning = getElement("morning_dd_Id")
var after = getElement("after_dd_Id")
var night = getElement("night_dd_Id")
var injured = getElement("injured_dd_Id")
var less = getElement("less_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "gender", values: gender },
    { name: "drank", values: drank },
    { name: "average", values: average },
    { name: "drinks", values: drinks },
    { name: "drinking", values: drinking },
    { name: "day", values: day },
    { name: "morning", values: morning },
    { name: "after", values: after },
    { name: "night", values: night },
    { name: "injured", values: injured },
    { name: "less", values: less },
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

var inUnit = [
    {
        name: "Never",
        value: 0
    },
    {
        name: "Yes, but not in the last year",
        value: 2
    },
    {
        name: "Yes, during the last year",
        value: 4
    },
];

function init() {
    createDropDown(gluUnit, gender)
    createDropDown(drUnit, drank)
    createDropDown(driUnit, average)
    createDropDown(onUnit, drinks)
    createDropDown(onUnit, drinking)
    createDropDown(onUnit, day)
    createDropDown(onUnit, morning)
    createDropDown(onUnit, after)
    createDropDown(onUnit, night)
    createDropDown(inUnit, injured)
    createDropDown(inUnit, less)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }

}

init()

function getExact() {

    var a = Number(getSelectedValue(drank))
    var b = Number(getSelectedValue(average))
    var c = Number(getSelectedValue(drinks))
    var d = Number(getSelectedValue(drinking))
    var e = Number(getSelectedValue(day))
    var f = Number(getSelectedValue(morning))
    var g = Number(getSelectedValue(after))
    var h = Number(getSelectedValue(night))
    var i = Number(getSelectedValue(injured))
    var j = Number(getSelectedValue(less))

    var result,result2,result3,result4 = 0;

    result = a + b + c + d + e + f + g + h + i + j;

    result2 = a + b + c;

    result3 = d + e + f;

    result4 = i + j;

    console.log(result, result2, result3, result4);
    return [result, result2, result3, result4]
}

function showResult() {
    resultPage2(queryParams);
    var [result, result2, result3, result4] = getExact();
    var gen = Number(getSelectedValue(gender))

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "Consumption score " + "  " + result2;
    div2.innerHTML = "Dependence score " + "  " + result3;
    div3.innerHTML = "Alcohol-related problems score " + "  " + result4;
    div4.innerHTML =  "Overall result " + "  " + result;

    var percentile = result;
    if((gen==0 || gen==1) && percentile==0) {
        div5.innerHTML = 'Your overall result is <b>0 points</b>. You do not have an alcohol problem.';
    } else if((gen==0 || gen==1) && percentile==1) {
        div5.innerHTML = 'Your overall result is <b>1 point</b>. You probably do not have an alcohol problem.';
    } else if((gen==0 || gen==1) && percentile>19)  {
        div5.innerHTML = 'Your overall result is <b>'+ (percentile) + ' points</b>. Your drinking level is harmful and you may be alcohol dependent. Seek medical help as soon as possible - quitting alcohol on your own may cause withdrawal symptoms.';
    } else if(gen==0 && (percentile>1 && percentile<7)) {
        div5.innerHTML = 'Your overall result is <b>'+ (percentile) + ' points</b>. You probably do not have an alcohol problem.';
    } else if(gen==1 && (result>1 && percentile<8)) {
        div5.innerHTML = 'Your overall result is <b>'+ (percentile) + ' points</b>. You probably do not have an alcohol problem.';
    } else if(gen==0 && (percentile>7 && percentile<16))  {
        div5.innerHTML = 'Your overall result is <b>'+ (percentile) + ' points</b>. You are in a group of medium risk of harming you or others because of alcohol. Consider seeking professional help.';
    }  else if(gen==1 && (percentile>8 && percentile<16)) {
        div5.innerHTML = 'Your overall result is <b>'+ (percentile) + ' points</b>. You are in a group of medium risk of harming you or others because of alcohol. Consider seeking professional help.';
    } else if(percentile>15 && percentile<20) {
        div5.innerHTML = 'Your overall result is <b>'+ (percentile) + ' points</b>. Your drinking pattern is harmful. Reach our for medical help.';
    }
    
    if(result3>0) {
        div6.innerHTML = '<b>You have scored points in the dependence section. This is a serious red flag - you may be alcohol dependent.</b>';
    }
    
   if(result4>0) {
       div7.innerHTML = '<b>You have scored points from alcohol-related problems section. That means your drinking already has harmful adverse effects.</b>';
    }
    
    div8.innerHTML = 'Check the section <a href="https://www.omnicalculator.com/health/audit-test#audit-test-score-interpretation">Audit test score interpretation</a> for a more detailed score discussion.';

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
    output.append(div7);
    output.append(div8);
};

calcBtn.addEventListener('click', showResult)

