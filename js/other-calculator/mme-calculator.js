var opioid = getElement("Opioid_dd_Id");
var dose = getElement("Dose_input_Id");
var dose_dd = getElement("Dose_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "opioid", values: opioid },
    { name: "dose", values: dose },
    { name: "doseUnit", values: dose_dd },
]

var opUnit = [
    {
        name: "Buprenorphine",
        value: 10
    },
    {
        name: "Codeine",
        value: 0.15
    },
    {
        name: "Fentanyl tablets (bucc/subling)",
        value: 0.13
    },
    {
        name: "Fentanyl transdermal",
        value: 2.4
    },
    {
        name: "Hydrocodone",
        value: 1
    },
    {
        name: "Hydromorphone",
        value: 4
    },
    {
        name: "Methadone",
        value: 5
    },
    {
        name: "Oxycodone",
        value: 1.5
    },
    {
        name: "Oxymorphone",
        value: 3
    },
    {
        name: "Tapentadol",
        value: 0.4
    },
    {
        name: "Tramadol",
        value: 0.1
    },
];

var gdUnit = [
    {
        name: "miligrams",
        value: 0
    },
    {
        name: "micrograms",
        value: 1
    },
    {
        name: "grams",
        value: 2
    },
];

function init() {
    createDropDown(opUnit, opioid)
    createDropDown(gdUnit, dose_dd)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function metha() {
    var op = getSelectedValue(opioid)
    var ab = 0;

    if(op == 5){
        
    }
}


function getExact() {
    var op = Number(getSelectedValue(opioid))
    var dos = Number(dose.value)

    var result = 0;

    if(op == 10) {
        result = op * dos
    } else if(op == 0.15) {
       result = op * dos 
    } else if(op == 0.13) {
        result = op * dos
    } else if(op == 2.4) {
        result = op * dos 
    } else if(op == 1) {
        result = op * dos
    } else if(op == 4) {
        result = op * dos
    } else if(op == 5) {
        result = op * dos
    } else if(op == 1.5) {
        result = op * dos
    } else if(op == 3) {
        result = op * dos
    } else if(op == 0.4) {
        result = op * dos
    } else if(op == 0.1) {
        result = op * dos
    }

    console.log(result);
    return result;

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = "Morphine equivalents  " + result + " MME";

    if (percentile < 20){
        div2.innerHTML = 'Recommended MME for opiod naïve-patients or acute pain.'; 
       } else if (percentile >= 20 && percentile < 50 ){
        div2.innerHTML = 'This level of MME <b>doubles</b> the risk of overdose.'; 
       } else if (percentile >= 50 && percentile < 100 ){
        div2.innerHTML = 'Revise your pain management strategy. Lower the opioids dose, <b>consider use of the co-analgesic drugs.</b>'; 
       } else if (percentile >= 100 ){
        div2.innerHTML = 'The MME level is too high. Consult your pain management specialist.'; 
       }
     
       if (percentile < 20 ){
        div2.innerHTML = 'Recommended MME for opiod naïve-patients or acute pain.'; 
       } else if (percentile >= 20 && percentile < 50 ){
        div2.innerHTML = 'This level of MME <b>doubles</b> the risk of overdose.'; 
       } else if (percentile >= 50 && percentile < 100){
        div2.innerHTML = 'Revise your pain management strategy. Lower the opioids dose, <b>consider use of the co-analgesic drugs.</b>'; 
       } else if (percentile >= 100 ){
        div2.innerHTML = 'The MME level is too high. Consult your pain management specialist.'; 
       }
       
       
       if (percentile < 20 ){
        div2.innerHTML = 'Recommended MME for <b>opiod naïve-patients</b> or acute pain.'; 
       } else if (percentile >= 20 && percentile < 50 ){
        div2.innerHTML = 'This level of MME <b>doubles</b> the risk of overdose.'; 
       } else if (percentile >= 50 && percentile < 100 ){
        div2.innerHTML = 'Revise your pain management strategy. Lower the opioids dose, <b>consider use of the co-analgesic drugs.</b>'; 
       } else if (percentile >= 100  ){
        div2.innerHTML = 'The MME level is too high. Consult the pain management specialist.'; 
       }
       
       
       if (percentile < 20){
        div2.innerHTML = 'Recommended MME for <b>opiod naïve-patients</b> or acute pain.'; 
       } else if (percentile >= 20 && percentile < 50 ){
        div2.innerHTML = 'This level of MME <b>doubles</b> the risk of overdose.'; 
       } else if (percentile >= 50 && percentile < 100 ){
        div2.innerHTML = 'Revise your pain management strategy. Lower the opioids dose, <b>consider use of the co-analgesic drugs.</b>'; 
       } else if (percentile >= 100 ){
        div2.innerHTML = '<b>The MME level is too high</b>. Consult your pain management specialist.'; 
       }
         
       div4.innerHTML = '📌Always use the lowest effective dose. Remember that the opiods effect is individual - <b>perfectly safe dose doesn\'t exist</b>. This tool shouldn\'t replace your own clinical judgment.';
 
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
};

calcBtn.addEventListener("click", showResult);
