$(document).ready(function () {

	var title= "dogs";
	var api= "http://api.giphy.com/v1/gifs/search?q=funny+cat&api_key=dc6zaTOxFJmzC";

	$.ajax({
		url: api,
		method: GET,
	}).done(function(response) {
		console.log(response);
	});
});