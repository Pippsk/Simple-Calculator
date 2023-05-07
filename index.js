let num1 = 10;
let num2 = 2;

let addBtn = document.querySelector(".add_button");
let substractBtn = document.querySelector(".substract_button");
let devideBtn = document.querySelector(".devide_button");
let multiplyBtn = document.querySelector(".multiply_button");
let sumEl = document.querySelector("#sum-el");

document.querySelector("#num1-el").textContent = num1;
document.querySelector("#num2-el").textContent = num2;

addBtn.addEventListener("click", function () {
  let result = num1 + num2;
  sumEl.innerText = "Sum =" + " " + result;
});

substractBtn.addEventListener("click", function () {
  let result = num1 - num2;
  sumEl.innerText = "Substraction = " + result;
});

devideBtn.addEventListener("click", function () {
  let result = num1 / num2;
  sumEl.innerText = "Divid = " + result;
});

multiplyBtn.addEventListener("click", function () {
  let result = num1 * num2;
  sumEl.innerText = "Multiply = " + result;
});
