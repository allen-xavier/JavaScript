function parImpar(num) {
    if (num % 2 == 0) {
        console.log("Número é Par");
    }
    else {
        console.log("Número é Impar")
    }
}

let numPrimo = (num) => {

    if (num == 0 || num == 1) {
        console.log("Número não é Primo");
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("Número não é Primo");
            return false;
        }
    }
    console.log("Número é Primo");
    return true;
}

function tempo(callback) {
    setTimeout(function () {
        callback();
    }, 1000);
}

function regressiva(callback) {
    let sec = 11;
    for (let i = 1; i < 11; i++) {
        sec = sec - 1;
        console.log(sec);
    }
    callback();
}

function anonovo() {
    console.log("Feliz Ano Novo !!");
}

const regressiva2 = new Promise((resolve, reject) => {
    let nums = "";
    for (let i = 10; i > 0; i--) {
        nums += i + "\n";
    }
    resolve(nums);
})

const anonovo2 = new Promise((resolve, reject) => {
    resolve("Feliz Ano Novo !!");
})


const asyncFunction = async () => {
    try {
        const regres2 = await regressiva2;
        const anonov2 = await anonovo2;
        console.log(regres2);
        console.log(anonov2);
    }
    catch{
        console.log(err);
    }
}

let notas = [5.3, 4.7, 8.5, 7.1, 6.4, 9.2, 9.8, 5.5, 7.4, 7.0];
function acima7() {
    notas.forEach(function (valor) {
        if (valor >= 7) {
            console.log("Nota: " + valor)
        }
    })
}

let produtos = [
    {
        produto: "tomate",
        preco: "10.5"
    },
    {
        produto: "feijao",
        preco: "8.9"
    },
    {
        produto: "batata",
        preco: "6.3"
    },
    {
        produto: "espinafre",
        preco: "5.9"
    }
]

function somaPreco() {
    let valortotal = 0
    produtos.forEach(function (produto) {
            valortotal += +produto.preco;
    })
    console.log("Soma dos Produtos: " + valortotal);
}

let escola = [
    {
        aluno: "Fernando",
        serie: "8",
    },
    {
        aluno: "Patricia",
        serie: "9",
    },
    {
        aluno: "Joao",
        serie: "8",
    },
    {
        aluno: "Jaqueline",
        serie: "8",
    },
    {
        aluno: "Michele",
        serie: "9",
    },
    {
        aluno: "Bruno",
        serie: "8",
    },
    
]

function alteraMateria() {
    escola.forEach(function (materia) {
            if (materia.serie == 8){
                materia.materia = "História";
            }
            else if (materia.serie == 9){
                materia.materia = "Física";
            }
            console.log(materia);
    })
    
}




/* parImpar(7); */

/* numPrimo(12); */

/* regressiva(anonovo); */

/* regressiva2.then(function(res) {return console.log(res)})
    .then(function() {return anonovo2})
    .then(function(res) {return console.log(res)}); */

/* asyncFunction(); */

/* acima7() */

/* somaPreco(); */

/* alteraMateria() */