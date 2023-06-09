var currentInr = getElement("inputCurrentInr");
var bleedingEle = getElement("dd_bleeding");
var warfarinD = getElement("inputDose");
var warfarin_Dose_unit = getElement("dose_unit");
var targetInr = getElement("dd_target");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  { name: "currentInr", values: currentInr },
  { name: "bleedingEle", values: bleedingEle },
  { name: "warfarinD", values: warfarinD },
  { name: "warfarin_Dose_unit", values: warfarin_Dose_unit },
];

function showResult() {
  output.innerHTML = "";
  var targetINR = Number(getSelectedValue(targetInr));
  var changeINR = Number(currentInr.value);
  var INR = Number(currentInr.value);

  var warafarinU = Number(getSelectedValue(warfarin_Dose_unit));
  var warafarinDose;
  if (warafarinU == 0) {
    warfarinDose = Number(warfarinD.value) * 7;
  } else {
    warafarinDose = Number(warfarinD.value);
  }
  var bleeding = Number(getSelectedValue(bleedingEle));

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

  if (changeINR > 0) {
    div1.innerHTML =
      "📍 Always verify your patient's compliance and evaluate all the clinically important changes in their lifestyle. ";

    var msg = 0;
    var msg2 =
      "<b>Recommendations in serious bleeding:</b><br><br>• Stop warfarin;<br>• Reverse the anticoagulation effect with PCC (prothrombin complex concentrate) rather than with fresh frozen plasma;<br>• You may also use 5–10 mg of vitamin  K<sub>1</sub> in a slow IV injection. <br><br> <i>ACCP & ASH guidelines. Grade 2C recommendations</i>";

    var msg3 =
      "<b>Recommendations in life-threatening bleeding:</b><br><br>• Stop warfarin;<br>• Immediately reverse the anticoagulation effect with PCC (prothrombin complex concentrate) rather than with fresh frozen plasma (e.g., a PCC dose of 50 IU/kg can help normalize INR in 10–15 minutes);<br>• Life threating bleeding may require the use of recombinant factor VIIa, if none of the more efficient methods are available;<br>• Use 5–10 mg of vitamin  K<sub>1</sub> in a slow IV injection. <br><br> <i>ACCP & ASH guidelines. Grade 2C recommendations</i>";
    var msgBooster =
      "Consider a <b>single booster</b> of 1.5–2× the daily maintenance dose. ";

    if (targetINR === 0) {
      if (bleeding === 1) {
        div2.innerHTML = msg2 + ".";
      } else if (bleeding === 2) {
        div2.innerHTML = msg3 + ".";
      } else if (bleeding === 0) {
        if (INR < 1.5) {
          msg = "3–7 days";

          div2.innerHTML =
            "Consider <b>increasing</b> maintenance dose by <b>5–20%</b>:";

          div3.innerHTML =
            "Current <b>daily</b> dose: " +
            Math.round(warfarinDose / 7, 2) +
            " mg. <br>• 5% increase: " +
            Math.round((warfarinDose / 7) * 1.05, 2) +
            " mg<br>• 10% increase: " +
            Math.round((warfarinDose / 7) * 1.1, 2) +
            " mg<br>• 15% increase: " +
            Math.round((warfarinDose / 7) * 1.15, 2) +
            " mg<br>• 20% increase: " +
            Math.round((warfarinDose / 7) * 1.2, 2) +
            " mg";

          div4.innerHTML =
            "Current <b>weekly</b> dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% increase: " +
            Math.round(warfarinDose * 1.05, 2) +
            " mg<br>• 10% increase: " +
            Math.round(warfarinDose * 1.1, 2) +
            " mg<br>• 15% increase: " +
            Math.round(warfarinDose * 1.15, 2) +
            " mg<br>• 20% increase: " +
            Math.round(warfarinDose * 1.2, 2) +
            " mg";

          div5.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.05) / 2.5), 2) +
            " mg<br>• 10% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.1) / 2.5), 2) +
            " mg<br>• 15% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.15) / 2.5), 2) +
            " mg<br>• 20% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.2) / 2.5), 2) +
            " mg";

          div6.innerHTML = msgBooster;
        } else if (INR >= 1.5 && INR < 1.8) {
          msg = "3–7 days";
          div2.innerHTML =
            "Consider <b>increasing</b> maintenance dose by <b>5–15%</b>:";

          div3.innerHTML =
            "Current <b>daily</b> dose: " +
            Math.round(warfarinDose / 7, 2) +
            " mg. <br>• 5% increase: " +
            Math.round((warfarinDose / 7) * 1.05, 2) +
            " mg<br>• 10% increase: " +
            Math.round((warfarinDose / 7) * 1.1, 2) +
            " mg<br>• 15% increase: " +
            Math.round((warfarinDose / 7) * 1.15, 2) +
            " mg";

          div4.innerHTML =
            "Current <b>weekly</b> dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% increase: " +
            Math.round(warfarinDose * 1.05, 2) +
            " mg<br>• 10% increase: " +
            Math.round(warfarinDose * 1.1, 2) +
            " mg<br>• 15% increase: " +
            Math.round(warfarinDose * 1.15, 2) +
            " mg";

          div5.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.05) / 2.5), 2) +
            " mg<br>• 10% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.1) / 2.5), 2) +
            " mg<br>• 15% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.15) / 2.5), 2) +
            " mg";

          div6.innerHTML = msgBooster;
        } else if (INR >= 1.8 && INR < 2) {
          div2.innerHTML =
            "<table><tr><td><i>If two previous INRs were in range, you might consider not making any adjustments to the dose.</i></td></tr></table>";

          msg = "3-7 days";
          div3.innerHTML =
            "Consider <b>increasing</b> maintenance dose by <b>5–10%</b>:";

          div4.innerHTML =
            "Current <b>daily</b> dose: " +
            Math.round(warfarinDose / 7, 2) +
            " mg. <br>• 5% increase: " +
            Math.round((warfarinDose / 7) * 1.05, 2) +
            " mg<br>• 10% increase: " +
            Math.round((warfarinDose / 7) * 1.1, 2) +
            " mg";

          div5.innerHTML =
            "Current <b>weekly</b> dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% increase: " +
            Math.round(warfarinDose * 1.05, 2) +
            " mg<br>• 10% increase: " +
            Math.round(warfarinDose * 1.1, 2) +
            " mg";

          div6.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.05) / 2.5), 2) +
            " mg<br>• 10% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.1) / 2.5), 2) +
            " mg<br>";

          div7.innerHTML = msgBooster;
        } else if (INR >= 2 && INR < 3.1) {
          msg = "4 weeks";
          div2.innerHTML =
            "At the moment, <b>your patient's INR is within desired range</b>.";
        } else if (INR >= 3.1 && INR < 3.3) {
          msg = "3–7 days";

          div2.innerHTML =
            "<table><tr><td><i>If two previous INRs were in range, you might consider not making any adjustments to the dose.</i></td></tr></table>";

          div3.innerHTML =
            "Consider <b>omitting</b> one dose or <b>decreasing</b> maintenance dose by <b>5-10%</b>:";

          div4.innerHTML =
            "Current <b>daily</b> dose: " +
            Math.round(warfarinDose / 7, 2) +
            " mg. <br>• 5% decrease: " +
            Math.round((warfarinDose * 0.95) / 7, 2) +
            " mg<br>• 10% decrease: " +
            Math.round((warfarinDose / 7) * 0.9, 2) +
            " mg";

          div5.innerHTML =
            "Current <b>weekly</b> dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% decrease: " +
            Math.round(warfarinDose * 0.95, 2) +
            " mg<br>• 10% decrease: " +
            Math.round(warfarinDose * 0.9, 2) +
            " mg";

          div6.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.95) / 2.5), 2) +
            " mg<br>• 10% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.9) / 2.5), 2) +
            " mg";
        } else if (INR >= 3.3 && INR < 3.5) {
          msg = "3–7 days";
          div2.innerHTML =
            "Consider <b>omitting</b> one dose or <b>decreasing</b> maintenance dose by <b>5-10%</b>:";

          div3.innerHTML =
            "Current <b>daily</b> dose: " +
            Math.round(warfarinDose / 7, 2) +
            " mg. <br>• 5% decrease: " +
            Math.round((warfarinDose / 7) * 0.95, 2) +
            " mg<br>• 10% decrease: " +
            Math.round((warfarinDose / 7) * 0.9, 2) +
            " mg";

          div4.innerHTML =
            "Current <b>weekly</b> dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% decrease: " +
            Math.round(warfarinDose * 0.95, 2) +
            " mg<br>• 10% decrease: " +
            Math.round(warfarinDose * 0.9, 2) +
            " mg";

          div5.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.95) / 2.5), 2) +
            " mg<br>• 10% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.9) / 2.5), 2) +
            " mg";
        } else if (INR >= 3.5 && INR < 4) {
          msg = "1–3 days";
          div2.innerHTML =
            "Consider <b>omitting</b> one dose or <b>decreasing</b> maintenance dose by <b>5-15%</b>:";

          div3.innerHTML =
            "Current <b>daily</b> dose: " +
            Math.round(warfarinDose / 7, 2) +
            " mg. <br>• 5% decrease: " +
            Math.round((warfarinDose / 7) * 0.95, 2) +
            " mg<br>• 10% decrease: " +
            Math.round((warfarinDose / 7) * 0.9, 2) +
            " mg<br>• 15% decrease: " +
            Math.round((warfarinDose / 7) * 0.85, 2) +
            " mg";

          div4.innerHTML =
            "Current <b>weekly</b> dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% decrease: " +
            Math.round(warfarinDose * 0.95, 2) +
            " mg<br>• 10% decrease: " +
            Math.round(warfarinDose * 0.9, 2) +
            " mg<br>• 15% decrease: " +
            Math.round(warfarinDose * 0.85, 2) +
            " mg";

          div5.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.95) / 2.5), 2) +
            " mg<br>• 10% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.9) / 2.5), 2) +
            " mg<br>• 15% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.85) / 2.5), 2) +
            " mg";
        } else if (INR >= 4 && INR < 5) {
          msg = "1 day";
          div2.innerHTML =
            "<b>Hold</b> warfarin or <b>decrease</b> maintenance dose by <b>5-20%</b>:";

          div3.innerHTML =
            "Current <b>daily</b> dose: " +
            Math.round(warfarinDose / 7, 2) +
            " mg. <br>• 5% decrease: " +
            Math.round((warfarinDose / 7) * 0.95, 2) +
            " mg<br>• 10% decrease: " +
            Math.round((warfarinDose / 7) * 0.9, 2) +
            " mg<br>• 15% decrease: " +
            Math.round((warfarinDose / 7) * 0.85, 2) +
            " mg<br>• 20% decrease: " +
            Math.round((warfarinDose / 7) * 0.8, 2) +
            " mg";

          div4.innerHTML =
            "Current <b>weekly</b> dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% decrease: " +
            Math.round(warfarinDose * 0.95, 2) +
            " mg<br>• 10% decrease: " +
            Math.round(warfarinDose * 0.9, 2) +
            " mg<br>• 15% decrease: " +
            Math.round(warfarinDose * 0.85, 2) +
            " mg<br>• 20% decrease: " +
            Math.round(warfarinDose * 0.8, 2) +
            " mg";

          div5.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.95) / 2.5), 2) +
            " mg<br>• 10% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.9) / 2.5), 2) +
            " mg<br>• 15% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.85) / 2.5), 2) +
            " mg<br>• 20% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.8) / 2.5), 2) +
            " mg";
        } else if (INR >= 5) {
          msg = "1 day";
          div2.innerHTML =
            "<b>Hold</b> warfarin until INR comes back to normal. <b>Review</b> ACCP & ASH guidelines. <b>Monitor</b> daily for INR levels and any serious bleeding. ";
        }
      }
    } else if (targetINR === 1) {
      if (bleeding === 1) {
        div2.innerHTML = msg2 + ".";
      } else if (bleeding === 2) {
        div2.innerHTML = msg3 + ".";
      } else if (bleeding === 0) {
        if (INR < 2) {
          msg = "3-7 days";
          div2.innerHTML =
            "Consider <b>increasing</b> maintenance dose by <b>5–20%</b>:";

          div3.innerHTML =
            "Current weekly dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% increase: " +
            Math.round(warfarinDose * 1.05, 2) +
            " mg<br>• 10% increase: " +
            Math.round(warfarinDose * 1.1, 2) +
            " mg<br>• 15% increase: " +
            Math.round(warfarinDose * 1.15, 2) +
            " mg<br>• 20% increase: " +
            Math.round(warfarinDose * 1.2, 2) +
            " mg";

          div4.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.05) / 2.5), 2) +
            " mg<br>• 10% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.1) / 2.5), 2) +
            " mg<br>• 15% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.15) / 2.5), 2) +
            " mg<br>• 20% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.2) / 2.5), 2) +
            " mg";

          div5.innerHTML = msgBooster;
        } else if (INR >= 2 && INR < 2.3) {
          msg = "3–7 days";
          div2.innerHTML =
            "Consider <b>increasing</b> maintenance dose by <b>5–15%</b>:";

          div3.innerHTML =
            "Current weekly dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% increase: " +
            Math.round(warfarinDose * 1.05, 2) +
            " mg<br>• 10% increase: " +
            Math.round(warfarinDose * 1.1, 2) +
            " mg<br>• 15% increase: " +
            Math.round(warfarinDose * 1.15, 2) +
            " mg";

          div4.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.05) / 2.5), 2) +
            " mg<br>• 10% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.1) / 2.5), 2) +
            " mg<br>• 15% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.15) / 2.5), 2) +
            " mg";

          div5.innerHTML = msgBooster;
        } else if (INR >= 2.3 && INR < 2.5) {
          msg = "3–7 days";
          div2.innerHTML =
            "<table><tr><td><i>If two previous INRs were in range, you might consider not making any adjustments to the dose.</i></td></tr></table>";

          div3.innerHTML =
            "Consider <b>increasing</b> maintenance dose by <b>5–10%</b>:";

          div4.innerHTML =
            "Current weekly dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% increase: " +
            Math.round(warfarinDose * 1.05, 2) +
            " mg<br>• 10% increase: " +
            Math.round(warfarinDose * 1.1, 2) +
            " mg";

          div5.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.05) / 2.5), 2) +
            " mg<br>• 10% increase: " +
            Math.round(2.5 * Math.floor((warfarinDose * 1.1) / 2.5), 2) +
            " mg";

          div6.innerHTML = msgBooster;
        } else if (INR >= 2.5 && INR < 3.6) {
          msg = "4 weeks";
          div7.innerHTML =
            "At the moment, <b>your patient's INR is within desired range</b>.";
        } else if (INR >= 3.6 && INR < 3.8) {
          msg = "3–7 days";

          div2.innerHTML =
            "<table><tr><td><i>If two previous INRs were in range, you might consider not making any adjustments to the dose.</i></td></tr></table>";

          div3.innerHTML =
            "Consider <b>omitting</b> one dose or <b>decreasing</b> maintenance dose by <b>5–10%</b>:";

          div4.innerHTML =
            "Current weekly dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% decrease: " +
            Math.round(warfarinDose * 0.95, 2) +
            " mg<br>• 10% decrease: " +
            Math.round(warfarinDose * 0.9, 2) +
            " mg";

          div5.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.95) / 2.5), 2) +
            " mg<br>• 10% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.9) / 2.5), 2) +
            " mg";
        } else if (INR >= 3.8 && INR < 4) {
          msg = "3–7 days";
          div2.innerHTML =
            "Consider <b>omitting</b> one dose or <b>decreasing</b> maintenance dose by <b>5-10%</b>:";

          div3.innerHTML =
            "Current weekly dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% decrease: " +
            Math.round(warfarinDose * 0.95, 2) +
            " mg<br>• 10% decrease: " +
            Math.round(warfarinDose * 0.9, 2) +
            " mg";

          div4.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.95) / 2.5), 2) +
            " mg<br>• 10% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.9) / 2.5), 2) +
            " mg";
        } else if (INR >= 4 && INR < 4.5) {
          msg = "1–3 days";
          div3.innerHTML =
            "Consider <b>omitting</b> one dose or <b>decreasing</b> maintenance dose by <b>5-15%</b>:";

          div4.innerHTML =
            "Current weekly dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% decrease: " +
            Math.round(warfarinDose * 0.95, 2) +
            " mg<br>• 10% decrease: " +
            Math.round(warfarinDose * 0.9, 2) +
            " mg<br>• 15% decrease: " +
            Math.round(warfarinDose * 0.85, 2) +
            " mg";

          div5.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.95) / 2.5), 2) +
            " mg<br>• 10% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.9) / 2.5), 2) +
            " mg<br>• 15% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.85) / 2.5), 2) +
            " mg";
        } else if (INR >= 4.5 && INR < 5.5) {
          msg = "1 day";
          div3.innerHTML =
            "<b>Hold</b> warfarin or <b>decrease</b> maintenance dose by <b>5-20%</b>:";

          div4.innerHTML =
            "Current weekly dose: " +
            Math.round(warfarinDose, 2) +
            " mg. <br>• 5% decrease: " +
            Math.round(warfarinDose * 0.95, 2) +
            " mg<br>• 10% decrease: " +
            Math.round(warfarinDose * 0.9, 2) +
            " mg<br>• 15% decrease: " +
            Math.round(warfarinDose * 0.85, 2) +
            " mg<br>• 20% decrease: " +
            Math.round(warfarinDose * 0.8, 2) +
            " mg";

          div5.innerHTML =
            "When rounded to the nearest 2.5:<br>• 5% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.95) / 2.5), 2) +
            " mg<br>• 10% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.9) / 2.5), 2) +
            " mg<br>• 15% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.85) / 2.5), 2) +
            " mg<br>• 20% decrease: " +
            Math.round(2.5 * Math.floor((warfarinDose * 0.8) / 2.5), 2) +
            " mg";
        } else if (INR >= 5.5) {
          msg = "1 day";
          div3.innerHTML =
            "<b>Hold</b> warfarin until INR comes back to normal. <b>Review</b> ACCP & ASH guidelines. <b>Monitor</b> daily for INR levels and any serious bleeding. ";
        }
      }
    }
    if (bleeding === 0) {
      div11.innerHTML =
        "Schedule the next appointment in <b>" + msg + "</b>. 📅";
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
  output.append(div11);
}

var bleedingVS = [
  {
    name: "No significant bleeding",
    value: 0,
  },
  {
    name: "Serious bleeding",
    value: 1,
  },
  {
    name: "Life threatning bleeding",
    value: 2,
  },
];

var doseVS = [
  {
    name: "per day",
    value: 0,
  },
  {
    name: "per week",
    value: 1,
  },
];

var targetINRVS = [
  {
    name: "2-3",
    value: 0,
  },
  {
    name: "2.5-3.5",
    value: 1,
  },
];

function init() {
  createDropDown(doseVS, warfarin_Dose_unit);
  createDropDown(targetINRVS, targetInr);
  createDropDown(bleedingVS, bleedingEle);
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}
init();

calcBtn.addEventListener("click", showResult);

