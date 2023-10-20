"use strict";
mySimonSays();

function mySimonSays() {
  const start = document.getElementById("starting-btn");
  const numbers = document.getElementById("numbers");
  const numToRemember = [];

  start.addEventListener("click", function () {
    myGenerateRandomNumber();
    const clock = setTimeout(myDisappear, 3000);
  });

  function myGenerateRandomNumber() {
    while (numToRemember.length < 5) {
      numToRemember.push(getRndInteger(1, 100));
    }
    numbers.classList.remove("d-none");
    numbers.classList.add("fw-bold", "fs-3");
    numbers.innerHTML = numToRemember.join(", ");
  }

  function myDisappear() {
    numbers.classList.add("d-none");
  }
}
