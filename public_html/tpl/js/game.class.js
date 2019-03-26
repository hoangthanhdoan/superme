
var Key = {
    _keycode_backspace: 8,
    _keycode_enter: 13,
    _keycode_escape: 27,
    _keycode_left_arrow: 37,
    _keycode_up_arrow: 38,
    _keycode_right_arrow: 39,
    _keycode_down_arrow: 40,
    _keycode_delete: 46
}

class Game_controller{
    constructor(para) {
        if (para == null) var para = {};
        
        if (para.name == null) para.name = "";
        if (para.col == null) para.col = 0;
        if (para.row == null) para.row = 0;
        if (para.matrix == null) para.matrix = [];
        para.matrix_answer = [];
        if (para.obj_info_scr == null) para.obj_info_scr = $("#game_info");
        if (para.obj_exam_scr == null) para.obj_exam_scr = $("#game_exam");
        if (para.obj_question_scr == null) para.obj_question_scr = $("#game_question");
        if (para.obj_mark_scr == null) para.obj_mark_scr = $("#game_mark");
        
        if (para.type == null) para.type = 0;
        if (para.time_info_before_play == null) para.time_info_before_play = 60;
        if (para.time_exam_remember == null) para.time_exam_remember = 15*60;
        if (para.time_question_answer == null) para.time_question_answer = 30*60;
        if (para.quantity == null) para.quantity = 15;
        
        if (para.audio_warning == null) para.audio_warning = true;
        
        
        this.para = para;
        this.name = para.name;
        this.col = para.col;
        this.row = para.col;
        this.matrix = para.matrix;
        this.matrix_answer = para.matrix_answer;
        
        this.obj_info_scr = para.obj_info_scr;
        this.obj_exam_scr = para.obj_exam_scr;
        this.obj_question_scr = para.obj_question_scr;
        this.obj_mark_scr = para.obj_mark_scr;
        
        console.log(para.name);
        
    }
    get_matrix(){ return this.matrix; }
    set_matrix(matrix){ this.matrix = matrix; }
    
    //Sinh du lieu
    generate(params){
        if (params == null) var params = {}; var para = params;
        for (var k in this.para){
            if (params[k] == null)  para[k] = this.para[k]; else para[k] = params[k];
        }
        var obj_this = this;
        /* BEGIN: tuong tac voi local server */
        var local_server = new Local_Server();
        var dulieu_sinhtu_localserver = local_server.generate(
            {game_type: obj_this.para.game_type, game_mode: obj_this.para.game_mode},
            function(isSuccess, errorCode, errorMessage, resultPara){
                console.log("Ket thuc roi nhe");
                if (!isSuccess) {
                    console.log("co loi: " + errorMessage);
                    return;//
                }
                
                var gameInfo = resultPara.gameInfo;
                var examQuestions = resultPara.examQuestions;
                var questions = resultPara.questions;
                var column = examQuestions.column;
                var row = examQuestions.row;
                var count = examQuestions.count;

                var _matrix = [];
                for (var r = 0; r < row; r++){
                    _matrix[r] = [];
                    for (var c = 0; c < column; c++){
                        //Doan can them du lieu duoc sinh ra tu local_server
                        var index = r * column + c;
                        if (index<count){
                            _matrix[r][c] = examQuestions.items[index];
                        }else{
                            _matrix[r][c] = {"title":-1};
                        }
                        
                    }
                }
                var _matrixQuestion = [];
                for (var r = 0; r < row; r++){
                    _matrixQuestion[r] = [];
                    for (var c = 0; c < column; c++){
                        //Doan can them du lieu duoc sinh ra tu local_server
                        var index = r * column + c;
                        if (index<count){
                            //window.alert(JSON.stringify(questions.items[r * column + c]));
                            //console.log("get Index: "+index);
                            _matrixQuestion[r][c] = questions.items[index].question;
                        }else{
                            _matrixQuestion[r][c] = {};
                        }
                        
                    }
                }
                
                obj_this.para.col = column;
                obj_this.para.row = row;
                obj_this.para.time_info_before_play = gameInfo.prepareTime;
                obj_this.para.time_exam_remember = gameInfo.readExamTime;
                obj_this.para.time_question_answer = gameInfo.answerTime;
                obj_this.para.count =  questions.count;

                
                obj_this.col = column;
                obj_this.row = row;
                obj_this.para.matrix = _matrix;
                obj_this.matrix = obj_this.para.matrix;
                obj_this.para.matrixQuestion = _matrixQuestion;
                obj_this.matrixQuestion = obj_this.para.matrixQuestion;
                obj_this.para.matrix_question = obj_this.para.matrixQuestion;
                obj_this.matrix_question = obj_this.para.matrixQuestion;

                obj_this.para.gameScenario = resultPara;
                obj_this.gameScenario = obj_this.para.gameCasino;

                try {para.finished(para);} catch(e){}
            }
        );
        
        /* END: tuong tac voi local server */
    }
    generate_bk(params){
        if (params == null) var params = {}; var para = params;
        for (var k in this.para){
            if (params[k] == null)  para[k] = this.para[k]; else para[k] = params[k];
        }
        
        var _matrix = [];
        for (var r = 0; r < para.row; r++){
            _matrix[r] = [];
            for (var c = 0; c < para.col; c++){
                var _random = Math.round(Math.random()*9);
                _matrix[r][c] = {
                    title: _random,
                    subtitle: Math.round(Math.random()*9),
                    image: _random
                };
            }
        }
        this.col = para.col;
        this.row = para.row;
        this.para.matrix = _matrix;
        this.para.matrix_question = _matrix;
        this.matrix = this.para.matrix;
        
        try {para.finished(para);} catch(e){}
    }
    //Man hinh khoi tao
    draw_info( params ) {
        if (params == null) var params = {}; var para = params;
        for (var k in this.para){
            if (params[k] == null)  para[k] = this.para[k]; else para[k] = params[k];
        }
        this.obj_info_scr.find("#content .thong_bao .sophut").html( Math.floor(this.para.time_exam_remember/60) );
        
        var obj_result_content = this.obj_info_scr.find("#content");
        if (obj_result_content == null) {
            para.message = "Khong co obj_result#content";
            try {para.error(para);} catch(e){} return;
        }
        
        var obj_this = this;
        function boqua(obj){
            obj_this.exam_start();
        }
        
        this.obj_info_scr.find(".action.boqua").unbind("click");
        this.obj_info_scr.find(".action.boqua").click(function(){setTimeout(function(){boqua();},2000)})
        this.obj_info_scr.show();
        
        try {para.finished(para);} catch(e){}
    }    
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
            var row_html = "<div class='mothang mothang_"+(r+1)+" row'>";
            for (var c = 0; c < para.col; c++){
                //var _c = c; _c++;
                //var col_html = "<div class='cot cot_1 "+((_c%2==0)?"cot_2":"")+" "+((_c%3==0)?"cot_3":"")+" "+((_c%4==0)?"cot_4":"")+" "+((_c%5==0)?"cot_5":"")+" "+((_c%6==0)?"cot_6":"")+" "+((_c%7==0)?"cot_7":"")+" "+((_c%8==0)?"cot_8":"")+" "+((_c%9==0)?"cot_9":"")+" '>"+para.matrix[r][c].title+"</div>";
                var col_html = this.draw_exam_an_element(r, c);
                
                row_html = row_html + col_html;
            }
            var _tmp = r; _tmp++;
            row_html = row_html + "<div class='cot sohang col-sm'>row"+_tmp+"</div></div>";
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
        para.matrixQuestion = this.matrixQuestion;
        
        if (para.matrixQuestion == null) {
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
            var row_html = "<div class='mothang mothang_"+(r+1)+" row'>";
            for (var c = 0; c < para.col; c++){
                var index = para.col*r+c;
                if (index<para.count){
                    var col_html = this.draw_question_answer_an_element(r, c);
                    row_html = row_html + col_html;
                    
                    para.matrix_answer[r][c] = {title:-1, obj: null, id: "input_"+index, id2: "input2_"+index};
                }
            }
            var _tmp = r; _tmp++;
            row_html = row_html + "<div class='cot sohang col-sm'>row"+_tmp+"</div></div>";
            
            obj_result_content.append(row_html);
            
            for (c = 0; c < para.col; c++){
                var index = para.col*r+c;
                if (index<para.count){
                    para.matrix_answer[r][c].obj = $("#" + para.matrix_answer[r][c].id);
                    para.matrix_answer[r][c].obj2 = $("#" + para.matrix_answer[r][c].id2);
                }
            }
        }
        
        var obj_this = this;
        //$('.traloi input[idval=1]').focus();
        $('.traloi input').unbind('keyup');
        $('.traloi input').bind('keyup', function(e) {
            obj_this.handle_answer_input_keyup($(this), e);
        });
        
        this.para.matrix_answer = para.matrix_answer;
        this.matrix_answer = this.para.matrix_answer;
        
        try {para.finished(para);} catch(e){}
	};
    handle_answer_input_keyup(obj_result, e){
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
        this.para.matrix_answer[row][col].title = obj_result.val();
        
        $('.traloi input[idval='+idval+']').focus();
    }
    //Giai tro choi Number
    draw_checkmark( params ) {
        if (params == null) var params = {}; var para = params;
        for (var k in this.para){
            if (params[k] == null)  para[k] = this.para[k]; 
        }
        
        para.col = this.col;
        para.row = this.row;
        if (para.matrix == null) {
            para.message = "Khong co data";
            try {para.error(para);} catch(e){} return;
        }

        //map sang du lieu chuan

        var gameScenario = para.gameScenario;
        var gameInfo = gameScenario.gameInfo;
        var examQuestions = gameScenario.examQuestions;
        var questions = gameScenario.questions;
        var column = questions.column;
        var row = questions.row;
        var count = questions.count;

        for (var r = 0; r < row; r++){
            for (var c = 0; c < column; c++){
                var index = r * column + c;
                if (index<count){
                    var questionItemDict = questions.items[index];
                    //window.alert(JSON.stringify(questionItemDict));
                    if (para.matrix_answer[r][c].hasOwnProperty("title")) questionItemDict.answer.value1 = para.matrix_answer[r][c].title+"";
                    if (para.matrix_answer[r][c].hasOwnProperty("subtitle")) questionItemDict.answer.value2 = para.matrix_answer[r][c].subtitle+"";
                }
            }
        }



        //tinh diem 
        var local_server = new Local_Server();
        local_server.check_mark(gameScenario,
            function(isSuccess, errorCode, errorMessage, resultPara){
                if (!isSuccess) return;//

                var questions = resultPara.questions;
                var column = questions.column;
                var row = questions.row;
                var count = questions.count;

                for (var r = 0; r < row; r++){
                    for (var c = 0; c < column; c++){
                        var index = r * column + c;
                        if (index<count){
                            var questionItemDict = questions.items[index];
                            var obj_col = para.matrix_answer[r][c].obj;
                            var obj_col2 = para.matrix_answer[r][c].obj2;
                            
                            

                            if (obj_col){
                                var value = para.matrix_question[r][c].title;
                                obj_col.attr("title", value);
                                obj_col.attr("placeholder", value);

                                if (questionItemDict.correct){
                                    obj_col.removeClass("sai");
                                    obj_col.addClass("dung");
                                    
                                    console.log("["+r+","+c+"] dung");
                                }else{
                                    obj_col.removeClass("dung");
                                    obj_col.addClass("sai");
                                    
                                    console.log("["+r+","+c+"] sai");
                                }
                            }
                            if (obj_col2){
                                var value = para.matrix_question[r][c].subtitle;
                                obj_col2.attr("title", value);
                                obj_col2.attr("placeholder", value);

                                if (questionItemDict.correct){
                                    obj_col2.removeClass("sai");
                                    obj_col2.addClass("dung");
                                    
                                    console.log("["+r+","+c+"] dung");
                                }else{
                                    obj_col2.removeClass("dung");
                                    obj_col2.addClass("sai");
                                    
                                    console.log("["+r+","+c+"] sai");
                                }
                            }
                        }
                        
                    }
                }

                para.diem = questions.score;
                try {para.finished(para);} catch(e){}

            });
    };
	draw_checkmark_bk( params ) {
        if (params == null) var params = {}; var para = params;
        for (var k in this.para){
            if (params[k] == null)  para[k] = this.para[k]; 
        }
        
        para.col = this.col;
        para.row = this.row;
        if (para.matrix == null) {
            para.message = "Khong co data";
            try {para.error(para);} catch(e){} return;
        }
        para.diem = 0;
        
        for (var r = 0; r < para.row; r++){
            var sodiemdung = 0;
            for (var c = 0; c < para.col; c++){
                var obj_col = para.matrix_answer[r][c].obj;
                var giatri = para.matrix_answer[r][c].title;
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
    
    /** Phan duoi day: su kien ve moi phan tu **/
    draw_exam_an_element(row, col){return "";}
    draw_question_answer_an_element(row, col){return "";}
    
    /** Phan duoi day ghi nhan su kien bat dau qua man hinh moi **/
    info_start(){
        var obj_this = this;
        obj_this.obj_info_scr.show();
        obj_this.obj_info_scr.find(".toolbar .boqua").hide();
        
        //1. thong bao xong, chuyen sang 1 phut
        setTimeout(function(){
            //2. Hien thi 1 phut
            obj_this.obj_info_scr.find("#content .duocchon").removeClass("duocchon");
            obj_this.obj_info_scr.find("#content .mot_phut").addClass("duocchon");
            obj_this.obj_info_scr.find(".toolbar .boqua").show();
            
            setTimeout(function(){Play_audio._prepare();}, 1000);
            
            clearInterval(obj_this.interval);
            obj_this.interval = obj_this.obj_info_scr.find(".display.clock").countdown({
                from: obj_this.para.time_info_before_play, 
                finished: function(){
                    obj_this.obj_info_scr.hide();
                    obj_this.exam_start();
                }
            });
            _interval_countdown = obj_this.interval;
        }, 1000)
        
        
    }
    exam_start(){
        var obj_this = this;
        clearInterval(obj_this.interval);
        
        //3. San sang
        try{Play_audio._prepare_stop();}catch(e){}
        Play_audio._ready_go();
        obj_this.obj_info_scr.find("#content .duocchon").removeClass("duocchon");
        obj_this.obj_info_scr.find("#content .san_sang").addClass("duocchon");
        obj_this.obj_info_scr.find(".toolbar .boqua").hide();
        
        setTimeout(function(){
            //4. Bat dau
            obj_this.obj_info_scr.find("#content .duocchon").removeClass("duocchon");
            obj_this.obj_info_scr.find("#content .bat_dau").addClass("duocchon");
            obj_this.obj_info_scr.find(".toolbar .boqua").hide();
            
            setTimeout(function(){
                //
                obj_this.obj_info_scr.hide();
                obj_this.obj_exam_scr.show();
                clearInterval(obj_this.interval);
                obj_this.interval = obj_this.obj_exam_scr.find(".display.clock").countdown({
                    from: obj_this.para.time_exam_remember,
                    speaking_minute: obj_this.para.audio_warning, 
                    finished: function(){
                        obj_this.obj_exam_scr.hide();
                        obj_this.question_answer_start();
                        
                        try{Play_audio._ready_go_stop();}catch(e){}
                    }
                });
                _interval_countdown = obj_this.interval;
            }, 2000)
            
        }, 1000);
    }
    question_answer_start (){
        try{Play_audio.audio_ready_go.stop();}catch(e){}
        
        var obj_this = this;
        obj_this.obj_exam_scr.hide();
        obj_this.obj_question_scr.show();
        clearInterval(obj_this.interval);
        obj_this.interval = obj_this.obj_question_scr.find(".display.clock").countdown({
            from: obj_this.para.time_question_answer, 
            speaking_minute: true,
            finished: function(){
                obj_this.checkmark_start();
            }
        });
        _interval_countdown = obj_this.interval;
        $('input[idval=0]').focus();
    }
    checkmark_start (){
        var obj_this = this;
        obj_this.obj_question_scr.find(".toolbar.top").html( obj_this.obj_mark_scr.find(".toolbar.top").html() );
        obj_this.obj_question_scr.find(".toolbar.bottom").html( obj_this.obj_mark_scr.find(".toolbar.bottom").html() );
        obj_this.draw_checkmark({finished:function(p){
            para.obj_question_scr.find(".action.ketthuc").unbind("click");
            para.obj_question_scr.find(".action.ketthuc").click(function(){
                var change_location_this = $(this);
                var location_dst = window.location.origin + "/";
                $.ajax({
            		type        : "GET", // define the type of HTTP verb we want to use (POST for our form)
            		url         : location_dst + "?embed=true", // the url where we want to POST
            		dataType    : 'html', // what type of data do we expect back from the server
            		encode      : true
            	})
            	.success(function(result) {
            	    $(".menu-item.active").removeClass("active");
            	    change_location_this.addClass("active");
            	    $("#wrapper").html(result);
                    window.history.replaceState("state", "url", location_dst);
                })
                .error(function(result) {
                    window.alert("Please check your Internet connection!");
            	});
            })
            para.obj_question_scr.find(".display.mark").find("span").text(p.diem);
        }});
    }
    
    
    start (){
        var para = {};
        var obj_this = this;
        
        
        setTimeout(function(){
            para.finished = function(){
                console.log("xong generate");
                obj_this.draw_info({finished: function(){
                    console.log("xong drawInfo");
                    obj_this.info_start();
                }});
                para.finished = function(){console.log("ve xong exam");
                    obj_this.para.obj_exam_scr.find(".action.boqua").unbind("click");
                    obj_this.para.obj_exam_scr.find(".action.boqua").click(function(){
                        console.log("la sao====");
                        if (confirm(language.thong_bao_bo_qua_sang_tra_loi)) setTimeout(function(){obj_this.question_answer_start();}, 100);
                    })
                    
                    para.finished = function(p){console.log("ve xong answer");
                        para.obj_question_scr.find(".action.boqua").unbind("click");
                        para.obj_question_scr.find(".action.boqua").click(function(){
                            if (confirm(language.thong_bao_bo_qua_de_ket_thuc)) setTimeout(function(){obj_this.checkmark_start();}, 50);
                        })
                        para.finished = null;
                    }
                    setTimeout(function(){obj_this.draw_question_answer(para);}, 50);
                }
                setTimeout(function(){obj_this.draw_exam(para);}, 50);  
                  
            }
            setTimeout(function(){obj_this.generate(para);}, 50);
            
            //try {para.finished(para);} catch(e){}
        }, 50);
                
    }
}
//Count down
(function( $ ) {
    $.fn.countdown = function(para){
        if (para == null) var para = {};
        if (para.from == null) para.from = 0;
        if (para.speaking_minute == null) para.speaking_minute = false;
        
        var obj_result = this;
        try {para.started(para);} catch(e){}
        var interval = setInterval(function(){
            if (para.from >= 0) {
                var totalSeconds = para.from;
                var hour = Math.floor(totalSeconds / 3600);
                totalSeconds %= 3600;
                var minute = Math.floor(totalSeconds / 60);
                var second = totalSeconds % 60;
                
                obj_result.html(hour + ":" + minute + ":" + second);
                para.from--;
                if (para.speaking_minute && second == 1) { 
                    //window.alert("countdown van con hoat dong");
                    setTimeout(function(){Play_audio._minute(minute);}, 1000);
                }
            }else {
                clearInterval(interval);
                try {para.finished(para);} catch(e){}
            }
        }, 1000);
        
        return interval;
    }
    
})(jQuery);	
function readTextFile(file)
{
    var allText = "";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}
