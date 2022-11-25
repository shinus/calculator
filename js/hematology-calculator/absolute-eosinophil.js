var blood = getElement("White_input_Id");
var eosinophils = getElement("Eosinophils_input_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "whiteBlood", values: blood },
    { name: "eosinophils", values: eosinophils },
]

function getExact() {
    var wbc = Number(blood.value)
    var eos = Number(eosinophils.value)

    var result = 0;

    result = wbc * eos / 100;

    console.log(result);
    return math.bignumber(result);

};

function validateAge() {
    var ageValue = Number(eosinophils.value);
    var msg;
    var parentId = "calculator-row-2";
    var elementName = "eosError";
    
    if (ageValue < 0 || ageValue > 99) {
      msg =
        "Eosinophils must be greater than 0%, but less than 100%.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }


function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "Absolute eosinophil count " + "  " + result.toFixed(2) + " " + " ×10³/μL";

    output.append(div1);
    output.append(div2);
};

eosinophils.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);


window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};