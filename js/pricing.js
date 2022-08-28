const price = document.getElementById("price");
// Default Value.
price.value= 129;
price.disabled = true;
const allRadioBoxes = document.querySelectorAll(".input-radio");

function chkcontrol() {
    if (allRadioBoxes[0].checked){
        price.value = 129;
    } 
    else if (allRadioBoxes[1].checked) {
      price.value = 179;
    }
}


// Old Code With checkboxes + Radio Buttons.
// const price = document.getElementById("price");
// price.disabled = true;
// const allCheckBoxes = document.querySelectorAll(".input-checkbox");

// function chkcontrol() {
//   var sum = 0;
//   for (var i = 0; i < allCheckBoxes.length; i++) {
//     if (allCheckBoxes[i].checked) {
//       sum = sum + parseInt(allCheckBoxes[i].value);
//     }
//   }
//   price.value = sum;
// }

// let userChoice = document.querySelector(".userChoice");
// function YesOrNo() {
//   if (document.content.interested[0].checked) {
//     userChoice.style.display = "block";
//   } else if (document.content.interested[1].checked) {
//     userChoice.style.display = "none";
//   }
// }