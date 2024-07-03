const elInput = document.querySelector("#inp");
const elBtn0 = document.querySelector("#btn0");
const elBtn1 = document.querySelector("#btn1");
const elBtn2 = document.querySelector("#btn2");
const elBtn3 = document.querySelector("#btn3");
const elBtn4 = document.querySelector("#btn4");
const elBtn5 = document.querySelector("#btn5");
const elBtn6 = document.querySelector("#btn6");
const elBtn7 = document.querySelector("#btn7");
const elBtn8 = document.querySelector("#btn8");
const elBtn9 = document.querySelector("#btn9");

elBtn0.addEventListener("click", function () {
  if (+elInput.value < 10) {
    elInput.value = elInput.value + elBtn0.value;
    document.getElementById("all_rounds").style.border = "solid red";
  }
  if (+elInput.value >= 10 && +elInput.value < 99) {
    document.getElementById("rounds2").style.border = "solid red";
    document.getElementById("all_rounds").style.border = "none";
  }
});

elBtn1.addEventListener("click", function () {
  if (+elInput.value < 10) {
    elInput.value = elInput.value + elBtn1.value;
    document.getElementById("all_rounds").style.border = "solid red";
  }

  if (+elInput.value >= 10 && +elInput.value < 99) {
    document.getElementById("rounds2").style.border = "solid red";
    document.getElementById("all_rounds").style.border = "none";
  }

  if (elInput.value.includes("0")) {
    elInput.value = Number(elInput.value);
  }
});

elBtn2.addEventListener("click", function () {
  if (+elInput.value < 10) {
    elInput.value = elInput.value + elBtn2.value;
    document.getElementById("all_rounds").style.border = "solid red";
  }

  if (+elInput.value >= 10 && +elInput.value < 99) {
    document.getElementById("rounds2").style.border = "solid red";
    document.getElementById("all_rounds").style.border = "none";
  }
  if (elInput.value.includes("0")) {
    elInput.value = Number(elInput.value);
  }
});

elBtn3.addEventListener("click", function () {
  if (+elInput.value < 10) {
    elInput.value = elInput.value + elBtn3.value;
    document.getElementById("all_rounds").style.border = "solid red";
  }

  if (+elInput.value >= 10 && +elInput.value < 99) {
    document.getElementById("rounds2").style.border = "solid red";
    document.getElementById("all_rounds").style.border = "none";
  }
  if (elInput.value.includes("0")) {
    elInput.value = Number(elInput.value);
  }
});

elBtn4.addEventListener("click", function () {
  if (+elInput.value < 10) {
    elInput.value = elInput.value + elBtn4.value;
    document.getElementById("all_rounds").style.border = "solid red";
  }

  if (+elInput.value >= 10 && +elInput.value < 99) {
    document.getElementById("rounds2").style.border = "solid red";
    document.getElementById("all_rounds").style.border = "none";
  }
  if (elInput.value.includes("0")) {
    elInput.value = Number(elInput.value);
  }
});

elBtn5.addEventListener("click", function () {
  if (+elInput.value < 10) {
    elInput.value = elInput.value + elBtn5.value;
    document.getElementById("all_rounds").style.border = "solid red";
  }

  if (+elInput.value >= 10 && +elInput.value < 99) {
    document.getElementById("rounds2").style.border = "solid red";
    document.getElementById("all_rounds").style.border = "none";
  }
  if (elInput.value.includes("0")) {
    elInput.value = Number(elInput.value);
  }
});

elBtn6.addEventListener("click", function () {
  if (+elInput.value < 10) {
    elInput.value = elInput.value + elBtn6.value;
    document.getElementById("all_rounds").style.border = "solid red";
  }

  if (+elInput.value >= 10 && +elInput.value < 99) {
    document.getElementById("rounds2").style.border = "solid red";
    document.getElementById("all_rounds").style.border = "none";
  }
  if (elInput.value.includes("0")) {
    elInput.value = Number(elInput.value);
  }
});

elBtn7.addEventListener("click", function () {
  if (+elInput.value < 10) {
    elInput.value = elInput.value + elBtn7.value;
    document.getElementById("all_rounds").style.border = "solid red";
  }

  if (+elInput.value >= 10 && +elInput.value < 99) {
    document.getElementById("rounds2").style.border = "solid red";
    document.getElementById("all_rounds").style.border = "none";
  }
  if (elInput.value.includes("0")) {
    elInput.value = Number(elInput.value);
  }
});

elBtn8.addEventListener("click", function () {
  if (+elInput.value < 10) {
    elInput.value = elInput.value + elBtn8.value;
    document.getElementById("all_rounds").style.border = "solid red";
  }

  if (+elInput.value >= 10 && +elInput.value < 99) {
    document.getElementById("rounds2").style.border = "solid red";
    document.getElementById("all_rounds").style.border = "none";
  }
  if (elInput.value.includes("0")) {
    elInput.value = Number(elInput.value);
  }
});

elBtn9.addEventListener("click", function () {
  if (+elInput.value < 10) {
    elInput.value = elInput.value + elBtn9.value;
    document.getElementById("all_rounds").style.border = "solid red";
  }

  if (+elInput.value >= 10 && +elInput.value < 99) {
    document.getElementById("rounds2").style.border = "solid red";
    document.getElementById("all_rounds").style.border = "none";
  }
  if (elInput.value.includes("0")) {
    elInput.value = Number(elInput.value);
  }
});
