var indicationEle = getElement("dd_indication");
var medicationType = getElement("dd_medication");
var therapyDuration = getElement("inputTherapy");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  {
    name: "indication",
    values: indicationEle,
  },
  {
    name: "medicationType",
    values: medicationType,
  },
  {
    name: "therapyDuration",
    values: therapyDuration,
  },
];

function showResult() {
  resultPage2(queryParams);
  output.innerHTML = "";
  var indication = Number(getSelectedValue(indicationEle));
  var medication = Number(getSelectedValue(medicationType));
  var days = Number(therapyDuration.value);
  var daysD = Number(therapyDuration.value);
  var daysUnit = "days";

  var dosage = (0.3 * days) / medication;
  var dosage3a = (5 * days) / 3;
  var dosage5a = (5 * days) / 5;
  var dosage10a = (5 * days) / 10;
  var dosage33 = (6 * days) / 3;
  var dosage55 = (6 * days) / 5;
  var dosage100 = (6 * days) / 10;
  var dosage3305 = (0.5 * days) / 3;

  var mL1 = indication * 6 * days * 25;
  var drops1 = indication * 6 * days * 5;
  var msg;
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var div4 = document.createElement("div");
  var div5 = document.createElement("div");
  var div6 = document.createElement("div");
  var div7 = document.createElement("div");
  var div8 = document.createElement("div");
  var div9 = document.createElement("div");
  var div10 = document.createElement("div");
  var div11 = document.createElement("div");
  var div12 = document.createElement("div");

  if (dosage10a < 1.5) {
    msg = "tablet";
  } else if (dosage10a >= 1.5) {
    msg = "tablets";
  }
  var msgStr;
  if (dosage * 3 <= 1) {
    msgStr = "strip";
  } else if (dosage * 3 > 1) {
    msgStr = "strips";
  }
  var msg3;
  var msgAp;
  var msgStrip;
  if (dosage <= 1.0) {
    msg3 = "tablet";
    msgAp = "application";
    msgStrip = "strip";
  } else if (dosage > 1.0) {
    msg3 = "tablets";
    msgAp = "applications";
    msgStrip = "strips";
  }
  var msg2;
  if (dosage100 <= 1.0) {
    msg2 = "tablet";
  } else if (dosage100 > 1.0) {
    msg2 = "tablets";
  }
  var msg4;
  if (dosage3305 <= 1.0) {
    msg4 = "tablet";
  } else if (dosage3305 > 1.0) {
    msg4 = "tablets";
  }
  var msg5;
  if (dosage3a * 0.5 <= 1.0) {
    msg5 = "tablet";
  } else if (dosage3a * 0.5 > 1.0) {
    msg5 = "tablets";
  }
  var msg6;
  if (dosage5a * 0.5 <= 1.0) {
    msg6 = "tablet";
  } else if (dosage5a * 0.5 > 1.0) {
    msg6 = "tablets";
  }
  var msg7;
  if (dosage10a * 0.5 <= 1.0) {
    msg7 = "tablet";
  } else if (dosage10a * 0.5 > 1.0) {
    msg7 = "tablets";
  }

  var msg8;
  if ((indication * days) / 10 <= 1.0) {
    msg8 = "tablet";
  } else if ((indication * days) / 10 > 1.0) {
    msg8 = "tablets";
  }
  if (indication === 5 && medication === 1) {
    if (days > 0 && days <= 1) {
      div1.innerHTML =
        "Dosage: <b>0.3-5 mg daily</b> <br><br>" +
        "🛌 Taken 1 h before sleep <br><br>Number of tablets needed for a <b>" +
        daysD +
        " " +
        daysUnit +
        " long therapy</b>:";

      div2.innerHTML =
        "⁍ <b>1 mg</b> → 1-" + Math.ceil(dosage) + "  tablets <br>";
      div3.innerHTML = "⁍ <b>3 mg</b> → 1  tablet <br>";
      div4.innerHTML = "⁍ <b>5 mg</b> → 1  tablet <br>";
      div5.innerHTML = "⁍ <b>10 mg</b> → 1 tablet <br>";
      div6.innerHTML =
        "Tablets of melatonin <b>can be cut in halves or quarters</b> - check the label or ask your physician whether it's possible with your drug.";
    } else if (days > 1) {
      div1.innerHTML =
        "Dosage: <b>0.3-5 mg daily</b> <br><br>" +
        "🛌 Taken 1 h before sleep <br><br>Number of tablets needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div2.innerHTML = "⁍ <b>1 mg</b> → " + Math.ceil(dosage) + "  tablets";
      div3.innerHTML = "⁍ <b>3 mg</b> → " + Math.ceil(dosage3a) + "  tablets";
      div4.innerHTML = "⁍ <b>5 mg</b> → " + Math.ceil(dosage5a) + "  tablets";
      div5.innerHTML = "⁍ <b>10 mg</b> → " + Math.ceil(dosage10a) + " " + msg;
      div6.innerHTML =
        "Tablets of melatonin <b>can be cut in halves or quarters</b> - check the label or ask your physician whether it's possible with your drug.";
    }
  }
  if (days > 0) {
    if (indication === 5 && medication === 2) {
      var mL = indication * days * 25;
      var drops = indication * days * 5;
      div7.innerHTML =
        "Dosage: <b>0.3-5 mg daily</b> <br><br>" +
        "🛌 Taken 1 h before sleep <br><br>Volume needed for a <b>" +
        daysD +
        " " +
        daysUnit +
        " long therapy</b>:";
      div8.innerHTML =
        "⁍ <b>1 mg/25 mL</b> → " + mL + " mL = " + drops + " drops";
    } else if (indication === 5 && medication === 0.5) {
      var spray = (indication * days) / 0.5;
      div7.innerHTML =
        "Dosage: <b>0.3-5 mg daily</b> <br><br>" +
        "🛌 Taken 1 h before sleep <br><br>Number of spray applications needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>0.5 mg/application</b> → " + dosage + " applications";
    } else if (indication === 5 && medication === 3) {
      div7.innerHTML =
        "Dosage: <b>0.3-5 mg daily</b> <br><br>" +
        "🛌 Taken 1 h before sleep <br><br>Number of strips needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>1 mg</b> → " + Math.ceil(dosage * 3) + "  strips <br>";

      div9.innerHTML = "⁍ <b>3 mg</b> → " + Math.ceil(dosage) + "  strips <br>";
    } else if (indication === 1 && medication === 1) {
      div7.innerHTML =
        "Dosage: <b>1-6 mg daily</b> <br><br>" +
        "✈️ For eastbound flights (e.g., US to Europe) take melatonin <b>for two days before the flight</b>, around 7 PM. Continue taking melatonin for <b>4 days after arrival</b>, right before going to bed.<br><br> Number of tablets needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>1 mg</b> → " + Math.ceil(dosage * 6, 0) + "  tablets";
      div8.innerHTML =
        "⁍ <b>3 mg</b> → " + Math.ceil(dosage33, 0) + "  tablets";
      div9.innerHTML =
        "⁍ <b>5 mg</b> → " + Math.ceil(dosage55, 0) + "  tablets";
      div10.innerHTML =
        "⁍ <b>10 mg</b> → " + Math.ceil(dosage100, 0) + " " + msg2;
      div11.innerHTML =
        "Tablets of melatonin <b>can be cut in halves or quarters</b> - check the label or ask your physician whether it's possible with your drug.";
    } else if (indication === 1 && medication === 2) {
      div7.innerHTML =
        "Dosage: <b>1-6 mg daily</b> <br><br>" +
        "✈️ For eastbound flights (e.g., US to Europe) take melatonin <b>for two days before the flight</b>, around 7 PM. Continue taking melatonin for <b>4 days after arrival</b>, right before going to bed.<br><br> Volume needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";
      div8.innerHTML =
        "⁍ <b>1 mg/25 mL</b> → " + mL1 + " mL = " + drops1 + " drops";
    } else if (indication === 1 && medication === 0.5) {
      var spray2 = (indication * days) / 0.5;
      div7.innerHTML =
        "Dosage: <b>1-6 mg daily</b> <br><br>" +
        "✈️ For eastbound flights (e.g., US to Europe) take melatonin <b>for two days before the flight</b>, around 7 PM. Continue taking melatonin for <b>4 days after arrival</b>, right before going to bed.<br><br> Number of spray applications needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>0.5 mg/application</b> → " + dosage * 6 + " applications";
    } else if (indication === 1 && medication === 3) {
      div7.innerHTML =
        "Dosage: <b>1-6 mg daily</b> <br><br>" +
        "✈️ For eastbound flights (e.g., US to Europe) take melatonin <b>for two days before the flight</b>, around 7 PM. Continue taking melatonin for <b>4 days after arrival</b>, right before going to bed.<br><br> Number of strips needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>1 mg</b> → " + Math.ceil(dosage * 18) + "  strips <br>";

      div9.innerHTML =
        "⁍ <b>3 mg</b> → " + Math.ceil(dosage * 6) + "  strips <br>";
    } else if (indication === 6 && medication === 1) {
      div7.innerHTML =
        "Dosage: <b>1-6 mg daily</b> <br><br>" +
        "🛩️ For westbound flights (e.g., Europe to the US) take melatonin for <b>4 days after arrival</b>, right before going to bed.<br><br> Number of tablets needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div7.innerHTML = "⁍ <b>1 mg</b> → " + Math.ceil(dosage, 0) + "  tablets";
      div8.innerHTML =
        "⁍ <b>3 mg</b> → " + Math.ceil(dosage33, 0) + "  tablets";
      div9.innerHTML =
        "⁍ <b>5 mg</b> → " + Math.ceil(dosage55, 0) + "  tablets";
      div10.innerHTML =
        "⁍ <b>10 mg</b> → " + Math.ceil(dosage100, 0) + " " + msg2;
      div11.innerHTML =
        "Tablets of melatonin <b>can be cut in halves or quarters</b> - check the label or ask your physician whether it's possible with your drug.";
    } else if (indication === 6 && medication === 2) {
      div7.innerHTML =
        "Dosage: <b>1-6 mg daily</b> <br><br>" +
        "🛩️ For westbound flights (e.g., Europe to the US) take melatonin for <b>4 days after arrival</b>, right before going to bed.<br><br> Volume needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>1 mg/25 mL</b> → " + mL1 / 6 + " mL = " + drops1 / 6 + " drops";
    } else if (indication === 6 && medication === 0.5) {
      div7.innerHTML =
        "Dosage: <b>1-6 mg daily</b> <br><br>" +
        "🛩️ For westbound flights (e.g., Europe to the US) take melatonin for <b>4 days after arrival</b>, right before going to bed.<br><br> Number of applications needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>0.5 mg/application</b> → " + dosage + " applications";
    } else if (indication === 6 && medication === 3) {
      div7.innerHTML =
        "Dosage: <b>1-6 mg daily</b> <br><br>" +
        "🛩️ For westbound flights (e.g., Europe to the US) take melatonin for <b>4 days after arrival</b>, right before going to bed.<br><br> Number of strips needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>1 mg</b> → " + Math.ceil(dosage * 3) + "  strips <br>";
      div9.innerHTML = "⁍ <b>3 mg</b> → " + Math.ceil(dosage) + "  strips <br>";
    } else if (indication === 0.5 && medication === 1) {
      div7.innerHTML =
        "Dosage: <b>0.5 mg daily</b> <br><br>" +
        "⏰ Take melatonin around 9-10 PM, before going to sleep.<br><br> Number of tablets needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML = "⁍ <b>1 mg</b> → " + Math.ceil(dosage) + " " + msg3;
      div9.innerHTML = "⁍ <b>3 mg</b> → " + Math.ceil(dosage3305) + " " + msg4;

      div10.innerHTML =
        "Tablets of melatonin <b>can be cut in halves or quarters</b> - check the label or ask your physician whether it's possible with your drug.";
    } else if (indication === 0.5 && medication === 2) {
      div7.innerHTML =
        "Dosage: <b>0.5 mg daily</b> <br><br>" +
        "⏰  Take melatonin around 9-10 PM, before going to sleep.<br><br> Volume needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>1 mg/25 mL</b> → " + mL1 / 6 + " mL = " + drops1 / 6 + " drops";
    } else if (indication === 0.5 && medication === 0.5) {
      div7.innerHTML =
        "Dosage: <b>0.5 mg daily</b> <br><br>" +
        "⏰  Take melatonin around 9-10 PM, before going to sleep.<br><br> Number of applications needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";
      div8.innerHTML = "⁍ <b>0.5 mg/application</b> → " + dosage + " " + msgAp;
    } else if (indication === 0.5 && medication === 3) {
      div7.innerHTML =
        "Dosage: <b>0.5 mg daily</b> <br><br>" +
        "⏰  Take melatonin around 9-10 PM, before going to sleep.<br><br> Number of strips needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>1 mg</b> → " + Math.ceil(dosage * 3) + " " + msgStr;
    } else if (indication === 2.5 && medication === 1) {
      div7.innerHTML =
        "Dosage: <b>2.5 mg daily</b> <br><br>" +
        "💔 Taken daily, for up to 4 weeks.<br><br> Number of tablets needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML = "⁍ <b>1 mg</b> → " + Math.ceil(dosage) + " tablets";
      div9.innerHTML =
        "⁍ <b>3 mg</b> → " + Math.ceil(dosage3a * 0.5) + " " + msg5;
      div10.innerHTML =
        "⁍ <b>5 mg</b> → " + Math.ceil(dosage5a * 0.5) + " " + msg6;
      div11.innerHTML =
        "⁍ <b>10 mg</b> → " + Math.ceil(dosage10a * 0.5) + " " + msg7;

      div12.innerHTML =
        "Tablets of melatonin <b>can be cut in halves or quarters</b> - check the label or ask your physician whether it's possible with your drug.";
    } else if (indication === 2.5 && medication === 2) {
      div7.innerHTML =
        "Dosage: <b>2.5 mg daily</b> <br><br>" +
        "💔  Taken daily, for up to 4 weeks.<br><br> Volume needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>1 mg/25 mL</b> → " + mL1 / 6 + " mL = " + drops1 / 6 + " drops";
    } else if (indication === 2.5 && medication === 0.5) {
      div7.innerHTML =
        "Dosage: <b>2.5 mg daily</b> <br><br>" +
        "💔  Taken daily, for up to 4 weeks.<br><br> Number of applications needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>0.5 mg/application</b> → " + dosage + " applications";
    } else if (indication === 2.5 && medication === 3) {
      div7.innerHTML =
        "Dosage: <b>2.5 mg daily</b> <br><br>" +
        "💔  Taken daily, for up to 4 weeks.<br><br> Number of strips needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML = "⁍ <b>1 mg</b> → " + Math.ceil(dosage * 3) + " strips";
      div9.innerHTML = "⁍ <b>3 mg</b> → " + Math.ceil(dosage) + " " + msgStrip;
    } else if (indication === 10 && medication === 1) {
      div7.innerHTML =
        "Dosage: <b>10 mg daily</b> <br><br>" +
        "💊 Taken daily, for up to 8 weeks.<br><br> Number of tablets needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML = "⁍ <b>1 mg</b> → " + Math.ceil(dosage) + " tablets";
      div9.innerHTML =
        "⁍ <b>3 mg</b> → " + Math.ceil((indication * days) / 3) + " tablets";

      div10.innerHTML =
        "⁍ <b>5 mg</b> → " + Math.ceil((indication * days) / 5) + " tablets";

      div11.innerHTML =
        "⁍ <b>10 mg</b> → " + Math.ceil((indication * days) / 10) + " " + msg8;

      div12.innerHTML =
        "Tablets of melatonin <b>can be cut in halves or quarters</b> - check the label or ask your physician whether it's possible with your drug.";
    } else if (indication === 10 && medication === 2) {
      div7.innerHTML =
        "Dosage: <b>10 mg daily</b> <br><br>" +
        "💊 Taken daily, for up to 8 weeks.<br><br> Volume needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>1 mg/25 mL</b> → " + mL1 / 6 + " mL = " + drops1 / 6 + " drops";
    } else if (indication === 10 && medication === 0.5) {
      div7.innerHTML =
        "Dosage: <b>10 mg daily</b> <br><br>" +
        "💊 Taken daily, for up to 8 weeks.<br><br> Number of applications needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML =
        "⁍ <b>0.5 mg/application</b> → " + dosage + " applications";
    } else if (indication === 10 && medication === 3) {
      div7.innerHTML =
        "Dosage: <b>10 mg daily</b> <br><br>" +
        "💊 Taken daily, for up to 8 weeks.<br><br> Number of strips needed for <b>" +
        daysD +
        " " +
        daysUnit +
        "-long therapy</b> with a maximum dose:";

      div8.innerHTML = "⁍ <b>1 mg</b> → " + Math.ceil(dosage * 3) + " strips";
      div9.innerHTML = "⁍ <b>3 mg</b> → " + Math.ceil(dosage) + " " + msgStrip;
    }
  }

  output.append(div1);
  output.append(div2);
  output.append(div3);
  output.append(div4);
  output.append(div5);
  output.append(div6);
  output.append(div7);
  output.append(div8);
  output.append(div9);
  output.append(div10);
  output.append(div11);
  output.append(div12);
  calcBtn.scrollIntoView({ behaviour: "smooth" });
}

function round_to(n, k) {
  var factor = Math.pow(10, k + 1);
  n = Math.round(Math.round(n * factor) / 10);
  return n / (factor / 10);
}

var indication_VS = [
  { name: "Trouble falling asleep", value: 5 },
  { name: "Jetlag, eastbound", value: 1 },
  { name: "Jetlag, westbound", value: 6 },
  { name: "Insomnia in blind people", value: 0.5 },
  { name: "Beta-blockers insomnia", value: 2.5 },
  { name: "Endometriosis", value: 10 },
];

var medication_VS = [
  { name: "Tablets/ capsules", value: 1 },
  { name: "Liquid", value: 2 },
  { name: "Spray", value: 0.5 },
  { name: "Strips", value: 3 },
];

function init() {
  createDropDown(medication_VS, medicationType);
  createDropDown(indication_VS, indicationEle);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

init();
calcBtn.addEventListener("click", showResult);

