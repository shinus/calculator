var stone = getElement("stone_dd_Id")
var tract = getElement("tarct_dd_Id")
var obstruct = getElement("Obstruction_dd_Id")
var cycle = getElement("cycle_dd_Id")
var density = getElement("density_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "stone", values: stone },
    { name: "tract", values: tract },
    { name: "obstruct", values: obstruct },
    { name: "cycle", values: cycle },
    { name: "density", values: density },
];



var stoneUnit = [
    {
        name: "0-399",
        value: 1,
    },
    {
        name: "400-799",
        value: 2,
    },
    {
        name: "800-1599",
        value: 3,
    },
    {
        name: "⩾1600",
        value: 4,
    },
];

var tractvs = [
    {
        name: "⩽100 mm",
        value: 1,
    },
    {
        name: ">100 mm",
        value: 2,
    },
];

var obstructvs = [
    {
        name: "No/mild hydronephrosis",
        value: 1,
    },
    {
        name: "Moderate/severe hydronephrosis",
        value: 2,
    },
];

var calculivs = [
    {
        name: "1-2",
        value: 1,
    },
    {
        name: "3",
        value: 2,
    },
    {
        name: "Full staghorn stone",
        value: 3,
    },
];

var densityvs = [
    {
        name: "⩽950 HU",
        value: 1,
    },
    {
        name: ">950 HU",
        value: 2,
    },
]

function init() {
    createDropDown(stoneUnit, stone)
    createDropDown(tractvs, tract)
    createDropDown(obstructvs, obstruct)
    createDropDown(calculivs, cycle)
    createDropDown(densityvs, density)
}

init()

function getExact() {
    var st = Number(getSelectedValue(stone))
    var tr = Number(getSelectedValue(tract))
    var ob = Number(getSelectedValue(obstruct))
    var ca = Number(getSelectedValue(cycle))
    var de = Number(getSelectedValue(density))

    var result = 0;

    result = (st + tr + ob + ca + de);
    console.log(typeof st);
    console.log(st, tr, ob, "ss");
    console.log(ca, de, "sh");

    console.log(result);
    return math.bignumber(result);
}


function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "Result";



    div1.innerHTML = result;

    var percentile = result;
    if( percentile == 5){
    div2.innerHTML = "There is approximately <b>94% chance</b> of a stone free outcome after the first percutaneous nephrolithotomy."
    } else if(percentile == 6){
        div2.innerHTML = "There is approximately <b>92% chance</b> of a stone free outcome after the first percutaneous nephrolithotomy"
    } else if (percentile == 7){
        div2.innerHTML = "There is approximately <b>88% chance</b> of a stone free outcome after the first percutaneous nephrolithotomy."
    } else if(percentile == 8) {
        div2.innerHTML =  "There is approximately <b>83% chance</b> of a stone free outcome after the first percutaneous nephrolithotomy."
    } else if(percentile == 9){
        div2.innerHTML =  "There is approximately <b>64% chance</b> of a stone free outcome after the first percutaneous nephrolithotomy."
    } else if(percentile == 10){
        div2.innerHTML =  "There is approximately <b>42% chance</b> of a stone free outcome after the first percutaneous nephrolithotomy."
    } else if(percentile == 11){
        div2.innerHTML =  "There is approximately <b>27% chance</b> of a stone free outcome after the first percutaneous nephrolithotomy."
    } else if(percentile == 12){
        div2.innerHTML =  "There is approximately <b>27% chance</b> of a stone free outcome after the first percutaneous nephrolithotomy."
    } else if(percentile == 13){
        div2.innerHTML =  "There is approximately <b>27% chance</b> of a stone free outcome after the first percutaneous nephrolithotomy."
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