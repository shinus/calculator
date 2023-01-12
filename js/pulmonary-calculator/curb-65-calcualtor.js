var confu = getElement("Confusion_dd_Id");
var nitro = getElement("Nitrogen_input_Id");
var nitro_dd = getElement("Nitrogen_dd_Id");
var rate = getElement("Rate_input_Id");
var systo = getElement("Systolic_input_Id");
var dias = getElement("Diastolic_input_Id");
var age = getElement("Age_input_Id");
var calcBtn = getElement("calculate_btn");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "Confusion", values: confu },
    { name: "Nitrogen", values: nitro },
    { name: "NitrogenUnit", values: nitro_dd },
    { name: "Rate", values: rate },
    { name: "Systolic", values: systo },
    { name: "Diastolic", values: dias },
    { name: "Age", values: age },
];

var feUnit = [
    {
        name: "Yes",
        value: 1,
    },
    {
        name: "No",
        value: 0,
    },
];

var mgUnit = [
    {
        name: "mg/dl",
        value: 0,
    },
    {
        name: "mmol/l",
        value: 1,
    },
];

function init() {
    createDropDown(feUnit, confu);
    createDropDown(mgUnit, nitro_dd);
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

function getNitro() {
    var nitros = Number(nitro.value)
    if (nitros > 19) {
        nitros = 1
    } else {
        nitros = 0
    }
    return nitros
}

function getRate() {
    var rating = Number(rate.value)

    if (rating >= 30) {
        rating = 1
    } else {
        rating = 0
    }
    return rating
}

function getSys() {
    var systolic = Number(systo.value)
    var diastolic = Number(dias.value)

    if (systolic <= 90 || diastolic <= 60) {
        systolic = 1
        diastolic = 0
    } else {
        systolic = 0
        diastolic = 1
    }
    return [systolic, diastolic]
}

function getage() {
    var Nage = Number(age.value)

    if (Nage >= 65) {
        Nage = 1
    } else {
        Nage = 0
    }
    return Nage
}

function getExact() {
    var Confusion = Number(getSelectedValue(confu))
    var nitros = Number(getNitro())
    var rating = Number(getRate())
    var [systolic, diastolic] = getSys()
    // var diastolic = Number(getSys())
    var Nage = Number(getage())

    var result = 0;

    result = Confusion + nitros + rating + systolic + diastolic + Nage;
    console.log(nitros);

    console.log(result);
    return result;

};


function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "CURB-65 score " + "  " + result.toFixed(0);

    if (percentile < 0.5) {
        div2.innerHTML = 'Treat in outpatient clinic. Mortality rate about 0.6%. ';
    } else if (percentile < 1.5) {
        div2.innerHTML = 'Treat in outpatient clinic. Mortality rate about 2.7%. ';
    } else if (percentile < 2.5) {
        div2.innerHTML = 'Consider treating patient in the hospital. Mortality rate about 6.8%.';
    } else if (percentile < 3.5) {
        div2.innerHTML = 'Patient should be hospitalized. Mortality rate about 14%. ';
    } else if (percentile < 4.5) {
        div2.innerHTML = 'Patient should be hospitalized. Mortality rate about 27.8%. ';
    } else {
        div2.innerHTML = 'Patient should be hospitalized. Mortality rate about 27.8%.  ';
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
};

calcBtn.addEventListener("click", showResult);


