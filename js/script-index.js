$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

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
			renderRecipe()
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
	$(".list-recipes").append("<a class='item-recipe' href='#'><span class='attribution'><span class='title-recipe'></span><span class='metadata-recipe'><span class='author-recipe'></span><span class='bookmarks-recipe'><span class='icon-bookmark'></span></span></span></span><img src=''/></a>")
}


/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}


