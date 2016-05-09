$(document).ready(function () {

	var title= "dogs";
	var api= "http://api.giphy.com/v1/gifs/search?q="+ title +"&api_key=dc6zaTOxFJmzC";

	function displayAnimals(){

		$(".animalType").click(function() {
		$.ajax({
			url: api,
			method: "GET",
		}).done(function(response) {
			console.log(response);
		});
			
		});

		

	};
	displayAnimals();

});