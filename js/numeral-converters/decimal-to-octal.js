var convert = document.getElementById("decimal_dd_Id");
var octal = document.getElementById("octal_input_id");
var decimal = document.getElementById("Number_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "convert", values: convert },
    { name: "octal", values: octal },
    { name: "decimal", values: decimal },
];

var conUnit = [
    {
        name: "decimal to octal",
        value: 0
    },
    {
        name: "octal to decimal",
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
    var dec = Number(decimal.value)
    var result = dec.toString(8);

    return result 
}

function getExact2() {
    var oct = Number(octal.value)
    let result2 = 0;
    let multiplier = 1;
  
    while (oct !== 0) {
      const lastDigit = oct % 10;
      result2 += lastDigit * multiplier;
      multiplier *= 8;
      oct = Math.floor(oct / 10);
    }
    console.log(result2);
    return result2;
}


function showResult() {
    resultPage2(queryParams);
    var result = getExact();
    var result2 = getExact2();
    var conve = getSelectedValue(convert)

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";
    if(conve == 0) {
        div1.innerHTML = "Result"
        div2.innerHTML = result;
    } else if(conve == 1) {
        div1.innerHTML = "Result"
        div2.innerHTML = result2
    }
   


    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);