<?php
require_once('entidades.php');
function abriBancoDeDados()
{
    try {

        $conexao = new mysqli('localhost', 'root', '', 'bar');
        mysqli_set_charset($conexao, 'utf8');
        return $conexao;
    } catch (Exception $e) {
        echo $e->getMessage();
        return null;
    }
}

function fecharBandoDeDados($banco)
{
    try {
        mysqli_close($banco);
    } catch (Exception $e) {
        echo $e->getMessage();
    }
}

function getAllArms()
{
    $banco = abriBancoDeDados();
    $armas = null;
    try {
        $sql = "SELECT * FROM arma";
        $resultado = $banco->query($sql);
        if ($resultado->num_rows > 0) {
            while ($armas = $resultado->fetch_all(MYSQLI_ASSOC)) {
                $armas[] = new Arma(
                    $armas['id'],
                    $armas['tombamento'],
                    $armas['num_serie'],
                    $armas['marca'],
                    $armas['especie'],
                    $armas['modelo'],
                    $armas['calibre'],
                    $armas['grupo_calibre'],
                    $armas['municao'],
                    $armas['funcionamento'],
                    $armas['canos'],
                    $armas['comprimentoCano'],
                    $armas['uniMedida'],
                    $armas['alma'],
                    $armas['raias'],
                    $armas['sentidoRaias'],
                    $armas['acabamento'],
                    $armas['pais']
                );
            }
        }
    } catch (Exception $e) {
        $_SESSION['message'] = $e->getMessage();
        $_SESSION['type'] = 'danger';
    }

    fecharBandoDeDados($banco);
    return $armas;
}

function getAllPolices()
{
    $banco = abriBancoDeDados();
    $policiais = null;
    try {
        $sql = "SELECT * FROM policial";
        $resultado = $banco->query($sql);
        if ($resultado->num_rows > 0) {
            while ($policiais = $resultado->fetch_all(MYSQLI_ASSOC)) {
                $policiais[] = new Policial(
                    $policiais['id'],
                    $policiais['cpf'],
                    $policiais['nome'],
                    $policiais['nascimento'],
                    $policiais['rg'],
                    $policiais['data_expedicao_rg'],
                    $policiais['orgao_emissor'],
                    $policiais['pai'],
                    $policiais['mae'],
                    $policiais['cidade']
                );
            }
        }
    } catch (Exception $e) {
        $_SESSION['message'] = $e->getMessage();
        $_SESSION['type'] = 'danger';
    }

    fecharBandoDeDados($banco);
    return $policiais;
}
