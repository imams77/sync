function showTopics(){
	$('#workshop-topics__list').toggleClass('active')
}

$(document).ready(function(){
    $(".numeric").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl/cmd+A
            (e.keyCode == 65 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+C
            (e.keyCode == 67 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: Ctrl/cmd+X
            (e.keyCode == 88 && (e.ctrlKey === true || e.metaKey === true)) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
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
    $('.transfer-date').datepicker();
	$('.datepicker').datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "-50:-8",
        // maxDate: "+1D"
    });
	$('.separate-line').each(function(){
		var get_width = $(this).data('width');
		$(this).css({'width':get_width});
	})
});