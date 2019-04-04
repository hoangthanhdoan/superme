function draw_question(para){
    obj_result_content = para.obj_result;
    
    var idval = 0; para.matrix = [];
    for (var r = 0; r < para.row; r++){
        para.matrix[r] = [];
        var row_html = "<div class='mothang'>";
        for (var c = 0; c < para.col; c++){
            var col_html = draw_question_answer_an_element(para, r, c);
            row_html = row_html + col_html;
        }
        var _tmp = r; _tmp++;
        row_html = row_html + "<div class='cot sohang'>row"+_tmp+"</div></div>";
        obj_result_content.append(row_html);
        
        for (c = 0; c < para.col; c++){
            //para.matrix[r][c].obj = $("#" + para.matrix[r][c].id);
        }
    }
    
    $('.traloi input[idval=0]').focus();
    $('.traloi input').unbind('keyup');
    $('.traloi input').bind('keyup', function(e) {
        handle_answer_input_keyup($(this), e, para);
    });
    
    try {para.finished(para);} catch(e){}
}

function draw_question_answer_an_element(para, row, col){
    var c = col; var r = row; var _c = c; _c++;
    var idval = row*para.col + col;
    var col_html = "<div class='traloi cot cot_1 "+((_c%2==0)?"cot_2":"")+" "+((_c%3==0)?"cot_3":"")+" "+((_c%4==0)?"cot_4":"")+" "+((_c%5==0)?"cot_5":"")+" "+((_c%6==0)?"cot_6":"")+" "+((_c%7==0)?"cot_7":"")+" "+((_c%8==0)?"cot_8":"")+" "+((_c%9==0)?"cot_9":"")+" '><input col='"+c+"' row='"+r+"' id='input_"+idval+"' idval="+idval+" maxlength=1 min=0 max=9></div>";
    
    return col_html;
}
    
    
function handle_answer_input_keyup(obj_result, e, para){
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
    if (!isNaN(giatri)) {
        idval++;
        obj_result.attr("old", giatri);
    } else {
        obj_result.val( obj_result.attr("old") );
    } 
    
    var col = obj_result.attr("col");
    var row = obj_result.attr("row");
    
    $('.traloi input[idval='+idval+']').focus();
    
    para.matrix[row][col] = obj_result.val();
}

$("document").ready(function(){
    draw_question({col: 5, row: 10, obj_result: $("#content"),
        finished(para){
            $(".action.ketthuc").unbind("click");
            $(".action.ketthuc").click(function(){
                setTimeout(function(){
                    var counter = 0;
                    para._playing = setInterval(function(){
                        var row = Math.floor(counter/para.col);
                        var col = counter%para.col;
                        var n = para.matrix[row][col];
                        $('.traloi input[idval='+counter+']').focus();
                        console.log(counter + ", ["+row+","+col+"] = " + n);
                        if (counter > para.col * para.row || n == undefined) {
                            clearInterval(para._playing);
                            return;
                        }
                        Play_audio._number(n);
                        counter++;
                    }, 1500);
                }, 3000)
                
            })
        }
     });
})