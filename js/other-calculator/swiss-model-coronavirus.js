var mask = getElement("mask_dd_Id");
var wash = getElement("wash_dd_Id");
var protection = getElement("protection_dd_Id");
var they = getElement("they_dd_Id");
var hands = getElement("hands_dd_Id");
var distance = getElement("Distance_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "mask", values: mask },
    { name: "wash", values: wash },
    { name: "protection", values: protection },
    { name: "they", values: they },
    { name: "hands", values: hands },
    { name: "distance", values: distance },
]

var coUnit = [
    {
        name: "No",
        value: 1
    },
    {
        name: "Yes",
        value: 4
    },
];

var moUnit = [
    {
        name: "No",
        value: 1
    },
    {
        name: "Yes",
        value: 1.49
    },
];

var brUnit = [
    {
        name: "No",
        value: 1
    },
    {
        name: "Yes",
        value: 2.9
    },
];

var crUnit = [
    {
        name: "⩽ 6 ft (1.8m)",
        value: 1
    },
    {
        name: "> 6 ft (1.8m)",
        value: 4.92
    },
];

function init() {
    createDropDown(coUnit, mask)
    createDropDown(moUnit, wash)
    createDropDown(brUnit, protection)
    createDropDown(coUnit, they)
    createDropDown(moUnit, hands)
    createDropDown(crUnit, distance)
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
}

init();


// function getExact() {
//     var a = Number(getSelectedValue(mask))
//     var b = Number(getSelectedValue(wash))
//     var c = Number(getSelectedValue(protection))
//     var d = Number(getSelectedValue(they))
//     var e = Number(getSelectedValue(hands))
//     var f = Number(getSelectedValue(distance))

//     var result,result2,result3,result4 = 0;

//     if (f == 1 && c == 1 && b == 1 && e == 1 && a == 1 && d == 1) {
//         result = 'Your risk of getting infected <b>is not reduced in any way. ❌ </b> <br>';
//     } else if (f == 4.92 && c == 2.9 && b == 1.49 && e == 1.49 && a == 4 && d == 4) {
//         result = 'Yay! You\'ve got all the slices possible in this calculator. Thank you for taking such a good care of yourself & other people. Well done! ⭐';
//     } else {
//         result = 'In this situation, you\'re <b>' + result + ' % safer</b>, compared to a situation when nobody uses personal protective equipment nor follows the recommendations of keeping the distance and hand hygiene. Good job! ✔️';
//     }



//     if ((f == 1 || f == 4.92) && (c == 2.9 || c == 1) && (b == 1 || b == 1.49) && (e == 1.49 || e == 1) && a == 1 && d == 1) {
//         result2 = 'Masks are essential accessories nowadays. Try to spread the news about their <a href="https://www.omnicalculator.com/everyday-life/coronavirus-mask">importance and how to use them correctly</a> to others. 😷';
//     } else if ((f == 1 || f == 4.92) && (c == 2.9 || c == 1) && (b == 1.49 || b == 1) && (e == 1.49 || e == 1) && a == 4 && d == 1) {
//         result2 = 'Masks are essential accessories nowadays. Try to spread the news about their <a href="https://www.omnicalculator.com/everyday-life/coronavirus-mask">importance and how to use them correctly</a> to others. 😷';
//     } else if ((f == 1 || f == 4.92) && (c == 2.9 || c == 1) && (b == 1.49 || b == 1) && (e == 1.49 || e == 1) && a == 1 && d == 4) {
//         result2 = 'Masks are essential accessories nowadays. You should wear a <a href="https://www.omnicalculator.com/everyday-life/coronavirus-mask">mask that covers your mouth and nose</a> and fits your face. 😷';
//     } else {
//         result2 = ' ';
//     }


//     if ((f == 1 || f == 4.92) && (c == 2.9 || c == 1) && b == 1.49 && e == 1 && (a == 4 || a == 1) && (d == 4 || d == 1)) {
//         result3 = 'Wash your hands regularly and <a href="https://www.omnicalculator.com/health/swiss-cheese-coronavirus#2-handwashing">properly</a> or <a href="https://www.omnicalculator.com/health/hand-sanitizer">use hand sanitizer</a> in need. Convince others to do the same! Proper hygiene is crucial not just in the times of corona. 🧼';
//     } else if ((f == 1 || f == 4.92) && (c == 2.9 || c == 1) && b == 1 && e == 1.49 && (a == 4 || a == 1) && (d == 4 || d == 1)) {
//         result3 = 'Wash your hands regularly and <a href="https://www.omnicalculator.com/health/swiss-cheese-coronavirus#2-handwashing">properly</a> or <a href="https://www.omnicalculator.com/health/hand-sanitizer">use hand sanitizer</a> in need. Proper hygiene is crucial not just in the times of corona. 🧼';
//     } else if ((f == 1 || f == 4.92) && (c == 2.9 || c == 1) && b == 1 && e == 1 && (a == 4 || a == 1) && (d == 4 || d == 1)) {
//         result3 = 'You should keep better hand hygiene to avoid contracting the virus. Wash your hands regularly and <a href="https://www.omnicalculator.com/health/swiss-cheese-coronavirus#2-handwashing">properly</a> or <a href="https://www.omnicalculator.com/health/hand-sanitizer">use hand sanitizer</a>. Convince others to do the same! Proper hygiene is crucial not just in the times of corona. 🧼';
//     } else {
//         result3 = ' ';
//     }


//     if ((f == 1 || f == 4.92) && c == 1 && (b == 1 || b == 1.49) && (e == 1.49 || e == 1) && (a == 4 || a == 1) && (d == 4 || d == 1)) {
//         result4 = 'If you want to upgrade your protection to the next level, use eye protection equipment. 🥽';
//     }
//     if (f == 1 && (c == 2.9 || c == 1) && (b == 1.49 || b == 1) && (e == 1.49 || e == 1) && (a == 4 || a == 1) && (d == 4 || d == 1)) {
//         result4 = 'Try to maintain a proper distance to stay safe. 📏';
//     }
//     result4 = '<b>We have to fight the pandemic together. Protect yourself, let others know what they can do.</b>';


    
//     return [result,result2,result3,result4];

// };

function showResult() {
    resultPage2(queryParams)

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");

   
    output.innerHTML = " ";

    var a = Number(getSelectedValue(mask))
    var b = Number(getSelectedValue(wash))
    var c = Number(getSelectedValue(protection))
    var d = Number(getSelectedValue(they))
    var e = Number(getSelectedValue(hands))
    var f = Number(getSelectedValue(distance))
    var z = a + b + c + d + e + f;

    var risk = (1 - (1 / z)) * 100;;

    if (f == 1 && c == 1 && b == 1 && e == 1 && a == 1 && d == 1) {
        div1.innerHTML  = 'Your risk of getting infected <b>is not reduced in any way. ❌ </b> <br>';
    } else if (f == 4.92 && c == 2.9 && b == 1.49 && e == 1.49 && a == 4 && d == 4) {
        div1.innerHTML  = 'Yay! You\'ve got all the slices possible in this calculator. Thank you for taking such a good care of yourself & other people. Well done! ⭐';
    } else {
        div1.innerHTML  = 'In this situation, you\'re <b> ' + (risk.toFixed(2)) + ' % safer</b>, compared to a situation when nobody uses personal protective equipment nor follows the recommendations of keeping the distance and hand hygiene. Good job! ✔️';
    }



    if ((f == 1 || f == 4.92) && (c == 2.9 || c == 1) && (b == 1 || b == 1.49) && (e == 1.49 || e == 1) && a == 1 && d == 1) {
        div2.innerHTML = 'Masks are essential accessories nowadays. Try to spread the news about their <a href="https://www.omnicalculator.com/everyday-life/coronavirus-mask">importance and how to use them correctly</a> to others. 😷';
    } else if ((f == 1 || f == 4.92) && (c == 2.9 || c == 1) && (b == 1.49 || b == 1) && (e == 1.49 || e == 1) && a == 4 && d == 1) {
        div2.innerHTML = 'Masks are essential accessories nowadays. Try to spread the news about their <a href="https://www.omnicalculator.com/everyday-life/coronavirus-mask">importance and how to use them correctly</a> to others. 😷';
    } else if ((f == 1 || f == 4.92) && (c == 2.9 || c == 1) && (b == 1.49 || b == 1) && (e == 1.49 || e == 1) && a == 1 && d == 4) {
        div2.innerHTML = 'Masks are essential accessories nowadays. You should wear a <a href="https://www.omnicalculator.com/everyday-life/coronavirus-mask">mask that covers your mouth and nose</a> and fits your face. 😷';
    } else {
        div2.innerHTML = ' ';
    }


    if ((f == 1 || f == 4.92) && (c == 2.9 || c == 1) && b == 1.49 && e == 1 && (a == 4 || a == 1) && (d == 4 || d == 1)) {
        div3.innerHTML = 'Wash your hands regularly and <a href="https://www.omnicalculator.com/health/swiss-cheese-coronavirus#2-handwashing">properly</a> or <a href="https://www.omnicalculator.com/health/hand-sanitizer">use hand sanitizer</a> in need. Convince others to do the same! Proper hygiene is crucial not just in the times of corona. 🧼';
    } else if ((f == 1 || f == 4.92) && (c == 2.9 || c == 1) && b == 1 && e == 1.49 && (a == 4 || a == 1) && (d == 4 || d == 1)) {
        div3.innerHTML = 'Wash your hands regularly and <a href="https://www.omnicalculator.com/health/swiss-cheese-coronavirus#2-handwashing">properly</a> or <a href="https://www.omnicalculator.com/health/hand-sanitizer">use hand sanitizer</a> in need. Proper hygiene is crucial not just in the times of corona. 🧼';
    } else if ((f == 1 || f == 4.92) && (c == 2.9 || c == 1) && b == 1 && e == 1 && (a == 4 || a == 1) && (d == 4 || d == 1)) {
        div3.innerHTML = 'You should keep better hand hygiene to avoid contracting the virus. Wash your hands regularly and <a href="https://www.omnicalculator.com/health/swiss-cheese-coronavirus#2-handwashing">properly</a> or <a href="https://www.omnicalculator.com/health/hand-sanitizer">use hand sanitizer</a>. Convince others to do the same! Proper hygiene is crucial not just in the times of corona. 🧼';
    } else {
        div3.innerHTML = ' ';
    }


    if ((f == 1 || f == 4.92) && c == 1 && (b == 1 || b == 1.49) && (e == 1.49 || e == 1) && (a == 4 || a == 1) && (d == 4 || d == 1)) {
        div4.innerHTML = 'If you want to upgrade your protection to the next level, use eye protection equipment. 🥽';
    }
    if (f == 1 && (c == 2.9 || c == 1) && (b == 1.49 || b == 1) && (e == 1.49 || e == 1) && (a == 4 || a == 1) && (d == 4 || d == 1)) {
        div4.innerHTML = 'Try to maintain a proper distance to stay safe. 📏';
    }
    div4.innerHTML = '<b>We have to fight the pandemic together. Protect yourself, let others know what they can do.</b>';


    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
};

calcBtn.addEventListener("click", showResult);

