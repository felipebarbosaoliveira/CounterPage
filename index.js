

const diminuirBtn = document.getElementById("diminuirBtn");
const resetarBtn = document.getElementById("resetarBtn");
const acrescentarBtn = document.getElementById("acrescentarBtn");
const counterLabel = document.getElementById("counterLabel");
let count = 0;

diminuirBtn.onclick = function(){
    count--;
    counterLabel.textContent = count;
}

acrescentarBtn.onclick = function(){
    count++;
    counterLabel.textContent = count;
}

resetarBtn.onclick = function(){
    count = 0;
    counterLabel.textContent = count;
}