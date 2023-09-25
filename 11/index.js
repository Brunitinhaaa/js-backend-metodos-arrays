const usuarios = [
    {
        nome: "André",
        idade: 29,
        habilitado: false,
    },
    {
        nome: "Marcos",
        idade: 70,
        habilitado: true,
    },
    {
        nome: "Ana",
        idade: 35,
        habilitado: true,
    },
    {
        nome: "Vinícius",
        idade: 44,
        habilitado: true,
    },
    {
        nome: "Carlos",
        idade: 17,
        habilitado: true,
    },
    {
        nome: "Maria",
        idade: 19,
        habilitado: true,
    },
];

const validacaoUsuarios = (arrayUsuarios) => {
    const resultado = arrayUsuarios.filter((usuario) => {
        return usuario.idade >= 18 || usuario.idade <= 65;
    });
    const resultadoHabilitado = resultado.every((usuario) => {
        return usuario.habilitado;
    });
    if (resultadoHabilitado) {
        console.log("todos passaram no teste");
    } else {
        console.log("todos precisam estar habilitados");
    }
}

validacaoUsuarios(usuarios);
