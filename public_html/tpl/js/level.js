
var mylevel = {
    total: 1,
    game_random_number: 2,
    game_random_binary: 3,
    game_random_word: 3,
    game_random_card: 3,
    game_speed_number: 3,
    game_speed_card: 3,
    game_abstract_image: 3,
    game_historic_date: 3,
    game_spoken_number: 3,
    game_name_face: 4
}

Object.keys(mylevel).forEach(function(k){
    //$("." + user_logined.email + " .level").append(mylevel[k]);
    //window.alert(user_logined.email);
});


function logined(user){
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




