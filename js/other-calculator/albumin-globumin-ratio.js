var albumin = getElement("Albumin_input_Id");
var albumin_dd = getElement("Albumin_dd_Id");
var proteins = getElement("proteins_input_Id");
var proteins_dd = getElement("proteins_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "albumin", values: albumin },
    { name: "albuminUnit", values: albumin_dd },
    { name: "proteins", values: proteins },
    { name: "proteinsUnit", values: proteins_dd },
]

var gdUnit = [
    {
        name: "g/dL",
        value: 0
    },
    {
        name: "g/L",
        value: 1
    },
];

function init() {
    createDropDown(gdUnit, albumin_dd)
    createDropDown(gdUnit, proteins_dd)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();


function getExact() {
    var albu = Number(albumin.value)
    var pro = Number(proteins.value)

    var result = 0;

    result = albu / (pro - albu);

    console.log(result);
    return result;

};

function validateAge() {
    var dil = Number(albumin.value)
    var msg;
    var parentId = "calculator-row-1";
    var elementName = "bunError";
   
    if (dil > 15) {
      msg =
        "Your albumin level cannot exceed 15 g/dL.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }

function validateAge2() {
    var dil = Number(proteins.value)
    var dil2 = Number(albumin.value)
    var msg;
    var parentId = "calculator-row-2";
    var elementName = "bunError";
   
    if (dil > 30) {
      msg =
        "Your proteins level cannot exceed 30 g/dL.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }


function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());
    var albu = Number(albumin.value)
    var pro = Number(proteins.value)

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = "Globulin  " + (pro - albu ) + " g/dL"
    div2.innerHTML = "A/G ratio " +  result.toFixed(4) ;

    if(percentile<1.2){
        div3.innerHTML = 'Your A/G ratio seems to be <b>too low</b>.';
        div4.innerHTML = '💡 A low A/G ratio might be indicative of:<ul><li><b>Liver disease</b> (underproduction of albumin);</li><li><b>Autoimmune disease</b> (overproduction of globulin);</li><li><b>Myeloma</b> (overproduction of globulin); or</li><li><b>Kidney disease</b> (loss of albumin).</li></ul>';
        } else if (percentile>2.2 ){
        div3.innerHTML = 'Your A/G ratio seems to be <b>too high</b>. ';
        div4.innerHTML = '💡 A high A/G ratio might be indicative of:<ul><li><b>Dehydration</b> (high levels of albumin);</li><li><b>Leukemia</b> (low levels of globulin); or</li><li><b>Genetic disorders</b> (underproduction of globulin).</li></ul>';
        } else if(percentile>=1.2 && percentile<=2.2) {
            div3.innerHTML = '✅ Your A/G ratio seems to be <b>within normal range</b>. ';
        }
 
    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
};

albumin.addEventListener("input", validateAge);
proteins.addEventListener("input", validateAge2);
calcBtn.addEventListener("click", showResult);

