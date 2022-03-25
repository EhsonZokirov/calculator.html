function calc(a, b) {
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(a / b);
}

calc();

var input = document.querySelector("input");
var btn = document.querySelector("btn");
var result = document.querySelector("result");

btn.addEventListener("click", function (params) {
  result.textContent = factorial(input.value);
});
