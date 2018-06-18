//var slider = document.getElementsByClassName("slider");
//var output = slider.siblings("")
//output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)

$(function() {
	$('.slider').click(function (){
		$(this).siblings('.slider-value').html(this.value);
	});
});
