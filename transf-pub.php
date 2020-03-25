<?php

    require_once("lib/raelgc/view/Template.php");
    use raelgc\view\Template;

    $tpl = new Template("template.html");
    $tpl->addFile("HEADER", "header.html");
    $tpl->addFile("FOOTER", "footer.html");
    $tpl->addFile("CAPA", "capa.html");
    $tpl->addFile("CERTIDAO", "certidao-transf.html");
    $tpl->PROCESSO = "PROCESSO PARA TRANSFERÊNCIA E REGISTRO DE ARMA DE FOGO";
    $tpl->block("BLOCK_DEMAIS");
    $tpl->block("BLOCK_TRANSF_PUB");
    $tpl->block("BLOCK_PUB");
    $tpl->block("BLOCK_PUB_2");
    $tpl->DISABLE = "disabled";
    $tpl->TITLE = "Transferência de arma de fogo";
    $tpl->show();

?>