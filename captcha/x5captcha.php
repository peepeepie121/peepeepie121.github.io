<?php
include("../res/x5engine.php");
$nameList = array("hp2","5fr","fmj","e8v","mpp","3t5","hcy","vtv","te6","ct4");
$charList = array("W","5","C","D","Y","6","H","W","C","K");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
