$(document).ready(function(){
    /* Khoi tao game */
    para = {
        name:"Game spoken number", 
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
    var game = new Game_spoken_number(para);
    game.start();
    
    game.obj_exam_scr.find(".action.chia_nhom").hide();
    $(".action.chia_nhom").unbind("change");
    $(".action.chia_nhom").change(function(){
        socot = $(this).val();
        $(".action.chia_nhom").val(socot);
        $(".col_border").removeClass("col_border");
        $(".cot_" + socot).addClass("col_border");
    })

})