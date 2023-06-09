var outcom = getElement("outcomes_dd_Id");
var patient = getElement("Patient_input_Id");
var control = getElement("Control_input_Id");
var experimental = getElement("Experimental_input_Id");
var row1 = getElement("calculator-row-1")
var row2 = getElement("calculator-row-2")
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "outcomes", values: outcom },
    { name: "patient-years", values: patient },
    { name: "control", values: control },
    { name: "experimental", values: experimental },
]

var gdUnit = [
    {
        name: "Percentage",
        value: 0
    },
    {
        name: "Patient-years",
        value: 1
    },
];

function init() {
    createDropDown(gdUnit, outcom)
    row2.style.display = 'none'
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();


outcom.addEventListener('change', (e) => {
    console.log(e.target.value, 'adasd');
    if (e.target.value == 0) {
        row2.style.display = 'none'
    } else if (e.target.value == 1) {
        row2.style.display = 'block'
    }
})

function getExact() {
    var a = Number(getSelectedValue(outcom))
    var b = Number(patient.value)
    var c = Number(control.value)
    var d = Number(experimental.value)
    var e =  2.7182;

    var result, arr, r1, r2, ab, ac = 0;

    ab = (-c / b)
    ac = (-d / b)

    if (a == 0) {
        arr = (c - d) 
    } else if (a == 1) {
        r1 = 1 - Math.pow(e, ab)
        r2 = 1 - Math.pow(e, ac)
        arr = r1 - r2
    }

    if(a == 0) {
        result = (1 / arr) * 100
    } else if(a == 1) {
        result = 1/arr
    }

    console.log(ab,ac);

    console.log(result);
    return result;

};

function validateAge() {
    var exp = Number(experimental.value)
    var con = Number(control.value)
    var msg;
    var parentId = "calculator-row-3";
    var elementName = "bunError";

    if (exp == con) {
        msg =
            "The control group can't be equal to the experimental group.";
        showError(parentId, elementName, msg);
    } else {
        removeError(elementName);
    }
}


function showResult() {
    resultPage2(queryParams)
    var result = Number(getExact());
    var choice = Number(outcom.value)

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";

    div1.innerHTML = "NNT  " + result.toFixed(3);

    if (percentile > 0) {
        if (choice == 0) {
            div2.innerHTML = 'You need to treat <b>' + (percentile.toFixed(3)) + ' patients</b> in order to <b>avoid</b> the result in one patient.';
        }
    } if (percentile < 0) {
        if (choice == 0) {
            div2.innerHTML = 'You need to treat <b>' + (percentile.toFixed(3)) + ' patients</b> in order to <b>receive</b> the result in one patient.';
        }
    } if (percentile > 0) {
        if (choice == 1) {
            div2.innerHTML = 'You need to treat <b>' + (percentile.toFixed(3)) + ' patients</b> in order to <b>avoid</b> the result in one patient.';
        }
    } if (percentile < 0) {
        if (choice == 1) {
            div2.innerHTML = 'You need to treat <b>' + (percentile.toFixed(3)) + ' patients</b> in order to <b>receive</b> the result in one patient.';
        }
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
};

experimental.addEventListener("input", validateAge)
calcBtn.addEventListener("click", showResult);

