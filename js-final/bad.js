const form = document.querySelector("#phoneForm")
let phoneNo = ""
let currentDigit = 0
console.log(phoneNo)

const text = "Phone number: "

//make function to roll d10
function rolldie(max) {
  return Math.floor(Math.random() * max);
}
console.log(rolldie(10));

//make event listeners for all roll d10 buttons
function inputd10() {
  let paraselect = document.querySelector(`#phonenumber`)
  currentDigit = rolldie(10)
  paraselect.innerText = text + phoneNo + `${currentDigit}`
}

function acceptDigit() {
  phoneNo += currentDigit
}

function resetNo() {
  let paraselect = document.querySelector(`#phonenumber`)
  phoneNo = ""
  paraselect.innerText = text + phoneNo
}

//make event listeners for all accept digit buttons
for (x = 0; x < 10; x++) {
  const acceptbtnselect = document.querySelector(`accept${x}`)
  //console.log(`accept${x+1}`)
}
//make sure these buttons only affect their respective inputs

//add rolled d10 into respective paragraph

//call data from all inputs to form singular, 10 digit phone number

//input this into a final telephone input

//make submit button log the final number into the console to check functionality


//function displayNo() {
  //const newNo = document.querySelectorAll();  
//}

