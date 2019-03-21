/**{game:number, } **/
function generate_game(para){
    _game_number = "number";
    if (para == null) para = {};
    if (para.game == null) para.game = _game_number;
    
    switch (para.game){
        case _game_number:
            return generate_game_number(para);
            break;
    }
}

function generate_game_number(para){
    if (para == null) para = {};
    if (para.col == null) para.col = 40;
    if (para.row == null) para.row = 100;
    
    var _matrix = [];
    for (r = 0; r < para.row; r++){
        _matrix[r] = [];
        for (c = 0; c < para.col; c++){
            _matrix[r][c] = {title: Math.round(Math.random()*9)};
        }
    }
    para.matrix = _matrix;
    
    return para;
}

(function( $ ) {
    //Tro choi Number
	$.fn.game_number_draw = function ( para ) {
        if (para == null) para = {};
        if (para.col == null) para.col = 0;
        if (para.row == null) para.row = 0;
        if (para.matrix == null) {
            para.message = "Khong co data";
            try {para.error(para);} catch(e){} return;
        }
        para.obj_result = $(this);
        
        for (r = 0; r < para.row; r++){
            var row_html = "<div class='mothang'>";
            for (c = 0; c < para.col; c++){
                _c = c; _c++;
                var col_html = "<div class='cot cot_1 "+((_c%2==0)?"cot_2":"")+" "+((_c%3==0)?"cot_3":"")+" "+((_c%4==0)?"cot_4":"")+" "+((_c%5==0)?"cot_5":"")+" "+((_c%6==0)?"cot_6":"")+" "+((_c%7==0)?"cot_7":"")+" "+((_c%8==0)?"cot_8":"")+" "+((_c%9==0)?"cot_9":"")+" '>"+para.matrix[r][c].title+"</div>";
                row_html = row_html + col_html;
            }
            _tmp = r; _tmp++;
            row_html = row_html + "<div class='cot sohang'>row"+_tmp+"</div></div>";
            para.obj_result.append(row_html);
        }
        
        try {para.finished(para);} catch(e){}
        
	};
    //Giai tro choi Number
	$.fn.game_number_draw_answer = function ( para ) {
        if (para == null) para = {};
        if (para.col == null) para.col = 0;
        if (para.row == null) para.row = 0;
        if (para.matrix == null) {
            para.message = "Khong co data";
            try {para.error(para);} catch(e){} return;
        }
        para.obj_result = $(this);
        para.matrix_answer = [];
        
        idval = 0;
        for (r = 0; r < para.row; r++){
            para.matrix_answer[r] = [];
            var row_html = "<div class='mothang'>";
            for (c = 0; c < para.col; c++){
                _c = c; _c++;
                idval++;
                var col_html = "<div class='traloi cot cot_1 "+((_c%2==0)?"cot_2":"")+" "+((_c%3==0)?"cot_3":"")+" "+((_c%4==0)?"cot_4":"")+" "+((_c%5==0)?"cot_5":"")+" "+((_c%6==0)?"cot_6":"")+" "+((_c%7==0)?"cot_7":"")+" "+((_c%8==0)?"cot_8":"")+" "+((_c%9==0)?"cot_9":"")+" '><input col='"+c+"' row='"+r+"' id='input_"+idval+"' idval="+idval+" maxlength=1 min=0 max=9></div>";
                row_html = row_html + col_html;
                
                para.matrix_answer[r][c] = {title:-1, obj: null, id: "input_"+idval};
            }
            _tmp = r; _tmp++;
            row_html = row_html + "<div class='cot sohang'>row"+_tmp+"</div></div>";
            para.obj_result.append(row_html);
            
            for (c = 0; c < para.col; c++){
                para.matrix_answer[r][c].obj = $("#" + para.matrix_answer[r][c].id);
            }
        }
        
        //$('.traloi input[idval=1]').focus();
        $('.traloi input').unbind('keyup');
        $('.traloi input').bind('keyup', function(e) {
            _keycode_backspace = 8;
            _keycode_enter = 13;
            _keycode_escape = 27;
            _keycode_left_arrow	= 37;
            _keycode_up_arrow = 38;
            _keycode_right_arrow = 39;
            _keycode_down_arrow	= 40;
            _keycode_delete = 46;
            
            $(this).val( e.key );
            idval = parseInt($(this).attr("idval"));
            
            giatrithiet = false;
            switch (e.keyCode) {
                case _keycode_backspace:
                    $(this).attr("old", "");idval--;
                    break;
                case _keycode_enter:
                    idval++;
                    break;
                case _keycode_escape:
                    $(this).attr("old", "");
                    break;
                case _keycode_left_arrow:
                    idval--;
                    break;
                case _keycode_up_arrow:
                    idval -= para.col;
                    break;
                case _keycode_right_arrow:
                    idval++;
                    break;
                case _keycode_down_arrow:
                    idval += para.col;
                    break;
                case _keycode_delete:
                    $(this).attr("old", "");
                    idval++;
                    break;
                default:
                    giatrithiet = true;
            }
            giatri = parseInt(e.key);
            if (!isNaN(giatri)) {
                idval++;
                $(this).attr("old", giatri);
            } else {
                  $(this).val( $(this).attr("old") );
            } 
            col = $(this).attr("col");
            row = $(this).attr("row");
            para.matrix_answer[row][col].title = $(this).val();
            
            $('.traloi input[idval='+idval+']').focus();
            
        });
        
        try {para.finished(para);} catch(e){}
	};
    //Giai tro choi Number
	$.fn.game_number_draw_checkmark = function ( para ) {
        if (para == null) para = {};
        if (para.col == null) para.col = 0;
        if (para.row == null) para.row = 0;
        if (para.matrix == null) {
            para.message = "Khong co data";
            try {para.error(para);} catch(e){} return;
        }
        para.obj_result = $(this);
        para.diem = 0;
        
        for (r = 0; r < para.row; r++){
            sodiemdung = 0;
            for (c = 0; c < para.col; c++){
                obj_col = para.matrix_answer[r][c].obj;
                giatri = para.matrix_answer[r][c].title;
                if (giatri != para.matrix[r][c].title){
                    obj_col.removeClass("dung");
                    obj_col.addClass("sai");
                } else 
                {
                    sodiemdung++;
                    obj_col.removeClass("sai");
                    obj_col.addClass("dung");
                } 
            }
            if (sodiemdung == para.col) para.diem += sodiemdung;
            else {
                if (r == para.row - 1) para.diem += sodiemdung;
            }
        }
        
        try {para.finished(para);} catch(e){}
	};
})(jQuery);	