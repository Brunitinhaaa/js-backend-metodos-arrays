const usuarios = [
    {
        nome: "João",
        pets: ["Max"],
    },
    {
        nome: "Ana",
        pets: ["Pingo", "Lulu"],
    },
    {
        nome: "Beatriz",
        pets: ["Lessie"],
    },
    {
        nome: "Carlos",
        pets: ["Farofa", "Salsicha", "Batata"],
    },
    {
        nome: "Antonio",
        pets: ["Naninha"],
    },
]

const pet = "Naninha";

function encontrarpet() {
    for (objeto of usuarios) {
        if (objeto.pets.includes(pet)) {
            console.log(`O dono(a) do(a) ${pet} é o(a) ${objeto.nome}`);
        }
    }
}

encontrarpet(usuarios);
