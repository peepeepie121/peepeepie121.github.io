<?php
include_once('../res/x5engine.php');
$db = getDbData();
if ($db === false) { die('{ "result": "error" }'); }
$analytics = new Analytics(ImDb::from_db_data($db), 'w5_g32vkz4q_analytics');
$analytics->visit($_POST['uid'], $_POST['url'], $_POST['lang']);
echo '{ "result": "ok" }';
