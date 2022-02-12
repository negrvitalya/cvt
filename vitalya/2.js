jQuery('document').ready(function(){
    var debug=false;
    if(debug==false){
    alert('если у тебя проблемы с сердцем - уходи отсюда\n8==D');}
    function scream(){
        let f = new Date()+300000;
        while(new Date<f){}
        jQuery('body').html('<img src="виталя.png"/>');
        var au=new Audio();
        au.src='Скример.mp3';
        au.volume=1.0;
        au.autoplay=true;
        jQuery('title').html('слишком долго сидишь на сайте!');
    }
    jQuery('#b1').click(function(){
        jQuery('#b2').trigger('click');
    });
    jQuery('#b2').click(function(){
        jQuery('body').html('<img src="виталя.png"/>');
        jQuery('body').css('backgroundColor','black');
        var au=new Audio();
        au.src='Скример.mp3';
        au.volume=1.0;
        au.autoplay=true;
    });
    //scream();
});
