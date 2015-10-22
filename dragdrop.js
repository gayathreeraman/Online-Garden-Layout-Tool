$(function(){

	var dragEl = null;
	

	$('.target').on('dragstart', '.drag-item',function(event){
		event.stopPropagation();
		dragEl = $(this)
	});

	// $('.drag-item').on('dragstart', '.target',function(event){
	// 	event.stopPropagation();
	// 	dragEl = $(this)
	// });

	$('.stencil .drag-item').on('dragstart',function(event){
		event.stopPropagation();
		dragEl = $(this).clone()


	});



	$('.target').on('dragenter',function(event){

		event.preventDefault();
		event.stopPropagation();

	});


	$('.target').on('dragover',function(event){

		event.preventDefault();
		event.stopPropagation();

	});


	$('.target').on('drop',function(event){

		var thisLeft = $(this).offset().left
		//var thisTop = $(this).offset().top + $(dragEl).outerHeight()/2
		var thisTop = $(this).offset().top + 40
		$('.target').append(dragEl)
		dragEl.css({
		position: 'absolute',
		
	     //top: event.originalEvent.clientY - $(dragEl).outerHeight() / 2 ,
	     top: (event.originalEvent.pageY - thisTop),
	     left: event.originalEvent.clientX - ($(dragEl).outerWidth() / 2 ) - thisLeft

	    })

	});

 

	$('#btnSave').click(function(){
		//var clonedImage =[];
        var clonedImage = $(".target").children('.drag-item');
        //var searchEles = $("drag-item");
        for(var i = 0; i < clonedImage.length; i++) {

	        var control = clonedImage[i];
           
			var xPos = control.style.left;
        	var yPos = control.style.top;

            //return {xPos,Ypos}
            console.log("xPos :" + xPos);
        	console.log("yPos :" + yPos);
		}
       
        

        
        
    });

		

	//Adding trashcan and trying to hover them

	// $('.trashLayout').hover(function() {
 	//   $('.trash').fadeIn('slow');
 	//   },
 	//   function() { $('.trash').fadeOut('slow');
 	//  });

    //trying to delete the image inside the layout if pushed it to trashcan

	$('.trashLayout').on('drop',function(event){
		console.log("trashit");
		$(this).remove();

	});



	

});