<?php

/**
 * @Project NUKEVIET 3.x
 * @Author Hoang Tin (contact@hoangtincoltd.vn)
 * @Copyright (C) 2014 Hoang Tin Co.,Ltd. All rights reserved
 * @Createdate Sat, 10 May 2014 14:43:22 GMT
 */
class Util
{
    static protected $bao_loi_admin = false;
    
    static function transaction_start(){
        global $db;
        $db->query("SET AUTOCOMMIT=0");
        $db->sql_query("START TRANSACTION");
    }
    
    static function transaction_commit(){
        global $db;
        $db->sql_query("COMMIT");
    }
    
    static function transaction_commit_end(){
        global $db;
        $db->sql_query("COMMIT");
        $db->sql_query("SET AUTOCOMMIT=1");
    }
    
    static function transaction_rollback(){
        global $db;
        $db->sql_query("ROLLBACK");
    }
    
    static function transaction_rollback_end(){
        global $db;
        $db->sql_query("ROLLBACK");
        $db->sql_query("SET AUTOCOMMIT=1");
    }
    
    static function db_a_value($table, $fields, $wheredata, $defaultvalue, $sortdata = "")
    {
        global $db;
        
        if (empty($sortdata)) $sortdata = array("id"=>"DESC");
        $rs = static::db_view($table, $fields, $wheredata, $sortdata, "LIMIT 0,1");
        if (isset($rs["message"])) return ($rs["message"] . "<br/>" . $rs["sql"]);
        list($value) = $db->sql_fetchrow($rs);
        if (empty($value)) $value = $defaultvalue;
        
        return $value;
    }
 static function db_a_value_duy($table, $fields, $wheredata, $defaultvalue)
    {
        global $db;
        
        $rs = static::db_view($table, $fields, $wheredata, array("id"=>"ASC"));
        if (isset($rs["message"])) return ($rs["message"] . "<br/>" . $rs["sql"]);
        list($value) = $db->sql_fetchrow($rs);
        if (empty($value)) $value = $defaultvalue;
        
        return $value;
    }
    static function get_a_value($table, $fields, $wheredata, $defaultvalue)
    {
        return static::db_a_value($table, $fields, $wheredata, $defaultvalue);
    }
     
    static function sql_to_view($table, $fields, $wheredata, $sortdata = null)
    {
        $sql = "SELECT $fields FROM `$table`";
        //Sort
        $sort = "";
        if (!empty($sortdata))
        {
            $sort = " ORDER BY ";
            $counter = count($sortdata);
            foreach ($sortdata as $key=>$value)
            {
                $counter--;
                $sort .= " " . $key . " " . $value . " " . (($counter == 0) ? "": ",");
            }
        }
        
        //where
        $where = " WHERE true";
        if (empty($wheredata))
        {
            $where = "";
        }
        elseif (is_array($wheredata))
        {
            $counter = count($wheredata);
            foreach ($wheredata as $key=>$value)
            {
                $counter--;
                if ($key == "time") $key = "`" . $key . "`";
                if (is_numeric($value)){
                    $where .= " AND (" . $key . " = " . $value . ")";
                } elseif (strpos($value, "'") !== false){//Khong tim thay '
                    $where .= " AND (" . $key . " = \"" . $value . "\")";
                } else {
                    $where .= " AND (" . $key . " = '" . $value . "')";
                }
            }
        }
        else
        {
            $where = " WHERE " . $wheredata . " ";
        }
        
        $sql .= $where . $sort;
        
        return $sql;
    }

    static function db_view($table, $fields, $wheredata, $sortdata = null, $other_option = "")
    {
        global $db;
        $sql = static::sql_to_view($table, $fields, $wheredata, $sortdata) . " " . $other_option;
        $rs = $db->sql_query($sql);
        if ($rs == false) 
        {
            $error = $db->sql_error(); 
            $error["sql"] = $sql;
            if (static::$bao_loi_admin && function_exists("is_admin") && is_admin()) echo $sql . "<hr/>" . json_encode($error);
            return $error;
        }
        else return $rs; 
    }

    /*
     - fields danh sach cac field. Co dang: SUM(`soluong`) as sl, COUNT(*) as dem
     - groupfields la ds cac field. Co dang: malop, gioitinh
     - wheredata la mang gom ten field va gia tri cua no. Luu y: O dang chuoi phai co \"
    */
    static function sql_to_total($table, $fields, $groupfields = null, $wheredata = null, $sortdata = null, $option="")
    {
        $sql = "SELECT $fields FROM `$table` ";
        //Sort
        $sort = "";
        if (!empty($sortdata))
        {
            $sort = " ORDER BY ";
            $counter = count($sortdata);
            foreach ($sortdata as $key=>$value)
            {
                $counter--;
                $sort .= " `" . $key . "` " . $value . " " . (($counter == 0) ? "": ",");
            }
        }
        
        //group
        $group = "";
        if (!empty($groupfields))
        {
            $group = " GROUP BY " . $groupfields . " ";
        }
        
        //where
        $where = " WHERE true";
        if (empty($wheredata))
        {
            $where = "";
        }
        elseif (is_array($wheredata))
        {
            $counter = count($wheredata);
            foreach ($wheredata as $key=>$value)
            {
                $counter--;
                if ($key == "time") $key = "`" . $key . "`";
                if (is_numeric($value)){
                    $where .= " AND (" . $key . " = " . $value . ")";
                } elseif (strpos($value, "'") !== false){//tim thay '
                    $where .= " AND (" . $key . " = \"" . $value . "\")";
                } else {
                    $where .= " AND (" . $key . " = '" . $value . "')";
                }
            }
        }
        else
        {
            $where .= " AND (" . $wheredata . ")";
        }
        
        $sql .= $where . $group . $sort . $option;
        return $sql;
    }

    /**
     - fields danh sach cac field. Co dang: SUM(`soluong`) as sl, COUNT(*) as dem
     - groupfields la ds la mang gom cac field. Co dang: malop, gioitinh
     - wheredata la mang gom ten field va gia tri cua no. Luu y: O dang chuoi phai co \"
    **/
    static function db_total($table, $fields, $groupfields = null, $wheredata = null, $sortdata = null, $option="")
    {
        global $db;
        $sql = static::sql_to_total($table, $fields, $groupfields, $wheredata, $sortdata, $option);
        $rs = $db->sql_query($sql);
        if ($rs == false) 
        {
            $error = $db->sql_error(); 
            $error["sql"] = $sql; 
            return $error;
        }
        else return $rs; 
    }

    //idname: id auto increment
    static function sql_to_insert($table, $idname, $data)
    {
        $sql = "INSERT INTO `$table` ";
        if (is_array($data)){
            $fields = "`$idname`";
            $values = "NULL";
            foreach ($data as $key=>$value)
            {
                $fields .= ", `" . $key . "`";
                if (is_numeric($value)){
                    $values .= ", " . $value . "";
                } elseif (strpos($value, "'") !== false){//Tim thay '
                    $values .= ", \"" . $value . "\"";
                } else {
                    $values .= ", '" . $value . "'";
                }
            }
            $sql .= "($fields) VALUES ($values)";
        } else {
            $sql .= " SET " . $data;
        }
        return $sql;
    }
    
    /** data: string or array **/
    static function db_insert($table, $idname, $data, $with_log = true)
    {
        global $db, $user_info;
        $sql = static::sql_to_insert($table, $idname, $data);
        $rs = $db->sql_query_insert_id($sql);
        if ($rs == false) {
            $error = $db->sql_error(); 
            $error["sql"] = $sql;
            if (static::$bao_loi_admin && function_exists("is_admin") && is_admin()) echo $sql . "<hr/>" . json_encode($error);
            return $error;
        } 
        //Ghi log
        if ($with_log){
            if (is_array($data)) $new_data = $data;
            else $data[Logger::key_data_insert_string()] = $data;
            $where["id"] = $rs;
            $log_obj = new Log(Logger::key_insert(), $table, $user_info, $new_data, null, $where);
            Logger::set_log($log_obj);
        }
        //Tra ve id cua cau lenh
        return $rs;
    }

    //idname: id auto increment
    static function sql_to_update($table, $data, $wheredata)
    {
        $sql = "UPDATE `$table` SET ";
        //fields
        $fields = "";
        if (is_array($data)){
            $counter = count($data);
            foreach ($data as $key=>$value)
            {
                $counter--;
                if (is_numeric($value)) {
                    $fields .= "`" . $key . "` = 0" . $value . "" . (($counter == 0) ? "": ",");
                } elseif (strpos($value, "'") !== false){//tim thay '
                    $fields .= "`" . $key . "` = \"" . $value . "\"" . (($counter == 0) ? "": ",");
                } else {
                    $fields .= "`" . $key . "` = '" . $value . "'" . (($counter == 0) ? "": ",");
                }
            }    
        } else $fields = $data;
        
        //where
        $where = " WHERE true";
        if (empty($wheredata)) {
            $where = "";
        } elseif (is_array($wheredata)) {
            $counter = count($wheredata);
            foreach ($wheredata as $key=>$value)
            {
                $counter--;
                if ($key == "time") $key = "`" . $key . "`";
                if (is_numeric($value)) {
                    $where .= " AND (" . $key . " = " . $value . ")";
                }elseif (strpos($value, "'") !== false){//tim thay '
                    $where .= " AND (" . $key . " = \"" . $value . "\")";
                } else {
                    $where .= " AND (" . $key . " = '" . $value . "')";
                }
            }
        } else $where = " WHERE " . $wheredata . " ";
        $sql .= $fields . $where;
        
        return $sql;
    }
    
    /** data, where_data: string or array **/
    static function db_update($table, $data, $wheredata, $with_log = true)
    {
        global $db, $user_info;
        $record_rs = static::db_view($table, "*", $wheredata);
        $record = $db->sql_fetchrow($record_rs);
            
        $sql = static::sql_to_update($table, $data, $wheredata);
        $rs = $db->sql_query($sql);
        if ($rs == false) 
        {
            $error = $db->sql_error(); 
            $error["sql"] = $sql;
            
            if (static::$bao_loi_admin && function_exists("is_admin") && is_admin()) echo $sql . "<hr/>" . json_encode($error);
            return $error;
        }
        //Ghi log
        if ($with_log){
            $new_data = [];$old_data = [];
            if (is_array($data)){
                foreach ($data as $k=>$v){
                    if (isset($record[$k])){
                        if (Log::is_deferent($k, $v, $record[$k])) {
                            $old_data[$k] = $record[$k];
                            $new_data[$k] = $v;
                        }
                    } else $new_data[$k] = $v;
                }
            } else {
                $new_data[Logger::key_data_update_string()] = $data;
                $old_data = $record;
            }
            
            if (is_array($wheredata)) $where_log = $wheredata;
            else $where_log[Logger::key_where_string()] = $wheredata;
            
            $log_obj = new Log(Logger::key_update(), $table, $user_info, $new_data, $old_data, $where_log);
            Logger::set_log($log_obj);
        }
        //Tra ve ket qua
        return $rs; 
    }

    static function sql_to_delete($table, $wheredata)
    {
        $sql = "DELETE FROM `$table`";
        //where
        $where = " WHERE true";
        if (is_array($wheredata)) {
            $counter = count($wheredata);
            foreach ($wheredata as $key=>$value)
            {
                $counter--;
                if (is_numeric($value)){
                    $where .= " AND `" . $key . "` = " . $value . "";
                } elseif (strpos($value, "'") !== false){//tim thay '
                    $where .= " AND `" . $key . "` = \"" . $value . "\"";
                } else {
                    $where .= " AND `" . $key . "` = '" . $value . "'";
                }
            }
        } else {
            $where = " WHERE " . $wheredata . " ";
        }
        
        $sql .= $where;
        
        return $sql;
    }

    /** where_data: string or array **/
    static function db_delete($table, $wheredata, $with_log = true)
    {
        global $db, $user_info;
        $record_rs = static::db_view($table, "*", $wheredata);
        $record = $db->sql_fetchrow($record_rs);
            
        $sql = static::sql_to_delete($table, $wheredata);
        $rs = $db->sql_query($sql);
        if ($rs == false) 
        {
            $error = $db->sql_error(); 
            $error["sql"] = $sql;
            if (static::$bao_loi_admin && function_exists("is_admin") && is_admin()) echo $sql . "<hr/>" . json_encode($error);
            return $error;
        }
        //Ghi log
        if ($with_log){
            if (is_array($wheredata)) $where_log = $wheredata;
            else $where_log[Logger::key_where_string()] = $wheredata;
            
            $log_obj = new Log(Logger::key_delete(), $table, $user_info, null, $record, $where_log);
            Logger::set_log($log_obj);
        }
        //Tra ve ket qua
        return $rs; 
    }
    /** Return ["field1"=>value1, "field2"=>value2] **/
    static function record_value($table, $field, $idvalue)
    {
        global $db;
        
        $where = array(); $where["id"] = $idvalue;
        $sql = static::sql_to_view($table, $field, $where);
        $value = $db->sql_fetchrow($db->sql_query($sql));
        
        return $value;
    }

    static function cache_data_array($table, $idname = "id", $where = null, $sort = null)
    {
        global $db;
        
        $arr = array();
        //
        $sql = static::sql_to_view($table, "*", $where, $sort);
        $rs = $db->sql_query($sql);
        while ($row = $db->sql_fetchrow($rs))
        {
            foreach ($row as $k=>$v) if (is_numeric($k)) unset($row[$k]);
            $arr[$row["$idname"]] = $row;
        }
        
        return $arr;
    }

    static function cache_data_array_sortable($table, $idname, $where = null, $sort = null)
    {
        global $db;
        
        $arr = array();
        //
        $sql = static::sql_to_view($table, "*", $where, $sort);
        $rs = $db->sql_query($sql);
        while ($row = $db->sql_fetchrow($rs))
        {
            $arr[] = $row;
        }
        
        return $arr;
    }

    static function listview($data, $currentvalue, $fieldview = "ten")
    {
        global $global_config, $module_name, $module_file, $lang_module, $module_config, $module_info, $op;

        //$xtpl = new XTemplate( "listview.tpl", "..\..\lib");
        $xtpl = new XTemplate( "listview.tpl", "lib");
        foreach ($data as $key=>$value)
        {
            if (isset($value["child"]))
            {
                foreach ($value["child"] as $skey=>$svalue)
                {				
                    if (isset($svalue["child"]))
                    {
                        foreach ($svalue["child"] as $s2key=>$s2value)
                        {
                            if (isset($s2value["child"]))
                            {
                                foreach ($s2value["child"] as $s3key=>$s3value)
                                {
                                    $xtpl->assign("value", $s3key);
                                    $xtpl->assign("title", $s3value[$fieldview]);
                                    $selected = ($s3key == $currentvalue)?"selected":"";
                                    $xtpl->assign("selected", $selected);
                                    $xtpl->parse( 'main.cap0.cap1.cap2.cap3' );
                                }
                            }
                            $xtpl->assign("value", $s2key);
                            $xtpl->assign("title", $s2value[$fieldview]);
                            $selected = ($s2key == $currentvalue)?"selected":"";
                            $xtpl->assign("selected", $selected);
                            $xtpl->parse( 'main.cap0.cap1.cap2' );
                        }
                    }
                    $xtpl->assign("value", $skey);
                    $xtpl->assign("title", $svalue[$fieldview]);
                    $selected = ($skey == $currentvalue)?"selected":"";
                    $xtpl->assign("selected", $selected);
                    $xtpl->parse( 'main.cap0.cap1' );
                }
            }
            $xtpl->assign("value", $key);
            $xtpl->assign("title", $value[$fieldview]);
            $selected = ($key == $currentvalue)?"selected":"";
            $xtpl->assign("selected", $selected);
            $xtpl->parse( 'main.cap0' );
        }
        $xtpl->parse( 'main' );
        return $xtpl->text( 'main' );
    }

    //Phan tang chuyen muc
    static function to_tree($data)
    {
        //Cap 1
        for ($i = 3; $i >= 1; $i--)
        {
            //echo $i . "============<br/>";
            foreach ($data as $key=>$value)
            {
                //if ($key == 1485 || $key == 192 || $key == 193 || $key == 29)
                //echo "$key = " . $data[$key]["ten"] . "<br/>";
                
                //if (!isset($data[$key]["tree"])) $data[$key]["tree"] = false;
                //if ($value["parent"] > 0 && !$data[$key]["tree"])
                if ($value["cap"] == $i)
                {
                    //if (!isset($data[$value["parent"]]["child"])){
                    //	$data[$value["parent"]]["child"] = array();
                    //}
                    $data[$value["parent"]]["child"][$key] = $value;
                    //if ($key == 1485 || $key == 192 || $key == 193 || $key == 29)
                        //echo "&nbsp;&nbsp;&nbsp;&nbsp;Dua " . $value["ten"] . " vao " . $value["parent"] . " " . $data[$value["parent"]]["ten"] . " <br/>";
                    //$data[$key]["tree"] = true;
                    //$data[$value["parent"]]["tree"] = false;
                }
            }
        }
        //Khu bo
        foreach ($data as $key=>$value)
        {
            if ($value["parent"] > 0)
            {
                unset($data[$key]);
            }
        }
        
        return $data;
    }

    static function firewall()
    {
        global $user_info;
        
        if ($user_info["userid"] <= 0) 
        {
            Header("Location:" . NV_BASE_SITEURL);
        }
    }

    //Chuyen 1 cay hang hoa ve dang list
    static function to_list($tree)
    {
        global $hanghoa_arr;
        
        $rs = array();
        foreach($tree as $node)
        {
            $rs[] = $node;
            //if (!empty($node["children"]))
            {
                $list = to_list($node["child"]);
                foreach ($list as $nd)
                {
                    $rs[] = $nd;
                    //die("co den day");
                }
            }
        }
        
        return $rs;
    }

    //Sap xep tang dan
    static function sortasc_old($data, $fieldname)
    {
        $len1 = count($data);
        $len2 = $len1;
        for ($i = 0; $i < $len1; $i++)
        {
            for ($j = $i+1; $j < $len2-1; $j++)
            {
                if ($data[$i][$fieldname] > $data[$j][$fieldname])
                {
                    $tmp = $data[$i];
                    $data[$i] = $data[$j];
                    $data[$j] = $tmp;
                }
            }
        }
        
        return $data;
    }
    //Sap xep tang dan
    static function sortasc($data, $fieldname)
    {
        $tmp = array();
        foreach ($data as $key=>$value)
        {
            $pt["key"] = $key;
            $pt["value"] = $value;
            $tmp[] = $pt;
        }
        
        $rs = array();
        $len1 = count($tmp);
        $len2 = $len1;
        for ($i = 0; $i < $len1; $i++)
        {
            for ($j = $i+1; $j < $len2-1; $j++)
            {
                if ($tmp[$i]["value"][$fieldname] > $tmp[$j]["value"][$fieldname])
                {
                    $t = $tmp[$i];
                    $tmp[$i] = $tmp[$j];
                    $tmp[$j] = $t;
                }
            }
            $rs[$tmp[$i]["key"]] = $tmp[$i]["value"];
        }
        
        return $rs;
    }

    static function format($number, $decimal = 2, $decimal_spacing = ".", $spacing = ",")
    {
        return number_format(floatval($number), $decimal, $decimal_spacing, $spacing);
    }

    static function creategroup($arr, $groupfield = "group")
    {
        $gr = array();
        foreach ($arr as $a)
        {
            $gr[$a[$groupfield]][] = $a;
        }
        
        return $gr;
    }
    
    static function json2array($json)
    {
        return json_decode($json, true);
    }
    
    static function getdomain($url, $return_with_protocol=false)
    {
        $protocol = explode("://", $url);
        $url = str_replace("http://", "", $url);
        $url = str_replace("https://", "", $url);
        $domain = explode("/", $url);
        return (($return_with_protocol && isset($protocol[0]))? $protocol[0] . "://" : "") . $domain[0];
    }
    
    static function match_url($base_url, $link)
    {
        $first_char = substr($link, 0, 1);
        if ($first_char == "#") return $base_url . $link;
        elseif ($first_char == "?")
        {
            $link_part = explode("?", $base_url . "?");
            return $link_part[0] . $link;
        }
        $two_first_char = substr($link, 0, 2);
        if ($two_first_char == "//") return "http:" . $link;
        
        $protocol = explode("://", $link);
        if (count($protocol) > 1) return $link;
        $link_part = explode("/", $link);
        if (empty($link_part[0])) return static::getdomain($base_url, true) . $link;
        else //Khong co dau / o truoc
        {
            $link_part = explode("/", $base_url);
            $new_link = "";
            $len = count($link_part);
            for ($i = 0; $i < $len - 1; $i++)
            {
                $new_link .= $link_part[$i] . "/";
            }
            $new_link .= $link;
            return $new_link;
        }
    }
    
    /** 
     * Input: startpage la trang khoi dau; array config["pager"] cua config chung; first2last=true de di tu trang cuoi cung toi trang moi nhat
     * Output: array chua ds link cac page
    **/
    static function page_list($startpage, $config, $first2last=true)
    {
        global $bodyreader;
        if ($first2last) $continue = "next"; 
        else $continue = "previous";
        $items = $bodyreader->parse_advance($startpage, $config, array($continue));
        $pages[] = $startpage; 
        while (!empty($items[0][$continue]))
        {
            $link = static::match_url($startpage, $items[0][$continue]);
            $pages[] = $link;
            $items = $bodyreader->parse_advance($link, $config, array($continue));
        }
        
        return $pages;
    }
    
    /** 
     * Input: startpage la trang khoi dau; array config["pager"] cua config chung;
     * Output: link cua page moi hon
    **/
    static function page_previous($startpage, $config)
    {
        return static::page_link($startpage, $config, "previous");
    }

    /** 
     * Input: startpage la trang khoi dau; array config["pager"] cua config chung;
     * Output: link cua page cu hon
    **/
    static function page_next($startpage, $config)
    {
        return static::page_link($startpage, $config, "next");
    }

    /** 
     * Input: startpage la trang khoi dau; array config["pager"] cua config chung;
     * Output: link cua page cuoi cung
    **/
    static function page_last($startpage, $config)
    {
        return static::page_link($startpage, $config, "last");
    }

    /** 
     * Input: startpage la trang khoi dau; array config["pager"] cua config chung;
     * Output: link cua page cuoi cung
    **/
    static function page_last_search($startpage, $config)
    {
        $next_page = static::page_next($startpage, $config);
        if (empty($next_page)) return $startpage;
        else return static::page_last_search($next_page, $config);
    }
        
    /** 
     * Input: startpage la trang khoi dau; array config["pager"] cua config chung; $goto chua 1 so so cac gia tri: first, previous, next, last
     * Output: link cua page moi hon
    **/
    
    static function page_link($startpage, $config, $goto)
    {
        global $bodyreader;
        $items = $bodyreader->parse_advance($startpage, $config, array($goto));
        
        if (empty($items[0][$goto])) return "";
        else return static::match_url($startpage, $items[0][$goto]);
    }
    /**
     * Input: keyword
     * Output: image urls from image.google.com
    **/
    private static function get_searchedimage($keyword)
    {
        global $bodyreader;
        if (empty($keyword)) return array();
        $config = '
        {
            "rss": {
                "tag": "td",
                "key": "style",
                "value": "width:25%;word-wrap:break-word",
                "quantity": 5,
                "image": {
                    "tag": "img",
                    "getattribute": "src",
                    "quantity":1
                }
            }
        }';
        $keyword = substr(strip_tags(urldecode($keyword)), 0, 400);
        $keyword = urlencode($keyword);
        $config_arr = static::json2array($config);
        $url = "https://www.google.com/search?site=&tbm=isch&source=hp&biw=1242&bih=763&q=" . $keyword;
        $imgs = $bodyreader->parse_advance($url, $config_arr["rss"], array("image"));
        if (empty($imgs[0]["image"])) $imgs[0]["image"] = "";
        return $imgs;
    }
    
    /**
     * Input: imgs=array([0]=>array("image"=>), [0]=>array("image"=>),...)
     *        Ex: $imgs = get_searchedimage($keyword)
     * Output: get first portrait image array("image"=>). Return anyimage if not exist
    **/
    private static function get_portrait_image($imgs)
    {
        foreach ($imgs as $img)
        {
            if (empty($img["image"])) return $imgs[0];
            $size = getimagesize($img["image"]);
            if ($size[0] > $size[1]) return $img;//width>height            
        }
        
        return $imgs[0];
    }
    /**
     * Input: keyword
     * Output: a_portrait_image_url from image.google.com
    **/
    static function get_searched_portrait_image_url($keyword)
    {
        $imgs = static::get_searchedimage($keyword);
        $img = static::get_portrait_image($imgs);
        
        return $img["image"];
    }
    /** Post du lieu len facebook (fanpage page_id)
     * Input: 
     *   - $data=array("picture"=>, "link"=>, "message"=>, "caption"=>, "description"=>)
     *   - $verify=array("access_token"=>, "page_id"=>, "appsecret"=>)
     * Output: String output from server
     **/
    static function post_facebook($data, $verify)
    {
        if (count($data) <= 0) return '{"message":"No data to post"}';
        if (empty($verify["page_id"])) return '{"message":"No page_id"}';
        if (empty($verify["access_token"])) return '{"message":"No access_token"}';
        
        $post_url = 'https://graph.facebook.com/'.$verify["page_id"].'/';
        if (!empty($data["picture"]))
        {
             $post_url = $post_url . "photos";
             $data["url"] = $data["picture"];
             unset($data["picture"]);
        }
        else $post_url = $post_url . "feed";
        
        $data["access_token"] = $verify["access_token"];
        if (!empty($verify["appsecret"]))
        {
            $data["appsecret_proof"] = hash_hmac('sha256', $verify["access_token"], $verify["appsecret"]);
        }

        //Post bai
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $post_url);
        curl_setopt($ch, CURLOPT_POST, 1);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, 0);
        $result = curl_exec($ch);
        curl_close($ch);
            
        return $result;
    }
    
    
    static function convert_vi_to_en($str) {
        $str = preg_replace("/(a|à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/", 'a', $str);
        $str = preg_replace("/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/", 'e', $str);
        $str = preg_replace("/(ì|í|ị|ỉ|ĩ)/", 'i', $str);
        $str = preg_replace("/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/", 'o', $str);
        $str = preg_replace("/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/", 'u', $str);
        $str = preg_replace("/(ỳ|ý|ỵ|ỷ|ỹ)/", 'y', $str);
        $str = preg_replace("/(đ)/", 'd', $str);
        $str = preg_replace("/(À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ)/", 'A', $str);
        $str = preg_replace("/(È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ)/", 'E', $str);
        $str = preg_replace("/(Ì|Í|Ị|Ỉ|Ĩ)/", 'I', $str);
        $str = preg_replace("/(Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ)/", 'O', $str);
        $str = preg_replace("/(Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ)/", 'U', $str);
        $str = preg_replace("/(Ỳ|Ý|Ỵ|Ỷ|Ỹ)/", 'Y', $str);
        $str = preg_replace("/(Đ)/", 'D', $str);
        //$str = str_replace(" ", "-", str_replace(“&*#39;","",$str));
        return $str;
    }
    
    static function print2thermal($lines, $printer = "\\\\localhost\\inhoadon")//
    {
        //$fp = fopen($printer, "w"); if (!$fp){ die('no connection');}
        $data = "";
        foreach ($lines as $line)
        {
            $data .= static::convert_vi_to_en($line) . "\n";
        }
        $data .= "\n\n\n\n\n";
        // Cut Paper
        $data .= "\x00\x1Bi\x00";
        
        //if (!fwrite($fp,$data)){die('writing failed');}fclose($fp);
        file_put_contents($printer, $data);
    }
    
    
    static function len_normalize($text, $maxlen, $align){
        $len = mb_strlen($text);
        $varian = $maxlen - $len;
        if ($align == "right"){
            for ($i = 0; $i < $varian; $i++){
                $text = " " . $text;
            }
            $text = mb_substr($text, mb_strlen($text) - $maxlen, $maxlen, "utf-8");
        }
        elseif ($align == "center"){
            for ($i = 0; $i < $varian; $i = $i + 2){
                $text = " " . $text . " ";
            }
            $text = mb_substr($text, 0, $maxlen, "utf-8");
        }
        else{//left
            for ($i = 0; $i < $varian; $i++){
                $text = $text . " ";
            }
            $text = mb_substr($text, 0, $maxlen, "utf-8");
        }
        return $text;
    }
    static function time_from($key){
        $year = intval(date("Y"));
        $month = intval(date("m"));
        $day = intval(date("d"));
        $time = "0";
        switch ($key){
            case "today":
                $time = date("Y-m-d");
                break;
            case "yesterday":
                $timestamp = mktime(0,0,0,$month, $day-1, $year);
                $time = date("Y-m-d", $timestamp);
                break;
            case "7days":
                $timestamp = mktime(0,0,0,$month, $day-7, $year);
                $time = date("Y-m-d", $timestamp);
                break;
            case "30days":
                $timestamp = mktime(0,0,0,$month, $day-30, $year);
                $time = date("Y-m-d", $timestamp);
                break;
            case "thismonth":
                $time = "$year-".static::digital_normalize($month, 2)."-01";
                break;
            case "lastmonth":
                $time = "$year-".static::digital_normalize(($month-1), 2)."-01";
                break;
            case "thisquarter":
                $quarter = intval(($month+2)/3);
                $time = "$year-".static::digital_normalize($quarter*3-2, 2)."-01";
                break;
            case "lastquarter":
                $quarter = intval((($month-3)+2)/3);
                $time = "$year-".static::digital_normalize($quarter*3-2, 2)."-01";
                break;
            case "first6months":
                $time = "$year-01-01";
                break;
            case "last6months":
                $time = "$year-06-01";
                break;
            case "thisyear":
                $time = "$year-01-01";
                break;
            case "lastyear":
                $time = ($year-1)."-01-01";
                break;
        }
        
        return $time;
    }
    static function time_to($key){
        $year = intval(date("Y"));
        $month = intval(date("m"));
        $day = intval(date("d"));
        $time = date("Y-m-d");
        switch ($key){
            case "yesterday":
                $timestamp = mktime(0,0,0,$month, $day-1, $year);
                $time = date("Y-m-d", $timestamp);
                break;
            case "today":
            case "7days":
            case "30days":
                $time = date("Y-m-d");
                break;
            case "thismonth":
                $time = "$year-".static::digital_normalize($month, 2)."-31";
                $time = date("Y-m-d", strtotime("last day of -0 month"));
                break;
            case "lastmonth":
                $time = "$year-".static::digital_normalize(($month-1), 2)."-31";
                $time = date("Y-m-d", strtotime("last day of -1 month"));
                break;
            case "thisquarter":
                $quarter = intval(($month+2)/3);
                //$time = "$year-".static::digital_normalize($quarter*3, 2)."-31";
                $quarter = $quarter*3 - $month;
                $time = date("Y-m-d", strtotime("last day of +$quarter month"));
                break;
            case "lastquarter":
                $quarter = intval((($month-3)+2)/3);
                //$time = "$year-".static::digital_normalize($quarter*3, 2)."-31";
                $quarter = $month-$quarter*3;
                $time = date("Y-m-d", strtotime("last day of -$quarter month"));
                break;
            case "first6months":
                $time = "$year-06-31";
                break;
            case "last6months":
                $time = "$year-12-31";
                break;
            case "thisyear":
                $time = "$year-12-31";
                break;
            case "lastyear":
                $time = ($year-1)."-12-31";
                break;
        }
        
        return $time;
    }
    static function digital_normalize($value, $number){
        $new_value = $value . "";
        $len = strlen($new_value);
        while ($len < $number) {
            $len++;
            $new_value = "0" . $new_value;
        }
        return $new_value;
    }
    static function translate($error_message){
        $msg = $error_message;
		
		if (strpos($error_message, "Duplicate") !== false) $msg = "TRÙNG DỮ LIỆU: Dữ liệu đã có sẵn rồi, vui lòng nhập dữ liệu khác!";
		elseif (strpos($error_message, "Unknown column") !== false) $msg = "LỖI CƠ SỞ DỮ LIỆU: Không tìm thấy thông tin trong Cơ sở dữ liệu!";
		elseif (strpos($error_message, "Incorrect integer value") !== false) $msg = "LỖI NHẬP LIỆU: Sai hoặc thiếu dữ liệu số!";
		elseif (strpos($error_message, "Incorrect decimal value") !== false) $msg = "LỖI NHẬP LIỆU: Sai hoặc thiếu dữ liệu số!";
        elseif (strpos($error_message, "foreign key") !== false && strpos($error_message, "Cannot add or update") !== false) $msg = "LỖI LIÊN KẾT: Không thể thêm/sửa dữ liệu vì không khớp với dữ liệu được sử dụng ở bảng khác!";
		elseif (strpos($error_message, "foreign key") !== false) $msg = "LỖI LIÊN KẾT: Thao tác không thực hiện được vì Dữ liệu này được sử dụng ở bảng khác!";
		elseif (strpos($error_message, "doesn't have a default value") !== false) $msg = "THIẾU THÔNG TIN: Các thông tin không được nhập đầy đủ!";
		elseif (strpos($error_message, "Incorrect datetime") !== false) $msg = "SAI NGÀY: Nhập sai ngày giờ!";
		elseif (strpos($error_message, "You have an error in your SQL syntax") !== false) $msg = "LỖI CƠ SỞ DỮ LIỆU: Câu truy vấn không phù hợp!";
		
		return $msg;
    }
}
?>