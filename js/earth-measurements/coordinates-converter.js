var coordinates = getElement("coordinates_dd_Id");
var letters = getElement("letters_dd_Id");
var things = getElement("things_input_Id");
var north = getElement("north_dd_Id");
var still = getElement("still_input_Id");
var east = getElement("east_dd_Id");
var lang1 = getElement("la2_input_Id");
var lang2 = getElement("la3_input_Id");
var long1 = getElement("lo2_input_Id");
var long2 = getElement("lo3_input_Id");
var row9 = getElement("calculator-row-9")
var row10 = getElement("calculator-row-10")
var row11 = getElement("calculator-row-11");
var row14 = getElement("calculator-row-14")
var row15 = getElement("calculator-row-15")
var row16 = getElement("calculator-row-16");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "coordinates", values: coordinates },
    { name: "letters", values: letters },
    { name: "things", values: things },
    { name: "north", values: north },
    { name: "still", values: still },
    { name: "east", values: east },
]

var neUnit = [
    {
        name: "DD",
        value: 0
    },
    {
        name: "DMS",
        value: 1
    },
    {
        name: "DDM",
        value: 2
    }
];

var leUnit = [
    {
        name: "Yes",
        value: 0
    },
    {
        name: "No",
        value: 1
    }
]

var noUnit = [
    {
        name: "N (North)",
        value: 0
    },
    {
        name: "S (South)",
        value: 1
    }
]

var eaUnit = [
    {
        name: "E (East)",
        value: 0
    },
    {
        name: "W (West)",
        value: 1
    }
]

function init() {
    createDropDown(neUnit, coordinates)
    createDropDown(leUnit, letters)
    createDropDown(noUnit, north)
    createDropDown(eaUnit, east)
    $("#calculator-row-9").hide();
    $("#calculator-row-10").hide();
    $("#calculator-row-14").hide();
    $("#calculator-row-15").hide();
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();

function showVariables() {
    if (Number(getSelectedValue(coordinates)) == 0) {
        $("#calculator-row-8").show();
        $("#calculator-row-13").show();
        $("#calculator-row-9").hide();
        $("#calculator-row-10").hide();
        $("#calculator-row-14").hide();
        $("#calculator-row-15").hide();
    } else if (Number(getSelectedValue(coordinates)) == 1) {
        $("#calculator-row-8").show();
        $("#calculator-row-9").show();
        $("#calculator-row-10").show();
        $("#calculator-row-13").show();
        $("#calculator-row-14").show();
        $("#calculator-row-15").show();
    } else if (Number(getSelectedValue(coordinates)) == 2) {
        $("#calculator-row-8").show();
        $("#calculator-row-9").show();
        $("#calculator-row-13").show();
        $("#calculator-row-14").show();
        $("#calculator-row-10").hide();
        $("#calculator-row-15").hide();
    }
}

coordinates.addEventListener("change", showVariables);

function showVariables2() {
    var lett = Number(getSelectedValue(letters));
  
    if (lett == 0) {
      $("#calculator-row-11").show();
      $("#calculator-row-16").show();
    } else if (lett == 1) {
      $("#calculator-row-11").hide();
      $("#calculator-row-16").hide();
    }
  }
  
  letters.addEventListener("change", () => {
    showVariables2();
  });



function showResult() {
    resultPage2(queryParams)
    var a = Number(things.value);
    var b = Number(getSelectedValue(north));
    var c = Number(still.value);
    var d = Number(getSelectedValue(east));
    var e = Number(lang1.value);
    var f = Number(lang2.value);
    var g = Number(long1.value);
    var h = Number(long2.value);


    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");


    output.innerHTML = " ";

    div1.innerHTML = "Result";
    div2.innerHTML = '<b>Your input:</b> ' + a + " " + e + " " + f + " " + b + " , " +  c + " " + g + " " + h + " " + d;
    div3.innerHTML = '<b> Your coordinates in other formats:</b> '
    div4.innerHTML = '<b>DD: </b> ' + a + " " + c;
    div5.innerHTML = '<b>DMS: </b> ' + a + " " + e + " " + f + " " + c + " " + g + " " + h;
    div6.innerHTML = '<b>DDM: </b> ' + a + " " + e + " " + b + " " + c + " " + g + " " + d;

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
};

calcBtn.addEventListener("click", showResult);


