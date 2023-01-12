var age_dd = getElement("Age_dd_Id");
var age = getElement("Age_input_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "Age", values: age },
    { name: "AgeUnit", values: age_dd },
];

var aUnit = [
    {
        name: "years",
        value: 0,
    },
    {
        name: "months",
        value: 1,
    },
    {
        name: "weeks",
        value: 2,
    },
];

function init() {
    createDropDown(aUnit, age_dd)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

function getAge() {
    var agess = Number(age.value)

    if(agess > 14) {
        agess = 14
    } 
    return agess
}

function getAge2() {
    var aging = Number(age.value)

    if(aging > 18) {
        aging = 18
    }

    return aging
}

function getExact() {
    var agess = Number(getAge())
    var aging = Number(getAge2())

    var result, result2, result3 = 0;

    result = (agess / 4) + 4;
    result2 = (agess / 4) + 3;
    result3 = (aging / 2) + 12;

    console.log(agess, aging);

    console.log(result, result2, result3);
    return [result, result2, result3]
}

function showResult() {
    resultPage2(queryParams)

    var [result, result2, result3] = getExact()

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;

    div1.innerHTML = "Uncuffed ETT size   " + " <b> " + result.toFixed(1) + "  mm (ID)  </b> ";
    div2.innerHTML = "Cuffed ETT size  " + " <b> " + result2.toFixed(1) + "  mm (ID) </b> ";
    div3.innerHTML = "Insertion depth  " + " <b> " + result3.toFixed(1) + "  cm </b> ";

    output.append(div1);
    output.append(div2);
    output.append(div3);
}

calcBtn.addEventListener("click", showResult);

