<?php

    require_once("lib/raelgc/view/Template.php");
    use raelgc\view\Template;

    $tpl = new Template("./view/template.html");
    $tpl->addFile("HEADER", "view/header.html");
    $tpl->addFile("FOOTER", "view/footer.html");
    $tpl->addFile("CAPA", "view/capa.html");
    $tpl->TIME = time();
    $tpl->addFile("CERTIDAO", "view/certidao-transf.html");
    $tpl->PROCESSO = "PROCESSO PARA TRANSFERÊNCIA E REGISTRO DE ARMA DE FOGO";
    $tpl->block("BLOCK_DEMAIS");
    $tpl->block("BLOCK_TRANSF_PUB");
    $tpl->block("BLOCK_PUB");
    $tpl->block("BLOCK_PUB_2");
    $tpl->block("BLOCK_TRANSF");
    $tpl->DISABLE = "disabled";
    $tpl->TITLE = "Transferência de arma de fogo";
    $tpl->FOTO_CEDENTE = '<td style="border-width: 0 1px 0 0;"><input type="text" disabled placeholder="FOTO 3x4" size="15"></td>';
    $tpl->INPUT_COINT = '<input type="text" placeholder="COINT/OPM">';
    
    $tpl->show();

?>