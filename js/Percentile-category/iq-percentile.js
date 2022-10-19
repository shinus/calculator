


var Z_MAX = 6;
var i;
var sd = 15; //default standard deviation

 function standard_deviation(ctx, standard_deviation){
  standard_deviation = standard_deviation.toNumber();
  sd = standard_deviation;
};
 function a(ctx, a) {
  ctx.hideVariables('a','b','mean');
};

//message
function percentile(ctx, percentile, iq_score) {
  percentile = percentile.toNumber();
  iq_score = iq_score.toNumber();
  percentile = mathjs.round(percentile,1);
  ctx.addHtml('Approximately '+percentile + '% of people have an IQ lower than or equal to ' + iq_score + '.',{afterVariable : 'percentile'})

  ctx.addHtml('The graph represents the normal distribution of IQ scores. X-axis shows the scores and Y-axis shows the percentage of population with the score. The light blue color represents the scores above yours and the dark blue - the scores below yours.', {afterVariable : 'b'});

}

// MAIN - draw chart
function iq_score(ctx, iq_score) {

  var initialX = 0;
  var finalX = 200;
  var nPoints = 200;
  var color = 3;
  var baseColor = 1;
  var color2 = 3;
  var colorFrom = iq_score.toNumber();

  var xValues = linespace (nPoints, initialX, finalX);
  var chartData = dataToChart (xValues, baseColor);
  chartData = roundArray (chartData, 5);

  colorFrom = numberToPosition(colorFrom, nPoints, initialX, finalX); 
  chartData = changeColor(chartData, color, colorFrom);

  var chartLabels = ['x',]; // x-axis (never shown)
  if (colorFrom > 0 && colorFrom <= nPoints) { // only if base color is kept
    chartLabels[baseColor] = 'Percentage of population (below your IQ level)';
  }
  chartLabels[color] = 'Percentage of population (below your IQ level) '; 

  chartLabels[color2] = 'Percentage of population (above or equal to your IQ level)'; //y2
  var chartTitle = 'IQ distribution';
  var chartType = 'area'; 

  if(chartData !== undefined && chartData.length > 0){
    ctx.addChart({type: chartType,
                  labels: chartLabels,
                  data: chartData,
                  title: chartTitle,
                  afterVariable: "a",
                  alwaysShown: true
                  });
  }

};

function erf(_z) {
	return poz(_z);
};


//------------------FUNCTIONS----------------------------------------------------------

//for normal distribution (bell-curve chart)

function normalDistribution(x) {
  var mean = 100;
  var pi = 3.14159;
  var e = 2.71828;
  
  var firstPart = 1 / ( sd * Math.sqrt(2*pi) );
  var thePower = -Math.pow(x-mean,2) / (2 * Math.pow(sd,2) );
  var eGotThePower = Math.pow(e,thePower);
  var y = firstPart * eGotThePower;
  var y_as_percentage = y*100;

  return y_as_percentage; //return y_as_percentage
}

function poz(z) {
  var y, x, w;

  if (z === 0.0) {
    x = 0.0;
  } else {
    y = 0.5 * Math.abs(z);
    if (y > (Z_MAX * 0.5)) {
      x = 1.0;
    } else if (y < 1.0) {
      w = y * y;
      x = ((((((((0.000124818987 * w
                  - 0.001075204047) * w + 0.005198775019) * w
                - 0.019198292004) * w + 0.059054035642) * w
              - 0.151968751364) * w + 0.319152932694) * w
            - 0.531923007300) * w + 0.797884560593) * y * 2.0;
    } else {
      y -= 2.0;
      x = (((((((((((((-0.000045255659 * y
                       + 0.000152529290) * y - 0.000019538132) * y
                     - 0.000676904986) * y + 0.001390604284) * y
                   - 0.000794620820) * y - 0.002034254874) * y
                 + 0.006549791214) * y - 0.010557625006) * y
               + 0.011630447319) * y - 0.009279453341) * y
             + 0.005353579108) * y - 0.002141268741) * y
           + 0.000535310849) * y + 0.999936657524;
    }
  }
  return z > 0.0 ? mathjs.bignumber(((x + 1.0) * 0.5)) : mathjs.bignumber(((1.0 - x) * 0.5));
}

/*  CRITZ  --  Compute critical normal z value to
                   produce given p.  We just do a bisection
                   search for a value within CHI_EPSILON,
                   relying on the monotonicity of pochisq(). */
  

function critz(p) {
  var Z_EPSILON = 0.000001;     /* Accuracy of z approximation */
  var minz = -Z_MAX;
  var maxz = Z_MAX;
  var zval = 0.0;
  var pval;

  if (p < 0.0 || p > 1.0) {
    return -1;
  }

  while ((maxz - minz) > Z_EPSILON) {
    pval = poz(zval);
    if (pval > p) {
      maxz = zval;
    } else {
      minz = zval;
    }
    zval = (maxz + minz) * 0.5;
  }
  return(zval);
}

//For charts in general
//For explanation see Alvaro's chart template

function linespace(nPoints, initValue, endValue){
  if (initValue === undefined){initValue = 0;}
  if (endValue === undefined){endValue = nPoints;}
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

function dataToChart (xValues, whichFunction) {
  whichFunction = whichFunction || 0;
  var chartData = [];
  switch (whichFunction) {
    case 1:
      for(var i = 0; i < xValues.length; i++){
        chartData.push([xValues[i], normalDistribution(xValues[i])]);
      }
      break;
    default:
      for(i = 0; i < xValues.length; i++){
        chartData.push([xValues[i], normalDistribution(xValues[i])]);
      }
      break;
  }
  return chartData;
}

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

function roundArray (ogArray, roundTo) {
  roundTo = roundTo || 2;
  for (var i = 0; i < ogArray.length; i++) {
    for (var j = 0; j < ogArray[i].length; j++) {
      //ogArray[i][j] = mathjs.round(ogArray[i][j], roundTo);
      ogArray[i][j] = roundToPrecision(ogArray[i][j], roundTo);
    }
  }
  return ogArray;
}

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

function numberToPosition (number, nPoints, minimum, maximum) { 
  var width = (maximum - minimum) / (nPoints-1);
  var position = mathjs.round((number-minimum)/width);
  if (position < 0) {position = 0;}
  return position;
}

function roundToPrecision(number, precision)
{
  var str = number.toPrecision(precision).toString();
  return Number(str);
}

//-------------------------CONDITION----------------------------------------------
function iq_score(ctx, iq_score) {
  iq_score = iq_score.toNumber();
  if (iq_score % 1 !== 0) {
    ctx.addUnmetCondition('IQ score should be a natural number (no fractions).');
  }
};

