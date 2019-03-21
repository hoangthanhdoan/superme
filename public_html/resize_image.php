<?php

function resize_as_square($image_path, $max_size = 500){
    $img = imagecreatefromjpeg($image_path);
    $width = imagesx($img);
    $height = imagesy($img);
    $newheight = min($height, $width, $max_size);
    $newwidth = $newheight;
    
    $newimg = imagecreatetruecolor($newwidth, $newheight); 
    $palsize = ImageColorsTotal($img);
    for ($i = 0; $i < $palsize; $i++){ 
        $colors = ImageColorsForIndex($img, $i);   
        ImageColorAllocate($newimg, $colors['red'], $colors['green'], $colors['blue']);
    } 
    
    imagecopyresized($newimg, $img, 0, 0, 0, 0, $newwidth, $newheight, $width, $height);
    return ["resource_image"=>$newimg, "height"=>$newheight, "width"=>$newwidth];
}

function resize_as_circle($image_path, $dest_path = "_tmp.jpg", $max_size = 500){
    $original_path=$image_path;
    $data = resize_as_square($original_path, $max_size);
    imagejpeg ($data["resource_image"], $dest_path);
    // convert the picture
    $w = $data["width"];  $h=$data["height"]; // original size
    $src = imagecreatefromstring(file_get_contents($dest_path));
    $newpic = imagecreatetruecolor($w,$h);
    imagealphablending($newpic,false);
    $transparent = imagecolorallocatealpha($newpic, 0, 0, 0, 127);
    $r=$w/2;
    for($x=0;$x<$w;$x++)
        for($y=0;$y<$h;$y++){
            $c = imagecolorat($src,$x,$y);
            $_x = $x - $w/2;
            $_y = $y - $h/2;
            
            $left = (($_x*$_x) + ($_y*$_y));
            $right = ($r*$r);
            if($left <= $right){
                imagesetpixel($newpic,$x,$y,$c);
            }else if ($left == $right) {
                imagesetpixel($newpic,$x,$y, 0);
            } else{
                imagesetpixel($newpic,$x,$y,$transparent);
            }
        }
    imagesavealpha($newpic, true);
    imagepng($newpic, $dest_path);
    imagedestroy($newpic);
    imagedestroy($src);
}
resize_as_circle("vidu.png", "vidu.png", 300);
echo "<img src='vidu.png'/>";
echo "<img src='kq.jpg'/>";
?>