var age = getElement("Age_input_Id");
var gender_dd = getElement("Sex_dd_Id");
var emph = getElement("Emphysema_dd_Id");
var hist = getElement("history_dd_Id");
var spicu = getElement("Spiculation_dd_Id");
var upper = getElement("Upper_dd_Id")
var counts = getElement("count_input_Id")
var size = getElement("size_input_Id")
var size_dd = getElement("size_dd_Id")
var type_dd = getElement("type_dd_Id")
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "age", values: age },
  { name: "genderUnit", values: gender_dd },
  { name: "emphysema", values: emph },
  { name: "history", values: hist },
  { name: "spiculation", values: spicu },
  { name: "upper", values: upper },
  { name: "count", values: counts },
  { name: "size", values: size },
  { name: "sizeUnit", values: size_dd },
  { name: "typeUnit", values: type_dd },
];

var gUnit = [
    {
        name: "Female",
        value: 0,
    },
    {
        name: "Male",
        value: 1,
    },
];

var ChUnit = [
    {
        name: "No",
        value: 0,
    },
    {
        name: "Yes",
        value: 1,
    },
];

var mmUnit = [
    {
        name: "mm",
        value: 0,
    },
    {
        name: "cm",
        value: 1,
    },
    {
        name: "in",
        value: 2,
    },
];

var NoUnit = [
    {
        name: "solid",
        value: 0,
    },
    {
        name: "partially solid",
        value: 1,
    },
    {
        name: "Nonsolid or groung-glasss",
        value: 2,
    },
];

function init() {
    createDropDown(gUnit, gender_dd)
    createDropDown(ChUnit, emph)
    createDropDown(ChUnit, hist)
    createDropDown(ChUnit, spicu)
    createDropDown(ChUnit, upper)
    createDropDown(mmUnit, size_dd)
    createDropDown(NoUnit, type_dd)
}

init()

function getExact() {
    var ages = Number(age.value)
    var gender = Number(getSelectedValue(gender_dd))
    var Emphysema = Number(getSelectedValue(emph))
    var history = Number(getSelectedValue(hist))
    var Spiculation = Number(getSelectedValue(spicu))
    var UppeR = Number(getSelectedValue(upper))
    var counting = Number(counts.value)
    var sizes = Number(size.value)
    var sizerr = Number(getSelectedValue(size_dd))
    var typess = Number(getSelectedValue(type_dd))
    var a = 0.0287 * (ages - 62)
    var b = math.pow(sizes / 10, -0.5)
    var c = (0.0824 * (counting - 4))
    var d = (Spiculation - 6.7892)
    var e = (5.3854 * (b))  - 1.58113883

    var result, result2, result3, result4 = 0;
    
    result = a + gender + history + Emphysema - e + typess + UppeR - c + d;

    result2 = 1 ;

    result3 = 1;

    result4 = 1;

    console.log(result, result2, result3, result4);
    return [result, result2, result3, result4]
}

function showResult() {
    resultPage2(queryParams)

    var [result, result2, result3, result4] = getExact()

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");

    output.innerHTML = "";
    

   div1.innerHTML = "Lung capacities";
   div2.innerHTML = "Total lung capacity (TLC) " + "  \xa0\xa0\xa0\xa0\xa0\xa0 <b> " +  result.toFixed(4) + "liters </b>";
   div3.innerHTML = "Vital capacity (VC) " + " \xa0\xa0\xa0\xa0\xa0\xa0 <b>" + result2.toFixed(0) + "liters </b>";
   div4.innerHTML = "Functional residual capacity (FRC) " + " \xa0\xa0\xa0\xa0\xa0\xa0 <b>" + result3.toFixed(0) + "liters </b>";
   div5.innerHTML = "Inspiratory capacity (IC) " + " \xa0\xa0\xa0\xa0\xa0\xa0 <b>" + result4.toFixed(0) + "liters </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
}

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
      setParamValues(queryParams);
      showResult();
    }
  };