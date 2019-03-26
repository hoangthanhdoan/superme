var chuashow = true;

function logined(user){
    if (!user) return;
    chuashow = false;
    REQUEST_GET_PROFILE_REQUEST({ content: {email: user.email} }, function(rs){
        var objs = JSON.parse(rs);
        var data = objs.content.array;
        
        if (data.length > 0) {
            var background = "top center url("+data[0].avatar+") no-repeat";
            var background_size = "100px";
            $("#level_area .avatar").css("background", background);
            $("#level_area .avatar").css("background-size", background_size);
            $("#level_area .fullname ").html(data[0].fullname);
        }

        //Doan viet code vao day
        requestProfile({
            "callback":function(dict){
                //dọc từ trong dict này ra để hiển thị lên giao diện
                console.log(dict);
                var mylevel = {
                    total: dict.level,
                    game_random_number: dict.level_rn,
                    game_random_binary: dict.level_bn,
                    game_random_word: dict.level_rw,
                    game_random_card: dict.level_rc,
                    game_speed_number: dict.level_sn,
                    game_speed_card: dict.level_sc,
                    game_abstract_image: dict.level_ai,
                    game_historic_date: dict.level_hfd,
                    game_spoken_number: dict.level_spn,
                    game_name_face: dict.level_naf
                }

                Object.keys(mylevel).forEach(function(k){
                    $("." + k + " .level").append(mylevel[k]);
                });
            },
            "failCallback":function(message){
                window.alert(message);  
            }
        });
    } )
}


function requestProfile(para){
    function callbackToParse(body) {
        LOG(body);
        // window.alert(body);
        var responseDict = JSON.parse(body);
        try{
            var levelInfo = responseDict.content.array[0];
            para.callback(levelInfo);
            return;
        }catch(e){
            para.failCallback("Xay ra loi:" + e);
            return;
        }
        para.failCallback("Xay ra loi");


        
    }
    if (user_logined!=null)
        REQUEST_GET_USER_LEVEL_REQUEST({"content":{"email":user_logined.email}}, callbackToParse);
};


$("document").ready(function(){
    if (chuashow) logined(user_logined);
})