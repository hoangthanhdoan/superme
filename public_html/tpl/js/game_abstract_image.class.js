/**{game:number, } **/
class Game_abstract_image extends Game_images{
    constructor(para){
        if (para == null) para = {};
        para.game_mode = parseInt(para.type);
        para.game_type = get_game_type("game_abstract_image");
        
        super(para);
    }
    
    // generate(params){
    //     super.generate(params);
        
    //     for (var row = 0; row < this.para.row; row++){
    //         for (var col = 0; col < this.para.col; col++){
    //             var nn = Math.ceil(Math.random()*5900);
    //             var src = 'http://api.memorybooster.top/resources/abstract_images/60767b88bfaab78852233632c512441c.decompress/2017Abstracts%20('+nn+').jpg';
    //             this.para.matrix[row][col].image = src;
    //             this.para.matrix[row][col].title = nn;
    //         }
    //     }
        
    //     this.matrix = this.para.matrix;
    //     this.para.matrix_question = this.para.matrix;
    //     this.matrix_question = this.para.matrix_question;
    // }
    
    draw_exam_an_element(row, col){
        var src = para.matrix[row][col].image;
        var title = para.matrix[row][col].title;
        var subtitle = para.matrix[row][col].subtitle;
        var col_html = "<div class='cot'><div class='content'><div class='image'><img src='"+src+"'/></div></div></div>";
        return col_html;
    }
    
    draw_question_answer_an_element(row, col){
        var src = para.matrix_question[row][col].image;
        var idval = (row*this.para.col + col);
        var idval_2 = idval + 1;
        var title = para.matrix_question[row][col].title;
        var subtitle = para.matrix_question[row][col].subtitle;
        var col_html = "<div class='traloi cot'><div class='content'><div class='image'><img src='"+src+"'/></div><div class='title'><input placeholder='' col='"+col+"' row='"+row+"' id='input_"+idval+"' idval="+idval+" maxlength=1 min=1 max=5></div></div></div>";
        
        return col_html;
    } 
    
}