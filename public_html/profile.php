<?php
@require_once("init.php");
$key = "profile";
$header["subtitle"] = $language["thong_tin_ca_nhan"];
$file = "profile";
$table = "";
//$sortby = array("ten"=>"ASC");

/* Nhan du lieu dau vao */
$func = ""; $embed = ""; $view_tpl = "form_json";
$paras = array();
if (!empty($_POST["submit"])) $submit = true;
else $submit = false;

if ($submit)
{
    $view_tpl = empty($_POST["view_tpl"])?$view_tpl:$_POST["view_tpl"];
    $embed = empty($_POST["embed"])?"":$_POST["embed"];
    /* Tien xu ly du lieu cho SUBMIT */
    $error_message = "";
    
    $avatar = isset($_POST['avatar']) ? $_POST['avatar'] : '';
    $avatar_path = '';
    //if (!preg_match('#^https?://#i', $avatar) && !empty($avatar)) 
    if (!empty($_FILES['avatar_path']['name']))
    {
        echo "Co submit file";
    } else {
        echo "Khong submit file";
    }

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

$general_para = array();
$general_para["id"] = $id;
$general_para["game_id"] = $game_id;
$general_para["func"] = $func;
$general_para["view_tpl"] = $view_tpl;
$general_para["embed"] = $embed;
/* Tien xu ly du lieu */
$error_message = "";
$nam_sinh = [];
$year = date("Y");
for ($i = 0; $i < 100; $i++) $nam_sinh[$i] = $year - $i;

/** Xu ly hien thi du lieu **/
$xtpl = new XTemplate( "$file.html", "tpl" );
if (!empty($error_message))
{
    $xtpl->assign( "error_message", $error_message);
    $xtpl->parse( "main.error" );
}
include("_assign_for_all.php");
foreach ($nam_sinh as $k=>$v) {
    $xtpl->assign( "nam_sinh", $v );
    $xtpl->parse( "main.nam_sinh" );
}
$xtpl->parse( "main" );
$content = $xtpl->text( "main" );

if ($embed) echo $content;
else {
    include("header.php");
    echo $content;
    include("footer.php");
}

?>