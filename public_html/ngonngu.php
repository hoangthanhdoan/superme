<?php
@require_once("init.php");
$key = "ngonngu";
$header["subtitle"] = "Ngôn ngữ";
$file = "ngonngu";
$table = Database::table_ngonngu();
//$table_full = $table_ngonngu;
$sortby = array("ma"=>"ASC");

/* Nhan du lieu dau vao */
$func = ""; $embed = ""; $view_tpl = "form_json";
$paras = array();
if (!empty($_POST["submit"])) $submit = true;
else $submit = false;

if ($submit)
{
	$paras = $_POST["form"];
	$id = intval($_POST["id"]);
	$func = $_POST["func"];
	$view_tpl = empty($_POST["view_tpl"])?$view_tpl:$_POST["view_tpl"];
	$embed = empty($_POST["embed"])?"":$_POST["embed"];
    /* Tien xu ly du lieu cho SUBMIT */
    $error_message = "";
}
else
{
	$id = empty($_GET["id"])?0:intval($_GET["id"]);
	$func = empty($_GET["func"])?"":$_GET["func"];
	$view_tpl = empty($_GET["view_tpl"])?$view_tpl:$_GET["view_tpl"];
    $embed = empty($_GET["embed"])?"":$_GET["embed"];
}
$general_para = array();
$general_para["id"] = $id;
$general_para["func"] = $func;
$general_para["view_tpl"] = $view_tpl;
$general_para["embed"] = $embed;

/* Tien xu ly du lieu */
$error_message = "";

/* Thuc hien cac chuc nang */

function aview_row($row){
    global $util;
    return $row;
}

include("_form.php");

function luu_file(){
    global $domain;
    $_lang_arr = Util::cache_data_array(Database::table_ngonngu());
    $language = []; $language_codes = ["vi", "en"];
    //File .php
    foreach ($language_codes as $lc){
        $tenfile = "language.$lc.php";
        shell_exec("echo '<?php' > $tenfile");
        foreach ($_lang_arr as $k=>$v) {
            shell_exec("echo '$"."language[\"".$v["ma"]."\"] = \"".$v[$lc]."\";' >> ".$tenfile);
        }
        shell_exec("echo '?>' >> $tenfile");
    }
    //File js
    foreach ($language_codes as $lc){
        $tenfile = "tpl/js/language.$lc.js";
        shell_exec("echo 'language = {' > $tenfile");
        foreach ($_lang_arr as $k=>$v) {
            shell_exec("echo '".$v["ma"].": \"".$v[$lc]."\",' >> ".$tenfile);
        }
        shell_exec("echo 'dfsdf: 1}' >> $tenfile");
    }
}
function added($id, $data){ luu_file();return $data; }
function edited($id, $data){ luu_file();return $data; }
function deleted($id){luu_file();return $id;}

//Hien thi

//Xu ly du lieu
$array_data["form"] = $paras;
if (empty($func)) $func = "add";

/* Xu ly hien thi du lieu */
$xtpl = new XTemplate( "$file.html", "tpl" );
if (!empty($error_message))
{
    $xtpl->assign( "error_message", $error_message);
    $xtpl->parse( "main.error" );
}
include("_assign_for_all.php");
$xtpl->assign( "header", $header );
$xtpl->assign( "file", $file );

$xtpl->parse( "main." . $func );

$xtpl->parse( "main" );
$content = $xtpl->text( "main" );

if ($embed == "subfull"){
	include("subheader.php");
	echo $content;
}elseif ($embed == "ajax"){
	echo $content;
} else {
	include("header.php");
	echo $content;
	include("footer.php");
}
?>