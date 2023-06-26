const input = document.getElementById('inputSlider');
const slide = document.getElementById('sliderValue');
const passBox = document.getElementById('passbox');
const lowerCase = document.getElementById('lowercase');
const upperCase = document.getElementById('uppercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const getBtn = document.getElementById('genBtn');
const copyIcon = document.getElementById('copyIcon');

slide.innerHTML = input.value;
input.addEventListener('input', () => {
    slide.innerHTML = input.value;
})

let upperChar = "ABCDEFGHIJKLMNOPQRESTUVWXYZ";
let lowerChar = "abcdefghijklmnopqrestuvwxyz";
let num = "0123456789";
let allSymbols = "~!@#$%^&*"

function generatePassword() {
    let genPassword = "";
    let allChar = "";

    allChar += lowerCase.checked ? lowerChar : "";
    allChar += upperCase.checked ? upperChar : "";
    allChar += numbers.checked ? num : "";
    allChar += symbols.checked ? allSymbols : "";
    
    let i = 1;
    while(i<=input.value){
        genPassword += allChar.charAt(Math.floor(Math.random() * allChar.length));
        i++;
    }

    return genPassword;
}

copyIcon.addEventListener('click', () => {
    navigator.clipboard.writeText(passBox.value);
    copyIcon.title = "Password Copied";
    copyIcon.setAttribute('src', "./icon/check.png");

    setTimeout(() => {
        copyIcon.setAttribute('src', "./icon/copy.png");
        copyIcon.title = "";
    }, 2000)
})

getBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
})

