function gotoanchor(anchor){
    var target_offset = $("#" + anchor).offset();
    var target_top = target_offset.top;
    $('html, body').animate({scrollTop:target_top}, 1000, 'easeInSine');
}

function url_remove_tag(url){
    newurl = url;
    str = new String(url);
    vtri = str.indexOf("#");
    vtri2 = str.indexOf("?");
    vtri3 = str.lastIndexOf("?");
    if (vtri > 0 && vtri2 > 0){
        if (vtri2 > vtri) {
            newurl = str.substring(0, vtri) + str.substring(vtri2, str.length);
        } else newurl = str.substring(0, vtri);
    }
    
    str = new String(newurl);
    vtri2 = str.indexOf("?");
    vtri3 = str.lastIndexOf("?");
    if (vtri3 > vtri2) newurl = str.substring(0, vtri3) + "&" + str.substring(vtri3 + 1, str.length);
    
    return newurl;
}

function getinfo(para) {
    if (para.file == null) para.file= document.location;
    if (para.field == null) para.field = "id";
    if (para.where == null) para.where = "";

    para.file = url_remove_tag(para.file);
    
    var url = para.file + "?func=info&field="+para.field+"&where="+para.where;
    url = url_remove_tag(url);
    
    console.log(url);
    
    var objresult = $(this);
	$.ajax({url: url, success: function(result){
		if (result.success==true) {
            try{para.finished(result.data);} catch(e){}return;
            notification_success(result.message_vi);
        } else {
            console.log(result.message);notification_error(result.message_vi);
            try{para.failed(result.data);} catch(e){}return;
        }
		
	}, error: function(result){
		notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
		console.log(result.responseText);
	} });
}

function notification_error(message){	
	$("#notification").find("span").html(message);
	$("#notification").show();
	setTimeout(function(){$("#notification").hide(1000)}, 30000);
}
function notification_success(message){	
	$("#notification").hide();
}

/*
function event_edit_delete(para) {
	$(".form_edit_dialog").unbind("click");
	$(".form_edit_dialog").click(function(){
	    para.objresult = $(this).parent().parent();
		$(this).form_edit_dialog(para);
	});
	
	$(".form_edit_json").unbind("click");
	$(".form_edit_json").click(function(){
	    para.objresult = $(this).parent().parent();
		$(this).form_edit_json(para);
	});
	
	$(".form_delete").unbind("click");
	$(".form_delete").click(function(){
	    para.objresult = $(this).parent().parent();
		$(this).form_delete(para);
	});
    
    try {para.event_row_control(para);} catch(e){}
}
*/

/* Kieu 1 - ajax */
(function( $ ) {
	$.fn.form_submit_add_dialog = function ( para ) {
		if (para == null) para = {};
        if (para.file == null) para.file = document.location;
        if (para.objform == null) para.objform = $(this).parent();
        if (para.focuscontrol == null) focuscontrol = ".focus";
        if (para.view_tpl == null) para.view_tpl = "arow";
        if (para.objresult == null) para.objresult = $(this);
        
        para.file = url_remove_tag(para.file);
        
        var missing = false;
        var mycontainerform = para.objform.parent();
        var myform = para.objform;
        /*
        var file = (para.file == null)?document.location:para.file;
        var containerformid = (para.containerformid == null)?"form_edit":para.containerformid;
        var focuscontrol = (para.focuscontrol == null)?".focus":para.focuscontrol;
        var objresult = (para.objresult == null)?$(this):para.objresult;
        
        var missing = false;
        var mycontainerform = $("#" + containerformid);
        var myform = mycontainerform.find("form");
        /**/
        myform.find(":required").each(function(){
            if ($(this).val() == "") missing = true;
		})

        var formData = myform.serializeFormJSON();
		
		$.ajax({
			type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url         : para.file, // the url where we want to POST
			data        : formData, // our data object
			dataType    : 'json', // what type of data do we expect back from the server
			encode          : true
		})
		.success(function(result) {
			if (result.success!=true) {console.log(result.message);notification_error(result.message_vi);return;} else notification_success(result.message_vi);
			
			data = result.data;
			para.objresult.prepend(data);
            
            stt = 0;
			para.objresult.find("tr").each(function(){
				td = $(this).find("[auto=number]");
                td.text(++stt);
			});
			
			mycontainerform.dialog( "close" );
            try{para.added(data);} catch(e){}
            try{para.finished(data);} catch(e){}
            try {loaded_allrow();} catch(e){}
		})
		.error(function(result) {
			notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
			console.log(result.responseText);
		});
	};
})(jQuery);	

(function( $ ) {
	$.fn.form_submit_edit_dialog = function ( para ) {
        if (para == null) para = {};
        if (para.file == null) para.file = document.location;
        if (para.objform == null) para.objform = $(this).parent();
        if (para.focuscontrol == null) focuscontrol = ".focus";
        if (para.view_tpl == null) para.view_tpl = "arow";
        if (para.objresult == null) para.objresult = $(this);
        
        para.file = url_remove_tag(para.file);
        
        var missing = false;
        var mycontainerform = para.objform.parent();
        var myform = para.objform;
        myform.find(":required").each(function(){
            if ($(this).val() == "") missing = true;
		})
        if (missing) return;
        var formData = myform.serializeFormJSON();
		formData["view_tpl"] = para.view_tpl;
        
        $.ajax({
			type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url         : para.file, // the url where we want to POST
			data        : formData, // our data object
			dataType    : 'json', // what type of data do we expect back from the server
			encode          : true
		})
		.success(function(result) {
			if (result.success!=true) {console.log(result.message);notification_error(result.message_vi);return;} else notification_success(result.message_vi);
			
			data = result.data;
            
			var parent = para.objresult.parent();
			para.objresult.replaceWith(data);
			
            stt = 0;
			parent.find("tr").each(function(){
				td = $(this).find("[auto=number]");
                td.text(++stt);
			});
			
			mycontainerform.dialog( "close" );
            if (para.containerformid_tmp == true) $("#para.containerformid").replaceWith("");
            
            try{para.edited();} catch(e){}
            try{para.finished();} catch(e){}
            try {loaded_allrow();} catch(e){}
		})
		.error(function(result) {
			notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
			console.log(result.responseText);
		});
		
	};
})(jQuery);	

(function( $ ) {
	$.fn.form_add_dialog = function (para) {
	    if (para == null) para = {};
        if (para.file == null) para.file = document.location;
        if (para.objform == null) para.objform = $(this).parent();
        if (para.focuscontrol == null) focuscontrol = ".focus";
        if (para.view_tpl == null) para.view_tpl = "arow";
        if (para.objresult == null) para.objresult = $(this);
        
        para.file = url_remove_tag(para.file);
        var url = para.file + "?func=add&view_tpl=" + para.view_tpl;
		para.url = url_remove_tag(url);
        
        var missing = false;
        var mycontainerform = para.objform.parent();
        var myform = para.objform;
        
        /*
	    if (para == null) para = {};
		if (para.file == null) para.file = document.location;
        if (para.formid == null) para.formid = "form_data";
        if (para.focuscontrol == null) para.focuscontrol = ".focus";
        if (para.view_tpl == null) para.view_tpl = "form";
        if (para.objresult == null) para.objresult = $(this);
        
        para.file = url_remove_tag(para.file);
        
        var url = para.file + "?func=add&view_tpl=" + para.view_tpl;
		para.url = url_remove_tag(url);
        
        var myform = $("#" + para.formid);
        /**/
        var myformparent = myform.parent();
        
		myformparent.empty();
		myformparent.hide();
		$.ajax({url: para.url, success: function(result){
		  
			if (result.success!=true) {console.log(result.message);notification_error(result.message_vi);return;} else notification_success(result.message_vi);
			
            myformparent.html(result.data);
			myformparent.dialog({
				resizable: true,
				modal: true,
                position: "fixed",
                top: $(document).scrollTop() + "px",
                width: "100%",
				buttons: {
					"Thoát": function(){
						$( this ).dialog( "close" );
                        try{para.closed();} catch(e){}
					}
				}
			})
			try{para.finished();} catch(e){}
            try {loaded_allrow();} catch(e){}
		}, error: function(result){
			alert("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
			console.log(result.responseText);
		}});
	};
})(jQuery);	

(function( $ ) {
	$.fn.form_edit_dialog = function (para) {
	    if (para == null) para = {};
	    if (para.file == null) para.file = document.location;
        if (para.view_tpl == null) para.view_tpl = "form";
        if (para.objresult == null) para.objresult = $(this);
        if (para.parameters == null) para.parameters = "";
        
        para.file = url_remove_tag(para.file);
        
        if (para.url == null) para.url = para.file + "?func=edit&id=" + para.objresult.attr("rowid") + "&view_tpl=" + para.view_tpl + "&" + para.parameters;
        else para.url = para.url + "&view_tpl=" + para.view_tpl + "&" + para.parameters;
        para.url = url_remove_tag(para.url);
        
        var _tmp_containerformid = "dfksdhf98hwkjcs9";
        if (para.containerformid == null){
            para.containerformid = _tmp_containerformid;
            para.containerformid_tmp = true;
            $("body").append("<div style='display:none;' id='"+_tmp_containerformid+"'></div>");
        }
        
		var myformparent = $('#' + para.containerformid);
        myformparent.empty();
		myformparent.hide();
		$.ajax({url: para.url, success: function(result){
			if (result.success!=true) {console.log(result.message);notification_error(result.message_vi);return;} else notification_success(result.message_vi);
			myformparent.html(result.data);
            
            myformparent.dialog({
				resizable: true,
				modal: true,
                position: "fixed",
                top: $(document).scrollTop() + "px",
                width: "100%",
				buttons: {
					"Thoát": function() {
						$(this).dialog("close");
					}
						
				}
			})
			try{para.edited();} catch(e){}
            try{para.finished({objform: myformparent});} catch(e){}
            try {loaded_allrow();} catch(e){}
		}, error: function(result){
			alert("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
			console.log(result.responseText);
		} });
	};
})(jQuery);	

/* Kieu 2 - json */
(function( $ ) {
	$.fn.form_submit_add = function (para) {
		if (para.file == null) para.file = document.location;
        if (para.objform == null) para.objform = $("form_data");
        if (para.objfocus == null) para.objfocus = para.objform.find("input:first");
        if (para.view_tpl == null) para.view_tpl = "arow";
        if (para.objresult == null) para.objresult = $(this);
        
        para.file = url_remove_tag(para.file);
        
        var myform = para.objform;
		var missing = false;
        myform.find(":required").each(function(){
            if ($(this).val() == "") missing = true;
		})
        if (missing) return;
        var formData = myform.serializeFormJSON();						
		formData["view_tpl"] = para.view_tpl;
        
        $.ajax({
			type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url         : para.file, // the url where we want to POST
			data        : formData, // our data object
			dataType    : 'json', // what type of data do we expect back from the server
			encode          : true
		})
		.success(function(result) {
			if (result.success!=true) {console.log(result.message);notification_error(result.message_vi);return;} else notification_success(result.message_vi);
			
			para.objresult.prepend(result.data);
			para.objfocus.focus(); para.objfocus.select(); 
			
            stt = 0;
			para.objresult.find("tr").each(function(){
				td = $(this).find("[auto=number]");
                td.text(++stt);
			});
			document.getElementById(para.objform.attr("id")).reset();
            
            try{para.added();} catch(e){}
            try{para.finished();} catch(e){}
            try {loaded_allrow();} catch(e){}
		})
		.error(function(result){
			notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
			console.log(result);
		});

	};
})(jQuery);	
(function( $ ) {
	$.fn.form_submit_edit = function (para) {
		if (para.file == null) para.file = document.location;
        if (para.objform == null) para.objform = $("form_data");
        if (para.objfocus == null) para.objfocus = para.objform.find("input:first");
        if (para.objresult == null) para.objresult = $(this);
        
        para.file = url_remove_tag(para.file);
        
        var missing = false;
        para.objform.find(":required").each(function(){
            if ($(this).val() == "") missing = true;
		})
        if (missing) return;
        
        var formData = para.objform.serializeFormJSON();
        formData["view_tpl"] = para.view_tpl;
        
        $.ajax({
			type        : 'POST', // define the type of HTTP verb we want to use (POST for our form)
			url         : para.file, // the url where we want to POST
			data        : formData, // our data object
			dataType    : 'json', // what type of data do we expect back from the server
			encode      : true
		})
		.success(function(result) {
			if (result.success!=true) {console.log(result.message);notification_error(result.message_vi);return;} else notification_success(result.message_vi);
			
			var parent = para.objresult.parent();
            para.objresult.replaceWith(result.data); 
			para.objfocus.focus(); para.objfocus.select(); 
			
            stt = 0;
			parent.find("tr").each(function(){
				td = $(this).find("[auto=number]");
                td.text(++stt);
			});
            
            para.objform.hide(100);
            
            $(document).scrollTop(para.scrollTop);
            
            try{para.edited();} catch(e){}
            try{para.finished();} catch(e){}
            try {loaded_allrow();} catch(e){}
		})
		.error(function(result){
			notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
			console.log(result.responseText);
		});

	};
})(jQuery);	

(function( $ ) {
	$.fn.form_add_json = function (para) {
		if (para.file == null) para.file = document.location;
        if (para.objform == null) para.objform = $(this).parent().find("form");
        if (para.objfocus == null) para.objfocus = para.objform.find("input:first");
        if (para.view_tpl == null) para.view_tpl = "form_json";
        if (para.objresult == null) para.objresult = $(this);
        if (para.parameters == null) para.parameters = "";
        
        para.file = url_remove_tag(para.file);
        
        if (para.url == null) para.url = para.file + "?func=add" + "&view_tpl="+para.view_tpl + "&" + para.parameters;
		else para.url = para.url + "&view_tpl="+para.view_tpl+"&"+para.parameters;
        para.url = url_remove_tag(para.url);
        
        var myform = para.objform;
        $.ajax({url: para.url, success: function(result){
            data = $.parseJSON(result.data);
			for (i=0;i<data.length;i++){
				if (data[i].combobox) {
                    var select = myform.find("select[name='"+data[i].name+"']");
                    select.combobox();
                    var text = select.children( ":selected" ).text();
                    $("input[for-select='"+select.attr("id")+"']").val(text);
                } else if (data[i].checkbox) {
                    var checkbox = myform.find("input[name='"+data[i].name+"']");
                    if (data[i].value == 1) {checkbox.attr("checked", "true");}
                    else {checkbox.removeAttr("checked");}
                }else if (data[i].radio) {
                    myform.find("input[name='"+data[i].name+"']").each(function(){
        				if ($(this).val() == data[i].value) {$(this).attr("checked", "checked");}
                        else {$(this).removeAttr("checked");}
        			});
                } else {
                    myform.find("[name='"+data[i].name+"']").val(data[i].value);
                }
			}
            myform.show();
			para.objfocus.focus();
			
            try{para.finished();} catch(e){}
            try {loaded_allrow();} catch(e){}
		}, error: function(result){
			notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
			console.log(result.responseText);
		} });
	};
})(jQuery);	

(function( $ ) {
    //{file:file, rowidname: "rowid", formid: "form", focuscontrol: ".focus"}
	$.fn.form_edit_json = function (para) {
        if (para.file == null)para.file = document.location;
        if (para.rowidname == null) para.rowidname = "rowid";
        if (para.objform == null) para.objform = $("form_data");
        if (para.objfocus == null) para.objfocus = para.objform.find("input:first");
        if (para.view_tpl == null) para.view_tpl = "form_json";
        if (para.parameters == null) para.parameters = "";
        if (para.objresult == null) para.objresult = $(this);
        
        para.file = url_remove_tag(para.file);
        
        if (para.url == null) para.url = para.file + "?func=edit&id=" + para.objresult.attr(para.rowidname)+"&view_tpl="+para.view_tpl + "&" + para.parameters;
		else para.url = para.url + "&view_tpl="+para.view_tpl+"&"+para.parameters;
        para.url = url_remove_tag(para.url);
        
        var myform = para.objform;
		para.scrollTop = $(document).scrollTop();
        
        $.ajax({url: para.url, success: function(result){
            data = $.parseJSON(result.data);
			for (i=0;i<data.length;i++){
				if (data[i].combobox) {
                    var select = myform.find("select[name='"+data[i].name+"']");
                    var text = select.children( ":selected" ).text();
                    select.combobox();
                    $("input[for-select='"+select.attr("id")+"']").val(text);
                } else if (data[i].checkbox) {
                    var checkbox = myform.find("input[name='"+data[i].name+"']");
                    if (data[i].value == 1) {checkbox.attr("checked", "true");}
                    else {checkbox.removeAttr("checked");}
                } else if (data[i].radio) {
                    //myform.find("input[name='"+data[i].name+"'][value="+data[i].value+"]").attr("checked", "checked");
                    myform.find("input[name='"+data[i].name+"'][value="+data[i].value+"]").prop("checked", "checked");
                } else {
                    myform.find("[name='"+data[i].name+"']").val(data[i].value);
                }
			}
			
            myform.show(100);
			para.objfocus.focus(); para.objfocus.select();
			
            try{para.finished();} catch(e){}
            try {loaded_allrow();} catch(e){}
		}, error:function(result){
			notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
			console.log(result.responseText);
		} });
	};
})(jQuery);	

/* Cua chung */
(function( $ ) {
    /** {file:file, rowidname: "rowid", formid: "form", focuscontrol: ".focus"} **/
	$.fn.form_delete = function (para) {
        if (para == null) para = {};
        if (para.file == null) para.file = document.location;
        if (para.rowidname == null) para.rowidname = "rowid";
        if (para.parameters == null) para.parameters = "";
        if (para.objresult == null) para.objresult = $(this);
        
        para.file = url_remove_tag(para.file);
        
        if (para.url == null) para.url = para.file + "?func=del&id=" + para.objresult.attr(para.rowidname) + "&" + para.parameters;
        else para.url = para.url + "&" + para.parameters;
        para.url = url_remove_tag(para.url);
        
		if (confirm("Bạn thực sự muốn XÓA dữ liệu này?")){
		    $.ajax({url: para.url, success: function(result){
				if (result.success!=true) {console.log(result.message);notification_error(result.message_vi);return;} else notification_success(result.message_vi);
				
				parent = para.objresult.parent();
				para.objresult.hide(500); 
				setTimeout(function(){
					para.objresult.replaceWith("");
					stt = 0;
                    parent.find("tr").each(function(){
						td = $(this).find("[auto=number]");
                        td.text(++stt);
					});
                    
                    try{para.deleted();} catch(e){}
                    try{para.finished();} catch(e){}
                    try {loaded_allrow();} catch(e){}
				}, 500);
                
			}, error: function(result){
				notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
				console.log(result.responseText);
			} });
		}
	};
})(jQuery);	

(function( $ ) {
    /** {file:file, rowidname: "rowid", formid: "form", focuscontrol: ".focus"} **/
	$.fn.form_hide = function (para) {
        if (para == null) para = {};
        if (para.file == null) para.file = document.location;
        if (para.rowidname == null) para.rowidname = "rowid";
        if (para.parameters == null) para.parameters = "";
        if (para.view_tpl == null) para.view_tpl = "arow";
        if (para.objresult == null) para.objresult = $(this);
        
        para.file = url_remove_tag(para.file);
        
        if (para.url == null) para.url = para.file + "?func=hide&id=" + para.objresult.attr(para.rowidname)+"&view_tpl="+para.view_tpl + "&" + para.parameters;
		else para.url = para.url + "&view_tpl="+para.view_tpl+"&"+para.parameters;
        para.url = url_remove_tag(para.url);
        para.url = url_remove_tag(para.url);
        
		{
		    $.ajax({url: para.url, success: function(result){
				if (result.success!=true) {console.log(result.message);notification_error(result.message_vi);return;} else notification_success(result.message_vi);
				
                para.objresult.replaceWith(result.data);
                
                try{para.hidden();} catch(e){}
                try{para.finished();} catch(e){}
                try {loaded_allrow();} catch(e){}
                
			}, error: function(result){
				notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
				console.log(result.responseText);
			} });
		}
	};
})(jQuery);	

/*
(function( $ ) {
	$.fn.load_data_dialog = function (para) {
        if (para.file == null) para.file = document.location;
        var fromid = (para.fromid == null)?0:parseInt(para.fromid);
        var perpage = (para.perpage == null)?500:parseInt(para.perpage);
        var view_tpl = (para.view_tpl == null)?"form":para.view_tpl;
        
        para.file = url_remove_tag(para.file);
        
		var url = para.file + "?func=aview&limit="+fromid+","+perpage+"&view_tpl"+view_tpl;
		var objresult = $(this);
		$.ajax({url: url, success: function(result){
			if (result.success!=true) {console.log(result.message);notification_error(result.message_vi);return;} else notification_success(result.message_vi);
			if (result.data == "") {
				return;
			}
			objresult.append(result.data);
			
			objresult.find("tr").each(function(){
				index = $(this).index()+1;
				$(this).find("td:first").html(index);
			});

			objresult.load_data_dialog({file: file, fromid: (fromid + perpage), perpage: perpage});
			
		}, error: function(result){
			notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
			console.log(result.responseText);
		} });
	};
})(jQuery);	
*/

(function( $ ) {
	$.fn.load_data_json = function (para) {
	    if (para == null) para = {};
	    if (para.file == null) para.file = document.location;
        if (para.fromid == null) para.fromid = 0;
        if (para.perpage == null) para.perpage = 500;
        if (para.view_tpl == null) para.view_tpl = "arow";
        if (para.objresult == null) para.objresult = $(this);
        
        para.file = url_remove_tag(para.file);
        
        if (para.url == null){
            para.url = para.file + "?func=aview&limit="+para.fromid+","+para.perpage+"&view_tpl="+para.view_tpl;
        } else {
            para.url = para.url + "&limit="+para.fromid+","+para.perpage+"&view_tpl="+para.view_tpl;
        }
        para.url = url_remove_tag(para.url);
        
        if (para.fromid == 0) para.objresult.html('<span><i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i></span>');
        
        $.ajax({url: para.url, success: function(result){
			if (para.fromid == 0) para.objresult.empty();
            if (result.success!=true) {console.log(result);notification_error(result.message_vi);return;} else notification_success(result.message_vi);
            if (result.data == "") {
				try{para.loaded();} catch(e){}
                try{para.finished();} catch(e){}
                try {loaded_allrow();} catch(e){}
                return;
			}
			
            para.objresult.append(result.data);
			
            stt = 0;
			para.objresult.find("tr").each(function(){
				td = $(this).find("[auto=number]");
                td.text(++stt);
			});
            
            try{para.loaded_a_part();} catch(e){}
            
            para.fromid = para.fromid + para.perpage;
			para.objresult.load_data_json(para);
			
		}, error: function(result){
			if (para.fromid == 0) para.objresult.empty();
            notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
			console.log(result.responseText);
		} });
	};
})(jQuery);	

(function( $ ) {
	$.fn.reload_listview = function (para) {
	    if (para.field == null) return; else var field = para.field;
        if (para.file == null) para.file= document.location;
        var fromid = (para.fromid == null)?0:parseInt(para.fromid);
        var perpage = (para.perpage == null)?500:parseInt(para.perpage);
        var view_tpl = (para.view_tpl == null)?"form":para.view_tpl;
        if (para.selected_value == null) para.selected_value = 0;
        if (para.language == null) para.language = "vi";
        if (para.combobox == null) para.combobox = false;
        if (para.where == null) para.where = "";

        para.file = url_remove_tag(para.file);
        
        if (para.appendonly != true) if (fromid == 0) $(this).empty();
        var url = para.file + "?func=listview&field="+field+"&limit="+fromid+","+perpage+"&view_tpl="+view_tpl+"&language="+para.language+"&selected="+para.selected+"&where="+para.where;
        url = url_remove_tag(url);
        //console.log(url);
        var objresult = $(this);
		$.ajax({url: url, success: function(result){
			if (result.success!=true) {console.log(result.message);notification_error(result.message_vi);return;} else notification_success(result.message_vi);
			if (result.data == "") {
				try{para.loaded();} catch(e){}
                try{para.finished();} catch(e){}
                try {loaded_allrow();} catch(e){}
                if (para.combobox) objresult.combobox();
                return;
			}
            objresult.append(result.data);

            try{para.loaded_a_part();} catch(e){}
            para.fromid = fromid + perpage;
			objresult.reload_listview(para);
			
		}, error: function(result){
			notification_error("Có lỗi xảy ra! Nếu thao tác của bạn đúng, vui lòng liên hệ admin. Cảm ơn!");
			console.log(result.responseText);
		} });
	};
})(jQuery);	

/** TIM KIEM **/
(function( $ ) {
	$.fn.load_data_form_search = function ( para ) {
		if (para.file == null) para.file = document.location;
        var formid = (para.formid == null)?"form_search":para.formid;
        if (para.view_tpl == null) para.view_tpl = "form_search"
        
        para.file = url_remove_tag(para.file);
        
        myform = $("#" + formid);
        var formData = myform.serialize();
        
        para_tmp = para;
        para_tmp.url = para.file + "?" + formData;
        $(this).load_data_json(para_tmp);
        
        try{para.finished();} catch(e){}
        try {loaded_allrow();} catch(e){}
	};
})(jQuery);	

/** TẢI NGUYÊN MỘT VIEW (Giống iframe) **/
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
