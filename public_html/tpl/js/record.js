var chuashow = true;
function logined(user){
    if (!user) return;
    
    function secondsToHms(d) {
        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);
    
        return h + ":" + m + ":" + s; 
    }
    chuashow = false;
    REQUEST_GET_TRAINING_RECORD_REQUEST({ content:{email: user.email } }, function(rs){
        var lich_su_obj = $("#lichsu_choigame");
        var objs = JSON.parse(rs);
        var data = objs.content.array;
        
        var game_key = "";
        for (var key in data){
            game_key = get_key_game_name(data[key].game_type_id);
            var mot_lich_su_html = "" + 
'                <div class="mot_lichsu '+game_key+' row col-6">' +
'                    <div class="logo col-sm">' +
'                        <div class="ten_game">'+get_language_game(game_key)+'</div>' +
'                    </div>' +
'                    <div class="content col-8">' +
'                        <div class="diem_thi row">' +
'                            <div class="tieu_de col-sm">'+language.diem_so+': </div>' +
'                            <div class="diem col-sm">'+data[key].score+'</div>' +
'                        </div>' +
'                        <div class="ngay_thang">'+language.ngay+': '+data[key].created_at+'</div>' +
'                        <div class="thoi_gian_nho">'+language.thoi_gian_nho+': '+secondsToHms(data[key].memory_time)+'</div>' +
'                        <div class="thoi_gian_tra_loi">'+language.thoi_gian_tra_loi+': '+secondsToHms(data[key].answer_time)+'</div>' +
'                    </div>' +
'                </div>';

            lich_su_obj.append(mot_lich_su_html);
        }
    })
}

$("document").ready(function(){
    if (chuashow) logined(user_logined);
})