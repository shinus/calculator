var a = getElement("a_dd_Id");
var b = getElement("b_dd_Id");
var c = getElement("c_dd_Id");
var d = getElement("d_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "a", values: a },
    { name: "b", values: b },
    { name: "c", values: c },
    { name: "d", values: d },
]

var neUnit = [
    {
        name: "Not a very happy person",
        value: 2.5
    },
    {
        name: "2",
        value: 3
    },
    {
        name: "3",
        value: 3.5
    },
    {
        name: "4",
        value: 4
    },
    {
        name: "5",
        value: 4.5
    },
    {
        name: "6",
        value: 5
    },
    {
        name: "A very happy person",
        value: 5.5
    }
];

var leUnit = [
    {
        name: "Less happy",
        value: 2.5
    },
    {
        name: "2",
        value: 3
    },
    {
        name: "3",
        value: 3.5
    },
    {
        name: "4",
        value: 4
    },
    {
        name: "5",
        value: 4.5
    },
    {
        name: "6",
        value: 5
    },
    {
        name: "More happy",
        value: 5.5
    },
];

var soUnit = [
    {
        name: "Not at all",
        value: 2.5
    },
    {
        name: "2",
        value: 3
    },
    {
        name: "3",
        value: 3.5
    },
    {
        name: "4",
        value: 4
    },
    {
        name: "5",
        value: 4.5
    },
    {
        name: "6",
        value: 5
    },
    {
        name: "A great deal",
        value: 5.5
    },
];

function init() {
    createDropDown(neUnit, a)
    createDropDown(leUnit, b)
    createDropDown(soUnit, c)
    createDropDown(soUnit, d)
}

init();


function getExact() {
    var aa = Number(getSelectedValue(a))
    var bb = Number(getSelectedValue(b))
    var cc = Number(getSelectedValue(c))
    var dd = Number(getSelectedValue(d))

    var result = 0;

    result = (aa + bb + cc + dd) / 4;

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

    div1.innerHTML = "Subjective Happiness Score " + result.toFixed(2); 
    if (percentile < 4.5) {
        div2.innerHTML = 'Your happiness score is lower than that of the average person.';
    } else if (percentile>=4.5 && percentile<=5.6) {
        div2.innerHTML = 'You happiness scores falls within the average happiness score of 4.5 to 5.6, meaning  you\'re as happy as an average person! Note that college students usually score on the lower end of this spectrum, while older, retired adults score higher (an average of 5.6).';
    } else if (percentile>5.6) {
        div2.innerHTML = 'Your happiness score indicates that you’re happier than the average person.';
    }
  
    div3.innerHTML = '<i>Always keep in mind that you can always become happier, no matter the score you got today.</i>';

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