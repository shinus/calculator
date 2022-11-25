var age = getElement("Age_input_Id");
var ecog = getElement("ECOG_dd_Id");
var serum = getElement("Serum_input_Id");
var ldh = getElement("LDH_input_Id");
var blood = getElement("Cells_input_Id");
var level = getElement("level_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "age", values: age },
    { name: "ecogUnit", values: ecog },
    { name: "serum", values: serum },
    { name: "LDH", values: ldh },
    { name: "bloodCells", values: blood },
    { name: "levelUnit", values: level },
];

var ecogUNit = [
    {
        name: "0-1",
        value: 0,
    },
    {
        name: "2-4",
        value: 1,
    },
];

var levelUNit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 1,
    },
];

function init() {
    createDropDown(ecogUNit, ecog)
    createDropDown(levelUNit, level)
}

init();


function validateAge(parentId, elementName, msg, condition) {

    var message;
    var parentId = parentId;
    var elementName = elementName;
    console.log(condition);
    if (condition) {
      message = msg;
      showError(parentId, elementName, message);
    } else {
      removeError(elementName);
    }
  }

function getExact() {
    var Nage = Number(age.value)
    var ecg = Number(getSelectedValue(ecog))
    var ser = Number(serum.value)
    var ldd = Number(ldh.value)
    var blue = Number(math.log10(blood.value))
    var lev = Number(getSelectedValue(level))
    
    

    var result = 0;
    let a = ser / ldd
    let b = blue * math.pow(10, 3)
    if(ecg == 0){
        result = (0.03535 * Nage) + (0.6978) + (1.367 * math.log10(a)) + (0.9393 * math.log10(b));
    } else {
        result = (0.03535 * Nage) + (1.367 * math.log10(a)) + ( 0.9393 * math.log10(b)) ;
    }
  
    console.log(a, b);
    return result;

};

function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "MIPI  <b> " + "  " + result.toFixed(3) + "  " + " </b>";

    output.append(div1);
    output.append(div2);
};

serum.addEventListener('input', () => {validateAge("calculator-row-3","hemoglobinError", "The serum LDH is too high - please change.",Number(serum.value) >= 3000)})
ldh.addEventListener('input', () => {validateAge("calculator-row-4","hematologyError", "Please check the upper limit for serum LDH in your local laboratory",Number(ldh.value) > 999)})
blood.addEventListener('input', () => {validateAge("calculator-row-5","rbctError", "The White Blood Count is too high - please change.",Number(blood.value) > 399)})

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}; 