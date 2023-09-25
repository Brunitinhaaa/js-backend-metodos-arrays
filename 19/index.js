const numeros = [10, 1, 5, 50, 20, 30, 3, 4, 8, 2];
console.log("Ordem normal:", numeros);

numeros.sort((n1, n2) => {
    return n1 - n2;
});
console.log("Ordem crescente:", numeros);


numeros.sort((n1, n2) => {
    return n2 - n1;
});
console.log("Ordem decrescente:", numeros);


numeros.sort();
console.log("Ordem padrão unicode", numeros);

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"];
console.log("Ordem normal:", frutas);

frutas.sort((p1, p2) => {
    return p1.localeCompare(p2);
});
console.log("Ordem crescente de strings:", frutas);

frutas.sort((p1, p2) => {
    return p2.localeCompare(p1);
});
console.log("Ordem decrescente de strings:", frutas);

frutas.sort((p1, p2) => {
    return p1.length - p2.length;
});
console.log("Ordem crescente de acordo com a quantidade de caracters strings:", frutas);