const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const filtroCaracteres = (arrayCidades) => {
    const resultado = arrayCidades.filter((cidade) => {
        return cidade.length <= 8;
    });
    if (resultado) {
        console.log(resultado.join(", "));
    }
}

filtroCaracteres(cidades);