"use strict";
mySimonSays();

function mySimonSays() {
  const start = document.getElementById("starting-btn");
  const numbers = document.getElementById("numbers");
  const formUser = document.getElementById("form");
  const confirm = document.getElementById("confirm");
  const valueUser = document.getElementsByTagName("input");

  const userNumbers = [];
  const checkArray = [];

  start.addEventListener("click", function () {
    //! Genera numeri random
    let numbersToWin = myGenerateRandomNumber();

    //! Fai sparire i numeri e fai apparire l'input per user
    const clock = setTimeout(myDisappear, 1000);

    //! Pusha i valori dati da user in array
    confirm.addEventListener("click", function () {
      for (let i = 0; i < valueUser.length; i++) {
        if (!isNaN(parseInt(valueUser[i].value))) {
          userNumbers.push(parseInt(valueUser[i].value));
        }
        if (numbersToWin[i] === userNumbers[i]) {
          checkArray.push(userNumbers[i]);
        }
      }
      console.log(userNumbers);
    });
  });

  /**
   * Genera 5 numeri random
   * @returns Array dei 5 numeri random
   */
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

  /**
   * Fai sparire i numeri e fai apparire l'input per user
   */
  function myDisappear() {
    numbers.classList.add("d-none");
    formUser.classList.remove("d-none");
  }

  function pushElements
}
