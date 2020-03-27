const getQtdProcessos = () => {
    return document.getElementById('qtd').value;
}

const qtdProcessos = () => {
    const qtd = getQtdProcessos();
    document.getElementById('qtdProcessos').remove()
}

const getDadosGerais = () => {
    const ind = document.getElementById('text-aux-ind').value
    const com = document.getElementById('text-aux-com').value
    console.log(ind, com);
    if(ind.length > 0) {
        let armasIndustria = document.getElementById('armas-da-industria')
        armasIndustria.innerHTML += `01. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, SENDO  ${ind}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;
    }
    if(com.length > 0) {
        let num = '01';
        if(ind.length > 0) num = '02'
        let armasComercio = document.getElementById('armas-do-comercio')
        armasComercio.innerHTML += `${num}. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, SENDO  ${ind}, ADQUIRIDAS ATRAVÉS DO FABRICANTE.`;F
    }
    document.getElementById('informações-bar').remove()
}

const novoPM = () => {
    let form = document.getElementById('processos');
    form.innerHTML += `
    <label for="nome"> 001-NOME: </label>
                <input type="text" size="90" id="nome"><br>
                <label> FILIAÇÃO: <input type="text" size="30" id="pai" oninput="this.size = this.value.length;"> <span
                        style="font-weight: normal;">e</span> <input type="text" size="30" id="mae"
                        oninput="this.size = this.value.length;">
                </label><br>
                <label> DATA E LOCAL DE NASCIMENTO: <input type="date" id="nascimneto"> <span
                        style="padding:10px"></span> <input type="text">
                </label><br>
                <label> END.RESID: <input type="text" size="30" id="residencia"
                        oninput="this.size = this.value.length;"> <span style="padding:10px"></span> <input type="text"
                        size="10" id="cidade-uf" oninput="this.size = this.value.length;" placeholder="CIDADE-UF">
                </label><br>
                <label> END. TRABALHO: <input type="text" size="30" oninput="this.size = this.value.length;">
                </label> <br>
                <label> PROFISSÃO: </label><input type="text" size="30" oninput="this.size = this.value.length;"
                    id="prof"> <br>
                <label for="rg"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number" id="RG">
                <label for="emissao">DATA DA EMISSÃO: </label> <input type="date" id="emissao"> <br>
                <label for="expedidor">ORGÃO EXPEDIDOR/UF: </label><input type="text" id="expedidor"> <br>
                <label for="cpf">CPF: </label><input type="text" id="cpf"><br>
                <strong><i>DADOS DA ARMA</i></strong> <br>
                <label for="fabricante">IDENTIFICAÇÃO DO FABRICANTE: </label>
                <select id="fabricante">
                    <option value="24">GLOCK</option>
                    <option value="1">TAURUS/SA</option>
                    <option value="4">CBC</option>
                </select> <br>
                <label for="fornecedor">IDENTIFICAÇÃO DO FORNECEDOR: </label><input type="text" size="50"
                    id="fornecedor"> <br>
                <label for="end-fornecedor">ENDEREÇO: </label><input type="text" id="end-fornecedor"
                    oninput="this.size = this.value.length;"> <br>
                <label for="cnpj">CNPJ: </label> <input type="text" size="10" id="cnpj"> <br>
                <label>NÚMERO DA NOTA FISCAL: <input type="number"> <span style="padding: 10px;"></span> EMISSÃO:<input
                        type="date"></label> <br>
                <label for="especie">ESPÉCIE: </label>
                <select id="especie">
                    <option value="2">PISTOLA</option>
                    <option value="1">ESPINGARDA</option>
                    <option value="3">REVÓLVER</option>
                    <option value="4">CARABINA</option>
                </select> <br>
                <label for="marca">MARCA: </label>
                <select id="marca">
                    <option value="24">GLOCK</option>
                    <option value="1">TAURUS/SA</option>
                    <option value="4">CBC</option>
                </select> <br>
                <label for="modelo">MODELO: </label> <input type="text" id="marca"> <br>
                <label for="serie">NÚMERO DE SÉRIE: </label><input type="text" id="serie"> <br>
                <label for="calibre">CALIBRE: </label> <input type="text" id="calibre"> <br>
                <label for="muni">CAPACIDADE DE MUNIÇÃO: </label><input type="number" id="muni"> <br>
                <label for="funcionamento">TIPO DE FUNCIONAMENTO: </label>
                <select id="funcionamento">
                    <option value="2">Semi-automático</option>
                    <option value="1">Automático</option>
                    <option value="3">Repetição</option>
                    <option value="4">Tiro simples</option>
                </select> <br>
                <label for="canoss">QUANTIDADE DE CANOS: </label><input type="number" id="canos"> <br>
                <label> COMPRIMENTO DO CANO: <input type="number" id="tam-cano" size="3"> <select id="uni-medida">
                        <option value="MM">mm</option>
                        <option value="CM">cm</option>
                        <option value="POL">pol</option>
                    </select>
                </label><br>
                <label for="alma">TIPO DE ALMA: </label>
                <select id="alma">
                    <option value="R">Raiada</option>
                    <option value="L">Lisa</option>
                </select>
                <label for="n-raias">NUMERO DE RAIAS: </label><input type="number" id="n-raias">
                <label for="sentido-raias">SENTIDO DAS RAIAS: </label>
                <select id="sentido-raias">
                    <option>À Direita</option>
                    <option>À Esquerda</option>
                </select> <br>
                <label for="acabamento">ACABAMENTO: </label><input type="text" id="acabamento"> <br>
                <label for="pais">PAÍS DE FABRICAÇÃO: </label>
                <select id="pais">
                    <option value="1">Brasil</option>
                    <option value="20">EUA</option>
                </select>
                <p>LEGISLAÇÃO UTILIZADA: LEI 10.826 de 22/12/2003, DECRETO 5.123 de 01/07/2004 e PORTARIA 069 GabCmdo
                    Geral PMPa de 24/04/2019.</p>
                <br>
                <br>
    `
}