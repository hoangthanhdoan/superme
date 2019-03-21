<?php
/* Thuc hien cac chuc nang */
if (!function_exists("editable")){
    function editable(){
        return true;
    }
}
if (!function_exists("is_guest")){
    function is_guest(){
        return false;
    }
}
if (!function_exists("is_admin")){
    function is_admin(){
        return false;
    }
}

function chuanhoa($paras){
    if (empty($paras)) return $paras;
    
    if (is_array($paras)){
        foreach ($paras as $k=>$v){
            $paras[$k] = trim($v);
        }
    }
    return $paras;
}
//Them moi
if ($func == "add")
{
	$content = "";
	if ($submit) {
	    
        if (function_exists ("before_add")) $paras = before_add($paras);
        if (!editable() || is_guest()) {
            $error_message = "Rất tiếc. Không thể thực hiện được thao tác này!";
        } else if (empty($paras)) $error_message = "Dữ liệu rỗng. Không xử lý được bộ dữ liệu này!";
        else $rs = Util::db_insert($table, "id", chuanhoa($paras));
        if (isset($rs["message"])) $error_message = $rs["message"];
		else 
		{
            
            $id = $rs; 
            $where = "TRUE";
			if (!empty( $table_criteria )) $where .= " AND (" . $table_criteria . ")";
            
            //$rs = $util->db_view(empty($table_full)?$table:$table_full, "*", $where . " AND (id = $id)" );
			$rs = $util->db_view(empty($table_full)?$table:$table_full, "*", " (id = $id)" );
			$data = $db->sql_fetchrow($rs);
            if (function_exists ("aview_row")) $data = aview_row($data);
			$data = chuanhoa($data);
            
            if (empty($view_tpl) || ($view_tpl == "rawdata_json")){
                $content = $data;
            } else {
    			$xtpl = new XTemplate( "$file.html", "tpl" );
                include("_assign_for_all.php");
    			$xtpl->assign( "gpara", $general_para );
    			$xtpl->assign( "row", $data );
    			$xtpl->assign( "form", $data );
    			$xtpl->assign( "newchange", "newchange add" );
    			$xtpl->parse( $view_tpl );
    			$content = $xtpl->text( $view_tpl );
            } 
			if (function_exists ("added")) $data = added($id, $data);
		}
	} else {
		$xtpl = new XTemplate( "$file.html", "tpl" );
		include("_assign_for_all.php");
		$xtpl->assign( "gpara", $general_para );
        $xtpl->assign( "form", $general_para );
        $xtpl->parse( "$view_tpl.$func" );
		$xtpl->parse( $view_tpl );
		$content = $xtpl->text( $view_tpl );
	}
	$return["data"] = $content;
	$return["message"] = $error_message;
	$return["message_vi"] = $util->translate($error_message);
	$return["success"] = empty($error_message)?true:false;
	header("Content-type: application/json");
	echo json_encode($return);
	
	die();
}
//Thay doi
elseif ($func == "edit")
{
	$content = "";
    $where = array(); $where["id"] = $id; 
    if ($submit)
    {
        if (!editable() || is_guest()) {
            $error_message = "Rất tiếc. Tài khoản không đủ quyền để SỬA DỮ LIỆU";
        } else {
            if (function_exists ("before_edit")) $paras = before_edit($id, $paras);
            
            if (empty($paras)) $rs["message"] = "Không xử lý được bộ dữ liệu này!";
            else $rs = $util->db_update($table, chuanhoa($paras), $where);
            if (isset($rs["message"])) $error_message = $rs["message"]; 
            else 
        	{
        		$rs = $util->db_view(empty($table_full)?$table:$table_full, "*", $where);
    			$data = $db->sql_fetchrow($rs);
                if (function_exists ("aview_row")) $data = aview_row($data);
    			$data = chuanhoa($data);
                $xtpl = new XTemplate( "$file.html", "tpl" );
    			include("_assign_for_all.php");
                $xtpl->assign( "gpara", $general_para );
                $xtpl->assign( "row", $data );
    			$xtpl->assign( "newchange", "newchange edit" );
    			$xtpl->parse( $view_tpl );
    			$content = $xtpl->text( $view_tpl );
                
    			if (function_exists ("edited")) edited($id, $data);
        	}
        }
    }
    else
    {
        $rs = $util->db_view(empty($table_full)?$table:$table_full, "*", $where);
        if (isset($rs["message"])) $error_message = $rs["message"]; 
        else {
            $paras = $db->sql_fetchrow($rs);
			if (function_exists ("aview_row")) $paras = aview_row($paras);
            $paras = chuanhoa($paras);
            $general_para["form"] = $paras;
            $xtpl = new XTemplate( "$file.html", "tpl" );
			include("_assign_for_all.php");
			$xtpl->assign( "gpara", $general_para );
            $xtpl->assign( "form", $paras );
			$xtpl->parse( "$view_tpl.$func" );
			$xtpl->parse( $view_tpl );
			$content = $xtpl->text( $view_tpl );
        }
    }
	
	$return["data"] = $content;
	$return["message"] = $error_message;
	$return["message_vi"] = $util->translate($error_message);
	$return["success"] = empty($error_message)?true:false;
	header("Content-type: application/json");
	echo json_encode($return);
	
	die();
}
//Xoa
elseif ($func == "del")
{
	$content = "";
    if (!editable() || is_guest()) {
        $error_message = "Rất tiếc. Tài khoản không đủ quyền để XÓA DỮ LIỆU";
    } else {
        $xoaduoc = true;
        if (function_exists ("before_delete")) $xoaduoc = before_delete($id);
            
        if (!$xoaduoc) $rs["message"] = "Không xóa được bộ dữ liệu này!";
        else $rs = $util->db_delete($table, array("id"=>$id));
        
        if (isset($rs["message"])) $error_message = $rs["message"]; 
        else 
        {
            $paras = array(); $func = "";
            
            if (function_exists ("deleted")) deleted($id);
        }
    }
	
	$return["data"] = $content;
	$return["message"] = $error_message;
	$return["message_vi"] = $util->translate($error_message);
	$return["success"] = empty($error_message)?true:false;
	header("Content-type: application/json");
	echo json_encode($return);
	
	die();
}
elseif ($func == "hide")
{
	$content = "";
    $where = array(); $where["id"] = $id; 
    //if ($submit)
    {
        if (!editable() || is_guest()) {
            $error_message = "Rất tiếc. Tài khoản không đủ quyền để THAY ĐỔI DỮ LIỆU";
        } else {
            $paras = "tamngung = 1-tamngung";
            if (function_exists ("before_hide")) $paras = before_hide($id, $paras);
            
            if (empty($paras)) $rs["message"] = "Không xử lý được bộ dữ liệu này!";
            else $rs = $util->db_update($table, chuanhoa($paras), $where);
            if (isset($rs["message"])) $error_message = $rs["message"]; 
            else 
        	{
        		$rs = $util->db_view(empty($table_full)?$table:$table_full, "*", $where);
    			$data = $db->sql_fetchrow($rs);
                if (function_exists ("aview_row")) $data = aview_row($data);
    			$data = chuanhoa($data);
                $xtpl = new XTemplate( "$file.html", "tpl" );
    			include("_assign_for_all.php");
                $xtpl->assign( "gpara", $general_para );
                $xtpl->assign( "row", $data );
    			$xtpl->assign( "newchange", "newchange edit" );
    			$xtpl->parse( $view_tpl );
    			$content = $xtpl->text( $view_tpl );
                
    			if (function_exists ("hidden")) hidden($id, $data);
        	}
        }
    }
    
	$return["data"] = $content;
	$return["message"] = $error_message;
	$return["message_vi"] = $util->translate($error_message);
	$return["success"] = empty($error_message)?true:false;
	header("Content-type: application/json");
	echo json_encode($return);
	
	die();
}
//Xu ly listview
else if ($func == "listview"){
    $limit = empty($_GET["limit"])?"0,100":$_GET["limit"];
    $field = empty($_GET["field"])?"":$_GET["field"];
    $selected = empty($_GET["selected"])?0:$_GET["selected"];
    $language = empty($_GET["language"])?"vi":$_GET["language"];
    
    $content = ""; $length = 0;
    if ( isset($listview_table[$field]["list"]) ){
        $list = $listview_table[$field]["list"];
        $keyname = empty($listview_table[$field]["key"])?"ten":$listview_table[$field]["key"];
        $length = count($list);
        $content = $util->listview($list, $selected, $keyname);
    } elseif ( !empty($listview_table[$field]["table"]) ){
        if (empty($where)) $where = empty($_GET["where"])?"TRUE":$_GET["where"];
        if ( !empty($listview_table[$field]["criteria"]) ) {
            $where = "(".$where.") AND (" . $listview_table[$field]["criteria"] . ")";
        }
        
        $table_list = $listview_table[$field]["table"];
        $keyname = empty($listview_table[$field]["key"])?"ten":$listview_table[$field]["key"];
        $idname = empty($listview_table[$field]["id"])?"id":$listview_table[$field]["id"];
        
        $list = array();
        $rs = $util->db_view($table_list, "$idname as id, $keyname", $where, array($keyname=>"ASC"), "LIMIT $limit");
        if (isset($rs["message"])) $error_message = $rs["message"];
        while ($row = $db->sql_fetchrow($rs)) $list[$row["id"]] = $row;
        $length = count($list);
        $content = $util->listview($list, $selected, $keyname); 
    } else {
        $error_message = "Chưa xử lý listview với " . $field;
    }
    if ($language == "en") $content = $util->convert_vi_to_en($content);
    
	$return["length"] = $length;
	$return["data"] = $content;
	$return["message"] = $error_message;
	$return["message_vi"] = $util->translate($error_message);
	$return["success"] = empty($error_message)?true:false;
	header("Content-type: application/json");
	echo json_encode($return);
	
	die();
}
//Hien thi mot it
elseif ($func == "aview" || $func == "search")
{
    $sort = empty($_GET["sort"])?(isset($sortby)?$sortby:""):"ORDER BY " . $_GET["sort"];
	$limit = empty($_GET["limit"])?"":"LIMIT " . $_GET["limit"];
    if (empty($where)) $where = empty($_GET["where"])?"TRUE":$_GET["where"];
	if (!empty($table_criteria)) $where = "(" . $where . ") AND (".$table_criteria.")";
    
	$content = "";	
	$rs = $util->db_view(empty($table_full)?$table:$table_full, "*", $where, $sort, $limit);
	if (isset($rs["message"])) 
        $error_message .= $rs["message"] . $rs["sql"]; 
	else {
		$xtpl = new XTemplate( "$file.html", "tpl" );
		$xtpl->assign( "gpara", $general_para );
        while ($row = $db->sql_fetchrow($rs)){
            if (function_exists ("aview_row")) $row = aview_row($row);
			include("_assign_for_all.php");
            $xtpl->assign( "row", $row );
			$xtpl->assign( "lang", $lang );
            $xtpl->parse( $view_tpl );
		}
		$content .= $xtpl->text( $view_tpl );
	}
	
	$return["data"] = $content;
	$return["message"] = $error_message;
	$return["message_vi"] = $util->translate($error_message);
	$return["success"] = empty($error_message)?true:false;
	header("Content-type: application/json");
	echo json_encode($return);
	die();
}
//Thong tin 1 row
elseif ($func == "info"){
    //if (empty($where)) 
    $where = empty($_GET["where"])?"true":$_GET["where"];
    $field = empty($_GET["field"])?"id":$_GET["field"];
    
    $table_list = empty($info_table[$field]["table"])?$table:$info_table[$field]["table"];
    if (!empty($info_table[$field]["where"])) $where = "($where) AND (".$info_table[$field]["where"].")";
    
    $data = array();
    $rs = $util->db_view($table_list, "*", $where, "", "LIMIT 0, 1");
    if (!empty($rs["message"])) $error_message = $rs["message"]; 
    while ($row = $db->sql_fetchrow($rs)) $data = $row;
    foreach ($data as $k=>$v) if (is_numeric($k)) unset($data[$k]);
    foreach ($data as $k=>$v) if (is_numeric($v)) $data[$k . "_ten"] = $util->format($v);
    
    $return["data"] = $data;
	$return["message"] = $error_message . $table_list;
	$return["message_vi"] = $util->translate($error_message);
	$return["success"] = empty($error_message)?true:false;
	header("Content-type: application/json");
	echo json_encode($return);
	
	die();
}
//Ket thuc nhap phieu
elseif ($func == "finish"){
    if (!editable() || is_guest()) {
        $error_message = "Rất tiếc. Tài khoản không thể thực hiện thao tác này";
    } else if (function_exists("finished_data")){
        $_data = finished_data();
        
        if ( empty($_data["table"]) ) $_data["table"] = "";        
        if ( !isset($_data["data"]) ) $_data["data"] = array("trangthai"=>$_phieunhap_xong);
        if ( !isset($_data["where"]) ) $_data["where"] = array("id"=>0);
        
        $rs = $util->db_update($_data["table"], $_data["data"], $_data["where"] );
        if (isset($rs["message"])) $error_message = $rs["message"]; 
        elseif ( !empty($_data["transfer"]) ) {
            echo '<script>parent.location = "' . $_data["transfer"] . '";</script>';
            die();
        }
    }
}
//Xoa mot phieu
elseif ($func == "remove"){
    if (!editable() || is_guest()) {
        $error_message = "Rất tiếc. Tài khoản không thể thực hiện thao tác này";
    } if (function_exists("removed_data")){
        $_data = removed_data();
        
        function exec_remove_data($_data){
            if (!empty($_data["child"])) exec_remove_data($_data["child"]);
            
            global $util;
            
            if ($_data["deletable"] !== false) {
                if ( empty($_data["table"]) ) $_data["table"] = "";        
                if ( !isset($_data["where"]) ) $_data["where"] = array("id"=>0);
                
                $rs = $util->db_delete($_data["table"], $_data["where"] );
                if (isset($rs["message"])) {
                    $error_message = $rs["message"];
                    die($error_message);
                } elseif ( !empty($_data["transfer"]) ) {
                    echo '<script>parent.location = "' . $_data["transfer"] . '";</script>';
                    die();
                }
            }
        }
        
        exec_remove_data($_data);
    }
}
/** Mot so ham phuc vu **/
function finished_data_init(){
    $data = array();
    
    $data["print"] = false;
    $data["transfer"] = "";
    $data["table"] = "";
    $data["data"] = "";
    $data["where"] = "";
    
    return $data;
}
function removed_data_init(){
    $data = array();
    
    $data["transfer"] = "";
    $data["table"] = "";
    $data["where"] = "";
    $data["child"] = [];
    
    return $data;
}
?>