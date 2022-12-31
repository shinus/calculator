var a = getElement("a_dd_Id");
var b = getElement("b_dd_Id");
var c = getElement("c_dd_Id");
var d = getElement("d_dd_Id");
var e = getElement("e_dd_Id");
var f = getElement("f_dd_Id");
var g = getElement("g_dd_Id");
var h = getElement("h_dd_Id");
var i = getElement("i_dd_Id");
var j = getElement("j_dd_Id");
var k = getElement("k_dd_Id");
var l = getElement("l_dd_Id");
var m = getElement("m_dd_Id");
var n = getElement("n_dd_Id");
var o = getElement("o_dd_Id");
var p = getElement("p_dd_Id");
var q = getElement("q_dd_Id");
var r = getElement("r_dd_Id");
var s = getElement("s_dd_Id");
var t = getElement("t_dd_Id");
var u = getElement("u_dd_Id");
var v = getElement("v_dd_Id");
var w = getElement("w_dd_Id");
var x = getElement("x_dd_Id");
var y = getElement("y_dd_Id");
var z = getElement("z_dd_Id");
var calcBtn = getElement("calculate_btn");
var output = getElement("result-section");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "a", values: a },
    { name: "b", values: b },
    { name: "c", values: c },
    { name: "d", values: d },
    { name: "e", values: e },
    { name: "f", values: f },
    { name: "g", values: g },
    { name: "h", values: h },
    { name: "i", values: i },
    { name: "j", values: j },
    { name: "k", values: k },
    { name: "l", values: l },
    { name: "m", values: m },
    { name: "n", values: n },
    { name: "o", values: o },
    { name: "p", values: p },
    { name: "q", values: q },
    { name: "r", values: r },
    { name: "s", values: s },
    { name: "t", values: t },
    { name: "u", values: u },
    { name: "v", values: v },
    { name: "w", values: w },
    { name: "x", values: x },
    { name: "y", values: y },
    { name: "z", values: z },
]

var neUnit = [
    {
        name: "select",
        value: 0
    },
    {
        name: "Not at all",
        value: 0
    },
    {
        name: "Just a little",
        value: 1
    },
    {
        name: "Quite a bit",
        value: 2
    },
    {
        name: "Very much",
        value: 3
    },
];

function init() {
    createDropDown(neUnit, a)
    createDropDown(neUnit, b)
    createDropDown(neUnit, c)
    createDropDown(neUnit, d)
    createDropDown(neUnit, e)
    createDropDown(neUnit, f)
    createDropDown(neUnit, g)
    createDropDown(neUnit, h)
    createDropDown(neUnit, i)
    createDropDown(neUnit, j)
    createDropDown(neUnit, k)
    createDropDown(neUnit, l)
    createDropDown(neUnit, m)
    createDropDown(neUnit, n)
    createDropDown(neUnit, o)
    createDropDown(neUnit, p)
    createDropDown(neUnit, q)
    createDropDown(neUnit, r)
    createDropDown(neUnit, s)
    createDropDown(neUnit, t)
    createDropDown(neUnit, u)
    createDropDown(neUnit, v)
    createDropDown(neUnit, w)
    createDropDown(neUnit, x)
    createDropDown(neUnit, y)
    createDropDown(neUnit, z)
}

init();


function getExact() {

    var aa = Number(getSelectedValue(a))
    var bb = Number(getSelectedValue(b))
    var cc = Number(getSelectedValue(c))
    var dd = Number(getSelectedValue(d))
    var ee = Number(getSelectedValue(e))
    var ff = Number(getSelectedValue(f))
    var gg = Number(getSelectedValue(g))
    var hh = Number(getSelectedValue(h))
    var ii = Number(getSelectedValue(i))
    var jj = Number(getSelectedValue(j))
    var kk = Number(getSelectedValue(k))
    var ll = Number(getSelectedValue(l))
    var mm = Number(getSelectedValue(m))
    var nn = Number(getSelectedValue(n))
    var oo = Number(getSelectedValue(o))
    var pp = Number(getSelectedValue(p))
    var qq = Number(getSelectedValue(q))
    var rr = Number(getSelectedValue(r))
    var ss = Number(getSelectedValue(s))
    var tt = Number(getSelectedValue(t))
    var uu = Number(getSelectedValue(u))
    var vv = Number(getSelectedValue(v))
    var ww = Number(getSelectedValue(w))
    var xx = Number(getSelectedValue(x))
    var yy = Number(getSelectedValue(y))
    var zz = Number(getSelectedValue(z))

    var result, result2, result3 = 0;

    result = aa + bb + cc + dd + ee + ff + gg + hh + ii;
    result2 = rr + qq + pp + oo + nn + mm + ll + kk + jj;
    result3 = zz + yy + xx + ww + vv + uu + tt + ss;

    console.log(result, result2, result3);
    return [result, result2, result3];

};

function showResult() {
    resultPage2(queryParams)
    var [result, result2, result3] = getExact();

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");
    var div3 = document.createElement("div");
    var div4 = document.createElement("div");
    var div5 = document.createElement("div");
    var div6 = document.createElement("div");

    var percentile = result;
    var percentile2 = result2;
    var percentile3 = result3;

    output.innerHTML = " ";

    div1.innerHTML = "Inattention Subset " + result;
    div2.innerHTML = "Hyperactivity / Impulsivity Subset " + result2;
    div3.innerHTML = "Opposition / Defiance Subset " + result3;

    if (percentile < 13) {
        div4.innerHTML = 'Your overall score in the Inattention Subset is <b> ' + (percentile) + ' points</b>, which indicates that the symptoms are not clinically significant.';
    } else if (percentile >= 13 && percentile <= 17) {
        div4.innerHTML = 'Your overall score in the Inattention Subset is <b> ' + (percentile) + ' points</b>, which indicates mild symptoms.';
    } else if (percentile >= 18 && percentile <= 22) {
        div4.innerHTML = 'Your overall score in the Inattention Subset is <b> ' + (percentile) + ' points</b>, which indicates moderate symptoms.';
    } else if (percentile >= 23 && percentile <= 27) {
        div4.innerHTML = 'Your overall score in the Inattention Subset is <b> ' + (percentile) + ' points</b>, which indicates severe symptoms.';
    }

    if (percentile2 < 13) {
        div5.innerHTML = 'Your overall score in the Hyperactivity Subset is <b> ' + (percentile2) + ' points</b>, which indicates that the symptoms are not clinically significant.';
    } else if (percentile2 >= 13 && percentile2 <= 17) {
        div5.innerHTML = 'Your overall score in the Hyperactivity Subset is <b> ' + (percentile2) + ' points</b>, which indicates mild symptoms.';
    } else if (percentile2 >= 18 && percentile2 <= 22) {
        div5.innerHTML = 'Your overall score in the Hyperactivity Subset is <b> ' + (percentile2) + '  points</b>, which indicates moderate symptoms.';
    } else if (percentile2 >= 23 && percentile2 <= 27) {
        div5.innerHTML = 'Your overall score in the Hyperactivity Subset is <b> ' + (percentile2) + '  points</b>, which indicates severe symptoms.';
    }

    if (percentile3 < 8) {
        div6.innerHTML = 'Your overall score in the Opposition Subset is <b> ' + (percentile3) + ' points</b>, which indicates that the symptoms are not clinically significant.';
    } else if (percentile3 >= 8 && percentile3 <= 13) {
        div6.innerHTML = 'Your overall score in the Opposition Subset is <b> ' + (percentile3) + ' points</b>, which indicates mild symptoms.';
    } else if (percentile3 >= 14 && percentile3 <= 18) {
        div6.innerHTML = 'Your overall score in the Opposition Subset is <b> ' + (percentile3) + ' points</b>, which indicates moderate symptoms.';
    } else if (percentile3 >= 19 && percentile3 <= 24) {
        div6.innerHTML = 'Your overall score in the Opposition Subset is <b> ' + (percentile3) + ' points</b>, which indicates severe symptoms.';
    }

    output.append(div1);
    output.append(div2);
    output.append(div3);
    output.append(div4);
    output.append(div5);
    output.append(div6);
};

calcBtn.addEventListener("click", showResult);


window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};