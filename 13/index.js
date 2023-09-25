const enderecos = [
    { cep: 00111222, rua: "Rua dos Artistas" },
    { cep: 00111333, rua: "Rua Augusta" },
    { cep: 00222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const cep = 00222444;

const buscaDeCep = (arrayEnderecos) => {
    const resultado = arrayEnderecos.find((endereco) => {
        return endereco.cep === cep;
    })
    if (resultado) {
        console.log(resultado.rua);
    }
}

buscaDeCep(enderecos);