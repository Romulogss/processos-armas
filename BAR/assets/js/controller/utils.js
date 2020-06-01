let DadosGerais = {
    qtdProcessos: 0,
    qtdProcessosCom: 0,
    qtdProcessosInd: 0,
    qtdProcessosTransf: 0,
    qtdProcessosPAF: 0,
    qtdProcessosCRAF: 0,
    qtdProcessosStatus: 0,
    qtdProcessosMan: 0,
    textCom: '',
    textInd: '',
    textTransf: '',
    textPAF: '',
    textCRAF: '',
    textStatus: '',
    textManu: ''
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
    DadosGerais.qtdProcessosStatus = parseInt(document.getElementById('qtd-armas-status').value);
    let n = 0;
    if (alterando) {
        console.log('aqui')
        DadosGerais.textInd = `. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, DE ${ind}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;
        DadosGerais.textCom = `. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, DE ${com}, ADQUIRIDAS ATRAVÉS DO COMÉRCIO.`;
        DadosGerais.textTransf = `. AUTORIZAÇÃO PARA TRANSFERÊNCIA DE ARMA DE FOGO DE USO PERMITIDO, DE ${transf}.`;
        DadosGerais.textPAF = `. SOLICITAÇÃO PARA EXPEDIÇÃO DE PAF (PORTE DE ARMA DE FOGO) PARA POLICIAL MILITAR DA RESERVA REMUNERADA, DE CALIBRE PERMITIDO, DE ${paf}.`;
        DadosGerais.textStatus = `. AUTORIZAÇÃO PARA MUDANÇA DE STATUS DE ARMA DE FOGO, PISTOLA E ESPINGARDA, POR EXTRAVIO, DE CALIBRE RESTRITO E PERMITIDO, DE ${status}, NO SIGMA.`;
        DadosGerais.textManu = `. MANUNTENÇÃO DE DADOS NO “SIGMA”.`
        carregarStatus()
    } else {
        if (DadosGerais.qtdProcessosInd) {
            n++;
            let armasIndustria = document.getElementById('armas-da-industria')
            DadosGerais.textInd = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, DE ${ind}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;
            armasIndustria.innerHTML = DadosGerais.textInd;
            formAquicisao(DadosGerais.qtdProcessosInd, 'industria');
        } else {
            try {
                document.getElementById('industria').remove();
            } catch (error) {
                console.log(error)
            }
        }
        if (DadosGerais.qtdProcessosCom) {
            n++;
            let armasComercio = document.getElementById('armas-do-comercio')
            DadosGerais.textCom = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, DE ${com}, ADQUIRIDAS ATRAVÉS DO COMÉRCIO.`;
            armasComercio.innerHTML = DadosGerais.textCom;
            formAquicisao(DadosGerais.qtdProcessosCom, 'comercio');
        } else {
            try {
                document.getElementById('comercio').remove();
            } catch (error) {
                console.log(error)
            }
        }
        if (DadosGerais.qtdProcessosTransf) {
            n++;
            let armasTransferencia = document.getElementById('armas-por-transferencia')
            DadosGerais.textTransf = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA TRANSFERÊNCIA DE ARMA DE FOGO DE USO PERMITIDO, DE ${transf}.`;
            armasTransferencia.innerHTML = DadosGerais.textTransf;
            formTransf()
        } else {
            try {
                document.getElementById('transferencia').remove();
            } catch (error) {
                console.log(error)
            }
        }
        if (DadosGerais.qtdProcessosPAF) {
            n++;
            let armasPAF = document.getElementById('armas-paf')
            DadosGerais.textPAF = `${("0" + n).slice(-2)}. SOLICITAÇÃO PARA EXPEDIÇÃO DE PAF (PORTE DE ARMA DE FOGO) PARA POLICIAL MILITAR DA RESERVA REMUNERADA, DE CALIBRE PERMITIDO, DE ${paf}.`;
            armasPAF.innerHTML = DadosGerais.textPAF;
            formPAF_CRAF('paf')
        } else {
            try {
                document.getElementById('paf').remove();
            } catch (error) {
                console.log(error)
            }
        }
        if (DadosGerais.qtdProcessosCRAF) {
            n++;
            let armasCRAF = document.getElementById('armas-craf')
            DadosGerais.textCRAF = `${("0" + n).slice(-2)}. SOLICITAÇÃO PARA SEGUNDA VIA DE CRAF (CERTIFICADO DE REGISTRO DE ARMA DE FOGO) PARA POLICIAL MILITAR DA ATIVA E/OU RESERVA REMUNERADA, DE ${craf}.`;
            armasCRAF.innerHTML += DadosGerais.textCRAF;
            formPAF_CRAF('craf')
        } else {
            try {
                document.getElementById('craf').remove();
            } catch (error) {
                console.log(error)
            }
        }
        if (DadosGerais.qtdProcessosStatus) {
            n++;
            let armasStatus = document.getElementById('armas-status')
            DadosGerais.textStatus = `${("0" + n).slice(-2)}. AUTORIZAÇÃO PARA MUDANÇA DE STATUS DE ARMA DE FOGO, PISTOLA E ESPINGARDA, POR EXTRAVIO, DE CALIBRE RESTRITO E PERMITIDO, DE ${status}, NO SIGMA.`;
            armasStatus.innerHTML = DadosGerais.textStatus;
            formStatus()
        } else {
            try {
                document.getElementById('status').remove();
            } catch (error) {
                console.log(error)
            }
        }
        if (DadosGerais.qtdProcessosMan > 0) {
            n++;
            let armasManu = document.getElementById('armas-manutencao');
            DadosGerais.textManu = `${("0" + n).slice(-2)}. MANUNTENÇÃO DE DADOS NO “SIGMA”.`
            armasManu.innerHTML = DadosGerais.textManu;
            formManutencao()
        } else {
            try {
                document.getElementById('manutencao').remove();
            } catch (error) {
                console.log(error)
            }
        }
    }
    localStorage.setItem('dadosGerais', JSON.stringify(DadosGerais))
    document.getElementById('informações-bar').remove()
}

const alterarDadosGerais = () => {
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
                <textarea value="${DadosGerais.textCom}" id="text-aux-com" cols="50" rows="4" class="form-control"
                    placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"></textarea>
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
                <textarea value="${DadosGerais.textInd}" id="text-aux-ind" cols="50" rows="4" class="form-control"
                    placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"></textarea>
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
                <textarea value="${DadosGerais.textTransf}" id="text-aux-transf" cols="50" rows="4" class="form-control"
                    placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"></textarea>
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
                <textarea value="${DadosGerais.textPAF}" id="text-aux-paf" cols="50" rows="4" class="form-control"
                    placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"></textarea>
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
                <textarea value="${DadosGerais.textCRAF}" id="text-aux-craf" cols="50" rows="4" class="form-control"
                    placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"></textarea>
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
                <textarea value="${DadosGerais.textStatus}" id="text-aux-status" cols="50" rows="4" class="form-control"
                    placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"></textarea>
            </div>
            <!--FORM DADOS PARA MUDANÇA DE STATUS FIM-->

            <!--FORM DADOS PARA MANUTENÇÃO NO SIGMA-->
            <div class="form-group">
                <label for="qtd-armas-manu">Quantos manutenções no SIGMA serão feitas:</label>
                <input value="${DadosGerais.qtdProcessosMan}" type="number" id="qtd-armas-manu" class="form-control">
            </div>
            <!--FORM DADOS PARA MUDANÇA DE STATUS FIM-->
            <button class="btn btn-primary" style="position: relative;" onclick="setDadosGerais(true);"> Dados Ok</button>
        </div>
    `
    window.location.href = '#dados-inicais'
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
            endereco.size = '90'
            return
        }
        CIDADES.forEach(city => {
            cidade = city.id === cidade ? city.nome : cidade;
        })
        document.getElementById('cidade-' + processo).hidden = '1'
        endereco.value += ', ' + cidade + '-PA'
        endereco.size = '90'
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
    if (DadosGerais.qtdProcessosMan > 0) salvarForm('manutencao');

    alert('Dados  Salvos Localmente!')
}
/**
 * Função ira preencher o objeto DadosGerais com as informações no localStorage
 * e criará os formulários que tem algum dado
 */
const carregarDadosGerais = () => {
    try {
        DadosGerais = JSON.parse(localStorage.dadosGerais)
    } catch (error) {
        console.log(error)
    } n = 0;
    if (DadosGerais.qtdProcessosInd) {
        n++;
        let armasIndustria = document.getElementById('armas-da-industria')
        armasIndustria.innerHTML = DadosGerais.textInd.startsWith('0') ? DadosGerais.textInd : `${("0" + n).slice(-2)}${DadosGerais.textInd}`;
        formAquicisao(DadosGerais.qtdProcessosInd, 'industria');
    }

    if (DadosGerais.qtdProcessosCom) {
        n++;
        try {
            let armasComercio = document.getElementById('armas-do-comercio')
            armasComercio.innerHTML = DadosGerais.textCom.startsWith('0') ? DadosGerais.textCom : `${("0" + n).slice(-2)}${DadosGerais.textCom}`;
            formAquicisao(DadosGerais.qtdProcessosCom, 'comercio');
        } catch (Exeception) {
            console.log(Exeception)
        }
    }

    if (DadosGerais.qtdProcessosTransf) {
        n++;
        let armasTransf = document.getElementById('armas-por-transferencia')
        armasTransf.innerHTML = DadosGerais.textTransf.startsWith('0') ? DadosGerais.textTransf : `${("0" + n).slice(-2)}${DadosGerais.textTransf}`;
        formTransf();
    }

    if (DadosGerais.qtdProcessosPAF) {
        n++;
        let armasPAF = document.getElementById('armas-paf')
        armasPAF.innerHTML = DadosGerais.textPAF.startsWith('0') ? DadosGerais.textCRAF : `${("0" + n).slice(-2)}${DadosGerais.textPAF}`;
        formPAF_CRAF('paf');
    }

    if (DadosGerais.qtdProcessosCRAF) {
        n++;
        let armasPAF = document.getElementById('armas-craf')
        armasPAF.innerHTML = DadosGerais.textCRAF.startsWith('0') ? DadosGerais.textCRAF : `${("0" + n).slice(-2)}${DadosGerais.textCRAF}`;
        formPAF_CRAF('craf');
    }

    if (DadosGerais.qtdProcessosStatus) {
        n++;
        let armasStatus = document.getElementById('armas-status')
        armasStatus.innerHTML = DadosGerais.textStatus.startsWith('0') ? DadosGerais.textStatus : `${("0" + n).slice(-2)}${DadosGerais.textStatus}`;
        formStatus();
    }

    if (DadosGerais.qtdProcessosMan) {
        n++;
        document.getElementById('armas-manutencao').innerHTML = DadosGerais.textManu.startsWith('0') ? DadosGerais.textManu : `${("0" + n).slice(-2)}${DadosGerais.textManu}`;
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
        if (DadosGerais.qtdProcessosMan) carregarForm('manutencao');
        const qtdAquisicoes = DadosGerais.qtdProcessosCom + DadosGerais.qtdProcessosInd + DadosGerais.qtdProcessosTransf
        for (let i = 1; i <= qtdAquisicoes; i++) {
            completarEndRes(i);
            unidadeDeMedida(i);
            tipoAlma(i);
            paiMae(i)
            if (pegar('residencia', i).length) document.getElementById(`dados-endereco-${i}`).remove()
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