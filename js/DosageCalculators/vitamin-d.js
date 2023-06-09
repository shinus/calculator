var ageUnit = getElement("dd_age");
var input_age = getElement("inputAge");
var serumEle = getElement("dd_serum");

var serumInput = getElement("inputSerum");
var height = getElement("inputHeight");
var heightUnit = getElement("dd_height");

var weight_ele = getElement("inputWeight");
var weightUnit = getElement("dd_weight");

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
  {
    name: "age",
    values: input_age,
  },
  {
    name: "Serum",
    values: serumEle,
  },
  {
    name: "serumInput",
    values: serumInput,
  },
  {
    name: "weight_ele",
    values: weight_ele,
  },
  {
    name: "weightUnit",
    values: weightUnit,
  },
  {
    name: "heightUnit",
    values: heightUnit,
  },
  {
    name: "height",
    values: height,
  },
];

var ageVS = [
  {
    name: "years",
    value: 0,
  },
  {
    name: "months",
    value: 1,
  },
  {
    name: "weeks",
    value: 2,
  },
];

var choiceVS = [
  {
    name: "No",
    value: 0,
  },
  {
    name: "yes",
    value: 1,
  },
];
function validateAge() {
  resultPage2(queryParams);
  output.innerHTML = "";
  var age = Number(input_age.value);
  age = convertInMonths(age);
  var hUnit = getSelectedValue(heightUnit);
  var height_val = getHeightInM(hUnit, Number(height.value));

  var weight_val = Number(weight_ele.value);
  var wUnit = getSelectedValue(weightUnit);

  weight_val = getWeightInKg(wUnit, weight_val);

  var bmi = calcBmi(height_val, weight_val);

  var div3 = document.createElement("div");
  var div4 = document.createElement("div");

  if (bmi >= 30 && age <= 216) {
    div3.innerHTML =
      "❗❗ Obese children should be given <b>doses that are at least 2-3 times greater than those given below</b> to meet their vitamin D requirements.";
  }

  if (bmi >= 30 && age > 216) {
    div3.innerHTML =
      "❗❗ Obese adults should be given <b>doses that are at least 2-3 times greater than those given below</b> to meet their vitamin D requirements.";
  }

  div4.innerHTML = "<b>BMI</b>" + " " + bmi + " " + "kg/m²" + "<br>";
  output.append(div4);
  output.append(div3);
}

function getResult() {
  var age = Number(input_age.value);
  var serum = Number(getSelectedValue(serumEle));
  var result = Number(serumInput.value);

  var div2 = document.createElement("div");
  var div3 = document.createElement("div");

  age = convertInMonths(age);

  if (age <= 12 && serum === 0) {
    div2.innerHTML =
      "Infants and children aged 0 – 1 yr require at least <b>400 IU of  vitamin D</b> a day to maximize bone health." +
      "<p> The dose of at least <b>1000 IU</b> may be needed to raise the blood level of vit. D to consistently above 30 ng/ml.</p>";
  } else if (age > 12 && age <= 216 && serum === 0) {
    div2.innerHTML =
      "Children and adolescents aged 1 - 18 yrs require at least <b>600 IU of vitamin D</b> a day to maximize bone health." +
      "<p> The dose of at least <b>1000 IU</b> may be needed to raise the blood level of vit. D to consistently above 30 ng/ml.</p>";
  } else if ((age > 216 && age <= 600 && serum === 0) || serum === 1) {
    div2.innerHTML =
      "Adults aged 18 - 50 yrs require at least <b>600 IU of vitamin D</b> a day to maximize bone health and muscle function." +
      "<p> The dose of at least <b>1500 – 2000 IU</b> may be needed to raise the blood level of vit. D to consistently above 30 ng/ml.</p>";
  } else if ((age > 600 && age <= 840 && serum === 0) || serum === 1) {
    div2.innerHTML =
      "Adults aged 50 - 70 yrs require at least <b>600 IU of vitamin D</b> a day to maximize bone health and muscle function." +
      "<p> The dose of at least <b>1500 – 2000 IU</b> may be needed to raise the blood level of vit. D to consistently above 30 ng/ml.</p>";
  } else if (age > 840 && serum === 0) {
    div2.innerHTML =
      "Adults aged 70+ yrs require at least <b>800 IU of vitamin D</b> a day to maximize bone health and muscle function." +
      "<p> The dose of at least <b>1500 – 2000 IU</b> may be needed to raise the blood level of vit. D to consistently above 30 ng/ml.</p>";

    if (age <= 12 && serum === 1 && result > 20) {
      div2.innerHTML =
        "Infants and children aged 0 – 1 yr require at least <b>400 IU of  vitamin D</b> a day to maximize bone health." +
        "<p> The dose of at least <b>1000 IU</b> may be needed to raise the blood level of vit. D to consistently above 30 ng/ml.</p>";
    } else if (age <= 12 && serum === 1 && result <= 20) {
      div2.innerHTML =
        "Infants and children aged 0 – 1 yr who are <b>vitamin D deficient</b> require <b>treatment with 2000 IU</b> of vitamin D a day (or 50,000 IU weekly) for 6 weeks." +
        "<p>The treatment should be followed by <b>maintenance therapy of 400-1000 IU a day</b>.</p>";
    } else if (age > 12 && age <= 216 && serum === 1 && result > 20) {
      div2.innerHTML =
        "Children and adolescents aged 1 - 18 yrs require at least <b>600 IU of vitamin D</b> a day to maximize bone health." +
        "<p> The dose of at least <b>1000 IU</b> may be needed to raise the blood level of vit. D to consistently above 30 ng/ml.</p>";
    } else if (age > 12 && age <= 216 && serum === 1 && result <= 20) {
      div2.innerHTML =
        "Children and adolescents aged 1 – 18 yrs who are <b>vitamin D deficient</b> require <b>treatment with 2000 IU</b> of vitamin D a day (or 50,000 IU weekly) for 6 weeks." +
        "<p>The treatment should be followed by <b>maintenance therapy of 600-1000 IU a day</b>.</p>";
    } else if (age > 216 && age <= 600 && serum === 1 && result > 20) {
      div2.innerHTML =
        "Adults aged 18 - 50 yrs require at least <b>600 IU of vitamin D</b> a day to maximize bone health and muscle function." +
        "<p> The dose of at least <b>1500 – 2000 IU</b> may be needed to raise the blood level of vit. D to consistently above 30 ng/ml.</p>";
    } else if (age > 600 && age <= 840 && serum === 1 && result > 20) {
      div2.innerHTML =
        "Adults aged 50 - 70 yrs require at least <b>600 IU of vitamin D</b> a day to maximize bone health and muscle function." +
        "<p> The dose of at least <b>1500 – 2000 IU</b> may be needed to raise the blood level of vit. D to consistently above 30 ng/ml.</p>";
    } else if (age > 840 && serum === 1 && result > 20) {
      div2.innerHTML =
        "Adults aged 70+ yrs require at least <b>800 IU of vitamin D</b> a day to maximize bone health and muscle function." +
        "<p> The dose of at least <b>1500 – 2000 IU</b> may be needed to raise the blood level of vit. D to consistently above 30 ng/ml.</p>";
    } else if (age > 216 && serum === 1 && result <= 20) {
      div2.innerHTML =
        "Adults who are <b>vitamin D deficient</b> require <b>treatment with 6000 IU</b> of vitamin D a day (or 50,000 IU weekly) for 8 weeks." +
        "<p>The treatment should be followed by <b>maintenance therapy of 1500-2000 IU a day</b>.</p>";
    }
  }
  if (serum === 1) {
    if (result <= 20) {
      div3.innerHTML =
        "Your result indicates that you are <b>vitamin D deficient</b> ❗❗ ";
    } else if (result > 20 && result < 30) {
      div3.innerHTML =
        "Your result indicates that you are <b>vitamin D insuficient</b> ❗";
    } else if (result >= 30 && result <= 50) {
      div3.innerHTML = "Your serum vitamin D level is adequate 👍.";
    } else if (result > 50) {
      div3.innerHTML =
        "Your vitamin D serum level is <b>very high</b> and may be associated with potential adverse effects ✋. Consult your doctor.";
    }
  }
  var div5 = document.createElement("div");
  output.append(div2);
  div5.innerHTML = "<br>";
  output.append(div5);
  output.append(div3);
}

function convertInMonths(ageValue) {
  var age_Unit = Number(getSelectedValue(ageUnit));

  if (age_Unit == 0) {
    return (age = ageValue * 12);
  } else if (age_Unit == 1) {
    return (age = ageValue);
  } else if (age_Unit == 2) {
    return (age = ageValue / 4.345);
  }
}

function showResult() {
  validateAge();
  getResult();
}

function init() {
  createDropDown(ageVS, ageUnit);
  createDropDown(unitsForWeight, weightUnit);
  createDropDown(unitsForLength, heightUnit);
  createDropDown(choiceVS, serumEle);
  showVariable();
  var url = window.location.href;
  if (url.includes("?")) {
    setParamValues(queryParams);
    showResult();
  }
}

calcBtn.addEventListener("click", showResult);
init();

function showVariable() {
  var val = Number(getSelectedValue(serumEle));
  if (val == 0) {
    $("#calculator-row-3").hide();
  } else if (val == 1) {
    $("#calculator-row-3").show();
  }
}

serumEle.addEventListener("change", showVariable);


