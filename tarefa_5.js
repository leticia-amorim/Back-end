import rl from "readline-sync"

let num = rl.questionInt("informe o numero: ")
let cont = 1;
while(cont<= 10) {
    console.log(`${num} X ${cont} = ${num * cont}`);
    cont++
}

let numAlunos = rl.questionInt("informe o numero de alunos: ");
let somaMedias = 0;
let contadorAluno = 1;

while (contadorAluno <= numAlunos) {
    console.log(`Aluno ${contadorAluno}:`);

    let somaNotas = 0
    let contadorBimestre = 1;

    while (contadorBimestre <= 4) {
        let nota = rl.questionInt(`informe a nota do ${contadorAluno}º bimestre para o aluno ${contadorAluno}` ) 
        somaNotas = somaNotas + nota;
        contadorBimestre++;

    }  

    let mediaAluno = somaNotas/4;
    somaMedias = somaMedias + mediaAluno;

    console.log(`Media do aluno ${contadorAluno}: ${mediaAluno.toFixed(2)}`);
    contadorAluno++;


    let mediaGeralTurma = somaMedias / numAlunos;
    console.log(`Media Geral da turma: ${mediaGeralTurma.toFixed(2)}`);
}
//atividade 03
const numAleatorio = Math.floor(Math.random()*100)+1;

let tentativa;

do{
    tentativa = rl.questionInt("Tente adivinhar o numero (entre 1 e 100): ");
    if (tentativa === numAleatorio) {
        console.log("Parabens! Você adivinhou o numero.")
    } else if(tentativa < numAleatorio) {
        console.log("Tente um numero maior.");
    }else{
        console.log("Tente um numero menor.")
    }
    
} while (tentativa !== numAleatorio);

//atividade 04
for (let i = 1; i <= 10;) {
    let nome = rl.question(`informe o nome da ${i}º pessoa`)
    let salario = rl.questionFloat(`informe o salario de ${nome}`);
    
    let ir = 0;
    if (salario <=2100) {
        ir = 0;

    }else if(salario <=2800) {
        ir = salario * 0.075;
    }else if(salario <= 3750){
        ir = salario * 0.15;
    } else if (salario <= 4660){
        ir = salario * 0.225;
    }else {
        ir = salario * 0.275;
    }
}
console.log(`\n--- imposto de Renda devido---`);
console.log(`nome ${nome} \n imposto de Renda: R$ ${ir.toFixed(2)}\n`);


//atividade For in
const pesssoa = {
    nome: "carlos",
    dtNasc: "18/12/2009",
    cpf: "05610201241",
    sexo:"masculino"

}

for (const key in pessoa) {
    console.log (`${key}: ${pessoa[key]}`);

const cores = ["branco", "azul", "verde", "preto", "roxo", "amarelo"];
let valores = " ";
for (const elemento of cores) {
    valores += elemento;
}
}
console.log(valores);