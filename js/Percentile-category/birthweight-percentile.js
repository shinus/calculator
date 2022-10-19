var gage = getElement("age_input_Id");
var dd_age = getElement("age_dd_Id");
var weight = getElement("weight_input_Id");
var dd_weight = getElement("weight_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calc-Btn");



// function onIt() {
//   // Default values in the code cannot be changed when editing the embedded code.
//   // Be careful!
//   .setDefault('showLines', 6);
// };

var years = [];
var DATA = [
  {
    name: 'a',
    uid: '494085080',
    values: {
      age: 24,
      P99: 820,
      P97: 786,
      P95: 768,
      P90: 741,
      P75: 695,
      P50: 644,
      P25: 593,
      P10: 547,
      P5: 520,
      P3: 502,
      P1: 468
    }
  },
  {
    name: 'b',
    uid: '2554895715',
    values: {
      age: 25,
      P99: 957,
      P97: 918,
      P95: 897,
      P90: 865,
      P75: 812,
      P50: 752,
      P25: 692,
      P10: 639,
      P5: 607,
      P3: 586,
      P1: 547
    }
  },
  {
    name: 'c',
    uid: '1853241055',
    values: {
      age: 26,
      P99: 1110,
      P97: 1064,
      P95: 1040,
      P90: 1003,
      P75: 941,
      P50: 872,
      P25: 803,
      P10: 741,
      P5: 703,
      P3: 679,
      P1: 634
    }
  },
  {
    name: 'd',
    uid: '886465022',
    values: {
      age: 27,
      P99: 1278,
      P97: 1225,
      P95: 1198,
      P90: 1155,
      P75: 1083,
      P50: 1004,
      P25: 924,
      P10: 853,
      P5: 810,
      P3: 782,
      P1: 730
    }
  },
  {
    name: 'e',
    uid: '2048162827',
    values: {
      age: 28,
      P99: 1461,
      P97: 1401,
      P95: 1369,
      P90: 1320,
      P75: 1238,
      P50: 1147,
      P25: 1057,
      P10: 975,
      P5: 926,
      P3: 894,
      P1: 834
    }
  },
  {
    name: 'f',
    uid: '3114079507',
    values: {
      age: 29,
      P99: 1658,
      P97: 1590,
      P95: 1554,
      P90: 1498,
      P75: 1405,
      P50: 1302,
      P25: 1199,
      P10: 1106,
      P5: 1051,
      P3: 1015,
      P1: 947
    }
  },
  {
    name: 'g',
    uid: '3784818754',
    values: {
      age: 30,
      P99: 1869,
      P97: 1792,
      P95: 1751,
      P90: 1689,
      P75: 1584,
      P50: 1468,
      P25: 1352,
      P10: 1247,
      P5: 1184,
      P3: 1144,
      P1: 1067
    }
  },
  {
    name: 'h',
    uid: '4156238480',
    values: {
      age: 31,
      P99: 2091,
      P97: 2005,
      P95: 1960,
      P90: 1890,
      P75: 1773,
      P50: 1643,
      P25: 1513,
      P10: 1395,
      P5: 1325,
      P3: 1280,
      P1: 1194
    }
  },
  {
    name: 'i',
    uid: '1428048041',
    values: {
      age: 32,
      P99: 2324,
      P97: 2228,
      P95: 2178,
      P90: 2100,
      P75: 1970,
      P50: 1825,
      P25: 1681,
      P10: 1551,
      P5: 1473,
      P3: 1422,
      P1: 1327
    }
  },
  {
    name: 'j',
    uid: '3721473067',
    values: {
      age: 33,
      P99: 2564,
      P97: 2459,
      P95: 2403,
      P90: 2317,
      P75: 2173,
      P50: 2014,
      P25: 1854,
      P10: 1711,
      P5: 1625,
      P3: 1569,
      P1: 1464
    }
  },
  {
    name: 'k',
    uid: '1536928297',
    values: {
      age: 34,
      P99: 2809,
      P97: 2694,
      P95: 2632,
      P90: 2538,
      P75: 2381,
      P50: 2206,
      P25: 2032,
      P10: 1874,
      P5: 1780,
      P3: 1719,
      P1: 1604
    }
  },
  {
    name: 'l',
    uid: '2375117060',
    values: {
      age: 35,
      P99: 3056,
      P97: 2930,
      P95: 2864,
      P90: 2761,
      P75: 2590,
      P50: 2400,
      P25: 2210,
      P10: 2039,
      P5: 1937,
      P3: 1870,
      P1: 1745
    }
  },
  {
    name: 'm',
    uid: '1512872223',
    values: {
      age: 36,
      P99: 3301,
      P97: 3165,
      P95: 3093,
      P90: 2983,
      P75: 2798,
      P50: 2593,
      P25: 2387,
      P10: 2203,
      P5: 2092,
      P3: 2020,
      P1: 1885
    }
  },
  {
    name: 'n',
    uid: '238797940',
    values: {
      age: 37,
      P99: 3540,
      P97: 3395,
      P95: 3318,
      P90: 3199,
      P75: 3001,
      P50: 2781,
      P25: 2561,
      P10: 2362,
      P5: 2244,
      P3: 2167,
      P1: 2021
    }
  },
  {
    name: 'o',
    uid: '3872153546',
    values: {
      age: 38,
      P99: 3770,
      P97: 3615,
      P95: 3533,
      P90: 3407,
      P75: 3196,
      P50: 2961,
      P25: 2727,
      P10: 2516,
      P5: 2390,
      P3: 2308,
      P1: 2153
    }
  },
  {
    name: 'p',
    uid: '3575366737',
    values: {
      age: 39,
      P99: 3987,
      P97: 3823,
      P95: 3736,
      P90: 3603,
      P75: 3380,
      P50: 3132,
      P25: 2884,
      P10: 2660,
      P5: 2527,
      P3: 2440,
      P1: 2276
    }
  },
  {
    name: 'q',
    uid: '1645491962',
    values: {
      age: 40,
      P99: 4186,
      P97: 4014,
      P95: 3923,
      P90: 3783,
      P75: 3549,
      P50: 3288,
      P25: 3028,
      P10: 2794,
      P5: 2653,
      P3: 2562,
      P1: 2390
    }
  },
  {
    name: 'r',
    uid: '3533087097',
    values: {
      age: 41,
      P99: 4365,
      P97: 4185,
      P95: 4090,
      P90: 3944,
      P75: 3700,
      P50: 3428,
      P25: 3157,
      P10: 2913,
      P5: 2766,
      P3: 2671,
      P1: 2492
    }
  }
];

var fifthPercentile = [];
var tenthPercentile = [];
var twentyFifthPercentile = [];
var fiftiethPercentile = [];
var seventyFifthPercentile = [];
var ninentiethPercentile = [];

for (var i = 0; i < DATA.length; i++) {
  years.push(DATA[i].values.age);
  fifthPercentile.push(DATA[i].values.P5);
  tenthPercentile.push(DATA[i].values.P10);
  twentyFifthPercentile.push(DATA[i].values.P25);
  fiftiethPercentile.push(DATA[i].values.P50);
  seventyFifthPercentile.push(DATA[i].values.P75);
  ninentiethPercentile.push(DATA[i].values.P90);
}
var yValues = [
  fifthPercentile,
  tenthPercentile,
  twentyFifthPercentile,
  fiftiethPercentile,
  seventyFifthPercentile,
  ninentiethPercentile
];
var colors = [1, 2, 3, 4, 7, 8, 9, 10, 11]; // avoid hard-to-see colours

var allDataChart = [];
for (var j = 0; j < yValues.length; j++) {
  var tempArray = [];
  for (var i = 0; i < DATA.length; i++) {
    tempArray.push([years[i], yValues[j][i]]);
  }
  allDataChart.push(tempArray);
}

// Create now all the labels (the should match up with colors)
var allLabels = ['weeks', '5th', '10th', '25th', '50th',,, '75th', '90th'];

// We will also create a maxi-table with all the percentile data
// for easier search and referencing
var allData = [];
for (var i = 0; i < DATA.length; i++) {
  allData.push([
    DATA[i].values.age,
    fifthPercentile[i],
    tenthPercentile[i],
    twentyFifthPercentile[i],
    fiftiethPercentile[i],
    seventyFifthPercentile[i],
    ninentiethPercentile[i]
  ]);
}
// var gage = getElement("age_input_Id");
// var dd_age = getElement("age_dd_Id");
// var weight = getElement("Weight_input_Id");
// var dd_weight = getElement("weight_dd_id");
// var output = getElement("result-section");
// var calcBtn = getElement("calc-Btn");

var unitsForWeight = [
  { name: "kilogram (kg)", value: "kg" },
  { name: "grams (g)", value: "g" },
  { name: "ounces (oz)", value: "oz" },
  { name: "pounds (lb)", value: "lb" },
  { name: "Stones (stone)", value: "stone" },
];

var yearVS = [
  
  {
    name: "days",
    value: 0,
  },
  {
    name: "weeks",
    value: 1,
  },
];


function init() {
  createDropDown(yearVS, dd_age)
  createDropDown(unitsForWeight, dd_weight);
 
}
init();

function getPercentile() {
 var age = Number(gage.value);
 var weight = Number(weight.value);
  var m,
    result = 0,
    take_row = [];
  if (age <= DATA[0].values.age && age > 0) {
    take_row = DATA[0].values;
  } else {
    for (m = 1; m <= DATA.length - 1; m++) {
      if (age <= DATA[m].values.age && age > DATA[m - 1].values.age) {
        {
          take_row = DATA[m].values;
          break;
        }
      } else if (age > DATA[DATA.length - 1].values.age) {
        take_row = DATA[DATA.length - 1].values;
        break;
      }
    }
  }

  if (weight <= take_row.P5) {
    result = (weight / take_row.P5) * 2 + 3;
  } else if (weight <= take_row.P10) {
    result = ((weight - take_row.P5) / (take_row.P10 - take_row.P5)) * 5 + 5;
  } else if (weight <= take_row.P25) {
    result =
      ((weight - take_row.P10) / (take_row.P25 - take_row.P10)) * 15 + 15;
  } else if (weight <= take_row.P50) {
    result =
      ((weight - take_row.P25) / (take_row.P50 - take_row.P25)) * 25 + 25;
  } else if (weight <= take_row.P75) {
    result =
      ((weight - take_row.P50) / (take_row.P75 - take_row.P50)) * 25 + 50;
  } else if (weight <= take_row.P90) {
    result =
      ((weight - take_row.P75) / (take_row.P90 - take_row.P75)) * 15 + 75;
  } else if (weight <= take_row.P95) {
    result =
      ((weight - take_row.P90) / (take_row.P95 - take_row.P90)) * 5 + 90;
  } else if (weight <= take_row.P97) {
    result =
      ((weight - take_row.P95) / (take_row.P97 - take_row.P95)) * 2 + 95;
  } else if (weight <= take_row.P99) {
    result =
      ((weight - take_row.P97) / (take_row.P99 - take_row.P97)) * 2 + 97;
  } else {
    result = 100;
  }
  return math.bignumber(result);
};

function displayResult() {
  // var percentile = .getNumberValue('percentile');
  // var weight = getSelectedValue('weight');
  var age = getSelectedValue('gage');
  // var showLines = getSelectedValue('showLines') + 1;
  // hideVariables('hidden', 'showLines');
  var chartTitle = 'Birthweight percentiles (grams vs. week)';
  if ((age > 40)&&(age <= 42)){
    age = 41;
  }
  
  var chartData = createPercentileChart(allDataChart, years, colors);
  var chartLabels = ['age', , , , , , , , , , , 'YOU'];


  for (var k = 0; k < chartData.length; k++) {
    chartData[k].push(); // empty values ensure single point (no line)
  }
  
  if (!isNaN(age)) {
    chartData[age - 24][chartLabels.length - 1] = weight; // Color constrasts with the lines
  }

  var i = 0;
  while (age >= years[i] && i < years.length) {
    i++;
  }
 var j = 1;
  while (allData[i-1][j] < weight && j < 7 ) {
    j++;
  }
  var userPercentile = allLabels[j] || allLabels[j + 1];

  var idx = colors[j];
  for (var t = -showLines; t < showLines - 2; t++) {
    idx = colors[j + t];
    if (allLabels[idx]) {
      chartLabels[idx] = allLabels[idx];
    }
    // .addHtml(allLabels[idx]);
  }
  
  // Finally we can simply print our chart!
  if (!isNaN(percentile)) {
   /* .addHtml('You are in the ' + userPercentile + ' percentile!', {afterVariable: 'hidden'});*/
   if (chartData !== undefined && chartData.length > 0) {
      addChart({
        type: 'line',
        labels: chartLabels,
        data: chartData,
        title: chartTitle,
        afterVariable: 'hidden',
        alwaysShown: true
      });
    }
  }
addHtml('This tool is based on WHO\'s standards.');

};


function createPercentileChart(allvaluesY, xAxis, colors) {
  var minX = xAxis[0];
  var maxX = xAxis[xAxis.length - 1];
  var xPoints = xAxis.length === 3 ? xAxis[1] : maxX - minX;
  var allLines = linearInterpolation(allvaluesY[0], minX, maxX, xPoints);
  for (var j = 1; j < allvaluesY.length; j++) {
    var tempData = linearInterpolation(allvaluesY[j], minX, maxX, xPoints);
    tempData = changeColor(tempData, colors[j]);
    allLines = combineData(allLines, tempData);
  }
  return allLines;
}

function linespace(nPoints, initValue, endValue) {
  if (initValue == undefined) {
    initValue = 0;
  }
  if (endValue == undefined) {
    endValue = nPoints;
  }
  if (endValue < initValue) {
    var temp = endValue;
    endValue = initValue;
    initValue = temp;
  }
  var myArray = [],
    stepSize = (endValue - initValue) / nPoints;
  for (var i = initValue; i <= endValue; i += stepSize) {
    myArray.push(i);
  }
  return myArray;
}

function linearInterpolation(inputData, startValue, finalValue, nPoints) {
  // Convert to 1D arrays
  var oldX = [];
  var oldY = [];
  if (isNaN(inputData[0][0]) && isNaN(inputData[inputData.length - 1][0])) {
    return inputData;
  }
  var i = 2;
  while (i < inputData.length / 2 && (isNaN(finalValue) || isNaN(startValue))) {
    finalValue = isNaN(finalValue)
      ? inputData[inputData.length - i][0]
      : finalValue;
    startValue = isNaN(startValue) ? inputData[i][0] : startValue;
    i++;
  }

  for (i = 0; i < inputData.length; i++) {
    if (inputData[i][0] <= finalValue) {
      oldX.push(inputData[i][0]);
      oldY.push(inputData[i][1]);
    }
  }
  if (finalValue === undefined) {
    finalValue = oldX[oldX.length - 1];
    nPoints = 100; //oldX.length;
  } else if (nPoints === undefined || nPoints <= 0) {
    nPoints = 100; //oldX.length;
  }

  var newY = [];
  var newX = linespace(nPoints, startValue, finalValue);
  var searching = false;
  i = 0;

  for (var j = 0; j < newX.length; j++) {
    newY.push(NaN);
    searching = true;
    i = 0;
    while (searching && i < oldX.length) {
      if (mathjs.round(newX[j], 2) == mathjs.round(oldX[i], 2)) {
        newY[j] = mathjs.round(oldY[i], 3);
        newX[j] = mathjs.round(newX[j], 1);
        searching = false;
      } else if (newX[j] > oldX[i] && newX[j] < oldX[i + 1]) {
        newY[j] = mathjs.round(
          oldY[i] +
            (newX[j] - oldX[i]) *
              ((oldY[i + 1] - oldY[i]) / (oldX[i + 1] - oldX[i])),
          3
        );
        newX[j] = mathjs.round(newX[j], 1);
        searching = false;
      }
      i++;
    }
  }
  var outputData = [];
  for (i = 0; i < newX.length; i++) {
    outputData.push([newX[i], newY[i]]);
  }
  return outputData;
}

/*
 * Combine data from two datasets into a single  array
 * Arrays must be provided in chart-ready format
 * Supports multiple graphs per dataSet
 * If data exist in the same position for A and B, A is always kept and B will be erased
 * X-axis will be taken from dataSetA (first input array)
 *
 * INPUTS: array (chart-ready dataSet)
 *         array (chart-ready dataSet)
 *
 * OUTPUT: array (chart-ready combined dataset)
 */
function combineData(dataSetA, dataSetB) {
  if (dataSetA === undefined) {
    return dataSetB;
  }
  if (dataSetB === undefined) {
    return dataSetA;
  }
  var dataLength = dataSetA.length;
  if (dataLength !== dataSetB.length) {
    return [];
  }
  var combinedData = [];
  for (var i = 0; i < dataLength; i++) {
    var dataPoint = [];
    for (var j = 0; j < 36; j++) {
      dataPoint.push(dataSetA[i][j] || dataSetB[i][j]);
    }
    combinedData.push(dataPoint);
  }
  return combinedData;
}

/*
 * =Changes colour of chart-formatted array from a given position=
 * If no starting position is given, the whole array is changed
 * Array must be in chart-ready format
 * If starting position is not valid, zero is used instead
 *
 * INPUTS: array (chart-ready original data set)
 * 				 number (position indicating the desired colour)
 * 				 number (position in the data set from which to change colour)
 *
 * OUTPUT: array (chart-ready data set with new colours)
 */
function changeColor(ogChart, pos, start) {
  if (start === undefined) {
    start = 0;
  }
  if (start >= ogChart.length) {
    start = 0;
  }
  var output = [];
  var ogPos = 1;
  while (ogChart[start][ogPos] == null) {
    ogPos++;
  }
  for (var i = 0; i < ogChart.length; i++) {
    if (i < start) {
      output[i] = ogChart[i];
    } else {
      output.push([ogChart[i][0], , , , , , , , , , ,]);
      output[i][pos] = ogChart[i][ogPos];
    }
  }
  return output;
}
console.log(displayResult);

calcBtn.addEventListener("click", displayResult);
