
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
	}
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
				var animalDiv=$("<div>");
				var animalImage= $('<img>');
				animalImage.attr("src", results[i].images.fixed_height_still.url);
				animalImage.attr("data-state", "still")
				animalImage.attr("data-still", results[i].images.fixed_height_still.url)
				animalImage.attr("data-animate", results[i].images.fixed_height.url)
				animalImage.addClass("animals");
				animalDiv.addClass("col-md-3");
				animalDiv.append(p);
				animalDiv.append(animalImage);
				animalType.append(animalDiv);
				
			}
		});
	}
	//This create a new button when clicked
	$('.buttonmove').on('click', function(){
		var animalSelection= $('#exampleInputName2').val().trim();
		animals.push(animalSelection);
		renderbuttons();
		$('.animalClass').on('click', displayAnimals);
		return false;

	});

	//On click of the image it will pause or animate it
	$(document).on('click', '.animals', function(){
		var state = $(this).attr('data-state'); 

		if ( state == 'still' ){
	                $(this).attr('src', $(this).data('animate'));
	                $(this).attr('data-state', 'animate');
	            }else{
	                $(this).attr('src', $(this).data('still'));
	                $(this).attr('data-state', 'still');
	            }
	    });


	//This calls the buttons to render and be ready for on on click			
	renderbuttons();
	$('.animalClass').on('click', displayAnimals);
	



});







			