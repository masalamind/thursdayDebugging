
$(document).ready(function(){

    $("#myForm").submit(function(e){

        e.preventDefault();
                

        var favoriteColor = $("#fav-color").val(); // select the color and store it in a variable
        // alert(favoriteColor);
        
        $("body").css("background-color",favoriteColor); // update the body's background with color represented by that variable's value

        // changing another element 
        $('h1').css("color", favoriteColor);  // you won't see the h1 because it's background is the same color: no contrasting color

    }) 


});