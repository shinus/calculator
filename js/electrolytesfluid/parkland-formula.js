var child = getElement("child_dd_Id");
var weight = getElement("Weight_input_Id");
var weight_dd = getElement("Weight_dd_Id");
var head = getElement("Head_dd_Id");
var torso = getElement("Torso_dd_Id");
var arm = getElement("Arm_dd_Id");
var leg = getElement("Leg_dd_Id");
var groin = getElement("Groin_dd_Id");
var row7 = getElement("calculator-row-7")
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "child", values: child },
    { name: "weight", values: weight },
    { name: "weightUnit", values: weight_dd },
    { name: "head", values: head },
    { name: "torso", values: torso },
    { name: "arm", values: arm },
    { name: "leg", values: leg },
    { name: "groin", values: groin },
];

var genUnit = [
    {
        name: "Adult",
        value: 0,
    },
    {
        name: "child",
        value: 1,
    },
];

var weiUnit = [
    {
        name: "kg",
        value: 0,
    },
    {
        name: "pounds",
        value: 1,
    },
];

var headUnit = [
    {
        name: "Not effected",
        value: 0,
    },
    {
        name: "Front and back",
        value: 9,
    },
    {
        name: "Back",
        value: 4.5,
    },
    {
        name: "Front",
        value: 4.5,
    },
];

var torsoUnit = [
    {
        name: "Not effected",
        value: 0,
    },
    {
        name: "Entire side and half of the other",
        value: 27,
    },
    {
        name: "Half of Front/Back",
        value: 9,
    },
    {
        name: "Front and Back",
        value: 36,
    },
    {
        name: "Back",
        value: 18,
    },
    {
        name: "Front",
        value: 18,
    },
];

var armUnit = [
    {
        name: "Not effected",
        value: 0,
    },
    {
        name: "Entire arm and one side of the other arm",
        value: 13.5,
    },
    {
        name: "Both arms",
        value: 18,
    },
    {
        name: "Front and Back",
        value: 9,
    },
    {
        name: "Back",
        value: 4.5,
    },
    {
        name: "Front",
        value: 4.5,
    },
];

var legUnit = [
    {
        name: "Not effected",
        value: 0,
    },
    {
        name: "Entire leg and half of the other",
        value: 27,
    },
    {
        name: "Both legs",
        value: 36,
    },
    {
        name: "Front and Back",
        value: 18,
    },
    {
        name: "Back",
        value: 9,
    },
    {
        name: "Front",
        value: 9,
    },
];

var groinUnit = [
    {
        name: "Not effected",
        value: 0,
    },
    {
        name: "Affected",
        value: 1,
    },
];

function init() {
    createDropDown(genUnit, child)
    createDropDown(weiUnit, weight_dd)
    createDropDown(headUnit, head)
    createDropDown(torsoUnit, torso)
    createDropDown(armUnit, arm)
    createDropDown(legUnit, leg)
    createDropDown(groinUnit, groin)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

child.addEventListener('change', (e) => {
    console.log(e.target.value, 'adasd');
    if (e.target.value == 1) {
        row7.style.display = 'none'
    } else {
        row7.style.display = 'block'
    }
})

function getExact() {
    var adult = Number(getSelectedValue(child));
    var weig = Number(weight.value);
    var headss = Number(getSelectedValue(head));
    var torr = Number(getSelectedValue(torso));
    var armss = Number(getSelectedValue(arm));
    var legss = Number(getSelectedValue(leg));
    var grow = Number(getSelectedValue(groin));

    var result, result2, result3, result4, result5, result6 = 0;

    result = headss + torr + armss + legss + grow;

    result2 = weig * result * 4;

    result3 = result2 / 2;

    result4 = result3 / 8;

    result5 = result2 / 2;

    result6 = result3 / 16;

    console.log(result, result2, result3, result4, result6, result5);
    return [result, result2, result3, result4, result5, result6]
}

function showResult() {
    resultPage2(queryParams)

    var [result, result2, result3, result4, result5, result6] = getExact()

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");
    var div9 = document.createElement("div");

    output.innerHTML = "";
    var percentile = result;

    div1.innerHTML = "Burn percentage   " + "\xa0\xa0\xa0 <b> " + result.toFixed(2) + " % </b>";
    div2.innerHTML = "Fluids to give over first 24 hours";
    div3.innerHTML = "Total fluids   " + "\xa0\xa0\xa0 <b> " + result2.toFixed(0) + " ml/24h </b>";
    div4.innerHTML = "First 8 hours";
    div5.innerHTML = "Total amount/8h   " + "\xa0\xa0\xa0 <b> " + result3.toFixed(0) + " ml </b>";
    div6.innerHTML = "IV flow   " + "\xa0\xa0\xa0 <b> " + result4.toFixed(0) + " ml/h </b>";
    div7.innerHTML = "Next 16 hours";
    div8.innerHTML = "Total amount/16h   " + "\xa0\xa0\xa0 <b> " + result5.toFixed(0) + " ml </b>";
    div9.innerHTML = "IV flow   " + "\xa0\xa0\xa0 <b> " + result6.toFixed(0) + " ml/h </b>";

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
    output.append(div7);
    output.append(div8);
    output.append(div9);
}

calcBtn.addEventListener("click", showResult);
