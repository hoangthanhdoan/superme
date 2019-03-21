function show_profile(profile){
        //console.log("profile");
        
        $("#profile_area input[name=email] ").val(profile.email);
        $("#profile_area input[name=fullname] ").val(profile.fullname);
        $("#profile_area select[name=gender] ").val(profile.gender);
        $("#profile_area select[name=location_at] ").val(profile.location_at);
        $("#profile_area select[name=year_of_birth] ").val(profile.year_of_birth);
        $("#profile_area input[name=phone_id] ").val(profile.phone_id);
        
        var background = "top center url("+profile.avatar+") no-repeat";
        var background_size = "100px";
        $("#profile_area .banner").css("background", background);
        $("#profile_area .banner").css("background-size", background_size);
            
}
var chuashow = true;

function logined(user){
    if (!user) return;
    chuashow = false;
    
    REQUEST_GET_PROFILE_REQUEST({ content: {email: user.email} }, function(rs){
        var objs = JSON.parse(rs);
        var data = objs.content.array;
        
        if (data.length == 0) {
            var data = {};
            data.email = user.email;
            data.fullname = user.displayName;
            data.gender = 255;
            data.location_at = "";
            data.year_of_birth = 0;
            
            show_profile(data);
        } else show_profile(data[0]);
    } )

}

$("document").ready(function(){
    if (chuashow) logined(user_logined);
})