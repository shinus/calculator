var hema = getElement("Hematocrit_input_Id");
var retic = getElement("Reticulocytes_input_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "hemtocrit", values: hema },
    { name: "reticulocyte", values: retic },
]

function init() {
  var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

function getExact() {
    var hemtocrit = Number(hema.value)
    var reticulocyte = Number(retic.value)

    var result = 0;

    result = (hemtocrit / 45) * (reticulocyte / 2.5 );

    console.log(result);
    return result;
}; 

function validateAge() {
    var ageValue = Number(hema.value);
    var msg;
    var parentId = "calculator-row-1";
    var elementName = "eosError";
    
    if (ageValue > 100) {
      msg =
        "Hematocrit must be between 0% and 100%.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }

function validateAge2() {
    var ageValue = Number(retic.value);
    var msg;
    var parentId = "calculator-row-2";
    var elementName = "eosError";
    
    if (ageValue > 100) {
      msg =
        "Reticulocytes must be between 0% and 100%";
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
    div1.innerHTML = "Corrected reticulocyte count (CRC) " + "  " + result.toFixed(2) + "  " + " %";

    output.append(div1);
    output.append(div2);
};

hema.addEventListener("input", validateAge)
retic.addEventListener("input", validateAge2)
calcBtn.addEventListener("click", showResult);


