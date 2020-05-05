const procurarModelos = (nome, processo) => {
    let listaModelos = document.getElementById(`lista-modelos-${processo}`);
    listaModelos.innerHTML = ''
    if (nome.trim().length) {
        listaModelos.innerHTML += buscarModelos(nome.trim(), processo)
    }
}

const preencherInformacoesModelos = (processo, id) => {
    document.getElementById(`lista-modelos-${processo}`).innerHTML = '';
    MODELO = MODELOS.find(modelo => modelo._id === id)
    document.getElementById('modelo-' + processo).value = MODELO.modelo
    document.getElementById('calibre-' + processo).value = MODELO.calibre
    document.getElementById('muni-' + processo).value = MODELO.capacidade
    document.getElementById('canos-' + processo).value = MODELO.canos
    document.getElementById('tam-cano-' + processo).value = MODELO.comprimentoCano
    document.getElementById('n-raias-' + processo).value = MODELO.raias
    document.getElementById('acabamento-' + processo).value = MODELO.acabamento
}

const criarModelo = processo => {
    const modelo = document.getElementById('modelo-' + processo).value.trim.toUpperCase()
    if (!existeModelo(modelo) && modelo.length) {
        const MODELO = {
            modelo,
            calibre: pegar('calibre', processo),
            capacidade: parseInt(pegar('muni', processo)),
            canos: parseInt(pegar('canos', processo)),
            comprimentoCano: parseInt(pegar('tam-cano', processo)),
            raias: parseInt(pegar('n-raias', processo)),
            acabamento: pegar('acabamento', processo),
            funcionamento: parseInt(pegar('funcionamento', processo)),
            especie: parseInt(pegar('especie', processo))
        }
        createModelo(MODELO)
    }
}
