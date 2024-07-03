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
    if (+elInpuit.value < 10) {
        elInpuit.value = elInpuit.value + elBtn0.value;
        document.getElementById('all_rounds').style.border = 'solid red' 
      }
      
      if (+elInpuit.value > 0 && +elInpuit.value < 10 ) {
        document.getElementById('rounds2').style.border = 'solid red'
        document.getElementById('all_rounds').style.border = 'none'  
    }
});

elBtn1.addEventListener("click", function () {
      if (+elInpuit.value < 10) {
        elInpuit.value = elInpuit.value + elBtn1.value;
        document.getElementById('all_rounds').style.border = 'solid red' 
      }
      
      if (+elInpuit.value >= 10 && +elInpuit.value < 99 ) {
        document.getElementById('rounds2').style.border = 'solid red'
        document.getElementById('all_rounds').style.border = 'none'  
    }
    });


elBtn2.addEventListener("click", function () {
  if (+elInpuit.value < 10) {
    elInpuit.value = elInpuit.value + elBtn2.value;
    document.getElementById('all_rounds').style.border = 'solid red' 
  }
  
  if (+elInpuit.value >= 10 && +elInpuit.value < 99 ) {
    document.getElementById('rounds2').style.border = 'solid red'
    document.getElementById('all_rounds').style.border = 'none'  
}
});

elBtn3.addEventListener("click", function () {
  if (+elInpuit.value < 10) {
    elInpuit.value = elInpuit.value + elBtn3.value;
    document.getElementById('all_rounds').style.border = 'solid red' 
  }
  
  if (+elInpuit.value >= 10 && +elInpuit.value < 99 ) {
    document.getElementById('rounds2').style.border = 'solid red'
    document.getElementById('all_rounds').style.border = 'none'  
}
});

elBtn4.addEventListener("click", function () {
    if (+elInpuit.value < 10) {
        elInpuit.value = elInpuit.value + elBtn4.value;
        document.getElementById('all_rounds').style.border = 'solid red' 
      }
      
      if (+elInpuit.value >= 10 && +elInpuit.value < 99 ) {
        document.getElementById('rounds2').style.border = 'solid red'
        document.getElementById('all_rounds').style.border = 'none'  
    }
});

elBtn5.addEventListener("click", function () {
    if (+elInpuit.value < 10) {
        elInpuit.value = elInpuit.value + elBtn5.value;
        document.getElementById('all_rounds').style.border = 'solid red' 
      }
      
      if (+elInpuit.value >= 10 && +elInpuit.value < 99 ) {
        document.getElementById('rounds2').style.border = 'solid red'
        document.getElementById('all_rounds').style.border = 'none'  
    }
});

elBtn6.addEventListener("click", function () {
    if (+elInpuit.value < 10) {
        elInpuit.value = elInpuit.value + elBtn6.value;
        document.getElementById('all_rounds').style.border = 'solid red' 
      }
      
      if (+elInpuit.value >= 10 && +elInpuit.value < 99 ) {
        document.getElementById('rounds2').style.border = 'solid red'
        document.getElementById('all_rounds').style.border = 'none'  
    }
});

elBtn7.addEventListener("click", function () {
    if (+elInpuit.value < 10) {
        elInpuit.value = elInpuit.value + elBtn7.value;
        document.getElementById('all_rounds').style.border = 'solid red' 
      }
      
      if (+elInpuit.value >= 10 && +elInpuit.value < 99 ) {
        document.getElementById('rounds2').style.border = 'solid red'
        document.getElementById('all_rounds').style.border = 'none'  
    }
});

elBtn8.addEventListener("click", function () {
    if (+elInpuit.value < 10) {
        elInpuit.value = elInpuit.value + elBtn8.value;
        document.getElementById('all_rounds').style.border = 'solid red' 
      }
      
      if (+elInpuit.value >= 10 && +elInpuit.value < 99 ) {
        document.getElementById('rounds2').style.border = 'solid red'
        document.getElementById('all_rounds').style.border = 'none'  
    }
});

elBtn9.addEventListener("click", function () {
    if (+elInpuit.value < 10) {
        elInpuit.value = elInpuit.value + elBtn9.value;
        document.getElementById('all_rounds').style.border = 'solid red' 
      }
      
      if (+elInpuit.value >= 10 && +elInpuit.value < 99 ) {
        document.getElementById('rounds2').style.border = 'solid red'
        document.getElementById('all_rounds').style.border = 'none'  
    }
});
