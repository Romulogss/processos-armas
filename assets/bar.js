const getQtdProcessos = () => {
    return document.getElementById('qtd').value;
}

const qtdProcessos = () => {
    const qtd = getQtdProcessos();
    document.getElementById('qtdProcessos').remove()
}

const getDadosGerais = () => {
    const ind = document.getElementById('text-aux-ind').value
    const com = document.getElementById('text-aux-com').value
    console.log(ind, com);
    if(ind.length > 0) {
        let armasIndustria = document.getElementById('armas-da-industria')
        armasIndustria.innerHTML += `01. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, SENDO  ${ind}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;
    }
    if(com.length > 0) {
        let num = '01';
        if(ind.length > 0) num = '02'
        let armasComercio = document.getElementById('armas-do-comercio')
        armasComercio.innerHTML += `${num}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, SENDO  ${ind}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;F
    }
    document.getElementById('informações-bar').remove()
}