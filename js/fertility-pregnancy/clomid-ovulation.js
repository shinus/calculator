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
    let ab = duration.value * 24 * 60 * 60 * 1000;
    let Tdate = new Date(5)
    var result = Math.abs(startDate.getTime() + ab + (7 * 24 * 60 * 60 * 1000));
    console.log(new Date(result),'resolt');
    // console.log(diffDays)
    
    // var result = 0;
    
    // result = startDate + b + 7;

    return result;
};

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());
    console.log(result,'exact');
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    let CalcDate = new Date(result)
    var firstDate = new Date(result - (7 * 24 * 60 * 60 * 1000))
    var lastDate = new Date(result + (4 * 24 * 60 * 60 * 1000));

    output.innerHTML = "";

    // var percentile = result;
    // getDate().format("dd mmm yyyy")
    div1.innerHTML = "Ovulation" + "    <b>" + CalcDate.toLocaleDateString("de-DE") + "</b>" ;
    div2.innerHTML = "👶 Your fertility window:  "
    div3.innerHTML = "<b>" + firstDate.toLocaleDateString("de-DE") + "</b>" + " - " + "<b>" + lastDate.toLocaleDateString("de-DE") + "</b>";
    div4.innerHTML = "Consult your doctor for more details."
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);

};

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};