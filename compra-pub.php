<?php

    require_once("lib/raelgc/view/Template.php");
    use raelgc\view\Template;

    $tpl = new Template("./view/template.html");
    $tpl->addFile("HEADER", "view/header.html");
    $tpl->addFile("FOOTER", "view/footer.html");
    $tpl->addFile("CAPA", "view/capa.html");
    $tpl->addFile("CERTIDAO", "view/certidoes/certidao-compra.html");
    $tpl->PROCESSO = "PROCESSO PARA AQUISIÇÃO E REGISTRO DE ARMA DE FOGO";
    $tpl->DISABLE = "disabled";
    $tpl->TITLE = "Aquisição de arma de fogo";
    $tpl->block("BLOCK_AUTORIZACAO");
    $tpl->block("BLOCK_COMPRA_PUB");
    $tpl->block("BLOCK_PUB");
    $tpl->block("BLOCK_PUB_2");
    $tpl->block("BLOCK_SCRIPT");
    $tpl->INPUT_COINT = '<input type="text" placeholder="COINT/OPM">';
    $tpl->TIME = time();
    $tpl->show();

?>