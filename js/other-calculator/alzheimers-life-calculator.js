var alzheimer = getElement("Alzheimer’s_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "all", values: alzheimer },
]

var neUnit = [
    {
        name: "No cognitive impairment",
        value: 0
    },
    {
        name: "Very mild cognitive decline",
        value: 1
    },
    {
        name: "Mild cognitive decline",
        value: 2
    },
    {
        name: "Moderate cognitive decline",
        value: 3
    },
    {
        name: "Moderately severe cognitive decline",
        value: 4
    },
    {
        name: "Severe cognitive decline",
        value: 5
    },
    {
        name: "Very severe cognitive decline",
        value: 6
    },
];

function init() {
    createDropDown(neUnit, alzheimer)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();


function getExact() {
    var a = Number(getSelectedValue(alzheimer))

    var result,result2 = 0;

    if(a == 0) {
        result = "Not applicable",
        result2 = "Not applicable"
    } else if(a == 1) {
        result = "15 years",
        result2 = "More than 10 years"
    } else if(a == 2) {
        result = "2–7 years",
        result2 = "10 years"
    } else if(a == 3) {
        result = "2 years",
        result2 = "3–8 years"
    } else if(a == 4) {
        result = "1.5 years",
        result2 = "1.5–6.5 years"
    } else if(a == 5) {
        result = "2.5 years",
        result2 = "4 years or less"
    } else if(a == 6) {
        result = '1.5–2.5 years',
        result2 = "2.5 years or less"
    }

    console.log(result, result2);
    return [result, result2];

};

function showResult() {
    resultPage2(queryParams)
    var [result, result2] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = `<small>To learn more about the stages of Alzheimer's disease, click  
    <a href="https://www.omnicalculator.com/all/alzheimers-life-expectancy#alzheimers-stages-life-expectancy-the-7-stages-of-alzheimers-disease">here</a>.</small>`; 
    div2.innerHTML = "Duration of the stage <b> " + result + " </b>";
    div3.innerHTML = "Life expectancy <b> " + result2 + " </b>";

  div4.innerHTML = 'Note that these are just estimations, and various factors such as age, health condition, and genetics can affect stage duration and life expectancy.';

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
};

calcBtn.addEventListener("click", showResult);

  