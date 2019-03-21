var chuashow = true;
function xem_thu_hang(){
    logined(user_logined);
}

function logined(user){
    if (!user) return;
    chuashow = false;
    
    var inputContent = {};
    inputContent.difficult_type = $("select.cac_cap_do").val();
    inputContent.game_type = get_game_type($("select.cac_man_choi").val());
    inputContent.age_group = $("select.do_tuoi").val();
    inputContent.gender = $("select.gioi_tinh").val();;
    inputContent.location_at = $("select.noi_song").val();
    inputContent.time = $("select.thoi_gian").val();;
    inputContent.email = user.email;
    
    var obj_result = $("#ranking_area .ds_xephang");
    obj_result.html("<tr><td colspan='6'>"+language.dang_tai+"</td></tr>");
    REQUEST_GET_CHARTS_REQUEST({ content: inputContent }, function(rs){
        var objs = JSON.parse(rs);
        var data = objs.content.array;
        
        obj_result.html("");
        $(".thu_hang_cua_ban").html(objs.content.your_rank);
        var d = new Date();
        var year = d.getFullYear();

        var stt = 0;
        for (var key in data){
            stt++;
            var mot_hang_html = "" + 
'            <tr class="mot_xephang">' + 
'              <th scope="row" class="text-center ranking_icon_'+stt+'">'+stt+'</th>' + 
'              <td>'+data[key].fullname+'</td>' + 
'              <td class="text-center">'+(year - data[key].year_of_birth)+'</td>' + 
'              <td>'+data[key].location_at+'</td>' + 
'              <td class="text-center">'+data[key].score+'</td>' + 
'              <td class="chi_tiet" key="'+key+'"><span>'+language.chi_tiet+'</span></td>' + 
'            </tr>';

            obj_result.append(mot_hang_html);
        }
        if (data.length == 0) {
            obj_result.html("<tr><td colspan='6'>"+language.khong_co_du_lieu+"</td></tr>");
        } else {
            $(".chi_tiet").unbind("click");
            $(".chi_tiet").click(function(){
                var key = $(this).attr("key");
                var dialog_html = '';
                var chi_tiet_this = $(this);
                
                hien_thi_chi_tiet(key, chi_tiet_this);
            })
        
        }
        function secondsToHms(d) {
            d = Number(d);
            var h = Math.floor(d / 3600);
            var m = Math.floor(d % 3600 / 60);
            var s = Math.floor(d % 3600 % 60);
        
            return h + ":" + m + ":" + s; 
        }
        function hien_thi_chi_tiet(key, chi_tiet_this){
            var dialog_html = '' +
'<style>'+
'.thong_tin_ca_nhan {text-align:center}'+
'.thong_tin_game .tieu_de {font-weight:bold}'+
'.thong_tin_game .ten_game {text-transform:uppercase; padding-bottom: 15px}'+
'</style>'+
'<div class="row">'+
'    <div class="thong_tin_ca_nhan col-4">'+
'        <img src="'+data[key].avatar+'" width="100px" height="100px"/>'+
'        <div style="font-weight:bold">'+data[key].fullname+'</div>'+
'        <div style="font-style:small"><span>'+get_language_gender(data[key].gender)+'</span> - <span>'+data[key].year_of_birth+'</span></div>'+
'        <div>'+data[key].location_at+'</div>'+
'    </div>'+
'    <div class="thong_tin_game col-sm">'+
'        <div class="tieu_de ten_game">'+get_language_game( get_key_game_name(data[key].game_type_id) ) +'</div>'+
'        <div><span class="tieu_de">'+language.cap_do+':</span> '+get_language_game_mode(data[key].difficult_type_id)+'</div>'+
'        <div><span class="tieu_de">'+language.diem_so+':</span> '+data[key].score+'</div>'+
'        <div><span class="tieu_de">'+language.thoi_gian_nho+':</span> '+secondsToHms(data[key].memory_time)+'</div>'+
'        <div><span class="tieu_de">'+language.thoi_gian_tra_loi+':</span> '+secondsToHms(data[key].answer_time)+'</div>'+
'        <div><span class="tieu_de">'+language.thoi_gian_tao+':</span> '+data[key].created_at+'</div>'+
'    </div>'+
'</div>';
            chi_tiet_this.append("<div class='noidung'></div>");
            chi_tiet_this.find(".noidung").html(dialog_html);
            chi_tiet_this.find(".noidung").dialog({
                modal: true,
                buttons: {
                    Ok: function() {
                        $(this).dialog('destroy').remove();
                    }
                }
            });
            $("div[role=dialog]").css("width", "60%");
            $("div[role=dialog]").css("top", "0px");
            $("div[role=dialog]").css("left", "20%");
        }
        
    })
}

$("document").ready(function(){
    $("select.xem_thu_hang").unbind("change");
    $("select.xem_thu_hang").change(function(){
        xem_thu_hang();
    })
    $(".action.xem_thu_hang").unbind("click");
    $(".action.xem_thu_hang").click(function(){
        xem_thu_hang();
    })
    if (chuashow) xem_thu_hang();
})