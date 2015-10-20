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
		$('.target').append(dragEl)
		dragEl.css({
		position: 'absolute',
	    top: event.originalEvent.clientY - $(dragEl).outerHeight() / 2 ,
	    left: event.originalEvent.clientX - ($(dragEl).outerWidth() / 2 ) - thisLeft
	     
	    })

	});



	

});