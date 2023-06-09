var smoke = getElement("smoke_dd_Id")
var aa = getElement("a_dd_Id")
var bb = getElement("b_dd_Id")
var cc = getElement("c_dd_Id")
var dd = getElement("d_dd_Id")
var ee = getElement("e_dd_Id")
var ff = getElement("f_dd_Id")
var row2 = getElement("calculator-row-2")
var row3 = getElement("calculator-row-3")
var row4 = getElement("calculator-row-4")
var row5 = getElement("calculator-row-5")
var row6 = getElement("calculator-row-6")
var row7 = getElement("calculator-row-7")
var row8 = getElement("calculator-row-8")
var row9 = getElement("calculator-row-9")
var row10 = getElement("calculator-row-10")
var row11 = getElement("calculator-row-11")
var row12 = getElement("calculator-row-12")
var row13 = getElement("calculator-row-13")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "smoke", values: smoke },
    { name: "cinema", values: aa },
    { name: "which", values: bb },
    { name: "how", values: cc },
    { name: "frequently", values: dd },
    { name: "bed", values: ee },
    { name: "ill", values: ff },
];

var ssUnit = [
    {
        name: "Yes",
        value: 1
    },
    {
        name: "No",
        value: 0
    }
]

var gluUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "Yes",
        value: 1,
    },
];

var soUnit = [
    {
        name: "Within 5 min",
        value: 3
    },
    {
        name: "6-30 min",
        value: 2
    },
    {
        name: "31-60 min",
        value: 1
    },
    {
        name: "After 60 min",
        value: 0
    },
];

var allUnit = [
    {
        name: "All others",
        value: 0
    },
    {
        name: "The first one in the morning",
        value: 1
    },
];

var ciUnit = [
    {
        name: "≤10",
        value: 0
    },
    {
        name: "11-20",
        value: 1
    },
    {
        name: "21-30",
        value: 2
    },
    {
        name: "≥31",
        value: 3
    },
];

function init() {
    createDropDown(ssUnit, smoke)
    createDropDown(soUnit, aa)
    createDropDown(gluUnit, bb)
    createDropDown(allUnit, cc)
    createDropDown(ciUnit, dd)
    createDropDown(gluUnit, ee)
    createDropDown(gluUnit, ff)
    row2.style.display = 'block'
    row3.style.display = 'block'
    row4.style.display = 'block'
    row5.style.display = 'block'
    row6.style.display = 'block'
    row7.style.display = 'block'
    row8.style.display = 'block'
    row9.style.display = 'block'
    row10.style.display = 'block'
    row11.style.display = 'block'
    row12.style.display = 'block'
    row13.style.display = 'block'
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

smoke.addEventListener('change', (e) => {
    console.log(e.target.value, 'adasd');
    if (e.target.value == 0) {
        row2.style.display = 'none'
        row3.style.display = 'none'
        row4.style.display = 'none'
        row5.style.display = 'none'
        row6.style.display = 'none'
        row7.style.display = 'none'
        row8.style.display = 'none'
        row9.style.display = 'none'
        row10.style.display = 'none'
        row11.style.display = 'none'
        row12.style.display = 'none'
        row13.style.display = 'none'
    }
    if (e.target.value == 1) {
        row2.style.display = 'block'
        row3.style.display = 'block'
        row4.style.display = 'block'
        row5.style.display = 'block'
        row6.style.display = 'block'
        row7.style.display = 'block'
        row8.style.display = 'block'
        row9.style.display = 'block'
        row10.style.display = 'block'
        row11.style.display = 'block'
        row12.style.display = 'block'
        row13.style.display = 'block'
    }
})


function getExact() {

    var a = Number(getSelectedValue(aa))
    var b = Number(getSelectedValue(bb))
    var c = Number(getSelectedValue(cc))
    var d = Number(getSelectedValue(dd))
    var e = Number(getSelectedValue(ee))
    var f = Number(getSelectedValue(ff))

    var result = 0;

    result = a + b + c + d + e + f;

    console.log(result);
    return result
}

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());
    var abc = Number(getSelectedValue(smoke))

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result

    div1.innerHTML = "Total score " + result;
    if (percentile < 3 && abc == 1) {
        div2.innerHTML = 'You likely have a <b>very low</b> level of dependence on nicotine.';
    } else if (percentile >= 3 && percentile < 5 && abc == 1) {
        div2.innerHTML = 'You likely have a <b>low level</b> of dependence on nicotine.';
    } else if (percentile == 5 && abc == 1) {
        div2.innerHTML = 'You likely have a <b>medium level</b> of dependence on nicotine.';
    } else if (percentile >= 6 && percentile < 8 && abc == 1) {
        div2.innerHTML = 'You likely have a <b>high level</b> of dependence on nicotine.';
    } else if (percentile >= 8 && abc == 1) {
        div2.innerHTML = 'You likely have a <b>very high level</b> of dependence on nicotine.';
    } else if (abc == 0) {
        div1.innerHTML = ""
        div2.innerHTML = 'Looks like you are not nicotine dependent 🙂';
    }

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener('click', showResult)

