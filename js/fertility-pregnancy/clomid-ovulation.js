var treatment = getElement("start_input_Id");
var duration = getElement("Duration_input_Id")
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "treatment", values: treatment},
    { name: "duration", values: duration },
];

function getExact() {
    var startDate = new Date(treatment.value);
    var b = Number(duration.value);
    var timeDiff = Math.abs(startDate.getTime() + b + 7);
    var result = Math.ceil(timeDiff / (1000 * 3600 * 24));
    // console.log(diffDays)

    // var result = 0;

    // result = startDate + b + 7;

    console.log(result);
    return result;
};

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    // var percentile = result;
    // getDate().format("dd mmm yyyy")
    var a = Math.ceil(result / (1000 * 3600 * 24))
    div1.innerHTML = "Ovulation " + "    " + a;
    output.append(div1);
    output.append(div2);

};

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};