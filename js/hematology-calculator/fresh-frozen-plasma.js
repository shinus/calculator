var weight = getElement("weight_input_Id");
var weight_dd = getElement("weight_dd_Id");
var volume = getElement("volume_input_Id");
var volume_dd = getElement("volume_dd_Id");
var dose = getElement("Dose_input_Id");
var dose_dd = getElement("Dose_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "weight", values: weight },
    { name: "weightUnit", values: weight_dd },
    { name: "volume", values: volume },
    { name: "volumeUnit", values: volume_dd },
    { name: "dose", values: dose },
    { name: "doseUnit", values: dose_dd },
]


var countUnit = [
    { name: "kg", value: 0 },
    { name: "lb", value: 1 },
    { name: "stone", value: 2 },
];

var timeUnit = [
    { name: "ml", value: 0 },
    { name: "cl", value: 1 },
    { name: "liters", value: 2 },
    { name: "US fl oz", value: 3 },
    { name: "UK fl oz", value: 4 },
];

function init() {
    createDropDown(countUnit, weight_dd);
    createDropDown(timeUnit, volume_dd);
    createDropDown(timeUnit, dose_dd);
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function validateAge() {
    var ageValue = Number(volume.value);
    var msg;
    var parentId = "calculator-row-2";
    var elementName = "eosError";
    
    if (ageValue >= 2000) {
      msg =
        "Unit volume must be less than 2000 mL.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }

function getExact() {
    var wei = Number(weight.value)
    var vol = Number(volume.value)
    var dos = Number(dose.value)

    var result, result2 = 0;

    result = wei * dos;

    result2 = result / vol;

    console.log(result, result2);
    return [result, result2];

};

function showResult() {
    resultPage2(queryParams)
    var [result, result2] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    var percentile = result;
    var percentile2 = result2;

    output.innerHTML = " ";
    div1.innerHTML = "Total plasma dose  " + "  " + result.toFixed(0) + "  " + "  ml";
    div2.innerHTML = "Units needed  " + "  " + result2.toFixed(2) ;

    
      div3.innerHTML =  "The patient needs <b> " + percentile  +  " mL </b> of fresh frozen plasma. Get <b>" + percentile2.toFixed(2)  +  "  units </b>."

    output.append(div1);
    output.append(div2);
    output.append(div3);
};

volume.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);

