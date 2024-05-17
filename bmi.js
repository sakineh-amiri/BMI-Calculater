const $ = document;
let weightInput = $.querySelector("#weight");
let heightInput = $.querySelector("#height");
let pElemNumber = $.querySelector("#result");
let pElemText = $.querySelector("#category");
let weightval = $.querySelector("#weight-val");
let heightval = $.querySelector("#height-val");

function BMICalculator() {
  let BMI = +(weightInput.value / Math.pow(heightInput.value / 100, 2)).toFixed(
    2
  );
  console.log(BMI);
  pElemNumber.innerHTML = BMI;
  weightval.innerHTML = weightInput.value + " kg Weight";
  heightval.innerHTML = heightInput.value + " Cm Height";

  if (BMI <= 18.5) {
    pElemNumber.style.color = "yellow";
    pElemText.style.color = "yellow";
    pElemText.innerHTML = "under weight";
  } else if (BMI <= 24.9 && BMI > 18.5) {
    pElemNumber.style.color = "green";
    pElemText.style.color = "green";
    pElemText.innerHTML = "normal";
  } else if (BMI <= 29.9 && BMI > 25) {
    pElemNumber.style.color = "orange";
    pElemText.style.color = "orange";
    pElemText.innerHTML = "over weight";
  } else if (BMI >= 29.5) {
    pElemNumber.style.color = "red";
    pElemText.style.color = "red";
    pElemText.innerHTML = "obese";
  }
}

weightInput.addEventListener("input", BMICalculator);
heightInput.addEventListener("input", BMICalculator);
