<?php
include("../res/x5engine.php");
$nameList = array("w34","csv","f76","fpm","xph","klg","hzw","n5p","4gy","jel");
$charList = array("S","7","2","Y","K","H","3","D","S","F");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
