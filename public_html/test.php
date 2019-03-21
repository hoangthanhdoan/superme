<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>

<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://code.jquery.com/jquery-1.12.4.js"></script>

<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

<link href="style.css?v=<?php echo time(); ?>" rel="stylesheet" type="text/css"/>
<script src="http://webapp.memorybooster.top/game.js?v=<?php echo time(); ?>" ></script>

<script>
$(document).ready(function(){
    data = generate_game({col:40, row:100});
    
    obj_cauhoi = $("#game");
    obj_traloi = $("#game_answer");
    
    data.finished = function(para){
        para.obj_result.show();
        para.finished = function(p){
            p.obj_result.hide();
            $("input").unbind("focus");
            $("input").focus(function(){
                $(this).select();
            })
        }
        obj_traloi.game_number_draw_answer(para);
    }
    obj_cauhoi.game_number_draw(data);
    
    
    $(".chia_nhom").change(function(){
        socot = $(this).val();
        $(".col_border").removeClass("col_border");
        $(".cot_" + socot).addClass("col_border");
    })
    
    $("button.cauhoi").click(function(){
        obj_traloi.hide();
        obj_cauhoi.show();
    })
    $("button.traloi").click(function(){
        obj_cauhoi.hide();
        obj_traloi.show();
        obj_traloi.find("input").first().focus();
    })
    $("button.chamdiem").click(function(){
        data.finished = function(para){
            $(".hienthidiem").html("So diem la " + para.diem);
        }
        obj_traloi.game_number_draw_checkmark(data);
    })
    
    $(window).on('resize', function(){
        doResize();
        
    });
    function doResize(){
        width = window.innerWidth;
        if (width <= 1000) {
            scale = width*100/1000;
            $("body").css("zoom", scale + "%");
        }
    }
    doResize();

})



</script>
<body>

<div class="text-center">
<button class="cauhoi">Cau hoi</button>
Che do hien thi <input class="chia_nhom" type="number" min="0" max="9" value="0" style="min-width: 50px;" />
<button class="traloi">Tra loi</button>
<button class="chamdiem">Cham diem</button>
<span class="hienthidiem"></span>
</div>

<div id="game" class="lines_40"></div>
<div id="game_answer" class="lines_40"></div>

</body>