var gage = getElement("age_input_Id");
var dd_age = getElement("age_dd_Id");
var weight = getElement("Weight_input_Id");
var dd_weight = getElement("weight_dd_id");
var output = getElement("result-section");
var calcBtn = getElement("calc-Btn");

var gestationalage = [
    { name: "days", value: 0 },
    { name: "weeeks", value: 1 },
];

var unitsForWeight = [
    { name: "kilogram (kg)", value: "kg" },
    { name: "grams (g)", value: "g" },
    { name: "pounds (lb)", value: "lb" },
];

function init() {
    calcBtn.addEventListener("click", displayResult);
    createDropDown(gestationalage,dd_age)
    createDropDown(unitsForWeight,dd_weight);
}

function getWeightInKg(unit, value) {
    let exp = value + " " + unit + " " + "to" + " " + "kg";
    var nValue = math.evaluate(exp).toString();
    return parseFloat(nValue);
}
init();


function displayResult() {
    const getage = nAge.value
    const getgender = dd_gender.value
    const getweight = weight.value
    // console.log(getPrecentage(getgender,getage,getweight));
    var newUrl = window.location.href;
    if (!newUrl.includes("?")) {
        setQueryParams();
    } else {
        setQueryParams();
        gtag("event", "page_view", {
            page_location: window.location.pathname + location.search,
        });
    }
    // var n = "<b>Your kid is : </b>" + getCategory();
    var percentile = getPrecentage();
    var percentAge;
    if (percentile == 1) {
        percentAge = "5th";
    } else if (percentile == 2) {
        percentAge = "10th";
    } else if (percentile == 3) {
        percentAge = "15th";
    } else if (percentile == 4) {
        percentAge = "25th";
    } else if (percentile == 5) {
        percentAge = "50th";
    } else if (percentile == 6) {
        percentAge = "75th";
    } else if (percentile == 7) {
        percentAge = "85th";
    } else if (percentile == 8) {
        percentAge = "90th";
    } else if (percentile == 9) {
        percentAge = "95th";
    }

    output.innerHTML = "";
    var div = document.createElement("div");
    // div.innerHTML = n;
    output.append(div);
    var div1 = document.createElement("div");
    div1.innerHTML = "<b>Percentile : </b>" + percentAge;
    output.append(div1);
}


function showError() {
    var age = nAge.value;
    var parentElement = getElement("calculator-row-5");
    var div;
    var divElement = getElement("error-2");
    if (divElement == null) {
        div = document.createElement("div");
        div.id = "error-2";
    } else {
        div = divElement;
    }
    if (age >= 9) {
        div.innerHTML = "";
        div.innerHTML =
            "<p style=color:red>Data is only valid for kids aged 9 and below, for other populations check our other BMI calculators.</p>";
        parentElement.after(div);
    } else if (age == "" || age <= 9) {
        var ele = getElement("error-2");
        if (ele != null) {
            ele.remove();
        }
    }
}

calcBtn.addEventListener("click", displayResult);
nAge.addEventListener("input", showError);

function setQueryParams() {
    let url;
    // if (history.pushState) {
    //   url =
    //     window.location.protocol +
    //     "//" +
    //     window.location.host +
    //     "/" +
    //     // permaLink +
    //     "?" +
    //     "&age=" +
    //     age.value +
    //     "&dd_age=" +
    //     dd_age.value +
    //     "&dd_gender=" +
    //     dd_gender.selectedIndex +
    //     "&weight=" +
    //     weight.value +

    //     "&dd_weight=" +
    //     dd_weight.value;
    // }

    window.history.pushState({ path: url }, "", url);
}

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setValues();
        displayResult();
    }
};