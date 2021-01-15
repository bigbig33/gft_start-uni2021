

function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b> Obrigado por clicar </b>";
    
    //console.log(document.getElementById("agradecimento"))
    //alert("Obrigado por clicar");
}

function redirecionar(){
    //window.open("https://github.com/bigbig33/aula_javascript");
    window.location.href = "https://github.com/bigbig33/aula_javascript";
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
    elemento.innerHTML = "Obrigado passar o mouse aqui";
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "passe o mouse aqui";
}

function load(){
    alert("Página carregada");
}

function funcaoChange(elemento){
    console.log(elemento.value)
}


/*
function soma(n1, n2) {
    return n1 + n2;
}


var validar = 0;

function validaIdade(idade){
    if (idade >=18){
        validar = true;
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual a sua idade?");
console.log(validaIdade(idade));
*/

//alert(soma(5, 10));


/*
var d = new Date();
alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count <=5; count++){
    alert(count);
}
*/


/*
var count = 0;
while (count <=5){
    console.log(count);
    alert(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade");
};
*/

/*
var fruta = [{nome:"maçã", cor:"vermelha"}, {nome:"uva", cor:"roxa"}]
console.log(fruta);
alert(fruta[1].cor);
*/

/*
var fruta = {nome:"maçã", cor:"vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//var lista = ["maçã", "pera", "laranja"];
//lista.push("uva");
//lista.pop();

//console.log(lista);
//console.log(lista.toString());
//console.log(lista.join(" | "));


//var nome = "João Souza";
//var n1 = 5;
//var n2 = 3;
//var frase = "Japão é o melhor time do mundo"
// alert(nome + " tem " + idade + " anos");
// alert(idade + idade2);
//console.log(nome);
//console.log(n1 * n2);
//console.log(frase.replace("Japão", "Brasil"))
// alert(frase.replace("Japão", "Brasil"))
