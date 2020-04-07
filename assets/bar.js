let qtdProcessos = 0;
let qtdProcessosCom = 0;
let qtdProcessosInd = 0;
let qtdProcessosTransf = 0;
let qtdProcessosPAF = 0;
const cidades = [
    { id: '119278', nome: 'Ipixuna do Pará' },
    { id: '119291', nome: 'Jacareacanga' },
    { id: '119299', nome: 'Jacundá' },
    { id: '119339', nome: 'Melgaço' },
    { id: '119277', nome: 'Piçarra' },
    { id: '5185', nome: 'Ponta de Pedras' },
    { id: '5191', nome: 'Prainha' },
    { id: '5208', nome: 'Santa Luzia do Pará' },
    { id: '119323', nome: 'Santa Maria das Barreiras' },
    { id: '5214', nome: 'Santana do Araguaia' },
    { id: '119325', nome: 'São João da Ponta' },
    { id: '5237', nome: 'São Miguel do Guama' },
    { id: '5250', nome: 'Soure' },
    { id: '235', nome: 'Fordlândia' },
    { id: '119351', nome: 'Eldorado do Carajas' },
    { id: '119287', nome: 'Aurora do Pará' },
    { id: '119353', nome: 'Bannach' },
    { id: '119327', nome: 'Bom Jesus do Tocantins' },
    { id: '5026', nome: 'Brasil Novo' },
    { id: '119352', nome: 'Cachoeira do Piriá' },
    { id: '4975', nome: 'Acara' },
    { id: '119355', nome: 'Bagre' },
    { id: '5015', nome: 'Benevides' },
    { id: '5016', nome: 'Benfica' },
    { id: '81', nome: 'Breves' },
    { id: '29', nome: 'Brejo de Areia' },
    { id: '121753', nome: 'Florianópolis' },
    { id: '601', nome: 'Abaetetuba' },
    { id: '119332', nome: 'Água Azul do Norte' },
    { id: '4987', nome: 'Americano' },
    { id: '5014', nome: 'Belterra' },
    { id: '119288', nome: 'Breu Branco' },
    { id: '121501', nome: 'Vila Rondon' },
    { id: '121576', nome: 'Santa Helena' },
    { id: '1507755', nome: 'Sapucaia' },
    { id: '1508308', nome: 'Viseu' },
    { id: '65', nome: 'Baía da Traíção' },
    { id: '22222222', nome: 'BAÍA DE MARAJÓ' },
    { id: '123027', nome: 'Castanhal' },
    { id: '121532', nome: 'Vila Rondón do Pará' },
    { id: '121534', nome: 'Distrito de Icoaraci' },
    { id: '1502855', nome: 'Curuá' },
    { id: '1502954', nome: 'Eldorado dos Carajás' },
    { id: '5084', nome: 'Mojuí dos Campos' },
    { id: '39330033', nome: 'Bonito' },
    { id: '4980', nome: 'Alenquer' },
    { id: '4988', nome: 'Anajas' },
    { id: '119284', nome: 'Anapu' },
    { id: '76', nome: 'Bragança' },
    { id: '119276', nome: 'Brejo Grande do Araguaia' },
    { id: '5033', nome: 'Cachoeira do Arari' },
    { id: '119289', nome: 'Canaã dos Carajás' },
    { id: '5127', nome: 'Medicilandia' },
    { id: '5152', nome: 'Nova Ipixuna' },
    { id: '5174', nome: 'Peixe-Boi' },
    { id: '119350', nome: 'Quatipuru' },
    { id: '5218', nome: 'São Caetano de Odivelas' },
    { id: '5239', nome: 'São Pedro' },
    { id: '119308', nome: 'Terra Santa' },
    { id: '5041', nome: 'Capanema' },
    { id: '14', nome: 'Altamira' },
    { id: '5001', nome: 'Augusto Correa' },
    { id: '5005', nome: 'Baiao' },
    { id: '5207', nome: 'Santa Isabel do Pará' },
    { id: '5052', nome: 'Colares' },
    { id: '5073', nome: 'Faro' },
    { id: '5090', nome: 'Igarapé-Miri' },
    { id: '119297', nome: 'Mãe do Rio' },
    { id: '5166', nome: 'Pacaja' },
    { id: '119345', nome: "Pau D'Arco" },
    { id: '119300', nome: 'Rio Maria' },
    { id: '5225', nome: 'São Geraldo do Araguaia' },
    { id: '119324', nome: 'São João de Pirabas' },
    { id: '119314', nome: 'Tucumã' },
    { id: '5285', nome: 'Vitoria do Xingu' },
    { id: '5219', nome: 'Itaituba' },
    { id: '5110', nome: 'Juruti' },
    { id: '5131', nome: 'Mirasselvas' },
    { id: '678', nome: 'Óbidos' },
    { id: '5163', nome: 'Ourém' },
    { id: '119282', nome: 'Ourilândia do Norte' },
    { id: '119344', nome: 'Placas' },
    { id: '5203', nome: 'Salinopolis' },
    { id: '5224', nome: 'São Francisco do Pará' },
    { id: '5229', nome: 'São João do Araguaia' },
    { id: '119309', nome: 'Terra Alta' },
    { id: '5271', nome: 'Vigia' },
    { id: '5282', nome: 'Vizeu' },
    { id: '4976', nome: 'Afua' },
    { id: '18', nome: 'Ananindeua' },
    { id: '5010', nome: 'Barreiras' },
    { id: '100178', nome: 'Belém' },
    { id: '4982', nome: 'Almeirim' },
    { id: '474', nome: 'Altér do Chão' },
    { id: '4998', nome: 'Arumanduba' },
    { id: '5003', nome: 'Aveiro' },
    { id: '5007', nome: 'Barcarena' },
    { id: '5011', nome: 'Baturite' },
    { id: '5260', nome: 'Tomé-Açú' },
    { id: '122082', nome: 'Remansão(Tucuruí)' },
    { id: '122083', nome: 'São Domingos do Araguaia' },
    { id: '122084', nome: 'Gurupizinho(Paragominas)' },
    { id: '122085', nome: 'Guajará-Miri(Acará)' },
    { id: '122086', nome: 'Santarém Novo' },
    { id: '122087', nome: 'Nova Timboteua' },
    { id: '122088', nome: 'Piriá(Curralinho)' },
    { id: '5054', nome: 'Conceição do Araguaia' },
    { id: '119329', nome: 'Cumaru do Norte' },
    { id: '119280', nome: 'Dom Eliseu' },
    { id: '5094', nome: 'Irituia' },
    { id: '5097', nome: 'Itupiranga' },
    { id: '5120', nome: 'Maracanã' },
    { id: '5133', nome: 'Mocajuba' },
    { id: '5154', nome: 'Nova Mocajuba' },
    { id: '5160', nome: 'Oriximiná' },
    { id: '5192', nome: 'Primavera' },
    { id: '5204', nome: 'Salvaterra' },
    { id: '119303', nome: 'Santa Barbara do Para' },
    { id: '5211', nome: 'Santa Maria do Pará' },
    { id: '5215', nome: 'Santarém' },
    { id: '5245', nome: 'São Sebastião da Boa Vista' },
    { id: '5248', nome: 'Senador José Porfirio' },
    { id: '5251', nome: 'Tailandia' },
    { id: '5259', nome: 'Timboteua' },
    { id: '5261', nome: 'Tracuateua' },
    { id: '119311', nome: 'Ulianópolis' },
    { id: '5266', nome: 'Uruara' },
    { id: '4974', nome: 'Abel Figueiredo' },
    { id: '5031', nome: 'Bujaru' },
    { id: '5089', nome: 'Igarapé-Açú' },
    { id: '119336', nome: 'Curionópolis' },
    { id: '119279', nome: 'Goianesia do Pará' },
    { id: '5083', nome: 'Gurupá' },
    { id: '119292', nome: 'Inhangapi' },
    { id: '5122', nome: 'Marapanim' },
    { id: '5123', nome: 'Marituba' },
    { id: '5137', nome: 'Monte Alegre' },
    { id: '5139', nome: 'Monte Dourado' },
    { id: '119341', nome: 'Oeiras do Pará' },
    { id: '119348', nome: 'Palestina do Para' },
    { id: '5171', nome: 'Parauapebas' },
    { id: '119315', nome: 'São Felix do Xingu' },
    { id: '5264', nome: 'Tucurui' },
    { id: '5286', nome: 'Xinguara' },
    { id: '5195', nome: 'Redenção' },
    { id: '5169', nome: 'Paragominas' },
    { id: '5042', nome: 'Capitão Poço' },
    { id: '119295', nome: 'Floresta do Araguaia' },
    { id: '119294', nome: 'Garrafão do Norte' },
    { id: '119338', nome: 'Nova Esperança do Piria' },
    { id: '5182', nome: 'Piraquara' },
    { id: '5187', nome: 'Portel' },
    { id: '5188', nome: 'Porto de Moz' },
    { id: '5202', nome: 'Ruropolis' },
    { id: '5220', nome: 'São Domingos do Capim' },
    { id: '99', nome: 'Cametá' },
    { id: '5051', nome: 'Chaves' },
    { id: '119275', nome: 'Concórdia do Pará' },
    { id: '5063', nome: 'Curralinho' },
    { id: '119334', nome: 'Curuai' },
    { id: '5066', nome: 'Curuçá' },
    { id: '5115', nome: 'Limoeiro do Ajuru' },
    { id: '5117', nome: 'Magalhaes Barata' },
    { id: '312', nome: 'Marabá' },
    { id: '5135', nome: 'Moju' },
    { id: '5142', nome: 'Muana' },
    { id: '119343', nome: 'Novo Progresso' },
    { id: '119342', nome: 'Novo Repartimento' },
    { id: '5201', nome: 'Rondon do Pará' },
    { id: '5206', nome: 'Santa Cruz do Arari' },
    { id: '5217', nome: 'Santo Antônio do Tauá' }
]

const carregarDadosGerais = () => {
    const ind = localStorage.qtdInd;
    const com = localStorage.qtdCom;
    const transf = localStorage.qtdTransf;
    const paf = localStorage.qtdPaf;
    if (com) {
        let armasComercio = document.getElementById('armas-do-comercio')
        armasComercio.innerHTML += localStorage.texCom;
        qtdProcessosCom = com;
    }
    if (ind) {
        let armasIndustria = document.getElementById('armas-da-industria')
        armasIndustria.innerHTML += localStorage.texInd;
        qtdProcessosInd = ind;
    }

    if (transf) {
        let armasTransf = document.getElementById('armas-por-transferencia')
        armasTransf.innerHTML += localStorage.texTransf
        qtdProcessosTransf = transf;
    }
    if (paf) {
        let armasPAF = document.getElementById('armas-paf')
        armasPAF.innerHTML += localStorage.texPaf
        qtdProcessosPAF = paf;
    }
    if (ind || com || transf || paf) {
        montarForm()
        document.getElementById('informações-bar').remove()
        if (ind <= 0) document.getElementById('industria').remove();
        if (com <= 0) document.getElementById('comercio').remove();
        if (transf <= 0) document.getElementById('transferencia').remove();
    }
}

const getDadosGerais = () => {
    const ind = document.getElementById('text-aux-ind').value
    const com = document.getElementById('text-aux-com').value
    const transf = document.getElementById('text-aux-transf').value
    const paf = document.getElementById('text-aux-paf').value
    qtdProcessosInd = document.getElementById('qtd-armas-ind').value;
    qtdProcessosCom = document.getElementById('qtd-armas-com').value;
    qtdProcessosTransf = document.getElementById('qtd-armas-transf').value;
    qtdProcessosPAF = document.getElementById('qtd-armas-paf').value;
    let textCom;
    let textInd;
    let textTransf;
    let textPAF;
    let n = 0;
    if (ind.length > 0) {
        n++;
        let armasIndustria = document.getElementById('armas-da-industria')
        textInd = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, ${ind}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;
        armasIndustria.innerHTML += textInd;
    } else {
        document.getElementById('industria').remove();
    }
    if (com.length > 0) {
        n++;
        let armasComercio = document.getElementById('armas-do-comercio')
        textCom = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, ${com}, ADQUIRIDAS ATRAVÉS DO COMÉRCIO.`;
        armasComercio.innerHTML += textCom;
    } else {
        document.getElementById('comercio').remove();
    }

    if (transf.length > 0) {
        n++;
        let armasTransferencia = document.getElementById('armas-por-transferencia')
        textTransf = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA TRANSFERÊNCIA DE ARMA DE FOGO DE USO PERMITIDO, ${com}.`;
        armasTransferencia.innerHTML += textTransf;
    } else {
        document.getElementById('transferencia').remove();
    }

    if (paf.length > 0) {
        n++;
        let armasPAF = document.getElementById('armas-paf')
        textPAF = `${("0" + n).slice(-2)}. SOLICITAÇÃO PARA EXPEDIÇÃO DE PAF (PORTE DE ARMA DE FOGO) PARA POLICIAL MILITAR DA RESERVA REMUNERADA, DE CALIBRE PERMITIDO, ${paf}.`;
        armasPAF.innerHTML += textTransf;
    } else {
        document.getElementById('paf').remove();
    }

    localStorage.setItem('qtdInd', qtdProcessosInd.toString())
    localStorage.setItem('qtdCom', qtdProcessosCom.toString())
    localStorage.setItem('qtdTransf', qtdProcessosTransf.toString())
    localStorage.setItem('qtdPaf', qtdProcessosPAF.toString())
    localStorage.setItem('texCom', textCom);
    localStorage.setItem('texInd', textInd);
    localStorage.setItem('texTransf', textTransf);
    localStorage.setItem('texPaf', textPAF);
    document.getElementById('informações-bar').remove()
}

const popularCidades = processo => {
    let select = document.getElementById('cidade-' + processo)
    cidades.forEach(cidade => {
        let option = document.createElement('option')
        option.setAttribute('value', cidade.id);
        option.textContent = cidade.nome
        select.appendChild(option);
    })
}

const completarEndRes = processo => {
    let endereco = document.getElementById('residencia-' + processo)
    let cidade = document.getElementById('cidade-' + processo).value
    if (endereco.value.length > 0) {
        if (endereco.value.split('-')[1] === 'PA') {
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

const montarForm = () => {
    for (let i = 1; i <= qtdProcessosInd; i++) {
        qtdProcessos++;
        let nProcesso = ("00" + i).slice(-3);
        let form = document.getElementById('lista-industria');
        form.innerHTML += `
        <span class="no-print"><label for="tombamento-${qtdProcessos}">TOMBAMENTO</label> <input type="text" name="tombamento-${qtdProcessos}" id="tombamento-${qtdProcessos}"></span><br>
        <label for="nome-${qtdProcessos}">${nProcesso}-NOME: </label>
        <input type="text" size="90" name="nome=${qtdProcessos}" id="nome-${qtdProcessos}"><br>
        <label> FILIAÇÃO: <input type="text" size="30" name="pai-${qtdProcessos}" id="pai-${qtdProcessos}" onblur="this.size = this.value.length + 6;pai(${qtdProcessos})" placeholder="PAI">
            <span style="font-weight: normal;" id="e-${qtdProcessos}">e</span> <input type="text" onblur="this.size = this.value.length + 6;mae(${qtdProcessos});" placeholder="MAE" size="30" name="mae-${qtdProcessos}" id="mae-${qtdProcessos}">
        </label><br>
        <label> DATA E LOCAL DE NASCIMENTO: <input type="date" name="nascimento-${qtdProcessos}" id="nascimento-${qtdProcessos}"> <span style="padding-left:10px"></span> <input
                type="text" name="local-nascimento-${qtdProcessos}">
        </label><br>
        <label> END.RESID: <input type="text" size="70" name="residencia-${qtdProcessos}" id="residencia-${qtdProcessos}" onblur="this.size = this.value.length + 6;"> <select name="cidade-${qtdProcessos}" id="cidade-${qtdProcessos}" style="height: 30px"></select>
        </label><br>
        <label> END. TRABALHO: <i>Rdv. Augusto Montenegro, KM 09, 8401, Parque Guajará, CEP: 66821-000, Belém-PA</i>
        </label> <br>
        <label> PROFISSÃO: </label> <i>Policial Militar</i> <br>
        <label for="rg-${qtdProcessos}"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number" name="rg-${qtdProcessos}" onfocus="completarEndRes(${qtdProcessos})" id="rg-${qtdProcessos}">
        <br>
        <label for="emissao-${qtdProcessos}">
        DATA DA EMISSÃO: </label> <input type="date" name="emissao-${qtdProcessos}" id="emissao-${qtdProcessos}"> <br>
        <label for="expedidor-${qtdProcessos}">ORGÃO EXPEDIDOR/UF: </label> <span id="expedidor-${qtdProcessos}"><i>PMPA</i></span> <br>
        <label for="cpf-${qtdProcessos}">CPF: </label><input type="text" name="cpf-${qtdProcessos}" id="cpf-${qtdProcessos}"><br>
        <strong><i>DADOS DA ARMA</i></strong> <br>
        <label for="fabricante-${qtdProcessos}">IDENTIFICAÇÃO DO FABRICANTE: </label>
        <select name="fabricante-${qtdProcessos}" id="fabricante-${qtdProcessos}">
            <option value="24">GLOCK</option>
            <option value="1">TAURUS S/A</option>
            <option value="4">CBC</option>
        </select> <br>
        <label for="fornecedor-${qtdProcessos}">IDENTIFICAÇÃO DO VENDEDOR: </label><input type="text" size="80" name="fornecedor-${qtdProcessos}" id="fornecedor-${qtdProcessos}"> <br>
        <label for="end-fornecedor-${qtdProcessos}">ENDEREÇO: </label><input type="text" name="end-fornecedor-${qtdProcessos}" id="end-fornecedor-${qtdProcessos}"
            size="80"> <br>
        <label for="cnpj-${qtdProcessos}">CNPJ: </label> <input type="text" size="17" name="cnpj-${qtdProcessos}" id="cnpj-${qtdProcessos}"> <br>
        <label>NÚMERO DA NOTA FISCAL: <input name="n-nf-${qtdProcessos}" type="number"> <span style="padding: 10px;"></span> EMISSÃO:<input
                type="date" name="emissao-dt-${qtdProcessos}" id="emissao-dt-${qtdProcessos}"></label> <br>
        <label for="especie-${qtdProcessos}">ESPÉCIE: </label>
        <select name="especie-${qtdProcessos}" id="especie-${qtdProcessos}">
            <option value="2">PISTOLA</option>
            <option value="1">ESPINGARDA</option>
            <option value="3">REVÓLVER</option>
            <option value="4">CARABINA</option>
        </select> <br>
        <label for="marca-${qtdProcessos}">MARCA: </label>
        <select name="marca-${qtdProcessos}" id="marca-${qtdProcessos}">
            <option value="24">GLOCK</option>
            <option value="1">TAURUS S/A</option>
            <option value="4">CBC</option>
        </select> <br>
        <label for="modelo-${qtdProcessos}">MODELO: </label> <input type="text" name="modelo-${qtdProcessos}" id="modelo-${qtdProcessos}"> <br>
        <label for="serie-${qtdProcessos}">NÚMERO DE SÉRIE: </label><input type="text" name="serie-${qtdProcessos}" id="serie-${qtdProcessos}"> <br>
        <label for="calibre-${qtdProcessos}">CALIBRE: </label> <input type="text" name="calibre-${qtdProcessos}" id="calibre-${qtdProcessos}"> <br>
        <label for="muni-${qtdProcessos}">CAPACIDADE DE MUNIÇÃO: </label><input type="number" name="muni-${qtdProcessos}" id="muni-${qtdProcessos}"> <br>
        <label for="funcionamento-${qtdProcessos}">TIPO DE FUNCIONAMENTO: </label>
        <select name="funcionamento-${qtdProcessos}" id="funcionamento-${qtdProcessos}">
            <option value="2">Semi-automático</option>
            <option value="1">Automático</option>
            <option value="3">Repetição</option>
            <option value="4">Tiro simples</option>
        </select> <br>
        <label for="canos-${qtdProcessos}">QUANTIDADE DE CANOS: </label><input type="number" name="canos-${qtdProcessos}" id="canos-${qtdProcessos}"> <br>
        <label> COMPRIMENTO DO CANO: <input type="text" name="tam-cano-${qtdProcessos}" id="tam-cano-${qtdProcessos}" size="5"> <select name="uni-medida-${qtdProcessos}" id="uni-medida-${qtdProcessos}">
                <option value="MM">mm</option>
                <option value="CM">cm</option>
                <option value="POL">pol</option>
            </select>
        </label><br>
        <label for="alma-${qtdProcessos}">TIPO DE ALMA: </label>
        <select name="alma-${qtdProcessos}" onblur="tipoAlma(${qtdProcessos})" id="alma-${qtdProcessos}">
            <option value="R">Raiada</option>
            <option value="L">Lisa</option>
        </select>
        <span id="dados-raias-${qtdProcessos}">
        <label for="n-raias-${qtdProcessos}">NUMERO DE RAIAS: </label><input type="number"
            name="n-raias-${qtdProcessos}" id="n-raias-${qtdProcessos}"
            onfocus="unidadeDeMedida(${qtdProcessos})">
        <label for="sentido-raias-${qtdProcessos}">SENTIDO DAS RAIAS: </label>
        <select name="sentido-raias-${qtdProcessos}" id="sentido-raias-${qtdProcessos}">
            <option value="N"></option>
            <option value="D">À Direita</option>
            <option value="E">À Esquerda</option>
        </select>
        </span> <br>
        <label for="acabamento-${qtdProcessos}">ACABAMENTO: </label><input type="text" name="acabamento-${qtdProcessos}" id="acabamento-${qtdProcessos}"> <br>
        <label for="pais-${qtdProcessos}">PAÍS DE FABRICAÇÃO: </label>
        <select name="pais-${qtdProcessos}" id="pais-${qtdProcessos}">
            <option value="1">Brasil</option>
            <option value="20">EUA</option>
        </select>
        <p style="font-weight: bold;text-decoration: underline">LEGISLAÇÃO UTILIZADA: LEI 10.826 de 22/12/2003, DECRETO
            5.123 de 01/07/2004 e PORTARIA 069 GabCmdo Geral PMPa de 24/04/2019.</p>
        <br>
        <br>
    `
        popularCidades(qtdProcessos)
    }

    for (let i = 1; i <= qtdProcessosCom; i++) {
        qtdProcessos++;
        let nProcesso = ("00" + i).slice(-3);
        let form = document.getElementById('lista-comercio');
        form.innerHTML += `
    <span class="no-print"><label for="tombamento-${qtdProcessos}">TOMBAMENTO</label> <input type="text" name="tombamento-${qtdProcessos}" id="tombamento-${qtdProcessos}"></span><br>
    <label for="nome-${qtdProcessos}">${nProcesso}-NOME: </label>
    <input type="text" size="90" name="nome=${qtdProcessos}" id="nome-${qtdProcessos}"><br>
    <label> FILIAÇÃO: <input type="text" size="30" name="pai-${qtdProcessos}" id="pai-${qtdProcessos}" onblur="this.size = this.value.length + 6;pai(${qtdProcessos})" placeholder="PAI">
        <span style="font-weight: normal;" id="e-${qtdProcessos}">e</span> <input type="text" onblur="this.size = this.value.length + 6;mae(${qtdProcessos});" placeholder="MAE" size="30" name="mae-${qtdProcessos}" id="mae-${qtdProcessos}">
    </label><br>
    <label> DATA E LOCAL DE NASCIMENTO: <input type="date" name="nascimento-${qtdProcessos}" id="nascimento-${qtdProcessos}"> <span style="padding-left:10px"></span> <input
            type="text" name="local-nascimento-${qtdProcessos}">
    </label><br>
    <label> END.RESID: <input type="text" size="70" name="residencia-${qtdProcessos}" id="residencia-${qtdProcessos}" onblur="this.size = this.value.length + 6;"> <select name="cidade-${qtdProcessos}" id="cidade-${qtdProcessos}" style="height: 30px"></select>
    </label><br>
    <label> END. TRABALHO:
    </label> <i>Rdv. Augusto Montenegro, KM 09, 8401, Parque Guajará, CEP: 66821-000, Belém-PA</i> <br>
    <label> PROFISSÃO: </label> <i>Policial Militar</i> <br>
    <label for="rg-${qtdProcessos}"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number" name="rg-${qtdProcessos}" onfocus="completarEndRes(${qtdProcessos})" id="rg-${qtdProcessos}">
    <br> 
    <label for="emissao-${qtdProcessos}">
    DATA DA EMISSÃO: </label> <input type="date" name="emissao-${qtdProcessos}" id="emissao-${qtdProcessos}"> <br>
    <label for="expedidor-${qtdProcessos}">ORGÃO EXPEDIDOR/UF: </label> <span id="expedidor-${qtdProcessos}"><i>PMPA</i></span> <br>
    <label for="cpf-${qtdProcessos}">CPF: </label><input type="text" name="cpf-${qtdProcessos}" id="cpf-${qtdProcessos}"><br>
    <strong><i>DADOS DA ARMA</i></strong> <br>
    <label for="fabricante-${qtdProcessos}">IDENTIFICAÇÃO DO FABRICANTE: </label>
    <select name="fabricante-${qtdProcessos}" id="fabricante-${qtdProcessos}">
        <option value="24">GLOCK</option>
        <option value="1">TAURUS S/A</option>
        <option value="4">CBC</option>
    </select> <br>
    <label for="fornecedor-${qtdProcessos}">IDENTIFICAÇÃO DO VENDEDOR: </label><input type="text" size="80" name="fornecedor-${qtdProcessos}" id="fornecedor-${qtdProcessos}"> <br>
    <label for="end-fornecedor-${qtdProcessos}">ENDEREÇO: </label><input type="text" name="end-fornecedor-${qtdProcessos}" id="end-fornecedor-${qtdProcessos}"
         size="80"> <br>
    <label for="cnpj-${qtdProcessos}">CNPJ: </label> <input type="text" size="17" name="cnpj-${qtdProcessos}" id="cnpj-${qtdProcessos}"> <br>
    <label>NÚMERO DA NOTA FISCAL: <input name="n-nf-${qtdProcessos}" type="number"> <span style="padding: 10px;"></span> EMISSÃO:<input
            type="date" name="emissao-dt-${qtdProcessos}" id="emissao-dt-${qtdProcessos}"></label> <br>
    <label for="especie-${qtdProcessos}">ESPÉCIE: </label>
    <select name="especie-${qtdProcessos}" id="especie-${qtdProcessos}">
        <option value="2">PISTOLA</option>
        <option value="1">ESPINGARDA</option>
        <option value="3">REVÓLVER</option>
        <option value="4">CARABINA</option>
    </select> <br>
    <label for="marca-${qtdProcessos}">MARCA: </label>
    <select name="marca-${qtdProcessos}" id="marca-${qtdProcessos}">
        <option value="24">GLOCK</option>
        <option value="1">TAURUS S/A</option>
        <option value="4">CBC</option>
    </select> <br>
    <label for="modelo-${qtdProcessos}">MODELO: </label> <input type="text" name="modelo-${qtdProcessos}" id="modelo-${qtdProcessos}"> <br>
    <label for="serie-${qtdProcessos}">NÚMERO DE SÉRIE: </label><input type="text" name="serie-${qtdProcessos}" id="serie-${qtdProcessos}"> <br>
    <label for="calibre-${qtdProcessos}">CALIBRE: </label> <input type="text" name="calibre-${qtdProcessos}" id="calibre-${qtdProcessos}"> <br>
    <label for="muni-${qtdProcessos}">CAPACIDADE DE MUNIÇÃO: </label><input type="number" name="muni-${qtdProcessos}" id="muni-${qtdProcessos}"> <br>
    <label for="funcionamento-${qtdProcessos}">TIPO DE FUNCIONAMENTO: </label>
    <select name="funcionamento-${qtdProcessos}" id="funcionamento-${qtdProcessos}">
        <option value="2">Semi-automático</option>
        <option value="1">Automático</option>
        <option value="3">Repetição</option>
        <option value="4">Tiro simples</option>
    </select> <br>
    <label for="canos-${qtdProcessos}">QUANTIDADE DE CANOS: </label><input type="number" name="canos-${qtdProcessos}" id="canos-${qtdProcessos}"> <br>
    <label> COMPRIMENTO DO CANO: <input type="text" name="tam-cano-${qtdProcessos}" id="tam-cano-${qtdProcessos}" size="5"> <select name="uni-medida-${qtdProcessos}" id="uni-medida-${qtdProcessos}">
            <option value="MM">mm</option>
            <option value="CM">cm</option>
            <option value="POL">pol</option>
        </select>
    </label><br>
    <label for="alma-${qtdProcessos}">TIPO DE ALMA: </label>
    <select name="alma-${qtdProcessos}" onblur="tipoAlma(${qtdProcessos})" id="alma-${qtdProcessos}">
        <option value="R">Raiada</option>
        <option value="L">Lisa</option>
    </select>
    <span id="dados-raias-${qtdProcessos}">
        <label for="n-raias-${qtdProcessos}">NUMERO DE RAIAS: </label><input type="number"
            name="n-raias-${qtdProcessos}" id="n-raias-${qtdProcessos}"
            onfocus="unidadeDeMedida(${qtdProcessos})">
        <label for="sentido-raias-${qtdProcessos}">SENTIDO DAS RAIAS: </label>
        <select name="sentido-raias-${qtdProcessos}" id="sentido-raias-${qtdProcessos}">
            <option value="N"></option>
            <option value="D">À Direita</option>
            <option value="E">À Esquerda</option>
        </select>
        </span> <br>
    <label for="acabamento-${qtdProcessos}">ACABAMENTO: </label><input type="text" name="acabamento-${qtdProcessos}" id="acabamento-${qtdProcessos}"> <br>
    <label for="pais-${qtdProcessos}">PAÍS DE FABRICAÇÃO: </label>
    <select name="pais-${qtdProcessos}" id="pais-${qtdProcessos}">
        <option value="1">Brasil</option>
        <option value="20">EUA</option>
    </select>
    <p style="font-weight: bold;text-decoration: underline">LEGISLAÇÃO UTILIZADA: LEI 10.826 de 22/12/2003, DECRETO
        5.123 de 01/07/2004 e PORTARIA 069 GabCmdo Geral PMPa de 24/04/2019.</p>
    <br>
    <br>
    `
        popularCidades(qtdProcessos)
    }

    for (let i = 1; i <= qtdProcessosTransf; i++) {
        qtdProcessos++;
        const nProcesso = ("00" + i).slice(-3)
        let form = document.getElementById('lista-transferencia');
        form.innerHTML += `
        <span class="no-print"><label for="tombamento-${qtdProcessos}">TOMBAMENTO</label> <input
                type="text" name="tombamento-${qtdProcessos}"
                id="tombamento-${qtdProcessos}"></span><br>
        <label for="cedente-${qtdProcessos}">${nProcesso}-DE: </label> <input type="text"
            name="cedente-${qtdProcessos}" id="cedente-${qtdProcessos}" size="80"> <br>
        <label for="profissao-cedente-${qtdProcessos}">PROFISSÃO: </label><input type="text"
            name="profissao-cedente-${qtdProcessos}" id="profissao-cedente-${qtdProcessos}" size="30">
        <br>
        <label for="cpf-cedente-${qtdProcessos}">CPF: </label> <input type="text"
            name="cpf-cedente-${qtdProcessos}" id="cpf-cedente-${qtdProcessos}" size="11">
        <label for="rg-cedente-${qtdProcessos}">RG: </label> <input type="text" size="10"
            name="rg-cedente-${qtdProcessos}" id="rg-cedente-${qtdProcessos}">
        <label for="data-exp-cedente-${qtdProcessos}">Data de Exp.: </label> <input type="date"
            name="data-exp-cedente-${qtdProcessos}" id="data-exp-cedente-${qtdProcessos}"
            width="10px   ">
        <label for="emissor-cedente-${qtdProcessos}">Org. Emissor: </label> <input type="text"
            name="emissor-cedente-${qtdProcessos}" id="emissor-cedente-${qtdProcessos}"><br>
            <strong style="padding: 0; margin: 0"><i>DADOS DO INTERESSADO</i></strong> <br>
        <label for="nome-${qtdProcessos}">NOME: </label>
        <input type="text" size="90" name="nome=${qtdProcessos}" id="nome-${qtdProcessos}"><br>
        <label> FILIAÇÃO: <input type="text" size="30" name="pai-${qtdProcessos}"
                id="pai-${qtdProcessos}" onblur="this.size = this.value.length + 6;pai(${qtdProcessos})"
                placeholder="PAI">
            <span style="font-weight: normal;" id="e-${qtdProcessos}">e</span> <input type="text"
                onblur="this.size = this.value.length + 6;mae(${qtdProcessos});" placeholder="MAE"
                size="30" name="mae-${qtdProcessos}" id="mae-${qtdProcessos}">
        </label><br>
        <label> DATA E LOCAL DE NASCIMENTO: <input type="date" name="nascimento-${qtdProcessos}"
                id="nascimento-${qtdProcessos}"> <span style="padding-left:10px"></span> <input type="text"
                name="local-nascimento-${qtdProcessos}">
        </label><br>
        <label> END.RESID: <input type="text" size="70" name="residencia-${qtdProcessos}"
                id="residencia-${qtdProcessos}" onblur="this.size = this.value.length + 6;"> <select name="cidade-${qtdProcessos}"
                id="cidade-${qtdProcessos}" style="height: 30px"></select>
        </label><br>
        <label> END. TRABALHO: <i>Rdv. Augusto Montenegro, KM 09, 8401, Parque Guajará, CEP: 66821-000,
                Belém-PA</i>
        </label> <br>
        <label> PROFISSÃO: </label> <i>Policial Militar</i> <br>
        <label for="rg-${qtdProcessos}"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number"
            name="rg-${qtdProcessos}" onfocus="completarEndRes(${qtdProcessos})"
            id="rg-${qtdProcessos}">
        <br>
        <label for="emissao-${qtdProcessos}"> DATA DA EMISSÃO: </label> <input type="date"
            name="emissao-${qtdProcessos}" id="emissao-${qtdProcessos}"> <br>
        <label for="expedidor-${qtdProcessos}">ORGÃO EXPEDIDOR/UF: </label> <span
            id="expedidor-${qtdProcessos}"><i>PMPA</i></span> <br>
        <label for="cpf-${qtdProcessos}">CPF: </label><input type="text" name="cpf-${qtdProcessos}"
            id="cpf-${qtdProcessos}"><br>
        <strong><i>DADOS DA ARMA</i></strong> <br>
        <label for="sigma-${qtdProcessos}">Nº SGIMA: </label> <input type="number"
            name="sigma-${qtdProcessos}" id="sigma-${qtdProcessos}"> <br>
        <label for="fabricante-${qtdProcessos}">IDENTIFICAÇÃO DO FABRICANTE: </label>
        <select name="fabricante-${qtdProcessos}" id="fabricante-${qtdProcessos}">
            <option value="24">GLOCK</option>
            <option value="1">TAURUS S/A</option>
            <option value="4">CBC</option>
        </select> <br>
        <label for="fornecedor-${qtdProcessos}">IDENTIFICAÇÃO DO VENDEDOR: </label><input type="text"
            size="80" name="fornecedor-${qtdProcessos}" id="fornecedor-${qtdProcessos}"> <br>
        <label for="end-fornecedor-${qtdProcessos}">ENDEREÇO: </label><input type="text"
            name="end-fornecedor-${qtdProcessos}" id="end-fornecedor-${qtdProcessos}" size="80"> <br>
        <label for="cnpj-${qtdProcessos}">CNPJ: </label> <input type="text" size="17"
            name="cnpj-${qtdProcessos}" id="cnpj-${qtdProcessos}"> <br>
        <label>NÚMERO DA NOTA FISCAL: <input name="n-nf-${qtdProcessos}" type="number"> <span
                style="padding: 10px;"></span> EMISSÃO:<input type="date"
                name="emissao-dt-${qtdProcessos}" id="emissao-dt-${qtdProcessos}"></label> <br>
        <label for="especie-${qtdProcessos}">ESPÉCIE: </label>
        <select name="especie-${qtdProcessos}" id="especie-${qtdProcessos}">
            <option value="2">PISTOLA</option>
            <option value="1">ESPINGARDA</option>
            <option value="3">REVÓLVER</option>
            <option value="4">CARABINA</option>
        </select> <br>
        <label for="marca-${qtdProcessos}">MARCA: </label>
        <select name="marca-${qtdProcessos}" id="marca-${qtdProcessos}">
            <option value="24">GLOCK</option>
            <option value="1">TAURUS S/A</option>
            <option value="4">CBC</option>
        </select> <br>
        <label for="modelo-${qtdProcessos}">MODELO: </label> <input type="text"
            name="modelo-${qtdProcessos}" id="modelo-${qtdProcessos}"> <br>
        <label for="serie-${qtdProcessos}">NÚMERO DE SÉRIE: </label><input type="text"
            name="serie-${qtdProcessos}" id="serie-${qtdProcessos}"> <br>
        <label for="calibre-${qtdProcessos}">CALIBRE: </label> <input type="text"
            name="calibre-${qtdProcessos}" id="calibre-${qtdProcessos}"> <br>
        <label for="muni-${qtdProcessos}">CAPACIDADE DE MUNIÇÃO: </label><input type="number"
            name="muni-${qtdProcessos}" id="muni-${qtdProcessos}"> <br>
        <label for="funcionamento-${qtdProcessos}">TIPO DE FUNCIONAMENTO: </label>
        <select name="funcionamento-${qtdProcessos}" id="funcionamento-${qtdProcessos}">
            <option value="2">Semi-automático</option>
            <option value="1">Automático</option>
            <option value="3">Repetição</option>
            <option value="4">Tiro simples</option>
        </select> <br>
        <label for="canos-${qtdProcessos}">QUANTIDADE DE CANOS: </label><input type="number"
            name="canos-${qtdProcessos}" id="canos-${qtdProcessos}"> <br>
        <label> COMPRIMENTO DO CANO: <input type="text" name="tam-cano-${qtdProcessos}"
                id="tam-cano-${qtdProcessos}" size="5"> <select name="uni-medida-${qtdProcessos}"
                id="uni-medida-${qtdProcessos}">
                <option value="MM">mm</option>
                <option value="CM">cm</option>
                <option value="POL">pol</option>
            </select>
        </label><br>
        <label for="alma-${qtdProcessos}">TIPO DE ALMA: </label>
        <select name="alma-${qtdProcessos}" onblur="tipoAlma(${qtdProcessos})" id="alma-${qtdProcessos}">
            <option value="R">Raiada</option>
            <option value="L">Lisa</option>
        </select>
        <span id="dados-raias-${qtdProcessos}">
        <label for="n-raias-${qtdProcessos}">NUMERO DE RAIAS: </label><input type="number"
            name="n-raias-${qtdProcessos}" id="n-raias-${qtdProcessos}"
            onfocus="unidadeDeMedida(${qtdProcessos})">
        <label for="sentido-raias-${qtdProcessos}">SENTIDO DAS RAIAS: </label>
        <select name="sentido-raias-${qtdProcessos}" id="sentido-raias-${qtdProcessos}">
            <option value="N"></option>
            <option value="D">À Direita</option>
            <option value="E">À Esquerda</option>
        </select>
        </span>
         <br>
        <label for="acabamento-${qtdProcessos}">ACABAMENTO: </label><input type="text"
            name="acabamento-${qtdProcessos}" id="acabamento-${qtdProcessos}"> <br>
        <label for="pais-${qtdProcessos}">PAÍS DE FABRICAÇÃO: </label>
        <select name="pais-${qtdProcessos}" id="pais-${qtdProcessos}">
            <option value="1">Brasil</option>
            <option value="20">EUA</option>
        </select>
        <p style="font-weight: bold;text-decoration: underline">LEGISLAÇÃO UTILIZADA: LEI 10.826 de
            22/12/2003, DECRETO 5.123 de 01/07/2004 e PORTARIA 069 GabCmdo Geral PMPa de 24/04/2019.</p>
        <br>
        <br>
        `
        popularCidades(qtdProcessos);
    }

    for (let i = 1; i <= qtdProcessosPAF; i++) {
        qtdProcessos++;
        let form = document.getElementById('lista-paf');
        form.innerHTML +=
            `
        ${i} - <input type="text" size="70" name="nome-paf-${qtdProcessos}" placeholder="NOME - POST/GRAD RG"> - 
                        <label for="cpf-paf-${qtdProcessos}">CPF:</label> <input id="cpf-paf-${qtdProcessos}" type="text" size="11">
                        <table border="1">
                            <thead>
                                <tr>
                                    <th>BAR</th>
                                    <th>ESPÉCIE</th>
                                    <th>FUNC.</th>
                                    <th>ACAB.</th>
                                    <th>MARCA</th>
                                    <th>CAL.</th>
                                    <th>MOD.</th>
                                    <th>CAPAC.</th>
                                    <th>CANO</th>
                                    <th>PAÍS</th>
                                    <th>N° SÉRIE</th>
                                    <th>SGIMA</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input type="text" onblur="this.size = this.value.length" name="bar-paf-${qtdProcessos}"></td>
                                    <td><input type="text" onblur="this.size = this.value.length + 1" name="esp-paf-${qtdProcessos}"></td>
                                    <td><input type="text" onblur="this.size = this.value.length + 3" name="fun-paf-${qtdProcessos}"></td>
                                    <td><input type="text" onblur="this.size = this.value.length" name="acab-paf-${qtdProcessos}"></td>
                                    <td><input type="text" onblur="this.size = this.value.length" name="marca-paf-${qtdProcessos}"></td>
                                    <td><input type="text" onblur="this.size = this.value.length" name="cal-paf-${qtdProcessos}"></td>
                                    <td><input type="text" onblur="this.size = this.value.length" name="mod-paf-${qtdProcessos}"></td>
                                    <td><input type="text" onblur="this.size = this.value.length" name="capac-paf-${qtdProcessos}"></td>
                                    <td><input type="text" onblur="this.size = this.value.length" name="cano-paf-${qtdProcessos}"></td>
                                    <td><input type="text" onblur="this.size = this.value.length" name="pais-paf-${qtdProcessos}"></td>
                                    <td><input type="text" onblur="this.size = this.value.length" name="n-serie-paf-${qtdProcessos}"></td>
                                    <td><input type="text" onblur="this.size = this.value.length" name="sigma-paf-${qtdProcessos}"></td>
                                </tr>
                            </tbody>
                        </table>
        `
        popularCidades(qtdProcessos);
    }
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

const pegarGrupoCalibre = processo => {
    let calibre = String(pegar('calibre', processo));
    calibre.replace(' ', '')
    if (calibre[calibre.length - 1].toLocaleLowerCase() === 'm') return 4;
    else if (!calibre.startsWith('.')) {
        calibre = calibre[1] + calibre[2]
        parseFloat(calibre)
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
        parseInt(calibre)
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
}

const montarLinhaAEL = processo => {
    let Arma = {
        tombamento: pegar('tombamento', processo).replace('/', ''),
        numSerie: pegar('serie', processo).replace(' ', ''),
        marca: pegar('marca', processo),
        especie: pegar('especie', processo),
        modelo: pegar('modelo', processo).replace(' ', ''),
        calibre: pegar('calibre', processo),
        grupo_calibre: pegarGrupoCalibre(processo),
        municao: pegar('muni', processo),
        funcionamento: pegar('funcionamento', processo),
        canos: pegar('canos', processo),
        comprimentoCano: pegar('tam-cano', processo),
        uniMedida: pegar('uni-medida', processo),
        alma: pegar('alma', processo),
        raias: pegar('n-raias', processo).length > 0 ? pegar('n-raias', processo) : '',
        sentidoRaias: pegar('sentido-raias', processo) !== 'N' ? pegar('sentido-raias', processo) : '',
        acabamento: pegar('acabamento', processo),
        pais: pegar('pais', processo)
    }

    let BAR = {
        tipoPubli: 1,
        numBar: document.getElementById('num-bar').value.replace('0', '') + new Date().getFullYear(),
        dataPublic: pegarDataPub(),
        orgao: '900000528'
    }

    let Policial = {
        cpf: pegarCPF(processo),
        nome: pegar('nome', processo).split('-')[0].trim(),
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

const salvarStatus = () => {
    if (qtdProcessosCom > 0) {
        let form = document.body.querySelector("#lista-comercio");
        let data = new FormData(form);
        let json = {}; // objeto que irá guardar os dados

        for (let dados of form) {
            let typ = document.body.querySelector("[name='" + dados.name + "']").type,
                val = dados.value;
            if (typ == "select-multiple") {
                let mul = [],
                    els = document.body.querySelector("[name='" + dados.name + "']").options;
                for (let x = 0; x < els.length; x++) {
                    if (els[x].selected) {
                        mul.push(els[x].value);
                    }
                }
                val = mul;
            }

            json[dados.name] = val;
        }

        localStorage.setItem("formulario-com", JSON.stringify(json));
    }

    if (qtdProcessosInd > 0) {
        form = document.body.querySelector("#lista-industria");
        data = new FormData(form);
        json = {}; // objeto que irá guardar os dados

        for (let dados of form) {

            let typ = document.body.querySelector("[name='" + dados.name + "']").type,
                val = dados.value;
            if (typ == "select-multiple") {
                let mul = [],
                    els = document.body.querySelector("[name='" + dados.name + "']").options;
                for (let x = 0; x < els.length; x++) {
                    if (els[x].selected) {
                        mul.push(els[x].value);
                    }
                }
                val = mul;
            }

            json[dados.name] = val;
        }

        localStorage.setItem("formulario-ind", JSON.stringify(json));
    }

    if (qtdProcessosTransf > 0) {
        form = document.body.querySelector("#lista-transferencia");
        data = new FormData(form);
        json = {}; // objeto que irá guardar os dados

        for (let dados of form) {

            let typ = document.body.querySelector("[name='" + dados.name + "']").type,
                val = dados.value;
            if (typ == "select-multiple") {
                let mul = [],
                    els = document.body.querySelector("[name='" + dados.name + "']").options;
                for (let x = 0; x < els.length; x++) {
                    if (els[x].selected) {
                        mul.push(els[x].value);
                    }
                }
                val = mul;
            }

            json[dados.name] = val;
        }

        localStorage.setItem("formulario-transf", JSON.stringify(json));
    }
    alert('Dados  Salvos Localmente!')
}

const carregarStatus = () => {
    document.addEventListener("DOMContentLoaded", () => {

        carregarDadosGerais();
        let formulario = localStorage.getItem("formulario-com");

        if (formulario) { // verifico se o localStorage existe

            let form = document.body.querySelector("#lista-comercio");

            formulario = JSON.parse(formulario);

            for (let dados in formulario) {

                let tag = document.body.querySelector("[name='" + dados + "']").tagName,
                    typ = document.body.querySelector("[name='" + dados + "']").type;

                if (tag.match(/INPUT|SELECT|TEXTAREA/) && !typ.match(/radio|checkbox|select-multiple/)) {

                    document.body.querySelector("[name='" + dados + "']").value = formulario[dados];

                } else if (typ == "checkbox") {

                    document.body.querySelector("[name='" + dados + "']").checked = formulario[dados];

                } else if (typ == "select-multiple") {
                    let mul = formulario[dados];

                    for (let item of mul) {
                        document.body.querySelector("[name='" + dados + "'] option[value='" + item + "']").selected = true;
                    }

                } else if (typ == "radio") {
                    document.body.querySelector("[name='" + dados + "'][value='" + formulario[dados] + "']").checked = true;
                }

            }
        }

        formulario = localStorage.getItem("formulario-ind");
        if (formulario) { // verifico se o localStorage existe

            let form = document.body.querySelector("#lista-industria");

            formulario = JSON.parse(formulario);

            for (let dados in formulario) {

                let tag = document.body.querySelector("[name='" + dados + "']").tagName,
                    typ = document.body.querySelector("[name='" + dados + "']").type;

                if (tag.match(/INPUT|SELECT|TEXTAREA/) && !typ.match(/radio|checkbox|select-multiple/)) {

                    document.body.querySelector("[name='" + dados + "']").value = formulario[dados];

                } else if (typ == "checkbox") {

                    document.body.querySelector("[name='" + dados + "']").checked = formulario[dados];

                } else if (typ == "select-multiple") {
                    let mul = formulario[dados];

                    for (let item of mul) {
                        document.body.querySelector("[name='" + dados + "'] option[value='" + item + "']").selected = true;
                    }

                } else if (typ == "radio") {
                    document.body.querySelector("[name='" + dados + "'][value='" + formulario[dados] + "']").checked = true;
                }

            }

        }

        formulario = localStorage.getItem("formulario-transf");
        if (formulario) { // verifico se o localStorage existe

            let form = document.body.querySelector("#lista-transferencia");

            formulario = JSON.parse(formulario);

            for (let dados in formulario) {

                let tag = document.body.querySelector("[name='" + dados + "']").tagName,
                    typ = document.body.querySelector("[name='" + dados + "']").type;

                if (tag.match(/INPUT|SELECT|TEXTAREA/) && !typ.match(/radio|checkbox|select-multiple/)) {

                    document.body.querySelector("[name='" + dados + "']").value = formulario[dados];

                } else if (typ == "checkbox") {

                    document.body.querySelector("[name='" + dados + "']").checked = formulario[dados];

                } else if (typ == "select-multiple") {
                    let mul = formulario[dados];

                    for (let item of mul) {
                        document.body.querySelector("[name='" + dados + "'] option[value='" + item + "']").selected = true;
                    }

                } else if (typ == "radio") {
                    document.body.querySelector("[name='" + dados + "'][value='" + formulario[dados] + "']").checked = true;
                }

            }

        }
        for (let i = 1; i <= qtdProcessos; i++) {
            completarEndRes(i);
            unidadeDeMedida(i);
            tipoAlma(i);
        }
    })
}

const montarAEL = () => {
    try {
        numeroDeLinhas = 0;
        for (let i = 1; i <= qtdProcessos; i++) {
            if (pegar('profissao-cedente', i).toLowerCase().trim() !== 'policial militar') {
                numeroDeLinhas++;
            }
        }
        let mes = new Date().getMonth() + 1
        if (mes < 10) mes = '0' + mes;
        const data = ("0" + new Date().getDate()).slice(-2) + '/' + mes + '/' + new Date().getFullYear()
        const data_titulo = ("0" + new Date().getDate()).slice(-2) + '' + mes + '' + new Date().getFullYear()
        const hora = ("0" + new Date().getHours()).slice(-2) + ':' + ("0" + new Date().getMinutes()).slice(-2) + ':' + ("0" + new Date().getSeconds()).slice(-2);
        const hora_titulo = ("0" + new Date().getHours()).slice(-2) + '' + ("0" + new Date().getMinutes()).slice(-2) + '' + ("0" + new Date().getSeconds()).slice(-2);
        const titulo = `CARGA-900000528-${data_titulo}-${hora_titulo}.txt`
        let linhas = `[REMETO][${data} ${hora}][${numeroDeLinhas}]`;

        for (let i = 1; i <= qtdProcessos; i++) {
            if (pegar('profissao-cedente', i).toLowerCase().trim() !== 'policial militar') {
                linhas += `\n${montarLinhaAEL(i)}[7]`
            }
        }
        let teste = new Blob([linhas], { type: "text/plain;charset=ISO8859-1" });
        saveAs(teste, titulo);
    } catch (Excepiton) {
        alert('VOCÊ ESQUECEU DE ALGUMA INFORMAÇÃO IMPORTANTE!')
        console.log(Excepiton)
    }
    window.print()
}