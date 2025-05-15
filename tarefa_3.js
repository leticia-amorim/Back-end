//1
let apartamento = {
    quartos: 2,
    tipo:'apartamento',
    endereco:'avenida principal, 456 - centro',
    andar: 7
}
console.log(ap);
console.log(`${ap.tipo} com ${ap.quartos} quartos, localizado no ${ap.andar}º andar da ${ap.endereco}`)


//2
let prodEmb = {
    nome: 'lapto Hp',
    categoria: 'Eletronicos',
    peso: 1.5,
    preco: 3500.00
}
console.log(`o produto ${prodEmb.nome}`)

//3
class imovel {
    constructor(quartos, tipo, endereço){
    this.quartos = quartos;
    this.tipo = tipo;
    this.endereço = endereço;

}
exibirinformacoes(){
    return `${this.tipo} com ${this.quartos} quartos localizados na ${this.endereço}`
}
}
let casa = new imovel(3, "sobrado", "rua tanto faz, nº7070");
console.log(casa);
console.log(`tipo do imovel ${casa.tipo} \nQuartos: ${casa.quartos} /nEndereço: ${casa.endereço}`)
console.log(casa.exibirinformacoes());
let apt = new imovel(2, 'apartamento', 'rua amelia, nº 1010, bairro centro')
console.log(apt.exibirinformacoes());

//04
import entradaDados from "readline-sync"
console.log
let nome = entradaDados.question(("Informe seu nome"));
console.log(`Olá ${nome}, seja bem vindo(a)!`);