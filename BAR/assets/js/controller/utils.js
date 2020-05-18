let DadosGerais = {
    qtdProcessos: 0,
    qtdProcessosCom: 0,
    qtdProcessosInd: 0,
    qtdProcessosTransf: 0,
    qtdProcessosPAF: 0,
    qtdProcessosStatus: 0,
    qtdProcessosMan: 0,
    textCom: '',
    textInd: '',
    textTransf: '',
    textPAF: '',
    textStatus: '',
    textManu: ''
}
/**
 * Função que irá pegar as quantidades de cada tipo de processo e
 * a descrição dos calibres de cada tipo de processo e salvará localmente
 */
const getDadosGerais = () => {
    const ind = document.getElementById('text-aux-ind').value
    const com = document.getElementById('text-aux-com').value
    const transf = document.getElementById('text-aux-transf').value
    const paf = document.getElementById('text-aux-paf').value
    const status = document.getElementById('text-aux-status').value
    DadosGerais.qtdProcessosInd = parseInt(document.getElementById('qtd-armas-ind').value);
    DadosGerais.qtdProcessosCom = parseInt(document.getElementById('qtd-armas-com').value);
    DadosGerais.qtdProcessosTransf = parseInt(document.getElementById('qtd-armas-transf').value);
    DadosGerais.qtdProcessosPAF = parseInt(document.getElementById('qtd-armas-paf').value);
    DadosGerais.qtdProcessosStatus = parseInt(document.getElementById('qtd-armas-status').value);
    DadosGerais.qtdProcessosMan = parseInt(document.getElementById('qtd-armas-manu').value);
    let n = 0;
    if (ind.length > 0) {
        n++;
        let armasIndustria = document.getElementById('armas-da-industria')
        DadosGerais.textInd = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, DE ${ind}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;
        armasIndustria.innerHTML += DadosGerais.textInd;
        formAquicisao(DadosGerais.qtdProcessosInd, 'industria');
    } else {
        document.getElementById('industria').remove();
    }
    if (com.length > 0) {
        n++;
        let armasComercio = document.getElementById('armas-do-comercio')
        DadosGerais.textCom = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, DE ${com}, ADQUIRIDAS ATRAVÉS DO COMÉRCIO.`;
        armasComercio.innerHTML += DadosGerais.textCom;
        formAquicisao(DadosGerais.qtdProcessosCom, 'comercio');
    } else {
        document.getElementById('comercio').remove();
    }
    if (transf.length > 0) {
        n++;
        let armasTransferencia = document.getElementById('armas-por-transferencia')
        DadosGerais.textTransf = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA TRANSFERÊNCIA DE ARMA DE FOGO DE USO PERMITIDO, DE ${com}.`;
        armasTransferencia.innerHTML += DadosGerais.textTransf;
        formTransf()
    } else {
        document.getElementById('transferencia').remove();
    }
    if (paf.length > 0) {
        n++;
        let armasPAF = document.getElementById('armas-paf')
        DadosGerais.textPAF = `${("0" + n).slice(-2)}. SOLICITAÇÃO PARA EXPEDIÇÃO DE PAF (PORTE DE ARMA DE FOGO) PARA POLICIAL MILITAR DA RESERVA REMUNERADA, DE CALIBRE PERMITIDO, DE ${paf}.`;
        armasPAF.innerHTML += DadosGerais.textPAF;
        formPAF()
    } else {
        document.getElementById('paf').remove();
    }
    if (status.length > 0) {
        n++;
        let armasStatus = document.getElementById('armas-status')
        DadosGerais.textStatus = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA MUDANÇA DE STATUS DE ARMA DE FOGO, PISTOLA E ESPINGARDA, POR EXTRAVIO, DE CALIBRE RESTRITO E PERMITIDO, DE ${status}, NO SIGMA.`;
        armasStatus.innerHTML += DadosGerais.textStatus;
        formStatus()
    } else {
        document.getElementById('status').remove();
    }
    if (DadosGerais.qtdProcessosMan > 0) {
        n++;
        let armasManu = document.getElementById('armas-manutencao');
        DadosGerais.textManu = `${("0" + n).slice(-2)}. MANUNTENÇÃO DE DADOS NO “SIGMA”`
        armasManu.innerHTML += DadosGerais.textManu;
        formManutencao()
    } else {
        document.getElementById('manutencao').remove()
    }

    localStorage.setItem('dadosGerais', JSON.stringify(DadosGerais))
    document.getElementById('informações-bar').remove()
}
/**
 * Função que pega a cidade selecionada, no select #cidade,
 *  e a complementa no campo endereço
 * @param {number} processo número contido no id de cada elemente html do processo
 */
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
/**
 * Função irá pegar a unidade de medida selecionada e a complementa
 * no campo #tam-cano
 * @param {number} processo número contido no id de cada elemente html do processo
 */
const unidadeDeMedida = processo => {
    let comprimento = document.getElementById('tam-cano-' + processo)
    let uniMedida = document.getElementById('uni-medida-' + processo)
    if (comprimento.value.match(/mm$|cm$|pol$/)) {
        uniMedida.hidden = '1'
    }
    if (comprimento.value.length > 0 && !comprimento.value.match(/mm$|cm$|pol$/)) {
        comprimento.type = 'text'
        uniMedida.hidden = '1'
        comprimento.value += String(uniMedida.value).toLocaleLowerCase()
    }
}
/**
 * Função que verifica se o campo #pai ou #mae está vazio,
 * se estiver o campo é removido.
 * @param {number} processo número contido no id de cada elemente html do processo
 */
const paiMae = processo => {
    let input_pai = document.getElementById(`pai-${processo}`);
    let input_mae = document.getElementById(`mae-${processo}`);
    if (input_mae.value || input_pai.value) {
        if (!input_pai.value) {
            input_pai.remove()
            document.getElementById(`e-${processo}`).remove()
        }
        if (!input_mae.value) {
            input_mae.remove()
            try {
                document.getElementById(`e-${processo}`).remove()
            } catch (error) {
                console.warn(error)
            }

        }
    }
}
/**
 * Função verifica qual o tipo de transferência e modifica o nome do indentificar
 * do sistema de cadastro que a arma está de acordo com o sistema
 * @param {number} processo número contido no id de cada elemente html do processo
 */
const identificadorSI = processo => {
    let label = document.getElementById(`identificador-${processo}-label`)
    const tipoTransf = document.getElementById(`tipo-transf-${processo}`).value.split('/')[0]
    label.innerHTML = tipoTransf === 'sigma' ? 'Nº SIGMA:' : 'Nº SINARM:'
}
/**
 * Função verifica se alma é raiada ou não, se for os campos #n-raias e #sentido-raias
 * são removidos
 * @param {number} processo número contido no id de cada elemente html do processo
 */
const tipoAlma = processo => {
    const alma = pegar('alma', processo);
    if (alma === 'L') {
        document.getElementById('dados-raias-' + processo).hidden = '1'
        document.getElementById('sentido-raias-' + processo).value = ''
    }
}
/**
 * Cria mascara pro cpf, sem a necessita do usuário digitar os "." e o "-"
 * @param {string} id id campo que vai inserido o cpf
 */
const mascaraCPF = id => {
    cpf = document.getElementById(id).value
    cpf = cpf.replace(/\D/g, "")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2")
    cpf = cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    document.getElementById(id).value = cpf
}
/**
 * Cria mascara pro cnpj, sem a necessita do usuário digitar os ".", "/" e "-"
 * @param {string} id id campo que vai inserido o cnpj
 */
const mascaraCNPJ = id => {
    cnpj = document.getElementById(id).value
    cnpj = cnpj.replace(/\D/g, "")
    cnpj = cnpj.replace(/^(\d{2})(\d)/, "$1.$2")
    cnpj = cnpj.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    cnpj = cnpj.replace(/\.(\d{3})(\d)/, ".$1/$2")
    cnpj = cnpj.replace(/(\d{4})(\d)/, "$1-$2")
    document.getElementById(id).value = cnpj
}
/**
 * Função irá pegar o RG inserido no campo #nome e o colocará no campo #rg
 * @param {number} processo número contido no id de cada elemente html do processo
 */
const pegarRg = processo => {
    const nome = pegar('nome', processo).trim()
    rg = nome.split(/ /g)
    rg = rg[rg.length - 1]
    document.getElementById('rg-' + processo).value = rg
}
/**
 * Função retorna o value de um HTMLElementObject sem os espaços desnecessários
 * @param {string} id id do elemento html
 * @param {number} processo numero contido no id do elemento html
 * @returns {string} retorna o value do elemento sem os espaços na direita e na esquerda
 */
const pegar = (id, processo) => {
    try {
        return document.getElementById(id + '-' + processo).value.trim();
    }
    catch {
        return ''
    }
}
/**
 * Função que pega só os números do cpf
 * @param {number} processo número contido no id de cada elemente html do processo
 */
const pegarCPF = processo => {
    try {
        let cpf = pegar('cpf', processo)
        return cpf.replace(/[.-]/g, '');
    } catch (Exception) {
        return ''
    }

}
/**
 * Função pegar o value de um input do tipo date e irá retorna no formato BR
 * @param {string} id id do elemnto html
 * @param {number} processo número contigo no final de cada id
 * @returns {string} Retorna a data formatada em BR
 */
const pegarData = (id, processo) => {
    let data = pegar(id, processo);
    data = data.split('-');
    data = data[2] + '/' + data[1] + '/' + data[0];
    return data;
}
/**
 * Salva um formulário e seus dados com localStorage
 * @param {string} idForm final do id do formulário que irá ser salvo
 */
const salvarForm = idForm => {
    let form = document.body.querySelector(`#lista-${idForm}`);
    let json = {};
    for (let dados of form) {
        const val = dados.value;
        json[dados.name] = val;
    }

    localStorage.setItem(`formulario-${idForm}`, JSON.stringify(json));
}
/**
 * Função irá salvar todos os dados de todos os formulários no BAR
 */
const salvarStatus = () => {
    if (DadosGerais.qtdProcessosInd > 0) salvarForm('industria');
    if (DadosGerais.qtdProcessosCom > 0) salvarForm('comercio');
    if (DadosGerais.qtdProcessosTransf > 0) salvarForm('transferencia');
    if (DadosGerais.qtdProcessosPAF > 0) salvarForm('paf');
    if (DadosGerais.qtdProcessosStatus > 0) salvarForm('status');
    if (DadosGerais.qtdProcessosMan > 0) salvarForm('manutencao');

    alert('Dados  Salvos Localmente!')
}
/**
 * Função ira preencher o objeto DadosGerais com as informações no localStorage
 * e criará os formulários que tem algum dado
 */
const carregarDadosGerais = () => {
    DadosGerais = JSON.parse(localStorage.dadosGerais)
    if (DadosGerais.qtdProcessosInd) {
        let armasIndustria = document.getElementById('armas-da-industria')
        armasIndustria.innerHTML += DadosGerais.textInd;
        formAquicisao(DadosGerais.qtdProcessosInd, 'industria');
    }
    if (DadosGerais.qtdProcessosCom) {
        try {
            let armasComercio = document.getElementById('armas-do-comercio')
            armasComercio.innerHTML += DadosGerais.textCom
            formAquicisao(DadosGerais.qtdProcessosCom, 'comercio');
        } catch (Exeception) {
            console.log(Exeception)
        }
    }
    if (DadosGerais.qtdProcessosTransf) {
        let armasTransf = document.getElementById('armas-por-transferencia')
        armasTransf.innerHTML += DadosGerais.textTransf
        formTransf();
    }
    if (DadosGerais.qtdProcessosPAF) {
        let armasPAF = document.getElementById('armas-paf')
        armasPAF.innerHTML += DadosGerais.textPAF
        formPAF();
    }
    if (DadosGerais.qtdProcessosStatus) {
        let armasStatus = document.getElementById('armas-status')
        armasStatus.innerHTML += DadosGerais.textStatus
        formStatus();
    }
    if (DadosGerais.qtdProcessosMan) {
        document.getElementById('armas-manutencao').innerHTML += localStorage.texManu
        formManutencao()
    }
    try {
        if (DadosGerais.qtdProcessosInd || DadosGerais.qtdProcessosCom
            || DadosGerais.qtdProcessosTransf || DadosGerais.qtdProcessosPAF
            || DadosGerais.qtdProcessosStatus || DadosGerais.qtdProcessosMan) {
            document.getElementById('informações-bar').remove()
            if (DadosGerais.qtdProcessosInd <= 0) document.getElementById('industria').remove();
            if (DadosGerais.qtdProcessosCom <= 0) document.getElementById('comercio').remove();
            if (DadosGerais.qtdProcessosTransf <= 0) document.getElementById('transferencia').remove();
            if (DadosGerais.qtdProcessosPAF <= 0) document.getElementById('paf').remove();
            if (DadosGerais.qtdProcessosStatus <= 0) document.getElementById('status').remove();
            if (DadosGerais.qtdProcessosMan <= 0) document.getElementById('manutencao').remove();
        }
    } catch (error) {
        console.log(error)
    }
}
/**
 * Função irá carregar os dados do formulário que está em localStorage
 * @param {string} idForm tipo de formulário, que pode ser 
 * comercio/industria/transferencia/paf/status/manutencao
 */
const carregarForm = idForm => {
    let formulario = localStorage.getItem("formulario-" + idForm);
    if (formulario) { // verifico se o localStorage existe
        formulario = JSON.parse(formulario);
        for (let dados in formulario) {
            document.body.querySelector(`[name='${dados}']`).value = formulario[dados]
        };
    }
}
/**
 * Carrega todas as informações contidas em localStorage e carrega os dados
 * no html
 */
const carregarStatus = () => {
    setTimeout(() => {
        carregarDadosGerais();
        if (DadosGerais.qtdProcessosInd) carregarForm('industria');
        if (DadosGerais.qtdProcessosCom) carregarForm('comercio');
        if (DadosGerais.qtdProcessosTransf) carregarForm('transferencia');
        if (DadosGerais.qtdProcessosPAF) carregarForm('paf');
        if (DadosGerais.qtdProcessosStatus) carregarForm('status');
        if (DadosGerais.qtdProcessosMan) carregarForm('manutencao');
        const qtdAquisicoes = DadosGerais.qtdProcessosCom + DadosGerais.qtdProcessosInd + DadosGerais.qtdProcessosTransf
        for (let i = 1; i <= qtdAquisicoes; i++) {
            completarEndRes(i);
            unidadeDeMedida(i);
            tipoAlma(i);
            paiMae(i)
            try {
                identificadorSI(i)
            } catch (error) {
                console.log(error)
            }
        }
    }, 2000)
}
/**
 * Limpa todos os dados que estão e localStorage e recarrega a página
 */
const limparDados = () => {
    localStorage.clear();
    document.location.reload(true);
}