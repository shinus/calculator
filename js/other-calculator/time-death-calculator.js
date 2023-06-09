

var body = getElement("Body_input_Id");
var body_dd = getElement("Body_dd_Id");
var ambient = getElement("Ambient_input_Id");
var ambient_dd = getElement("Ambient_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "body", values: body },
    { name: "bodyUnit", values: body_dd },
    { name: "ambient", values: ambient },
    { name: "ambientUnit", values: ambient_dd },
]

var gdUnit = [
    {
        name: "Celcius",
        value: 0
    },
    {
        name: "Fahrenheit",
        value: 1
    },
    {
        name: "Kelvin",
        value: 2
    },
];

function init() {
    createDropDown(gdUnit, body_dd)
    createDropDown(gdUnit, ambient_dd)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function con() {
    var bo = Number(body.value)
    var am = Number(ambient.value)
    var acc, abb = 0;

    acc = (bo * 9/5) + 32
    abb = (am * 9/5) + 32

    return [acc, abb]
}


function getExact() {
    var acc = Number(con())
    var abb = Number(con())

    if( abb >= 32) {
        abb = 0.75
    } else if( abb < 32) {
        abb = 1.5
    }
    console.log(typeof acc, typeof abb);
    var result = 0;
    // console.log(typeof bb ,typeof amb);

    result = (98.6 - acc) / abb;

    console.log(typeof result);
    return result;

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = "Time since death:  " + result + " hrs"
 
    output.append(div1);
    output.append(div2);

};

calcBtn.addEventListener("click", showResult);