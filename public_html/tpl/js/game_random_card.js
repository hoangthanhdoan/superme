$(document).ready(function(){
    /* Khoi tao game */
    para = {
        name:"Game random card", 
        type: game_mode,//0: Tu do, 1: quoc gia, 2: quoc te, 3: the gioi
        
        time_info_before_play: time_info_before_play,
        time_exam_remember: time_exam_remember,
        time_question_answer: time_question_answer, 
        quantity: quantity,
        
        obj_info_scr: $("#game_info"),
        obj_exam_scr: $("#game_exam"),
        obj_question_scr: $("#game_question"),
        obj_mark_scr: $("#game_mark"),
        error: function (para){
            console.log(para.message);
        }
    }
    var game = new Game_random_card(para);
    game.start();
    
    var cot_objs = [];
    setTimeout(function(){
        for (var i = 0; i < 100; i++){
            for (var j = 1; j <= 52; j++){
                var n = i*52 + j;
                cot_objs[n] = para.obj_exam_scr.find("#cot_" + n);
            }    
        }
    }, 500)
    
    var nhom = 0;
    var bobai = 1;
    var bottom_obj = para.obj_exam_scr.find(".toolbar.bottom");
    para.obj_exam_scr.addClass("row");
    para.obj_exam_scr.find(".toolbar.top").addClass("col-12");
    bottom_obj.addClass("col-12 row");
    para.obj_exam_scr.find(".toolbar.top").after("<div id='left' class='pointer pre col-1'>Previous</div>");
    para.obj_exam_scr.find("#content").after("<div id='right' class='pointer next col-1'>Next</div>");
    para.obj_exam_scr.find("#content").addClass("col-sm");
    
    for (var i = 1; i <= 100; i++){
        bottom_obj.append("<div class='chon_bo_bai pointer' value='"+i+"'>"+i+"</div>");
    }
    $("select option[value=0]").remove();
    $("._card_game").addClass("group_card_1");
    $(".action.chia_nhom").unbind("change");
    $(".action.chia_nhom").change(function(){
        socot = $(this).val();
        $(".action.chia_nhom").val(socot);
        
        for (var i = 1; i < 10; i++) $("._card_game").removeClass("group_card_" + i);
        $("._card_game").addClass("group_card_" + socot);
        
        hienthi(bobai, nhom);
    })
    
    $(".chon_bo_bai").unbind("click");
    $(".chon_bo_bai").click(function(){
        $(".chon_bo_bai.duocchon").removeClass("duocchon");
        $(this).addClass("duocchon");
        bobai = $(this).attr("value");
        hienthi();
    })
    $(".chon_bo_bai[value=1]").addClass("duocchon");
    
    $(".pre").click(function(){
        if (nhom > 0) nhom--;
        
        hienthi();
    })
    $(".next").click(function(){
        var socot = $(".action.chia_nhom").val();
        if (nhom < 52) nhom++;
        
        hienthi();
    })
    $(document).keyup(function(e){
        switch (e.keyCode){
            case Key._keycode_left_arrow:
                $(".pre").click();
                break;
            case Key._keycode_right_arrow:
                $(".next").click();
                break;
        }
    })
    function hienthi(){
        var socot = $(".action.chia_nhom").val();
        if (nhom*socot >= 52) {nhom = Math.floor(52/socot);}
        
        $(".mothang").hide();
        $(".mothang_" + bobai).show();
        
        if (socot == 0) socot = 1;
        $(".cot").hide();
        for (var i = 0; i < socot; i++){
            var cot = (bobai-1)*52+ nhom*socot + i;
            para.obj_exam_scr.find("#cot_" + cot).show();
            /*try {
                cot_objs[cot].show();
            }catch{
                cot_objs[cot] = para.obj_exam_scr.find("#cot_" + cot);
                cot_objs[cot].show();
            }
            */
            console.log("cot = " + cot);
        }
    }
    
    setTimeout(function(){hienthi(0);}, 3000);
    
})