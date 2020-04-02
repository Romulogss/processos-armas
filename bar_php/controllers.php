<?php
require_once('bd.php');
$dadosGerais = new DadosGerais('', '', 0, 0, 0);

function carregarDadosGerais()
{
    global $dadosGerais;
    $dados = obterDadosGerais();
    if ($dados != false) {
        $dadosGerais =  new DadosGerais($dados['text_ind'], $dados['text_com'], $dados['qtdInd'], $dados['qtdCom'], $dados['qtdProcessos']);
    }
}

function getNumProcessos()
{
    global $qtdCom, $qtdInd, $qtdProcessos, $textCom, $textInd;
    if (isset($_POST['com'])) {
        $qtdCom = !empty($_POST['com']) ? $_POST['com'] : 0;
    }

    if (isset($_POST['ind'])) {
        $qtdInd = !empty($_POST['ind']) ? $_POST['ind'] : 0;
    }
    if (isset($_POST['text-ind'])) {
        $textInd = $_POST['text-ind'];
    }
    if (isset($_POST['text-com'])) {
        $textCom = $_POST['text-com'];
        $qtdProcessos = $qtdInd + $qtdCom;
        salvarDadosGerais($qtdProcessos, $qtdInd, $qtdCom, $textCom, $textInd);
    }
}

function getAllPoliciais()
{
    $pms = getAllPolices();
    $policiais = [];
    foreach ($pms as $pm => $value) {
        $policial = new Policial(
            $value['id'],
            $value['cpf'],
            $value['nome'],
            $value['nascimento'],
            $value['rg'],
            $value['data_expedicao_rg'],
            $value['orgao_emissor'],
            $value['pai'],
            $value['mae'],
            $value['cidade']
        );
        array_push($policiais, $policial);
    }
}

function getAllArmas()
{
    $array = getAllArms();
    $armas = [];
    foreach ($array as $arma => $value) {
        $arma_r = new Arma(
            $value['id'],
            $value['tombamento'],
            $value['num_serie'],
            $value['marca'],
            $value['especie'],
            $value['modelo'],
            $value['calibre'],
            $value['grupo_calibre'],
            $value['municao'],
            $value['funcionamento'],
            $value['canos'],
            $value['comprimentoCano'],
            $value['uniMedida'],
            $value['alma'],
            $value['raias'],
            $value['sentidoRaias'],
            $value['acabamento'],
            $value['pais']
        );
        array_push($armas, $arma_r);
    }
}

function salvarForm($id) {
    print_r($_POST['form-comercio-' . $id]);
}

