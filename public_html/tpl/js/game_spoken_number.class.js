/**{game:number, } **/
class Game_spoken_number extends Game_numbers{
    constructor(para){
        if (para == null) para = {};
        if (para.type == null) para.type = 0;
        para.game_mode = parseInt(para.type);
        para.game_type = get_game_type("game_spoken_number");
        para.audio_warning = false;
        
        super(para);
    }
    
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
        
        try {para.finished(para);} catch(e){} return;
    }
    
    exam_start(){
        super.exam_start();
        
        var obj_this = this;
        setTimeout(function(){
            try{Play_audio.audio_ready_go.stop();}catch(e){}
            try{Play_audio.audio_prepare.stop();}catch(e){}
            
            var counter = 0;
            // window.alert(JSON.stringify(obj_this.para));
            //obj_this._playing
            _interval_playing_audio = setInterval(function(){
                var row = Math.floor(counter/obj_this.para.col);
                var col = counter%obj_this.para.col;
                var n = obj_this.para.matrix[row][col].title;
                // console.log(counter + ", ["+row+","+col+"] = " + n);
                Play_audio._number(n);
                counter++;
                if (counter >= obj_this.para.count) {
                    console.log("xong game_spoken_number");
                    clearInterval(_interval_playing_audio);
                    
                }
            }, obj_this.para.gameScenario.gameInfo.speed*1000);
            //_interval_playing_audio = obj_this._playing;
        }, 3000)
    }
    question_answer_start(){
        super.question_answer_start();
        clearInterval(_interval_playing_audio);
    }
}