let secim = document.querySelector("#box").children;
let result = document.querySelector("#result");
let clean = document.querySelector("#clean");
let hesap = document.querySelector("#hesapla");


clean.addEventListener("click", temizle);
hesap.addEventListener("click", hesapla);


for (var i = 0; i < 16; i++) {
    if (i != 12 && i != 14) { 
        secim[i].addEventListener("click", yazdir);
    }
}
function hesapla() {
    result.innerText = eval(result.innerText);
    if (eval(result.innerText.length) > 8) { 
        result.innerText = eval(result.innerText).toPrecision(8);
    }
}

function temizle() {
    result.innerText = " ";
}


function yazdir() {
    if (result.innerText.length < 8) 
        result.innerText = result.innerText + this.innerText;
}
