/**{game:number, } **/
class Game_random_number extends Game_numbers{
    constructor(para){
        if (para == null) para = {};
        if (para.type == null) para.type = 0;
        para.game_mode = parseInt(para.type);
        para.game_type = get_game_type("game_random_number");
        super(para);
    }
    
    // //Sinh du lieu
    // generate(params){
    //     if (params == null) var params = {}; var para = params;
    //     for (var k in this.para){
    //         if (params[k] == null)  para[k] = this.para[k]; else para[k] = params[k];
    //     }
        
    //     var _matrix = [];
    //     for (var r = 0; r < para.row; r++){
    //         _matrix[r] = [];
    //         for (var c = 0; c < para.col; c++){
    //             _matrix[r][c] = {title: Math.round(Math.random()*9)};
    //         }
    //     }
    //     this.col = para.col;
    //     this.row = para.row;
    //     this.para.matrix = _matrix;
    //     this.matrix = this.para.matrix;
        
    //     try {para.finished(para);} catch(e){}
    // }
    //Hien thi de bai
    draw_exam( params ) {
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
        
        for (var r = 0; r < para.row; r++){
            var row_html = "<div class='mothang'>";
            for (var c = 0; c < para.col; c++){
                var _c = c; _c++;
                var col_html = "<div class='cot cot_1 "+((_c%2==0)?"cot_2":"")+" "+((_c%3==0)?"cot_3":"")+" "+((_c%4==0)?"cot_4":"")+" "+((_c%5==0)?"cot_5":"")+" "+((_c%6==0)?"cot_6":"")+" "+((_c%7==0)?"cot_7":"")+" "+((_c%8==0)?"cot_8":"")+" "+((_c%9==0)?"cot_9":"")+" '>"+para.matrix[r][c].title+"</div>";
                row_html = row_html + col_html;
            }
            var _tmp = r; _tmp++;
            row_html = row_html + "<div class='cot sohang'>row"+_tmp+"</div></div>";
            obj_result_content.append(row_html);
        }
        try {para.finished(para);} catch(e){}
        
	};
    //Hien thi Textbox de nhap dap an
    draw_question_answer( params ) {
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
        var obj_result_content = this.obj_question_scr.find("#content");
        if (obj_result_content == null) {
            para.message = "Khong co obj_result#content";
            try {para.error(para);} catch(e){} return;
        }
        
        para.matrix_answer = [];
        this.matrix_answer = para.matrix_answer;
        
        var idval = 0;
        for (var r = 0; r < para.row; r++){
            para.matrix_answer[r] = [];
            var row_html = "<div class='mothang'>";
            for (var c = 0; c < para.col; c++){
                var _c = c; _c++;
                idval++;
                var col_html = "<div class='traloi cot cot_1 "+((_c%2==0)?"cot_2":"")+" "+((_c%3==0)?"cot_3":"")+" "+((_c%4==0)?"cot_4":"")+" "+((_c%5==0)?"cot_5":"")+" "+((_c%6==0)?"cot_6":"")+" "+((_c%7==0)?"cot_7":"")+" "+((_c%8==0)?"cot_8":"")+" "+((_c%9==0)?"cot_9":"")+" '><input col='"+c+"' row='"+r+"' id='input_"+idval+"' idval="+idval+" maxlength=1 min=0 max=9></div>";
                row_html = row_html + col_html;
                
                para.matrix_answer[r][c] = {title:-1, obj: null, id: "input_"+idval};
            }
            var _tmp = r; _tmp++;
            row_html = row_html + "<div class='cot sohang'>row"+_tmp+"</div></div>";
            obj_result_content.append(row_html);
            
            for (c = 0; c < para.col; c++){
                para.matrix_answer[r][c].obj = $("#" + para.matrix_answer[r][c].id);
            }
        }
        
        //$('.traloi input[idval=1]').focus();
        $('.traloi input').unbind('keyup');
        $('.traloi input').bind('keyup', function(e) {    
            $(this).val( e.key );
            var idval = parseInt($(this).attr("idval"));
            
            var giatrithiet = false;
            switch (e.keyCode) {
                case Key._keycode_backspace:
                    $(this).attr("old", "");idval--;
                    break;
                case Key._keycode_enter:
                    idval++;
                    break;
                case Key._keycode_escape:
                    $(this).attr("old", "");
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
                    $(this).attr("old", "");
                    idval++;
                    break;
                default:
                    giatrithiet = true;
            }
            var giatri = parseInt(e.key);
            if (!isNaN(giatri)) {
                idval++;
                $(this).attr("old", giatri);
            } else {
                  $(this).val( $(this).attr("old") );
            } 
            var col = $(this).attr("col");
            var row = $(this).attr("row");
            para.matrix_answer[row][col].title = $(this).val();
            
            $('.traloi input[idval='+idval+']').focus();
            
        });
        
        this.para.matrix_answer = para.matrix_answer;
        this.matrix_answer = this.para.matrix_answer;
        
        try {para.finished(para);} catch(e){}
	};
 //    //Giai tro choi Number
	// draw_checkmark( params ) {
 //        if (params == null) var params = {}; var para = params;
 //        for (var k in this.para){
 //            if (params[k] == null)  para[k] = this.para[k]; 
 //        }
        
 //        para.col = this.col;
 //        para.row = this.row;
 //        if (para.matrix == null) {
 //            para.message = "Khong co data";
 //            try {para.error(para);} catch(e){} return;
 //        }
 //        para.diem = 0;
        
 //        for (var r = 0; r < para.row; r++){
 //            var sodiemdung = 0;
 //            for (var c = 0; c < para.col; c++){
 //                var obj_col = para.matrix_answer[r][c].obj;
 //                var giatri = para.matrix_answer[r][c].title;
 //                if (giatri != para.matrix[r][c].title){
 //                    obj_col.removeClass("dung");
 //                    obj_col.addClass("sai");
 //                } else 
 //                {
 //                    sodiemdung++;
 //                    obj_col.removeClass("sai");
 //                    obj_col.addClass("dung");
 //                } 
 //            }
 //            if (sodiemdung == para.col) para.diem += sodiemdung;
 //            else {
 //                if (r == para.row - 1) para.diem += sodiemdung;
 //            }
 //        }
        
 //        try {para.finished(para);} catch(e){}
	// };
}
