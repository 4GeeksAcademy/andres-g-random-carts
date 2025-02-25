import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
let icons = ["suit-diamonds", "suit-heart", "suit-spades", "suit-clubs"]
let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"]
let randomIconsNumber = Math.floor(Math.random() * icons.length)
let randomCardNumber = Math.floor(Math.random() * cardNumber.length)

document.getElementById('cardContent').innerHTML = cardNumber[randomCardNumber];
document.getElementById('theCard').classList.add(icons[randomIconsNumber])
};