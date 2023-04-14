const $getAdvice = document.querySelector(".getAdvice"),
  $adviceNumber = document.querySelector(".advice-number > h4"),
  $adviceText = document.querySelector(".advice-text > p");
console.log($getAdvice);

function randomAdvice() {
  let numberID = Math.round(Math.random(1) * 100);
  console.log(numberID);
  fetch(`https://api.adviceslip.com/advice/${numberID}`)
    .then((res) => res.json())
    .then((advice) => {
      $adviceNumber.textContent = `ADVICE #${advice.slip.id}`;
      $adviceText.textContent = `"${advice.slip.advice}"`;
      console.log(advice);
    });
}

randomAdvice();

$getAdvice.addEventListener("click", (event) => {
  event.preventDefault();
  randomAdvice();
});
