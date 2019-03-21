<?php

/**
 * @Project NUKEVIET 3.4
 * @Author VINADES.,JSC (contact@vinades.vn)
 * @Copyright (C) 2010 - 2012 VINADES.,JSC. All rights reserved
 * @Createdate Thu, 25 Oct 2012 00:00:00 GMT
 */

if(defined('NV_CLASS_SQL_DB_PHP'))return;
define('NV_CLASS_SQL_DB_PHP',true);
if(!defined('NV_SITE_TIMEZONE_NAME'))define('NV_SITE_TIMEZONE_NAME','+00:00');
class sql_db{
    const NOT_CONNECT_TO_MYSQL_SERVER='Sorry! Could not connect to mysql server';
    const DATABASE_NAME_IS_EMPTY='Error! The database name is not the connection name';
    const UNKNOWN_DATABASE='Error! Unknown database';
    public $server='localhost';
    public $user='root';
    public $dbname='';
    public $sql_version;
    public $db_charset;
    public $db_set_collation;
    public $db_collation;
    public $db_time_zone;
    public $error=array();
    public $time=0;
    public $query_strs=array();
    private $persistency=false;
    private $new_link=false;
    private $db_connect_id=false;
    private $create_db=false;
    private $query_result=false;
    private $row=array();
    private $rowset=array();
    protected static $connection;
    
    public function __construct($db_config=array()){
        $stime=array_sum(explode(" ",microtime()));
        if(isset($db_config['dbhost'])and!empty($db_config['dbhost']))
        $this->server=$db_config['dbhost'];
        if(isset($db_config['dbport'])and!empty($db_config['dbport']))$this->server.=':'.$db_config['dbport'];
        if(isset($db_config['dbname']))$this->dbname=$db_config['dbname'];
        if(isset($db_config['dbuname']))$this->user=$db_config['dbuname'];
        if(isset($db_config['new_link']))$this->new_link=( bool )$db_config['new_link'];
        if(isset($db_config['create_db']))$this->create_db=( bool )$db_config['create_db'];
        if(isset($db_config['persistency']))$this->persistency=( bool )$db_config['persistency'];
        $this->db_set_collation=isset($db_config['collation'])?$db_config['collation']:'utf8_general_ci';
        $this->sql_connect($db_config['dbpass']);
        if($this->db_connect_id)$this->sql_setdb();
        $this->time+=(array_sum(explode(" ",microtime()))-$stime);

    }

    private function sql_connect($dbpass){
        if(!isset(self::$connection)) {
            self::$connection = new mysqli($this->server,$this->user,$dbpass, $this->dbname);
            $this -> sql_query("SET NAMES 'UTF8'");
        }

        // If connection was not successful, handle the error
        if(self::$connection === false) {
            $this->db_connect_id=false;
        }
        return self::$connection;
    }

    private function sql_setdb(){
    }
    public function sql_close(){
        return false;
    }
    function sql_transaction($status='begin'){
        return false;
    }
    public function sql_query($query=""){
        $this->query_result=self::$connection->query($query);
        if (empty($this->query_result)) {
            return $this->sql_error();
        }
        return ["obj"=>$this->query_result];
    }
    public function sql_query_insert_id($query=""){
        if(empty($query)or!preg_match("/^INSERT\s/is",$query)){
            return false;        
        }
        if(!$this->sql_query($query)){
            return false;
        }
        //$result=@mysql_insert_id($this->db_connect_id);
        return 0;
        
    }
    public function sql_numrows($query_id=0){
        return false;
    }
    public function sql_affectedrows(){
        return false;
    }
    public function sql_numfields($query_id=0){
        return false;
    }
    public function sql_fieldname($offset,$query_id=0){
        return false;
        
    }
    public function sql_fieldtype($offset,$query_id=0){
        return false;
        
    }
    public function sql_fetchrow($query_id=0,$type=0){
        if (empty($query_id["obj"])) return false;
        return $query_id["obj"]->fetch_assoc();
    }
    
    public function sql_fetchrowset($query_id=0){
        return false;
    }
    public function sql_fetchfield($field,$rownum=-1,$query_id=0){
        return false;
    
    }
    public function sql_rowseek($rownum,$query_id=0){
        return false;
    
    }
    public function sql_fetch_assoc($query_id=0){
        return false;
    
    }
    public function sql_freeresult($query_id=0){
        return false;
    
    }
    public function sql_error($message=''){
        //return array('message'=>self::$connection->error(),'user_message'=>$message,'code'=>0);
        return array('message'=>self::$connection->error . $message,'user_message'=>$message,'code'=>0);
    }
    public function fixdb($value){
        return $value;
        
    }
    public function dbescape_string($value){
        return $value;
        
    }
    public function dblikeescape($value){
        return $value;
        
    }
    public function constructQuery(){
        return "";
    }
    
}



?>