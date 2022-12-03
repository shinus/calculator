var age = getElement("Age_input_Id");
var height = getElement("Height_input_Id");
var height_dd = getElement("Height_dd_Id");
var gender = getElement("Sex_dd_Id");
var ethnicity = getElement("Ethnicity_dd_Id");
var flow = getElement("flow_input_Id");
var flow_dd = getElement("flow_dd_Id");
var best = getElement("best_input_Id");
var best_dd = getElement("best_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "age", values: age },
    { name: "height", values: height },
    { name: "heightUnit", values: height_dd },
    { name: "gender", values: gender },
    { name: "ethnicity", values: ethnicity },
    { name: "flow", values: flow },
    { name: "flowUnit", values: flow_dd },
    { name: "best", values: best },
    { name: "bestUnit", values: best_dd },
];

var heUnit = [
    {
        name: "cm",
        value: 0,
    },
    {
        name: "m",
        value: 1,
    },
    {
        name: "in",
        value: 2,
    },
    {
        name: "ft",
        value: 3,
    },
];

var gUnit = [
    {
        name: "Male",
        value: 1,
    },
    {
        name: "Female",
        value: 0,
    },
];

var EtUnit = [
    {
        name: "Caucasian",
        value: 0,
    },
    {
        name: "African-American",
        value: 1,
    },
    {
        name: "Mexican-American",
        value: 2,
    },
    {
        name: "Other",
        value: 3,
    },
];

var FlUnit = [
    {
        name: "liters per second",
        value: 0,
    },
    {
        name: "liters per minute",
        value: 1,
    },
    {
        name: "mililiters per second",
        value: 2,
    },
    {
        name: "mililiters per minute",
        value: 3,
    },
];

function init() {
    createDropDown(heUnit, height_dd)
    createDropDown(gUnit, gender)
    createDropDown(EtUnit, ethnicity)
    createDropDown(FlUnit, flow_dd)
    createDropDown(FlUnit, best_dd)
}

init()

function validateAge() {
    var ageValue = Number(age.value);
    var msg;
    var parentId = "calculator-row-1";
    var elementName = "eosError";

    if (ageValue < 5) {
        msg =
            "Kids under 5 years old are not able to perform the peak flow test properly.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}

function getExact() {
    var ages = Number(age.value)
    var heig = Number(height.value)
    var gend = Number(getSelectedValue(gender));
    var ethn = Number(getSelectedValue(ethnicity));
  


    var height_m = heig / 100;

    var result = 0;

    if (ages < 8) { //kids 5-7 OK
        return result = ((((heig - 100) * 5) + 100) / 60);
    }


    if (ages > 7 && ethn == 3) { //other ethnicity 
        if (ages > 7 && ages < 18) { // other ethnicity teens OK
            return result = ((((heig - 100) * 5) + 100) / 60);
        } else if (ages > 17 && gend == 0 && ethn == 3) { //other ethnicity adult females OK
            return mathjs.bignumber((((height_m * 3.72) + 2.24) - (age * 0.03)));
        } else if (ages > 17 && gend == 1 && ethn == 3) { //other ethnicity adult males OK
            return result = ((((height_m * 5.48) + 1.58) - (ages * 0.041)));
        }
    }
    if (ages > 7 && ethn != 3) {
        if (ethn == 0) { //caucasian
            if (ages < 20 && gend == 1) { // caucasian male OK 
                return result = (-0.5962 + (-0.12357 * ages) + (0.013135 * (ages * ages)) + (0.00024962 * (heig * heig)));
            } else if (ages > 19 && gend == 1) { //caucasian male OK
                return result = (1.0523 + (0.08272 * ages) + (-0.001301 * (ages * ages)) + (0.00024962 * (heig * heig)));
            }

            if (ages < 18 && gend == 0) { // caucasian female OK
                return result = (-3.6181 + (0.60644 * ages) + (-0.016846 * (ages * ages)) + (0.00018623 * (heig * heig)));
            } else if (ages > 17 && gend == 0) { //caucasian female OK
                return result = (0.9267 + (0.06929 * ages) + (-0.001031 * (ages * ages)) + (0.00018623 * (heig * heig)));
            }
        }

        if (ethn == 1) { // african american
            if (ages < 20 && gend == 1) { // african american male OK
                return result = (-0.2684 + (-0.28016 * ages) + (0.018202 * (ages * ages)) + (0.00027333 * (heig * heig)));
            } else if (ages > 19 && gend == 1) { //african american male OK
                return result = (2.2257 + (-0.04082 * ages) + (0 * (ages * ages)) + (0.00027333 * (heig * heig)));
            }

            if (ages < 18 && gend == 0) { // african american female OK
                return result = (-1.2398 + (0.16395 * ages) + (0 * (ages * ages)) + (0.00019746 * (heig * heig)));
            } else if (ages > 17 && gend == 0) { //african american female OK
                return result = (1.3597 + (0.03458 * ages) + (-0.000847 * (ages * ages)) + (0.00019746 * (heig * heig)));
            }

        }
        if (ethn == 2) { // mexican american
            if (ages < 20 && gend == 1) { // mexican american male OK 
                return result = (-0.9537 + (-0.19602 * ages) + (0.014497 * (ages * ages)) + (0.00030243 * (heig * heig)));
            } else if (ages > 19 && gend == 1) { //mexican american male OK
                return result = (0.0870 + (0.06580 * ages) + (-0.001195 * (ages * ages)) + (0.00030243 * (heig * heig)));
            }
        }

        if (ages < 20 && gend == 0) { // mexican american female OK
            return result = (-3.2549 + (0.47495 * ages) + (-0.013193 * (ages * ages)) + (0.00022203 * (heig * heig)));
        } else if (ages > 19 && gend == 0) { //mexican american female OK
            return result = (0.2401 + (0.06174 * ages) + (-0.001023 * (ages * ages)) + (0.00022203 * (heig * heig)));
        }
    };
    console.log(ages);

    console.log(result);
    return math.bignumber(result)
}

function showResult() {
    resultPage2(queryParams)

    var result = Number(getExact())
    var floss = Number(flow.value);
    var beast = Number(best.value);

    var result2 = 0;
    result2 = floss / beast * 100;

    var result3 = 0 ;

    result3 = floss / result * 100;
    

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");

    output.innerHTML = "";
    var percentile = result;

    div1.innerHTML = "Estimated peak flow   " + "\xa0\xa0\xa0 <b> " + result.toFixed(2) + "L/sec </b>";

    div2.innerHTML = "% of estimated PEF " + "\xa0\xa0\xa0 <b> " + result3.toFixed(2) + " % </b>"

    if (result3 > 79.99) {
        div3.innerHTML = 'Green zone - if you have asthma, it is under control. ';
        div4.innerHTML = '<img src=https://uploads-cdn.omnicalculator.com/images/pefr/green.png style="height=80%" alt="green zone">';
    } else if (result3 < 80 && result3 > 49.99) {
        div3.innerHTML = 'Yellow zone - your airways are narrowed, extra treatment may be needed. <b>Consult your physician</b> so that you have a plan for this kind of situations.';
        div4.innerHTML = '<img src=https://uploads-cdn.omnicalculator.com/images/pefr/yellow.png style="height=80%" alt="yellow zone">';
    } else if (result3 < 50) {
        div3.innerHTML = 'Red zone - your airways are severely narrowed. <b>Take your rescue medication as soon as possible and consult your physician.</b>';
        div4.innerHTML = '<img src=https://uploads-cdn.omnicalculator.com/images/pefr/red.png style="height=80%" alt="red zone">';
    }

    div5.innerHTML = "% of personal best" +  "\xa0\xa0\xa0 <b> " + result2.toFixed(2) + " % </b>"
 
    if (result2 > 79.99) {
        div6.innerHTML = 'Green zone - if you have asthma, it is under control. ';
        div7.innerHTML = '<img src=https://uploads-cdn.omnicalculator.com/images/pefr/green.png style="height=80%" alt="green zone">';
    } else if (result2 < 80 && result2 > 49.99) {
        div6.innerHTML = 'Yellow zone - your airways are narrowed, extra treatment may be needed. <b>Consult your physician</b> so that you have a plan for this kind of situations.';
        div7.innerHTML = '<img src=https://uploads-cdn.omnicalculator.com/images/pefr/yellow.png style="height=80%" alt="yellow zone">';
    } else if (result2 < 50) {
        div6.innerHTML = 'Red zone - your airways are severely narrowed. <b>Take your rescue medication as soon as possible and consult your physician.</b>';
        div7.innerHTML = '<img src=https://uploads-cdn.omnicalculator.com/images/pefr/red.png style="height=80%" alt="red zone">';
    }


    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
    output.append(div7);
}

age.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};