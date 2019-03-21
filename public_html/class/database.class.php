<?php
class Database
{
    static $db = null;
    static function set_db_object($db){
        static::$db = $db;
    }
    static function db(){
        return static::$db;
    }
    
    static function combine($prefix, $chinhanhid = 0, $sufix = ""){
        return $prefix . (empty($sufix)?"":"_" . $sufix);
        //-------------
        if (empty($chinhanhid)) $chinhanhid = Config::get_chinhanhid();
        return $prefix . "_" . $chinhanhid . (empty($sufix)?"":"_" . $sufix);
    }
    
    static function table_taikhoan($chinhanhid = 0){ return static::combine("account", $chinhanhid);}    
    static function table_logs($chinhanhid = 0){ return static::combine("logs", $chinhanhid);}    
    
    static function table_donvitinh($chinhanhid = 0){ return static::combine("donvitinh", $chinhanhid);}    
    static function table_sanpham($chinhanhid = 0){ return static::combine("items", $chinhanhid);}
    static function table_bansi($chinhanhid = 0){ return static::combine("bansi", $chinhanhid); }
    static function table_bansi_chitiet($chinhanhid = 0){ return static::combine("bansi", $chinhanhid, "chitiet"); }

    static function table_nhapkho($chinhanhid = 0){ return static::combine("nhapkho", $chinhanhid); }
    static function table_nhapkho_chitiet($chinhanhid = 0){ return static::combine("nhapkho", $chinhanhid, "chitiet"); }

    static function table_tiepnhan($chinhanhid = 0){ return static::combine("tiepnhan", $chinhanhid); }
    static function table_tiepnhan_chitiet($chinhanhid = 0){ return static::combine("tiepnhan", $chinhanhid, "chitiet"); }

    static function table_nhanvien($chinhanhid = 0){ return static::combine("nhanvien", $chinhanhid);}
    static function table_doitac($chinhanhid = 0){ return static::combine("doitac", $chinhanhid);}
    static function table_doitac_muctieu($chinhanhid = 0){ return static::combine("doitac_muctieu", $chinhanhid);}
    
    static function table_congno($chinhanhid = 0){ return static::combine("congno", $chinhanhid);}
    static function table_sotaichinh($chinhanhid = 0){ return static::combine("sotaichinh", $chinhanhid);}
    static function table_thuchi_loai($chinhanhid = 0){ return static::combine("chi_loai", $chinhanhid);}

    static function table_kenhmarketing($chinhanhid = 0){ return static::combine("kenhmarketing", $chinhanhid);}
    static function table_quantri_marketing($chinhanhid = 0){ return static::combine("quantrimarketing", $chinhanhid);}

    static function table_danhba($chinhanhid = 0){ return static::combine("danhba", $chinhanhid);}
    static function table_thongdiep($chinhanhid = 0){ return static::combine("thongdiep", $chinhanhid);}

    static function table_lich_cskh($chinhanhid = 0){ return static::combine("lichcskh", $chinhanhid); }
    static function table_lich_cskh_chitiet($chinhanhid = 0){ return static::combine("lichcskh", $chinhanhid, "chitiet"); }

    static function table_company_info($chinhanhid = 0){ return static::combine("company_info", $chinhanhid); }
    static function table_ngonngu($chinhanhid = 0){ return static::combine("language", $chinhanhid); }
    
}
?>