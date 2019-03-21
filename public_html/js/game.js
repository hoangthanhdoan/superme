(function( $ ) {
	$.fn.load_view = function ( para ) {
		if (para.file == null) para.file = document.location;
        if (para.view_tpl == null) para.view_tpl = "main";
        
        para.file = url_remove_tag(para.file);
        
        if (para.url == null) para.url = para.file + "?func=frame&view_tpl=" + para.view_tpl;
        if (para.parameters != null) para.url = para.url + "&" + para.parameters;
        
        para.url = url_remove_tag(para.url);
        
        objresult = $(this);
        
        objresult.html('<span><i class="fa fa-spinner fa-spin fa-3x fa-fw"></i> Đang tải...</span>');
        
        $.ajax({url: para.url, success: function(result){
			if (result.success!=true) {console.log(result.message);notification_error(result.message_vi);return;} else notification_success(result.message_vi);
            objresult.html(result.data);
			
            try{para.loaded();} catch(e){}
            try{para.finished();} catch(e){}
            try {loaded_allrow();} catch(e){}
		}, error: function(result){
			notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
			console.log(result.responseText);
		} });
	};
})(jQuery);	
/**{game:number, } **/
function generate_game(para){
    _game_number = "number";
    if (para.game == null) para.game = _game_number;
    
    switch (para.game){
        case _game_number:
            return {type: para.game}
            break;
    }
}
