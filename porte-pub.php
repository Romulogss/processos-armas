<?php

    require_once("lib/raelgc/view/Template.php");
    use raelgc\view\Template;

    $tpl = new Template("./view/template.html");
    $tpl->addFile("HEADER", "view/header.html");
    $tpl->addFile("FOOTER", "view/footer.html");
    $tpl->addFile("CAPA", "view/capa.html");
    $tpl->addFile("CERTIDAO", "view/certidao-craf-paf.html");
    $tpl->PROCESSO = "PROCESSO PARA RENOVAÇÃO DE PAF/CRAF DE ARMA DE FOGO";
    $tpl->DISABLE = "disabled";
    $tpl->TITLE = "Renovação de PAF/CRAF";
    $tpl->block("BLOCK_DEMAIS");
    $tpl->block("BLOCK_PORTE");
    $tpl->block("BLOCK_PUB");
    $tpl->block("BLOCK_PUB_2");
    $tpl->show();

?>