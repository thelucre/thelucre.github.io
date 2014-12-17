$(document).ready( function() {

	//$('.main-logo').fitText();

	var canvas = $('#canvas')[0];
	var context = canvas.getContext("2d");

	var carousel = $('#myCarousel');

	canvas.width = carousel.width();
	canvas.height = carousel.height();
	$('#canvas').instapixel( {
		'imgURL' : 'img/header.jpg',
		'pixelSize' : $('#sizeRange')[0].value
	});
});

$(window).on('resize', function() {
	resizeCanvas();
});

$('#sizeRange').on('change', function(e) {
	var value = e.target.value;
	console.log(value);
	$('#canvas').data('instapixel').redraw({ 'size' : value });
});

function resizeCanvas() {
	var canvas = $('#canvas')[0];
	var context = canvas.getContext("2d");

	var carousel = $('#myCarousel');

	canvas.width = carousel.width();
	canvas.height = carousel.height();
	$('#canvas').data('instapixel').redraw({ 'resize' : true });
}