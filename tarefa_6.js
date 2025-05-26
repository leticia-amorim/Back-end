import rl from "readline-sync"

let frase = rl.question (`informe o texto para a caixa alta`)

function maiusculo(texto){
    texto = texto.toUpperCase();
    return texto
}
console.log(maiusculo(frase)) 