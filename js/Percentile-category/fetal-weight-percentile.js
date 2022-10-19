
/* 
 * Initial value for showcasing utility
 * Default values in the code cannot be changed when editing the embedded code.
 * Be careful!
 */
omni.onInit (function (ctx) {
  // Default values in the code cannot be changed when editing the embedded code.
  // Be careful!
  ctx.setDefault("sex", 2);
  ctx.bindValueSelect(sex_VS, 'sex');
  
  ctx.setDefault ('AC', 154);
  ctx.setDefault ('HC', 180);
  ctx.setDefault ('BPD', 56.2);
  ctx.setDefault ('FL', 30);
  ctx.setDefault ('age', 20);
  ctx.setDefault ('showLines', 7);
  //*/
});

/*
 * STEP: 1
 * ============== MOST IMPORTANT PART ==================
 * Create your percentile data (few points are okay)
 */

/*
 * 1.1) Raw data
 */

// x-values are common for all percentile lines
// In my data they are the upper limit of the age group

//years are not really years - age is given in WEEKS 
var weeks = [14, 15, 16, 17, 18, 19, 20, 21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40];


//2.5, 10 , 25, 50, 75,90, 97.5

// these are my y-values (BMI for each percentile; position = age)
// twentyFifthPercentile[3] = maximum weight in the 25th percentile for weeks 16-17

//unknown sex
var twoFifthPercentile = [70,89,113,141,174,214,260,314,375,445,523,611,707,813,929,1053,1185,1326,1473,1626,1785,1948,2113,2280,2446,2612,2775];
var tenthPercentile = [78,99,124,155,192,235,286,345,412,489,576,652,758,876,1004,1145,1294,1453,1621,1794,1973,2154,2335,2513,2686,2851,3004]; 
var twentyFifthPercentile = [83,106,133,166,206,252,307,370,443,525,618,723,838,964,1102,1251,1410,1579,1757,1942,2134,2330,2531,2733,2935,3135,3333];
var fiftiethPercentile = [90,114,144,179,222,272,330,398,476,565,665,778,902,1039,1189,1350,1523,1707,1901,2103,2312,2527,2745,2966,3186,3403,3617];
var seventyFifthPercentile = [98,124,155,193,239,292,355,428,512,608,715,836,971,1118,1279,1453,1640,1838,2047,2266,2492,2723,2959,3195,3432,3664,3892];
var ninentiethPercentile = [104,132,166,207,255,313,380,458,548,650,765,918,1068,1234,1416,1613,1824,2049,2285,2530,2781,3036,3291,3543,3786,4019,4234];
var ninentiethSevenPercentile = [113,144,181,225,278,340,413,497,595,705,830,970,1125,1295,1481,1682,1897,2126,2367,2619,2880,3148,3422,3697,3973,4247,4515];

var yValues = [twoFifthPercentile,
               tenthPercentile,
               twentyFifthPercentile,
               fiftiethPercentile,
               seventyFifthPercentile,
               ninentiethPercentile,
               ninentiethSevenPercentile

              ];
//girls
var twoFifthPercentileG = [71,90,113,140, 173,212,257,310,370,438,514, 600,693, 796,908,1028,1156,1291,1434, 1584,1739,1901, 2068,2240,2418,2602, 2792];
var tenthPercentileG = [77,   97,   122,   152,   188,   231,   281,   339,   405,   481,   567,   663,   769,   886,   1013,   1150,   1296,   1451,   1614,   1783,   1957,   2135,   2314,   2493,   2670,   2843,   3010]; 
var twentyFifthPercentileG = [82, 104, 131, 164, 202, 248, 302, 364, 435, 516, 608, 710, 823, 948 ,1083 ,1230 ,1386 ,1553 ,1728 ,1911 ,2101 ,2296 ,2494 ,2695 ,2896 ,3096 ,3294];
var fiftiethPercentileG = [89, 113, 141, 176, 217, 266, 322, 388, 464, 551, 649, 758, 880,1014,1160,1319,1489,1670,1861,2060,2268,2481,2698,2917,3136,3354,3567];
var seventyFifthPercentileG = [96, 121, 152, 189, 233, 285, 346, 417, 499, 592, 697, 815, 946,1090,1247,1418,1601,1796,2002,2217,2440,2669,2902,3138,3373,3605,3832];
var ninentiethPercentileG = [102, 129, 162, 202, 248, 304, 369, 444, 530, 629, 740, 865, 1003, 1156, 1323, 1505, 1699, 1907, 2127, 2358, 2598, 2846, 3099, 3357, 3616, 3875, 4131];
var ninentiethSevenPercentileG = [112, 141, 177, 220,271, 331,401, 483, 576, 683, 804, 940,1091, 1257, 1440, 1637,1850, 2076, 2315,2564,2821,3083, 3346,3608,3863, 4107, 4336];

var yValuesG = [twoFifthPercentileG,
                tenthPercentileG,
                twentyFifthPercentileG,
                fiftiethPercentileG,
                seventyFifthPercentileG,
                ninentiethPercentileG,
                ninentiethSevenPercentileG
               ];
//boys
var twoFifthPercentileB = [71,91,115, 144,178,219,266, 321,384, 455,536, 625, 724, 832, 949, 1075, 1210, 1352, 1502, 1657, 1816, 1979,2142,2306,2466,2622,2771];
var tenthPercentileB = [79, 100, 127, 158, 196, 241, 293, 354, 424, 503, 592, 692, 803, 924, 1055, 1197, 1349, 1509, 1677, 1852, 2032, 2217, 2404, 2591, 2778, 2962, 3142]; 
var twentyFifthPercentileB = [84, 107, 136, 170, 210, 258, 314, 380, 454, 539, 635, 742, 860, 989, 1129, 1281, 1442, 1613, 1793, 1980, 2174, 2372, 2574, 2777, 2981, 3183, 3382];
var fiftiethPercentileB = [92, 116, 146, 183, 226, 277, 337, 407, 487, 578, 681, 795, 923, 1063, 1215, 1379, 1555, 1741, 1937, 2140, 2350, 2565, 2783, 3001, 3218, 3432, 3639];
var seventyFifthPercentileB = [99, 126, 158, 197, 243, 298, 362, 436, 522, 619, 730, 853, 990, 1141, 1305, 1482, 1672, 1874, 2085, 2306, 2534, 2767, 3002, 3238, 3472, 3701, 3923];
var ninentiethPercentileB = [105, 134, 169, 210, 260, 320, 389, 469, 561, 666, 785, 917, 1063, 1224, 1399, 1587, 1788, 2000, 2224, 2456, 2694, 2938, 3185, 3432, 3676, 3916, 4149];
var ninentiethSevenPercentileB = [116,147,184,228,281,344,418,504,603,715,843, 986,1145, 1320,1511,1717,1938,2173,2419,2676,2942,3214,3490,3769,4047,4323,4594];
var yValuesB = [twoFifthPercentileB,
                tenthPercentileB,
                twentyFifthPercentileB,
                fiftiethPercentileB,
                seventyFifthPercentileB,
                ninentiethPercentileB,
                ninentiethSevenPercentileB
               ];
var colors = [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12]; // avoid hard-to-see colours

/*
 * 1.2) Format data for manipulation
 */

// First create an array of chart-ready arrays (each is a percentile line)
// No colors or combinations yet => will happen inside onResult
//unknown gender
var allDataChart = [];
for (var j=0; j < yValues.length; j++){  
  var tempArray = [];
  for (var i=0; i < weeks.length; i++){
    tempArray.push([weeks[i], yValues[j][i]]);
  }
  allDataChart.push(tempArray);
}
//girls
var girlsDataChart = [];
for (var j=0; j < yValuesG.length; j++){  
  var tempArray = [];
  for (var i=0; i < weeks.length; i++){
    tempArray.push([weeks[i], yValuesG[j][i]]);
  }
  girlsDataChart.push(tempArray);
}
//boys
var boysDataChart = [];
for (var j=0; j < yValuesB.length; j++){  
  var tempArray = [];
  for (var i=0; i < weeks.length; i++){
    tempArray.push([weeks[i], yValuesB[j][i]]);
  }
  boysDataChart.push(tempArray);
}
// Create now all the labels (the should match up with colors)
var allLabels = ["years", 
                 "2.5th",
                 "10th",
                 "25th",
                 "50th",
                 "75th",,
                 "90th",
                 "97.5th"];

// We will also create a maxi-table with all the percentile data 
// for easier search and referencing
//unknown sex
var allData = [];
for (var i = 0; i < weeks.length;i++){
  allData.push([weeks[i], 
                twoFifthPercentile[i],
                tenthPercentile[i],
                //better colours
                twentyFifthPercentile[i],
                fiftiethPercentile[i],
                seventyFifthPercentile[i],
                ninentiethPercentile[i],
                ninentiethSevenPercentile[i]]);
}
//girls
var girlsData = [];
for (var i = 0; i < weeks.length;i++){
  girlsData.push([weeks[i], 
                  twoFifthPercentileG[i],
                  tenthPercentileG[i],
                  //better colours
                  twentyFifthPercentileG[i],
                  fiftiethPercentileG[i],
                  seventyFifthPercentileG[i],
                  ninentiethPercentileG[i],
                  ninentiethSevenPercentileG[i]]);
}
//boys
var boysData = [];
for (var i = 0; i < weeks.length;i++){
  boysData.push([weeks[i], 
                 twoFifthPercentileB[i],
                 tenthPercentileB[i],
                 //better colours
                 twentyFifthPercentileB[i],
                 fiftiethPercentileB[i],
                 seventyFifthPercentileB[i],
                 ninentiethPercentileB[i],
                 ninentiethSevenPercentileB[i]]);
}
omni.onResult([], function (ctx) {
  ctx.hideVariables('hidden','showLines');
});

/*
 * STEP 2: Use the data properly
 * Choose which percentiles to show, add user data, and create chart
 */
omni.onResult(['weight','age'], function (ctx, weight) {
  /*
   * 2.1) Setup
   */
  // Read calcualtor values

  var sex = ctx.getNumberValue('sex');
  weight= mathjs.round(weight.toNumber(), 2);
  var age = mathjs.round(ctx.getNumberValue('age')); // age will be use as array index
  var showLines = ctx.getNumberValue('showLines')+1;
  var referenceData = [];

  var chartTitle = "Percentiles";


  // createAllData() is how we format, color and combine data for our charts
  // This two operations are performed inside onResult to delete previous user input
  // var chartData = createPercentileChart(allDataChart, years, colors);
  var chartData = [];  
  if(sex ===0){
    chartData = createPercentileChart(boysDataChart, weeks, colors);  
    referenceData = boysData;
  }
  else if(sex ===1){
    chartData = createPercentileChart(girlsDataChart, weeks, colors);  
    referenceData = girlsData;
  }
  else if(sex ===2){
    chartData = createPercentileChart(allDataChart, weeks, colors);  
    referenceData = allData;
  }


  var chartLabels = ['age',,,,,,,,,,,'YOU'];

  /*
   * 2.2) Add user data as a single point
   * We take advantage that each point is a year and use age for indexing
   */
  for (var k = 0; k < chartData.length; k++) {
    chartData[k].push(); // empty values ensure single point (no line)
  }
  chartData[age-14][chartLabels.length-1] = weight; // Color constrasts with the lines


  /* 
   * 2.3) Get rid of unnnecessary percentile lines
   * The user will tell us how many lines above&below the point to show
   *
   */
  // Find user's percentile using the table created at the end of 1.2
  var userPercentile;
  var i = 0;
  while (age > weeks[i] && i < weeks.length) {
    i++;
  }
  var j = 1;
  var referenceLength = referenceData[i].length;
  while (referenceData[i][j] <= weight && j < referenceLength) {
    j++;
  }
  // Since some positions are empty (color reasons) we check not to have undefineds
  j-= 1;
  if (j === 1 ) {
    userPercentile = allLabels[1];
  } else if (j >= referenceLength-1){
    userPercentile = allLabels[allLabels.length-1];
  } else if (colors.includes(j)) {
    userPercentile = allLabels [j];
  } else {
    userPercentile = allLabels[j+1];
  }

  /*
  ["years",  (0)
  "2.5th", (1)
  "10th", (2)
  "25th", (3)
  "50th", (4)
  "75th",, (5)
  "90th", (7)
  "97.5th", (8)
  ];

*/
  if (referenceData[i][1] >= weight) {userPercentile = allLabels[1];}

  // Since some positions are empty (color reasons) we check not to have undefineds

  ctx.addHtml ('Your baby is in the <b>'+userPercentile+' percentile!</b> 👶',{afterVariable:'weight'});

  if(userPercentile === '2.5th'){
    ctx.addHtml('❗ All babies under 10th percentile are considered <b>small for gestational age (SGA).</b>'); 
  }
  else if(userPercentile === '90th' ||userPercentile === '97.5th'){
    ctx.addHtml('❗ All babies over 90th percentile are considered <b>large for gestational age (LGA).</b>'); 
  }
  else if (userPercentile !== '90th' &&userPercentile !== '97.5th' && userPercentile !== '2.5th'){
    ctx.addHtml('✅ Your baby\'s weight is within <b>normal range</b>.'); 

  }
  
  ctx.addHtml('<ul><ul><li><b>Y</b> axis: fetal weight in <b>grams (g).</b></li><li><b>X</b> axis: gestational age in <b> weeks</b>.</li></ul></ul>');
  /*
   * 2.3) Show only part of the data
   * Now we select which lines to show by copying only the relevant labels
   * We use colors for proper index finding
   * The conditions here are ugly and not thought through, 
   * but I really wanted this to work and be done, sowy
   */
  var idx = colors[j];
  for (var t = -showLines; t < showLines-2;t++){
    idx = colors [j+t];
    if (allLabels[idx]) {chartLabels[idx] = allLabels[idx];}
    //ctx.addHtml(allLabels[idx]);
  }

  var showData =[];
  var center= weeks.indexOf(age);
  if(age>16){
    for (var i = center-3;i<center+3;i++){
      showData.push(chartData[i]);
    }
  }
  else if(age<=16){
    for (var i = center-2;i<center+4;i++){
      showData.push(chartData[i]);
    }}

  // Finally we can simply print our chart!
  if(chartData !== undefined && chartData.length > 0){
    ctx.addChart({type: 'line',
                  labels: chartLabels, 
                  data: showData,
                  title: chartTitle,
                  afterVariable: "hidden",
                  alwaysShown: true
                 });
  }  
});

/*
 * Takes a collection of chart formatted datasets and combines and prettifies them
 * 		- Expands and uniforms the charts (linearInterpolation)
 * 		- Assigns colors according to a predefined order (colors)
 * 		- Combines them all into one chart-ready array
 *
 * INPUTS: array (each element should be a chart-formatted data set)
 * 				 array (values for creating the xAxis, namely maximum, minimum and nPoints)
 * 				 array (each element is the index of color to be used and the position is the order of usage)
 *
 * OUTPUT: array (chart-rady array containing all the datasets with the same xAxis and the desired colors)
 *
 *  - Still in experimental phase -
 */
function createPercentileChart(allvaluesY, xAxis, colors) {
  var minX = xAxis[0];
  var maxX = xAxis[xAxis.length-1];
  var xPoints = xAxis.length === 3 ? xAxis[1] : maxX-minX;
  var allLines = linearInterpolation (allvaluesY[0], minX, maxX, xPoints);
  for (var j = 1; j < allvaluesY.length; j++) {
    var tempData = linearInterpolation  (allvaluesY[j], minX, maxX, xPoints);
    tempData = changeColor(tempData, colors[j]);
    allLines = combineData (allLines, tempData);

  }
  return allLines;
}

/*
 * Creates a linearly spaced array
 *
 * INPUT(numbers):
 *   - Number of points in the array (required)
 *   - Initial value (optional; default = 0)
 *   - End value (optional; default value = number of points)
 *
 * OUTPUT: Array of linearly spaced values.
 */
function linespace(nPoints, initValue, endValue){
  if (initValue == undefined){initValue = 0;}
  if (endValue == undefined){endValue = nPoints;}
  if(endValue<initValue){
    var temp = endValue;
    endValue = initValue;
    initValue = temp;}
  var myArray = [],
      stepSize = (endValue - initValue)/(nPoints);
  for (var i=initValue; i <= endValue; i += stepSize){
    myArray.push(i);
  }
  return myArray;
}

/*
 * Takes a chart-ready array with uneven spacing on X-value
 * and converts is to an even spaced X-value chart-ready array
 * [linear interpolation]
 * startValue must be greater or equal than the lowest x-value in inputData
 * finalValue must be smaller or equal than the highest x-value in inputData
 *
 *
 * INPUTS: array (chart-ready data to be interpolated)
 * 	   number (smallest X-value to be shown in the chart)
 * 	   number (greatest X-value to be shown in the chart)
 * 	   number (number of points to be shown in the chart)
 *
 * OUTPUT: array (chart-ready data with evenly spaced X-values)
 *
 * REQUIRES: You must include the function "linespace" in your code.
 */
function linearInterpolation (inputData, startValue, finalValue, nPoints) {
  // Convert to 1D arrays  
  var oldX = [];
  var oldY = [];  
  if (isNaN(inputData[0][0]) && isNaN(inputData[inputData.length - 1][0]))
  {
    return inputData;
  }
  var i = 2;  
  while (i < inputData.length/2 && (isNaN(finalValue) || isNaN(startValue))) {
    finalValue = (isNaN(finalValue) ?  inputData[inputData.length - i][0] : finalValue);
    startValue = (isNaN(startValue) ?  inputData[i][0] : startValue);
    i++;
  } 

  for (i = 0; i < inputData.length; i++){
    if (inputData[i][0] <= finalValue){
      oldX.push(inputData[i][0]);
      oldY.push(inputData[i][1]);
    }
  }
  if (finalValue === undefined) {
    finalValue = oldX[oldX.length - 1];
    nPoints = 100;//oldX.length;
  } else if (nPoints === undefined || nPoints <= 0) {
    nPoints = 100;//oldX.length;
  }

  var newY = [];
  var newX = linespace(nPoints, startValue, finalValue);
  var searching = false;
  i = 0;

  for (var j = 0; j < newX.length; j++) {
    newY.push(NaN);
    searching = true;
    i = 0;
    while (searching && i < oldX.length){
      if (mathjs.round(newX[j], 2) == mathjs.round(oldX[i], 2)) {
        newY[j] = mathjs.round(oldY[i], 3);
        newX[j] = mathjs.round(newX[j], 1);
        searching = false;
      } else if (newX[j] > oldX[i] && newX[j] < oldX[i+1]){
        newY[j] = mathjs.round(
          oldY[i] + (newX[j] - oldX[i]) * 
          ((oldY[i+1] - oldY[i]) / 
           (oldX[i+1] - oldX[i])), 3);
        newX[j] = mathjs.round(newX[j], 1);
        searching = false; 
      }  
      i++;
    }
  } 
  var outputData = [];
  for (i = 0; i < newX.length; i++){
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
function combineData (dataSetA, dataSetB) {
  if (dataSetA === undefined) {return dataSetB;}
  if (dataSetB === undefined) {return dataSetA;}
  var dataLength = dataSetA.length;
  if (dataLength !== dataSetB.length) {return [];}
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
  if (start === undefined) {start = 0;}
  if (start >= ogChart.length) {start = 0;}
  var output = [];
  var ogPos = 1;
  while (ogChart[start][ogPos] == null) {
    ogPos++;
  }
  for (var i = 0; i < ogChart.length; i++) {
    if (i < start) {
      output[i] = ogChart[i];
    } else { 
      output.push([ogChart[i][0], , , , , , , , , , , ]);     
      output[i][pos] = ogChart[i][ogPos];
    }
  }
  return output;
}

var sex_VS = omni.createValueSelect({
  yes: {'name': 'Girl', 'value': 1},
  no: {'name': 'Boy', 'value': 0},
  not: {'name': 'Unknown', 'value':2},

});