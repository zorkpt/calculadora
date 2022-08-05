function operate(a,b,operator) {
    if(operator === "sum") {
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
    // Program.restart();
    numeroFinal = 0;
    numero1 = 0;
    numero2 = 0;
    operAnterior = "";
    resultOper = 0;
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
        //resetAll();
        operAnterior="";
        numeroFinal=0;
        alert("Erro. Não Podes dividir por 0.");
         return 0;
    }
    const result = a/b;
    return result;
}


// consts para onde imprimir os numeros
const display = document.getElementById("resultado");
const opAnterior = document.getElementById("opAnterior")


// variaveis para armazenar os valores para os calculos
let numero1 = 0;
let numero2 = 0;
let usarPrimeiroValor = true;
let numeroFinal = 0;
let numeroFinal2 = 0;
let operAnterior = "";
let resultOper = 0;


// ADICIONAR DIGITOS
function addDigit(originalNumber, digitToAdd) {
    return originalNumber * 10 + digitToAdd;
}

// FUNCAO PARA SEPARAR VALORES
function add(valor){
    result = addDigit(numero1,valor);
    numeroFinal = numeroFinal *10 + result
    display.innerText = numeroFinal;
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
const btClear = document.getElementById("clear");



// EVENT LISTENERS DOS BOTOES
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
btSoma.addEventListener("click",function() { calcular("sum")});
btSub.addEventListener("click",function() { calcular("sub")});
btMulti.addEventListener("click",function() { calcular("multi")});
btIgual.addEventListener("click",function() {calcular("igual")});
btDivid.addEventListener("click",function() {calcular("divide")});
btClear.addEventListener("click",function() { resetAll()});



// FUNÇÃO PARA ADICIONAR NUMEROS AO OUTPUT E RESPETIVOS SINAIS DE OPER
function calcular(oper){
    if(operAnterior!=""){
        if(resultOper===0){resultOper=numeroFinal
        }else {
            resultOper = operate(resultOper,numeroFinal,operAnterior)
        }
        }else {resultOper = numeroFinal;}   
        if(oper==="divide"){opAnterior.innerText = resultOper + " /";}
        if(oper==="multi"){opAnterior.innerText = resultOper + " *";}
        if(oper==="sum"){opAnterior.innerText = resultOper + " +";}
        if(oper==="sub"){opAnterior.innerText = resultOper + " -";}
        if(oper==="igual"){opAnterior.innerText = resultOper;}
        display.innerText = 0;
        numeroFinal = 0;
        operAnterior = oper;
   };

