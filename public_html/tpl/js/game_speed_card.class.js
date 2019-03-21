/**{game:number, } **/
class Game_speed_card extends Game_numbers{
    constructor(para){
        if (para == null) para = {};
        if (para.type == null) para.type = 0;
        para.game_mode = parseInt(para.type);
        para.game_type = get_game_type("game_speed_card");
        
        if (para.quantity == null) para.quantity = 100;
        para.col = 30;
        switch ( parseInt(para.type) ){
            case 1://quoc gia
                para.time_info_before_play = 60;
                para.time_exam_remember = 100;
                para.time_question_answer = 5*60;
                para.quantity = 100;
                para.row = para.quantity;
                break;
            case 2://quoc te
                para.time_info_before_play = 60;
                para.time_exam_remember = 100;
                para.time_question_answer = 10*60;
                para.quantity = 100;
                para.row = para.quantity;
                break;
            case 3://the gioi
                para.time_info_before_play = 60;
                para.time_exam_remember = 200;
                para.time_question_answer = 10*60;
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
    
    draw_exam1( params ) {
        if (params == null) var params = {}; var para = params;
        for (var k in this.para){
            if (params[k] == null)  para[k] = this.para[k]; 
        }
        para.col = this.col;
        para.row = this.row;
        para.matrix = this.matrix;
        
        if (para.matrix == null) {
            para.message = "Khong co data";
            try {para.error(para);} catch(e){} return;
        }
        var obj_result_content = this.obj_exam_scr.find("#content");
        if (obj_result_content == null) {
            para.message = "Khong co obj_result#content";
            try {para.error(para);} catch(e){} return;
        }
        
        obj_result_content.append("<div class='playing_number'>Playing</div>")
        
        
        
    }
    
    exam_start(){
        super.exam_start();
        
        var obj_this = this;
        setTimeout(function(){
            
            var counter = 0;
            obj_this._playing = setInterval(function(){
                var row = Math.floor(counter/obj_this.para.col);
                var col = counter%obj_this.para.col;
                var n = obj_this.para.matrix[row][col].title;
                console.log(counter + ", ["+row+","+col+"] = " + n);
                Play_audio._number(n);
                counter++;
                if (counter > obj_this.para.col * obj_this.para.row) clearInterval(_playing);
            }, 1000);
        }, 3000)
    }
    question_answer_start(){
        super.question_answer_start();
        clearInterval(this._playing);
    }
}