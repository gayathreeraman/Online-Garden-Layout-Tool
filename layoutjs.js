
$(function(){

    var currentEl;
    var isDragging = false;
     

    $(".stencil").on("mousedown", function(e){
        var count=[];

        var el = $("div:first", this).clone();
        
        currentEl = el;
        

        isDragging = true;

        e.preventDefault();
        // return false;   
    });

    $("body").on("mouseup", function(){

        isDragging = false;
    });


    $("body").on("mousemove", function(e){

        if(isDragging){
       
            // Append only once ....
            if(!currentEl.parentElement){
                                
                // Move ...
                var xPos = e.clientX;
                var yPos = e.clientY;
                // var divWidth = divLayout.style.width;
                // var divHeight = 600;
                // var element = $('#divLayout');
                // var newElement = element[0];
                // var boundingBox = newElement.getBoundingClientRect();
                // var x = boundingBox.left;
                // var y = boundingBox.top;
                // console.log("hi");
                // console.log("hello" + x + y);


                //currentEl.appendTo("#divLayout");
                $("#divLayout").append(currentEl);
                
                // currentEl.css({"position":"absolute"});

                 // if(xPos > x) {$("#divLayout").css("left",divWidth);}

                // if (yPos > divHeight) $("#divLayout").css("top",divHeight);

                // if(xPos < 0) {$("#divLayout").css("left",0);}

                // if (yPos < 0) $("#divLayout").css("top",0);

                currentEl.offset({
                top: yPos - currentEl.outerHeight() / 2,
                left: xPos - currentEl.outerWidth() / 2
                });
                
                 

              
            }
            

        }    


        e.preventDefault();
         return false;    

    });

});