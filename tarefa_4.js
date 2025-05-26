import rl from 'readline-sync';

//Atividade 01
//solicite ao usuario para inserir um numero representado um dia da
//semana (1 a 7) e mostre o nome do dia correspondente.//
let dia = rl.question("Informe um valor entre 1 e 7: ")
//De outra forma: let dia = Nunber(rl.question("Informe o dia: "));
switch (dia) {
    case 1:
        console.log("domingo")
        break;
    case 2:
        console.log("segunda-feira")
        break;
    case 3:
        console.log("terça-feira")
        break;
    case 4:
        console.log("quarta-feira")
        break;
    case 5:
        console.log("quinta-feira")
        break;
    case 6:
        console.log("sexta-feira")
        break;
    case 7:
        console.log("sábado")
        break;

    default:
        console.log("valor invalido")
        break;
}

switch (més) {
    case 1:
        console.log("Janeiro")
        break;
    case 2:
        console.log("Fevereiro")
        break;
    case 3:
        console.log("Março")
        break;
    case 4:
        console.log("Abril")
        break;
    case 5:
        console.log("Maio")
        break;
    case 6:
        console.log("Junho")
        break;
    case 7:
        console.log("Julho")
        break;
    case 8:
            console.log("Agosto")
            break;
    case 9:
            console.log("Setembro")
            break;
    case 10:
            console.log("Outubro")
            break;
    case 11:
            console.log("Novembro")
            break;
    case 12:
            console.log("Dezembro")
            break;

    default:
        console.log("valor invalido")
        break;
}

let x = rl.questionFloat("informe o primeiro valor: ")
let y = rl.questionFloat("informe o primeiro valor: ")
let op = rl.questionFloat("escolha um opção: \n[1] soma \n[2] subtração \n[3] multiplicação \n[4] divisão")
switch (op) {
    case 1:
        console.log(`${x} + ${y} = ${x + y}`);
        break;

    case 2:
            console.log(`${x} + ${y} = ${x + y}`);
            break;

    case 3:
        console.log(`${x} + ${y} = ${x + y}`);
        break;

    case 4:
        console.log(`${x} + ${y} = ${x + y}`);
        break;

    default:
        console.log("valor incorreto!")
        break;
}
let salario = rl.questionFloat("informe seu salario: ")
let cat = rl.question("informe a categoria de bonificação: ").toLowerCase();
let bonus = 0
switch (cat) {
    case 'A':
        bonus = salario * 0.05;
        console.log(`Novo salario ${salario + bonus.toLocaleString('pt- BR', {style: "currency: "})}`);
        break;
   case 'B':
            bonus = salario * 0.10;
            console.log(`Novo salario ${salario + bonus.toLocaleString('pt- BR', {style: "currency: "})}`);
            break;
   case 'C':
        bonus = salario * 0.15;
        console.log(`Novo salario ${salario + bonus.toLocaleString('pt- BR', {style: "currency: "})}`);
        break;
    case 'D':
        bonus = salario * 0.20;
        console.log(`Novo salario ${salario + bonus.toLocaleString('pt- BR', {style: "currency: "})}`);
        break;

    default:
        break;
}