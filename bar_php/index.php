<?php
require_once('config.php');
require_once('controllers.php');
getNumProcessos();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="../assets/style-bar.css?<?= time(); ?>">
    <script src="https://cdn.rawgit.com/eligrey/FileSaver.js/5ed507ef8aa53d8ecfea96d96bc7214cd2476fd2/FileSaver.min.js"></script>
    <script src="../assets/bar.js?<?= time(); ?>"></script>
    <title>BAR</title>
</head>

<body class="container">
    <?php if ($qtdProcesso <= 0) : ?>
        <?php include(QTD_ARMAS); ?>
    <?php else : ?>
        <div class="row">
            <div class="col">
                <p style="font-size: 11px; text-align: center;font-style: italic;font-weight: bold;">BOLETIM ADMINISTRATIVO
                    - ARMAMENTO Nº <input type="text" size="1cm" id="num-bar" onblur="document.getElementById('num-bar-header').innerHTML = document.getElementById('num-bar').value"> - <input type="text" size="1cm"> À <input type="text" size="1cm"> DE <input type="text" size="7.5cm"> DE
                    <script>
                        document.write(new Date().getFullYear())
                    </script>
                </p>
            </div>
        </div>
        <br>
        <br>
        <br>
        <header style="font-size: 15px;font-weight: bold;max-width: 100%;" class="row">
            <div class="col">
                <table class="table" border="3" style="text-align: center;">
                    <tr>
                        <td>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Bras%C3%A3o_do_Par%C3%A1.svg/1200px-Bras%C3%A3o_do_Par%C3%A1.svg.png" alt="BRASÃO DO ESTADO DO PARÁ" height="auto" style="max-width: 100%;height: 110px;">
                        </td>
                        <td>
                            <strong> POLÍCIA MÍLITAR DO ESTADO DO PARÁ <br> COMANDO GERAL - DIRETORIA DE APOIO LOGÍSTICO
                                <br> BELÉM - PA, <input type="text" size="1cm" id="dia-pub">DE <input type="text" size="7cm" id='mes-pub'> DE
                                <script>
                                    document.write(new Date().getFullYear())
                                </script> <br> BOLETIM ADMINISTRATIVO -
                                ARMAMENTO N° <span id="num-bar-header"></span>
                            </strong>
                        </td>
                        <td>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e3/Bras%C3%A3o_PMPA.PNG" alt="BRASÃO DA POLÍCIA MÍLITAR" height="110px" style="max-width: 100%;">
                        </td>
                    </tr>
                </table>
            </div>
        </header>
        <main>
            <section style="text-align: center;font-weight: bold;" id="salvar"> Para Conhecimento da PMPA e devida execução,
                pubico o seguinte: <br> 1ª PARTE - Serviços Diários <br><br> Sem alteração <br><br> 2ª PARTE - Instrução
                <br><br> Sem alteração <br><br> 3ª PARTE - Assuntos Gerais e Administrativos: <br>
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
                <?php include(FORM); ?>
            </section>
        </main>
        <button onclick="salvar()" class="btn btn-danger no-print">SALVAR</button>
    <?php endif; ?>
</body>

</html>