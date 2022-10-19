var bun = getElement("bun_input_Id");
var bun_dd = getElement("bun_dd_Id");
var creat = getElement("Serum_input_Id");
var creat_dd = getElement("Serum_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");


  var coef = [ 
    {name: "mg/dl", value: 0 },
    {name: "mm/mol", value: 1 }
  ];
  
  function init() {
    createDropDown(coef, bun_dd);
    createDropDown(coef, creat_dd);

  }
  
  init();
  
  
  function getExact() {
    var urea = Number(bun.value)
    var creatin = Number(creat.value);
  
  
    var result = 0;
  

    result =  urea / creatin
  
 
  console.log(result);
    return math.bignumber(result);
  
  };
  
  function showResult() {
    var result = Number(getExact());
  
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
  
    output.innerHTML = "";
    div1.innerHTML =
      "<b>Bun Creatinie Ratio </b> :" +
      " " +
      result.toFixed(2);
  
      var percentile = result;
    
    output.append(div1);
    output.append(div2);
  };
  
  calcBtn.addEventListener("click", showResult);