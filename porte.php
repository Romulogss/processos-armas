<?php

    require_once("lib/raelgc/view/Template.php");
    use raelgc\view\Template;

    $tpl = new Template("./view/template.html");
    $tpl->addFile("CERTIDAO", "view/certidoes/certidao-paf.html");
    $tpl->addFile("HEADER", "view/header.html");
    $tpl->addFile("FOOTER", "view/footer.html");
    $tpl->addFile("CAPA", "view/capa.html");
    $tpl->PROCESSO = "PROCESSO PARA EMISSÃO DE PAF DE ARMA DE FOGO";
    $tpl->TITLE = "Renovação de PAF";
    $tpl->TIPO_PROCESSO = "EMISSÃO DE PORTE";
    $tpl->COMPLEMENTAR = "da reserva remunerada";
    $tpl->block("BLOCK_DEMAIS");
    $tpl->block("BLOCK_PORTE");
    $tpl->block("BLOCK_INT");
    $tpl->block("BLOCK_INT_2");
    $tpl->block("BLOCK_SCRIPT");
    $tpl->TIME = time();
    $tpl->show();

?>