<?php
error_reporting(E_ALL); ini_set('display_errors', 1);

date_default_timezone_set('Asia/Bangkok');
$domain = $_SERVER['SERVER_NAME'];
if ($domain == "ex.memorybooster.top") {
    if ($_SERVER["SCRIPT_NAME"] != "/ex.php"){
        header("Location: http://ex.memorybooster.top/ex.php");
        die();
    }
}

if ( isset($_GET["language_mode"]) ) {
    $language_mode = $_GET["language_mode"];
    $_SESSION["language_mode"] = $language_mode;
} elseif ( isset($_SESSION["language_mode"]) ){
    $language_mode = $_SESSION["language_mode"];
} else {
    $language_mode = 0;
}
if ( isset($_GET["language_code"]) ) {
    $language_code = $_GET["language_code"];
    $_SESSION["language_code"] = $language_code;
} elseif ( isset($_SESSION["language_code"]) ){
    $language_code = $_SESSION["language_code"];
} else {
    $language_code = "vi";
}


foreach (glob("lib/*.class.php") as $filename) {include($filename);}
foreach (glob("class/*.class.php") as $filename) {include($filename);}

@require_once("config.php");
$db = new sql_db($db_config);

$util = new Util();
@require_once("language.php");
@require_once("functions.php");

$customer_key = "";
$module = "qlbanhang";
$header["title"] = $language["tieu_de_ung_dung"];
$app_version = time();
$game_key = "none";



$today = [];
$today["timestamp_ngay"] = date("d");
$today["timestamp_thang"] = date("m");
$today["timestamp_nam"] = date("Y");
$today["timestamp_form"] = date("Y-m-d");
$today["timestamp_ten"] = date("d-m-Y");

?>
