let dimin = document.querySelector('#diminuir');
let reset = document.querySelector('#reset');
let aumentar = document.querySelector('#aumentar');
let number = document.querySelector('#numberAtu')
numero = 0


dimin.addEventListener('click', ()=>{
    numero--;
    number.textContent = numero;

});

reset.addEventListener('click', ()=>{
    numero = 0;
    number.textContent = numero;

});

aumentar.addEventListener('click', ()=>{
    numero++;
    number.textContent = numero;


});

