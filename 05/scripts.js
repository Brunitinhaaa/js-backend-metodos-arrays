const pacientes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const nome = "Lúcia";
let pacientesAtendidos = [];
let pacientesCancelados = [];

function agendarPaciente(pacientes, nome) {
    pacientes.splice(pacientes.length, 0, nome);
    console.log("fila de pacientes atual:", pacientes.join(", "));
    console.log(`___________________________________________________
                                                                     `)
}


function atenderPaciente(pacientes, nome) {
    const indice = pacientes.indexOf(nome);
    //Se o paciente for encontrado o índice será diferente de -1
    if (indice !== -1) {
        pacientesAtendidos.push(pacientes.splice(indice, 1)[0]);
        console.log("fila de pacientes atual:", pacientes.join(", "));
        console.log("fila de pacientes atendidos:", pacientesAtendidos.join(", "));
        console.log("___________________________________________________");
    }
}


function cancelarAtendimento(pacientes, nome) {
    const indice = pacientes.indexOf(nome);
    if (indice !== -1) {
        pacientesCancelados.push(pacientes.splice(indice, 1)[0]);
        console.log("fila de pacientes atual:", pacientes.join(", "));
        console.log("fila de pacientes cancelados:", pacientesCancelados.join(", "));
        console.log("___________________________________________________");
    }
}

agendarPaciente(pacientes, nome);
atenderPaciente(pacientes, nome);
cancelarAtendimento(pacientes, nome);

