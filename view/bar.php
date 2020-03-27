<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/style-bar.css?<?=time()?>">
    <script src="../assets/bar.js?<?=time()?>"></script>
    <title>BAR</title>
</head>

<body class="container">
    <!--DADOS DE QUANTIDADE DE ARMAS INCIO-->
    <div id="informações-bar">
        <div class="form-group">
            <label for="text-aux-com">Informe a quantidade de armas, de cada espécie e especificas quantas são de cada
                calibre, adquiridas no comércio</label>
            <textarea id="text-aux-com" cols="50" rows="4" class="form-control"
                placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"></textarea>
        </div>
        <div class="form-group">
            <label for="text-aux-ind">Informe a quantidade de armas, de cada espécie e especificas quantas são de cada
                calibre, aquiridas na indústria</label>
            <textarea id="text-aux-ind" cols="50" rows="4" class="form-control"
                placeholder="EX: 17(DEZESSETE) PISTOLAS, SENDO  09(NOVE)Cal. .40S&W E 12(DOZE) Cal. 9mm 01(UMA)Cal. .380, E 02(DOIS) REVÓLVERES Cal..38 E RIFLES,CARABINAS 01(UMA)Cal,.22 E 01(UMA)ESPINGARDA Cal. 20"></textarea>
        </div>
        <button class="btn btn-primary" onclick="getDadosGerais()"> Dados Ok</button>
    </div>
    <!--DADOS DE QUANTIDADE DE ARMAS FIM-->
    <div class="row">
        <div class="col">
            <p style="font-size: 11px; text-align: center;font-style: italic;font-weight: bold;">BOLETIM ADMINISTRATIVO
                - ARMAMENTO Nº <input type="text" size="1cm"> - <input type="text" size="1cm"> À <input type="text"
                    size="1cm"> DE <input type="text" size="7.5cm"> DE
                <script>document.write(new Date().getFullYear())</script>
            </p>
        </div>
    </div>
    <br>
    <br>
    <br>
    <header style="height: 150px;font-size: 15px;font-weight: bold;">
        <div class="row">
            <table class="table" border="3" style="text-align: center;">
                <tr>
                    <td>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bras%C3%A3o_do_Par%C3%A1.svg/1200px-Bras%C3%A3o_do_Par%C3%A1.svg.png"
                            alt="BRASÃO DO ESTADO DO PARÁ" height="auto" style="max-width: 100%;height: 110px;">
                    </td>
                    <td>
                        <strong> POLÍCIA MÍLITAR DO ESTADO DO PARÁ <br> COMANDO GERAL - DIRETORIA DE APOIO LOGÍSTICO
                            <br> BELÉM - PA, <input type="text" size="1cm" style="text-align: center;">DE <input
                                type="text" size="7cm"> DE
                            <script>document.write(new Date().getFullYear())</script> <br> BOLETIM ADMINISTRATIVO -
                            ARMAMENTO N° <input type="text" size="5cm">
                        </strong>
                    </td>
                    <td>
                        <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Bras%C3%A3o_PMPA.PNG"
                            alt="BRASÃO DA POLÍCIA MÍLITAR" height="110px" style="max-width: 100%;">
                    </td>
                </tr>
            </table>
        </div>
    </header>
    <main>
        <section style="text-align: center;font-weight: bold;"> Para Conhecimento da PMPA e devida execução, pubico o
            seguinte: <br> 1ª PARTE - Serviços Diários <br> Sem alteração <br> 2ª PARTE - Instrução <br> Sem alteração
            <br> 3ª PARTE - Assuntos Gerais e Administrativos: <br>
            <span style="text-decoration: underline;">I. REGISTRO DE ARMAS DE FOGO DA POLÍCIA MILITAR DO ESTADO DO PARÁ
                - Autorização - Transcrição:</span>
        </section>
        <section>
            <p style="text-align: justify;"> De acordo com a Lei Nr 10.826, de 22 DEZ 2003, que dispõe sobre registro,
                posse e comercialização de armas de fogo e munição, sobre o Sistema Nacional de Armas - SINARM, define
                crimes e dá outras providências; o Decreto Nr 5.123, de 1º JUL 2004, que regulamenta a Lei Nº 10.826, de
                22 DEZ 2003; a Portaria Nº 069/2019 aditada ao BG Nº 078 de 24 ABR 2019 – GABCMDO GERAL PMPa; e a
                Portaria Nº 136 – COLOG - EB, de 08 de NOV 2019, que estabelece normas para a aquisição, o registro, o
                cadastro e a transferência de propriedade de armas de fogo de uso restrito por policial rodoviário
                federal, policial ferroviário, federal, policial civil, policial militar e bombeiro militar dos estados
                e do Distrito Federal, e dá outras providências,<strong> publico, para fins de cadastro no
                    SIGMA</strong>, o que se segue: </p>
        </section>
        <hr style="border-style: dashed;border-width: 1px;">
        <section>
            <p style="font-style: italic;text-decoration: underline;"><strong id="armas-da-industria">
                </strong></p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>Nos requerimentos em que os
                    Policiais Militares solicitam aquisição, cadastro e registro de arma de fogo de uso permitido,
                    adquiridas através do fabricante, dou o seguinte despacho: <br> <br> Deferido para: </i></p>
            <form style="text-align: justify;" id="processos">
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
                <label for="modelo">MODELO: </label> <input type="text" id="modelo"> <br>
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
                <p style="font-weight: bold;text-decoration: underline">LEGISLAÇÃO UTILIZADA: LEI 10.826 de 22/12/2003, DECRETO 5.123 de 01/07/2004 e PORTARIA 069 GabCmdo
                    Geral PMPa de 24/04/2019.</p>
                <br>
                <br>
            </form>
            <button class="btn btn-primary no-print" onclick="novoPM()">Adiocionar novo registro</button>
        </section>
    </main>
</body>

</html>
