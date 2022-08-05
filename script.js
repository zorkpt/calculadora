function operate(a,b,operator) {
    if(operator === "sum") {
        console.log(sum(a,b))
        return sum(a,b);
    } else if(operator === "sub") {
        return subtract(a,b);
    }else if( operator === "multi") {
        return multiply(a,b);
    } else if (operator === "divide") { 
        return divide(a,b);
    }else if(operator === "igual") {
        return a;
    }
}
function resetAll() {

    numeroFinal = 0;
    numero1 = 0;
    numero2 = 0;
    operAnterior = "";
    resultOper = 0;
    alert("Não dá ó espertalhão :)");
    display.innerText = 0;
    opAnterior.innerText = 0;

}


function sum(a,b ) {
 const result = a+b;
 return result;
}

function subtract(a,b) {
    const result = a-b;
    return result;
}

function multiply(a,b) {
    const result = a*b;
    return result;
}

function divide(a,b) {
    if(b===0){
        resetAll();
        return 0;
    }
    const result = a/b;
    return result;
}
// variavel para onde imprimir os numeros
const display = document.getElementById("resultado");
const opAnterior = document.getElementById("opAnterior")

// variaveis para armazenar os valores para os calculos
let numero1 = 0;
let numero2 = 0;
let usarPrimeiroValor = true;
let numeroFinal = 0;
let numeroFinal2 = 0;
// criar consts dos botoes

// ADICIONAR DIGITOS
function addDigit(originalNumber, digitToAdd) {

    console.log(originalNumber*10+digitToAdd)
    console.log(digitToAdd)
    return originalNumber * 10 + digitToAdd;
}

// FUNCAO PARA SEPARAR VALORES
function add(valor){
    // LADO ESQUERDO DA OPERAÇÃO
    // if(usarPrimeiroValor) {
    result = addDigit(numero1,valor);
    numeroFinal = numeroFinal *10 + result
    display.innerText = numeroFinal;
    // LADO DIREITO DA OPERAÇÃO
    // } else {
    //     result = addDigit(numero2,valor);
    //     numeroFinal2 = numeroFinal2 *10 + result
    //     display.innerText = numeroFinal2;
    // }

    console.log(numeroFinal);
}


// BOTOES
const bt1 = document.getElementById("um");
const bt2 = document.getElementById("dois");
const bt3 = document.getElementById("tres");
const bt4 = document.getElementById("quatro");
const bt5 = document.getElementById("cinco");
const bt6 = document.getElementById("seis");
const bt7 = document.getElementById("sete");
const bt8 = document.getElementById("oito");
const bt9 = document.getElementById("nove");
const bt0 = document.getElementById("zero");
const btMulti = document.getElementById("multiplicar")
const btDivid = document.getElementById("dividir")
const btSoma = document.getElementById("somar")
const btSub = document.getElementById("sub")
const btIgual = document.getElementById("igual")

bt1.addEventListener("click",function() { add(1); });
bt2.addEventListener("click",function() { add(2); });
bt3.addEventListener("click",function() { add(3); });
bt4.addEventListener("click",function() { add(4); });
bt5.addEventListener("click",function() { add(5); });
bt6.addEventListener("click",function() { add(6); });
bt7.addEventListener("click",function() { add(7); });
bt8.addEventListener("click",function() { add(8); });
bt9.addEventListener("click",function() { add(9); });
bt0.addEventListener("click",function() { add(0); });



let operAnterior = "";
let resultOper = 0;


btSoma.addEventListener("click",function() {
    if(operAnterior!=""){
        resultOper = operate(resultOper,numeroFinal,operAnterior)

    }else {resultOper = numeroFinal;}
    opAnterior.innerText = resultOper + " +";
    display.innerText = 0;
    numeroFinal = 0;
    operAnterior = "sum";
   });

btSub.addEventListener("click",function() {
    if(operAnterior!=""){
        resultOper = operate(resultOper,numeroFinal,operAnterior)

    }else {resultOper = numeroFinal;}
    opAnterior.innerText = resultOper + " -";
    display.innerText = 0;
    numeroFinal = 0;
    operAnterior = "sub";
   });

btMulti.addEventListener("click",function() {
    if(operAnterior!=""){
        resultOper = operate(resultOper,numeroFinal,operAnterior)

    }else {resultOper = numeroFinal;}
    opAnterior.innerText = resultOper + " *";
    display.innerText = 0;
    numeroFinal = 0;
    operAnterior = "multi";
   });

btDivid.addEventListener("click",function() {
    if(operAnterior!=""){
        resultOper = operate(resultOper,numeroFinal,operAnterior)

    }else {resultOper = numeroFinal;}
    opAnterior.innerText = resultOper + " /";
    display.innerText = 0;
    numeroFinal = 0;
    operAnterior = "divide";
   });


btIgual.addEventListener("click",function() {
    if(operAnterior!=""){
        resultOper = operate(resultOper,numeroFinal,operAnterior)

    }else {resultOper = numeroFinal;}
    opAnterior.innerText = resultOper;
    display.innerText = 0;
    numeroFinal = 0;
    operAnterior = "igual";
   });




