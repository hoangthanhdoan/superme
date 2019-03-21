/**{game:number, } **/
class Game_random_word extends Game_controller{
    constructor(para){
        if (para == null) para = {};
        if (para.type == null) para.type = 0;
        para.game_mode = parseInt(para.type);
        para.game_type = get_game_type("game_random_word");
        
        super(para);
    }
        
    draw_exam_an_element(row, col){
        var stt = (row*this.para.col + col) + 1;
        var _col = col + 1;
        var title = this.para.matrix[row][col].title;
        var col_html = "<div class='cot cot_"+_col+"'><div class='content row'><div class='stt'>"+stt+"</div><div class='title col-sm'>"+title+"</div></div></div>";
        return col_html;
    }
    
    draw_question_answer_an_element(row, col){
        var stt = 0;//row + col*this.para.row + 1;
        var idval = (row*this.para.col + col);
        stt = idval+1;
        var _col = col + 1;
        var col_html = "<div class='traloi cot cot_"+_col+"'><div class='content row'><div class='stt'>"+stt+"</div><div class='title col-sm'><input class='col-sm' placeholder='' col='"+col+"' row='"+row+"' id='input_"+idval+"' idval="+idval+" min=1 max=5></div></div></div>";
        
        return col_html;
    }
    
    handle_answer_input_keyup(obj_result, e){
        //obj_result.val( e.key );
        var idval = parseInt(obj_result.attr("idval"));
        
        var giatrithiet = false;
        switch (e.keyCode) {
            case Key._keycode_backspace:
                if (obj_result.val() == "") {
                    obj_result.attr("old", "");idval--;
                }
                break;
            case Key._keycode_enter:
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
            case Key._keycode_delete:
                if (obj_result.val() == "") {
                    obj_result.attr("old", "");
                    idval++;
                }
                break;
            default:
                giatrithiet = true;
        }
         
        var col = obj_result.attr("col");
        var row = obj_result.attr("row");
        this.para.matrix_answer[row][col].title = obj_result.val();
        
        $('.traloi input[idval='+idval+']').focus();
    }
}