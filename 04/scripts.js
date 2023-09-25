const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];
const operacao = "agendar";
const nome = "Lúcia";
let filaPacientes = [];

function filadeatendimento(pacientes, operacao, nome) {
    if (operacao === "agendar") {
        filaPacientes = pacientes.splice(pacientes.length, 0, nome);
    } else {
        filaPacientes = pacientes.splice(0, 1);
        filaPacientes = pacientes.splice(0, 0, nome);
    }
    console.log(pacientes);
}

filadeatendimento(pacientes, operacao, nome);

