/**
 * Função criará um objeto com informações necessárias para o ofício de remessa.
 * @param {number} processo número contido no final do id do elemento
 * @returns {Object} Retorna um objeto com informações necessárias para o ofício de remessa.
 */
const montarDadosOf = processo => {
    const bar = document.getElementById('num-bar').value
    const dataBar = pegarDataPub()
    const documentoOf = `${bar} - ${dataBar}`
    const DadosOf = {
        nome: pegar('nome', processo).split(/-|–/)[0].trim(),
        cpf: pegar('cpf', processo),
        rg: pegar('rg', processo),
        numSerie: pegar('serie', processo).replace(/ /g, ''),
        calibre: pegar('calibre', processo),
        fabricante: pegar('fabricante', processo),
        bar: `BAR ${documentoOf}`
    }
    return DadosOf
}
/**
 * Função que fará os dados do ofício de remessa carregarem após a página
 * carregar
 */
const montarOf = () => {
    document.addEventListener("DOMContentLoaded", () => {
        formOf()
    })
}
/**
 * Salva um lista objetos com dados necessários pro ofício de remssa, localmente
 * @param {number} linhas Quantidade de dados que irão pro ofício de remessa
 */
const salvarDadosOf = linhas => {
    let listaProcessos = [];
    for (i = 1; i <= linhas; i++) {
        listaProcessos.push(montarDadosOf(i))
    }

    localStorage.setItem('listaProcessos', JSON.stringify(listaProcessos))

}