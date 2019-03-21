<?php
foreach (glob("language.*.*.php") as $filename) {include($filename);}
include("language.".$language_code.".php");

$_lang_arr = $util->cache_data_array(Database::table_ngonngu());
$language_mine = [];
foreach ($_lang_arr as $k=>$v) {
    $language_mine[$v["ma"]] = $v[$language_code];
    $language[$v["ma"]] = $v[$language_code];
}
if ($language_mode == 1) {
    foreach ($language as $k=>$v) $language[$k] = "[" . $k . "]";
}
$lang = $language;
?>