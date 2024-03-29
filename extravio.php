<?php

    require_once("lib/raelgc/view/Template.php");
    use raelgc\view\Template;

    $tpl = new Template("./view/template.html");
    $tpl->addFile("HEADER", "view/header.html");
    $tpl->addFile("FOOTER", "view/footer.html");
    $tpl->addFile("CAPA", "view/capa.html");
    $tpl->addFile("CERTIDAO", "view/certidoes/certidao-extravio.html");
    $tpl->PROCESSO = "PROCESSO PARA MUDANÇA DE STATUS/EXTRAVIO DE ARMA DE FOGO";
    $tpl->TITLE = "Mudança de status";
    $tpl->block("BLOCK_DEMAIS");
    $tpl->block("BLOCK_PORTE");
    $tpl->TIPO_PROCESSO = "MUDANÇA DE STATUS/EXTRAVIO";
    $tpl->block("BLOCK_INT");
    $tpl->block("BLOCK_INT_2");
    $tpl->TIME = time();
    $tpl->addFile("MAJOR", "view/chefe-da-secao.html");
    $tpl->show();

?>