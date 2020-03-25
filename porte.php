<?php

    require_once("lib/raelgc/view/Template.php");
    use raelgc\view\Template;

    $tpl = new Template("template.html");
    $tpl->addFile("CERTIDAO", "certidao-craf-paf.html");
    $tpl->addFile("HEADER", "header.html");
    $tpl->addFile("FOOTER", "footer.html");
    $tpl->addFile("CAPA", "capa.html");
    $tpl->PROCESSO = "PROCESSO PARA RENOVAÇÃO DE PAF/CRAF DE ARMA DE FOGO";
    $tpl->block("BLOCK_DEMAIS");
    $tpl->block("BLOCK_PORTE");
    $tpl->block("BLOCK_INT");
    $tpl->block("BLOCK_INT_2");
    $tpl->show();

?>