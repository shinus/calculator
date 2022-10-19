var shape = getElement("shape_dd_Id");
var dimension = getElement("Dimension_input_Id");
var dimension_dd = getElement("Dimension_dd_Id");
var dimension2 = getElement("2_input_Id");
var dimension2_dd = getElement("2_dd_Id");
var dimension3 = getElement("3_input_Id");
var dimension3_dd = getElement("3_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

var unitsForCm = [
    { name: "cm", value: 1 },
    { name: "inches", value: 2.54 },
    { name: "m", value: 100 },
  ];

  var coef = [ 
      {name: "Elipsoid", value: 0.81},
      {name: "Cuboid", value: 0.89},
      {name: "triangular Prism", value: 0.66},
      {name: "Prolate elipsoid", value: 0.52},
      {name: "I don't know", value: 0.77},
  ];
  
  function init() {
    createDropDown(unitsForCm, dimension_dd);
    createDropDown(unitsForCm, dimension2_dd);
    createDropDown(unitsForCm, dimension3_dd);
    createDropDown(coef, shape);
  }
  
  init();
  
  
  function getExact() {
    var width = Number(dimension.value)
    var height = Number(dimension2.value);
    var length = Number(dimension3.value);
    var ashape = getSelectedValue(shape)
  
    var result = 0;
  

    result = (width * height * length * ashape)
  
 
  console.log(result);
    return math.bignumber(result);
  
  };
  
  function showResult() {
    var result = Number(getExact());
  
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
  
    output.innerHTML = "";
    div1.innerHTML =
      "<b>The actual volume may vary by ± </b> :" +
      " " +
      result.toFixed(2) ;
  
      var percentile = result;
    
    output.append(div1);
    output.append(div2);
  };
  
  calcBtn.addEventListener("click", showResult);