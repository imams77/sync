function showTopics(){
	$('#workshop-topics__list').toggleClass('active')
}

$(document).ready(function(){
	$('.owl-carousel').owlCarousel({
        // loop:true,
        margin:10,
        navigation: false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
              }
            // false,
        }
    })
    $('.popup-youtube').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function(url) {
                        var m = url.match(/[\\?\\&]v=([^\\?\\&]+)/);
                        if ( !m || !m[1] ) return null;
                        return m[1];
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                }
            }
        }
    })
	$('.datepicker').datepicker();
	$('.separate-line').each(function(){
		var get_width = $(this).data('width');
		$(this).css({'width':get_width});
	})
});