function homeCarousel() {
	$('#backstretch').backstretch([
      "./assets/images/Andrew_AAred.jpg"
    , "./assets/images/brown1.JPG"
    , "./assets/images/brown2.JPG"
  ], {duration: 5000, fade: 1000});
}

function contentView() {
	$('#programming').show();

	$(".link").on('mouseover', function(){
		$('.link').css('font-weight', 'normal');
		$(this).css({'font-weight': 'bold', 'transition': '1s'})
		$(".about-container").hide();
		var linkToShow = $(this).attr('href');
		$(linkToShow).show();
	})
}


function devCarousel() {

	$("#rondellPages > div").rondell({
		preset: "pages",
		size: { width: 700 , height: 400 },
		center: { left: 350, top: 200 },
		itemProperties:
			{
		    delay: 100,
		    cssClass: 'rondellItem',
		    size: {
		        width: 700,
		        height: 400
		    },
		    sizeFocused: {
		        width: 700,
		        height: 400
		    }
			}
	});
}

$(document).ready(function() {

		$(".container").hide();
	  homeCarousel();
	  contentView();
	  devCarousel();
})