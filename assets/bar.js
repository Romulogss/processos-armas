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
        if (ind.length > 0) num = '02';
        let armasComercio = document.getElementById('armas-do-comercio')
        armasComercio.innerHTML += `${num}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, SENDO  ${com}, ADQUIRIDAS ATRAVÉS DO COMÉRCIO.`;
        temProcessosComercio = true;
    } else {
        document.getElementById('comercio').remove();
        temProcessosComercio = false;
    }
    document.getElementById('informações-bar').remove()
}

const novoPM = tipo => {
    qtdProcessos += 1;
    n_processo = ("000" + qtdProcessos).slice(-4);
    let form = document.getElementById('lista-'+tipo);
    form.innerHTML += `
    <label for="nome-${qtdProcessos}"> ${qtdProcessos}-NOME: </label>
    <input type="text" size="90" id="nome-${qtdProcessos}"><br>
    <label> FILIAÇÃO: <input type="text" size="30" id="pai-${qtdProcessos}" oninput="this.size = this.value.length;">
        <span style="font-weight: normal;">e</span> <input type="text" size="30" id="mae-${qtdProcessos}"
            oninput="this.size = this.value.length;">
    </label><br>
    <label> DATA E LOCAL DE NASCIMENTO: <input type="date" id="nascimneto-${qtdProcessos}"> <span style="padding:10px"></span> <input
            type="text">
    </label><br>
    <label> END.RESID: <input type="text" size="30" id="residencia-${qtdProcessos}" oninput="this.size = this.value.length;"> <span
            style="padding:10px"></span> <input type="text" size="10" id="cidade-uf-${qtdProcessos}"
            oninput="this.size = this.value.length;" placeholder="CIDADE-UF">
    </label><br>
    <label> END. TRABALHO: <input type="text" size="30" oninput="this.size = this.value.length;">
    </label> <br>
    <label> PROFISSÃO: </label><input type="text" size="30" oninput="this.size = this.value.length;" id="prof-${qtdProcessos}"> <br>
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
        oninput="this.size = this.value.length;"> <br>
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
    <label> COMPRIMENTO DO CANO: <input type="number" id="tam-${qtdProcessos}-cano" size="3"> <select id="uni-medida-${qtdProcessos}">
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