/**{game:number, } **/
class Game_name_face extends Game_images{
    constructor(para){
        if (para == null) para = {};
        if (para.type == null) para.type = 0;
        para.game_mode = parseInt(para.type);
        para.game_type = get_game_type("game_name_face");
        
        // if (para.quantity == null) para.quantity = 23;
        // para.col = 5;
        // switch ( parseInt(para.type) ){
        //     case 1://quoc gia
        //         para.time_info_before_play = 60;
        //         para.time_exam_remember = 5*60;
        //         para.time_question_answer = 15*60;
        //         para.quantity = 23;
        //         para.row = para.quantity;
        //         break;
        //     case 2://quoc te
        //         para.time_info_before_play = 60;
        //         para.time_exam_remember = 15*60;
        //         para.time_question_answer = 30*60;
        //         para.quantity = 23;
        //         para.row = para.quantity;
        //         break;
        //     case 3://the gioi
        //         para.time_info_before_play = 60;
        //         para.time_exam_remember = 15*60;
        //         para.time_question_answer = 30*60;
        //         para.quantity = 23;
        //         para.row = para.quantity;
        //         break;
        //     default:
        //         if ( isNaN(para.time_info_before_play) || para.time_info_before_play == 0 ) para.time_info_before_play = 60;
        //         if ( isNaN(para.time_exam_remember)  || para.time_exam_remember == 0) para.time_exam_remember = 5*60;
        //         if ( isNaN(para.time_question_answer)  || para.time_question_answer == 0) para.time_question_answer = 15*60;
        //         if ( isNaN(para.quantity)  || para.quantity == 0) para.quantity = 23;
                
        //         para.row = para.quantity;
                
        // }
        
        super(para);
    }
    
    // generate(params){
    //     super.generate(params);
        
    //     for (var row = 0; row < this.para.row; row++){
    //         for (var col = 0; col < this.para.col; col++){
    //             var nn = '10000' + Math.ceil(Math.random()*287);
    //             var link = nn.substr(nn.length - 4);
    //             var src = 'http://api.memorybooster.top/resources/names_and_faces/5638e97011ae1a8df868cfb11a4abb9f.decompress/male_image_'+link+'.jpg';
    //             this.para.matrix[row][col].image = src;
    //         }
    //     }
        
    //     this.matrix = this.para.matrix;
    //     this.para.matrix_question = this.para.matrixQuestion;
    //     this.matrix_question = this.para.matrix_question;
    // }
    
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
        if (idval%2){
            this.para.matrix_answer[row][col].subtitle = obj_result.val();
        }else{
            this.para.matrix_answer[row][col].title = obj_result.val();
        }
        
        
        $('.traloi input[idval='+idval+']').focus();
    }

    
}