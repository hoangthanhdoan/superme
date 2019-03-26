class Game_images extends Game_controller{

    draw_exam_an_element(row, col){
        var src = para.matrix[row][col].image;
        var title = para.matrix[row][col].title;
        var subtitle = para.matrix[row][col].subtitle;
        var col_html = "<div class='cot '><div class='content'><div class='image'><img src='"+src+"'/></div><div class='title'>"+title+"</div><div class='subtitle'>"+subtitle+"</div></div></div>";
        return col_html;
    }
    
    draw_question_answer_an_element(row, col){
        var src = para.matrix_question[row][col].image;
        var index = (row*this.para.col + col);
        var idval = index*2;
        var idval_2 = idval+1;
        var title = para.matrix_question[row][col].title;
        var subtitle = para.matrix_question[row][col].subtitle;
        var col_html = "<div class='traloi cot'><div class='content'><div class='image'><img src='"+src+"'/></div><div class='title'><input placeholder='' col='"+col+"' row='"+row+"' id='input_"+index+"' idval="+idval+" min=0 max=9></div><div class='subtitle'><input placeholder='' col='"+col+"' row='"+row+"' id='input2_"+index+"' idval="+idval_2+" min=0 max=9></div></div></div>";
        
        return col_html;
    }
    
}
