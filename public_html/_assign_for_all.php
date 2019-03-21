<?php
global $company_info, $language, $user_info, $_sconfig, $today, $key;
if (!empty($xtpl)){
    if (!empty($language)){
        foreach ($language as $lang_key=>$lang_value){
            if (strpos("." . $lang_key, "." . $key . ".") !== false && (!empty($language_mine[$lang_key])) ){
                $_new_lang_key = str_replace("." . $key . ".", "", "." . $lang_key);
                $language[$_new_lang_key] = $lang_value;
            }
        }
    }
    
    $xtpl->assign( "language_code", empty($language_code)?null:$language_code);
    $xtpl->assign( "app_version", empty($app_version)?null:$app_version);
    $xtpl->assign( "game_mode", empty($game_mode)?null:$game_mode);
    $xtpl->assign( "game_key", empty($game_key)?null:$game_key);
    $xtpl->assign( "company", empty($company_info)?null:$company_info);
    $xtpl->assign( "data", empty($company_info)?null:$company_info);
    $xtpl->assign( "header", empty($header)?null:$header);
    $xtpl->assign( "file", empty($file)?null:$file);
    $xtpl->assign( "quyen", empty($quyen)?null:$quyen);
    $xtpl->assign( "language", empty($language)?null:$language);
    $xtpl->assign( "filter", empty($filter)?null:$filter);
    $xtpl->assign( "lsx", empty($lsx)?null:$lsx);
    $xtpl->assign( "user_info", empty($user_info)?null:$user_info );
    $xtpl->assign( "today", empty($today)?null:$today );
    $xtpl->assign( "gpara", empty($general_para)?null:$general_para );
    $xtpl->assign( "_sconfig", empty($_sconfig)?null:$_sconfig);
}
?>