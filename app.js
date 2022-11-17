const submit = document.querySelector(".submitbtn");
const reset = document.querySelector(".reset");
const numberChosen = [];
let guessedNumbers = document.querySelector(".number__guessed");
let guesseses = document.querySelector(".guesses");
let numberGuess = Math.floor(Math.random() * 10) + 1;

submit.addEventListener("click", function (event) {
  event.preventDefault();
  const numberBTN = document.querySelector("#number").value;

  const highLow = document.querySelector("form p span");

  if (numberBTN === "") return;
  if (+numberBTN === numberGuess) {
    highLow.textContent = `Yaay: ${numberGuess}`;
    submit.setAttribute("disabled", true);
  }
  if (+numberBTN > numberGuess) {
    highLow.textContent = `guess to high`;
  }
  if (+numberBTN < numberGuess) {
    highLow.textContent = `guess to low`;
  }
  numberChosen.push(numberBTN);
  guessedNumbers.textContent = numberChosen;
  guesseses.textContent = numberChosen.length;
});

reset.addEventListener("click", function (event) {
  event.preventDefault();

  window.addEventListener("click", () => {
    location.reload();
  });
});
