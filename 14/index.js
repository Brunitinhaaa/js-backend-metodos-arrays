const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const modificandoArray = (arrayFrutas) => {
    const resultado = arrayFrutas.map((fruta, index) => {
        const primeiraLetraMaiuscula = fruta.slice(0, 1).toUpperCase();
        const restoDaPalavraMinuscula = fruta.slice(1).toLowerCase();
        return `${index} - ${primeiraLetraMaiuscula + restoDaPalavraMinuscula}`;
    })
    console.log(resultado);
}

modificandoArray(frutas);

