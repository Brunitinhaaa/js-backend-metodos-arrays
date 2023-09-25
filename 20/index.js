const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const maiorPalavra = cidades.reduce((acumulador, elementoAtual) => {
    let maiorP = acumulador;

    if (elementoAtual.length > maiorP) {
        maiorP = elementoAtual;
    }

    return maiorP;
});

console.log("maior string (em comprimento) dentre os elementos da array de strings cidades:", maiorPalavra);