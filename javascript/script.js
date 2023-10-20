"use strict";
mySimonSays();

function mySimonSays() {
  const start = document.getElementById("starting-btn");
  const numbers = document.getElementById("numbers");

  start.addEventListener("click", function () {
    numbers.classList.remove("d-none");
    numbers.innerHTML = getRndInteger(1, 100);
  });
}
