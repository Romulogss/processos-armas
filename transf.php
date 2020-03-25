<?php

    require_once("lib/raelgc/view/Template.php");
    use raelgc\view\Template;

    $tpl = new Template("template.html");
    $tpl->addFile("HEADER", "header.html");
    $tpl->addFile("FOOTER", "footer.html");
    $tpl->addFile("CAPA", "capa.html");
    $tpl->addFile("CERTIDAO", "certidao-transf.html");
    $tpl->PROCESSO = "PROCESSO PARA TRANSFERÊNCIA E REGISTRO DE ARMA DE FOGO";
    $tpl->TITLE = "Transferência de arma de fogo";
    $tpl->block("BLOCK_DEMAIS");
    $tpl->block("BLOCK_TRANSF_INT");
    $tpl->block("BLOCK_INT");
    $tpl->block("BLOCK_INT_2");
    $tpl->show();

?>