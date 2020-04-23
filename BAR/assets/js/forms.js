const formAquicisao = (qtd, tipo) => {
    for (let i = 1; i <= qtd; i++) {
        qtdProcessos++;
        let nProcesso = ("00" + i).slice(-3);
        let form = document.getElementById('lista-' + tipo);
        form.innerHTML += `
        <span class="no-print"><label for="tombamento-${qtdProcessos}">TOMBAMENTO</label> <input type="text" placeholder="999/9999" name="tombamento-${qtdProcessos}" id="tombamento-${qtdProcessos}"></span><br>
        <label for="nome-${qtdProcessos}">${nProcesso}-NOME: </label>
        <input type="text" size="90" onblur="pegarRg(${qtdProcessos})" name="nome-${qtdProcessos}" id="nome-${qtdProcessos}"><br>
        <label> FILIAÇÃO: <input type="text" size="30" name="pai-${qtdProcessos}" id="pai-${qtdProcessos}" onblur="this.size = this.value.length;" placeholder="PAI">
            <span style="font-weight: normal;" id="e-${qtdProcessos}">e</span> <input type="text" onblur="this.size = this.value.length + 6;" placeholder="MAE" size="30" name="mae-${qtdProcessos}" id="mae-${qtdProcessos}">
        </label><br>
        <label> DATA E LOCAL DE NASCIMENTO: <input type="date" onfocus="pai(${qtdProcessos});mae(${qtdProcessos})" name="nascimento-${qtdProcessos}" id="nascimento-${qtdProcessos}"> <span style="padding-left:10px"></span> <input
                type="text" name="local-nascimento-${qtdProcessos}" placeholder="CIDADE NASCIMENTO">
        </label><br>
        <label> END.RESID: <input type="text" size="70" name="residencia-${qtdProcessos}" id="residencia-${qtdProcessos}" onblur="this.size = this.value.length + 6;"> <select name="cidade-${qtdProcessos}" id="cidade-${qtdProcessos}" style="height: 30px"></select>
        </label><br>
        <label> END. TRABALHO: <i>Rdv. Augusto Montenegro, KM 09, 8401, Parque Guajará, CEP: 66821-000, Belém-PA</i>
        </label> <br>
        <label> PROFISSÃO: </label> <i>Policial Militar</i> <br>
        <label for="rg-${qtdProcessos}"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number" name="rg-${qtdProcessos}" id="rg-${qtdProcessos}">
        <br>
        <label for="emissao-${qtdProcessos}">
        DATA DA EMISSÃO: </label> <input type="date" name="emissao-${qtdProcessos}" id="emissao-${qtdProcessos}" onfocus="completarEndRes(${qtdProcessos})"> <br>
        <label for="expedidor-${qtdProcessos}">ORGÃO EXPEDIDOR/UF: </label> <span id="expedidor-${qtdProcessos}"><i>PMPA</i></span> <br>
        <label for="cpf-${qtdProcessos}">CPF: </label><input type="text" name="cpf-${qtdProcessos}" id="cpf-${qtdProcessos}"><br>
        <strong><i>DADOS DA ARMA</i></strong> <br>
        <label for="fabricante-${qtdProcessos}">IDENTIFICAÇÃO DO FABRICANTE: </label>
        <select name="fabricante-${qtdProcessos}" id="fabricante-${qtdProcessos}">
            <option value="GLOCK">GLOCK</option>
            <option value="TAURUS S/A">TAURUS S/A</option>
            <option value="CBC">CBC</option>
            <option value="IMBEL">IMBEL</option>
        </select> <br>
        <label for="fornecedor-${qtdProcessos}">IDENTIFICAÇÃO DO VENDEDOR: </label><input type="text" size="65" name="fornecedor-${qtdProcessos}" id="fornecedor-${qtdProcessos}"> <br>
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
            <option value="4">CARABINA/FUZIL</option>
        </select> <br>
        <label for="marca-${qtdProcessos}">MARCA: </label>
        <select name="marca-${qtdProcessos}" id="marca-${qtdProcessos}">
            <option value="24">GLOCK</option>
            <option value="1">TAURUS S/A</option>
            <option value="4">CBC</option>
            <option value="3">IMBEL</option>
        </select> <br>
        <label for="modelo-${qtdProcessos}">MODELO: </label> <input type="text" maxlength="15" name="modelo-${qtdProcessos}" id="modelo-${qtdProcessos}"> <br>
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
            onfocus="unidadeDeMedida(${qtdProcessos})"
            style="width: 70px">
        <label for="sentido-raias-${qtdProcessos}">SENTIDO DAS RAIAS: </label>
        <select name="sentido-raias-${qtdProcessos}" id="sentido-raias-${qtdProcessos}">
            <option value="D">À Direita</option>
            <option value="E">À Esquerda</option>
        </select>
        </span> <br>
        <label for="acabamento-${qtdProcessos}">ACABAMENTO: </label><input type="text" name="acabamento-${qtdProcessos}" id="acabamento-${qtdProcessos}"> <br>
        <label for="pais-${qtdProcessos}">PAÍS DE FABRICAÇÃO: </label>
        <select name="pais-${qtdProcessos}" id="pais-${qtdProcessos}">
            <option value="1">Brasil</option>
            <option value="20">EUA</option>
            <option value="175">Turquia</option>
        </select>
        <p style="font-weight: bold;text-decoration: underline">LEGISLAÇÃO UTILIZADA: LEI 10.826 de 22/12/2003, DECRETO
            5.123 de 01/07/2004 e PORTARIA 069 GabCmdo Geral PMPa de 24/04/2019.</p>
        <br>
        <br>
    `
        popularCidades(qtdProcessos)
    }
}

const formTransf = () => {
    for (let i = 1; i <= qtdProcessosTransf; i++) {
        qtdProcessos++;
        const nProcesso = ("00" + i).slice(-3)
        let form = document.getElementById('lista-transferencia');
        form.innerHTML += `
        <span class="no-print"><label for="tombamento-${qtdProcessos}">TOMBAMENTO</label> <input
                type="text" placeholder="999/9999" name="tombamento-${qtdProcessos}"
                id="tombamento-${qtdProcessos}"></span><br>
        <label for="tipo-transf-${qtdProcessos}">${nProcesso}-TIPO DE TRANSFERÊNCIA: </label>
        <select name="tipo-transf-${qtdProcessos}" id="tipo-transf-${qtdProcessos}">
            <option value="sigma/sigma">SIGMA/SGIMA</option>
            <option value="sinarm/sigma">SINARM/SGIMA</option>
            <option value="sigma/sinarm">SIGMA/SINARM</option>
        </select>
        <br>
        <label for="cedente-${qtdProcessos}">DE: </label> <input type="text"
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
        <input type="text" size="90" onblur="pegarRg(${qtdProcessos})" name="nome-${qtdProcessos}" id="nome-${qtdProcessos}"><br>
        <label> FILIAÇÃO: <input type="text" size="30" name="pai-${qtdProcessos}"
                id="pai-${qtdProcessos}" onblur="this.size = this.value.length + 6;"
   placeholder="PAI">
            <span style="font-weight: normal;" id="e-${qtdProcessos}">e</span> <input type="text"
                onblur="this.size = this.value.length + 6;" placeholder="MAE"
                size="30" name="mae-${qtdProcessos}" id="mae-${qtdProcessos}">
        </label><br>
        <label> DATA E LOCAL DE NASCIMENTO: <input type="date" onfocus="pai(${qtdProcessos});mae(${qtdProcessos})" name="nascimento-${qtdProcessos}"
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
            name="rg-${qtdProcessos}" id="rg-${qtdProcessos}">
        <br>
        <label for="emissao-${qtdProcessos}"> DATA DA EMISSÃO: </label> <input type="date"
            name="emissao-${qtdProcessos}" id="emissao-${qtdProcessos}" onfocus="completarEndRes(${qtdProcessos})"> <br>
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
            <option value="3">IMBEL</option>
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
            <option value="4">CARABINA/FUZIL</option>
        </select> <br>
        <label for="marca-${qtdProcessos}">MARCA: </label>
        <select name="marca-${qtdProcessos}" id="marca-${qtdProcessos}">
            <option value="24">GLOCK</option>
            <option value="1">TAURUS S/A</option>
            <option value="4">CBC</option>
            <option value="3">IMBEL</option>
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
}

const formPAF = () => {
    for (let i = 1; i <= qtdProcessosPAF; i++) {
        qtdProcessos++;
        let form = document.getElementById('lista-paf');
        form.innerHTML +=
            `
        ${i} - <input type="text" size="70" onblur="pegarRg(${qtdProcessos})" name="nome-paf-${qtdProcessos}" placeholder="NOME - POST/GRAD RG"> - 
            <label for="cpf-paf-${qtdProcessos}">CPF:</label> <input name="cpf-paf-${qtdProcessos}" id="cpf-paf-${qtdProcessos}" type="text" size="11">
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
            <br>
        `
    }
}

const formStatus = () => {
    for (let i = 1; i <= qtdProcessosStatus; i++) {
        qtdProcessos++;
        let form = document.getElementById('lista-status');
        form.innerHTML +=
            `
        ${i} - <input type="text" size="70" onblur="pegarRg(${qtdProcessos})" name="nome-status-${qtdProcessos}" placeholder="NOME - POST/GRAD RG"> - 
            <label for="cpf-status-${qtdProcessos}">CPF:</label> <input name="cpf-status-${qtdProcessos}" id="cpf-status-${qtdProcessos}" type="text" size="11">
            <table border="1">
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
                        <td><input type="text" onblur="this.size = this.value.length + 3" name="bop-status-${qtdProcessos}"></td>
                        <td><input type="text" onblur="this.size = this.value.length" name="bar-status-${qtdProcessos}"></td>
                        <td><input type="text" onblur="this.size = this.value.length + 1" name="esp-status-${qtdProcessos}"></td>
                        <td><input type="text" onblur="this.size = this.value.length + 3" name="fun-status-${qtdProcessos}"></td>
                        <td><input type="text" onblur="this.size = this.value.length" name="acab-status-${qtdProcessos}"></td>
                        <td><input type="text" onblur="this.size = this.value.length" name="marca-status-${qtdProcessos}"></td>
                        <td><input type="text" onblur="this.size = this.value.length" name="cal-status-${qtdProcessos}"></td>
                        <td><input type="text" onblur="this.size = this.value.length" name="mod-status-${qtdProcessos}"></td>
                        <td><input type="text" onblur="this.size = this.value.length" name="capac-status-${qtdProcessos}"></td>
                        <td><input type="text" onblur="this.size = this.value.length" name="cano-status-${qtdProcessos}"></td>
                        <td><input type="text" onblur="this.size = this.value.length" name="pais-status-${qtdProcessos}"></td>
                        <td><input type="text" onblur="this.size = this.value.length" name="n-serie-status-${qtdProcessos}"></td>
                        <td><input type="text" onblur="this.size = this.value.length" name="sigma-status-${qtdProcessos}"></td>
                    </tr>
                </tbody>
            </table>
            <br>
    `
    }
}

const formManutencao = () => {
    for (let i = 1; i <= qtdProcessosMan; i++) {
        qtdProcessos++;
        let form = document.getElementById('lista-manutencao')
        form.innerHTML +=
            `
       <label for="nome-manu">${("0" + i).slice(-2)}-NOME: </label> <input type="text" onblur="pegarRg(${qtdProcessos})" name="nome-manu-${qtdProcessos}" size="80"> <br>
            <label for="om-manu">OM: </label> <input type="text" name="om-manu-${qtdProcessos}" size="30"><br>
            <label for="objeto-manu">OBJETO: </label> <input type="text" size="90" name="objeto-manu-${qtdProcessos}"><br>
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
                        <th><input type="text" name="esp-manu-${qtdProcessos}"></th>
                        <th><input type="text" name="marca-manu-${qtdProcessos}"></th>
                        <th><input type="text" name="cal-serie-manu-${qtdProcessos}"></th>
                        <th><input type="text" name="sigma-manu-${qtdProcessos}"></th>
                        <th><textarea name="procedimento-manu-${qtdProcessos}" cols="19" rows="4"></textarea></th>
                    </tr>
                </tbody>
            </table>
        `
    }
}

const formOf = () => {
    let tbody = document.getElementById('dados-adquirentes')
    const dados = JSON.parse(localStorage.listaProcessos)
    let linhaTabela = '';
    dados.forEach(dado => {
        linhaTabela += `<tr><td style="width: 25%;">${dado.nome}</td>`
        linhaTabela += `<td style="width: 15%;">${dado.cpf}</td>`
        linhaTabela += `<td style="width: 10%;">${dado.rg}</td>`
        linhaTabela += `<td style="width: 10%;">${dado.numSerie}</td>`
        linhaTabela += `<td style="width: 10%;">${dado.calibre}</td>`
        linhaTabela += `<td style="width: 10%;">${dado.fabricante}</td>`
        linhaTabela += `<td style="width: 20%;">${dado.bar}</td></tr>`
    })
    tbody.innerHTML += linhaTabela
}