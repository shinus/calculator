var gender = getElement("Gender_dd_Id");
var a = getElement("a_dd_Id");
var b = getElement("b_dd_Id");
var c = getElement("c_dd_Id");
var d = getElement("d_dd_Id");
var e = getElement("e_dd_Id");
var f = getElement("f_dd_Id");
var g = getElement("g_dd_Id");
var h = getElement("h_dd_Id");
var i = getElement("i_dd_Id");
var j = getElement("j_dd_Id");
var k = getElement("k_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "gender", values: gender },
    { name: "a", values: a },
    { name: "b", values: b },
    { name: "c", values: c },
    { name: "d", values: d },
    { name: "e", values: e },
    { name: "f", values: f },
    { name: "g", values: g },
    { name: "h", values: h },
    { name: "i", values: i },
    { name: "j", values: j },
    { name: "k", values: k },
]

var geUnit = [
    {
        name: "Female",
        value: 1
    },
    {
        name: "Male",
        value: 2
    },
];

var neUnit = [
    {
        name: "select",
        value: 0
    },
    {
        name: "Never",
        value: 0
    },
    {
        name: "Once a month",
        value: 1
    },
    {
        name: "2–4 times per month",
        value: 2
    },
    {
        name: "2–3 times per week",
        value: 3
    },
    {
        name: "4 times a week or more",
        value: 4
    },
];

var aaUnit = [
    {
        name: "Select",
        value: 0
    },
    {
        name: "0",
        value: 0
    },
    {
        name: "1–2",
        value: 1
    },
    {
        name: "3–4",
        value: 2
    },
    {
        name: "5–6",
        value: 3
    },
    {
        name: "7 or more",
        value: 4
    },
];

var NoUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "Yes, but not over the past year",
        value: 2
    },
    {
        name: "Yes, over the past year",
        value: 4
    },
];

function init() {
    createDropDown(geUnit, gender)
    createDropDown(neUnit, a)
    createDropDown(neUnit, b)
    createDropDown(aaUnit, c)
    createDropDown(neUnit, d)
    createDropDown(neUnit, e)
    createDropDown(neUnit, f)
    createDropDown(neUnit, g)
    createDropDown(neUnit, h)
    createDropDown(neUnit, i)
    createDropDown(NoUnit, j)
    createDropDown(NoUnit, k)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();


function getExact() {

    var aa = Number(getSelectedValue(a))
    var bb = Number(getSelectedValue(b))
    var cc = Number(getSelectedValue(c))
    var dd = Number(getSelectedValue(d))
    var ee = Number(getSelectedValue(e))
    var ff = Number(getSelectedValue(f))
    var gg = Number(getSelectedValue(g))
    var hh = Number(getSelectedValue(h))
    var ii = Number(getSelectedValue(i))
    var jj = Number(getSelectedValue(j))
    var kk = Number(getSelectedValue(k))

    var result = 0;

    result = aa + bb + cc + dd + ee + ff + gg + hh + ii + jj + kk;

    console.log(result);
    return result;

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());
    var genderss = Number(getSelectedValue(gender))

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = "Results " + result;

    if ((genderss == 1 || genderss == 2) && percentile == 0) {
        div2.innerHTML = 'Your overall result is <b>0 points</b>. You do not have a drug-related problem.';
    } else if ((genderss == 1 || genderss == 2) && percentile == 1) {
        div2.innerHTML = 'Your overall result is <b>1 point</b>. You probably do not have a drug-related problem.';
    } else if ((genderss == 1 || genderss == 2) && percentile >= 25) {
        div2.innerHTML = 'Your overall result is <b>' + (percentile) + ' points</b>. Your drug consumption level is harmful. It is highly probable that you are dependent on one or more drugs. Consider looking into treatments of addiction that have been proven successful by clicking <a href="https://www.webmd.com/connect-to-care/addiction-treatment-recovery/successful-treatments-for-addiction">here</a>.</small>';
    } else if (genderss == 1 && (percentile >= 2 && percentile < 25)) {
        div2.innerHTML = 'Your overall result is <b>' + (percentile) + ' points</b>. You may have a drug-related problem. It is possible that you either engage in harmful consumption of drugs or have a dependence. Learn more about addiction by clicking <a href="https://www.helpguide.org/home-pages/addictions.htm">here</a>.</small>';
    } else if (genderss == 2 && (percentile > 6 && percentile < 25)) {
        div2.innerHTML = 'Your overall result is <b>' + (percentile) + ' points</b>. You may have a drug-related problem. It is possible that you either engage in harmful consumption of drugs or have a drug dependence. Learn more about addiction by clicking <a href="https://www.helpguide.org/home-pages/addictions.htm">here</a>.</small>';
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
};

calcBtn.addEventListener("click", showResult);


