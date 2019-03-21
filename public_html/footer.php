<?php
/* Xu ly hien thi du lieu */
$xtpl = new XTemplate( "footer.html", "tpl" );
$xtpl->assign( "header", $header );

$xtpl->parse( "main" );
echo $xtpl->text( "main" );
/**/
?>