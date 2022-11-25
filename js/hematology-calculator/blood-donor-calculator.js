var want = getElement("want_dd_Id");
var blood = getElement("blood_dd_Id");
var type = getElement("type_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "wantUnit", values: want },
    { name: "bloodUnit", values: blood },
    { name: "typeUnit", values: type },
]

var wantU = [
    {
        name: "donate",
        value: 0,
    },
    {
        name: "recieve",
        value: 1,
    },
];

var bloodU = [ 
    {
        name: "blood",
        value: 0,
    },
    {
        name: "blood plasma",
        value: 1,
    },
];

var typeU = [
    {
        name: "o-",
        value: 1,
    },
    {
        name: "o+",
        value: 2,
    },
    {
        name: "A-",
        value: 3,
    },
    {
        name: "A+",
        value: 4,
    },
    {
        name: "B-",
        value: 5,
    },
    {
        name: "B+",
        value: 6,
    },
    {
        name: "AB-",
        value: 7,
    },
    {
        name: "AB+",
        value: 8,
    },
];

function init() {
    createDropDown(wantU, want);
    createDropDown(bloodU, blood);
    createDropDown(typeU, type);
}

init();


function getExact() {
    var wan = Number(getSelectedValue(want))
    var blo = Number(getSelectedValue(blood))
    var ty = Number(getSelectedValue(type))


    var result = 0;

    if(wan == 0 && blo == 0 && ty ==1 ) {
        result = "You can donate blood to blood types <b> 0-, 0+, A-, A+, B-, B+, AB-, AB+. </b>"
    } else if (wan == 0 && blo ==0 && ty == 2) {
        result = "You can donate blood to blood types <b> 0+, A+, B+, AB+.</b>"
    } else if (wan == 0 && blo ==0 && ty == 3) {
        result = "You can donate blood to blood types <b> A-, A+, AB-, AB+.</b>"
    } else if (wan == 0 && blo ==0 && ty == 4) {
        result = "You can donate blood to blood types <b> A+, AB+.</b>"
    } else if (wan == 0 && blo ==0 && ty == 5) {
        result = "You can donate blood to blood types <b>B-, B+, AB-, AB+. </b>"
    } else if (wan == 0 && blo ==0 && ty == 6) {
        result = "You can donate blood to blood types <b>B+, AB+.</b>"
    } else if (wan == 0 && blo ==0 && ty == 7) {
        result = "You can donate blood to blood types <b>AB-, AB+.</b>"
    } else if (wan == 0 && blo ==0 && ty == 8) {
        result = "You can donate blood to blood types <b> AB+.</b>"
    }

    if(wan == 1 && blo == 0 && ty == 1) {
        result = "You can receive blood from blood types <b>0-.</b>"
    } else if(wan == 1 && blo == 0 && ty == 2) {
        result = "You can receive blood from blood types <b>0-, 0+.</b>"
    } else if(wan == 1 && blo == 0 && ty == 3) {
        result = "You can receive blood from blood types <b>0-, A-.</b>"
    } else if(wan == 1 && blo == 0 && ty == 4) {
        result = "You can receive blood from blood types <b>0-, 0+, A-, A+.</b."
    } else if(wan == 1 && blo == 0 && ty == 5) {
        result = "You can receive blood from blood types <b>0-, B-.</b>"
    } else if(wan == 1 && blo == 0 && ty == 6) {
        result = "You can receive blood from blood types <b>0-, 0+, B-, B+.</b>"
    } else if(wan == 1 && blo == 0 && ty == 7) {
        result = "You can receive blood from blood types <b>0-, A-, B-, AB-.</b>"
    } else if(wan == 1 && blo == 0 && ty == 8) {
        result = "You can receive blood from blood types <b>0-, 0+, A-, A+, B-, B+, AB-, AB+.</b>"
    }

    if(wan ==0 && blo == 1 && ty == 1) {
        result = "You can donate blood plasma to blood types <b> 0. </b>"
    } else if(wan == 0 && blo == 1 && ty == 2) {
        result = "You can donate blood plasma to blood types <b> 0.</b>"
    } else if(wan == 0 && blo == 1 && ty == 3) {
        result = "You can donate blood plasma to blood types <b> 0, A.</b>"
    } else if(wan == 0 && blo == 1 && ty == 4) {
        result = "You can donate blood plasma to blood types <b> 0, A. </b>"
    } else if(wan == 0 && blo == 1 && ty == 5) {
        result = "You can donate blood plasma to blood types <b> 0, B. </b>"
    } else if(wan == 0 && blo == 1 && ty == 6) {
        result = "You can donate blood plasma to blood types <b> 0, B.</b>"
    } else if(wan == 0 && blo == 1 && ty == 7) {
        result = "You can donate blood plasma to blood types <b> 0, A, B, AB.</b>"
    } else if(wan == 0 && blo == 1 && ty == 8) {
        result = "You can donate blood plasma to blood types <b>0, A, B, AB.</b>"
    }

    if(wan == 1 && blo == 1 && ty == 1) {
        result = "You can receive blood plasma from blood types <b> 0, A, B, AB.</b>"
    } else if( wan ==1 && blo == 1 && ty == 2) {
        result = "You can receive blood plasma from blood types <b> 0, A, B, AB.</b>"
    } else if( wan ==1 && blo == 1 && ty == 3) {
        result = "You can receive blood plasma from blood types <b>  A, AB.</b>"
    } else if( wan ==1 && blo == 1 && ty == 4) {
        result = "You can receive blood plasma from blood types <b> A, AB.</b>"
    } else if( wan ==1 && blo == 1 && ty == 5) {
        result = "You can receive blood plasma from blood types <b> B, AB.</b>"
    } else if( wan ==1 && blo == 1 && ty == 6) {
        result = "You can receive blood plasma from blood types <b> B, AB.</b>"
    } else if( wan ==1 && blo == 1 && ty == 7) {
        result = "You can receive blood plasma from blood types <b>AB.</b>"
    } else if( wan ==1 && blo == 1 && ty == 8) {
        result = "You can receive blood plasma from blood types <b>AB.</b>"
    }

    console.log(result );
    return [result];

};

function showResult() {
    resultPage2(queryParams)
    var result = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");

    var percentile = result;

    output.innerHTML = " ";
    div1.innerHTML = result;

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