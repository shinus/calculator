var nage = getElement("Age_input_Id");
// var age_dd = getElement("Age_dd_Id");
// var gender = getElement("Sex_input_Id");
var gender_dd = getElement("Sex_dd_Id");
var bweight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var bheight = getElement("Height_input_Id");
var height_dd = getElement("Height_dd_Id");
var serum = getElement("seru_input_Id");
var serum_dd = getElement("serum_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

var yearVS = [
    {
      name: "year",
      value: 0,
    },
  ];
  
  var sex_VS = [
    {
      name: "male",
      value: 1,
    },
    {
      name: "female",
      value: 0.85,
    },
  ];

  var unitsForLength = [
    { name: "cm", value: "cm" },
    { name: "inch", value: "inch" },
    { name: "feet", value: "ft" },
    { name: "m", value: "m" },
  ];

  var unitsForWeight = [
    { name: "kilogram (kg)", value: "kg" },
    { name: "grams (g)", value: "g" },
    { name: "ounces (oz)", value: "oz" },
    { name: "pounds (lb)", value: "lb" },
    { name: "Stones (stone)", value: "stone" },
  ];

  var mili = [
    { name: "miligrams per decliter mg/dl", value: 1 },
    { name: "micromiles per liter mol/l", value: 88.42 },
  ];

 
  
  function init() {
      createDropDown(sex_VS, gender_dd);
      createDropDown(unitsForWeight, weight_dd);
      createDropDown(unitsForLength, height_dd);
      createDropDown(mili, serum_dd);
    

  }
  
  init();
  
  
  function getExact() {
    var age = Number(nage.value)
    var sex = getSelectedValue(gender_dd);
    var weight = Number(bweight.value);
    var height = Number(bheight.value)
    var dserum = Number(serum.value)
  
    var result = 0;
  

    result = (140 - age) * weight * sex / (72 * dserum)
  
 
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