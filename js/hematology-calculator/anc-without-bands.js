var counts = getElement("count_input_Id");
var data = getElement("data_dd_Id");
var neut = getElement("NEUT_input_Id");
var poly = getElement("POLY_input_Id");
var band = getElement("band_input_Id");
var segs = getElement("SEGS_input_Id");
var row2 = getElement("calculator-row-3")
var row3 = getElement("calculator-row-4")
var row4 = getElement("calculator-row-5")
var row5 = getElement("calculator-row-6")

var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "WBCcount", values: counts },
    { name: "reportData", values: data },
    { name: "NEut", values: neut },
]

var nUnit = [
    {
        name: "NEUT",
        value: 0,
    },
    {
        name: "POLY",
        value: 1,
    },
    {
        name: "POLY + Bands",
        value: 2,
    },
    {
        name: "SEGS + Bands",
        value: 3,
    }
];

function init() {
    createDropDown(nUnit, data)
    row3.style.display = 'none'
    row4.style.display = 'none'
    row5.style.display = 'none'
}

init()

data.addEventListener('change', (e) => {
    console.log(e.target.value, 'adasd');
    if (e.target.value == 0) {
        row2.style.display = 'block'
        row3.style.display = 'none'
        row4.style.display = 'none'
        row5.style.display = 'none'
    }
    if (e.target.value == 1) {
        row3.style.display = 'block'
        row4.style.display = 'none'
        row5.style.display = 'none'
        row2.style.display = 'none'
    } else if (e.target.value == 2) {
        row3.style.display = 'block'
        row5.style.display = 'block'
        row4.style.display = 'none'
        row2.style.display = 'none'
    } else if (e.target.value == 3) {
        row4.style.display = 'block'
        row5.style.display = 'block'
        row3.style.display = 'none'
        row2.style.display = 'none'
    }
})

function validateAge() {
    var ageValue = Number(neut.value);
    var msg;
    var parentId = "calculator-row-3";
    var elementName = "eosError";
    
    if (ageValue > 100) {
      msg =
        "The percentage must be lower than 100%.";
      showError(parentId, elementName, msg);
    } else {
      removeError(elementName);
    }
  }

function getExact() {
    var counting = Number(counts.value)
    var datas = Number(getSelectedValue(data))
    var ne = Number(neut.value)
    var po = Number(poly.value)
    var se = Number(segs.value)
    var ba = Number(band.value)

    var result, result2, result3, result4 = 0;
    if (datas == 0) {
        result = counting * 1000 * ne / 100;
    } else if (datas == 1) {
        result2 = counting * 1000 * po / 100;
    } else if (datas == 2) {
        result3 = counting * 1000 * (po + ba) / 100;
    } else if (datas == 3) {
        result4 = counting * 1000 * (se + ba) / 100;
    }

    console.log(result);
    return [result, result2, result3, result4];

};

function showResult() {
    resultPage2(queryParams)
    var [result, result2, result3, result4] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    var percentile = result;
    var percentile2 = result2;
    var percentile3 = result3;
    var percentile4 = result4;
    var delta = Number(getSelectedValue(data))

    output.innerHTML = " ";
    if (delta == 0) {
        div1.innerHTML = "ANC  " + "  " + result.toFixed(0) + " " + " cells/μL";
    } else if (delta == 1) {
        div1.innerHTML = "ANC  " + "  " + result2.toFixed(0) + " " + " cells/μL";
    } else if (delta == 2) {
        div1.innerHTML = "ANC  " + "  " + result3.toFixed(0) + " " + " cells/μL";
    } else if (delta == 3) {
        div1.innerHTML = "ANC  " + "  " + result4.toFixed(0) + " " + " cells/μL";
    }

    if (delta == 0) {
        if (percentile < 500) {
            div2.innerHTML = '❗ The calculated ANC is indicative of <b>severe neutropenia</b>.';
        } else if (percentile >= 500 && percentile < 1000) {
            div2.innerHTML = '🔶 The calculated ANC is indicative of <b>moderate neutropenia</b>.';
        } else if (percentile >= 1000 && percentile < 1500) {
            div2.innerHTML = '🔅 The calculated ANC is indicative of <b>mild neutropenia</b>.';
        } else if (percentile >= 1500 && percentile < 8000) {
            div2.innerHTML = '✅ The calculated ANC is within the typical range.';
        } else if (percentile >= 8000) {
            div2.innerHTML = '❗ The calculated ANC is indicative of <b>neutrophilia</b>.';
        }
    }

    if (delta == 1) {
        if (percentile2 < 500) {
            div2.innerHTML = '❗ The calculated ANC is indicative of <b>severe neutropenia</b>.';
        } else if (percentile2 >= 500 && percentile2 < 1000) {
            div2.innerHTML = '🔶 The calculated ANC is indicative of <b>moderate neutropenia</b>.';
        } else if (percentile2 >= 1000 && percentile2 < 1500) {
            div2.innerHTML = '🔅 The calculated ANC is indicative of <b>mild neutropenia</b>.';
        } else if (percentile2 >= 1500 && percentile2 < 8000) {
            div2.innerHTML = '✅ The calculated ANC is within the typical range.';
        } else if (percentile2 >= 8000) {
            div2.innerHTML = '❗ The calculated ANC is indicative of <b>neutrophilia</b>.';
        }
    }

    if (delta == 2) {
        if (percentile3 < 500) {
            div2.innerHTML = '❗ The calculated ANC is indicative of <b>severe neutropenia</b>.';
        } else if (percentile3 >= 500 && percentile3 < 1000) {
            div2.innerHTML = '🔶 The calculated ANC is indicative of <b>moderate neutropenia</b>.';
        } else if (percentile3 >= 1000 && percentile3 < 1500) {
            div2.innerHTML = '🔅 The calculated ANC is indicative of <b>mild neutropenia</b>.';
        } else if (percentile3 >= 1500 && percentile3 < 8000) {
            div2.innerHTML = '✅ The calculated ANC is within the typical range.';
        } else if (percentile3 >= 8000) {
            div2.innerHTML = '❗ The calculated ANC is indicative of <b>neutrophilia</b>.';
        }
    }

    if (delta == 3) {
        if (percentile4 < 500) {
            div2.innerHTML = '❗ The calculated ANC is indicative of <b>severe neutropenia</b>.';
        } else if (percentile4 >= 500 && percentile4 < 1000) {
            div2.innerHTML = '🔶 The calculated ANC is indicative of <b>moderate neutropenia</b>.';
        } else if (percentile4 >= 1000 && percentile4 < 1500) {
            div2.innerHTML = '🔅 The calculated ANC is indicative of <b>mild neutropenia</b>.';
        } else if (percentile4 >= 1500 && percentile4 < 8000) {
            div2.innerHTML = '✅ The calculated ANC is within the typical range.';
        } else if (percentile4 >= 8000) {
            div2.innerHTML = '❗ The calculated ANC is indicative of <b>neutrophilia</b>.';
        }
    }

    output.append(div1);
    output.append(div2);
};

calcBtn.addEventListener("click", showResult);
neut.addEventListener("input", validateAge);


window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}; 