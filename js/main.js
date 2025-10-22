// Factorial Calculation Function
function calculateFactorial() {
  const input = document.getElementById("inputNumber").value;
  const outputDiv = document.getElementById("output");

  if (input === "" || input < 0) {
    outputDiv.textContent = "Please enter a valid positive number.";
    return;
  }

  let result = 1;
  for (let i = 1; i <= input; i++) {
    result *= i;
  }

  outputDiv.textContent = `${input}! = ${result}`;
}


const themeButtons = document.querySelectorAll("[data-bs-theme-value]");
themeButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const theme = btn.getAttribute("data-bs-theme-value");
    document.documentElement.setAttribute("data-bs-theme", theme);
  });
});
