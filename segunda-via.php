<?php

    require_once("lib/raelgc/view/Template.php");
    use raelgc\view\Template;

    $tpl = new Template("./view/template.html");
    $tpl->addFile("CERTIDAO", "view/certidoes/certidao-paf.html");
    $tpl->addFile("HEADER", "view/header.html");
    $tpl->addFile("FOOTER", "view/footer.html");
    $tpl->addFile("CAPA", "view/capa.html");
    $tpl->PROCESSO = "PROCESSO PARA EMISSÃO DE 2ª VIA DE CRAF";
    $tpl->TITLE = "Emissão de 2ª via de CRAF";
    $tpl->TIPO_PROCESSO = "EMISSÃO DE 2ª VIA DE CRAF";
    $tpl->block("BLOCK_DEMAIS");
    $tpl->block("BLOCK_PORTE");
    $tpl->block("BLOCK_INT");
    $tpl->block("BLOCK_INT_2");
    $tpl->TIME = time();
    $tpl->show();

?>