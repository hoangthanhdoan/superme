class Play_audio{
    static preload(){
        this.audio_prepare = new Audio('tpl/audios/one_min_mental_prep.wav');
        this.audio_ready_go = new Audio('tpl/audios/ready_go.wav');
        this.audio_number = [];
        for (var i = 0; i < 10; i++) this.audio_number[i] = new Audio('tpl/audios/voice_'+i+'.wav');
        this.audio_minute = [];
        this.audio_minute[1] = new Audio('tpl/audios/one_minute.wav');
        this.audio_minute[5] = new Audio('tpl/audios/five_minutes.wav');
        this.audio_minute[15] = new Audio('tpl/audios/fifteen_minutes.wav');
        this.audio_minute[30] = new Audio('tpl/audios/thirdty_minutes.wav');
    }
    
    static play(audio_file){
        if (audio_file == null || audio_file == "") return;
        
        var audio = new Audio(audio_file); 
        audio.play();
    }
    static obj_play(obj){
        var need_play = function(solan_max){
            try{
                obj.play();
            }catch(e){
                if (solan_max > 0) setTimeout(function(){
                    solan_max--;
                    need_play(solan_max);
                }, 1000);
            }
        }
        need_play(5);
    }
    
    static _prepare(){
        this.obj_play(this.audio_prepare);
    }
    static _prepare_stop(){
        this.audio_prepare.pause();
        this.audio_prepare.currentTime = 0;
    }
    static _ready_go(){
        this.obj_play(this.audio_ready_go);
    }
    static _ready_go_stop(){
        this.audio_ready_go.pause();
        this.audio_ready_go.currentTime = 0;
    }
    static _number(n){
        if (isNaN(n)) return;
        this.obj_play(this.audio_number[n]);
    }
    static _minute(n){
        switch (n){
            case 1:
            case 5:
            case 15:
            case 30:
                this.obj_play(this.audio_minute[n]);
                break;
        }
    }
}

Play_audio.preload();
$(document).ready(function(){
    Play_audio.preload();
    /*
    $("#menu").append("<div class='play_audio'>play audio</div>");
    $(".play_audio").click(function(){
        Play_audio._prepare();
    })
    */
})