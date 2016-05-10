$(document).ready(function () {

	var animals= ["dog", "cat", "rabbit", "hamster", "skunk", "goldfish", "bird", "ferret", "turtle", "sugar glider", "chinchilla", "hedgehog", "hermit crab", "gerbil", "pygmy goat", "chicken", "capybara", "teacup pig", "serval", "salamander", "frog"];
	

	function displayAnimals(){
		var api= "http://api.giphy.com/v1/gifs/search?q="+ animal +"&api_key=dc6zaTOxFJmzC";
		var animal= %(this).attr('data-name');
		
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
	};
	displayAnimals();

});

// $(".animalType").click(function() {});


// function renderbuttons(){
// 				$("#buttons").empty();
// 					for (var i =0; i<animals.length; i++) {
// 						var a = $('<button>');
// 						a.addClass("animal");
			