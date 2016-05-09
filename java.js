$(document).ready(function () {

	var animals= "dogs";
	var api= "http://api.giphy.com/v1/gifs/search?q="+ animals +"&api_key=dc6zaTOxFJmzC";

	function displayAnimals(){

		$(".animalType").click(function() {
		$.ajax({
			url: api,
			method: "GET",
		}).done(function(response) {
			console.log(response.data);
			var results= response.data;
				for (var i = 0; i < results.length; i++) {
				var p = $('<p>').text("Rating: " + results[i].rating);	
				var animalType=$('.items');
				var animalImage= $('<img>');
				animalImage.attr("src", results[i].images.fixed_width_small.url);
				animalType.append(p);
				animalType.append(animalImage);
			};

		});
			
		});

		

	};
	displayAnimals();

});