const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const maiorNumero = numeros.reduce((acumulador, elementoAtual) => {
    let maiorN = acumulador;

    if (elementoAtual > maiorN) {
        maiorN = elementoAtual;
    }

    return maiorN;
})

console.log(maiorNumero);