var cigar = getElement("Cigarettes_input_Id")
var cigar_dd = getElement("Cigarettes_dd_Id")
var time = getElement("frame_input_Id")
var time_dd = getElement("frame_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "cigerattes", values: cigar },
    { name: "cigerattesUnit", values: cigar },
    { name: "tFrame", values: time },
    { name: "tFrameUnit", values: time_dd },
];

var ciUnit = [
    {
        name: "/per day",
        value: 0
    },
    {
        name: "/per week",
        value: 1
    },
    {
        name: "/per month",
        value: 2
    },
    {
        name: "/per year",
        value: 3
    },
];

var frUnit = [
    {
        name: "year",
        value: 0
    },
    {
        name: "month",
        value: 1
    },
    {
        name: "week",
        value: 2
    },
    {
        name: "days",
        value: 3
    },
];

function init() {
    createDropDown(ciUnit, cigar_dd)
    createDropDown(frUnit, time_dd)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()
 
function getExact() {

    var a = Number(cigar.value)
    var b = Number(time.value)

    var result, result2,result3 = 0;
    var aa = b * 365

    result = a / 20;
    result2 = a * aa;
    result3 = result2 / 15;


    console.log(result,result2,result3);
    return [result, result2,result3]
}

function showResult() {
    resultPage2(queryParams);
    var [result,result2,result3] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "Packs daily    " + result + "  /per day";

    div2.innerHTML = "Total number of smoked cigarettes"

    div3.innerHTML = "Total cigarettes  " + result2;

    div4.innerHTML = "Total number of DNA mutations"
    
    div5.innerHTML = "Total Mutations  " + result3.toFixed(0);

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
};

calcBtn.addEventListener('click', showResult)

