/**{game:number, } **/
class Game_random_card extends Game_images{
    constructor(para){
        if (para == null) para = {};
        if (para.type == null) para.type = 0;
        para.game_mode = parseInt(para.type);
        para.game_type = get_game_type("game_random_card");
        
        super(para);
        
        para.tra_loi = {
            sobobai: 100,
            vitri_bobai: 0,
            bobai: [
                {
                    traloi: [],
                    conlai: [],
                }
            ]
        }
        para.bobai_imgs_answer = [];
        para.bobai_imgs = [];
        para.bobai_imgs[52] = "tpl/images/poker_0@3x.png";
        for (var i = 1; i <= 13; i++) {
            para.bobai_imgs[4*(i-1)] = "tpl/images/poker_" + i + "a@3x.png";
            para.bobai_imgs[4*(i-1)+1] = "tpl/images/poker_" + i + "b@3x.png";
            para.bobai_imgs[4*(i-1)+2] = "tpl/images/poker_" + i + "c@3x.png";
            para.bobai_imgs[4*(i-1)+3] = "tpl/images/poker_" + i + "d@3x.png";

            para.bobai_imgs_answer[4*(i-1)] = i + "a";
            para.bobai_imgs_answer[4*(i-1)+1] = i + "b";
            para.bobai_imgs_answer[4*(i-1)+2] = i + "c";
            para.bobai_imgs_answer[4*(i-1)+3] = i + "d";

        }

    }
    

    generate(params){
        super.generate(params);
        
        para.tra_loi.sobobai = para.row;
    }
    
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
        
        var idval = 0;
        var r = 0;
        {
            var row_html = "<div class='mothang mothang_"+(r+1)+" row'>";
            for (var c = 0; c < para.col; c++){
                var index = para.col*r+c;
                if (index<para.count){
                    var col_html = this.draw_question_answer_an_element(r, c);
                    row_html = row_html + col_html;
                    
                    //para.matrix_answer[r][c] = {title:-1, obj: null, id: "input_"+index};
                }
            }
            var _tmp = r; _tmp++;
            row_html = row_html + "<div class='cot sohang col-sm'>"+language.bo_bai+" "+_tmp+"</div></div>";
            
            obj_result_content.append(row_html);
        }
        for (var r = 0; r < para.row; r++){
            para.matrix_answer[r] = [];
            for (var c = 0; c < para.col; c++){
                para.matrix_answer[r][c] = {title: "52"}
            }
        }

        this.para.matrix_answer = para.matrix_answer;
        this.matrix_answer = this.para.matrix_answer;

        //console.log(this.matrix_answer);
        
        var obj_this = this;
        this.khoitao();
        this.hienthi_khoitao();
        
        
        try {para.finished(para);} catch(e){}
    };

    khoitao(){
        var obj = this.para.tra_loi;
        for (var i = 0; i < obj.sobobai; i++){
            obj.bobai[i] = {};
            obj.bobai[i].traloi = [];
            obj.bobai[i].conlai = [];
            obj.bobai[i].vitri = 0;
            for (var j = 0; j < 52; j++){
                obj.bobai[i].traloi[j] = -1;
                obj.bobai[i].conlai[j] = 1;
            }
        }
    }

    hienthi_hientrang(){
        var obj = this.para.tra_loi;
        var bobai = para.tra_loi.vitri_bobai;
        for (var i = 0; i <= 51; i++) {
            var idval = bobai*52+i;
            idval = i;
            var _id = obj.bobai[bobai].traloi[i];
            if (_id >= 0) {
                this.obj_question_scr.find("#content #cot_"+idval+" img").attr("src", para.bobai_imgs[_id]);
                switch (_id % 4){
                    case 0:
                        break;
                }
                //console.log(bobai + "," + i + " = " + para.bobai_imgs_answer[_id]);
                para.matrix_answer[bobai][i] = {title: para.bobai_imgs_answer[_id] };
            } else {
                this.obj_question_scr.find("#content #cot_"+idval+" img").attr("src", para.bobai_imgs[52]);
                
                para.matrix_answer[bobai][i] = {title:"0"}
            }
        }

        $("#content .motcot.duocchon").removeClass("duocchon");
        $("#content #cot_"+obj.bobai[bobai].vitri).addClass("duocchon");

        //Tra loi
        for (var i = 0; i <= 51; i++) {
            var idval = i;
            if (obj.bobai[bobai].conlai[idval] == 1){
                this.obj_question_scr.find("#bobai #traloi_cot_"+idval+" img").attr("src", para.bobai_imgs[idval]);
            } else {
                this.obj_question_scr.find("#bobai #traloi_cot_"+idval+" img").attr("src", para.bobai_imgs[52]);
            }
        }

        $("#bobai .cot.duocchon").removeClass("duocchon");
        $(this).addClass("duocchon");
        this.para.tra_loi = obj;
    }
    hienthi_khoitao(){
        var obj = this.para.tra_loi;
        var select_html = "";
        var h = 0;
        var obj_this = this;
        /*
        var mot_hang = "";
        for (var i = 0; i <= 51; i++) {
            var idval = h*52+i;
            var col_html = "<div class='cot' id='cot_"+idval+"' value='"+i+"' ><div class='content'><div class='image'><img src='"+para.bobai_imgs[52]+"'/></div></div></div>";
            mot_hang = mot_hang + col_html;
        }
        this.obj_question_scr.find("#content").append("<div style='' class='mothang mothang_"+h+"'>"+mot_hang+"</div>");
        */
        for (var h = 0; h < obj.sobobai; h++){
            select_html = select_html + "<option value='"+h+"'>"+language.bo_bai+" "+(h+1)+"</option>";
        }
        //Lua chon bo bai
        this.obj_question_scr.find(".toolbar.top .chia_nhom").remove();
        this.obj_question_scr.find(".cot.sohang").html("<select class='action luachon_bobai'>"+select_html+"</select>");
        this.obj_question_scr.find(".toolbar.top").append("<div style='display:none; float:right; margin-right: 20px' class='xuly_mot_conbai row'><div class='action button insert_left'>"+language.chen_trai+"</div><div class='action button remove'>"+language.xoa+"</div><div class='action button insert_right'>"+language.chen_phai+"</div></div>");

        //Bo bai tra loi
        var bobai_traloi = "";
        for (var i = 0; i <= 51; i++) {
            var idval = i;
            var col_html = "<div class='cot' id='traloi_cot_"+idval+"' value="+idval+"><div class='content'><div class='image'><img src='"+para.bobai_imgs[i]+"'/></div></div></div>";
            bobai_traloi = bobai_traloi + col_html;
        }
        this.obj_question_scr.find("#content").after('<div id="bobai" class="row">'+bobai_traloi+'</div>');

        $(".luachon_bobai").change(function(){
            obj_this.para.tra_loi.vitri_bobai = parseInt($(this).val());
            //obj_this.obj_question_scr.find(".cot.sohang").html(language.bo_bai + " " + (obj_this.para.tra_loi.vitri_bobai+1));
            obj_this.hienthi_hientrang();
        })
        this.obj_question_scr.find("#bobai .cot").click(function(){
            $(".xuly_mot_conbai").hide();
            //$("#bobai .cot.duocchon").removeClass("duocchon");
            //$(this).addClass("duocchon");
            var obj = obj_this.para.tra_loi;
            var bb = obj.vitri_bobai;
            var _id = parseInt($(this).attr("value"));
            if (obj.bobai[bb].conlai[_id] == 1){
                if (obj.bobai[bb].traloi[obj.bobai[bb].vitri] >= 0) {
                    obj.bobai[bb].conlai[obj.bobai[bb].traloi[obj.bobai[bb].vitri]] = 1;
                }

                obj.bobai[bb].traloi[obj.bobai[bb].vitri] = _id;
                obj.bobai[bb].conlai[_id] = 0;
            
                obj_this.para.tra_loi = obj;
                obj_this.hienthi_hientrang();
                for (var i = obj.bobai[bb].vitri; i < 51; i++){
                    if (obj.bobai[bb].traloi[i] >= 0) obj.bobai[bb].vitri = i+1;
                }
            }
            obj_this.para.tra_loi = obj;
            obj_this.hienthi_hientrang();
        })

        this.obj_question_scr.find("#content .motcot").click(function(){
            //$("#content .motcot.duocchon").removeClass("duocchon");
            //$(this).addClass("duocchon");
            var _idval = parseInt($(this).attr("value"));
            obj_this.para.tra_loi.bobai[para.tra_loi.vitri_bobai].vitri = _idval;
            $(".xuly_mot_conbai").show();
            obj_this.hienthi_hientrang();
        })

        this.obj_question_scr.find(".remove").click(function(){
            $(".xuly_mot_conbai").hide();        
            var obj = obj_this.para.tra_loi;
            var bb = para.tra_loi.vitri_bobai;
            var _id = obj.bobai[bb].traloi[obj.bobai[bb].vitri];
            obj.bobai[bb].conlai[_id] = 0;
            for (var i = obj.bobai[bb].vitri; i < 51; i++){
                obj.bobai[bb].traloi[i] = obj.bobai[bb].traloi[i+1];
                if (obj.bobai[bb].traloi[i] >= 0) obj.bobai[bb].vitri = i+1;
            }
            obj_this.para.tra_loi = obj;
            obj_this.hienthi_hientrang();
        })
        this.obj_question_scr.find(".insert_left").click(function(){
            $(".xuly_mot_conbai").hide();
            var obj = obj_this.para.tra_loi;
            var bb = para.tra_loi.vitri_bobai;
            var _id = obj.bobai[bb].traloi[obj.bobai[bb].vitri];

            for (var i = 51; i > obj.bobai[bb].vitri; i--){
                obj.bobai[bb].traloi[i] = obj.bobai[bb].traloi[i-1];
            }
            obj.bobai[bb].traloi[i] = -1;
            obj_this.para.tra_loi = obj;
            obj_this.hienthi_hientrang();
        })
        this.obj_question_scr.find(".insert_right").click(function(){
            $(".xuly_mot_conbai").hide();
            var obj = obj_this.para.tra_loi;
            var bb = para.tra_loi.vitri_bobai;
            var _id = obj.bobai[bb].traloi[obj.bobai[bb].vitri];

            for (var i = 51; i > obj.bobai[bb].vitri+1; i--){
                obj.bobai[bb].traloi[i] = obj.bobai[bb].traloi[i-1];
            }
            obj.bobai[bb].traloi[i] = -1;
            obj.bobai[bb].vitri++;
            obj_this.para.tra_loi = obj;
            obj_this.hienthi_hientrang();
        })

        this.para.tra_loi = obj;
        obj_this.hienthi_hientrang();
    }


    draw_exam_an_element(row, col){
        var src = para.matrix[row][col].image;
        var title = para.matrix[row][col].title;
        var subtitle = para.matrix[row][col].subtitle;
        var idval = row*52 + col;
        var col_html = "<div class='cot' id='cot_"+idval+"' style='display:none' ><div class='content'><div class='image'><img src='"+src+"'/></div></div></div>";
        return col_html;
    }
    
    draw_question_answer_an_element(row, col){
        var src = para.bobai_imgs[52];//para.matrix[row][col].image;
        var title = para.matrix[row][col].title;
        var subtitle = para.matrix[row][col].subtitle;
        var idval = col;
        var col_html = "<div class='cot motcot' id='cot_"+idval+"' style='' value='"+idval+"' ><div class='content'><div class='image'><img src='"+src+"'/></div></div></div>";
        return col_html;
    }


}