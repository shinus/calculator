var aa = getElement("I_dd_Id")
var bb = getElement("many?_input_Id")
var cc = getElement("also_dd_Id")
var dd = getElement("How_input_Id")
var ee = getElement("had_dd_Id")
var ff = getElement("many_input_Id")
var gg = getElement("am_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "aa", values: aa },
    { name: "bb", values: bb },
    { name: "cc", values: cc },
    { name: "dd", values: dd },
    { name: "ee", values: ee },
    { name: "ff", values: ff },
    { name: "gg", values: gg },
];

var gluUnit = [
    {
        name: "Mugs of filter coffee",
        value: 140,
    },
    {
        name: "Cups of tea",
        value: 50,
    },
    {
        name: "mugs of instant coffe",
        value: 100
    },
    {
        name: "Cans of cola",
        value: 40
    },
    {
        name: "Energy drinks",
        value: 80
    },
    {
        name: "Shots of espresso",
        value: 45
    },
    {
        name: "Cups of green tea",
        value: 40
    },
];

var anUnit = [
    {
        name: "an adult",
        value: 400
    },
    {
        name: "Pregnant",
        value: 200
    },
    {
        name: "a teenager(13-18)",
        value: 100
    },
    {
        name: "a child(0-12)",
        value:0
    },
];

function init() {
    createDropDown(gluUnit, aa)
    createDropDown(gluUnit, cc)
    createDropDown(gluUnit, ee)
    createDropDown(anUnit, gg)

}

init()

function getExact() {

    var a = Number(getSelectedValue(aa))
    var b = Number(bb.value)
    var c = Number(getSelectedValue(cc))
    var d = Number(dd.value)
    var e = Number(getSelectedValue(ee))
    var f = Number(ff.value)
    var g = Number(getSelectedValue(gg))

    var result, result2 = 0;

    result = (a * b) + (c * d) + (e * f);

    result2 = g;

    console.log(result, result2);
    return [result, result2]
}

function showResult() {
    resultPage2(queryParams);
    var [result,result2] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "Your caffeine intake " + "  " + result + " mg";
    div2.innerHTML = 'Max recommended dose  ' + result2 + ' mg';

    var percentile = result;

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener('click', showResult)

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};