<?php
require_once("lib/raelgc/view/Template.php");
use raelgc\view\Template;

$bar = new Template("./view/of.html");
$bar->addFile("HEADER",'../view/header.html');
$bar->addFile("FOOTER", "../view/footer.html");
$bar->TIME = time();
$bar->show();
?>