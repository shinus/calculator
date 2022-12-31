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
}

init();

function convert() {
    var ab = Number(body.value)
    var ac = Number(ambient.value)
    var bb, amb = 0

      bb =   (ab - 32) * (5/9);
      amb = (ac - 32) * (5/9);

      return [bb, amb]
}


function getExact() {
    var bb = Number(convert())
    var amb = Number(convert())

    var result = 0;
    console.log(typeof bb ,typeof amb);

    result = (98.6 - bb) / amb;

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

    div1.innerHTML = "Time since death:  " + result + " hrs"
 
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