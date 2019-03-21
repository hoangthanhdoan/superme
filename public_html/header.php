<?php

/**
if (empty($user_info["groupid"]) || permission_check($key, $user_info["groupid"]) === false) {
    die("Khong duoc phep. <a href='index.php'>Nhấp vào đây để chuyển</a>"); 
} else {
    Util::db_update(Database::table_taikhoan(), ["func_key"=>$key . (empty($func)?"":": $func") . (empty($id)?"":" id=$id")], ["id"=>$user_info["id"]], false);
}
/**/


/** BEGIN: dem so **/

/** END: dem so **/

include("menu.php");

foreach ($actions as $k=>$action)
{
    $actions[$k]["viewable"] = true;
    if (!empty($menu_soluong[$k])) $actions[$k]["soluong_canhbao"] = $menu_soluong[$k];
    if (!empty($action["sub"])){
        foreach ($action["sub"] as $sk=>$sa){
            $actions[$k]["sub"][$sk]["viewable"] = true;
        }
    }
}
/* Xu ly hien thi du lieu */
$embed = empty($_GET["embed"])?false:true;
if ($embed)$header_file = "sub_header.html";
else $header_file = "header.html"; 
$xtpl = new XTemplate( $header_file, "tpl" );

include("_assign_for_all.php");

foreach ($actions as $k=>$action)
{
    if (!$action["viewable"]) continue;
    if (!empty($key) && $k == $key) $action["active"] = "active";
    $xtpl->assign( "row", $action );
    
    if (!empty($action["sub"])){
        foreach ($action["sub"] as $sk=>$sa){
            if (!$sa["viewable"]) continue;
            if (!empty($key) && $sk == $key) {
                $action["active"] = "active";
                $xtpl->assign( "row", $action );
                $sa["active"] = "active";
            }
    
            $xtpl->assign( "srow", $sa );
            $xtpl->parse( "main.row.prow.srow" );
        }
        $xtpl->parse( "main.row.prow" );
        
    } else {
        $xtpl->parse( "main.row.nrow" );
    }
    $xtpl->parse( "main.row" );   
}

if (in_array($key, ["profile", "login", "logout"])) {
    $xtpl->assign( "profile_active", "active" );
}

$xtpl->parse( "main" );
echo $xtpl->text( "main" );

?>
