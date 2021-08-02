
const result = document.querySelector(".result");
const inputDate = document.querySelector(".date")
const form = document.querySelector(".form")
const inputNumber = document.querySelector(".lucky-number")

form.addEventListener("submit", accept)

function accept(e){
  e.preventDefault();
  const DOB = inputDate.value.replaceAll("-", "");
  luckyNumber = inputNumber.value;
  calculateSum(DOB, luckyNumber)
}

function calculateSum(DOB, luckyNumber){
  let sum = 0
  for(let i=0; i<DOB.length; i++){
    sum = sum + Number(DOB[i])
  }
  checkIfLucky(sum, luckyNumber);
}

function checkIfLucky(sum, luckyNumber){
  if(sum%luckyNumber == 0){
    result.innerText = "Congratulations! Your birthdate is lucky"
  }else{
    result.innerText = "Oops! Your birthdate is unlucky"
  }
}