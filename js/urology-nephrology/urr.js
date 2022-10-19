var pre = getElement("level_input_Id")
var dd_pre = getElement("level_dd_Id");
var post = getElement("Postlevel_input_Id");
var dd_post = getElement("Postlevel_dd_Id");
var urea = getElement("Urea_input_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");


var mili = [
    { name: "miligrams per decliter mg/dl", value: 1 },
    { name: "micromiles per liter mol/l", value: 88.42 },
];


function init() {
    createDropDown(mili, dd_pre);
    createDropDown(mili, dd_post);

}

init();

  

function getExact() {
    var apre = Number(pre.value);
    var apost = Number(post.value);
 
  
  
      var result = 0;
  
   
      result = ([ ( apre - apost ) / apre ] * 100) ;
  
      console.log(result);
      return math.bignumber(result);
  
  };
  
  function showResult() {
      var result = Number(getExact());
  
      var div1 = document.createElement("div");
      var div2 = document.createElement("div");
  
    //   output.innerHTML = "";
      div1.innerHTML = 
         
          
        (urea.value = result.toFixed(2));
  
      var percentile = result;
  
    //   output.append(div1);
      output.append(div2);
  };
  
  calcBtn.addEventListener("click", showResult);
  
