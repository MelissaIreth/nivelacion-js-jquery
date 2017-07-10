$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);
	renderActivities(activities);
	renderActivity(activities);

	function printNews(){
	$("p").append(document.createTextNode("NUEVAS RECETAS"))
	};
	printNews();

});

	$("#hide").ready(function(){
		$(".js-back").hide()
	});




/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/
function renderHighlightedRecipes(recipesArray) {
	console.log('Recipes: ', recipesArray);
	recipesArray.forEach(function(data){
		if(data.highlighted == true){
			renderRecipe(data)
		}
	});			
};

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
	$(".list-recipes").append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'>"+recipe.title+"</span><span class='metadata-recipe'><span class='author-recipe'>"+recipe.source.name+"</span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src='img/recipes/640x800/"+recipe.name+".jpg'/></a>")
}

/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activities) {
	console.log('Activities: ', activities);
	activities.forEach(function(d){
		if(d != 0){
			$(".wrapper-message").css("display", "none")
		}
	});
};

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(activities) {
	$(".list-activities").append('<a href="#" class="item-activity"><span class="attribution"><span class="avatar"><img src="'+activities.userAvatar+'" class="image-avatar"></span><span class="meta"><span class="author">'+activities.userName+'</span> made <span class="recipe">'+activities.recipeName+'</span>:'+activities.text+'<span class="location">&mdash;'+activities.place+'</span></span></span><div class="bg-image" style="background-image: url('+activities.image+');"></div></a>');
}

