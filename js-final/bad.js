const form = document.querySelector("#phoneForm")
let phoneNo = ""
let currentDigit = 0
//console.log(phoneNo)

const text = "Phone number: "

//make function to roll any die
function rolldie(max) {
  return Math.floor(Math.random() * max);
}

//array of dice types (standard 7piece polyhedral)
diceArray = [4,6,8,10,100,12,20]

//randomize which die is rolled
var randomDie = '';
function dieRandom() {
  let randomSeed = Math.floor(Math.random() * diceArray.length);
  let randomDie = diceArray[randomSeed];
  //console.log(`d${randomDie}`);
  let dieBtn = document.querySelector('#roll1');
  dieBtn.innerText = `Roll d${randomDie}`;
  //console.log(dieBtn);
  //console.log(randomDie);
  return randomDie
}

function inputdie() {
  let paraselect = document.querySelector(`#phonenumber`)
  currentDigit = rolldie(dieRandom())
  //console.log(currentDigit)
  paraselect.innerText = text + phoneNo + `${currentDigit}`
  dieRandom()
}

function acceptDigit() {
  if (phoneNo.length < 10) {
    phoneNo += currentDigit
    alert('Accepted!')
    dieRandom()
  } 
  else {
    alert('Cannot input more digits')
  }
}

function resetNo() {
  let paraselect = document.querySelector(`#phonenumber`)
  phoneNo = ""
  paraselect.innerText = text + phoneNo
}

function submitBtn() {
  if (phoneNo.length==10){
    alert(`Phone number entered: ${phoneNo}`)
  }
  else {
    alert('Phone number invalid')
  }
}