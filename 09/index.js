const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const validandoCompra = (arrayPalavras) => {
    const resultado = arrayPalavras.some((palavra) => {
        return palavra === "cerveja" || palavra === "vodka"
    });
    if (resultado) {
        console.log("revise sua lista, joão. possui bebida com venda proibida!");
    } else {
        console.log("tudo certo, vamos as compras!");
    }
};

validandoCompra(palavras);