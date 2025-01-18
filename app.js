const password = document.getElementById("password");
const  length = 12;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
 const symbol = "@#$^()!&*?<>/-=_~";

 const allChars = upperCase + lowerCase + number + symbol;

function createPassword(){
    let  passcode = "";
    passcode += upperCase[Math.floor(Math.random() * upperCase.length)];
    passcode += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    passcode += number[Math.floor(Math.random() * number.length)];
    passcode += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > passcode.length){
        passcode += allChars[Math.floor(Math.random() * allChars.length)];
    }
    password.value = passcode;
}
