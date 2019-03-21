<?php
/** Log lai toan bo hoat dong cua he thong **/
class Logger{
    static function key_insert(){return "insert";}
    static function key_update(){return "update";}
    static function key_delete(){return "delete";}
    static function key_select(){return "select";}
    static function key_where_string(){return "formula";}
    static function key_data_insert_string(){return "data";}
    static function key_data_update_string(){return "formula";}
    
    /** Ghi nhan log. Input: Log object **/
    static function set_log($log_obj){
    }
    
    /** Doc du lieu ve file Log va tra ve doi tuong kieu Log **/
    static function get_log_object($logs_id){
    }
    
    
    /** Lay lich su giao dich theo thoi gian. Return array of date object **/
    static function get_lichsu_giaodich_theothoigian($date){
    }
    /** Lay danh sach doi tac co giao dich. Return array of date object **/
    static function get_lichsu_giaodich_theodoitac($date){
    }
    
}
class Log{
    protected $key = "";
    protected $tablename = "";
    protected $user = [];
    protected $new_data = []; 
    protected $old_data = []; 
    protected $where = [];
    
    /**
     * key: string
     * user, new_data, old_data: array
    **/
    function __construct($key, $tablename, $user, $new_data, $old_data, $where){
        $this->set_key($key);
        $this->set_tablename($tablename);
        $this->set_user($user);
        $this->set_new_data($new_data);
        $this->set_old_data($old_data);
        $this->set_where($where);
    }
    private function set_key($key){$this->key = $key;}
    private function set_tablename($tablename){$this->tablename = $tablename;}
    private function set_user($user){
    }
    private function set_new_data($new_data){
    }
    private function set_old_data($old_data){
    }
    private function set_where($where){
    }
    
    /** return String **/
    function get_key(){return $this->key;}
    /** return String **/
    function get_tablename(){return $this->tablename;}
    /** return array **/
    function get_user(){return $this->user;}
    /** return array **/
    function get_new_data(){return $this->new_data;}
    /** return array **/
    function get_old_data(){return $this->old_data;}
    /** return array **/
    function get_where(){return $this->where;}
    /** Get ID of record **/
    function get_id(){
    }
    /** return array **/
    function get_diferencs_data(){
    }
    
    /** check if 2 values is different **/
    static function is_deferent($field_name, $value_1, $value_2){
    }
    
}
?>
