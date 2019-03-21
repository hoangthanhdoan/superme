
function xulysaukhitaitable(){
    $(topcontrol+".form_edit_json").unbind("click");
    $(topcontrol+".form_edit_json").click(function(){
        tr = $(this).parent().parent();
        //window.history.replaceState("state", "url", "?func=edit_form&id=" + tr.attr("rowid"));
        
        tr.form_edit_json({file: topfile, objform: $(topcontrol+"#form_data"),
            finished: function(){
                $(topcontrol+"#form_data").parent().show();
                $(topcontrol+".form_submit_json").unbind("click");
                $(topcontrol+".form_submit_json").click(function(){
            		tr.form_submit_edit( {file: topfile, objform: $(topcontrol+"#form_data"),view_tpl: "arow",  
                        finished: function(){xulysaukhitaitable()}
                    } );
            	});
                
                $(".form-control.number").keyup();
                $(focuscontrol).focus();
            }
        });
        try{
            form_edit_json_clicked( {obj: $(this)} );
        } catch(e){}
    })
    $(topcontrol+".form_delete").unbind("click");
    $(topcontrol+".form_delete").click(function(e){
        if (confirm("Thao tác này không thể phục hồi. Bạn thực sự muốn xóa?")){} else e.preventDefault();
        
        $(this).parent().parent().form_delete({file: topfile, finished: function(){xulysaukhitaitable()}});
        try{form_delete_clicked(topcontrol, "form_delete");} catch(e){}
    })
    $(topcontrol+".form_hide").unbind("click");
    $(topcontrol+".form_hide").click(function(e){
        $(this).parent().parent().form_hide({file: topfile, finished: function(){xulysaukhitaitable()}});
        try{form_hide_clicked(topcontrol, "form_hide");} catch(e){}
    })
    
    $(topcontrol+".extract_item").unbind("click");
    $(topcontrol+".extract_item").click(function (){
        iframe_id = $(this).attr("iframe_id");
        src = $(this).attr( "iframe_src" );
        
        des_obj = $("#" + iframe_id);
        des_obj.find("iframe").attr("src", src);
        
        $(".duocchon").attr("class", "extract_item");
        $(this).attr("class", "extract_item duocchon");
        
        gotoanchor( iframe_id );
    })
    
    $(topcontrol+".autosum").each(function(){
		col = $(this).attr("data");
        tongcong = 0;
        $(topcontrol+"[col="+col+"]").each(function(){
            tongcong += +$(this).attr("value");
        });
        
        $(this).text(tongcong.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","));
	});
    
    try{loadedtable();} catch(e){}
    try{loaded_allrow(); } catch(e){}
}

function form_search(topcontrol){
    var form = $(topcontrol+"#form_search");
	$(topcontrol+".form_submit_json").unbind("click");
    $(topcontrol+".form_search_submit_json").click(function(){
		$(topcontrol+".tableshowdata tbody").load_data_form_search( {file: topfile, objform: form, view_tpl: "arow",  
            finished: function(){
                xulysaukhitaitable();
            }
        } );
    });
    return form;
}

$(document).ready(function (){
    try{ focuscontrol; } catch(e){focuscontrol = ".focus";}
    try{ topcontrol; } catch(e){topcontrol = "";}
	try{ topfile; } catch(e){topfile = document.location;}
    
    $(topcontrol+".hide_form").click(function(){
	    $( "#" + $(this).attr("data") ).hide(1000);
    });
    
    /** Begin: Search **/
    $(topcontrol+".form_search_json").unbind("click");
    $(topcontrol+".form_search_json").click(function(){
	    //window.history.replaceState("state", "url", "?func=search_form");
        var form = form_search(topcontrol);
        form.parent().show(1000);
    });
    form_search(topcontrol);
    /** End: Search **/
    
    $(topcontrol+".form_add_json").unbind("click");
	$(topcontrol+".form_add_json").click(function(){
	    var form = $(topcontrol+"#form_data");
        //window.history.replaceState("state", "url", "?func=add_form");
        $( form ).parent().show(1000);
		$(topcontrol+".tableshowdata tbody").form_add_json( {file: topfile, objform: form,  
            finished: function(){
                $(topcontrol+".form_submit_json").unbind("click");
                $(topcontrol+".form_submit_json").click(function(){
            		$(topcontrol+".tableshowdata tbody").form_submit_add( {file: topfile, objform: $(topcontrol+"#form_data"), view_tpl: "arow", objfocus:$(topcontrol+"#form_data").find(".focus"),
                        finished: function(){xulysaukhitaitable()}
                    } );
            	});
            }
        } );
        try{form_add_json_clicked();}catch(e){}
        //setTimeout( function(){$(topcontrol+"#form_data").parent().hide(2000)}, 100000 );
	});
    
    $(topcontrol+".form_submit_json").unbind("click");
    $(topcontrol+".form_submit_json").click(function(){
		$(topcontrol+".tableshowdata tbody").form_submit_add( {file: topfile, objform: $(topcontrol+"#form_data"), view_tpl: "arow", objfocus:$(topcontrol+"#form_data").find(".focus"),
            finished: function(){xulysaukhitaitable()}
        } );
	});
    
    $(topcontrol+".tableshowdata tbody").load_data_json( {file: topfile, finished: function(){xulysaukhitaitable()} } );
	$(focuscontrol).focus();
})