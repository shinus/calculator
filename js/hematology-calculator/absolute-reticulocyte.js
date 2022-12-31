var hema = getElement("Hematocrit_input_Id");
var retic = getElement("Reticulocytes_input_Id");
var absolute = getElement("Absolute_input_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "hemtocrit", values: hema },
    { name: "reticulocyte", values: retic },
    { name: "absoluteCount", values: absolute },
]

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

function getExact() {
    var hemtocrit = Number(hema.value)
    var reticulocyte = Number(retic.value)
    var count = Number(absolute.value)

    var result = 0;

    result = reticulocyte * hemtocrit / count;

    console.log(result);
    return result;

};

// function validateAge() {
//     var ageValue = Number(eosinophils.value);
//     var msg;
//     var parentId = "calculator-row-2";
//     var elementName = "eosError";
    
//     if (ageValue < 0 || ageValue > 99) {
//       msg =
//         "Eosinophils must be greater than 0%, but less than 100%.";
//       showError(parentId, elementName, msg);
//     } else {
//       removeError(elementName);
//     }
//   }


function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "Absolute reticulocyte count " + "  " + result.toFixed(2) + "  " + " cells/μL";

    output.append(div1);
    output.append(div2);
};

// eosinophils.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);


