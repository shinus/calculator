// const { re } = require("mathjs");

var pre = getElement("pre_input_Id");
var post = getElement("post_input_Id");
var delayed = getElement("delayed_input_Id");
var absolute = getElement("Absolute_input_Id");
var relative = getElement("Relative_input_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");


// function init() {
//     createDropDown(unitsForCm, dimension_dd);
//     createDropDown(unitsForCm, dimension2_dd);
//     createDropDown(unitsForCm, dimension3_dd);
//     createDropDown(coef, shape);
//   }

//   init();


function getExact() {
    var prehu = Number(pre.value)
    var posthu = Number(post.value);
    var delayhu = Number(delayed.value);

    console.log(prehu);
    console.log(posthu);
    console.log(delayhu);
    var result, result2 = 0;


    result = (100 * (posthu - delayhu) / (posthu - prehu));

    result2 = (100 * [(posthu - delayhu) / posthu])

    // result2 = (100 * ((posthu - delayhu) / prehu));


    console.log(result, 'resule');
    return math.bignumber(result);

};

function showResult() {
    var result = Number(getExact());
    var result2 = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML =

        " " +
        result.toFixed(2);
    relative.value = result.toFixed(2);
    absolute.value = result2.toFixed(2)
    // var percentile = result;

    output.append(div1);
    output.append(div2);
    output.append(div3);
};

calcBtn.addEventListener("click", showResult);



