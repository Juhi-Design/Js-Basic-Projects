const myButton = document.getElementById("myButton");
const myLabel = document.getElementById("myLabel");
const min = 1;
const max = 6;
let randomnum1;

myButton.onclick = function() {
    randomnum1 = Math.floor(Math.random() * max) + min
    myLabel.textContent = randomnum1

}