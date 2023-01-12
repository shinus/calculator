var so = getElement("Sobriety_input_Id")
var cu = getElement("Current_input_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "so", values: so },
    { name: "cu", values: cu },
];


function getExact() {
console.log(so,'sososo');
var startDate = new Date(so.value);
var endDate = new Date(cu.value);
var timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
	console.log(diffDays)
   

    // console.log(result);
    return math.bignumber(diffDays)
}

function showResult() {
    // resultPage2(queryParams);
    var diffDays = Number(getExact());
   

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = "You have been sober for";

    div2.innerHTML = diffDays + " days"

    var percentile = diffDays;

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