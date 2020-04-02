<?php
$qtdProcesso = 0;
$qtdInd = 0;
$qtdCom = 0;
$textInd = '';
$textCom = '';
function getNumProcessos()
{
    global $qtdCom, $qtdInd, $qtdProcesso, $textCom, $textInd;
    if (isset($_POST['com'])) {
        $qtdCom = !empty($_POST['com']) ? $_POST['com']: 0;
    }

    if (isset($_POST['ind'])) {
        $qtdInd = !empty($_POST['ind']) ? $_POST['ind']: 0;
    }
    if(isset($_POST['text-ind'])) {
        $textInd = $_POST['text-ind'];
    }
    if(isset($_POST['text-com'])) {
        $textCom = $_POST['text-com'];
    }
    $qtdProcesso = $qtdInd + $qtdCom;
    print($qtdProcesso);
}
