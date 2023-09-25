const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function grupodecarros(nomes, posicao) {
    let i = 0;
    let carroEncontrado = nomes.slice(posicao, posicao + 3);
    console.log(carroEncontrado.join("-"));
}

grupodecarros(nomes, posicao);