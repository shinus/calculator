var platelet = getElement("fall_dd_Id");
var fibrin = getElement("fibrin_dd_Id");
var pro = getElement("pro_dd_Id");
var level = getElement("level_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "platelet", values: platelet },
    { name: "fibrin", values: fibrin },
    { name: "prothrombin", values: pro },
    { name: "level", values: level },
]

var countUnit = [
    { name: ">100,000/μL", value: 0 },
    { name: "50,000-100,000/μL", value: 1 },
    { name: "<50,000/μL", value: 2 },
];

var timeUnit = [
    { name: "No Change", value: 0 },
    { name: "Moderate rise", value: 2 },
    { name: "Strong rise", value: 3 },
];

var nadirUnit = [
    { name: "≤ 3 seconds", value: 0 },
    { name: "3-6 seconds", value: 1 },
    { name: ">6 seconds", value: 2 },
];

var thromboUnit = [
    { name: "≥ 1 g/L", value: 0 },
    { name: "< 1 g/L", value: 1 },
];


function init() {
    createDropDown(countUnit, platelet);
    createDropDown(timeUnit, fibrin);
    createDropDown(nadirUnit, pro);
    createDropDown(thromboUnit, level);
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();


function getExact() {
    var plate = Number(getSelectedValue(platelet))
    var fib = Number(getSelectedValue(fibrin))
    var pros = Number(getSelectedValue(pro))
    var leve = Number(getSelectedValue(level))

    var result = 0;

    result = plate + fib + pros + leve;

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
    div1.innerHTML = "Result " + "  " + result.toFixed(0) ;

    if(percentile <=4){
        div2.innerHTML = 'The DIC diagnosis is not probable. However if the symptoms persist, assess the patient with a scale again every 24 hours.';
    } else if(percentile >= 5 ){
        div2.innerHTML = 'The DIC diagnosis is probable.';
    }
 
    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener("click", showResult);
