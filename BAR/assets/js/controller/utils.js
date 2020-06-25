let DadosGerais = {
    qtdProcessosCom: 0,
    qtdProcessosInd: 0,
    qtdProcessosTransf: 0,
    qtdProcessosPAF: 0,
    qtdProcessosCRAF: 0,
    qtdProcessosStatus: 0,
    qtdProcessosManu: 0,
    qtdProcessosRetificacao: 0,
    textCom: '',
    textInd: '',
    textTransf: '',
    textPAF: '',
    textCRAF: '',
    textStatus: ''
}
/**
 * Ira montar uma div para inserir os nomes que foram alterados
 */
const mudarChefes = () => {
    let div = document.getElementById('chefes-dados')
    div.innerHTML = `
    <div class="row" id="chefes">
        <div class="col">
            <label>Chefe da seção: <input id="chefe" type="text" size="90"></label>
            <label>Diretor da DAL: <input id="diretor" type="text" size="90"></label>
            <label>General do Exército: <input id="general" type="text" size="80"></label>
        </div>
    </div>
    <button onclick="mudarNomes()" class="btn btn-success">Mudar nomes</button>
    `
    window.location.href = '#chefes'
}

/**
 * Irá pegar os nomes inseridos na div de mudarChefes() e salvará
 * localmente
 */
const mudarNomes = () => {
    const chefe = document.getElementById('chefe').value
    const diretor = document.getElementById('diretor').value
    const general = document.getElementById('general').value
    if(chefe) localStorage.setItem('chefeDaSecao', chefe)
    if(diretor) localStorage.setItem('diretorDAL', diretor)
    if(general) localStorage.setItem('general', general)
    document.getElementById('chefes-dados').innerHTML = ''
    carregarNomes()
}

/**
 * Irá remover o atributo hidden da div mandada por parâmetro
 * @param {string} nome nome da div
 */
const mostrarDiv = nome => {
    try {
        document.getElementById(nome).removeAttribute('hidden')   
    } catch (error) {
        console.log(error)
    }
}

/**
 * Função que irá pegar as quantidades de cada tipo de processo e
 * a descrição dos calibres de cada tipo de processo e salvará localmente
 */
const setDadosGerais = alterando => {
    const ind = document.getElementById('text-aux-ind').value
    const com = document.getElementById('text-aux-com').value
    const transf = document.getElementById('text-aux-transf').value
    const paf = document.getElementById('text-aux-paf').value
    const craf = document.getElementById('text-aux-craf').value
    const status = document.getElementById('text-aux-status').value
    DadosGerais.qtdProcessosInd = parseInt(document.getElementById('qtd-armas-ind').value);
    DadosGerais.qtdProcessosCom = parseInt(document.getElementById('qtd-armas-com').value);
    DadosGerais.qtdProcessosTransf = parseInt(document.getElementById('qtd-armas-transf').value);
    DadosGerais.qtdProcessosPAF = parseInt(document.getElementById('qtd-armas-paf').value);
    DadosGerais.qtdProcessosCRAF = parseInt(document.getElementById('qtd-armas-craf').value);
    DadosGerais.qtdProcessosStatus = parseInt(document.getElementById('qtd-armas-status').value);
    DadosGerais.qtdProcessosManu = parseInt(document.getElementById('qtd-armas-manu').value);
    DadosGerais.qtdProcessosRetificacao = parseInt(document.getElementById('qtd-armas-retificacao').value);
    let n = 0;
    if (DadosGerais.qtdProcessosInd) {
        mostrarDiv('industria')
        n++;
        let armasIndustria = document.getElementById('armas-da-industria')
        DadosGerais.textInd = ind
        armasIndustria.innerHTML = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, DE ${ind}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;
        formAquicisao(DadosGerais.qtdProcessosInd, 'industria');
    } else {
        try {
            document.getElementById('industria').hidden = '1'; 
        } catch (error) {
            console.log(error)
        }
    }

    if (DadosGerais.qtdProcessosCom) {
        mostrarDiv('comercio')
        n++;
        let armasComercio = document.getElementById('armas-do-comercio')
        DadosGerais.textCom = com;
        armasComercio.innerHTML = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, DE ${com}, ADQUIRIDAS ATRAVÉS DO COMÉRCIO.`;
        formAquicisao(DadosGerais.qtdProcessosCom, 'comercio');
    } else {
        try {
            document.getElementById('comercio').hidden = '1';
        } catch (error) {
            console.log(error)
        }
    }

    if (DadosGerais.qtdProcessosTransf) {
        mostrarDiv('transferencia')
        n++;
        let armasTransferencia = document.getElementById('armas-por-transferencia')
        DadosGerais.textTransf = transf;
        armasTransferencia.innerHTML = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA TRANSFERÊNCIA DE ARMA DE FOGO DE USO PERMITIDO, DE ${transf}.`;
        formTransf()
    } else {
        try {
            document.getElementById('transferencia').hidden = '1';
        } catch (error) {
            console.log(error)
        }
    }

    if (DadosGerais.qtdProcessosPAF) {
        mostrarDiv('paf')
        n++;
        let armasPAF = document.getElementById('armas-paf')
        DadosGerais.textPAF = paf;
        armasPAF.innerHTML = `${("0" + n).slice(-2)}. SOLICITAÇÃO PARA EXPEDIÇÃO DE PAF (PORTE DE ARMA DE FOGO) PARA POLICIAL MILITAR DA RESERVA REMUNERADA, DE CALIBRE PERMITIDO, DE ${paf}.`;
        formPAF_CRAF('paf')
    } else {
        try {
            document.getElementById('paf').hidden = '1';
        } catch (error) {
            console.log(error)
        }
    }

    if (DadosGerais.qtdProcessosCRAF) {
        mostrarDiv('craf')
        n++;
        let armasCRAF = document.getElementById('armas-craf')
        DadosGerais.textCRAF = craf;
        armasCRAF.innerHTML = `${("0" + n).slice(-2)}. SOLICITAÇÃO PARA SEGUNDA VIA DE CRAF (CERTIFICADO DE REGISTRO DE ARMA DE FOGO) PARA POLICIAL MILITAR DA ATIVA E/OU RESERVA REMUNERADA, DE ${craf}.`;
        formPAF_CRAF('craf')
    } else {
        try {
            document.getElementById('craf').hidden = '1';
        } catch (error) {
            console.log(error)
        }
    }

    if (DadosGerais.qtdProcessosStatus) {
        mostrarDiv('status')
        n++;
        let armasStatus = document.getElementById('armas-status')
        DadosGerais.textStatus = status;
        armasStatus.innerHTML = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA MUDANÇA DE STATUS DE ARMA DE FOGO, PISTOLA E ESPINGARDA, POR EXTRAVIO, DE CALIBRE RESTRITO E PERMITIDO, DE ${status}, NO SIGMA.`;;
        formStatus()
    } else {
        try {
            document.getElementById('status').hidden = '1';
        } catch (error) {
            console.log(error)
        }
    }

    if (DadosGerais.qtdProcessosManu > 0) {
        mostrarDiv('manutencao')
        n++;
        let armasManu = document.getElementById('armas-manutencao');
        armasManu.innerHTML = `${("0" + n).slice(-2)}. MANUNTENÇÃO DE DADOS NO “SIGMA”.`
        formManutencao()
    } else {
        try {
            document.getElementById('manutencao').hidden = '1';
        } catch (error) {
            console.log(error)
        }
    }

    if (DadosGerais.qtdProcessosRetificacao > 0) {
        mostrarDiv('retificacao')
        n++;
        let armasRetificacao = document.getElementById('armas-retificacao');
        armasRetificacao.innerHTML = `${("0" + n).slice(-2)}. TORNA-SE SEM EFEITO AS SEGUINTES PUBLICAÇÕE.`
        formRetificacao()
    } else {
        try {
            document.getElementById('retificacao').hidden = '1';
        } catch (error) {
            console.log(error)
        }
    }
    localStorage.setItem('dadosGerais', JSON.stringify(DadosGerais))
    document.getElementById('informações-bar').hidden = '1'
    if (alterando) {
        carregarStatus()

    }
}

/**
 * Adiciona o template de quantidade de armas, no topo da página
 * para poder alterar a quantidade dee processos
 */
const alterarDadosGerais = () => {
    window.location.href = '#dados-iniciais'
    qtdProcessos = 0
    salvarStatus()
    let div = document.getElementById('dados-iniciais')
    div.innerHTML += `
        <div id="informações-bar">
            <!--FORM DADOS PARA O COMÉRCIO-->
            <div class="form-group">
                <label for="qtd-armas-com">Quantas armas foram adquiridas no comércio</label>
                <input value="${DadosGerais.qtdProcessosCom}" type="number" id="qtd-armas-com" class="form-control">
            </div>
            <div class="form-group">
                <label for="text-aux-com">Informe a quantidade de armas, de cada espécie e especificas quantas são de cada
                    calibre, adquiridas no comércio</label>
                <textarea
                id="text-aux-com" cols="50" rows="4" class="form-control"
                placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"
                >${DadosGerais.textCom}</textarea>
            </div>
            <!--FORM DADOS PARA O COMÉRCIO FIM-->
            
            <!--FORM DADOS PARA A INDÚSTRIA-->
            <div class="form-group">
                <label for="qtd-armas-ind">Quantas armas foram adquiridas na indústria</label>
                <input value="${DadosGerais.qtdProcessosInd}" type="number" id="qtd-armas-ind" class="form-control">
            </div>
            <div class="form-group">
                <label for="text-aux-ind">Informe a quantidade de armas, de cada espécie e especificas quantas são de cada
                    calibre, aquiridas na indústria</label>
                <textarea
                id="text-aux-ind" cols="50" rows="4" class="form-control"
                placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"
                >${DadosGerais.textInd}</textarea>
            </div>
            <!--FORM DADOS PARA A INDÚSTRIA FIM-->

            <!--FORM DADOS PARA TRANSFERÊNCIAS-->
            <div class="form-group">
                <label for="qtd-armas-transf">Quantas armas foram adquiridas por transferência</label>
                <input value="${DadosGerais.qtdProcessosTransf}" type="number" id="qtd-armas-transf" class="form-control">
            </div>
            <div class="form-group">
                <label for="text-aux-transf">Informe a quantidade de armas, de cada espécie e especificas quantas são de cada
                    calibre, adquiridas por transferência</label>
                <textarea
                id="text-aux-transf" cols="50" rows="4" class="form-control"
                placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"
                >${DadosGerais.textTransf}</textarea>
            </div>
            <!--FORM DADOS PARA TRANSFERÊNCIAS FIM-->

            <!--FORM DADOS PARA PORTES-->
            <div class="form-group">
                <label for="qtd-armas-paf">Quantos PAF's serão emitidos:</label>
                <input value="${DadosGerais.qtdProcessosPAF}" type="number" id="qtd-armas-paf" class="form-control">
            </div>
            <div class="form-group">
                <label for="text-aux-paf">Informe a quantidade de armas, de cada espécie e especificas quantas são de cada
                    calibre, para emissão de PAF</label>
                <textarea
                id="text-aux-paf" cols="50" rows="4" class="form-control"
                placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"
                >${DadosGerais.textPAF}</textarea>
            </div>
            <!--FORM DADOS PARA PORTES FIM-->

            <!--FORM DADOS PARA 2ª VIA DE CRAF-->
            <div class="form-group">
                <label for="qtd-armas-craf">Quantos CRAF's serão emitidos:</label>
                <input value="${DadosGerais.qtdProcessosCRAF}" type="number" id="qtd-armas-craf" class="form-control">
            </div>
            <div class="form-group">
                <label for="text-aux-craf">Informe a quantidade de armas, de cada espécie e especificas quantas são de cada
                    calibre, para emissão de CRAF's</label>
                <textarea
                id="text-aux-craf" cols="50" rows="4" class="form-control"
                placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"
                >${DadosGerais.textCRAF}</textarea>
            </div>
            <!--FORM DADOS PARA 2ª VIA DE CRAF FIM-->

            <!--FORM DADOS PARA MUDANÇA DE STATUS-->
            <div class="form-group">
                <label for="qtd-armas-status">Quantos mudanças de status serão feitas:</label>
                <input value="${DadosGerais.qtdProcessosStatus}" type="number" id="qtd-armas-status" class="form-control">
            </div>
            <div class="form-group">
                <label for="text-aux-status">Informe a quantidade de armas, de cada espécie e especificas quantas são de cada
                    calibre, para mudança de status</label>
                <textarea
                id="text-aux-status" cols="50" rows="4" class="form-control"
                placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"
                >${DadosGerais.textStatus}</textarea>
            </div>
            <!--FORM DADOS PARA MUDANÇA DE STATUS FIM-->

            <!--FORM DADOS PARA MANUTENÇÃO NO SIGMA-->
            <div class="form-group">
                <label for="qtd-armas-manu">Quantos manutenções no SIGMA serão feitas:</label>
                <input value="${DadosGerais.qtdProcessosManu}" type="number" id="qtd-armas-manu" class="form-control">
            </div>
            <!--FORM DADOS PARA MUDANÇA DE STATUS FIM-->
            <!--FORM DADOS PARA RETIFICAÇÃO DE PUBLICAÇÃO-->
            <div class="form-group">
                <label for="qtd-armas-retificacao">Quantas retificações serão feitas?</label>
                <input type="number" id="qtd-armas-retificacao" class="form-control" value="${DadosGerais.qtdProcessosRetificacao}">
            </div>
            <!--FORM DADOS PARA RETIFICAÇÃO DE PUBLICAÇÃO FIM-->
            <button class="btn btn-primary" style="position: relative;" onclick="setDadosGerais(true);"> Dados Ok</button>
        </div>
    `
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
            endereco.size = '85'
            return
        }
        CIDADES.forEach(city => {
            cidade = city.id === cidade ? city.nome : cidade;
        })
        document.getElementById('cidade-' + processo).hidden = '1'
        endereco.value += ', ' + cidade + '-PA'
        endereco.size = '85'
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
    try {
        let input_pai = document.getElementById(`pai-${processo}`);
        let input_mae = document.getElementById(`mae-${processo}`);
        if (input_mae.value || input_pai.value) {
            if (!input_pai.value) {
                input_pai.hidden = '1'
                document.getElementById(`e-${processo}`).hidden = '1'
            }
            if (!input_mae.value) {
                input_mae.hidden = '1'
                try {
                    document.getElementById(`e-${processo}`).hidden = '1'
                } catch (error) {
                    console.warn(error)
                }

            }
        }
    } catch (error) {
        console.log(error)
    }
}
/**
 * Função verifica qual o tipo de transferência e modifica o nome do indentificar
 * do sistema de cadastro que a arma está de acordo com o sistema
 * @param {number} processo número contido no id de cada elemente html do processo
 */
const identificadorSI = processo => {
    try {
        let label = document.getElementById(`identificador-${processo}-label`)
        const tipoTransf = document.getElementById(`tipo-transf-${processo}`).value
        label.innerHTML = tipoTransf === 'sigma' ? 'Nº SIGMA:' : 'Nº SINARM:'
    } catch (error) {
        console.log(error)
    }
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
        return document.getElementById(id + '-' + processo).value.trim()
    } catch (error) {
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
    let forms = document.body.querySelector(`#lista-${idForm}`).getElementsByTagName('form');
    let formularios = []
    for (form of forms) {
        let json = {};
        json['id'] = form.id
        for (dado of form) {
            if (dado.name.trim() !== '') json[dado.name] = dado.value
        }
        formularios.push(json)
    }

    localStorage.setItem(`formulario-${idForm}`, JSON.stringify(formularios));
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
    if (DadosGerais.qtdProcessosManu > 0) salvarForm('manutencao');
    if (DadosGerais.qtdProcessosRetificacao > 0) salvarForm('retificacao');

    alert('Dados  Salvos Localmente!')
}
/**
 * Função ira preencher o objeto DadosGerais com as informações no localStorage
 * e criará os formulários que tem algum dado
 */
const carregarDadosGerais = () => {
    qtdProcessos = 0
    try {
        DadosGerais = JSON.parse(localStorage.dadosGerais)
    } catch (error) {
        console.log(error)
    } n = 0;
    if (DadosGerais.qtdProcessosInd) {
        n++;
        let armasIndustria = document.getElementById('armas-da-industria')
        armasIndustria.innerHTML = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, DE ${DadosGerais.textInd}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;
        formAquicisao(DadosGerais.qtdProcessosInd, 'industria');
    }

    if (DadosGerais.qtdProcessosCom) {
        n++;
        try {
            let armasComercio = document.getElementById('armas-do-comercio')
            armasComercio.innerHTML = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, DE ${DadosGerais.textCom}, ADQUIRIDAS ATRAVÉS DO COMÉRCIO.`;
            formAquicisao(DadosGerais.qtdProcessosCom, 'comercio');
        } catch (Exeception) {
            console.log(Exeception)
        }
    }

    if (DadosGerais.qtdProcessosTransf) {
        n++;
        let armasTransf = document.getElementById('armas-por-transferencia')
        armasTransf.innerHTML = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA TRANSFERÊNCIA DE ARMA DE FOGO DE USO PERMITIDO, DE ${DadosGerais.textTransf}.`;
        formTransf();
    }

    if (DadosGerais.qtdProcessosPAF) {
        n++;
        let armasPAF = document.getElementById('armas-paf')
        armasPAF.innerHTML = `${("0" + n).slice(-2)}. SOLICITAÇÃO PARA EXPEDIÇÃO DE PAF (PORTE DE ARMA DE FOGO) PARA POLICIAL MILITAR DA RESERVA REMUNERADA, DE CALIBRE PERMITIDO, DE ${DadosGerais.textPAF}.`;
        formPAF_CRAF('paf');
    }

    if (DadosGerais.qtdProcessosCRAF) {
        n++;
        let armasCRAF = document.getElementById('armas-craf')
        armasCRAF.innerHTML = `${("0" + n).slice(-2)}. SOLICITAÇÃO PARA SEGUNDA VIA DE CRAF (CERTIFICADO DE REGISTRO DE ARMA DE FOGO) PARA POLICIAL MILITAR DA ATIVA E/OU RESERVA REMUNERADA, DE ${DadosGerais.textCRAF}.`;
        formPAF_CRAF('craf');
    }

    if (DadosGerais.qtdProcessosStatus) {
        n++;
        let armasStatus = document.getElementById('armas-status')
        armasStatus.innerHTML = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA MUDANÇA DE STATUS DE ARMA DE FOGO, PISTOLA E ESPINGARDA, POR EXTRAVIO, DE CALIBRE RESTRITO E PERMITIDO, DE ${DadosGerais.textStatus}, NO SIGMA.`;
        formStatus();
    }

    if (DadosGerais.qtdProcessosManu) {
        n++;
        document.getElementById('armas-manutencao').innerHTML = `${("0" + n).slice(-2)}. MANUNTENÇÃO DE DADOS NO “SIGMA”`;
        formManutencao()
    }

    if (DadosGerais.qtdProcessosRetificacao) {
        console.log('retificação')
        n++;
        document.getElementById('armas-retificacao').innerHTML = `${("0" + n).slice(-2)}. TORNA-SE SEM EFEITO AS SEGUINTES PUBLICAÇÕE.`
        formRetificacao()
    }

    try {
        if (DadosGerais.qtdProcessosInd || DadosGerais.qtdProcessosCom
            || DadosGerais.qtdProcessosTransf || DadosGerais.qtdProcessosPAF
            || DadosGerais.qtdProcessosStatus || DadosGerais.qtdProcessosManu
            || DadosGerais.qtdProcessosRetificacao) {
            document.getElementById('informações-bar').remove()
            if (DadosGerais.qtdProcessosInd <= 0) document.getElementById('industria').hidden = '1';
            if (DadosGerais.qtdProcessosCom <= 0) document.getElementById('comercio').hidden = '1';
            if (DadosGerais.qtdProcessosTransf <= 0) document.getElementById('transferencia').hidden = '1';
            if (DadosGerais.qtdProcessosPAF <= 0) document.getElementById('paf').hidden = '1';
            if (DadosGerais.qtdProcessosCRAF <= 0) document.getElementById('craf').hidden = '1';
            if (DadosGerais.qtdProcessosStatus <= 0) document.getElementById('status').hidden = '1';
            if (DadosGerais.qtdProcessosManu <= 0) document.getElementById('manutencao').hidden = '1';
            if (DadosGerais.qtdProcessosRetificacao <= 0) document.getElementById('retificacao').hidden = '1';
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
    let formularios = localStorage.getItem(`formulario-${idForm}`);
    if (formularios) { // verifico se o localStorage existe
        formularios = JSON.parse(formularios);
        for (let form of formularios) {
            try {
                let formInHTML = document.getElementById(form.id)
                for (dado in form) {
                    if (dado !== 'id') {
                        formInHTML.querySelector(`[name='${dado}']`).value = form[dado]
                    }
                }
            } catch (error) {
                formularios.splice(formularios.indexOf(form), 1)
                console.log(error)
            }
        };
    }
}

const carregarNomes = () => {
    try {
        if(localStorage.chefeDaSecao) document.getElementById('chefe-da-secao').innerHTML = localStorage.chefeDaSecao
    } catch(error) {
        console.log(error)
    }

    try {
        if(localStorage.diretorDAL) document.getElementById('diretor-da-dal').innerHTML = localStorage.diretorDAL
    } catch(error) {
        console.log(error)
    }

    try {
        if(localStorage.general) document.getElementById('general').innerHTML = localStorage.general
    } catch(error) {
        console.log(error)
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
        if (DadosGerais.qtdProcessosCRAF) carregarForm('craf');
        if (DadosGerais.qtdProcessosStatus) carregarForm('status');
        if (DadosGerais.qtdProcessosManu) carregarForm('manutencao');
        if (DadosGerais.qtdProcessosRetificacao) carregarForm('retificacao');
        const qtdAquisicoes = DadosGerais.qtdProcessosCom + DadosGerais.qtdProcessosInd + DadosGerais.qtdProcessosTransf
        for (let i = 1; i <= qtdAquisicoes; i++) {
            completarEndRes(i);
            unidadeDeMedida(i);
            tipoAlma(i);
            paiMae(i)
            try {
                if (pegar('residencia', i).length) {
                    document.getElementById(`dados-endereco-${i}`).hidden = '1'
                }
            } catch(error) {
                console.log(error)
            }
            try {
                tipoTransferencia(i)
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
    const chefe = localStorage.chefeDaSecao
    const diretor = localStorage.diretorDAL
    const general = localStorage.general
    localStorage.clear();
    localStorage.setItem('chefeDaSecao', chefe)
    localStorage.setItem('diretorDAL', diretor)
    localStorage.setItem('general', general)
    document.location.reload(true);
}