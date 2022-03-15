jQuery('document').ready(function(){
    var count=0;
    var ind=0
    var img=['0.jpg','1.png','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg','7.jpg'];
    function sleep(ms){var need=new Date().getTime()+ms;while(new Date().getTime()!=need){}}
    jQuery('#act').click(function(){
        count+=1
        if(count==1){
            ind+=1
            jQuery('#gov').attr('src','image/'+img[ind]);
            jQuery('#log').html('Также срать может заходеться с желания пёрнуть')
        }else if(count==4){
            ind+=1
            jQuery('#gov').attr('src','image/'+img[ind]);
            jQuery('#log').html('самое время срать!')
        }else if(count==9){
            ind+=1
            jQuery('#gov').attr('src','image/'+img[ind]);
            jQuery('#log').html('Нужно ПРОДРИСТАТЬСЯ!!!!!')
        }else if(count==13){
            ind+=1
            jQuery('#gov').attr('src','image/'+img[ind]);
            jQuery('#log').html('Чудесно!')
        }else if(count==25){
            ind+=1
            jQuery('#gov').attr('src','image/'+img[ind]);
            jQuery('#log').html('Вот это, конечно, навалили!')
        }else if(count==40){
            ind+=1
            jQuery('#gov').attr('src','image/'+img[ind]);
            jQuery('#log').html('Отлично!')
        }else if(count==50){
            ind+=1
            jQuery('#gov').attr('src','image/'+img[ind]);
            jQuery('#log').html('Хорошо всё то,что хорошо обсирается.')
            jQuery('#act').hide(1000);
            jQuery('body').append('<div id="sub"><p>хочешь ещё немножко подристать?</p><button class="shit">да</button><button class="shit">нет</button></div>')
            jQuery('#sub').on('click',function(){
                jQuery('.sub').remove();
                jQuery('#sub').html('да нам насрать,что хочешь ты дристать!')
                jQuery('#sub').hide(2500)
            });
        }
    });
});
