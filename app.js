/****** METHOD -1  *******/

// const value = document.getElementById("value");
// const btnDec = document.querySelector(".decrease");
// const btnRes = document.querySelector(".reset");
// const btnInc = document.querySelector(".increase");

// let count = 0;

// btnDec.addEventListener("click", function () {
//   value.textContent = --count;
//   if (count < 0) value.style.color = "red";
//   else if (count === 0) value.style.color = "#102A42";
// });

// btnRes.addEventListener("click", function () {
//   count = 0;
//   value.textContent = count;
//   value.style.color = "#102A42";
// });

// btnInc.addEventListener("click", function () {
//   value.textContent = ++count;
//   if (count > 0) value.style.color = "green";
//   else if (count === 0) value.style.color = "#102A42";
// });

/****** METHOD -2 [recommended]  *******/

const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else if (styles.contains("reset")) {
      count = 0;
    }

    //change color
    if (count > 0) value.style.color = "green";
    else if (count < 0) value.style.color = "red";
    else value.style.color = "#102A42";

    value.textContent = count;
  });
});
