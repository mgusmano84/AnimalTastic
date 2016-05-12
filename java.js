
$(document).ready(function () {

	var animals= ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];
	
	//Create the buttons fron the animals array
	function renderbuttons(){
		$("#buttons").empty();
		for (var i =0; i<animals.length; i++) {
			var a = $('<button type="button" class="btn btn-primary buttonSpaces">');
			a.addClass("animalClass");
			a.attr('data-name', animals[i]);
			a.text(animals[i]);
			$('#buttons').append(a);
		}
	};

	//Create the display of each animal
	function displayAnimals(){
		var animal = $(this).attr('data-name');
		var api= "http://api.giphy.com/v1/gifs/search?q="+ animal +"&limit=10&api_key=dc6zaTOxFJmzC";
		
		
		//ajax pulls the data from giphy
		$.ajax({
			url: api,
			method: "GET",
		}).done(function(response) {
			console.log(response.data);
			var results= response.data;
			$('.items').empty();
			for (var i = 0; i < results.length; i++) {
				var p = $('<p>').text("Rating: " + results[i].rating);	
				var animalType=$('.items');
				var animalImage= $('<img>');
				animalImage.attr("src", results[i].images.fixed_height.url);
				animalImage.addClass("col-sm-4 colmove");
				animalType.append(p);
				animalType.append(animalImage);
			};
		});
	};
					
	renderbuttons();
	// $(document).on('click', '.movie', displayAnimals);
	$('.animalClass').on('click', displayAnimals)
	


	


});







// $(".animalType").click(function() {});



			