<?php
require_once("lib/Template.php");
use Template\Template;

$of = new Template("./view/of.html");
$of->addFile("HEADER",'../view/header.html');
$of->addFile("FOOTER", "../view/footer.html");
$of->TIME = time();
$of->show();
