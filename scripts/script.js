let display = "";

function appendCharacter(character) {
  display += character;
  updateDisplay();
}

function clearDisplay() {
  display = "";
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(display);
    display = result.toString();
    updateDisplay();
  } catch (error) {
    display = "Error";
    updateDisplay();
  }
}

function updateDisplay() {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = display;
}

function fetchData() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const calculatorTitle = data.title;
      const buttons = data.buttons;

      document.querySelector("h1").textContent = calculatorTitle;

      const rowElements = document.querySelectorAll(".row");
      rowElements.forEach((rowElement, index) => {
        buttons[index].forEach(buttonText => {
          const buttonElement = document.createElement("button");
          buttonElement.textContent = buttonText;
          buttonElement.addEventListener("click", () => appendCharacter(buttonText));
          rowElement.appendChild(buttonElement);
        });
      });
    })
    .catch(error => {
      console.log("Error fetching data:", error);
    });
}

fetchData();