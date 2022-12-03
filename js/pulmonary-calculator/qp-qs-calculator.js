var rvo = getElement("RVOT_input_Id");
var rvo_dd = getElement("RVOT_dd_Id");
var vt = getElement("VTI_input_Id");
var vt_dd = getElement("VTI_dd_Id");
var lv = getElement("LVOT_input_Id");
var lv_dd = getElement("LVOT_dd_Id");
var lvt = getElement("LVTI_input_Id")
var lvt_dd = getElement("LVTI_dd_Id")
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "RVOT", values: rvo },
  { name: "RVOTUnit", values: rvo_dd },
  { name: "VTI", values: vt },
  { name: "VTIUnit", values: vt_dd },
  { name: "LVOT", values: lv },
  { name: "LVOTUnit", values: lv_dd },
  { name: "LVIT", values: lvt },
  { name: "LVITUnit", values: lvt_dd },
];

var faUnit = [
    {
        name: "mm",
        value: 0,
    },
    {
        name: "cm",
        value: 1,
    },
];

var cmUnit = [
    {
        name: "cm",
        value: 0,
    },
    {
        name: "mm",
        value: 1,
    },
];

function init() {
    createDropDown(faUnit, rvo_dd)
    createDropDown(cmUnit, vt_dd)
    createDropDown(faUnit, lv_dd)
    createDropDown(cmUnit, lvt_dd)
}

init()

function getExact() {
    var RVOT = Number(rvo.value)
    var VTI = Number(vt.value)
    var LVOT = Number(lv.value)
    var LVIT = Number(lvt.value)
    var pi = 3.14;
    var ab = (RVOT / 2);
    var ac = (LVOT / 2);


    var result, result2, result3 = 0;
    
    result = VTI * pi * math.pow(ab, 2) ;
    result2 = LVIT * pi * math.pow(ac , 2) ;

    result3 = result / result2;


    console.log(result, result2, result3);
    return math.bignumber(result3)
}

function showResult() {
    resultPage2(queryParams)

    var result3 = Number(getExact())

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    

   div1.innerHTML = "Pulmonary-systemic shunt ratio (Qp/Qs)";
   div2.innerHTML = "Qp/Qs " + "  \xa0\xa0\xa0\xa0\xa0\xa0 <b> " +  result3.toFixed(2) + " </b>";

    output.append(div1);
    output.append(div2);
}

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  };