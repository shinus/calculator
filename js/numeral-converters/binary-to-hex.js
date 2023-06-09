var Binary = document.getElementById("Binary_input_id");
var output = document.getElementById("result-section");
var calcBtn = document.getElementById("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "Binary", values: Binary },
];

function init() {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function getExact() {
    var bin = Number(Binary.value)
    if (bin.length < 16) {
        // Pad the binary number with leading zeros
        bin = '0'.repeat(16 - bin.length) + bin;
      }
    
      // Convert binary to decimal
      const decimal = parseInt(bin, 2);
    
      // Convert decimal to hexadecimal
      const hexadecimal = decimal.toString(16);
    
      return hexadecimal;
}


function showResult() {
    resultPage2(queryParams);
    var hexadecimal = getExact();
    var bina = Number(Binary.value)

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    output.innerHTML = "";

    div1.innerHTML = " <b> Binary to hexadecimal conversion </b>"
    div2.innerHTML = "Binary " + " " + bina;
    div3.innerHTML = "Hexadecimal " + " " + hexadecimal.toUpperCase();

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
}

calcBtn.addEventListener("click", showResult);