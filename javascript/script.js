"use strict";
mySimonSays();

function mySimonSays() {
  const start = document.getElementById("starting-btn");
  const numbers = document.getElementById("numbers");
  const formUser = document.getElementById("form");
  const confirm = document.getElementById("confirm");
  const valueUser = document.getElementsByTagName("input");

  const userNumbers = [];

  start.addEventListener("click", function () {
    //! Genera numeri random
    myGenerateRandomNumber();

    //! Fai sparire i numeri e fai apparire l'input per user
    const clock = setTimeout(myDisappear, 3000);

    //! Pusha i valori dati da user in array
    confirm.addEventListener("click", function () {
      userNumbers.push(parseInt(valueUser.value));
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
}
