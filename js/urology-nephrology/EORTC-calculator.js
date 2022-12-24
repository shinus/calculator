var tumor = getElement("tumors_dd_Id");
var diameter = getElement("diameter_dd_Id");
var rate = getElement("rate_dd_Id");
var disease = getElement("disease_dd_Id");
var CIS = getElement("CIS_dd_Id");
var grade = getElement("grade_dd_Id");
var calcBtn = getElement("calculate_btn");
var calc = document.getElementsByClassName('form-control')


const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "tumorUnit", values: tumor },
    { name: "diameterUnit", values: diameter },
    { name: "rateUnit", values: rate },
    { name: "diseaseUnit", values: disease },
    { name: "CISUnit", values: CIS },
    { name: "gradeUnit", values: grade },
];

var recupt = {
    "0":  { y1: "15%", y5: '31%' },
    "1-4": { y1: '24%', y5: '46%' },
    "5-9": { y1: '38%', y5: '62%' },
    "10-17": { y1: '61%', y5: '78%' },
}

var progpt = {
    "0": { y1: '0.2%', y5: '0.8%' },
    "2-6": { y1: ' 1%', y5: ' 6%' },
    "7-13": { y1: ' 5%', y5: '17%' },
    "14-23": { y1: '17%', y5: '45%' },
}

var tumorUnits = [

    {
        name: "select",
        value: 0,
    },
    {

        name: "single",
        value: JSON.stringify({ rec: 0, pro: 0 }),
    },
    {
        name: "2-7",
        value: JSON.stringify({ rec: 3, pro: 3 }),
    },
    {
        name: "8",
        value: JSON.stringify({ rec: 6, pro: 3 }),
    }
];
 
var diaUnits = [
    {
        name: "select",
        value: 0,
    },

    {
        name: "<3cm",
        value: JSON.stringify({ rec: 0, pro: 0 }),
    },
    {
        name: ">3cm",
        value: JSON.stringify({ rec: 3, pro: 3 }),
    },
];


var rateUnits = [
    {
        name: "select",
        value: 0,
    },
    {
        name: "primary",
        value: JSON.stringify({ rec: 0, pro: 0 }),
    },
    {
        name: "< recurrence / year",
        value: JSON.stringify({ rec: 2, pro: 2 }),
    },
    {
        name: "> recurrence / year",
        value: JSON.stringify({ rec: 4, pro: 2 }),
    },
];

var diseaseUnits = [
    {
        name: "select",
        value: 0,
    },

    {
        name: "Ta",
        value: JSON.stringify({ rec: 0, pro: 0 }),
    },
    {
        name: "T1",
        value: JSON.stringify({ rec: 1, pro: 4 }),
    },
];

var CISUnits = [
    {
        name: "select",
        value: 0,
    },

    {
        name: "yes",
        value: JSON.stringify({ rec: 1, pro: 6 }),
    },
    {
        name: "no",
        value: JSON.stringify({ rec: 0, pro: 0 }),
    },
];

var gradeUnits = [
    {
        name: "select",
        value: 0,
    },

    {
        name: "G1",
        value: JSON.stringify({ rec: 0, pro: 0 }),
    },
    {
        name: "G2",
        value: JSON.stringify({ rec: 1, pro: 0 }),
    },
    {
        name: "G3",
        value: JSON.stringify({ rec: 2, pro: 5 }),
    },
];


function init() {
    createDropDown(tumorUnits, tumor);
    createDropDown(diaUnits, diameter);
    createDropDown(rateUnits, rate);
    createDropDown(diseaseUnits, disease);
    createDropDown(CISUnits, CIS);
    createDropDown(gradeUnits, grade);
}

init();


function calca() {
    var recurrencePt = 0
    var progressionPt = 0

    let allDD = {
        tumor: {
            rec: JSON.parse(getSelectedValue(tumor)).rec,
            pro: JSON.parse(getSelectedValue(tumor)).pro,
        },
        diameter: {
            rec: JSON.parse(getSelectedValue(diameter)).rec,
            pro: JSON.parse(getSelectedValue(diameter)).pro
        },
        rate: {
            rec: JSON.parse(getSelectedValue(rate)).rec,
            pro: JSON.parse(getSelectedValue(rate)).pro
        },
        disease: {
            rec: JSON.parse(getSelectedValue(disease)).rec,
            pro: JSON.parse(getSelectedValue(disease)).pro
        },
        CIS: {
            rec: JSON.parse(getSelectedValue(CIS)).rec,
            pro: JSON.parse(getSelectedValue(CIS)).pro
        },
        grade: {
            rec: JSON.parse(getSelectedValue(grade)).rec,
            pro: JSON.parse(getSelectedValue(grade)).pro
        },
    }
    {
        let Ryear1, Ryear2, Pyear1, Pyear2 = 0
        recurrencePt = allDD.tumor.rec + allDD.diameter.rec + allDD.disease.rec + allDD.CIS.rec + allDD.grade.rec + allDD.rate.rec
        progressionPt = allDD.tumor.pro + allDD.diameter.pro + allDD.disease.pro + allDD.CIS.pro + allDD.grade.pro + allDD.rate.pro

     
        if (recurrencePt == 0) {
            Ryear1 = recupt['0'].y1
            Ryear2 = recupt['0'].y5
        } else if (recurrencePt > 0 && recurrencePt <= 4) {
            Ryear1 = recupt["1-4"].y1
            Ryear2 = recupt["1-4"].y5
        } else if (recurrencePt >= 5 && recurrencePt <= 9) {
            Ryear1 = recupt["5-9"].y1
            Ryear2 = recupt["5-9"].y5
        } else if (recurrencePt >= 10 && recurrencePt <= 17) {
            Ryear1 = recupt["10-17"].y1
            Ryear2 = recupt["10-17"].y5
        }
        

        if (progressionPt == 0) {
            Pyear1 = progpt['0'].y1
            Pyear2 = progpt['0'].y5
        } else if (progressionPt > 0 && progressionPt <= 6) {
            Pyear1 = progpt["2-6"].y1
            Pyear2 = progpt["2-6"].y5
        } else if (progressionPt >= 7 && progressionPt <= 13) {
            Pyear1 = progpt["7-13"].y1
            Pyear2 = progpt["7-13"].y5
        } else if (progressionPt >= 14 && progressionPt <= 23) {
            Pyear1 = progpt["14-23"].y1
            Pyear2 = progpt["14-23"].y5
        }

        console.log(progressionPt, Pyear1, Pyear2);
 
        return { recurrencePt, progressionPt, Ryear1, Ryear2, Pyear1, Pyear2 };
    }
}



function showResult() {
    resultPage2(queryParams)
    var {recurrencePt, progressionPt, Ryear1, Ryear2, Pyear1, Pyear2} = calca();
    output.innerHTML = ""
    


    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");

    div1.innerHTML = "Recurrence points" + " \xa0\xa0 " +  recurrencePt;
    div2.innerHTML = "Probability of recurrence at 1 year" + " \xa0\xa0" + Ryear1; 
    div3.innerHTML = "Probability of recurrence at 5 years"+ " \xa0\xa0 " + Ryear2; 
    div4.innerHTML = "Progression points" + " \xa0\xa0 " + progressionPt; 
    div5.innerHTML = "Probability of progression at 1 year"+ " \xa0\xa0 " + Pyear1; 
    div6.innerHTML = "Probability of progression at 5 years"+ " \xa0\xa0 " + Pyear2; 

    

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
}

calcBtn.addEventListener("click", showResult);

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};
