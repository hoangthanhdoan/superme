/**{game:number, } **/
class Game_random_binary extends Game_numbers{
    constructor(para){
        if (para == null) para = {};
        if (para.type == null) para.type = 0;
        para.game_mode = parseInt(para.type);
        para.game_type = get_game_type("game_random_binary");
        
        if (para.quantity == null) para.quantity = 100;
        para.col = 30;
        switch ( para.game_mode ){
            case DIFFICULT_NATIONAL()://quoc gia
                para.time_info_before_play = 60;
                para.time_exam_remember = 5*60;
                para.time_question_answer = 15*60;
                para.quantity = 100;
                para.row = para.quantity;
                break;
            case DIFFICULT_INTERNATIONAL()://quoc te
                para.time_info_before_play = 60;
                para.time_exam_remember = 30*60;
                para.time_question_answer = 60*60;
                para.quantity = 100;
                para.row = para.quantity;
                break;
            case DIFFICULT_WORLD()://the gioi
                para.time_info_before_play = 60;
                para.time_exam_remember = 30*60;
                para.time_question_answer = 60*60;
                para.quantity = 100;
                para.row = para.quantity;
                break;
            default:
                if ( isNaN(para.time_info_before_play) || para.time_info_before_play == 0 ) para.time_info_before_play = 60;
                if ( isNaN(para.time_exam_remember)  || para.time_exam_remember == 0) para.time_exam_remember = 5*60;
                if ( isNaN(para.time_question_answer)  || para.time_question_answer == 0) para.time_question_answer = 15*60;
                if ( isNaN(para.quantity)  || para.quantity == 0) para.quantity = 100;
                
                para.row = para.quantity;
                
        }
        
        super(para);
    }
    
    handle_answer_input_keyup(obj_result, e){
        obj_result.val( e.key );
        var idval = parseInt(obj_result.attr("idval"));
        
        var giatrithiet = false;
        switch (e.keyCode) {
            case Key._keycode_backspace:
                obj_result.attr("old", "");idval--;
                break;
            case Key._keycode_enter:
                idval++;
                break;
            case Key._keycode_escape:
                obj_result.attr("old", "");
                break;
            case Key._keycode_left_arrow:
                idval--;
                break;
            case Key._keycode_up_arrow:
                idval -= para.col;
                break;
            case Key._keycode_right_arrow:
                idval++;
                break;
            case Key._keycode_down_arrow:
                idval += para.col;
                break;
            case Key._keycode_delete:
                obj_result.attr("old", "");
                idval++;
                break;
            default:
                giatrithiet = true;
        }
        var giatri = parseInt(e.key);
        if (giatri == 0 || giatri == 1) {//La so
            idval++;
            obj_result.attr("old", giatri);
        } else {//La chu
              obj_result.val( obj_result.attr("old") );
        } 
        var col = obj_result.attr("col");
        var row = obj_result.attr("row");
        this.para.matrix_answer[row][col].title = obj_result.val();
        
        $('.traloi input[idval='+idval+']').focus();
    }
    
}