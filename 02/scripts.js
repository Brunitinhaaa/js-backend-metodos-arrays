const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function divisaodegrupos(nomes, tamanhoDoGrupo) {
    let i = 0;
    let grupoNum = 1;

    while (i < nomes.length) {
        const grupo = nomes.slice(i, i + tamanhoDoGrupo);
        console.log("Grupo:", grupoNum, grupo);
        i += tamanhoDoGrupo;
        grupoNum++;
    }
}

divisaodegrupos(nomes, tamanhoDoGrupo);


