let qtdProcessos = 0;
let temProcessosIndustria;
let temProcessosComercio;

const getDadosGerais = () => {
    const ind = document.getElementById('text-aux-ind').value
    const com = document.getElementById('text-aux-com').value
    console.log(ind, com);
    if (ind.length > 0) {
        let armasIndustria = document.getElementById('armas-da-industria')
        armasIndustria.innerHTML += `01. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, SENDO  ${ind}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;
        temProcessosIndustria = true;
    } else {
        document.getElementById('industria').remove();
        temProcessosIndustria = false;
    }
    if (com.length > 0) {
        let num = '01';
        if (ind.length > 0) num = '02'
        let armasComercio = document.getElementById('armas-do-comercio')
        armasComercio.innerHTML += `${num}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, SENDO  ${com}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;
        temProcessosComercio = true;
    } else {
        document.getElementById('comercio').remove();
        temProcessosComercio = false;
    }
    document.getElementById('informações-bar').remove()
}

const novoPM = () => {
    qtdProcessos += 1;
    if (temProcessosIndustria) {
        let form_ind = document.getElementById('processos-ind');
        form_ind.innerHTML += `
    <label for="nome-ind-${qtdProcessos}"> 001-NOME: </label>
    <input type="text" size="90" id="nome-ind-${qtdProcessos}"><br>
    <label> FILIAÇÃO: <input type="text" size="30" id="pai-ind-${qtdProcessos}" oninput="this.size = this.value.length;">
        <span style="font-weight: normal;">e</span> <input type="text" size="30" id="mae-ind-${qtdProcessos}"
            oninput="this.size = this.value.length;">
    </label><br>
    <label> DATA E LOCAL DE NASCIMENTO: <input type="date" id="nascimneto-ind-${qtdProcessos}"> <span style="padding:10px"></span> <input
            type="text">
    </label><br>
    <label> END.RESID: <input type="text" size="30" id="residencia-ind-${qtdProcessos}" oninput="this.size = this.value.length;"> <span
            style="padding:10px"></span> <input type="text" size="10" id="cidade-uf-ind-${qtdProcessos}"
            oninput="this.size = this.value.length;" placeholder="CIDADE-UF">
    </label><br>
    <label> END. TRABALHO: <input type="text" size="30" oninput="this.size = this.value.length;">
    </label> <br>
    <label> PROFISSÃO: </label><input type="text" size="30" oninput="this.size = this.value.length;" id="prof-ind-${qtdProcessos}"> <br>
    <label for="rg-ind-${qtdProcessos}"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number" id="rg-ind-${qtdProcessos}">
    <label for="emissao-ind-${qtdProcessos}">DATA DA EMISSÃO: </label> <input type="date" id="emissao-ind-${qtdProcessos}"> <br>
    <label for="expedidor-ind-${qtdProcessos}">ORGÃO EXPEDIDOR/UF: </label><input type="text" id="expedidor-ind-${qtdProcessos}"> <br>
    <label for="cpf-ind-${qtdProcessos}">CPF: </label><input type="text" id="cpf-ind-${qtdProcessos}"><br>
    <strong><i>DADOS DA ARMA</i></strong> <br>
    <label for="fabricante-ind-${qtdProcessos}">IDENTIFICAÇÃO DO FABRICANTE: </label>
    <select id="fabricante-ind-${qtdProcessos}">
        <option value="24">GLOCK</option>
        <option value="1">TAURUS/SA</option>
        <option value="4">CBC</option>
    </select> <br>
    <label for="fornecedor-ind-${qtdProcessos}">IDENTIFICAÇÃO DO FORNECEDOR: </label><input type="text" size="50" id="fornecedor-ind-${qtdProcessos}"> <br>
    <label for="end-fornecedor-ind-${qtdProcessos}">ENDEREÇO: </label><input type="text" id="end-fornecedor-ind-${qtdProcessos}"
        oninput="this.size = this.value.length;"> <br>
    <label for="cnpj-ind-${qtdProcessos}">CNPJ: </label> <input type="text" size="10" id="cnpj-ind-${qtdProcessos}"> <br>
    <label>NÚMERO DA NOTA FISCAL: <input type="number"> <span style="padding: 10px;"></span> EMISSÃO:<input
            type="date"></label> <br>
    <label for="especie-ind-${qtdProcessos}">ESPÉCIE: </label>
    <select id="especie-ind-${qtdProcessos}">
        <option value="2">PISTOLA</option>
        <option value="1">ESPINGARDA</option>
        <option value="3">REVÓLVER</option>
        <option value="4">CARABINA</option>
    </select> <br>
    <label for="marca-ind-${qtdProcessos}">MARCA: </label>
    <select id="marca-ind-${qtdProcessos}">
        <option value="24">GLOCK</option>
        <option value="1">TAURUS/SA</option>
        <option value="4">CBC</option>
    </select> <br>
    <label for="modelo-ind-${qtdProcessos}">MODELO: </label> <input type="text" id="modelo-ind-${qtdProcessos}"> <br>
    <label for="serie-ind-${qtdProcessos}">NÚMERO DE SÉRIE: </label><input type="text" id="serie-ind-${qtdProcessos}"> <br>
    <label for="calibre-ind-${qtdProcessos}">CALIBRE: </label> <input type="text" id="calibre-ind-${qtdProcessos}"> <br>
    <label for="muni-ind-${qtdProcessos}">CAPACIDADE DE MUNIÇÃO: </label><input type="number" id="muni-ind-${qtdProcessos}"> <br>
    <label for="funcionamento-ind-${qtdProcessos}">TIPO DE FUNCIONAMENTO: </label>
    <select id="funcionamento-ind-${qtdProcessos}">
        <option value="2">Semi-automático</option>
        <option value="1">Automático</option>
        <option value="3">Repetição</option>
        <option value="4">Tiro simples</option>
    </select> <br>
    <label for="canos-ind-${qtdProcessos}">QUANTIDADE DE CANOS: </label><input type="number" id="canos-ind-${qtdProcessos}"> <br>
    <label> COMPRIMENTO DO CANO: <input type="number" id="tam-ind-${qtdProcessos}-cano" size="3"> <select id="uni-medida-ind-${qtdProcessos}">
            <option value="MM">mm</option>
            <option value="CM">cm</option>
            <option value="POL">pol</option>
        </select>
    </label><br>
    <label for="alma-ind-${qtdProcessos}">TIPO DE ALMA: </label>
    <select id="alma-ind-${qtdProcessos}">
        <option value="R">Raiada</option>
        <option value="L">Lisa</option>
    </select>
    <label for="n-raias-ind-${qtdProcessos}">NUMERO DE RAIAS: </label><input type="number" id="n-raias-ind-${qtdProcessos}">
    <label for="sentido-raias-ind-${qtdProcessos}">SENTIDO DAS RAIAS: </label>
    <select id="sentido-raias-ind-${qtdProcessos}">
        <option>À Direita</option>
        <option>À Esquerda</option>
    </select> <br>
    <label for="acabamento-ind-${qtdProcessos}">ACABAMENTO: </label><input type="text" id="acabamento-ind-${qtdProcessos}"> <br>
    <label for="pais-ind-${qtdProcessos}">PAÍS DE FABRICAÇÃO: </label>
    <select id="pais-ind-${qtdProcessos}">
        <option value="1">Brasil</option>
        <option value="20">EUA</option>
    </select>
    <p style="font-weight: bold;text-decoration: underline">LEGISLAÇÃO UTILIZADA: LEI 10.826 de 22/12/2003, DECRETO
        5.123 de 01/07/2004 e PORTARIA 069 GabCmdo Geral PMPa de 24/04/2019.</p>
    <br>
    <br>
    `
    }
    if (temProcessosComercio) {
        let form_com = document.getElementById('processos-com');
        form_com.innerHTML += `
        <label for="nome-com-${qtdProcessos}"> 001-NOME: </label>
    <input type="text" size="90" id="nome-com-${qtdProcessos}"><br>
    <label> FILIAÇÃO: <input type="text" size="30" id="pai-com-${qtdProcessos}" oninput="this.size = this.value.length;">
        <span style="font-weight: normal;">e</span> <input type="text" size="30" id="mae-com-${qtdProcessos}"
            oninput="this.size = this.value.length;">
    </label><br>
    <label> DATA E LOCAL DE NASCIMENTO: <input type="date" id="nascimneto-com-${qtdProcessos}"> <span style="padding:10px"></span> <input
            type="text">
    </label><br>
    <label> END.RESID: <input type="text" size="30" id="residencia-com-${qtdProcessos}" oninput="this.size = this.value.length;"> <span
            style="padding:10px"></span> <input type="text" size="10" id="cidade-uf-com-${qtdProcessos}"
            oninput="this.size = this.value.length;" placeholder="CIDADE-UF">
    </label><br>
    <label> END. TRABALHO: <input type="text" size="30" oninput="this.size = this.value.length;">
    </label> <br>
    <label> PROFISSÃO: </label><input type="text" size="30" oninput="this.size = this.value.length;" id="prof-com-${qtdProcessos}"> <br>
    <label for="rg-com-${qtdProcessos}"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number" id="rg-com-${qtdProcessos}">
    <label for="emissao-com-${qtdProcessos}">DATA DA EMISSÃO: </label> <input type="date" id="emissao-com-${qtdProcessos}"> <br>
    <label for="expedidor-com-${qtdProcessos}">ORGÃO EXPEDIDOR/UF: </label><input type="text" id="expedidor-com-${qtdProcessos}"> <br>
    <label for="cpf-com-${qtdProcessos}">CPF: </label><input type="text" id="cpf-com-${qtdProcessos}"><br>
    <strong><i>DADOS DA ARMA</i></strong> <br>
    <label for="fabricante-com-${qtdProcessos}">IDENTIFICAÇÃO DO FABRICANTE: </label>
    <select id="fabricante-com-${qtdProcessos}">
        <option value="24">GLOCK</option>
        <option value="1">TAURUS/SA</option>
        <option value="4">CBC</option>
    </select> <br>
    <label for="fornecedor-com-${qtdProcessos}">IDENTIFICAÇÃO DO FORNECEDOR: </label><input type="text" size="50" id="fornecedor-com-${qtdProcessos}"> <br>
    <label for="end-fornecedor-com-${qtdProcessos}">ENDEREÇO: </label><input type="text" id="end-fornecedor-com-${qtdProcessos}"
        oninput="this.size = this.value.length;"> <br>
    <label for="cnpj-com-${qtdProcessos}">CNPJ: </label> <input type="text" size="10" id="cnpj-com-${qtdProcessos}"> <br>
    <label>NÚMERO DA NOTA FISCAL: <input type="number"> <span style="padding: 10px;"></span> EMISSÃO:<input
            type="date"></label> <br>
    <label for="especie-com-${qtdProcessos}">ESPÉCIE: </label>
    <select id="especie-com-${qtdProcessos}">
        <option value="2">PISTOLA</option>
        <option value="1">ESPINGARDA</option>
        <option value="3">REVÓLVER</option>
        <option value="4">CARABINA</option>
    </select> <br>
    <label for="marca-com-${qtdProcessos}">MARCA: </label>
    <select id="marca-com-${qtdProcessos}">
        <option value="24">GLOCK</option>
        <option value="1">TAURUS/SA</option>
        <option value="4">CBC</option>
    </select> <br>
    <label for="modelo-com-${qtdProcessos}">MODELO: </label> <input type="text" id="modelo-com-${qtdProcessos}"> <br>
    <label for="serie-com-${qtdProcessos}">NÚMERO DE SÉRIE: </label><input type="text" id="serie-com-${qtdProcessos}"> <br>
    <label for="calibre-com-${qtdProcessos}">CALIBRE: </label> <input type="text" id="calibre-com-${qtdProcessos}"> <br>
    <label for="muni-com-${qtdProcessos}">CAPACIDADE DE MUNIÇÃO: </label><input type="number" id="muni-com-${qtdProcessos}"> <br>
    <label for="funcionamento-com-${qtdProcessos}">TIPO DE FUNCIONAMENTO: </label>
    <select id="funcionamento-com-${qtdProcessos}">
        <option value="2">Semi-automático</option>
        <option value="1">Automático</option>
        <option value="3">Repetição</option>
        <option value="4">Tiro simples</option>
    </select> <br>
    <label for="canos-com-${qtdProcessos}">QUANTIDADE DE CANOS: </label><input type="number" id="canos-com-${qtdProcessos}"> <br>
    <label> COMPRIMENTO DO CANO: <input type="number" id="tam-com-${qtdProcessos}-cano" size="3"> <select id="uni-medida-com-${qtdProcessos}">
            <option value="MM">mm</option>
            <option value="CM">cm</option>
            <option value="POL">pol</option>
        </select>
    </label><br>
    <label for="alma-com-${qtdProcessos}">TIPO DE ALMA: </label>
    <select id="alma-com-${qtdProcessos}">
        <option value="R">Raiada</option>
        <option value="L">Lisa</option>
    </select>
    <label for="n-raias-com-${qtdProcessos}">NUMERO DE RAIAS: </label><input type="number" id="n-raias-com-${qtdProcessos}">
    <label for="sentido-raias-com-${qtdProcessos}">SENTIDO DAS RAIAS: </label>
    <select id="sentido-raias-com-${qtdProcessos}">
        <option>À Direita</option>
        <option>À Esquerda</option>
    </select> <br>
    <label for="acabamento-com-${qtdProcessos}">ACABAMENTO: </label><input type="text" id="acabamento-com-${qtdProcessos}"> <br>
    <label for="pais-com-${qtdProcessos}">PAÍS DE FABRICAÇÃO: </label>
    <select id="pais-com-${qtdProcessos}">
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

const salvar = () => {
    let mes = new Date().getMonth() + 1
    if (mes < 10) mes = '0' + mes;
    const data = new Date().getDate() + '/' + mes + '/' + new Date().getFullYear()
    const data_titulo = new Date().getDate() + '' + mes + '' + new Date().getFullYear()
    const hora = new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds();
    const hora_titulo = new Date().getHours() + '' + new Date().getMinutes() + '' + new Date().getSeconds();
    console.log(hora_titulo)
    const titulo = `CARGA-900000528-${data_titulo}-${hora_titulo}.txt`
    
    let teste = new Blob([`[REMETO][${data} ${hora}][${qtdProcessos}]`], { type: "text/plain;charset=ISO8859-1" });
    saveAs(teste, titulo);
}