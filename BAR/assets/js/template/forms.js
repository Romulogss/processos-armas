let qtdProcessos = 0;
const formAquicisao = (qtd, tipo) => {
    let div = document.getElementById('lista-' + tipo);
    div.innerHTML = ''
    for (let i = 1; i <= qtd; i++) {
        qtdProcessos++;
        let nProcesso = ("00" + i).slice(-3);
        div.innerHTML += `
        <form id="${tipo}-${i}">
        <span class="no-print"><label for="tombamento-${i}">TOMBAMENTO</label> <input type="text" placeholder="999/9999" name="tombamento-${i}" id="tombamento-${qtdProcessos}"></span><br>
        <label for="nome-${i}">${nProcesso}-NOME: </label>
        <input type="text" size="90" onblur="pegarRg(${qtdProcessos})" name="nome-${i}" id="nome-${qtdProcessos}" placeholder="FULANO - SUB TEN PM RG 99999"><br>
        <label> FILIAÇÃO: <input type="text" size="30" name="pai-${i}" id="pai-${qtdProcessos}" onblur="this.style.width = (this.value.length * 10) + 'px';" placeholder="PAI">
            <span style="font-weight: normal;" id="e-${qtdProcessos}">e</span> <input type="text" onblur="this.size = this.value.length + 6;" placeholder="MAE" size="50" name="mae-${i}" id="mae-${qtdProcessos}">
        </label><br>
        <label> DATA E LOCAL DE NASCIMENTO: <input type="date" onfocus="paiMae(${qtdProcessos});" name="nascimento-${i}" id="nascimento-${qtdProcessos}"> <span style="padding-left:10px"></span> <input
                type="text" name="local-nascimento-${i}" size="40" placeholder="CIDADE NASCIMENTO-ESTADO">
        </label><br>
        <div id="dados-endereco-${qtdProcessos}">
            <label> COMPLEMENTE E Nº DA CASA/APT:</label><input type="text" id="numero-${qtdProcessos}">
            <label> CEP:</label> <input type="text" id="cep-${qtdProcessos}">
            <br>
            <button class="btn btn-primary" type="button" onclick="completarEnd(${qtdProcessos})">CEP e Nº OK</button>
            <button class="btn btn-danger" type="button" onclick="document.getElementById('dados-endereco-${qtdProcessos}').remove()">Inserir endereço manualmente</button>
            <br>
        </div>
        <label> END.RESID: <input placeholder="SEM A CIDADE" type="text" size="80" name="residencia-${i}" id="residencia-${qtdProcessos}"> <select  name="cidade-${i}" id="cidade-${qtdProcessos}" style="height: 34px;width: 200px"></select>
        </label><br>
        <label> END. TRABALHO: </label><i>Rdv. Augusto Montenegro, KM 09, 8401, Parque Guajará, CEP: 66821-000, Belém-PA</i> <br>
        <label> PROFISSÃO: </label> <i>Policial Militar</i> <br>
        <label for="rg-${i}"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number" name="rg-${i}" id="rg-${qtdProcessos}">
        <br>
        <label for="emissao-${i}">
        DATA DA EMISSÃO: </label> <input type="date" onfocus="completarEndRes(${qtdProcessos})" name="emissao-${i}" id="emissao-${qtdProcessos}" "> <br>
        <label for="expedidor-${i}">ORGÃO EXPEDIDOR/UF: </label> <span id="expedidor-${qtdProcessos}"><i>PMPA</i></span> <br>
        <label for="cpf-${i}">CPF: </label><input maxlength="14" oninput="mascaraCPF(this.id)" placeholder="SOMENTE NÚMEROS" type="text" name="cpf-${i}" id="cpf-${qtdProcessos}"><br>
        <strong><i>DADOS DA ARMA</i></strong> <br>
        <label for="fabricante-${i}">IDENTIFICAÇÃO DO FABRICANTE: </label>
        <select name="fabricante-${i}" id="fabricante-${qtdProcessos}">
            <option value="TAURUS S/A">TAURUS S/A</option>    
            <option value="GLOCK">GLOCK</option>
            <option value="CBC">CBC</option>
            <option value="IMBEL">IMBEL</option>
        </select> <br>
        <label for="fornecedor-${i}">IDENTIFICAÇÃO DO VENDEDOR: </label><input type="text" size="65" name="fornecedor-${i}" id="fornecedor-${qtdProcessos}" oninput="procurarFornecedor(this.value, ${qtdProcessos})"><br>
        <ul class="list-group" id="lista-fornecedores-${qtdProcessos}">
        </ul>
        <label for="end-fornecedor-${i}">ENDEREÇO: </label><input type="text" name="end-fornecedor-${i}" id="end-fornecedor-${qtdProcessos}"
            size="80"> <br>
        <label for="cnpj-${i}">CNPJ: </label> <input onblur="criarFornecedor(${qtdProcessos})" oninput="mascaraCNPJ(this.id)" placeholder="SOMENTE NÚMEROS" type="text" size="17" name="cnpj-${i}" id="cnpj-${qtdProcessos}"> <br>
        <label>NÚMERO DA NOTA FISCAL: <input placeholder="somente os números" name="n-nf-${i}" type="number"> <span style="padding: 10px;"></span> EMISSÃO:<input
                type="date" name="emissao-dt-${i}" id="emissao-dt-${qtdProcessos}"></label> <br>
        <label for="especie-${i}">ESPÉCIE: </label>
        <select name="especie-${i}" id="especie-${qtdProcessos}">
            <option value="2">PISTOLA</option>
            <option value="1">ESPINGARDA</option>
            <option value="3">REVÓLVER</option>
            <option value="4">CARABINA/FUZIL</option>
        </select> <br>
        <label for="marca-${i}">MARCA: </label>
        <select name="marca-${i}" id="marca-${qtdProcessos}">
            <option value="1">TAURUS S/A</option>    
            <option value="24">GLOCK</option>
            <option value="4">CBC</option>
            <option value="3">IMBEL</option>
        </select> <br>
        <label for="modelo-${i}">MODELO: </label> <input autocomplete="off" oninput="procurarModelos(this.value,${qtdProcessos})" type="text" maxlength="15" name="modelo-${i}" id="modelo-${qtdProcessos}"> <br>
        <ul class="list-group" id="lista-modelos-${qtdProcessos}">
        </ul>
        <label for="serie-${i}">NÚMERO DE SÉRIE: </label><input placeholder="AAA 999999" type="text" name="serie-${i}" id="serie-${qtdProcessos}"> <br>
        <label for="calibre-${i}">CALIBRE: </label> <input type="text" name="calibre-${i}" id="calibre-${qtdProcessos}"> <br>
        <label for="muni-${i}">CAPACIDADE DE MUNIÇÃO: </label><input type="number" name="muni-${i}" id="muni-${qtdProcessos}"> <br>
        <label for="funcionamento-${i}">TIPO DE FUNCIONAMENTO: </label>
        <select name="funcionamento-${i}" id="funcionamento-${qtdProcessos}">
            <option value="2">Semi-automático</option>
            <option value="3">Repetição</option>
            <option value="4">Tiro simples</option>
            <option value="1">Automático</option>
        </select> <br>
        <label for="canos-${i}">QUANTIDADE DE CANOS: </label><input type="number" name="canos-${i}" id="canos-${qtdProcessos}"> <br>
        <label> COMPRIMENTO DO CANO: <input type="text" name="tam-cano-${i}" id="tam-cano-${qtdProcessos}" size="5"> <select name="uni-medida-${i}" id="uni-medida-${qtdProcessos}">
                <option value="MM">mm</option>
                <option value="CM">cm</option>
                <option value="POL">pol</option>
            </select>
        </label><br>
        <label for="alma-${i}">TIPO DE ALMA: </label>
        <select name="alma-${i}" onblur="tipoAlma(${qtdProcessos})" id="alma-${qtdProcessos}">
            <option value="R">Raiada</option>
            <option value="L">Lisa</option>
        </select>
        <span id="dados-raias-${qtdProcessos}">
        <label for="n-raias-${i}">NUMERO DE RAIAS: </label><input type="number"
            name="n-raias-${i}" id="n-raias-${qtdProcessos}"
            onfocus="unidadeDeMedida(${qtdProcessos})"
            style="width: 70px">
        <label for="sentido-raias-${i}">SENTIDO DAS RAIAS: </label>
        <select name="sentido-raias-${i}" id="sentido-raias-${qtdProcessos}">
            <option value="D">À Direita</option>
            <option value="E">À Esquerda</option>
        </select>
        </span> <br>
        <label for="acabamento-${i}">ACABAMENTO: </label><input oninput="procurarAcabamento(this.value, ${qtdProcessos})" onblur="criarModelo(${qtdProcessos})" type="text" name="acabamento-${i}" id="acabamento-${qtdProcessos}"> <br>
        <ul class="list-group" id="lista-acabamento-${qtdProcessos}">
        </ul>
        <label for="pais-${i}">PAÍS DE FABRICAÇÃO: </label>
        <select name="pais-${i}" id="pais-${qtdProcessos}">
            <option value="1">Brasil</option>
            <option value="20">EUA</option>
            <option value="175">Turquia</option>
            <option value="92">Áustria</option>
        </select>
    </form>
        <p style="font-weight: bold;text-decoration: underline">LEGISLAÇÃO UTILIZADA: LEI 10.826 de 22/12/2003, DECRETO
            5.123 de 01/07/2004 e PORTARIA 069 GabCmdo Geral PMPa de 24/04/2019.</p>
        <br>
        <br>
    `
        popularCidades(qtdProcessos)
        if (tipo === 'industria') {
            getFornecedores().then(() => {
                for (let i = 1; i <= DadosGerais.qtdProcessosInd; i++) {
                    preencherInformacoesFornecedor(i, '5eb048e67645d01fe07a7dc0')
                }
            })
        }
    }
}

const formTransf = () => {
    let div = document.getElementById('lista-transferencia');
    div.innerHTML = ''
    for (let i = 1; i <= DadosGerais.qtdProcessosTransf; i++) {
        qtdProcessos++;
        const nProcesso = ("00" + i).slice(-3)
        div.innerHTML += `
        <form id="transferencia-${i}">
        <label for="tipo-transf-${i}">${nProcesso}-TIPO DE TRANSFERÊNCIA: </label>
        <select name="tipo-transf-${i}" id="tipo-transf-${qtdProcessos}" onchange="identificadorSI(${qtdProcessos})">
            <option value="sigma">SIGMA/SIGMA</option>
            <option value="sinarm">SINARM/SIGMA</option>
            <option value="sigma">SIGMA/SINARM</option>
        </select>
        <br>
        <label for="cedente-${i}">DE: </label> <input type="text"
            name="cedente-${i}" id="cedente-${qtdProcessos}" size="80"> <br>
        <label for="profissao-cedente-${i}">PROFISSÃO: </label><input type="text"
            name="profissao-cedente-${i}" id="profissao-cedente-${qtdProcessos}" size="30">
        <br>
        <label for="cpf-cedente-${i}">CPF: </label> <input type="text"
            name="cpf-cedente-${i}" id="cpf-cedente-${qtdProcessos}" size="11" oninput="mascaraCPF(this.id)" maxlength="14">
        <label for="rg-cedente-${i}">RG: </label> <input type="text" size="10"
            name="rg-cedente-${i}" id="rg-cedente-${qtdProcessos}">
        <label for="data-exp-rg-${i}">Data de Exp.: </label> <input type="date"
            name="data-exp-cedente-${i}" id="data-exp-cedente-${qtdProcessos}"
            width="10px   ">
        <label for="emissor-cedente-${i}">Org. Emissor: </label> <input type="text"
            name="emissor-cedente-${i}" id="emissor-cedente-${qtdProcessos}"><br>
            <strong style="padding: 0; margin: 0"><i>DADOS DO INTERESSADO</i></strong> <br>
            <label for="nome-${i}">${nProcesso}-NOME: </label>
            <input type="text" size="90" onblur="pegarRg(${qtdProcessos})" name="nome-${i}" id="nome-${qtdProcessos}" placeholder="FULANO - SUB TEN PM RG 99999"><br>
            <label> FILIAÇÃO: <input type="text" size="30" name="pai-${i}" id="pai-${qtdProcessos}" onblur="this.style.width = (this.value.length * 10) + 'px';" placeholder="PAI">
                <span style="font-weight: normal;" id="e-${qtdProcessos}">e</span> <input type="text" onblur="this.size = this.value.length + 6;" placeholder="MAE" size="50" name="mae-${i}" id="mae-${qtdProcessos}">
            </label><br>
            <label> DATA E LOCAL DE NASCIMENTO: <input type="date" onfocus="paiMae(${qtdProcessos});" name="nascimento-${i}" id="nascimento-${qtdProcessos}"> <span style="padding-left:10px"></span> <input
                    type="text" name="local-nascimento-${i}" size="40" placeholder="CIDADE NASCIMENTO-ESTADO">
            </label><br>
            <div id="dados-endereco-${qtdProcessos}">
                <label> COMPLEMENTE E Nº DA CASA/APT:</label><input type="text" id="numero-${qtdProcessos}">
                <label> CEP:</label> <input type="text" id="cep-${qtdProcessos}">
                <br>
                <button class="btn btn-primary" type="button" onclick="completarEnd(${qtdProcessos})">CEP e Nº OK</button>
                <button class="btn btn-danger" type="button" onclick="document.getElementById('dados-endereco-${qtdProcessos}').remove()">Inserir endereço manualmente</button>
                <br>
            </div>
            <label> END.RESID: <input placeholder="SEM A CIDADE" type="text" size="80" name="residencia-${i}" id="residencia-${qtdProcessos}" onblur="this.size = this.value.length + 3;"> <select  name="cidade-${i}" id="cidade-${qtdProcessos}" style="height: 34px;width:200px"></select>
            </label><br>
            <label> END. TRABALHO: </label><i>Rdv. Augusto Montenegro, KM 09, 8401, Parque Guajará, CEP: 66821-000, Belém-PA</i> <br>
            <label> PROFISSÃO: </label> <i>Policial Militar</i> <br>
            <label for="rg-${i}"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number" name="rg-${i}" id="rg-${qtdProcessos}">
            <br>
            <label for="emissao-${i}">
            DATA DA EMISSÃO: </label> <input type="date" onfocus="completarEndRes(${qtdProcessos})" name="emissao-${i}" id="emissao-${qtdProcessos}"> <br>
            <label for="expedidor-${i}">ORGÃO EXPEDIDOR/UF: </label> <span id="expedidor-${qtdProcessos}"><i>PMPA</i></span> <br>
            <label for="cpf-${i}">CPF: </label><input maxlength="14" oninput="mascaraCPF(this.id)" placeholder="SOMENTE NÚMEROS" type="text" name="cpf-${i}" id="cpf-${qtdProcessos}"><br>
            <strong><i>DADOS DA ARMA</i></strong> <br>
            <label for="identificador-${i}" id="identificador-${qtdProcessos}-label">Nº SGIMA: </label>
            <input type="text" name="identificador-${i}" id="identificador-${qtdProcessos}" style="width:280px"><br>
            <label for="fabricante-${i}">IDENTIFICAÇÃO DO FABRICANTE: </label>
            <select name="fabricante-${i}" id="fabricante-${qtdProcessos}">
                <option value="TAURUS S/A">TAURUS S/A</option>    
                <option value="GLOCK">GLOCK</option>
                <option value="CBC">CBC</option>
                <option value="IMBEL">IMBEL</option>
            </select> <br>
            <label for="fornecedor-${i}">IDENTIFICAÇÃO DO VENDEDOR: </label><input type="text" size="65" name="fornecedor-${i}" id="fornecedor-${qtdProcessos}" oninput="procurarFornecedor(this.value, ${qtdProcessos})"><br>
            <ul class="list-group" id="lista-fornecedores-${qtdProcessos}">
            </ul>
            <label for="end-fornecedor-${i}">ENDEREÇO: </label><input type="text" name="end-fornecedor-${i}" id="end-fornecedor-${qtdProcessos}"
                size="80"> <br>
            <label for="cnpj-${i}">CNPJ: </label> <input onblur="criarFornecedor(${qtdProcessos})" placeholder="SOMENTE NÚMEROS" type="text" size="17" name="cnpj-${i}" id="cnpj-${qtdProcessos}"> <br>
            <label>NÚMERO DA NOTA FISCAL: <input placeholder="somente os números" name="n-nf-${i}" type="text"></label> <br>
            <label for="especie-${i}">ESPÉCIE: </label>
            <select name="especie-${i}" id="especie-${qtdProcessos}">
                <option value="2">PISTOLA</option>
                <option value="1">ESPINGARDA</option>
                <option value="3">REVÓLVER</option>
                <option value="4">CARABINA/FUZIL</option>
            </select> <br>
            <label for="marca-${i}">MARCA: </label>
            <select name="marca-${i}" id="marca-${qtdProcessos}">
                <option value="1">TAURUS S/A</option>    
                <option value="24">GLOCK</option>
                <option value="4">CBC</option>
                <option value="3">IMBEL</option>
            </select> <br>
            <label for="modelo-${i}">MODELO: </label> <input autocomplete="off" oninput="procurarModelos(this.value,${qtdProcessos})" type="text" maxlength="15" name="modelo-${i}" id="modelo-${qtdProcessos}"> <br>
            <ul class="list-group" id="lista-modelos-${i}">
            </ul>
            <label for="serie-${i}">NÚMERO DE SÉRIE: </label><input placeholder="AAA 999999" type="text" name="serie-${i}" id="serie-${qtdProcessos}"> <br>
            <label for="calibre-${i}">CALIBRE: </label> <input type="text" name="calibre-${i}" id="calibre-${qtdProcessos}"> <br>
            <label for="muni-${i}">CAPACIDADE DE MUNIÇÃO: </label><input type="number" name="muni-${i}" id="muni-${qtdProcessos}"> <br>
            <label for="funcionamento-${i}">TIPO DE FUNCIONAMENTO: </label>
            <select name="funcionamento-${i}" id="funcionamento-${qtdProcessos}">
                <option value="2">Semi-automático</option>
                <option value="3">Repetição</option>
                <option value="4">Tiro simples</option>
                <option value="1">Automático</option>
            </select> <br>
            <label for="canos-${i}">QUANTIDADE DE CANOS: </label><input type="number" name="canos-${i}" id="canos-${qtdProcessos}"> <br>
            <label> COMPRIMENTO DO CANO: <input type="text" name="tam-cano-${i}" id="tam-cano-${qtdProcessos}" size="5"> <select name="uni-medida-${i}" id="uni-medida-${qtdProcessos}">
                    <option value="MM">mm</option>
                    <option value="CM">cm</option>
                    <option value="POL">pol</option>
                </select>
            </label><br>
            <label for="alma-${i}">TIPO DE ALMA: </label>
            <select name="alma-${i}" onblur="tipoAlma(${qtdProcessos})" id="alma-${qtdProcessos}">
                <option value="R">Raiada</option>
                <option value="L">Lisa</option>
            </select>
            <span id="dados-raias-${qtdProcessos}">
            <label for="n-raias-${i}">NUMERO DE RAIAS: </label><input type="number"
                name="n-raias-${i}" id="n-raias-${qtdProcessos}"
                onfocus="unidadeDeMedida(${qtdProcessos})"
                style="width: 70px">
            <label for="sentido-raias-${i}">SENTIDO DAS RAIAS: </label>
            <select name="sentido-raias-${i}" id="sentido-raias-${qtdProcessos}">
                <option value="D">À Direita</option>
                <option value="E">À Esquerda</option>
            </select>
            </span> <br>
            <label for="acabamento-${i}">ACABAMENTO: </label><input onblur="criarModelo(${qtdProcessos})" type="text" name="acabamento-${i}" id="acabamento-${qtdProcessos}"> <br>
            <ul class="list-group" id="lista-acabamento-${qtdProcessos}">
            </ul>
            <label for="pais-${i}">PAÍS DE FABRICAÇÃO: </label>
            <select name="pais-${i}" id="pais-${qtdProcessos}">
                <option value="1">Brasil</option>
                <option value="20">EUA</option>
                <option value="175">Turquia</option>
            </select>
            </form>
            <p style="font-weight: bold;text-decoration: underline">LEGISLAÇÃO UTILIZADA: LEI 10.826 de 22/12/2003, DECRETO
                5.123 de 01/07/2004 e PORTARIA 069 GabCmdo Geral PMPa de 24/04/2019.</p>
            <br>
            <br>
        `
        popularCidades(qtdProcessos);
    }
}

const formPAF_CRAF = tipo => {
    let div = document.getElementById(`lista-${tipo}`);
    div.innerHTML = ''
    for (let i = 1; i <= eval(`DadosGerais.qtdProcessos${tipo.toUpperCase()}`); i++) {
        qtdProcessos++;
        div.innerHTML +=
            `
            <form id="${tipo}-${i}">
        ${i} - <input type="text" size="70" name="nome-${tipo}-${i}" placeholder="NOME - POST/GRAD RG"> - 
            <label for="cpf-${tipo}-${i}">CPF:</label> <input maxlength="14" name="cpf-${tipo}-${i}" id="cpf-${tipo}-${qtdProcessos}" type="text" size="11" oninput="mascaraCPF(this.id)">
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
                        <td><input type="text" style="width: 120px" name="bar-${tipo}-${i}"></td>
                        <td><input type="text" style="width: 80px" name="esp-${tipo}-${i}"></td>
                        <td><input type="text" style="width: 80px" name="fun-${tipo}-${i}"></td>
                        <td><input type="text" style="width: 95px" name="acab-${tipo}-${i}"></td>
                        <td><input type="text" style="width: 75px" name="marca-${tipo}-${i}"></td>
                        <td><input type="text" style="width: 60px" name="cal-${tipo}-${i}"></td>
                        <td><input type="text" style="width: 90px" name="mod-${tipo}-${i}"></td>
                        <td><input type="text" style="width: 60px" name="capac-${tipo}-${i}"></td>
                        <td><input type="text" style="width: 55px" name="cano-${tipo}-${i}"></td>
                        <td><input type="text" style="width: 70px" name="pais-${tipo}-${i}"></td>
                        <td><input type="text" style="width: 80px" name="n-serie-${tipo}-${i}"></td>
                        <td><input type="text" style="width: 60px" name="sigma-${tipo}-${i}"></td>
                    </tr>
                </tbody>
            </table>
            <br>
            </form>
        `
    }
}

const formStatus = () => {
    let div = document.getElementById('lista-status');
    div.innerHTML = ''
    for (let i = 1; i <= DadosGerais.qtdProcessosStatus; i++) {
        qtdProcessos++;
        div.innerHTML +=
            `
            <form id="status-${i}">
        ${i} - <input type="text" size="60" name="nome-status-${i}" placeholder="NOME - POST/GRAD RG"> - 
            <label for="cpf-status-${i}">CPF:</label> <input maxlength="14" name="cpf-status-${i}" id="cpf-status-${qtdProcessos}" type="text" size="11" oninput="mascaraCPF(this.id)">
            <table border="1" class="status">
                <thead>
                    <tr>
                        <th>BOP</th>
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
                        <td><input type="text" style="width: 100px" name="bop-status-${i}"></td>
                        <td><input type="text" style="width: 85px" name="bar-status-${i}"></td>
                        <td><input type="text" style="width: 80px" name="esp-status-${i}"></td>
                        <td><input type="text" style="width: 80px" name="fun-status-${i}"></td>
                        <td><input type="text" style="width: 95px" name="acab-status-${i}"></td>
                        <td><input type="text" style="width: 75px" name="marca-status-${i}"></td>
                        <td><input type="text" style="width: 60px" name="cal-status-${i}"></td>
                        <td><input type="text" style="width: 70px" name="mod-status-${i}"></td>
                        <td><input type="text" style="width: 60px" name="capac-status-${i}"></td>
                        <td><input type="text" style="width: 55px" name="cano-status-${i}"></td>
                        <td><input type="text" style="width: 70px" name="pais-status-${i}"></td>
                        <td><input type="text" style="width: 80px" name="n-serie-status-${i}"></td>
                        <td><input type="text" style="width: 60px" name="sigma-status-${i}"></td>
                    </tr>
                </tbody>
            </table>
            <br>
            </form>
    `
    }
}

const formManutencao = () => {
    let div = document.getElementById('lista-manutencao')
    div.innerHTML = ''
    for (let i = 1; i <= DadosGerais.qtdProcessosManu; i++) {
        qtdProcessos++;
        const nProcesso = ("00" + i).slice(-3)
        div.innerHTML +=
            `
            <form id="manutencao-${i}">
       <label for="nome-manu">${nProcesso}-NOME: </label> <input type="text" onblur="pegarRg(${qtdProcessos})" name="nome-manu-${i}" size="80"> <br>
            <label for="om-manu">OPM: </label> <input type="text" name="om-manu-${i}" size="30"><br>
            <label for="objeto-manu">OBJETO: </label> <input type="text" size="90" name="objeto-manu-${i}"><br>
            DADOS DA ARMA A SER MANUTENINDO.
            <table class="table" border="1" id="tb-manutencao">
                <thead>
                    <tr>
                        <th>ESPÉCIE</th>
                        <th>MARCA</th>
                        <th>CAL. /Nº SÉRIE</th>
                        <th>Nº SIGMA</th>
                        <th>PROCEDIMENTO</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th><input type="text" name="esp-manu-${i}"></th>
                        <th><input type="text" name="marca-manu-${i}"></th>
                        <th><input type="text" name="cal-serie-manu-${i}"></th>
                        <th><input type="text" name="sigma-manu-${i}"></th>
                        <th><textarea class="procedimento-manu" name="procedimento-manu-${i}" cols="25" rows="5"></textarea></th>
                    </tr>
                </tbody>
            </table>
            </form>
        `
    }
}

const formRetificacao = () => {
    let div = document.getElementById('lista-retificacao')
    div.innerHTML = ''
    for(let i = 1; i <= DadosGerais.qtdProcessosRetificacao; i++) {
        qtdProcessos++;
        let nProcesso = ("00" + i).slice(-3)
        div.innerHTML += `
        <form id="retificacao-${i}">
            <label>${nProcesso}-DO: </label> <input type="text" name="nome-${i}" size="80" id="nome-${qtdProcessos}">
            <br>
            <label>NO BAR:</label> <input type="text" name="boletim-${i}" id="boletim-${qtdProcessos}">
        </form>
        <br>
        `
    }
}
