$(document).ready(function(){
	console.log("This is reaaaaady!")
	btns();
});

    $("#hide").ready(function(){
		$(".js-menu").hide()
	});


function btns(){
    	$(".js-show-recipe").click(function(){
			alert("You can see our recipes")
			
	});
    	$(".js-show-make").click(function(){
    		alert("And you can also make your own recipes")
    		
    });

};
	