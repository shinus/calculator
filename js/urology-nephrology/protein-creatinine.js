var protein = getElement("protein_input_Id");
var creatinine = getElement("creatinine_input_Id");
var dd_creatinine = getElement("creatinine_dd_Id");
var ratio = getElement("ratio_input_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");



var mili = [
    { name: "miligrams per decliter mg/dl", value: 1 },
    { name: "micromiles per liter mol/l", value: 88.42 },
];


function init() {
    createDropDown(mili, dd_creatinine);
}

init();


function getExact() {
  var aprotein = Number(protein.value);
  var acreatinine = Number(creatinine.value);
  var creatinine_dd = getSelectedValue(dd_creatinine);
  var rat = Number(ratio.value);

    var result = 0;


    result =(aprotein / acreatinine)

    console.log(result);
    return math.bignumber(result);

};

function showResult() {
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    // output.innerHTML = "";
    div1.innerHTML = "" +
       
        
      ( ratio.value = result.toFixed(4)) +
       "g/day" ;

    var percentile = result;

    // output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener("click", showResult);