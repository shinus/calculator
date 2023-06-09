var compo = getElement("Composition_dd_Id");
var echo = getElement("Echogenicity_dd_Id");
var shape = getElement("Shape_dd_Id");
var margin = getElement("Margin_dd_Id");
var art = getElement("artifacts_dd_Id");
var macro = getElement("Macrocalcifications_dd_Id");
var calc = getElement("calcifications_dd_Id");
var foci = getElement("foci_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "composition", values: compo },
    { name: "echogenicity", values: echo },
    { name: "shape", values: shape },
    { name: "margin", values: margin },
    { name: "artifacts", values: art },
    { name: "macrocalcifications", values: macro },
    { name: "calcifications", values: calc },
    { name: "foci", values: foci },
]

var coUnit = [
    {
        name: "Cystic/Spongiform",
        value: 0
    },
    {
        name: "Mixed cystic and solid",
        value: 1
    },
    {
        name: "Solid",
        value: 2
    },
];

var moUnit = [
    {
        name: "Anechoic",
        value: 0
    },
    {
        name: "Hyper- or isoechoic",
        value: 1
    },
    {
        name: "Hypoechoic",
        value: 2
    },
    {
        name: "Very hypoechoic",
        value: 3
    },
];

var brUnit = [
    {
        name: "Wider than tal",
        value: 0
    },
    {
        name: "Taller than wide",
        value: 3
    },
];

var crUnit = [
    {
        name: "Smooth/Ill-defined",
        value: 0
    },
    {
        name: "Lobulated/irregular",
        value: 2
    },
    {
        name: "Extra-thyroidal extension",
        value: 3
    },
];

var colUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "Yes",
        value: 0
    },
];

var abUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "Yes",
        value: 1
    },
];

var acUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "Yes",
        value: 2
    },
];

var adUnit = [
    {
        name: "No",
        value: 0
    },
    {
        name: "Yes",
        value: 3
    },
]

function init() {
    createDropDown(coUnit, compo)
    createDropDown(moUnit, echo)
    createDropDown(brUnit, shape)
    createDropDown(crUnit, margin)
    createDropDown(colUnit, art)
    createDropDown(abUnit, macro)
    createDropDown(acUnit, calc)
    createDropDown(adUnit, foci)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();


function getExact() {
    var a = Number(getSelectedValue(compo))
    var b = Number(getSelectedValue(echo))
    var c = Number(getSelectedValue(shape))
    var d = Number(getSelectedValue(margin))
    var e = Number(getSelectedValue(art))
    var f = Number(getSelectedValue(macro))
    var g = Number(getSelectedValue(calc))
    var h = Number(getSelectedValue(foci))

    var result = 0;

    result = a + b + c + d + e + f + g + h;

    console.log(result);
    return result;

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = "Score " + result


    if (percentile >= 0 && percentile < 2) {
        div2.innerHTML = '<b>Risk of malignacy:</b> 0.3% <br><br><b>Recommendations:</b> <br><br>◉ No need for the fine needle aspiration.';
    } else if (percentile >= 2 && percentile < 3) {
        div2.innerHTML = '<b>Risk of malignacy:</b> 1.5% <br><br><b>Recommendations:</b> <br><br>◉ No need for the fine needle aspiration.';
    } else if (percentile >= 3 && percentile < 4) {
        div2.innerHTML = '<b>Risk of malignacy:</b> 4.8% <br><br><b>Recommendations:</b> <br><br>◉ Follow if lesion is ≥ 1.5 cm (0.59 in)<br> ◉ Fine needle aspiration recommended if lesion is ≥ 2.5 cm (0.98 in).';
    } else if (percentile >= 4 && percentile < 7) {
        div2.innerHTML = ' <b>Risk of malignacy:</b> 9.1% <br><br><b>Recommendations:</b> <br><br>◉ Follow if lesion is ≥ 1 cm (0.39 in)<br> ◉ Fine needle aspiration recommended if lesion is ≥ 1.5 cm (0.59 in).';
    } else if (percentile >= 7) {
        div2.innerHTML = ' <b>Risk of malignacy:</b> 35%<br><br><b>Recommendations:</b> <br><br>◉ Follow if lesion is ≥ 0.5 cm (0.2 in)<br> ◉ Fine needle aspiration recommended if lesion is ≥ 1 cm (0.39 in).';
    }

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener("click", showResult);

