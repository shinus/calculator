var fev = getElement("FEV1_dd_Id");
var dist = getElement("distance_dd_Id");
var bmi = getElement("BMI_dd_Id");
var Scale = getElement("Scale_dd_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "FEV1", values: fev },
    { name: "distance", values: dist },
    { name: "BMI", values: bmi },
    { name: "scale", values: Scale },
];

var feUnit = [
    {
        name: "65% or more",
        value: 0,
    },
    {
        name: "50-64%",
        value: 1,
    },
    {
        name: "36-49%",
        value: 2,
    },
    {
        name: "35% or less",
        value: 3,
    },
];

var diUnit = [
    {
        name: "350 m (383 yds) or more",
        value: 0,
    },
    {
        name: "250-349 m (273-382 yds)",
        value: 1,
    },
    {
        name: "150-249 m (164-272 yds)",
        value: 2,
    },
    {
        name: "149 m (163 yds) or less",
        value: 3
    },
];

var bmUnit = [
    {
        name: ">21",
        value: 0,
    },
    {
        name: "21 or less",
        value: 1,
    },
];

var scaUnit = [
    {
        name: "0 or 1 point",
        value: 0,
    },
    {
        name: "2 points",
        value: 1,
    },
    {
        name: "3 points",
        value: 2,
    },
    {
        name: "4 points",
        value: 3,
    },
];

function init() {
    createDropDown(feUnit, fev);
    createDropDown(diUnit, dist);
    createDropDown(bmUnit, bmi);
    createDropDown(scaUnit, Scale);
}

init()

function getExact() {
    var fevss = Number(getSelectedValue(fev))
    var distss = Number(getSelectedValue(dist))
    var bmiss = Number(getSelectedValue(bmi))
    var scaless = Number(getSelectedValue(Scale))

    var result = 0;

    result = fevss + distss + bmiss + scaless;

    console.log(result);
    return math.bignumber(result);

};


function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "BODE Index score " + "  " + result.toFixed(0);

    if (percentile <= 2) {
        div2.innerHTML = 'Estimated 4-year survival of this patient: <b>80%.</b>';
    }
    else if (percentile == 3 || percentile == 4) {
        div2.innerHTML = 'Estimated 4-year survival of this patient: <b>67%.</b>';
    }
    else if (percentile == 5 || percentile == 6) {
        div2.innerHTML = 'Estimated 4-year survival of this patient: <b>57%.</b>';
    }
    else if (percentile >= 7) {
        div2.innerHTML = 'Estimated 4-year survival of this patient: <b>18%.</b>';
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
};


calcBtn.addEventListener("click", showResult);


window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};

