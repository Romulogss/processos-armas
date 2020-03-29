<?php
require_once("lib/raelgc/view/Template.php");
use raelgc\view\Template;

$bar = new Template("./view/BAR/bar.html");
$bar->addFile("QUANTIDADE_ARMAS", "./view/BAR/quantidade-armas.html");
$bar->TIME = time();
$bar->show();
?>