
var showImage = [];
var showImageAnimate = [];
var URL = "http://api.giphy.com/v1/gifs/search?q=";
var api = "AXdF1h7rlPn4WIoRpEGtPtm9rOqIkbFf";
var limit = 10;
var searchItem = '';
var input = '';
var imageData = '';
var imageDataAnimate = '';

function addImageButton() {
	var giphy = $.get(URL + searchItem + "&api_key=" + api + "&limit=10");
				giphy.done(function(response) {
				  imageData = response.data;
				  console.log(imageData);
				  showImage = [];
				  for(var i=0; i < imageData.length; i++){
					showImage.push(imageData[i].images.downsized.url);
					showImageAnimate.push(imageData[i].images.downsized_still.url);
					$("#display").append('<img src="' + showImage[i] + '" />');
					};
			});
};

function addImageSubmit() {
	var giphy = $.get(URL + input + "&api_key=" + api + "&limit=10");
				giphy.done(function(response) {
				console.log(response);
				  imageData = response.data;
				  console.log(imageData);
				  showImage = [];
				  for(var i=0; i < imageData.length; i++){
					showImage.push(imageData[i].images.downsized.url);
					$("#display").append('<img src="' + showImage[i] + '" />');
					};
			});
};


function removeImage() {
	
	for(var i = 0; i < showImage.length; i++) {
		$("#display img:last-child").remove();
	};
};

function addButton() {
	$('.container').append('<input type="button" class="btn btn-danger searches" value="' + input + '"/>');
};

$(".searches").on("click", function() {
	searchItem = $(this).val();
	removeImage();
	addImageButton();
});


	function pressSubmit() {
		input = $("#box").val();
		removeImage();
		addImageSubmit();
		addButton();
	};

 	function animateGIF() {
	
 		$(".gif").on("click", function() {
		  // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
			$("#bg").attr('src',"img/picture1.jpg");
		}); 
	}; 
	