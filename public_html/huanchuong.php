<?php
@require_once("init.php");
$key = "huanchuong";
$header["subtitle"] = $language["huan_chuong"];
$file = "donvitinh";
$table = Database::table_huanchuong();
//$table_full = $table_donvitinh;
$sortby = array("ten"=>"ASC");
$listview_table["huanchuongid"]["table"] = $table;

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
if ($func == "search_ai"){
    $term = empty($_GET["term"])?"":$_GET["term"];
    $where = "";
    $list = Huanchuong_list::search_ai($term, $where);
    
    $data = [];
    foreach ($list as $k=>$v){
        $row = $v->get_info_all_fields();
        
        $row["ten"] = trim($row["ten"]);
        $row["value"] = $row["ten"];
        $row["label"] = $row["ten"];
        $row["desc"] = empty($row["ghichu"])?"":$row["ghichu"];
        
        $data[] = $row;
    }
    
    header("Content-type: application/json");
    echo json_encode($data);

    die();
}

function aview_row($row){
    global $util;
    return $row;
}

include("_form.php");

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