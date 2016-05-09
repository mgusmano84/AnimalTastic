$(document).ready(function () {

	var animals= "dogs";
	var api= "http://api.giphy.com/v1/gifs/search?q="+ animals +"&api_key=dc6zaTOxFJmzC";

	function displayAnimals(){

		$(".animalType").click(function() {
		$.ajax({
			url: api,
			method: "GET",
		}).done(function(response) {
			console.log(response);
			var results= response.data;
			for (i= 0; i<results.length; i++);
				
			var image = response.data.bitly_gif_url;
			$('.items').append(image);

		});
			
		});

		

	};
	displayAnimals();

});