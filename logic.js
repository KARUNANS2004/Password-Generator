const generateButton=document.getElementById('generate-button');
const passwordBox=document.getElementById('password-box');
const copyButton=document.getElementById('copy-button');

const length=12;

let upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let lowerCase='abcdefghijklmnopqrstuvwxyz';
let numbers='0123456789';
let specialCharacters='@#$%^&*()_+~|\{}[]<>,.?/-=!';

const allchars=upperCase + lowerCase + numbers + specialCharacters;

function createPassword(){
    let password="";
    password+=upperCase[Math.floor(Math.random()*upperCase.length)];
    password+=lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password+=numbers[Math.floor(Math.random()*numbers.length)];
    password+=specialCharacters[Math.floor(Math.random()*specialCharacters.length)];

    while(length>password.length){
        password+= allchars[Math.floor(Math.random()*allchars.length)];
    }

    passwordBox.value=password;
}

function copyPassword(){
    let textToCopy=passwordBox.value;
    navigator.clipboard.writeText(textToCopy);
    document.getElementById('copy-button').classList.remove('before:hidden');
    setTimeout(() => {
        document.getElementById('copy-button').classList.add('before:hidden');
    }, 2500);
}

generateButton.addEventListener('click',createPassword);
copyButton.addEventListener('click',copyPassword);
