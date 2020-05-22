/**
 * Funnção formata e pega a data de publicação do BAR
 * @returns {string} Retorna a data de publicação do BAR
 */
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
/**
 * Função verifica em qual grupo o calibre se identifica
 * @param {number} processo Número contido no final do id do elemento
 * @returns {number} Retorna o número identificador do grupo do calibre
 */
const pegarGrupoCalibre = processo => {
    try {
        let calibre = String(pegar('calibre', processo));
        calibre.replace(/ /g, '')
        if (calibre.match(/mm$/i)) return 4;
        else if (!calibre.startsWith('.')) {
            calibre = calibre[0] + calibre[1]
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
/**
 * Função irá pegar todos os dados necessários, do processo, para montar um linha do AEL.
 * @param {number} processo Número contido no final do id do elemento.
 * @returns Retorna uma linha do AEL no layout pedido pelo EB.
 */
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
        comprimentoCano: pegar('tam-cano', processo).replace(/pol|mm|cm/i, ''),
        uniMedida: pegar('uni-medida', processo),
        alma: pegar('alma', processo),
        raias: pegar('n-raias', processo).length > 0 ? pegar('n-raias', processo) : '',
        sentidoRaias: pegar('sentido-raias', processo),
        acabamento: pegar('acabamento', processo),
        pais: pegar('pais', processo)
    }

    const BAR = {
        tipoPubli: 1,
        numBar: document.getElementById('num-bar').value,
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
/**
 * Função irá fazer todas as últimas formatações necessários para a cricação do arquivo AEL
 * e depois o baixará, irá colocar o BAR para imprimir e por último redirecionar o usuário
 * para a página de ofício de remessa.
 */
const montarAEL = () => {
    try {
        const aquisicoes = DadosGerais.qtdProcessosCom + DadosGerais.qtdProcessosInd + DadosGerais.qtdProcessosTransf
        for (let i = 1; i <= aquisicoes; i++) {
            paiMae(i);
            completarEndRes(i);
            unidadeDeMedida(i);
            tipoAlma(i);
        }
        numeroDeLinhas = aquisicoes - DadosGerais.qtdProcessosTransf;
        let mes = new Date().getMonth() + 1
        if (mes < 10) mes = '0' + mes;
        const data = ("0" + new Date().getDate()).slice(-2) + '/' + mes + '/' + new Date().getFullYear()
        const hora = ("0" + new Date().getHours()).slice(-2) + ':' + ("0" + new Date().getMinutes()).slice(-2) + ':' + ("0" + new Date().getSeconds()).slice(-2);
        const titulo = `CARGA-900000528-${data.replace(/\//g, '')}-${hora.replace(/:/g, '')}.txt`
        let linhas = `[REMOTO][${data} ${hora}][${numeroDeLinhas}]`;

        for (let i = 1; i <= numeroDeLinhas; i++) {
            linhas += `\n${montarLinhaAEL(i)}[7]`
        }
        let ael = new Blob([linhas], { type: "text/plain;charset=ISO-8859-1" });
        saveAs(ael, titulo);
        salvarDadosOf(numeroDeLinhas);
    } catch (Excepiton) {
        console.log(Excepiton)
        alert('VOCÊ ESQUECEU DE ALGUMA INFORMAÇÃO IMPORTANTE!\n' + Excepiton)
    }
    window.print()
    window.alert('Você seré redirecionado para a página de ofício!')
    window.location.href += 'of.php'
}
