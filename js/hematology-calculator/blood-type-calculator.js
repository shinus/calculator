var mother = getElement("Mother_dd_Id");
var father = getElement("Father_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "mother", values: mother },
    { name: "father", values: father },
]

var mUnit = [
    {
        name: "A Rh+",
        value: 0,
    },
    {
        name: "A Rh-",
        value: 1,
    },
    {
        name: "B Rh+",
        value: 2,
    },
    {
        name: "B Rh-",
        value: 3,
    },
    {
        name: "AB Rh+",
        value: 4,
    },
    {
        name: "AB Rh-",
        value: 5,
    },
    {
        name: "O Rh+",
        value: 6,
    },
    {
        name: "B Rh-",
        value: 7,
    }
];

var data = [
    [
        ["A"],
        ["A0 or AA"],
    ],
    [
        ["B"],
        ["B0 or BB"],
    ],
    [
        ["AB"],
        ["AB"],
    ],
    [
        ["0"],
        ["00"],
    ]
];
var data2 = [
    [
        ["AA"],
        ["A0"],
        ["AA"],
        ["AA"],
    ],
    [
        ["AB"],
        ["B0"],
        ["AB"],
        ["AB"],
    ]
];

var head = [
    "phenotype",
    "genotype",
];

var head2 = [
    "♂️\♀️",
    "A",
    "0",
    "A",
    "A",
];

function init() {
    createDropDown(mUnit, mother)
    createDropDown(mUnit, father);
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init()

function getExact() {
    var moth = Number(mother.value)
    var fath = Number(father.value)

    var resultA, resultB, resultAB, resultO, resultrhP, resultrhM = 0;

    if (moth == 0 && fath == 0) {
        resultA = " 93.75%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 6.25%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 0 && fath == 1) {
        resultA = " 93.75%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 6.25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 0 && fath == 2) {
        resultA = " 18.75%"
        resultB = " 18.75%"
        resultAB = " 56.25%"
        resultO = " 6.25%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 0 && fath == 3) {
        resultA = " 18.75%"
        resultB = " 18.75%"
        resultAB = " 56.25%"
        resultO = " 6.25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 0 && fath == 4) {
        resultA = " 50%"
        resultB = " 12.5%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 0 && fath == 5) {
        resultA = " 50%"
        resultB = " 12.5%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 0 && fath == 6) {
        resultA = " 75%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 0 && fath == 7) {
        resultA = " 75%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 1 && fath == 0) {
        resultA = " 93.75%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 6.25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 1 && fath == 1) {
        resultA = " 93.75%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 6.25%"
        resultrhP = " 0%"
        resultrhM = " 100%"
    } else if (moth == 1 && fath == 2) {
        resultA = " 18.75%"
        resultB = " 18.75%"
        resultAB = " 56.25%"
        resultO = " 6.25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 1 && fath == 3) {
        resultA = " 18.75%"
        resultB = " 18.75%"
        resultAB = " 56.25%"
        resultO = " 6.25%"
        resultrhP = " 0%"
        resultrhM = " 100%"
    } else if (moth == 1 && fath == 4) {
        resultA = " 50%"
        resultB = " 12.5%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 1 && fath == 5) {
        resultA = " 50%"
        resultB = " 12.5%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 1 && fath == 6) {
        resultA = " 75%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 1 && fath == 7) {
        resultA = " 75%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 0%"
        resultrhM = " 100%"
    } else if (moth == 2 && fath == 0) {
        resultA = " 18.75%"
        resultB = " 18.75%"
        resultAB = " 56.25%"
        resultO = " 6.25%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 2 && fath == 1) {
        resultA = " 18.75%"
        resultB = " 18.75%"
        resultAB = " 56.25%"
        resultO = " 6.25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 2 && fath == 2) {
        resultA = " 0%"
        resultB = " 93.75%"
        resultAB = " 0%"
        resultO = " 6.25%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 2 && fath == 3) {
        resultA = " 0%"
        resultB = " 93.75%"
        resultAB = " 0%"
        resultO = " 6.25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 2 && fath == 4) {
        resultA = " 12.5%"
        resultB = " 50%"
        resultAB = " 37.5%"
        resultO = "  0%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 2 && fath == 5) {
        resultA = " 12.5%"
        resultB = " 50%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 2 && fath == 6) {
        resultA = " 0%"
        resultB = " 75%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 2 && fath == 7) {
        resultA = " 0%"
        resultB = " 75%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 3 && fath == 0) {
        resultA = " 18.75%"
        resultB = " 18.75%"
        resultAB = " 56.25%"
        resultO = " 6.25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 3 && fath == 1) {
        resultA = " 18.75%"
        resultB = " 18.75%"
        resultAB = " 56.25%"
        resultO = " 6.25%"
        resultrhP = " 0%"
        resultrhM = " 100%"
    } else if (moth == 3 && fath == 2) {
        resultA = " 0%"
        resultB = " 93.75%"
        resultAB = " 0%"
        resultO = " 6.25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 3 && fath == 3) {
        resultA = " 0%"
        resultB = " 93.75%"
        resultAB = " 0%"
        resultO = " 6.25%"
        resultrhP = " 0%"
        resultrhM = " 100%"
    } else if (moth == 3 && fath == 4) {
        resultA = " 12.5%"
        resultB = " 50%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 3 && fath == 5) {
        resultA = " 12.5%"
        resultB = " 50%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 3 && fath == 6) {
        resultA = " 0%"
        resultB = " 75%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 3 && fath == 7) {
        resultA = " 0%"
        resultB = " 75%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 0%"
        resultrhM = " 100%"
    } else if (moth == 4 && fath == 0) {
        resultA = " 50%"
        resultB = " 12.5%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 4 && fath == 1) {
        resultA = " 50%"
        resultB = " 12.5%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 4 && fath == 2) {
        resultA = " 12.5%"
        resultB = " 50%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 4 && fath == 3) {
        resultA = " 12.5%"
        resultB = " 50%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 4 && fath == 4) {
        resultA = " 25%"
        resultB = " 25%"
        resultAB = " 50%"
        resultO = " 0%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 4 && fath == 5) {
        resultA = " 25%"
        resultB = " 25%"
        resultAB = " 50%"
        resultO = " 0%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 4 && fath == 6) {
        resultA = " 50%"
        resultB = " 50%"
        resultAB = " 0%"
        resultO = " 0%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 4 && fath == 7) {
        resultA = " 50%"
        resultB = " 50%"
        resultAB = " 0%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 5 && fath == 0) {
        resultA = " 50%"
        resultB = " 12.5%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 5 && fath == 1) {
        resultA = " 50%"
        resultB = " 12.5%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 0%"
        resultrhM = " 100%"
    } else if (moth == 5 && fath == 2) {
        resultA = " 12.5%"
        resultB = " 50%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 5 && fath == 3) {
        resultA = " 12.5%"
        resultB = " 50%"
        resultAB = " 37.5%"
        resultO = " 0%"
        resultrhP = " 0%"
        resultrhM = " 100%"
    } else if (moth == 5 && fath == 4) {
        resultA = " 25%"
        resultB = " 25%"
        resultAB = " 50%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 5 && fath == 5) {
        resultA = " 25%"
        resultB = " 25%"
        resultAB = " 50%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 5 && fath == 6) {
        resultA = " 50%"
        resultB = " 50%"
        resultAB = " 0%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 5 && fath == 7) {
        resultA = " 50%"
        resultB = " 50%"
        resultAB = " 0%"
        resultO = " 0%"
        resultrhP = " 0%"
        resultrhM = " 100%"
    } else if (moth == 6 && fath == 0) {
        resultA = " 75%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 6 && fath == 1) {
        resultA = " 75%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 6 && fath == 2) {
        resultA = " 0%"
        resultB = " 75%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 6 && fath == 3) {
        resultA = " 0%"
        resultB = " 75%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 6 && fath == 4) {
        resultA = " 50%"
        resultB = " 50%"
        resultAB = " 0%"
        resultO = " 0%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 6 && fath == 5) {
        resultA = " 50%"
        resultB = " 50%"
        resultAB = " 0%"
        resultO = " 0%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 6 && fath == 6) {
        resultA = " 0%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 100%"
        resultrhP = " 93.75%"
        resultrhM = " 6.25%"
    } else if (moth == 6 && fath == 7) {
        resultA = " 0%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 100%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 7 && fath == 0) {
        resultA = " 75%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 7 && fath == 1) {
        resultA = " 75%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 0%"
        resultrhM = " 100%"
    } else if (moth == 7 && fath == 2) {
        resultA = " 0%"
        resultB = " 75%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 7 && fath == 3) {
        resultA = " 0%"
        resultB = " 75%"
        resultAB = " 0%"
        resultO = " 25%"
        resultrhP = " 0%"
        resultrhM = " 100%"
    } else if (moth == 7 && fath == 4) {
        resultA = " 50%"
        resultB = " 50%"
        resultAB = " 0%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 7 && fath == 5) {
        resultA = " 50%"
        resultB = " 50%"
        resultAB = " 0%"
        resultO = " 0%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 7 && fath == 6) {
        resultA = " 0%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 100%"
        resultrhP = " 75%"
        resultrhM = " 25%"
    } else if (moth == 7 && fath == 7) {
        resultA = " 0%"
        resultB = " 0%"
        resultAB = " 0%"
        resultO = " 100%"
        resultrhP = " 0%"
        resultrhM = " 100%"
    }

    console.log(resultA, resultB, resultAB, resultO, resultrhP, resultrhM);
    return [resultA, resultB, resultAB, resultO, resultrhP, resultrhM]
}

function showResult() {
    resultPage2(queryParams)
    var [resultA, resultB, resultAB, resultO, resultrhP, resultrhM] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");
    var div7 = document.createElement("div");
    var div8 = document.createElement("div");

    // var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = "Chance for type A" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + resultA;
    div2.innerHTML = "Chance for type B" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + resultB;
    div3.innerHTML = "Chance for type AB" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + resultAB;
    div4.innerHTML = "Chance for type AB" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + resultO;
    div5.innerHTML = "Chance for type AB" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + resultrhP;
    div6.innerHTML = "Chance for type AB" + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0" + resultrhM;

    div7.innerHTML = '<b>Punnet square</b> for possible blood types';

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
    output.append(addTable(data, head));
    output.append(div7);
    output.append(addTable(data2, head2))
};

calcBtn.addEventListener("click", showResult);




