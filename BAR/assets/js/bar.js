let qtdProcessos = 0;
let qtdProcessosCom = 0;
let qtdProcessosInd = 0;
let qtdProcessosTransf = 0;
let qtdProcessosPAF = 0;
let qtdProcessosStatus = 0;
let qtdProcessosMan = 0;


const carregarDadosGerais = () => {
    const ind = parseInt(localStorage.qtdInd);
    const com = parseInt(localStorage.qtdCom);
    const transf = parseInt(localStorage.qtdTransf);
    const paf = parseInt(localStorage.qtdPaf);
    const status = parseInt(localStorage.qtdStatus);
    const manutencao = parseInt(localStorage.qtdManu);
    if (com) {
        qtdProcessosCom = com;
        try {
            let armasComercio = document.getElementById('armas-do-comercio')
            armasComercio.innerHTML += localStorage.texCom;
            formAquicisao(qtdProcessosCom, 'comercio');
        } catch (Exeception) {
            console.log(Exeception)
        }

    }
    if (ind) {
        qtdProcessosInd = ind;
        let armasIndustria = document.getElementById('armas-da-industria')
        armasIndustria.innerHTML += localStorage.texInd;
        formAquicisao(qtdProcessosInd, 'industria');
    }
    if (transf) {
        let armasTransf = document.getElementById('armas-por-transferencia')
        armasTransf.innerHTML += localStorage.texTransf
        qtdProcessosTransf = transf;
        formTransf();
    }
    if (paf) {
        let armasPAF = document.getElementById('armas-paf')
        armasPAF.innerHTML += localStorage.texPaf
        qtdProcessosPAF = paf;
        formPAF();
    }
    if (status) {
        let armasStatus = document.getElementById('armas-status')
        armasStatus.innerHTML += localStorage.texStatus
        qtdProcessosStatus = status;
        formStatus();
    }
    if (manutencao) {
        document.getElementById('armas-manutencao').innerHTML += localStorage.texManu
        qtdProcessosMan = manutencao
        formManutencao()
    }
    try {
        if (ind || com || transf || paf || status || manutencao) {
            document.getElementById('informações-bar').remove()
            if (qtdProcessosInd <= 0) document.getElementById('industria').remove();
            if (qtdProcessosCom <= 0) document.getElementById('comercio').remove();
            if (qtdProcessosTransf <= 0) document.getElementById('transferencia').remove();
            if (qtdProcessosPAF <= 0) document.getElementById('paf').remove();
            if (qtdProcessosStatus <= 0) document.getElementById('status').remove();
            if (qtdProcessosMan <= 0) document.getElementById('manutencao').remove();
        }
    } catch (error) {
        console.log(error)
    }
}

const getDadosGerais = () => {
    const ind = document.getElementById('text-aux-ind').value
    const com = document.getElementById('text-aux-com').value
    const transf = document.getElementById('text-aux-transf').value
    const paf = document.getElementById('text-aux-paf').value
    const status = document.getElementById('text-aux-status').value
    qtdProcessosInd = document.getElementById('qtd-armas-ind').value;
    qtdProcessosCom = document.getElementById('qtd-armas-com').value;
    qtdProcessosTransf = document.getElementById('qtd-armas-transf').value;
    qtdProcessosPAF = document.getElementById('qtd-armas-paf').value;
    qtdProcessosStatus = document.getElementById('qtd-armas-status').value;
    qtdProcessosMan = document.getElementById('qtd-armas-manu').value;
    let textCom;
    let textInd;
    let textTransf;
    let textPAF;
    let textStatus;
    let textManu;
    let n = 0;
    if (ind.length > 0) {
        n++;
        let armasIndustria = document.getElementById('armas-da-industria')
        textInd = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, DE ${ind}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;
        armasIndustria.innerHTML += textInd;
        formAquicisao(qtdProcessosInd, 'industria');
    } else {
        document.getElementById('industria').remove();
    }
    if (com.length > 0) {
        n++;
        let armasComercio = document.getElementById('armas-do-comercio')
        textCom = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, DE ${com}, ADQUIRIDAS ATRAVÉS DO COMÉRCIO.`;
        armasComercio.innerHTML += textCom;
        formAquicisao(qtdProcessosCom, 'comercio');
    } else {
        document.getElementById('comercio').remove();
    }

    if (transf.length > 0) {
        n++;
        let armasTransferencia = document.getElementById('armas-por-transferencia')
        textTransf = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA TRANSFERÊNCIA DE ARMA DE FOGO DE USO PERMITIDO, DE ${com}.`;
        armasTransferencia.innerHTML += textTransf;
        formTransf()
    } else {
        document.getElementById('transferencia').remove();
    }

    if (paf.length > 0) {
        n++;
        let armasPAF = document.getElementById('armas-paf')
        textPAF = `${("0" + n).slice(-2)}. SOLICITAÇÃO PARA EXPEDIÇÃO DE PAF (PORTE DE ARMA DE FOGO) PARA POLICIAL MILITAR DA RESERVA REMUNERADA, DE CALIBRE PERMITIDO, DE ${paf}.`;
        armasPAF.innerHTML += textPAF;
        formPAF()
    } else {
        document.getElementById('paf').remove();
    }

    if (status.length > 0) {
        n++;
        let armasStatus = document.getElementById('armas-status')
        textStatus = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA MUDANÇA DE STATUS DE ARMA DE FOGO, PISTOLA E ESPINGARDA, POR EXTRAVIO, DE CALIBRE RESTRITO E PERMITIDO, DE ${status}, NO SIGMA.`;
        armasStatus.innerHTML += textStatus;
        formStatus()
    } else {
        document.getElementById('status').remove();
    }
    if (parseInt(qtdProcessosMan) > 0) {
        n++;
        let armasManu = document.getElementById('armas-manutencao');
        textManu = `${("0" + n).slice(-2)}. MANUNTENÇÃO DE DADOS NO “SIGMA”`
        armasManu.innerHTML += textManu;
        formManutencao()
    } else {
        document.getElementById('manutencao').remove()
    }

    localStorage.setItem('qtdInd', qtdProcessosInd.toString())
    localStorage.setItem('qtdCom', qtdProcessosCom.toString())
    localStorage.setItem('qtdTransf', qtdProcessosTransf.toString())
    localStorage.setItem('qtdPaf', qtdProcessosPAF.toString())
    localStorage.setItem('qtdStatus', qtdProcessosStatus.toString())
    localStorage.setItem('qtdManu', qtdProcessosMan.toString())
    localStorage.setItem('texCom', textCom);
    localStorage.setItem('texInd', textInd);
    localStorage.setItem('texTransf', textTransf);
    localStorage.setItem('texPaf', textPAF);
    localStorage.setItem('texStatus', textStatus);
    localStorage.setItem('texManu', textManu);
    document.getElementById('informações-bar').remove()
}

const completarEndRes = processo => {
    let endereco = document.getElementById('residencia-' + processo)
    let cidade = document.getElementById('cidade-' + processo).value
    if (endereco.value.length > 0) {
        if (endereco.value.match(/-PA$/)) {
            document.getElementById('cidade-' + processo).hidden = '1'
            return
        }
        cidades.forEach(city => {
            cidade = city.id === cidade ? city.nome : cidade;
        })
        document.getElementById('cidade-' + processo).hidden = '1'
        endereco.value += ', ' + cidade + '-PA'
        endereco.size = '100'
    }
}

const unidadeDeMedida = processo => {
    let comprimento = document.getElementById('tam-cano-' + processo)
    let uniMedida = document.getElementById('uni-medida-' + processo)
    if (comprimento.value.length > 0 && comprimento.value[comprimento.value.length - 1] !== uniMedida.value[uniMedida.value.length - 1].toLowerCase()) {
        comprimento.type = 'text'
        uniMedida.hidden = '1'
        comprimento.value += String(uniMedida.value).toLocaleLowerCase()
    }

    if (comprimento.value[comprimento.value.length - 1] === uniMedida.value[uniMedida.value.length - 1].toLowerCase()) {
        uniMedida.hidden = '1'
    }

}

const pegarRg = processo => {
    const nome = pegar('nome', processo).trim()
    rg = nome.split(/ /g)
    rg = rg[rg.length - 1]
    document.getElementById('rg-' + processo).value = rg
}

const pai = processo => {
    let input_pai = document.getElementById(`pai-${processo}`);
    if (!input_pai.value) {
        input_pai.remove()
        document.getElementById(`e-${processo}`).remove()
    }
}

const mae = processo => {
    let input_mae = document.getElementById(`mae-${processo}`);
    if (!input_mae.value) {
        input_mae.remove()
        document.getElementById(`e-${processo}`).remove()
    }
}

const tipoAlma = processo => {
    const alma = pegar('alma', processo);
    if (alma === 'L') {
        document.getElementById('dados-raias-' + processo).hidden = '1'
    }
    document.getElementById('sentido-raias-' + processo).value = ''
}

const pegar = (id, processo) => {
    try {
        return document.getElementById(id + '-' + processo).value.trim();
    }
    catch {
        return ''
    }
}

const pegarCPF = processo => {
    try {
        let cpf = pegar('cpf', processo)
        return cpf.replace(/[.-]/g, '');
    } catch (Exception) {
        return ''
    }

}

const pegarData = (id, processo) => {
    let data = pegar(id, processo);
    data = data.split('-');
    data = data[2] + '/' + data[1] + '/' + data[0];
    return data;
}

const pegarDataPub = () => {
    const meses = [
        'Janeiro',
        'Fevereiro',
        'Março',
        'Abril',
        'Maio',
        'Junho',
        'Julho',
        'Agosto',
        'Setembro',
        'Outubro',
        'Novembro',
        'Dezembro'
    ]
    const dia = document.getElementById('dia-pub').value;
    let mes = document.getElementById('mes-pub').value;
    for (let mes_idx in meses) {
        if (mes.toString().toLowerCase() === meses[mes_idx].toLowerCase()) mes = ("0" + (parseInt(mes_idx) + 1)).slice(-2);
    }

    return dia + '/' + mes + '/' + new Date().getFullYear();
}

const pegarGrupoCalibre = processo => {
    try {
        let calibre = String(pegar('calibre', processo));
        calibre.replace(' ', '')
        if (calibre[calibre.length - 1].toLocaleLowerCase() === 'm') return 4;
        else if (!calibre.startsWith('.')) {
            calibre = calibre[1] + calibre[2]
            calibre = parseInt(calibre)
            if (calibre === 16) return 28;
            else if (calibre === 12) return 29;
            else if (calibre === 20) return 30;
            else if (calibre === 24) return 31;
            else if (calibre === 28) return 32;
            else if (calibre === 32) return 33;
            else if (calibre === 36) return 25;
            else if (calibre < 36) return 46;
        } else {
            calibre = calibre[1] + calibre[2]
            calibre = parseInt(calibre)
            if (calibre <= 22) return 15;
            if (calibre > 22 && calibre <= 25) return 7;
            if (calibre > 25 && calibre <= 27) return 5;
            if (calibre > 27 && calibre <= 30) return 26;
            if (calibre > 30 && calibre <= 32) return 6;
            if (calibre > 32 && calibre <= 38) return 4;
            if (calibre > 38 && calibre <= 41) return 27;
            if (calibre > 41 && calibre <= 45) return 23;
            if (calibre > 45) return 45;

        }
    } catch (Exception) {
        return '';
    }

}

const montarLinhaAEL = processo => {
    const Arma = {
        tombamento: pegar('tombamento', processo).replace('/', ''),
        numSerie: pegar('serie', processo).replace(/ /g, ''),
        marca: pegar('marca', processo),
        especie: pegar('especie', processo),
        modelo: pegar('modelo', processo).replace(/ /g, ''),
        calibre: pegar('calibre', processo),
        grupo_calibre: pegarGrupoCalibre(processo),
        municao: pegar('muni', processo),
        funcionamento: pegar('funcionamento', processo),
        canos: pegar('canos', processo),
        comprimentoCano: pegar('tam-cano', processo).replace(/pol|mm|cm/, ''),
        uniMedida: pegar('uni-medida', processo),
        alma: pegar('alma', processo),
        raias: pegar('n-raias', processo).length > 0 ? pegar('n-raias', processo) : '',
        sentidoRaias: pegar('sentido-raias', processo),
        acabamento: pegar('acabamento', processo),
        pais: pegar('pais', processo)
    }

    const BAR = {
        tipoPubli: 1,
        numBar: document.getElementById('num-bar').value.replace(/0/g, '') + new Date().getFullYear(),
        dataPublic: pegarDataPub(),
        orgao: '900000528'
    }

    const Policial = {
        cpf: pegarCPF(processo),
        nome: pegar('nome', processo).split(/-|–/)[0].trim(),
        nascimento: pegarData('nascimento', processo),
        rg: pegar('rg', processo),
        dataExpedicaoRG: pegarData('emissao', processo),
        orgaoEmissor: 'PMPA',
        uf: '14',
        pai: pegar('pai', processo).length > 0 ? pegar('pai', processo) : 'NAO CONSTA',
        mae: pegar('mae', processo).length > 0 ? pegar('mae', processo) : 'NAO CONSTA',
        cidade: pegar('cidade', processo)
    }


    let linha = `[${BAR.orgao}]`;
    for (const dado in Arma) {
        linha += `[${Arma[dado]}]`;
    }

    for (const dado in BAR) {
        linha += `[${BAR[dado]}]`
    }

    for (const dado in Policial) {
        if (dado !== 'mae') {
            linha += `[${Policial[dado]}]`
        } else {
            linha += `[${Policial[dado]}][][][][][][]`
        }
    }

    return linha;
}

const montarDadosOf = processo => {
    const bar = document.getElementById('num-bar').value + '/' + new Date().getFullYear()
    const dataBar = pegarDataPub()
    const documentoOf = `${bar} - ${dataBar}`
    const DadosOf = {
        nome: pegar('nome', processo).split(/-|–/)[0].trim(),
        cpf: pegarCPF(processo),
        rg: pegar('rg', processo),
        numSerie: pegar('serie', processo).replace(/ /g, ''),
        calibre: pegar('calibre', processo),
        fabricante: pegar('fabricante', processo),
        bar: `BAR ${documentoOf}`
    }
    return DadosOf
}

const salvarDadosOf = linhas => {
    let listaProcessos = [];
    for (i = 1; i <= linhas; i++) {
        listaProcessos.push(montarDadosOf(i))
    }

    localStorage.setItem('listaProcessos', JSON.stringify(listaProcessos))

}

const salvarForm = nomeForm => {
    let form = document.body.querySelector("#lista-" + nomeForm);
    let json = {}; // objeto que irá guardar os dados
    for (let dados of form) {
        const val = dados.value;
        json[dados.name] = val;
    }

    localStorage.setItem("formulario-" + nomeForm, JSON.stringify(json));
}

const salvarStatus = () => {
    if (qtdProcessosCom > 0) salvarForm('comercio');
    if (qtdProcessosInd > 0) salvarForm('industria');
    if (qtdProcessosTransf > 0) salvarForm('transferencia');
    if (qtdProcessosPAF > 0) salvarForm('paf');
    if (qtdProcessosStatus > 0) salvarForm('status');
    if (qtdProcessosMan > 0) salvarForm('manutencao');

    alert('Dados  Salvos Localmente!')
}

const carregarForm = nomeForm => {
    let formulario = localStorage.getItem("formulario-" + nomeForm);

    if (formulario) { // verifico se o localStorage existe
        formulario = JSON.parse(formulario);
        for (let dados in formulario) {

            document.body.querySelector("[name='" + dados + "']").value = formulario[dados];

        }
    }
}

const carregarStatus = () => {
    document.addEventListener("DOMContentLoaded", () => {

        carregarDadosGerais();
        if (qtdProcessosCom > 0) carregarForm('comercio');
        if (qtdProcessosInd > 0) carregarForm('industria');
        if (qtdProcessosTransf > 0) carregarForm('transferencia');
        if (qtdProcessosPAF > 0) carregarForm('paf');
        if (qtdProcessosStatus > 0) carregarForm('status');
        if (qtdProcessosMan > 0) carregarForm('manutencao');
        for (let i = 1; i <= (qtdProcessosCom + qtdProcessosInd + qtdProcessosTransf); i++) {
            completarEndRes(i);
            unidadeDeMedida(i);
            tipoAlma(i);
        }
    })
}


const montarAEL = () => {
    try {
        numeroDeLinhas = parseInt(qtdProcessosCom) + parseInt(qtdProcessosInd);
        let mes = new Date().getMonth() + 1
        if (mes < 10) mes = '0' + mes;
        const data = ("0" + new Date().getDate()).slice(-2) + '/' + mes + '/' + new Date().getFullYear()
        const data_titulo = ("0" + new Date().getDate()).slice(-2) + '' + mes + '' + new Date().getFullYear()
        const hora = ("0" + new Date().getHours()).slice(-2) + ':' + ("0" + new Date().getMinutes()).slice(-2) + ':' + ("0" + new Date().getSeconds()).slice(-2);
        const hora_titulo = ("0" + new Date().getHours()).slice(-2) + '' + ("0" + new Date().getMinutes()).slice(-2) + '' + ("0" + new Date().getSeconds()).slice(-2);
        const titulo = `CARGA-900000528-${data_titulo}-${hora_titulo}.txt`
        let linhas = `[REMETO][${data} ${hora}][${numeroDeLinhas}]`;

        for (let i = 1; i <= numeroDeLinhas; i++) {
            linhas += `\n${montarLinhaAEL(i)}[7]`
        }
        let teste = new Blob([linhas], { type: "text/plain;charset=ISO-8859-1" });
        saveAs(teste, titulo);
        salvarDadosOf(numeroDeLinhas);
    } catch (Excepiton) {
        alert('VOCÊ ESQUECEU DE ALGUMA INFORMAÇÃO IMPORTANTE!')
    }
    window.print()
}

const limparDados = () => {
    localStorage.clear();
    document.location.reload(true);
}

const montarOf = () => {
    document.addEventListener("DOMContentLoaded", () => {
        formOf()
    })
}