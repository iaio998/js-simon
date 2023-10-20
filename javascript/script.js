"use strict";
mySimonSays();

function mySimonSays() {
  const start = document.getElementById("starting-btn");
  const numbers = document.getElementById("numbers");
  const formUser = document.getElementById("form");
  const confirm = document.getElementById("confirm");
  const valueUser = document.getElementsByTagName("input");
  const result = document.querySelector(".alert");

  start.addEventListener("click", function () {
    start.classList.add("d-none");
    result.classList.add("d-none");
    result.classList.add("alert-danger", "alert-success");
    //! Genera numeri random
    let numbersToWin = myGenerateRandomNumber();
    console.log(numbersToWin);
    //! Fai sparire i numeri e fai apparire l'input per user
    const clock = setTimeout(myDisappear, 3000);

    //! Pusha i valori dati da user in array
    confirm.addEventListener("click", function () {
      const userNumbers = [];
      const checkArray = [];
      start.classList.remove("d-none");
      let counter = 0;
      for (let i = 0; i < valueUser.length; i++) {
        let a;
        if (!isNaN(parseInt(valueUser[i].value))) {
          userNumbers.push(parseInt(valueUser[i].value));
        }
        if (numbersToWin[i] === userNumbers[i]) {
          checkArray.push(userNumbers[i]);
          counter++;
        }
      }
      console.log(userNumbers);
      formUser.classList.add("d-none");

      if (checkArray.length === 5) {
        console.log("Hai vinto");
        result.classList.remove("d-none", "alert-danger");
        result.classList.add("alert-success");
        result.innerHTML = `Complimenti! Hai vinto, ti sei ricordato tutti questi numeri: ${checkArray.join(
          ", "
        )}`;
      } else {
        console.log("Hai perso");
        result.classList.remove("d-none", "alert-success");
        result.classList.add("alert-danger");
        result.innerHTML = `Che peccato! Hai perso purtroppo, ti sei ricordato ${counter} numeri: ${checkArray.join(
          ", "
        )}; la sequenza completa era ${numbersToWin.join(", ")}`;
      }
    });
  });

  /**
   * Genera 5 numeri random
   * @returns Array dei 5 numeri random
   */
  function myGenerateRandomNumber() {
    const numToRemember = [];
    while (numToRemember.length < 5) {
      let obj = getRndInteger(1, 100);
      if (!numToRemember.includes(obj)) {
        numToRemember.push(getRndInteger(1, 100));
      }
    }
    numbers.classList.remove("d-none");
    numbers.classList.add("fw-bold", "fs-3", "text-danger");
    numbers.innerHTML = numToRemember.join(" - ");

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
