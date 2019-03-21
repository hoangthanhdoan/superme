<?php
@require_once("init.php");
$key = "ex";
$header["subtitle"] = $language["choi_game"];
$file = "ex";
$table = "";
//$sortby = array("ten"=>"ASC");

/* Nhan du lieu dau vao */
$func = ""; $embed = ""; $view_tpl = "form_json";
$paras = array();
if (!empty($_POST["submit"])) $submit = true;
else $submit = false;

$game_key = "game_random_number";
if ($submit)
{
    $paras = $_POST["form"]; 
    $id = intval($_POST["id"]);
    $game_id = intval($_POST["game_id"]);
    $func = $_POST["func"];
    $view_tpl = empty($_POST["view_tpl"])?$view_tpl:$_POST["view_tpl"];
    $embed = empty($_POST["embed"])?"":$_POST["embed"];
    /* Tien xu ly du lieu cho SUBMIT */
    $error_message = "";
   
}
else
{
    $id = empty($_GET["id"])?0:intval($_GET["id"]);
    $game_id = empty($_GET["game_id"])?0:intval($_GET["game_id"]);
    $func = empty($_GET["func"])?"":$_GET["func"];
    $view_tpl = empty($_GET["view_tpl"])?$view_tpl:$_GET["view_tpl"];
    $embed = empty($_GET["embed"])?"":$_GET["embed"];
    $game_key = empty($_GET["game_key"])?"game_speed_number":$_GET["game_key"];
    $game_mode = empty($_GET["game_mode"])?0:$_GET["game_mode"];
}
$game_key = "ex";

$general_para = array();
$general_para["id"] = $id;
$general_para["game_id"] = $game_id;
$general_para["func"] = $func;
$general_para["view_tpl"] = $view_tpl;
$general_para["embed"] = $embed;
/* Tien xu ly du lieu */
$error_message = "";

/** Xu ly hien thi du lieu **/
    /* Mot game */
$xtpl = new XTemplate( "$file.html", "tpl" );
if (!empty($error_message))
{
    $xtpl->assign( "error_message", $error_message);
    $xtpl->parse( "main.error" );
}
include("_assign_for_all.php");
$xtpl->parse( $game_key );
$game_content = $xtpl->text( $game_key );
    /* Chen vao game */
$xtpl = new XTemplate( "$file.html", "tpl" );
if (!empty($error_message))
{
    $xtpl->assign( "error_message", $error_message);
    $xtpl->parse( "main.error" );
}
include("_assign_for_all.php");
$xtpl->assign( "game_content", $game_content );
$xtpl->parse( "main" );
$content = $xtpl->text( "main" );

echo $content;

?>