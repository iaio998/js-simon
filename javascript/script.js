"use strict";
mySimonSays();

function mySimonSays() {
  const start = document.getElementById("starting-btn");
  const numbers = document.getElementById("numbers");
  const inputUser = document.getElementById("form");

  start.addEventListener("click", function () {
    myGenerateRandomNumber();
    const clock = setTimeout(myDisappear, 3000);
  });

  function myGenerateRandomNumber() {
    const numToRemember = [];
    while (numToRemember.length < 5) {
      numToRemember.push(getRndInteger(1, 100));
    }
    numbers.classList.remove("d-none");
    numbers.classList.add("fw-bold", "fs-3", "text-danger");
    numbers.innerHTML = numToRemember.join(", ");
    return numToRemember;
  }

  function myDisappear() {
    numbers.classList.add("d-none");
  }
}
