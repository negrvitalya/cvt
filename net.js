jQuery('index.html').ready(function(){
    var vit=1
    var sc1=false;
    var sc2=false;
    var img=['https://avatars.mds.yandex.net/i?id=875a9ccca23b2903ecae269ebe151a67-4334445-images-thumbs&n=13','https://sun9-17.userapi.com/impf/c637229/v637229284/2aa64/Tk6kT43e3JE.jpg?size=604x408&quality=96&sign=89454046286096b7efb719a0868c78e8&type=album','https://i.ytimg.com/vi/vntF7HAI4BE/maxresdefault.jpg','https://i.ytimg.com/vi/h7znWp23vmo/maxresdefault.jpg']
    jQuery('#ramazan').click(function(){
        
        jQuery('#ramazan').attr('src',img[vit])
        vit+=1
        if(vit==4){
            vit=0
                }
    });
    jQuery('#secret1').dblclick(function(){
        if(sc1==false){
            sc1=true
            console.log('1');
        }
        if(sc1==true && sc2==true){
            jQuery('body').css('backgroundImage','url(23.png)');
        }
    });
    jQuery('#secret2').dblclick(function(){
        if(sc2==false){
            sc2=true
            console.log('2');
        }
        if(sc1==true && sc2==true){
            jQuery('body').css('backgroundImage','url(23.png)');
        }
    });
});