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
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
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
]

var coUnit = [
    {
        name: "As much as I always could",
        value: 0
    },
    {
        name: "Not quite so much now",
        value: 1
    },
    {
        name: "Definitely not so much now",
        value: 2
    },
    {
        name: "Not at all",
        value: 3
    },
];

var moUnit = [
    {
        name: "As much as I ever did",
        value: 0
    },
    {
        name: "Rather less than I used to",
        value: 1
    },
    {
        name: "Definitely less than I used to",
        value: 2
    },
    {
        name: "Hardly at all ",
        value: 3
    },
];

var brUnit = [
    {
        name: "Yes, most of the time",
        value: 3
    },
    {
        name: "Yes, some of the time",
        value: 2
    },
    {
        name: "Not very often",
        value: 1
    },
    {
        name: "No, never",
        value: 0
    },
];

var crUnit = [
    {
        name: "No, not at all",
        value: 0
    },
    {
        name: "Hardly ever",
        value: 1
    },
    {
        name: "Yes, sometimes",
        value: 2
    },
    {
        name: "Yes, very often",
        value: 3
    },
];

var colUnit = [
    {
        name: "Yes, quite a lot",
        value: 3
    },
    {
        name: "Yes, sometimes",
        value: 2
    },
    {
        name: "No, not much",
        value: 1
    },
    {
        name: "No, not at all",
        value: 0
    },
];

var abUnit = [
    {
        name: "Yes, most of the time I haven't been able to cope at all.",
        value: 3
    },
    {
        name: "Yes, sometimes I haven't been coping as well as usual",
        value: 2
    },
    {
        name: "No, most of the time I have coped quite well.",
        value: 1
    },
    {
        name: "No, I have been coping as well as ever.",
        value: 0
    },
];

var acUnit = [
    {
        name: "Yes, most of the time",
        value: 3
    },
    {
        name: "Yes, sometimes",
        value: 2
    },
    {
        name: "Not very often",
        value: 1
    },
    {
        name: "No, not at all",
        value: 0
    },
];

var adUnit = [
    {
        name: "Yes, most of the time",
        value: 3
    },
    {
        name: "Yes, quite often",
        value: 2
    },
    {
        name: "Only occasionally",
        value: 1
    },
    {
        name: "No, never",
        value: 0
    }
]

var meUnit = [
    {
        name: "Yes, quite often",
        value: 3
    },
    {
        name: "Sometimes",
        value: 2
    },
    {
        name: "Hardly ever",
        value: 1
    },
    {
        name: "Never",
        value: 0
    },
];

function init() {
    createDropDown(coUnit, a)
    createDropDown(moUnit, b)
    createDropDown(brUnit, c)
    createDropDown(crUnit, d)
    createDropDown(colUnit, e)
    createDropDown(abUnit, f)
    createDropDown(acUnit, g)
    createDropDown(acUnit, h)
    createDropDown(adUnit, i)
    createDropDown(meUnit, j)
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

    var result = 0;

    result = aa + bb + cc + dd + ee + ff + gg + hh + ii + jj;

    console.log(result);
    return math.bignumber(result);

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

    div1.innerHTML = "EPDS score " + result

    if(percentile == 0) {
        div2.innerHTML = "According to your score of 0 points, depression is not likely."
    } else if(percentile >= 1 && percentile <= 8) {
        div2.innerHTML = "According to your score of " + percentile + " points, depression is not likely."
        div3.innerHTML = "The scale also revealed a positive response regarding the thought of harming yourself. We strongly advise sharing your concerns with a mental health specialist or emergency resource for further recommendation."
    } else if(percentile >= 9 && percentile <= 11) {
        div2.innerHTML = "According to your score of " + percentile + " points you have a fairly high possibility to be suffering from postnatal depression, please consult with a mental health specialist for further assessment."
        div3.innerHTML = "The scale also revealed a positive response regarding the thought of harming yourself. We strongly advise sharing your concerns with a mental health specialist or emergency resource for further recommendation."
    } else if(percentile >= 12 && percentile <= 30) {
        div2.innerHTML = "Your score of " + percentile +  " points indicates probable depression, please consult with a mental health specialist for further assesment."
        div3.innerHTML = "The scale also revealed a positive response regarding the thought of harming yourself. We strongly advise sharing your concerns with a mental health specialist or emergency resource for further recommendation."
    }

    div4.innerHTML = "❗ This tool should not replace the professional diagnosis of a health care provider."

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