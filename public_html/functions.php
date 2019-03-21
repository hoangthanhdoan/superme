<?php
function chinhanh_init_db($id){
    chinhanh_init_db_nhapkho($id);
    chinhanh_init_db_chuyennhankho($id);
    chinhanh_init_db_banbuon($id);
    chinhanh_init_db_banle($id);
}
function chinhanh_init_db_nhapkho($id){
    global $db;
    
    $table_nhapkho_ = table_nhapkho($id);
    $table_nhapkho_chitiet_ = table_nhapkho_chitiet($id);
    
$sql_all = "
DROP TABLE IF EXISTS `$table_nhapkho_chitiet_`;
CREATE TABLE IF NOT EXISTS `$table_nhapkho_chitiet_` (
  `id` int(255) NOT NULL,
  `nhapkhoid` int(100) NOT NULL,
  `itemid` int(11) NOT NULL,
  `donvitinhid` int(11) NOT NULL,
  `soluong` int(11) NOT NULL DEFAULT '1',
  `gianhap` int(11) NOT NULL DEFAULT '1',
  `giabanbuon` int(11) DEFAULT '0',
  `giabanle` int(11) DEFAULT '0',
  `vat` int(11) DEFAULT '0',
  `khuyenmai` int(11) NOT NULL DEFAULT '0',
  `ngaysanxuat` date DEFAULT '0000-00-00',
  `hansudung` date DEFAULT '0000-00-00',
  `trangthai` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `$table_nhapkho_`;
CREATE TABLE `$table_nhapkho_` (
  `id` int(100) NOT NULL,
  `nhacungcapid` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `nguoinhan` varchar(255) DEFAULT NULL,
  `sohieulo` varchar(50) DEFAULT NULL,
  `trangthai` tinyint(1) NOT NULL DEFAULT '0' COMMENT '1:ket thuc'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `$table_nhapkho_`
  ADD PRIMARY KEY (`id`),
  ADD KEY `atableid` (`nhacungcapid`);

ALTER TABLE `$table_nhapkho_chitiet_`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `billid` (`nhapkhoid`,`itemid`),
  ADD KEY `billid_2` (`nhapkhoid`),
  ADD KEY `KhongXoaItem` (`itemid`),
  ADD KEY `nhapkhoid` (`nhapkhoid`),
  ADD KEY `itemid` (`itemid`),
  ADD KEY `donvitinhid` (`donvitinhid`);


ALTER TABLE `$table_nhapkho_`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT;

ALTER TABLE `$table_nhapkho_chitiet_`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

ALTER TABLE `$table_nhapkho_`
  ADD CONSTRAINT `Xoa nhacungcap_kho_$id` FOREIGN KEY (`nhacungcapid`) REFERENCES `nhacungcap` (`id`);

ALTER TABLE `$table_nhapkho_chitiet_`
  ADD CONSTRAINT `Xoa phieu nhap_$id` FOREIGN KEY (`nhapkhoid`) REFERENCES `$table_nhapkho_` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;";

    $sqls = explode(";", $sql_all);
    foreach ($sqls as $sql){
        //if (empty(trim($sql))) continue;
        //if (!$db->sql_query($sql)) echo "Loi $sql<hr/>";
		if (empty($sql)) continue;
		if (!$db->sql_query($sql)) echo "$sql<hr/>";
    }
}
function chinhanh_init_db_chuyennhankho($id){
    global $db;
    
    $chuyenkho_i = table_chuyenkho($id);
    $chuyenkho_i_chitiet = table_chuyenkho_chitiet($id);
    
    $nhantukho_i = table_nhantukho($id);
    $nhantukho_i_chitiet = table_nhantukho_chitiet($id);
    
$sql_all = "
DROP TABLE IF EXISTS `$chuyenkho_i_chitiet`;
CREATE TABLE IF NOT EXISTS `$chuyenkho_i_chitiet` (
  `id` int(11) NOT NULL,
  `chuyenkhoid` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `donvitinhid` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `trangthai` tinyint(1) NOT NULL DEFAULT '0',
  `ghichu` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `$chuyenkho_i`;
CREATE TABLE IF NOT EXISTS `$chuyenkho_i` (
  `id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `chinhanhid` int(11) NOT NULL,
  `userid` int(11) DEFAULT NULL,
  `trangthai` tinyint(1) NOT NULL DEFAULT '0',
  `nhantukhoid` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


DROP TABLE IF EXISTS `$nhantukho_i_chitiet`;
CREATE TABLE IF NOT EXISTS `$nhantukho_i_chitiet` (
  `id` int(11) NOT NULL,
  `nhantukhoid` int(11) NOT NULL,
  `itemid` int(11) NOT NULL,
  `donvitinhid` int(11) NOT NULL,
  `soluong` int(11) NOT NULL,
  `trangthai` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

DROP TABLE IF EXISTS `$nhantukho_i`;
CREATE TABLE IF NOT EXISTS `$nhantukho_i` (
  `id` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `chinhanhid` int(11) NOT NULL,
  `trangthai` tinyint(1) NOT NULL DEFAULT '0',
  `chuyenkhoid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

ALTER TABLE `$chuyenkho_i`
  ADD PRIMARY KEY (`id`),
  ADD KEY `chinhanhid` (`chinhanhid`);

ALTER TABLE `$chuyenkho_i_chitiet`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `chuyenkhoid_2` (`chuyenkhoid`,`itemid`),
  ADD KEY `itemid` (`itemid`),
  ADD KEY `donvitinhid` (`donvitinhid`),
  ADD KEY `chuyenkhoid` (`chuyenkhoid`);

ALTER TABLE `$nhantukho_i`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `chinhanhid_2` (`chinhanhid`,`chuyenkhoid`),
  ADD KEY `chinhanhid` (`chinhanhid`);

ALTER TABLE `$nhantukho_i_chitiet`
  ADD PRIMARY KEY (`id`),
  ADD KEY `itemid` (`itemid`),
  ADD KEY `donvitinhid` (`donvitinhid`),
  ADD KEY `nhantukhoid` (`nhantukhoid`);

ALTER TABLE `$chuyenkho_i`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;  
ALTER TABLE `$chuyenkho_i_chitiet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `$nhantukho_i`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
ALTER TABLE `$nhantukho_i_chitiet`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

ALTER TABLE `$chuyenkho_i_chitiet`
  ADD CONSTRAINT `Xoa chuyenkhoid $id` FOREIGN KEY (`chuyenkhoid`) REFERENCES `$chuyenkho_i` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE `$nhantukho_i_chitiet`
  ADD CONSTRAINT `xoa nhantukhoaid $id` FOREIGN KEY (`nhantukhoid`) REFERENCES `$nhantukho_i` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;";

    $sqls = explode(";", $sql_all);
    foreach ($sqls as $sql){
        if (empty($sql)) continue;
        if (!$db->sql_query($sql)) echo "$sql";
    }
}
function chinhanh_init_db_banbuon($id){
}
function chinhanh_init_db_banle($id){
    global $db;
    
    $banle_i = table_banle($id);
    $banle_i_chitiet = table_banle_chitiet($id);
    
$sql_all = "
DROP TABLE IF EXISTS `$banle_i_chitiet`;
CREATE TABLE IF NOT EXISTS `$banle_i_chitiet` (
  `id` int(255) NOT NULL AUTO_INCREMENT,
  `banleid` int(100) NOT NULL,
  `itemid` int(11) NOT NULL,
  `donvitinhid` int(11) NOT NULL,
  `soluong` int(11) NOT NULL DEFAULT '1',
  `gianhap` int(11) NOT NULL,
  `giaban` int(11) NOT NULL DEFAULT '0',
  `khuyenmai` int(5) NOT NULL DEFAULT '0',
  `vat` int(5) NOT NULL DEFAULT '0',
  `trangthai` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `billid` (`banleid`,`itemid`),
  KEY `billid_2` (`banleid`),
  KEY `donvitinhid` (`donvitinhid`),
  KEY `itemid` (`itemid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

DROP TABLE IF EXISTS `$banle_i`;
CREATE TABLE IF NOT EXISTS `$banle_i` (
  `id` int(100) NOT NULL AUTO_INCREMENT,
  `khachhangid` int(11) NOT NULL,
  `userid` int(11) NOT NULL,
  `timestamp` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `trangthai` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `khachhangid` (`khachhangid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

ALTER TABLE `$banle_i_chitiet`
  ADD CONSTRAINT `$banle_i_chitiet _ibfk_3` FOREIGN KEY (`donvitinhid`) REFERENCES `donvitinh` (`id`),
  ADD CONSTRAINT `$banle_i_chitiet _ibfk_1` FOREIGN KEY (`banleid`) REFERENCES `$banle_i` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `$banle_i_chitiet _ibfk_2` FOREIGN KEY (`itemid`) REFERENCES `items` (`id`);";

    $sqls = explode(";", $sql_all);
    foreach ($sqls as $sql){
        if (empty($sql)) continue;
        if (!$db->sql_query($sql)) echo "$sql";
    }
}

function chinhanh_list(){
    global $util, $user_info, $table_chinhanh;
    $chinhanh_list = $util->cache_data_array($table_chinhanh, "id");
    $chinhanh_list[0] = array("id"=>0, "ten"=>"Trụ sở chính");
    return $chinhanh_list;
}
function chinhanh_list_dechuyen(){
    $chinhanh_list = chinhanh_list();
    $chinhanhid = chinhanhid();
    unset($chinhanh_list[$chinhanhid]);
    return $chinhanh_list;
}

/** Chuc nang khac **/
function item_list_from_table($table, $where = null){
    global $table_nhasanxuat, $table_item, $util;
    
    $itemids = ids_custom($table, "itemid", $where);

    $item_list = $util->cache_data_array($table_item, "id", "id in (".$itemids.")", array("name"=>"ASC"));
    $nhasanxuat_list = $util->cache_data_array($table_nhasanxuat, "id");
    foreach ($item_list as $k=>$v){
        $item_list[$k]["nhasanxuat_ten"] = empty($nhasanxuat_list[$v["nhasanxuatid"]])?"":$nhasanxuat_list[$v["nhasanxuatid"]]["ten"];
        $item_list[$k]["name_full"] = $item_list[$k]["name"] . " [" . $item_list[$k]["nhasanxuat_ten"] . "]";
    }
    return $item_list;
}
function item_list(){
    global $table_nhasanxuat, $table_item, $util;
    
    $item_list = $util->cache_data_array($table_item, "id");
    $nhasanxuat_list = $util->cache_data_array($table_nhasanxuat, "id");
    foreach ($item_list as $k=>$v){
        $item_list[$k]["nhasanxuat_ten"] = empty($nhasanxuat_list[$v["nhasanxuatid"]])?"":$nhasanxuat_list[$v["nhasanxuatid"]]["ten"];
        $item_list[$k]["name_full"] = $item_list[$k]["name"] . " [" . $item_list[$k]["nhasanxuat_ten"] . "]";
    }
    return $item_list;
}
function item_list_chinhanh(){
    global $table_nhasanxuat, $table_item, $db, $util, $table_nhapkho_chitiet;
    
    $rs = $util->db_total($table_nhapkho_chitiet, "itemid", "itemid");
    $itemids_arr[] = 0;
    while ($row = $db->sql_fetchrow($rs)) $itemids_arr[] = $row["itemid"];    
    $item_list = $util->cache_data_array($table_item, "id", "id in (".implode(",",$itemids_arr).")");
    
    $nhasanxuat_list = $util->cache_data_array($table_nhasanxuat, "id");
    foreach ($item_list as $k=>$v){
        $item_list[$k]["nhasanxuat_ten"] = $nhasanxuat_list[$v["nhasanxuatid"]]["ten"];
        $item_list[$k]["name_full"] = $item_list[$k]["name"] . " [" . $nhasanxuat_list[$v["nhasanxuatid"]]["ten"] . "]";
    }
    return $item_list;
}
function ids_custom_arr($table, $field, $where, $option = "", $with_zero = true){
    global $util, $db;
    
    $ids_arr = [];
    if ($with_zero) $ids_arr[] = 0; 
    $rs = $util->db_total($table, $field, $field, $where, null, $option);
    while ($row = $db->sql_fetchrow()) $ids_arr[] = $row[$field];
    
    return $ids_arr;
}
function ids_custom($table, $field, $where, $option = "", $with_zero = true){
    return implode(",", ids_custom_arr($table, $field, $where, $option, $with_zero));    
}

function ids_arr($table, $where, $option = "", $with_zero = true){
    global $util, $db;
    $ids_arr = [];
    if ($with_zero) $ids_arr[] = 0; 
    $rs = $util->db_view($table, "id", $where, null, $option);
    while ($row = $db->sql_fetchrow()) $ids_arr[] = $row["id"];
    
    return $ids_arr;
}
function ids($table, $where, $option = "", $with_zero = true){
    return implode(",", ids_arr($table, $where, $option, $with_zero));    
}

$mangso = array('không', 'một', 'hai', 'ba', 'bốn', 'năm', 'sáu', 'bảy', 'tám', 'chín');
    
function dochangchuc($so, $daydu) {
    global $mangso;
    $chuoi = '';
    $chuc = floor($so / 10);
    $donvi = $so % 10;
    if ($chuc > 1) {
        $chuoi = " " . $mangso[$chuc] . " mươi";
        if ($donvi == 1) {
            $chuoi .= " mốt";
        }
    } else if ($chuc == 1) {
        $chuoi = " mười";
        if ($donvi == 1) {
            $chuoi .= " một";
        }
    } else if ($daydu && $donvi > 0) {
        $chuoi = " lẻ";
    }
    if ($donvi == 5 && $chuc >= 1) {
        $chuoi .= " lăm";
    }elseif ($donvi == 4 && $chuc >= 1) {
        $chuoi .= " tư";
    } else if ($donvi > 1 || ($donvi == 1 && $chuc == 0)) {
        $chuoi .= " " . $mangso[$donvi];
    }
    return $chuoi;
}

function docblock($so, $daydu) {
    global $mangso;
    $chuoi = "";
    $tram = floor($so / 100);
    $so = $so % 100;
    if ($daydu || $tram > 0) {
        $chuoi = " " . $mangso[$tram] . " trăm";
        $chuoi .= dochangchuc($so, true);
    } else {
        $chuoi = dochangchuc($so, false);
    }
    return $chuoi;
}

function dochangtrieu($so, $daydu) {
    global $mangso;
    $chuoi = "";
    $trieu = floor($so / 1000000);
    $so = $so % 1000000;
    if ($trieu > 0) {
        $chuoi = docblock($trieu, $daydu) . " triệu";
        $daydu = true;
    }
    $nghin = floor($so / 1000);
    $so = $so % 1000;
    if ($nghin > 0) {
        $chuoi .= docblock($nghin, $daydu) . " nghìn";
        $daydu = true;
    }
    if ($so > 0) {
        $chuoi .= docblock($so, $daydu);
    }
    return $chuoi;
}

function docso($so) {
    global $mangso;
    if ($so == 0)
        return $mangso[0];
    $chuoi = "";
    $hauto = "";
    do {
        $ty = $so % 1000000000;
        $so = floor($so / 1000000000);
        if ($so > 0) {
            $chuoi = dochangtrieu($ty, true) . $hauto . $chuoi;
        } else {
            $chuoi = dochangtrieu($ty, false) . $hauto . $chuoi;
        }
        $hauto = " tỷ";
    } while ($so > 0);
    
    return ucfirst(trim($chuoi));
}

function goiy($keyword){
    global $util, $db, $table_item;
    
    $data = array();
    
    $kw = str_replace(array("-", "_", " ", "/"), "%", $keyword);
    //Loai 2
    $rs = $util->db_view($table_item, "*", "isbn like '%$kw%'", array("name"=>"ASC"), "Limit 0,3");
    if (!isset($rs["message"])) {
        while ($row = $db->sql_fetchrow($rs)){
            $data[] = $row;
        }
    }
    
    $rs = $util->db_view($table_item, "*", "isbn like '%$kw%'", array("name"=>"DESC"), "Limit 0,3");
    if (!isset($rs["message"])) {
        while ($row = $db->sql_fetchrow($rs)){
            $data[] = $row;
        }
    }
    
    
    //Loai 3
    $rs = $util->db_view($table_item, "*", "code like '%$kw%'", array("name"=>"ASC"), "Limit 0,3");
    if (!isset($rs["message"])) {
        while ($row = $db->sql_fetchrow($rs)){
            $data[] = $row;
        }
    }
    
    $rs = $util->db_view($table_item, "*", "code like '%$kw%'", array("name"=>"DESC"), "Limit 0,3");
    if (!isset($rs["message"])) {
        while ($row = $db->sql_fetchrow($rs)){
            $data[] = $row;
        }
    }
    //Loai 1
    $rs = $util->db_view($table_item, "*", "name like '%$kw%'", array("name"=>"ASC"), "Limit 0,4");
    if (!isset($rs["message"])) {
        while ($row = $db->sql_fetchrow($rs)){
            $data[] = $row;
        }
    }
    
    $rs = $util->db_view($table_item, "*", "name like '%$kw%'", array("name"=>"DESC"), "Limit 0,4");
    if (!isset($rs["message"])) {
        while ($row = $db->sql_fetchrow($rs)){
            $data[] = $row;
        }
    }
    
    //Loai 4
    $rs = $util->db_view($table_item, "*", "code > '$keyword'", array("name"=>"ASC"), "Limit 0,1");
    if (!isset($rs["message"])) {
        while ($row = $db->sql_fetchrow($rs)){
            $data[] = $row;
        }
    }
    
    $rs = $util->db_view($table_item, "*", "code < '$keyword'", array("name"=>"DESC"), "Limit 0,1");
    if (!isset($rs["message"])) {
        while ($row = $db->sql_fetchrow($rs)){
            $data[] = $row;
        }
    }
    
    //Ket luan
    $ds_arr = array();
    foreach ($data as $k =>$v){
        if (!empty($v["isbn"])) $ds_arr[$v["isbn"]] = $v["isbn"] . " <em><ins>[" . $v["name"] . "]</ins></em>";
        if (!empty($v["code"])) $ds_arr[$v["code"]] = $v["code"] . " <ins><em>[" . $v["name"] . "]</em></ins>";
    }
    return $ds_arr;
}

function mynumber_format($row, $soluong_fields = ["soluong"], $value_if_zero = "0"){
    global $util, $_thapphan, $_thapphan_soluong;
    
    if (!is_array($soluong_fields)) $soluong_fields = [$soluong_fields];
    
    foreach ($row as $k=>$v) {
        if (is_numeric($v)) {
            if (in_array($k, $soluong_fields)) {
                $row[$k . "_ten"] = $util->format($v, $_thapphan_soluong);
                $row[$k . "_ten"] = str_replace(".00 ", "", $row[$k . "_ten"] . " ");
                //$row[$k . "_ten"] = str_replace("0 ", "", $row[$k . "_ten"] . " ");
            }
            else $row[$k . "_ten"] = $util->format($v, $_thapphan);
            if ($row[$k . "_ten"] == "0") $row[$k . "_ten"] = $value_if_zero;
        }
    }
    
    return $row;
}
/** Tinh khoang cach den cong ty. Return number (Don vi tinh: met) **/
function khoangcach_dencongty($address_from){
    global $company_info;
    $address_to = $company_info["address_distance"];
    if (empty($address_from) || empty($address_to)) return 0;
    $json = file_get_contents("http://dichungtaxibinhdinh.com/pm/tinhkhoangcach.php?address_from=".urlencode($address_from)."&address_to=".urlencode($address_to));
    if (!empty($json)) {
        $data = json_decode($json, true);
        if ($data["success"] === true && !empty($data["somet"])) return $data["somet"];
    }
    
    return 0;
}
function send_email($subject, $body, $email_to = ["address"=>"info@dichungtaxibinhdinh.com", "name"=>"DichungTaxiBinhdinh"], $email_from = ["address"=>"info@dichungtaxibinhdinh.com", "name"=>"DichungTaxiBinhdinh"]){
    include ("lib/phpmailer.class.php");
    $mail = new PHPMailer();
    $mail->setFrom($email_from["address"], $email_from["name"]);
    $mail->addAddress($email_to["address"], $email_to["name"]);
    $mail->isHTML(true);
    
    $mail->Subject = $subject;
    $mail->Body    = $body;
    
    if(!$mail->send()) {
        return "Loi: " . $mail->ErrorInfo;
    } else {
        return "tot";
    }
}
function tpl_file($file, $folder = "tpl", $domain_detect = true){
    global $domain;
    
    if ($domain_detect) {
        if (file_exists($folder . "/" . $domain . "." . $file)) {
            $file = $domain . "." . $file;
        }
    }
    
    return ["file"=>$file, "folder"=>$folder];
}

?>