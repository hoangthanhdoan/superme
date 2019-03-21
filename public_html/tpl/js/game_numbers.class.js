class Game_numbers extends Game_controller{
    
    draw_exam_an_element(row, col){
        var c = col; var r = row; var _c = c; _c++;
        var col_html = "<div class='cot cot_1 "+((_c%2==0)?"cot_2":"")+" "+((_c%3==0)?"cot_3":"")+" "+((_c%4==0)?"cot_4":"")+" "+((_c%5==0)?"cot_5":"")+" "+((_c%6==0)?"cot_6":"")+" "+((_c%7==0)?"cot_7":"")+" "+((_c%8==0)?"cot_8":"")+" "+((_c%9==0)?"cot_9":"")+" '>"+this.para.matrix[r][c].title+"</div>";
        return col_html;
    }
    
    draw_question_answer_an_element(row, col){
        var c = col; var r = row; var _c = c; _c++;
        var idval = row*this.para.col + col;
        var col_html = "<div class='traloi cot cot_1 "+((_c%2==0)?"cot_2":"")+" "+((_c%3==0)?"cot_3":"")+" "+((_c%4==0)?"cot_4":"")+" "+((_c%5==0)?"cot_5":"")+" "+((_c%6==0)?"cot_6":"")+" "+((_c%7==0)?"cot_7":"")+" "+((_c%8==0)?"cot_8":"")+" "+((_c%9==0)?"cot_9":"")+" '><input col='"+c+"' row='"+r+"' id='input_"+idval+"' idval="+idval+" maxlength=1 min=0 max=9></div>";
        
        return col_html;
    }
    
}
