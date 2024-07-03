const elInpuit = document.querySelector("#inp");
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
//   const value = 0;
  if (+elInpuit.value < 10) {
    elInpuit.value = elBtn0.value;
  }
//   if (+elInpuit.value >= 10) {
//     elInpuit.value = elInpuit.value + value;
//   }
});

elBtn1.addEventListener("click", function () {
      if (+elInpuit.value < 10) {
        elInpuit.value = elInpuit.value + elBtn1.value;
        document.getElementById('all_rounds').style.border = 'solid 2px red' 
      }
      
      if (+elInpuit.value >= 10 && +elInpuit.value < 99 ) {
        document.getElementById('rounds2').style.border = 'solid 2px red'
        document.getElementById('all_rounds').style.border = 'none'  
    }
    });


elBtn2.addEventListener("click", function () {
  const value = 2;
  if (+elInpuit.value < 10) {
    elInpuit.value = elInpuit.value + value;
  }
});
elBtn3.addEventListener("click", function () {
  const value = 3;
  if (+elInpuit.value < 10) {
    elInpuit.value = elInpuit.value + value;
  }
});
elBtn4.addEventListener("click", function () {
  const value = 4;
  if (+elInpuit.value < 10) {
    elInpuit.value = elInpuit.value + value;
  }
});
elBtn5.addEventListener("click", function () {
  const value = 5;
  if (+elInpuit.value < 10) {
    elInpuit.value = elInpuit.value + value;
  }
});
elBtn6.addEventListener("click", function () {
  const value = 6;
  if (+elInpuit.value < 10) {
    elInpuit.value = elInpuit.value + value;
  }
});
elBtn7.addEventListener("click", function () {
  const value = 7;
  if (+elInpuit.value < 10) {
    elInpuit.value = elInpuit.value + value;
  }
});
elBtn8.addEventListener("click", function () {
  const value = 8;
  if (+elInpuit.value < 10) {
    elInpuit.value = elInpuit.value + value;
  }
});
elBtn9.addEventListener("click", function () {
  const value = 9;
  if (+elInpuit.value < 10) {
    elInpuit.value = elInpuit.value + value;
  }
});
