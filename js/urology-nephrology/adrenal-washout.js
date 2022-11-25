

var pre = getElement("pre_input_Id");
var post = getElement("post_input_Id");
var delayed = getElement("delayed_input_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "Pre-contrast", values: pre },
  { name: "Post-contrast", values: post },
  { name: "15min-delayed", values: delayed },
];


// function init() {
//     createDropDown(unitsForCm, dimension_dd);
//     createDropDown(unitsForCm, dimension2_dd);
//     createDropDown(unitsForCm, dimension3_dd);
//     createDropDown(coef, shape);
//   }

//   init();


function getExact() {
    var a = Number(pre.value) ;
    var b = Number(post.value) ;
    var c = Number(delayed.value);

    // console.log(prehu);
    // console.log(posthu);
    // console.log(delayhu);
   var result = ((100 * ((b - c) / (b - a))));

    console.log(result);
    return math.bignumber(result);

};

function getExact2() {
    // var prehu = Number(pre.value)
    var posthu = Number(post.value);
    var delayhu = Number(delayed.value);

   

  var result2 = (100 * ((posthu - delayhu) / posthu)
)
    console.log(result2, "re");
    return math.bignumber(result2);

}

function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());
    var result2 = Number(getExact2());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    // var div3 = document.createElement("div");

    output.innerHTML = "Results";
    

        // " " +
        // result.toFixed(2);
   div1.innerHTML = "Absolute Washout" + "    " + result.toFixed(2) + "%" + "<br>  An absolute washout higher than 60% is strongly suggestive of adrenal adenoma. </br>";
    // absolute.value = result2.toFixed(2);
    // var percentile = result;
  div2.innerHTML = "Relative Washout" + "    " +  result2.toFixed(2) + "%" + "<br>Relative washout higher than 40% is strongly suggestive of adrenal adenoma.</br>";

    output.append(div1);
    output.append(div2);
    // output.append(div3);
};

calcBtn.addEventListener("click", showResult);



window.onload = function () {
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
};