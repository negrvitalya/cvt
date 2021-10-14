jQuery('document').ready(function(){
    var clic=0
    jQuery('#vanya').on('click',function(){
        clic+=1
        jQuery('#cl').html(clic);
        if(clic==1){
            jQuery('#mmg').html('вано:хорошо! Продолжай!');
        }else if(clic==10){
            jQuery('#mmg').html('вано:я только разогрелся');
        }else if(clic==50){
            jQuery('#mmg').html('вано:Отлично!');
        }else if(clic==100){
            jQuery('#mmg').html('вано:может всё же остановимся?');
        }else if(clic==110){
            jQuery('#mmg').html('вано:ай!');
            jQuery('#vano').remove();
            jQuery('#vanya').append('<img id="vano" src="vano1.jpg" width="300px" height="400px"/>');
        }else if(clic==160){
            jQuery('#mmg').html('вано:очень больно!');
            jQuery('#vano').remove();
            jQuery('#vanya').append('<img id="vano" src="vano2.jpg" width="300px" height="400px"/>');
        }else if(clic==220){
            jQuery('#mmg').html('вано:может,всё же не надо?');
            jQuery('#vano').remove();
            jQuery('#vanya').append('<img id="vano" src="vano3.jpg" width="300px" height="400px"/>');

        
        }else if(clic==240){
            jQuery('#mmg').html('вано:может,всё же не надо?');
            jQuery('#vano').remove();
            jQuery('#vanya').append('<img id="vano" src="vano4.jpg" width="300px" height="400px"/>');
            
        }else if(clic==270){
            jQuery('#mmg').html('вано:почти...');
            jQuery('#vano').remove();
            jQuery('#vanya').append('<img id="vano" src="vano5.jpg" width="300px" height="400px"/>');
        }else if(clic==300){
            jQuery('#mmg').html('вано:всё,на этом наша история оканчивается');
            jQuery('#vano').remove();
            jQuery('#vanya').append('<img id="jjj" src="break.jpg" width="300px" height="400px"/>');
            jQuery('#cl').remove();
            jQuery('body').append('<div id="cp">300</div>');
        }

    });
});