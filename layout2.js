$(function() {

    $('#divLayout').on('mousedown', 'div', function(e) {

        $(this).addClass('elementToMove').on('mousemove', function(e) {
            
                $('.elementToMove').offset({
                    top: e.pageY - $('.elementToMove').outerHeight() / 2,
                    left: e.pageX - $('.elementToMove').outerWidth() / 2
                })

            .on('mouseup', function() {
                $(this).removeClass('elementToMove');
            });

        });

        e.preventDefault();



    }).on('mouseup', function() {
        $('.elementToMove').removeClass('elementToMove');


       //  $().draggable({ containment: "#divLayout" });

        $('#btnSave').click(function(){
        var searchEles = document.getElementById("divLayout").children;
            for(var i = 0; i < searchEles.length; i++) {

        var control = searchEles[i];
        // var clsName = control.className;

        var xPos = control.style.left;
        var yPos = control.style.top;
       
        console.log("xPos :" + xPos);
        console.log("yPos :" + yPos);

        
        }
        });
    });
});