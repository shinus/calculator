var length = getElement("Length_input_Id");
var length_dd = getElement("Length_dd_Id");
var width = getElement("Width_input_Id");
var width_dd = getElement("Width_dd_Id");
var height = getElement("Height_input_Id");
var height_dd = getElement("Height_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "length", values: length },
    { name: "lengthUnit", values: length_dd },
    { name: "width", values: width },
    { name: "widthUnit", values: width_dd },
    { name: "height", values: height },
    { name: "heightUnit", values: height_dd },
];

var ddUnit = [
    {
        name: "mm",
        value: 0
    },
    {
        name: "cm",
        value: 1
    },
    {
        name: "in",
        value: 2
    },
];

function init() {
    createDropDown(ddUnit, length_dd);
    createDropDown(ddUnit, width_dd);
    createDropDown(ddUnit, height_dd);
}

init();

function getExact() {
    var a = Number(length.value);
    var b = Number(width.value);
    var c = Number(height.value);

    var result, result2 = 0;

    result = (a + c + b) / 3;

    result2 = result + 30;

    console.log(result, result2);
    return [result, result2];
};

function showResult() {
    resultPage2(queryParams);
    var [result, result2] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";

    var percentile = result;
    div1.innerHTML = "Mean sac diameter " + "    " + result.toFixed(3) + " mm";

    if( percentile == 2 ) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 4w 4d </b>" ;
    } else if( percentile == 3) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 4w 5d </b>" ;
    } else if( percentile == 4) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 4w 6d </b>" ;
    } else if( percentile == 5) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 5w </b>" ;
    } else if( percentile == 6) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 5w 1d </b>" ;
    } else if( percentile == 7) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 5w 2d </b>" ;
    } else if( percentile == 8) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 5w 3d </b>" ;
    } else if( percentile == 9) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 5w 4d </b>" ;
    } else if( percentile == 10) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 5w 5d </b>" ;
    } else if( percentile == 11) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 5w 6d </b>" ;
    } else if( percentile == 12) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 6w </b>" ;
    } else if( percentile == 13) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 6w 1d </b>" ;
    } else if( percentile == 14) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 6w 2d </b>" ;
    } else if( percentile == 15) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 6w 3d </b>" ;
    } else if( percentile == 16) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 6w 4d </b>" ;
    } else if( percentile == 17) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 6w 5d </b>" ;
    } else if( percentile == 18) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 6w 6d </b>" ;
    } else if( percentile == 19) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 7w  </b>" ;
    } else if( percentile == 20) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 7w 1d </b>" ;
    } else if( percentile == 21) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 7w 2d </b>" ;
    } else if( percentile == 22) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 7w 3d </b>" ;
    } else if( percentile == 23) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 7w 4d </b>" ;
    } else if( percentile == 24) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 7w 5d </b>" ;
    } else if( percentile == 25) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 7w 6d </b>" ;
    } else if( percentile == 26) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 8w </b>" ;
    } else if( percentile == 27) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 8w 1d </b>" ;
    } else if( percentile == 28) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 8w 2d </b>" ;
    } else if( percentile == 29) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 8w 3d </b>" ;
    } else if( percentile == 30) {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 8w 4d </b>" ;
    } else {
        div2.innerHTML = "Gestational age " + "\xa0\xa0\xa0 <b> " + " 8w 5d </b>" ;
    }

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