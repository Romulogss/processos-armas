<?php

    require_once("lib/raelgc/view/Template.php");
    use raelgc\view\Template;

    $tpl = new Template("template.html");
    $tpl->addFile("CERTIDAO", "certidao-craf-paf.html");
    $tpl->addFile("HEADER", "header.html");
    $tpl->addFile("FOOTER", "footer.html");
    $tpl->addFile("CAPA", "capa.html");
    $tpl->PROCESSO = "PROCESSO PARA RENOVAÇÃO DE PAF/CRAF DE ARMA DE FOGO";
    $tpl->DISABLE = "disabled";
    $tpl->block("BLOCK_DEMAIS");
    $tpl->block("BLOCK_PORTE");
    $tpl->block("BLOCK_PUB");
    $tpl->block("BLOCK_PUB_2");
    $tpl->show();

?>