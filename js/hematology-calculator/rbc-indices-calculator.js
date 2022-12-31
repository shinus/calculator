var gender = getElement("am_dd_Id");
var hemo = getElement("Hemoglobin_input_Id");
var hemato = getElement("Hematocrit_input_Id");
var rbc = getElement("count_input_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "genderUnit", values: gender },
    { name: "hemoglobin", values: hemo },
    { name: "hematology", values: hemato },
    { name: "RBC", values: rbc },
];

var mmUNit = [
    {
        name: "female",
        value: 0,
    },
    {
        name: "male",
        value: 1,
    },
];

function init() {
    createDropDown(mmUNit, gender);
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

function getExact() {

    var hemoglobin = Number(hemo.value)
    var hematology = Number(hemato.value)
    var rbbcc = Number(rbc.value)

    var result1, result2, result3 = 0;

    result1 = hemoglobin / rbbcc * 10;
    result2 = hemoglobin / hematology * 100;
    result3 = hematology / rbbcc * 10;

    console.log(result1, result2, result3);
    return [result1, result2, result3];

};

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

function showResult() {
    resultPage2(queryParams)
    var [result1, result2, result3] = getExact();
    var gend = Number(getSelectedValue(gender))
    var hemaso = Number(hemo.value)
    var hct = Number(hemato.value)
    var rbcc = Number(rbc.value)

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");
    var div9 = document.createElement("div");
    var div10 = document.createElement("div");
    var div11 = document.createElement("div");
    var div12 = document.createElement("div");
    var div13 = document.createElement("div");

    var percentile = gend;
    var percentile1 = result1;
    var percentile2 = result2;
    var percentile3 = result3;

    output.innerHTML = " ";
    div1.innerHTML = "Mean corpuscular hemoglobin (MCH)   <b> " + " \xa0\xa0 " + result1.toFixed(2) + " pg/cell </b>";

    div2.innerHTML = "Mean corpuscular hemoglobin concentration (MCHC) <b> " + " \xa0\xa0\xa0 " + result2.toFixed(2) + " g/dL </b>";

    div3.innerHTML = "Mean corpuscular volume (MCV)   <b> " + " \xa0\xa0\xa0 " + result3.toFixed(2) + " fl </b>";

    if (percentile == 0) {
        if (hemaso < 11.6) {
            div4.innerHTML = '<b>⬇️ Your hemoglobin level is low.<b>';
        } else if (hemaso > 15) {
            div4.innerHTML = '<b>⬆️ Your hemoglobin level is high.<b>';
        } else {
            div4.innerHTML = '✔️ Your hemoglobin level is within normal range.';
        }

        if (hct < 35.5) {
            div5.innerHTML = '<b>⬇️ Your hematocrit level is low.</b>';
        } else if (hct > 44.9) {
            div5.innerHTML = '<b>⬆️ Your hematocrit level is high.</b>';
        } else {
            div5.innerHTML = '✔️ Your hematocrit level is within normal range.'
        }
        if (rbcc < 3.92) {
            div6.innerHTML = '<b>⬇️ Your red blood cell count is low.</b>';
        } else if (rbcc > 5.13) {
            div6.innerHTML = '<b>⬆️ Your red blood cell count is high.</b>';
        } else {
            div6.innerHTML = '✔️ Your red blood cell count is within normal range.'
        }
    }


    if (percentile == 1) {// male
        if (hemaso < 13.2) {
            div7.innerHTML = '<b>⬇️ Your hemoglobin level is low.</b>';
        } else if (hemaso > 16.6) {
            div7.innerHTML = '<b>⬆️ Your hemoglobin level is high.</b>';
        } else {
            div7.innerHTML = '✔️ Your hemoglobin level is within normal range.';
        }

        if (hct < 38.3) {
            div8.innerHTML = '<b>⬇️ Your hematocrit level is low.</b>';
        } else if (hct > 48.6) {
            div8.innerHTML = '<b>⬆️ Your hematocrit level is high.</b>';
        } else {
            div8.innerHTML = '✔️ Your hematocrit level is within normal range.'
        }
        if (rbcc < 4.35) {
            div9.innerHTML = '<b>⬇️ Your red blood cell count is low.</b>';
        } else if (rbcc > 5.65) {
            div9.innerHTML = '<b>⬆️ Your red blood cell count is high.</b>';
        } else {
            div9.innerHTML = '✔️ Your red blood cell count is within normal range.'
        }
    }

    if (percentile1 < 27) {
        div10.innerHTML = '<b>⬇️ Your MCH value is low.</b>';
    } else if (percentile1 > 31) {
        div10.innerHTML = '<b>⬆️ Your MCH value is high.</b>';
    } else {
        div10.innerHTML = '✔️ Your MCH value is within normal range.'
    }

    if (percentile2 < 32) {
        div11.innerHTML = '<b>⬇️ Your MCHC value is low.</b>';
    } else if (percentile2 > 36) {
        div11.innerHTML = '<b>⬆️ Your MCHC value is high.</b>';
    } else {
        div11.innerHTML = '✔️ Your MCHC value is within normal range.'
    }

    if (percentile3 < 80) {
        div12.innerHTML = '<b>⬇️ Your MCV value is low.</b>';
    } else if (percentile3 > 100) {
        div12.innerHTML = '<b>⬆️ Your MCV value is high.</b>';
    } else {
        div12.innerHTML = '✔️ Your MCV value is within normal range.'
    }

    div13.innerHTML = '<font size=2><i>Note: normal range values might differ between laboratories. Discuss any abnormalities and symptoms with your physician.</i></font>';


    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
    output.append(div7);
    output.append(div8);
    output.append(div9);
    output.append(div10);
    output.append(div11);
    output.append(div12);
    output.append(div13);

};

hemo.addEventListener('input', () => {validateAge("calculator-row-2","hemoglobinError", "Hemoglobin value must be smaller than 30 g/dL.",Number(hemo.value) >= 30)})
hemato.addEventListener('input', () => {validateAge("calculator-row-3","hematologyError", "Hematocrit value must be smaller than 100%.",Number(hemato.value) > 100)})
rbc.addEventListener('input', () => {validateAge("calculator-row-4","rbctError", "RBC count must be smaller than 15 million cells/mcL.",Number(rbc.value) >= 15)})

calcBtn.addEventListener("click", showResult);

 