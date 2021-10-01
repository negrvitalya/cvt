jQuery('document').ready(function(){
	var numimg=0
	var arrimg=new Array();
	var arrimg=['2.jpg','https://sun9-17.userapi.com/impf/c637229/v637229284/2aa64/Tk6kT43e3JE.jpg?size=604x408&quality=96&sign=89454046286096b7efb719a0868c78e8&type=album','https://sun1-95.userapi.com/s/v1/if1/u6f8F8h2qUgpNEbqE62_lWAMGoEZmebO5TTMZrRMC6TVBjo6zUqWAp9H53p748Uh1XrkrRrz.jpg?size=400x0&quality=96&crop=177,16,284,425&ava=1','https://i.ytimg.com/vi/h7znWp23vmo/maxresdefault.jpg'];
	jQuery('#suck0').on('click',function(){
		if(numimg==0){
			numimg+=1;
			jQuery('#negrvitalya').remove()
			jQuery('#suck0').append('<img src="'+arrimg[1]+'" width="1200px" height="200px" id="negrvitalya"/>')
		}else if(numimg==1){
			numimg+=1
			jQuery('#negrvitalya').remove()
			jQuery('#suck0').append('<img src="'+arrimg[2]+'" width="1200px" height="200px" id="negrvitalya"/>')
		}else if(numimg==2){
			numimg+=1
			jQuery('#negrvitalya').remove()
			jQuery('#suck0').append('<img src="'+arrimg[3]+'" width="1200px" height="200px" id="negrvitalya"/>')
		}else if(numimg==3){
			numimg=numimg*0
			jQuery('#negrvitalya').remove()
			jQuery('#suck0').append('<img src="'+arrimg[0]+'" width="1200px" height="200px" id="negrvitalya"/>')
		}
	});
});