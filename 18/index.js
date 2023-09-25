const pessoas = [
    {
        nome: "Antonio",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Maria",
        idade: 30,
        profissao: "Jornalista",
    },
    {
        nome: "Ana",
        idade: 21,
        profissao: "Programador",
    },
    {
        nome: "Beatriz",
        idade: 20,
        profissao: "Programador",
    },
    {
        nome: "José",
        idade: 32,
        profissao: "Jornalista",
    },
    {
        nome: "Marcos",
        idade: 30,
        profissao: "Programador",
    },
];

const filtroArray = (arrayPessoas) => {
    const resultado = arrayPessoas.filter((pessoa) => {
        return ((pessoa.profissao === "Programador" || pessoa.profissao === "Programadora" || pessoa.profissao === "Jornalista") && (pessoa.idade <= 29));
    })
    console.log(resultado);
}

filtroArray(pessoas);