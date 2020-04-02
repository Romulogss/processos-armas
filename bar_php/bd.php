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

function salvarPolicial() {
    $banco = abriBancoDeDados();
}

function getAllArms()
{
    $banco = abriBancoDeDados();
    $armas = null;
    try {
        $sql = "SELECT * FROM arma";
        $resultado = $banco->query($sql);
        if ($resultado->num_rows > 0) {
            while ($row = $resultado->fetch_array(MYSQLI_ASSOC)) {
                $armas[] = $row;
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
            while ($row = $resultado->fetch_array(MYSQLI_ASSOC)) {
                $policiais[] = $row;
            }
        }
    } catch (Exception $e) {
        $_SESSION['message'] = $e->getMessage();
        $_SESSION['type'] = 'danger';
    }

    fecharBandoDeDados($banco);
    return $policiais;
}

function obterDadosGerais()
{
    $banco = abriBancoDeDados();
    $resultado = null;
    try {
        $sql = "SELECT * FROM dados_gerais";
        $resultado = $banco->query($sql);
        if($resultado->num_rows > 0) {
            $resultado = $resultado->fetch_assoc();
        } else {
            return false;
        }
    } catch (Exception $e) {
        $_SESSION['message'] = $e->getMessage();
        $_SESSION['type'] = 'danger';
    }

    fecharBandoDeDados($banco);
    return $resultado;
}
obterDadosGerais();

function salvarDadosGerais($total = null, $ind = null, $com = null, $textCom = null, $textInd = null)
{
    $banco = abriBancoDeDados();
    try {
        $stmt = $banco->prepare("INSERT INTO dados_gerais VALUES (?,?,?,?,?)");
        $stmt->bind_param("sssss", $textInd, $textCom, $total, $ind, $com);
        if ($stmt->execute() == TRUE) {
            fecharBandoDeDados($banco);
            return true;
        } else {
            fecharBandoDeDados($banco);
            return false;
        }
    } catch (Exception $e) {
        $_SESSION['message'] = $e->getMessage();
        $_SESSION['type'] = 'danger';
    }
}
