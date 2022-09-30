var calcBtn = getElement("calcBtn");
var output = getElement("result-section");
var unitsForCm = [
  { name: "cm", value: 1 },
  { name: "inches", value: 2.54 },
  { name: "feet", value: 30.48 },
  { name: "m", value: 100 },
];

var unitsForM = [
  { name: "cm", value: 100 },
  { name: "inches", value: 39.37 },
  { name: "feet", value: 3.281 },
  { name: "m", value: 1 },
];

function getElement(id) {
  var element = document.getElementById(id);
  return element;
}

function getSelectedValue(element) {
  var value = element.options[element.selectedIndex].value;
  return value;
}

function createDropDown(arr, element) {
  element.innerHTML = "";
  for (var i = 0; i < arr.length; i++) {
    var option = document.createElement("option");
    option.text = arr[i].name;
    option.value = arr[i].value;
    element.appendChild(option);
  }
}

var unitsForWeight = [
  { name: "kilogram (kg)", value: "kg" },
  { name: "grams (g)", value: "g" },
  { name: "ounces (oz)", value: "oz" },
  { name: "pounds (lb)", value: "lb" },
  { name: "Stones (stone)", value: "stone" },
];

var unitsForLength = [
  { name: "inch", value: "inch" },
  { name: "cm", value: "cm" },
  { name: "feet", value: "ft" },
  { name: "m", value: "m" },
];

var genderVS = [
  {
    name: "Male",
    value: 0,
  },
  {
    name: "Female",
    value: 1,
  },
];

var unitVS = [
  {
    name: "meters per second",
    value: "m/s",
  },
  {
    name: "kilmeters per hour",
    value: "km/h",
  },
  {
    name: "feet per second",
    value: "ft/s",
  },
  {
    name: "miles per hour",
    value: "mi/hr",
  },
  {
    name: "centimeters per second",
    value: "cm/s",
  },
];

var energyUnits = [
  {
    name: "Hertz",
    value: "(Hz)",
  },
  {
    name: "KiloHertz",
    value: "kHz",
  },
  {
    name: "Megahertz(MHz)",
    value: "mHz",
  },
  {
    name: "gigahertz(GHz)",
    value: "mHz",
  },
  {
    name: "terahertz(GHz)",
    value: "tHz",
  },
];

function getHeightInM(unit, value) {
  let exp = value + " " + unit + " " + "to" + " " + "m";
  var nValue = math.evaluate(exp).toString();
  return parseFloat(nValue);
}
function getHeightInCm(unit, value) {
  let exp = value + " " + unit + " " + "to" + " " + "cm";
  var nValue = math.evaluate(exp).toString();
  return parseFloat(nValue);
}
function getWeightInKg(unit, value) {
  let exp = value + " " + unit + " " + "to" + " " + "kg";
  var nValue = math.evaluate(exp).toString();
  return parseFloat(nValue);
}

function getHeightInInches(unit, value) {
  let exp = value + " " + unit + " " + "to" + " " + "inch";
  var nValue = math.evaluate(exp).toString();
  return parseFloat(nValue);
}

function removeErrorDiv(element) {
  element.remove();
}
function removeError(elementName) {
  var ele = getElement(elementName);
  if (ele != null) ele.remove();
}
var PAL = [
  { name: "Little/no exercise (sedentary lifestyle)", value: 1.2 },
  { name: "Light exercise 1-2 times a week", value: 1.375 },
  { name: "Moderate exercise 2-3 times a week", value: 1.55 },
  { name: "Hard exercise 4-5 times a week", value: 1.725 },
  { name: "Physical job or hard exercise 6-7 times/week", value: 1.9 },
  { name: "Professional athlete", value: 2.3 },
];

function addField(parentElement, name, inputId, ddId, ddArray, type) {
  var form = getElement("calculator-form");
  var secondDiv = document.createElement("div");
  secondDiv.innerHTML = "";
  // 0 for input box with select
  if (type == 0) {
    secondDiv.innerHTML = `
<div class="row" id="dynamic-row">
<div class="col-md-12">
  <label for="lbm">${name}</label>
</div>
<div class="col-md-12">
 <div class="d-flex calculator-inputs"><input class="form-control" type="text" name="" id=${inputId}>
 <select class="form-control" name="" id=${ddId}></select></div>
</div>
</div>`;
  }
  // 1 for input box only
  else if (type == 1) {
    secondDiv.innerHTML = `
<div class="row" id="dynamic-row">
<div class="col-md-12">
  <label for="lbm">${name}</label>
</div>
<div class="col-md-12">
 <div class="d-flex calculator-inputs"><input class="form-control" type="text" name="" id=${inputId}>
</div>
</div>`;
  }
  // 2 for select box only
  else if (type == 2) {
    secondDiv.innerHTML = `
    <div class="row" id="dynamic-row">
    <div class="col-md-12">
      <label for="lbm">${name}</label>
    </div>
    <div class="col-md-12">
     <div class="d-flex calculator-inputs">
     <select class="form-control" name="" id=${ddId}></select></div>
    </div>
    </div>`;
  }
  parentElement.after(secondDiv);
  secondDiv.style.display = "block";
  var ele = getElement(ddId);
  createDropDown(ddArray, ele);
}

function showError(parentId, elementName, msg) {
  var parentElement = getElement(parentId);
  var div;
  var divElement = getElement(elementName);
  if (divElement == null) {
    div = document.createElement("div");
    div.id = elementName;
  } else {
    div = divElement;
  }
  div.innerHTML = "";
  div.innerHTML = "<p style=color:red>" + msg + "</p>";
  parentElement.after(div);
}

function getBmr(ageValue) {
  var wgh = inputWeight.value;
  var wghUnit = getSelectedValue(wUnit);
  wgh = getWeightInKg(wghUnit, wgh);

  var height = inputHeight.value;
  var heightUnit = getSelectedValue(hUnit);
  height = getHeightInCm(heightUnit, height);

  var age = Number(ageValue);
  let bmr;
  if (getSelectedValue(gender) == 0) {
    bmr = 10 * wgh + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * wgh + 6.25 * height - 5 * age - 161;
  }
  return bmr;
}
function calcBmr(age, weight, height) {
  var wgh = weight;
  let bmr;
  if (getSelectedValue(gender) == 0) {
    bmr = 10 * wgh + 6.25 * height - 5 * age + 5;
  } else {
    bmr = 10 * wgh + 6.25 * height - 5 * age - 161;
  }
  return bmr;
}

function calcTee(bmr) {
  let nActivity = getSelectedValue(activity);
  let tee = bmr * nActivity;
  return tee;
}

function addTable(tableData, tableHeadings) {
  var table = document.createElement("table");
  var tableBody = document.createElement("tbody");

  tableData.forEach(function (rowData) {
    var row = document.createElement("tr");

    rowData.forEach(function (cellData) {
      var cell = document.createElement("td");
      cell.appendChild(document.createTextNode(cellData));
      row.appendChild(cell);
    });
    tableBody.appendChild(row);
  });
  var thead = document.createElement("thead");
  table.appendChild(thead);
  table.appendChild(tableBody);
  tableHeadings.map((item) => {
    thead
      .appendChild(document.createElement("th"))
      .appendChild(document.createTextNode(item));
  });
  return table;
}

function showInfo(parentElement, info, id) {
  var infoElement = getElement(id);
  var div;
  if (infoElement != null) {
    div = infoElement;
  } else {
    div = document.createElement("div");
    div.id = id;
  }

  div.innerHTML = "";
  div.innerHTML = info;
  parentElement.after(div);
}

function calcBmi(heightValue, weightValue) {
  let nHeight = Number(Math.pow(heightValue, 2));
  let nBmi = Number(weightValue) / nHeight;
  return nBmi.toFixed(2);
}

function addChart(chartType, labels, data, name) {
  const ctx = document.createElement("canvas");
  ctx.width = 400;
  ctx.height = 400;
  const myChart = new Chart(ctx, {
    type: chartType,
    data: {
      labels: labels,
      datasets: [
        {
          data,
          borderWidth: 1,
          backgroundColor: "red",
          borderColor: "black",
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: name,
        position: "bottom",
      },
      legend: {
        display: false,
      },
    },
  });
  return ctx;
}
