<?php
require_once("lib/Template.php");
use Template\Template;

$bar = new Template("./view/bar.html");
$bar->addFile("QUANTIDADE_ARMAS", "./view/quantidade-armas.html");
$bar->addFile("MODAL", "./view/modal.html");
$bar->TIME = time();
$bar->show();
