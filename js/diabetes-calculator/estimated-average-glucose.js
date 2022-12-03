var diabetes_dd = getElement("diabetes_dd_Id")
var hb = getElement("HbA1c_input_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "diabetesUnit", values: diabetes_dd },
    { name: "hbA1c", values: hb },
];

var gluUnit = [
    {
        name: "no",
        value: 0,
    },
    {
        name: "yes",
        value: 1,
    },
];




function init() {
    createDropDown(gluUnit, diabetes_dd)

}

init()

function getExact() {
    var hb1 = Number(hb.value)

    var result = 0;

    result = ((28.7 * hb1) - 46.7);

    console.log(result);
    return math.bignumber(result)
}

function validateAge() {

    var hba = Number(hb.value);
    var msg;
    var parentId = "calculator-row-2";
    var elementName = "percentError";

    if (hba > 90) {
        msg =
            "HbA1c cannot exceed 90.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}

function showResult() {
    resultPage2(queryParams);
    var unit = Number(getSelectedValue(diabetes_dd))
    var hello = Number(hb.value)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML = "Average glucose:" +
        "  " +
        result.toFixed(2) + " " + "mg/dL";

    var percentile = hello;
    if (unit == 1) {
        div2.innerHTML = '➡ <b>For people <i>with</i> diabetes:</b>';
        if (percentile < 6.5) {
            div3.innerHTML = '✅ Your HbA1c level is <b>below</b> the diabetes target - good job!';
        } else if (percentile = 6.5 && percentile < 7) {
            div3.innerHTML = '✅ Your HbA1c is on a good level.';
        } else {
            div3.innerHTML = '❗ Your HbA1c level is too high.';
        }
    }

    if (unit == 0) {
        div2.innerHTML = '➡ <b>For people <i>without</i> diabetes:</b>';
        if (percentile < 5.7) {
            console.log('goeshere');
            div3.innerHTML = '💚 Your HbA1c is within normal range.';
        } else if (percentile = 5.7 && percentile < 6.5) {
            div3.innerHTML = '🔶 Your HbA1c is on a prediabetic level - consult your doctor, eat well and exercise more!';
        } else  {
            div3.innerHTML = '🔺 Your result is indicative of <b>diabetes mellitus</b>. Consult your doctor.';
        }
    }
    output.append(div1);
    output.append(div2);
    output.append(div3);
};
hb.addEventListener('input', validateAge)
calcBtn.addEventListener('click', showResult)

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};