function LOG(para){
    try{show_log(para);} catch(e){}
}

function SETUSERDEFAULT(para){
    try{set_user_default(para);} catch(e){}
}


function FINISHED(para){
    try{request_finished(para);} catch(e){}
}

function REQUEST(urlString,method,params,headers,cacheTime,responseBlock){
    var params_obj = JSON.parse(params);
    
	$.ajax({
		cacheTime   : cacheTime,
        header      : headers, // define the type of HTTP verb we want to use (POST for our form)
		type        : method, // define the type of HTTP verb we want to use (POST for our form)
		url         : urlString, // the url where we want to POST
		data        : params_obj, // our data object
		dataType    : 'json', // what type of data do we expect back from the server
		encode      : true
	})
	.success(function(result) {
       responseBlock( JSON.stringify({content:JSON.stringify(result)}) );
    })
	.error(function(result) {
        responseBlock('{"error": "Request that bai ' + urlString + '", "code": 400}');
	});
    
}


function get_key_game_mode(num){
    switch (  parseInt(num) ){
        case DIFFICULT_NATIONAL(): return "national"; break;
        case DIFFICULT_INTERNATIONAL(): return "international"; break;
        case DIFFICULT_WORLD(): return "world"; break;
        default: return "freedom"; break;
    }
}
function get_key_game_name(num){
    switch (  parseInt(num) ){
        case GAMETYPE_NAME_AND_FACE(): return "game_name_face"; break;
        case GAMETYPE_BINARY_NUMBER(): return "game_random_binary"; break;
        case GAMETYPE_RANDOM_NUMBER(): return "game_random_number"; break;
        case GAMETYPE_ABSTRACT_IMAGES(): return "game_abstract_image"; break;
        case GAMETYPE_SPEED_NUMBER(): return "game_speed_number"; break;
        case GAMETYPE_HISTORY_FUTURE_DATES(): return "game_historic_date"; break;
        case GAMETYPE_RANDOM_CARD(): return "game_random_card"; break;
        case GAMETYPE_RANDOM_WORD(): return "game_random_word"; break;
        case GAMETYPE_SPOKEN_NUMBER(): return "game_spoken_number"; break;
        case GAMETYPE_SPEED_CARDS(): return "game_speed_card"; break;
    }
}
function get_game_type(game_key){
    switch (  game_key ){
        case "game_name_and_face": 
        case "game_name_face": return GAMETYPE_NAME_AND_FACE(); break;
        case "game_binary_number": 
        case "game_random_binary": return GAMETYPE_BINARY_NUMBER(); break;
        case "game_random_number": return GAMETYPE_RANDOM_NUMBER(); break;
        case "game_abstract_image": return GAMETYPE_ABSTRACT_IMAGES(); break;
        case "game_speed_number": return GAMETYPE_SPEED_NUMBER(); break;
        case "game_historic_future_date": 
        case "game_historic_date": return GAMETYPE_HISTORY_FUTURE_DATES(); break;
        case "game_random_card": return GAMETYPE_RANDOM_CARD(); break;
        case "game_random_word": return GAMETYPE_RANDOM_WORD(); break;
        case "game_spoken_number": return GAMETYPE_SPOKEN_NUMBER(); break;
        case "game_speed_card": return GAMETYPE_SPEED_CARDS(); break;
    }
}

function get_language_game(game_key){
    switch (  game_key ){
        case "game_name_and_face": 
        case "game_name_face": return language["ten_va_khuon_mat"]; break;
        case "game_binary_number": 
        case "game_random_binary": return language["so_nhi_phan"]; break;
        case "game_random_number": return language["so_ngau_nhien"]; break;
        case "game_abstract_image": return language["hinh_anh_truu_tuong"]; break;
        case "game_speed_number": return language["nho_so_nhanh"]; break;
        case "game_historic_future_date": 
        case "game_historic_date": return language["nam_lich_su"]; break;
        case "game_random_card": return language["bai_ngau_nhien"]; break;
        case "game_random_word": return language["tu_ngau_nhien"]; break;
        case "game_spoken_number": return language["nghe_nho_so"]; break;
        case "game_speed_card": return language["nho_bai_nhanh"]; break;
    }
}
function get_language_game_mode(game_mode_id){
    switch (  parseInt(game_mode_id) ){
        case DIFFICULT_NATIONAL(): return language["thi_quoc_gia"]; break;
        case DIFFICULT_INTERNATIONAL(): return language["thi_quoc_te"]; break;
        case DIFFICULT_WORLD(): return language["thi_the_gioi"]; break;
        case DIFFICULT_FREEDOM(): return language["luyen_tap_tu_do"]; break;
    }
}
function get_language_gender(gender){
    switch (  parseInt(gender) ){
        case 0: return language["gioi_tinh_nu"]; break;
        case 1: return language["gioi_tinh_nam"]; break;
    }
}
