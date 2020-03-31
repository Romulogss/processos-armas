let qtdProcessos = 0;
let qtdProcessosCom = 0;
let qtdProcessosInd = 0;
let temProcessosIndustria;
let temProcessosComercio;

const getDadosGerais = () => {
    const ind = document.getElementById('text-aux-ind').value
    const com = document.getElementById('text-aux-com').value
    qtdProcessosInd = document.getElementById('qtd-armas-ind').value;
    qtdProcessosCom = document.getElementById('qtd-armas-com').value;
    console.log(qtdProcessos)
    if (ind.length > 0) {
        let armasIndustria = document.getElementById('armas-da-industria')
        armasIndustria.innerHTML += `01. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, ${ind}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;
        temProcessosIndustria = true;
    } else {
        document.getElementById('industria').remove();
        temProcessosIndustria = false;
    }
    if (com.length > 0) {
        let num = '01';
        if (ind.length > 0) num = '02';
        let armasComercio = document.getElementById('armas-do-comercio')
        armasComercio.innerHTML += `${num}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, ${com}, ADQUIRIDAS ATRAVÉS DO COMÉRCIO.`;
        temProcessosComercio = true;
    } else {
        document.getElementById('comercio').remove();
        temProcessosComercio = false;
    }
    document.getElementById('informações-bar').remove()
}

const montarForm = () => {
    for (let i = 1; i <= qtdProcessosInd; i++) {
        qtdProcessos++;
        let nProcesso = ("00" + i).slice(-3);
        let form = document.getElementById('lista-industria');
        form.innerHTML += `
    <span class="no-print"><label for="tombamento-${qtdProcessos}">TOMBAMENTO</label> <input type="text" id="tombamento-${qtdProcessos}"></span><br>
    <label for="nome-${qtdProcessos}">${nProcesso}-NOME: </label>
    <input type="text" size="90" id="nome-${qtdProcessos}"><br>
    <label> FILIAÇÃO: <input type="text" size="30" placeholder="PAI" id="pai-${qtdProcessos}" onblur="pai(${qtdProcessos})" oninput="this.size = this.value.length + 6;">
        <span style="font-weight: normal;" id="e-${qtdProcessos}">e</span> <input type="text" onblur="mae(${qtdProcessos})" placeholder="MAE" size="30" id="mae-${qtdProcessos}"
            oninput="this.size = this.value.length + 6;">
    </label><br>
    <label> DATA E LOCAL DE NASCIMENTO: <input type="date" id="nascimento-${qtdProcessos}"> <span style="padding:10px"></span> <input
            type="text">
    </label><br>
    <label> END.RESID: <input type="text" size="30" id="residencia-${qtdProcessos}" oninput="this.size = this.value.length + 6;"> <span
            style="padding:10px"></span> <input type="text" size="10" id="cidade-${qtdProcessos}"
            oninput="this.size = this.value.length + 6;" placeholder="cidade">
    </label><br>
    <label> END. TRABALHO: <input type="text" size="30" oninput="this.size = this.value.length + 6;">
    </label> <br>
    <label> PROFISSÃO: </label><input type="text" size="30" oninput="this.size = this.value.length + 6;" id="prof-${qtdProcessos}"> <br>
    <label for="rg-${qtdProcessos}"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number" id="rg-${qtdProcessos}">
    <label for="emissao-${qtdProcessos}">DATA DA EMISSÃO: </label> <input type="date" id="emissao-${qtdProcessos}"> <br>
    <label for="expedidor-${qtdProcessos}">ORGÃO EXPEDIDOR/UF: </label><input type="text" id="expedidor-${qtdProcessos}"> <br>
    <label for="cpf-${qtdProcessos}">CPF: </label><input type="text" id="cpf-${qtdProcessos}"><br>
    <strong><i>DADOS DA ARMA</i></strong> <br>
    <label for="fabricante-${qtdProcessos}">IDENTIFICAÇÃO DO FABRICANTE: </label>
    <select id="fabricante-${qtdProcessos}">
        <option value="24">GLOCK</option>
        <option value="1">TAURUS/SA</option>
        <option value="4">CBC</option>
    </select> <br>
    <label for="fornecedor-${qtdProcessos}">IDENTIFICAÇÃO DO FORNECEDOR: </label><input type="text" size="50" id="fornecedor-${qtdProcessos}"> <br>
    <label for="end-fornecedor-${qtdProcessos}">ENDEREÇO: </label><input type="text" id="end-fornecedor-${qtdProcessos}"
        oninput="this.size = this.value.length + 6;"> <br>
    <label for="cnpj-${qtdProcessos}">CNPJ: </label> <input type="text" size="10" id="cnpj-${qtdProcessos}"> <br>
    <label>NÚMERO DA NOTA FISCAL: <input type="number"> <span style="padding: 10px;"></span> EMISSÃO:<input
            type="date"></label> <br>
    <label for="especie-${qtdProcessos}">ESPÉCIE: </label>
    <select id="especie-${qtdProcessos}">
        <option value="2">PISTOLA</option>
        <option value="1">ESPINGARDA</option>
        <option value="3">REVÓLVER</option>
        <option value="4">CARABINA</option>
    </select> <br>
    <label for="marca-${qtdProcessos}">MARCA: </label>
    <select id="marca-${qtdProcessos}">
        <option value="24">GLOCK</option>
        <option value="1">TAURUS/SA</option>
        <option value="4">CBC</option>
    </select> <br>
    <label for="modelo-${qtdProcessos}">MODELO: </label> <input type="text" id="modelo-${qtdProcessos}"> <br>
    <label for="serie-${qtdProcessos}">NÚMERO DE SÉRIE: </label><input type="text" id="serie-${qtdProcessos}"> <br>
    <label for="calibre-${qtdProcessos}">CALIBRE: </label> <input type="text" id="calibre-${qtdProcessos}"> <br>
    <label for="muni-${qtdProcessos}">CAPACIDADE DE MUNIÇÃO: </label><input type="number" id="muni-${qtdProcessos}"> <br>
    <label for="funcionamento-${qtdProcessos}">TIPO DE FUNCIONAMENTO: </label>
    <select id="funcionamento-${qtdProcessos}">
        <option value="2">Semi-automático</option>
        <option value="1">Automático</option>
        <option value="3">Repetição</option>
        <option value="4">Tiro simples</option>
    </select> <br>
    <label for="canos-${qtdProcessos}">QUANTIDADE DE CANOS: </label><input type="number" id="canos-${qtdProcessos}"> <br>
    <label> COMPRIMENTO DO CANO: <input type="number" id="tam-cano-${qtdProcessos}" size="3"> <select id="uni-medida-${qtdProcessos}">
            <option value="MM">mm</option>
            <option value="CM">cm</option>
            <option value="POL">pol</option>
        </select>
    </label><br>
    <label for="alma-${qtdProcessos}">TIPO DE ALMA: </label>
    <select id="alma-${qtdProcessos}">
        <option value="R">Raiada</option>
        <option value="L">Lisa</option>
    </select>
    <label for="n-raias-${qtdProcessos}">NUMERO DE RAIAS: </label><input type="number" id="n-raias-${qtdProcessos}">
    <label for="sentido-raias-${qtdProcessos}">SENTIDO DAS RAIAS: </label>
    <select id="sentido-raias-${qtdProcessos}">
        <option>À Direita</option>
        <option>À Esquerda</option>
    </select> <br>
    <label for="acabamento-${qtdProcessos}">ACABAMENTO: </label><input type="text" id="acabamento-${qtdProcessos}"> <br>
    <label for="pais-${qtdProcessos}">PAÍS DE FABRICAÇÃO: </label>
    <select id="pais-${qtdProcessos}">
        <option value="1">Brasil</option>
        <option value="20">EUA</option>
    </select>
    <p style="font-weight: bold;text-decoration: underline">LEGISLAÇÃO UTILIZADA: LEI 10.826 de 22/12/2003, DECRETO
        5.123 de 01/07/2004 e PORTARIA 069 GabCmdo Geral PMPa de 24/04/2019.</p>
    <br>
    <br>
    `
    }

    for (let i = 1; i <= qtdProcessosCom; i++) {
        qtdProcessos++;
        let nProcesso = ("00" + i).slice(-3);
        let form = document.getElementById('lista-comercio');
        form.innerHTML += `
    <span class="no-print"><label for="tombamento-${qtdProcessos}">TOMBAMENTO</label> <input type="text" id="tombamento-${qtdProcessos}"></span><br>
    <label for="nome-${qtdProcessos}">${nProcesso}-NOME: </label>
    <input type="text" size="90" id="nome-${qtdProcessos}"><br>
    <label> FILIAÇÃO: <input type="text" size="30" id="pai-${qtdProcessos}" onblur="pai(${qtdProcessos})" placeholder="PAI" oninput="this.size = this.value.length + 6;">
        <span style="font-weight: normal;" id="e-${qtdProcessos}">e</span> <input type="text" onblur="mae(${qtdProcessos})" placeholder="MAE" size="30" id="mae-${qtdProcessos}"
            oninput="this.size = this.value.length + 6;">
    </label><br>
    <label> DATA E LOCAL DE NASCIMENTO: <input type="date" id="nascimento-${qtdProcessos}"> <span style="padding:10px"></span> <input
            type="text">
    </label><br>
    <label> END.RESID: <input type="text" size="30" id="residencia-${qtdProcessos}" oninput="this.size = this.value.length + 6;"> <span
            style="padding:10px"></span> <input type="text" id="cidade-${qtdProcessos}">
    </label><br>
    <label> END. TRABALHO: <input type="text" size="30" oninput="this.size = this.value.length + 6;">
    </label> <br>
    <label> PROFISSÃO: </label><input type="text" size="30" oninput="this.size = this.value.length + 6;" id="prof-${qtdProcessos}"> <br>
    <label for="rg-${qtdProcessos}"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number" id="rg-${qtdProcessos}">
    <label for="emissao-${qtdProcessos}">DATA DA EMISSÃO: </label> <input type="date" id="emissao-${qtdProcessos}"> <br>
    <label for="expedidor-${qtdProcessos}">ORGÃO EXPEDIDOR/UF: </label><input type="text" id="expedidor-${qtdProcessos}"> <br>
    <label for="cpf-${qtdProcessos}">CPF: </label><input type="text" id="cpf-${qtdProcessos}"><br>
    <strong><i>DADOS DA ARMA</i></strong> <br>
    <label for="fabricante-${qtdProcessos}">IDENTIFICAÇÃO DO FABRICANTE: </label>
    <select id="fabricante-${qtdProcessos}">
        <option value="24">GLOCK</option>
        <option value="1">TAURUS/SA</option>
        <option value="4">CBC</option>
    </select> <br>
    <label for="fornecedor-${qtdProcessos}">IDENTIFICAÇÃO DO FORNECEDOR: </label><input type="text" size="50" id="fornecedor-${qtdProcessos}"> <br>
    <label for="end-fornecedor-${qtdProcessos}">ENDEREÇO: </label><input type="text" id="end-fornecedor-${qtdProcessos}"
        oninput="this.size = this.value.length + 6;"> <br>
    <label for="cnpj-${qtdProcessos}">CNPJ: </label> <input type="text" size="10" id="cnpj-${qtdProcessos}"> <br>
    <label>NÚMERO DA NOTA FISCAL: <input type="number"> <span style="padding: 10px;"></span> EMISSÃO:<input
            type="date"></label> <br>
    <label for="especie-${qtdProcessos}">ESPÉCIE: </label>
    <select id="especie-${qtdProcessos}">
        <option value="2">PISTOLA</option>
        <option value="1">ESPINGARDA</option>
        <option value="3">REVÓLVER</option>
        <option value="4">CARABINA</option>
    </select> <br>
    <label for="marca-${qtdProcessos}">MARCA: </label>
    <select id="marca-${qtdProcessos}">
        <option value="24">GLOCK</option>
        <option value="1">TAURUS/SA</option>
        <option value="4">CBC</option>
    </select> <br>
    <label for="modelo-${qtdProcessos}">MODELO: </label> <input type="text" id="modelo-${qtdProcessos}"> <br>
    <label for="serie-${qtdProcessos}">NÚMERO DE SÉRIE: </label><input type="text" id="serie-${qtdProcessos}"> <br>
    <label for="calibre-${qtdProcessos}">CALIBRE: </label> <input type="text" id="calibre-${qtdProcessos}"> <br>
    <label for="muni-${qtdProcessos}">CAPACIDADE DE MUNIÇÃO: </label><input type="number" id="muni-${qtdProcessos}"> <br>
    <label for="funcionamento-${qtdProcessos}">TIPO DE FUNCIONAMENTO: </label>
    <select id="funcionamento-${qtdProcessos}">
        <option value="2">Semi-automático</option>
        <option value="1">Automático</option>
        <option value="3">Repetição</option>
        <option value="4">Tiro simples</option>
    </select> <br>
    <label for="canos-${qtdProcessos}">QUANTIDADE DE CANOS: </label><input type="number" id="canos-${qtdProcessos}"> <br>
    <label> COMPRIMENTO DO CANO: <input type="number" id="tam-cano-${qtdProcessos}" size="3"> <select id="uni-medida-${qtdProcessos}">
            <option value="MM">mm</option>
            <option value="CM">cm</option>
            <option value="POL">pol</option>
        </select>
    </label><br>
    <label for="alma-${qtdProcessos}">TIPO DE ALMA: </label>
    <select id="alma-${qtdProcessos}">
        <option value="R">Raiada</option>
        <option value="L">Lisa</option>
    </select>
    <label for="n-raias-${qtdProcessos}">NUMERO DE RAIAS: </label><input type="number" id="n-raias-${qtdProcessos}">
    <label for="sentido-raias-${qtdProcessos}">SENTIDO DAS RAIAS: </label>
    <select id="sentido-raias-${qtdProcessos}">
        <option value="D">À Direita</option>
        <option value="E">À Esquerda</option>
    </select> <br>
    <label for="acabamento-${qtdProcessos}">ACABAMENTO: </label><input type="text" id="acabamento-${qtdProcessos}"> <br>
    <label for="pais-${qtdProcessos}">PAÍS DE FABRICAÇÃO: </label>
    <select id="pais-${qtdProcessos}">
        <option value="1">Brasil</option>
        <option value="20">EUA</option>
    </select>
    <p style="font-weight: bold;text-decoration: underline">LEGISLAÇÃO UTILIZADA: LEI 10.826 de 22/12/2003, DECRETO
        5.123 de 01/07/2004 e PORTARIA 069 GabCmdo Geral PMPa de 24/04/2019.</p>
    <br>
    <br>
    `
    }
}

const pai = (processo) => {
    let input_pai = document.getElementById(`pai-${processo}`);
    if (!input_pai.value) {
        input_pai.remove()
        document.getElementById(`e-${processo}`).remove()
    }
}

const mae = (processo) => {
    let input_mae = document.getElementById(`mae-${processo}`);
    if (!input_mae.value) {
        input_mae.remove()
        document.getElementById(`e-${processo}`).remove()
    }
}

const pegar = (id, processo) => document.getElementById(id + '-' + processo).value;

const pegarCPF = (processo) => {
    let cpf = pegar('cpf', processo)
    cpf = cpf.split('.')
    cpf_modificado = cpf[0] + cpf[1]
    cpf = cpf[2].split('-');
    cpf_modificado += cpf[0] + cpf[1]
    return cpf_modificado;
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

const montarLinhaAEL = processo => {
    let Arma = {
        tombamento: pegar('tombamento', processo).replace('/', ''),
        numSerie: pegar('serie', processo).replace(' ', ''),
        marca: pegar('marca', processo),
        especie: pegar('especie', processo),
        modelo: pegar('modelo', processo).replace(' ', ''),
        calibre: pegar('calibre', processo),
        grupo_calibre: '27',
        municao: pegar('muni', processo),
        funcionamento: pegar('funcionamento', processo),
        canos: pegar('canos', processo),
        comprimentoCano: pegar('tam-cano', processo),
        uniMedidade: pegar('uni-medida', processo),
        alma: pegar('alma', processo),
        raias: pegar('n-raias', processo).length > 0 ? pegar('n-raias', processo) : '',
        sentidoRaias: pegar('sentido-raias', processo),
        acabamento: pegar('acabamento', processo),
        pais: pegar('pais', processo)
    }

    let BAR = {
        tipoPubli: 1,
        numBar: document.getElementById('num-bar').value + new Date().getFullYear(),
        dataPublic: pegarDataPub(),
        orgao: '900000528'
    }

    let Policial = {
        cpf: pegarCPF(processo),
        nome: pegar('nome', processo),
        nascimento: pegarData('nascimento', processo),
        rg: pegar('rg', processo),
        dataExpedicaoRG: pegarData('emissao', processo),
        orgaoEmissor: pegar('expedidor', processo),
        pai: pegar('pai', processo) ? pegar('pai', processo) : 'NAO CONSTA',
        mae: pegar('mae', processo) ? pegar('mae', processo) : 'NAO CONSTA',
        cidade: pegar('cidade', processo).split('-')[0]
    }


    let linha = `[${BAR.orgao}]`;
    for (const dado in Arma) {
        linha += `[${Arma[dado]}]`;
    }

    for (const dado in BAR) {
        linha += `[${BAR[dado]}]`
    }

    for(const dado in Policial) {
        if(dado !== 'mae') {
            linha += `[${Policial[dado]}]`
        } else {
            linha += `[${Policial[dado]}][][][][][][]`
        }
    }

    return linha;

}

const salvar = () => {
    let mes = new Date().getMonth() + 1
    if (mes < 10) mes = '0' + mes;
    const data = new Date().getDate() + '/' + mes + '/' + new Date().getFullYear()
    const data_titulo = new Date().getDate() + '' + mes + '' + new Date().getFullYear()
    const hora = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    const hora_titulo = new Date().getHours() + '' + new Date().getMinutes() + '' + new Date().getSeconds();
    console.log(hora_titulo)
    const titulo = `CARGA-900000528-${data_titulo}-${hora_titulo}.txt`
    let linhas = `[REMETO][${data} ${hora}][${qtdProcessos}]`;
    for (let i = 1; i <= qtdProcessos; i++) {
       linhas += `\n${montarLinhaAEL(i)}`
    }
    let teste = new Blob([linhas], { type: "text/plain;charset=ISO8859-1" });
    saveAs(teste, titulo);
}