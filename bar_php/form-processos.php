<?php if ($qtdCom > 0) : ?>
    <div id="comercio">
        <p style="font-style: italic;text-decoration: underline;"><strong id="armas-do-comercio">
                01. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, <?php echo $textCom ?>, ADQUIRIDAS ATRAVÉS DO COMÉRCIO.
            </strong></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>Nos requerimentos em que
                os Policiais Militares solicitam aquisição, cadastro e registro de arma de fogo de uso
                permitido, adquiridas através do fabricante, dou o seguinte despacho: <br> <br> Deferido para:
            </i></p>
        <form id="lista-comercio">
            <?php for ($i = 1; $i <= $qtdCom; $i++) : ?>
                <span class="no-print"><label for="tombamento-<?= $i ?>">TOMBAMENTO</label> <input type="text" id="tombamento-<?= $i ?>"></span><br>
                <label for="nome-<?= $i ?>"><?= str_pad($i, 3, '0', STR_PAD_LEFT) ?>-NOME: </label>
                <input type="text" size="90" id="nome-<?= $i ?>"><br>
                <label> FILIAÇÃO: <input type="text" size="30" id="pai-<?= $i ?>" onblur="pai(<?= $i ?>)" placeholder="PAI" oninput="this.size = this.value.length + 6;">
                    <span style="font-weight: normal;" id="e-<?= $i ?>">e</span> <input type="text" onblur="mae(<?= $i ?>)" placeholder="MAE" size="30" id="mae-<?= $i ?>" oninput="this.size = this.value.length + 6;">
                </label><br>
                <label> DATA E LOCAL DE NASCIMENTO: <input type="date" id="nascimento-<?= $i ?>"> <span style="padding:10px"></span> <input type="text">
                </label><br>
                <label> END.RESID: <input type="text" size="30" id="residencia-<?= $i ?>" oninput="this.size = this.value.length + 6;"> <span style="padding:10px"></span> <select id="cidade-<?= $i ?>" style="height: 15px"></select>
                </label><br>
                <label> END. TRABALHO: <input type="text" size="30" oninput="this.size = this.value.length + 6;">
                </label> <br>
                <label> PROFISSÃO: </label><input type="text" size="30" oninput="this.size = this.value.length + 6;" id="prof-<?= $i ?>"> <br>
                <label for="rg-<?= $i ?>"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number" id="rg-<?= $i ?>">
                <label for="emissao-<?= $i ?>">DATA DA EMISSÃO: </label> <input type="date" id="emissao-<?= $i ?>"> <br>
                <label for="expedidor-<?= $i ?>">ORGÃO EXPEDIDOR/UF: </label><input type="text" id="expedidor-<?= $i ?>"> <br>
                <label for="cpf-<?= $i ?>">CPF: </label><input type="text" id="cpf-<?= $i ?>"><br>
                <strong><i>DADOS DA ARMA</i></strong> <br>
                <label for="fabricante-<?= $i ?>">IDENTIFICAÇÃO DO FABRICANTE: </label>
                <select id="fabricante-<?= $i ?>">
                    <option value="24">GLOCK</option>
                    <option value="1">TAURUS/SA</option>
                    <option value="4">CBC</option>
                </select> <br>
                <label for="fornecedor-<?= $i ?>">IDENTIFICAÇÃO DO FORNECEDOR: </label><input type="text" size="50" id="fornecedor-<?= $i ?>"> <br>
                <label for="end-fornecedor-<?= $i ?>">ENDEREÇO: </label><input type="text" id="end-fornecedor-<?= $i ?>" oninput="this.size = this.value.length + 6;"> <br>
                <label for="cnpj-<?= $i ?>">CNPJ: </label> <input type="text" size="10" id="cnpj-<?= $i ?>"> <br>
                <label>NÚMERO DA NOTA FISCAL: <input type="number"> <span style="padding: 10px;"></span> EMISSÃO:<input type="date"></label> <br>
                <label for="especie-<?= $i ?>">ESPÉCIE: </label>
                <select id="especie-<?= $i ?>">
                    <option value="2">PISTOLA</option>
                    <option value="1">ESPINGARDA</option>
                    <option value="3">REVÓLVER</option>
                    <option value="4">CARABINA</option>
                </select> <br>
                <label for="marca-<?= $i ?>">MARCA: </label>
                <select id="marca-<?= $i ?>">
                    <option value="24">GLOCK</option>
                    <option value="1">TAURUS/SA</option>
                    <option value="4">CBC</option>
                </select> <br>
                <label for="modelo-<?= $i ?>">MODELO: </label> <input type="text" id="modelo-<?= $i ?>"> <br>
                <label for="serie-<?= $i ?>">NÚMERO DE SÉRIE: </label><input type="text" id="serie-<?= $i ?>"> <br>
                <label for="calibre-<?= $i ?>">CALIBRE: </label> <input type="text" id="calibre-<?= $i ?>"> <br>
                <label for="muni-<?= $i ?>">CAPACIDADE DE MUNIÇÃO: </label><input type="number" id="muni-<?= $i ?>"> <br>
                <label for="funcionamento-<?= $i ?>">TIPO DE FUNCIONAMENTO: </label>
                <select id="funcionamento-<?= $i ?>">
                    <option value="2">Semi-automático</option>
                    <option value="1">Automático</option>
                    <option value="3">Repetição</option>
                    <option value="4">Tiro simples</option>
                </select> <br>
                <label for="canos-<?= $i ?>">QUANTIDADE DE CANOS: </label><input type="number" id="canos-<?= $i ?>"> <br>
                <label> COMPRIMENTO DO CANO: <input type="number" id="tam-cano-<?= $i ?>" size="3"> <select id="uni-medida-<?= $i ?>">
                        <option value="MM">mm</option>
                        <option value="CM">cm</option>
                        <option value="POL">pol</option>
                    </select>
                </label><br>
                <label for="alma-<?= $i ?>">TIPO DE ALMA: </label>
                <select id="alma-<?= $i ?>">
                    <option value="R">Raiada</option>
                    <option value="L">Lisa</option>
                </select>
                <label for="n-raias-<?= $i ?>">NUMERO DE RAIAS: </label><input type="number" id="n-raias-<?= $i ?>">
                <label for="sentido-raias-<?= $i ?>">SENTIDO DAS RAIAS: </label>
                <select id="sentido-raias-<?= $i ?>">
                    <option value="D">À Direita</option>
                    <option value="E">À Esquerda</option>
                </select> <br>
                <label for="acabamento-<?= $i ?>">ACABAMENTO: </label><input type="text" id="acabamento-<?= $i ?>"> <br>
                <label for="pais-<?= $i ?>">PAÍS DE FABRICAÇÃO: </label>
                <select id="pais-<?= $i ?>">
                    <option value="1">Brasil</option>
                    <option value="20">EUA</option>
                </select>
                <p style="font-weight: bold;text-decoration: underline">LEGISLAÇÃO UTILIZADA: LEI 10.826 de 22/12/2003, DECRETO
                    5.123 de 01/07/2004 e PORTARIA 069 GabCmdo Geral PMPa de 24/04/2019.</p>
                <br>
                <br>
            <?php endfor; ?>
        </form>
    </div>
<?php endif; ?>
<?php if ($qtdInd > 0) : ?>
    <div id="industria">
        <p style="font-style: italic;text-decoration: underline;"><strong id="armas-da-industria">
                01. AUTORIZAÇÃO PARA CADASTRO E REGISTRO DE ARMA DE FOGO DE USO PERMITIDO, <?= $textInd ?>, ADQUIRIDAS ATRAVÉS DO FABRICANTE.
            </strong></p>
        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <i>Nos requerimentos em que
                os Policiais Militares solicitam aquisição, cadastro e registro de arma de fogo de uso
                permitido, adquiridas através do fabricante, dou o seguinte despacho: <br> <br> Deferido para:
            </i></p>
        <form id="lista-industria">
            <?php for ($i = 1; $i <= $qtdInd; $i++) : ?>
                <span class="no-print"><label for="tombamento-<?= $i ?>">TOMBAMENTO</label> <input type="text" id="tombamento-<?= $i ?>"></span><br>
                <label for="nome-<?= $i ?>"><?= str_pad($i+$qtdCom, 3, '0', STR_PAD_LEFT) ?>-NOME: </label>
                <input type="text" size="90" id="nome-<?= $i ?>"><br>
                <label> FILIAÇÃO: <input type="text" size="30" id="pai-<?= $i ?>" onblur="pai(<?= $i ?>)" placeholder="PAI" oninput="this.size = this.value.length + 6;">
                    <span style="font-weight: normal;" id="e-<?= $i ?>">e</span> <input type="text" onblur="mae(<?= $i ?>)" placeholder="MAE" size="30" id="mae-<?= $i ?>" oninput="this.size = this.value.length + 6;">
                </label><br>
                <label> DATA E LOCAL DE NASCIMENTO: <input type="date" id="nascimento-<?= $i ?>"> <span style="padding:10px"></span> <input type="text">
                </label><br>
                <label> END.RESID: <input type="text" size="30" id="residencia-<?= $i ?>" oninput="this.size = this.value.length + 6;"> <span style="padding:10px"></span> <select id="cidade-<?= $i ?>" style="height: 15px"></select>
                </label><br>
                <label> END. TRABALHO: <input type="text" size="30" oninput="this.size = this.value.length + 6;">
                </label> <br>
                <label> PROFISSÃO: </label><input type="text" size="30" oninput="this.size = this.value.length + 6;" id="prof-<?= $i ?>"> <br>
                <label for="rg-<?= $i ?>"> NÚMERO DA CÉDULA DE IDENTIDADE: </label> <input type="number" id="rg-<?= $i ?>">
                <label for="emissao-<?= $i ?>">DATA DA EMISSÃO: </label> <input type="date" id="emissao-<?= $i ?>"> <br>
                <label for="expedidor-<?= $i ?>">ORGÃO EXPEDIDOR/UF: </label><input type="text" id="expedidor-<?= $i ?>"> <br>
                <label for="cpf-<?= $i ?>">CPF: </label><input type="text" id="cpf-<?= $i ?>"><br>
                <strong><i>DADOS DA ARMA</i></strong> <br>
                <label for="fabricante-<?= $i ?>">IDENTIFICAÇÃO DO FABRICANTE: </label>
                <select id="fabricante-<?= $i ?>">
                    <option value="24">GLOCK</option>
                    <option value="1">TAURUS/SA</option>
                    <option value="4">CBC</option>
                </select> <br>
                <label for="fornecedor-<?= $i ?>">IDENTIFICAÇÃO DO FORNECEDOR: </label><input type="text" size="50" id="fornecedor-<?= $i ?>"> <br>
                <label for="end-fornecedor-<?= $i ?>">ENDEREÇO: </label><input type="text" id="end-fornecedor-<?= $i ?>" oninput="this.size = this.value.length + 6;"> <br>
                <label for="cnpj-<?= $i ?>">CNPJ: </label> <input type="text" size="10" id="cnpj-<?= $i ?>"> <br>
                <label>NÚMERO DA NOTA FISCAL: <input type="number"> <span style="padding: 10px;"></span> EMISSÃO:<input type="date"></label> <br>
                <label for="especie-<?= $i ?>">ESPÉCIE: </label>
                <select id="especie-<?= $i ?>">
                    <option value="2">PISTOLA</option>
                    <option value="1">ESPINGARDA</option>
                    <option value="3">REVÓLVER</option>
                    <option value="4">CARABINA</option>
                </select> <br>
                <label for="marca-<?= $i ?>">MARCA: </label>
                <select id="marca-<?= $i ?>">
                    <option value="24">GLOCK</option>
                    <option value="1">TAURUS/SA</option>
                    <option value="4">CBC</option>
                </select> <br>
                <label for="modelo-<?= $i ?>">MODELO: </label> <input type="text" id="modelo-<?= $i ?>"> <br>
                <label for="serie-<?= $i ?>">NÚMERO DE SÉRIE: </label><input type="text" id="serie-<?= $i ?>"> <br>
                <label for="calibre-<?= $i ?>">CALIBRE: </label> <input type="text" id="calibre-<?= $i ?>"> <br>
                <label for="muni-<?= $i ?>">CAPACIDADE DE MUNIÇÃO: </label><input type="number" id="muni-<?= $i ?>"> <br>
                <label for="funcionamento-<?= $i ?>">TIPO DE FUNCIONAMENTO: </label>
                <select id="funcionamento-<?= $i ?>">
                    <option value="2">Semi-automático</option>
                    <option value="1">Automático</option>
                    <option value="3">Repetição</option>
                    <option value="4">Tiro simples</option>
                </select> <br>
                <label for="canos-<?= $i ?>">QUANTIDADE DE CANOS: </label><input type="number" id="canos-<?= $i ?>"> <br>
                <label> COMPRIMENTO DO CANO: <input type="number" id="tam-cano-<?= $i ?>" size="3"> <select id="uni-medida-<?= $i ?>">
                        <option value="MM">mm</option>
                        <option value="CM">cm</option>
                        <option value="POL">pol</option>
                    </select>
                </label><br>
                <label for="alma-<?= $i ?>">TIPO DE ALMA: </label>
                <select id="alma-<?= $i ?>">
                    <option value="R">Raiada</option>
                    <option value="L">Lisa</option>
                </select>
                <label for="n-raias-<?= $i ?>">NUMERO DE RAIAS: </label><input type="number" id="n-raias-<?= $i ?>">
                <label for="sentido-raias-<?= $i ?>">SENTIDO DAS RAIAS: </label>
                <select id="sentido-raias-<?= $i ?>">
                    <option value="D">À Direita</option>
                    <option value="E">À Esquerda</option>
                </select> <br>
                <label for="acabamento-<?= $i ?>">ACABAMENTO: </label><input type="text" id="acabamento-<?= $i ?>"> <br>
                <label for="pais-<?= $i ?>">PAÍS DE FABRICAÇÃO: </label>
                <select id="pais-<?= $i ?>">
                    <option value="1">Brasil</option>
                    <option value="20">EUA</option>
                </select>
                <p style="font-weight: bold;text-decoration: underline">LEGISLAÇÃO UTILIZADA: LEI 10.826 de 22/12/2003, DECRETO
                    5.123 de 01/07/2004 e PORTARIA 069 GabCmdo Geral PMPa de 24/04/2019.</p>
                <br>
                <br>
            <?php endfor; ?>
        </form>
    </div>
<?php endif; ?>