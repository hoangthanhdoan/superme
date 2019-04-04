/**{game:number, } **/
class Game_historic_date extends Game_controller{
    constructor(para){
        if (para == null) para = {};
        if (para.type == null) para.type = 0;
        para.game_mode = parseInt(para.type);
        para.game_type = get_game_type("game_historic_date");
        
        if (para.quantity == null) para.quantity = 158;
        para.col = 1;
        switch ( parseInt(para.type) ){
            case DIFFICULT_NATIONAL()://quoc gia
                para.time_info_before_play = 60;
                para.time_exam_remember = 5*60;
                para.time_question_answer = 15*60;
                para.quantity = 158;
                para.row = para.quantity;
                break;
            case DIFFICULT_INTERNATIONAL()://quoc te
                para.time_info_before_play = 60;
                para.time_exam_remember = 5*60;
                para.time_question_answer = 15*60;
                para.quantity = 158;
                para.row = para.quantity;
                break;
            case DIFFICULT_WORLD()://the gioi
                para.time_info_before_play = 60;
                para.time_exam_remember = 5*60;
                para.time_question_answer = 15*60;
                para.quantity = 158;
                para.row = para.quantity;
                break;
            default:
                if ( isNaN(para.time_info_before_play) || para.time_info_before_play == 0 ) para.time_info_before_play = 60;
                if ( isNaN(para.time_exam_remember)  || para.time_exam_remember == 0) para.time_exam_remember = 5*60;
                if ( isNaN(para.time_question_answer)  || para.time_question_answer == 0) para.time_question_answer = 15*60;
                if ( isNaN(para.quantity)  || para.quantity == 0) para.quantity = 20;
                
                para.row = para.quantity;
                
        }
        
        super(para);
    }
        
    draw_exam_an_element(row, col){
        var stt = row + col*this.para.row + 1;
        var _col = col + 1;
        var title = this.para.matrix[row][col].title;
        var subtitle = this.para.matrix[row][col].subtitle;
        var col_html = "<div class='cot cot_"+_col+"'><div class='content row'><div class='stt col-1'>"+stt+"</div><div class='title col-2'>"+title+"</div><div class='subtitle col-sm'>"+subtitle+"</div></div></div>";
        return col_html;
    }
    
    draw_question_answer_an_element(row, col){
        var stt = row + col*this.para.row + 1;
        var idval = (row*this.para.col + col);
        var _col = col + 1;
        var subtitle = this.para.matrix_question[row][col].subtitle;
        var col_html = "<div class='traloi cot cot_"+_col+"'><div class='content row'><div class='stt col-1'>"+stt+"</div><div class='title col-2'><input placeholder='' col='"+col+"' row='"+row+"' id='input_"+idval+"' idval="+idval+" min=1 max=5></div><div class='subtitle col-sm'>"+subtitle+"</div></div></div>";
        
        return col_html;
    }
    
    handle_answer_input_keyup(obj_result, e){
        //obj_result.val( e.key );
        var idval = parseInt(obj_result.attr("idval"));
        
        var giatrithiet = false;
        switch (e.keyCode) {
            /*case Key._keycode_backspace:
                if (obj_result.val() == "") {
                    obj_result.attr("old", "");idval--;
                }
                break;
            */case Key._keycode_enter:
                idval++;
                break;
            case Key._keycode_escape:
                obj_result.attr("old", "");
                break;
            case Key._keycode_left_arrow:
                if (obj_result.val() == "") {idval--;}
                break;
            case Key._keycode_up_arrow:
                idval--;
                break;
            case Key._keycode_right_arrow:
                if (obj_result.val() == "") {idval++;}
                break;
            case Key._keycode_down_arrow:
                idval++;
                break;
            /*case Key._keycode_delete:
                if (obj_result.val() == "") {
                    obj_result.attr("old", "");
                    idval++;
                }
                break;
            */default:
                giatrithiet = true;
        }
        
        /** Begin: dam bao la so **/
        var giatri = obj_result.val();//parseInt(e.key);
        if (!isNaN(giatri)) {//console.log("la so");
            obj_result.attr("old", obj_result.val() );
        } else { //console.log("la chu");
            if (giatrithiet) obj_result.val( obj_result.attr("old") );
        } 
        /** Begin: dam bao la so **/
        
        var col = obj_result.attr("col");
        var row = obj_result.attr("row");
        this.para.matrix_answer[row][col].title = obj_result.val();
        
        $('.traloi input[idval='+idval+']').focus();
    }
}