var indication_ele = getElement("dd_indication");
var drug_ele = getElement("dd_drug");
var weight_ele = getElement("inputWeight");
var wUnit = getElement("wUnit");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "indication_ele", values: indication_ele },
  { name: "drug_ele", values: drug_ele },
  { name: "weight_ele", values: weight_ele },
  { name: "wUnit", values: wUnit },
];

function result() {
  resultPage2(queryParams);
  var indication = Number(getSelectedValue(indication_ele));
  var weight = Number(weight_ele.value);
  var choice = Number(getSelectedValue(drug_ele));
  var amountNeeded = Number(calcTablets(indication));
  var amountNeededChildren = Number(calcTablets(indication));

  var dose = " Typical dosage for this indication:";
  var amount = " You'll need";
  var tablets = "mg per day.";
  var ml =
    " mL (milliliters) of suspension per day. This amount is sufficient to fill";

  var tabs;
  var div1 = document.createElement("div");
  var div2 = document.createElement("div");
  var div3 = document.createElement("div");
  var div4 = document.createElement("div");
  output.innerHTML = "";

  if (amountNeeded <= 1) {
    tabs = "tablet";
  } else if (amountNeeded > 1) {
    tabs = "tablets";
  }

  if (indication === 10) {
    var tab;
    if (amountNeededChildren <= 1) {
      tab = "tablet";
    } else if (amountNeededChildren > 1) {
      tab = "tablets";
    }

    if (weight <= 125) {
      div1.innerHTML =
        "⁍" +
        dose +
        "<br><b>10 mg/kg</b>, divided into two doses.<br><br>⁍Total dose per day: <b>" +
        weight * indication +
        " mg</b>";

      if (choice !== 25) {
        div2.innerHTML =
          "⁍" +
          amount +
          " <b>" +
          round_to(amountNeededChildren, 1) +
          "</b> " +
          tab +
          " of " +
          choice +
          " " +
          tablets +
          " 💊";
      } else if (choice === 25) {
        div1.innerHTML =
          "⁍" +
          amount +
          " <b>" +
          round_to(amountNeededChildren, 1) +
          "</b> " +
          ml +
          " <b>" +
          round_to(amountNeededChildren / 5, 2) +
          " teaspoons.</b> 🥄";
      }
    } else if (weight > 125) {
      div1.innerHTML =
        "⁍" +
        dose +
        "<br><b>10 mg/kg</b>, divided into two doses.<br><br>⁍Maximum dose per day: <b>1250 mg</b>";

      if (choice !== 25) {
        div2.innerHTML =
          "⁍" +
          amount +
          " <b>" +
          round_to(1250 / choice, 1) +
          "</b> " +
          tab +
          " of " +
          choice +
          " " +
          tablets +
          " 💊";
      } else if (choice === 25) {
        div1.innerHTML =
          "⁍" +
          amount +
          " <b>" +
          round_to(1250 / choice, 1) +
          "</b> " +
          ml +
          " <b>" +
          round_to(1250 / (choice * 5), 2) +
          " teaspoons.</b> 🥄";
      }
    }
  } else if (
    indication !== 10 &&
    indication !== 1500 &&
    indication !== 1000 &&
    indication !== 250
  ) {
    div1.innerHTML = "⁍" + dose + "<br><b>" + indication + " mg per day</b>.";

    if (choice !== 25) {
      div2.innerHTML =
        "⁍" +
        amount +
        " <b>" +
        round_to(amountNeeded, 1) +
        "</b> " +
        tabs +
        " of " +
        choice +
        " " +
        tablets +
        " 💊";
    } else if (choice === 25) {
      div1.innerHTML =
        "⁍" +
        amount +
        " <b>" +
        round_to(amountNeeded, 1) +
        "</b> " +
        ml +
        " <b>" +
        round_to(amountNeeded / 5, 2) +
        " teaspoons.</b> 🥄";
    }

    if (indication === 500) {
      div3.innerHTML =
        "<i>Take 500 mg initially, then follow with:<br>• 250 mg every 6-8 h, or <br>• 500 mg every 12 h, if needed.<br><br> Do not exceed 1000 mg per day.</i>";
    } else if (indication === 750) {
      div3.innerHTML =
        "<i>Take 750 mg initially, then follow with 250 mg every 8 h until no longer needed.</i>";
    }
  } else if (indication === 1500 || indication === 1000) {
    div3.innerHTML =
      "⁍" + dose + "<br><b>" + indication / 2 + " mg per day</b>.";

    if (choice !== 25) {
      div4.innerHTML =
        "⁍" +
        amount +
        " <b>" +
        round_to(amountNeeded / 2, 1) +
        "</b> " +
        tabs +
        " of " +
        choice +
        " " +
        tablets +
        " 💊";
    } else if (choice === 25) {
      div4.innerHTML =
        "⁍" +
        amount +
        " <b>" +
        round_to(amountNeeded / 2, 1) +
        "</b> " +
        ml +
        " <b>" +
        round_to(amountNeeded / 10, 2) +
        " teaspoons.</b> 🥄";
    }
    if (indication === 1500) {
      div3.innerHTML =
        "<i>Off-label use. You may add up to 500 mg extra per day, if needed.</i>";
    } else if (indication === 1000) {
      div3.innerHTML =
        "<i>Take 500 mg initially, then follow with 250 mg every 6-8 h if needed. Do not exceed 1000 mg per day.</i>";
    }
  } else if (indication === 250) {
    div3.innerHTML =
      "⁍" + dose + "<br><b>" + indication + " mg twice per day</b>.";

    if (choice !== 25) {
      div4.innerHTML =
        "⁍" +
        amount +
        " <b>" +
        round_to(amountNeeded * 2, 1) +
        "</b> " +
        tabs +
        " of " +
        choice +
        " " +
        tablets +
        " 💊";
    } else if (choice === 25) {
      div4.innerHTML =
        "⁍" +
        amount +
        " <b>" +
        round_to(amountNeeded * 2, 1) +
        "</b> " +
        ml +
        " <b>" +
        round_to(amountNeeded / 2.5, 2) +
        " teaspoons.</b> 🥄";
    }
  }

  output.append(div1);
  output.append(div2);
  output.append(div3);
  output.append(div4);
}

var choice_VS = [
  { name: "Tablet 220 mg", value: 220 },
  { name: "Tablet 250 mg", value: 250 },
  { name: "Tablet 275 mg", value: 275 },
  { name: "Tablet 375 mg", value: 375 },
  { name: "Tablet 500 mg", value: 500 },
  { name: "Tablet 550 mg", value: 550 },
  { name: "Oral suspension 25mg/mL", value: 25 },
];

var indication_VS = [
  { name: "Pain", value: 500 },
  { name: "Painful periods", value: 1000 }, // also 500 (*2)
  { name: "Acute gout", value: 750 },
  { name: "Migraine", value: 1500 }, // also 750 (* 2)
  { name: "Rheumatism", value: 250 },
  { name: "Juvenile arthritis", value: 10 },
];

function round_to(n, k) {
  var factor = Math.pow(10, k + 1);
  n = Math.round(Math.round(n * factor) / 10);
  return n / (factor / 10);
}

function init() {
  createDropDown(indication_VS, indication_ele);
  createDropDown(choice_VS, drug_ele);
  createDropDown(unitsForWeight, wUnit);
  showVariables();
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    result();
  }
}

init();
function calcTablets(dose) {
  var strength = Number(getSelectedValue(drug_ele));
  var tablets = Number(dose) / strength;
  return tablets.toFixed(2);
}

function showVariables() {
  if (Number(getSelectedValue(indication_ele) == 10)) {
    $("#calculator-row-3").show();
  } else {
    $("#calculator-row-3").hide();
  }
}

calcBtn.addEventListener("click", result);
indication_ele.addEventListener("change", showVariables);


