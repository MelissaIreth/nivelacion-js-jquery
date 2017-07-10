$(document).ready(function(){
	console.log("This is reaaaaady!")
	btns();
});

    $("#hide").ready(function(){
		$(".js-menu").hide()
	});


function btns(){
    	$(".js-show-recipe").click(function(){
			console.log("You can see our recipes")
			$(".page.recipe").removeClass('make')
	});
    	$(".js-show-make").click(function(){
    		console.log("And you can also make your own recipes")
    		$(".page.recipe").addClass('make')
    });

};
	