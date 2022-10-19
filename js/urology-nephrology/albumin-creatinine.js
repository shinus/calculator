var albumin = getElement("albumin_input_Id");
var creatinine = getElement("creatinine_input_Id");
var creatinine_dd = getElement("creatinine_dd_Id");
var output = getElement("result-section");
var calcBtn = getElement("calculate_btn");

var coef = [
    { name: "mg/dl", value: 0 },
    { name: "mm/mol", value: 1 }
]

var data = [
    [
        ["A1"],
        ["<30"],
        ["Normal to mildly increased"],
    ],
    [
        ["A2"],
        ["30-300"],
        ["Moderately increased"]
    ],
    [
        ["A3"],
        [">300"],
        ["Severely increased"]
    ]
];

var head = [
    "Category",
    "ACR(mg/g)",
    "terms",
];

function init() {
    createDropDown(coef, creatinine_dd)
}
init()

function getExact() {
    var alb = Number(albumin.value);
    var creat = Number(creatinine.value);

    var result = 0;


    result = alb / creat * 1000;


    console.log(result);
    return math.bignumber(result);

};

function showResult() {
    var result = Number(getExact());
    var test = document.createElement("div")
    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    div1.innerHTML =
        "<b>ACR </b> :" +
        " " +
        result.toFixed(2) +
        "mg/g" ;

    var percentile = result;
    output.append(div1);
    output.append(addTable(data, head));
};

calcBtn.addEventListener("click", showResult);
