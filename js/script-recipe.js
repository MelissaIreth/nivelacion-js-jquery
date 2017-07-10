$(document).ready(function(){
	console.log("This is reaaaaady!")
	btns();
});

    $("#hide").ready(function(){
		$(".js-menu").hide()
	});


function btns(){
    	$(".js-show-recipe").click(function(){
			console.log("You can see our recipes");
			$(".page.recipe").removeClass('make');
			$("a").addClass('active');
			$(".js-show-make").removeClass('active');

	});
    	$(".js-show-make").click(function(){
    		console.log("And you can also make your own recipes");
    		$(".page.recipe").addClass('make');
    		$("a").addClass('active');
			$(".js-show-recipe").removeClass('active');
    });

};
	$(".js-back").click(function(){
		window.location.href ="index.html"
	});