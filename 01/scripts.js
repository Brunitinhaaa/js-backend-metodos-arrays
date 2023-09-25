const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
console.log("ARRAY DE FRUTAS ORIGINAL:", frutas);
console.log(`--------------------------------------------------`);

const frutasInvertidas = frutas.slice().reverse();
console.log("frutas com ordem invertida:", frutasInvertidas);
console.log(`--------------------------------------------------`);

const strFrutas = frutasInvertidas.join(", ");
console.log("String de frutas, separadas por vírgula:", strFrutas);
console.log(`--------------------------------------------------`);

const arrayFrutas = strFrutas.split(",");
console.log("Array de frutas:", arrayFrutas);
console.log(`--------------------------------------------------`);

const frutasSemPrimrEUltim = arrayFrutas.slice(1, arrayFrutas.length - 1);
console.log("frutas sem primeiro e último elemento:", frutasSemPrimrEUltim);
console.log(`--------------------------------------------------`);

let frutasComMelao = frutasSemPrimrEUltim.slice().reverse();
let restoDasFrutas = frutasComMelao.splice(frutasComMelao.length, 0, "Melão");
console.log("Array de frutas com ordem original e com melão:", frutasComMelao);



