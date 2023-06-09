var convert = document.getElementById("convert_dd_Id");
var octal = document.getElementById("octal_input_id");
var binary = document.getElementById("binary_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "convert", values: convert },
    { name: "octal", values: octal },
    { name: "binary", values: binary },
];

var conUnit = [
    {
        name: "binary to octal",
        value: 0
    },
    {
        name: "octal to binary",
        value: 1
    }
]

function init() {
    createDropDown(conUnit, convert);
    $("#calculator-row-3").hide();
    $("#calculator-row-4").hide();
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function showVariables2() {
    var con = Number(getSelectedValue(convert));

    if (con == 0) {
        $("#calculator-row-2").show();
        $("#calculator-row-5").show();
        $("#calculator-row-3").hide();
        $("#calculator-row-4").hide();
    } else if (con == 1) {
        $("#calculator-row-3").show();
        $("#calculator-row-4").show();
        $("#calculator-row-2").hide();
        $("#calculator-row-5").hide();
    }
}

convert.addEventListener("change", () => {
    showVariables2();
});


function getExact() {
    var binar = Number(binary.value)
    const decimalNumber = parseInt(binar, 2);

    // Convert the decimal number to octal
    const octalNumber = decimalNumber.toString(8);

    return octalNumber;
}

function getExact2() {
    var oct = Number(octal.value)
    // Convert the octal number to decimal first
    const decimal = parseInt(oct, 8);

    // Convert the decimal number to binary
    const bina = decimal.toString(2);

    return bina;
}


function showResult() {
    resultPage2(queryParams);
    var octalNumber = getExact();
    var bina = getExact2();
    var conve = getSelectedValue(convert)

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";
    if (conve == 0) {
        div1.innerHTML = "Result"
        div2.innerHTML =  "<b>Number in Octal representation: </b>";
        div3.innerHTML = "<b> Octal </b> "  + " " + octalNumber;
    } else if (conve == 1) {
        div1.innerHTML = "Result"
        div2.innerHTML = "<b>Number in Binary representation: </b>" ;
        div3.innerHTML = "<b> Binary </b> " + " " + bina;
    }



    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);