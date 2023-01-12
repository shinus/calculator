var hemo = getElement("A1c_input_Id")
var hemo_dd = getElement("A1c_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "hemoglobin", values: hemo },
    { name: "hemoglobinUnit", values: hemo_dd },
];

var gluUnit = [
    {
        name: "%",
        value: 0,
    },
    {
        name: "mmol/L",
        value: 1,
    },
];

function init() {
    createDropDown(gluUnit, hemo_dd)

}

init()

function getExact() {
    var ahem = Number(hemo.value)

    var result = 0;

    result = (ahem * 28.7 - 46.7);

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    var hem = hemo.value
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "Average blood sugar" +
        "  " +
        result.toFixed(2) + " " + "mg/dL";

    var percentile = hem;
    if(percentile<5.7){
        div2.innerHTML = 'Your result is <b>'+(percentile)+'%</b>. This is a fairly normal, healthy hemoglobin A1c level.'}
      
          else if(percentile>=5.7 && percentile<6.5){
         div2.innerHTML =    'Your result is <b>'+(percentile)+'%</b>. This means you are in the <b>prediabetes state</b>. Be careful - you are at serious risk of developing diabetes in the future.';}
                
          else{
          div2.innerHTML =  'Your result is <b>'+(percentile)+'%</b>. This result means that you are <b>diabetic</b>. Contact a medical doctor as soon as possible.';}

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener('click', showResult)

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};