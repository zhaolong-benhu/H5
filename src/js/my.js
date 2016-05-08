$(function(){
  	var mySwiper = $('.swiper-container').swiper({
	    mode:'vertical',
	    onFirstInit:function(e){
	    	$('#loading').hide();
	    	$('.child').addClass('play');
	    },
	    onSlideChangeStart: function(){
			setTimeout(function(){
				$('.swiper-slide-active').addClass('play').find('.ani').addClass('play');

			}, 300);
		}
  	});
	$('.btn-down-arraw').hammer().bind('tap',function(){
        setTimeout(function(){
        	mySwiper.swipeNext();
        	$('.swiper-slide-active').addClass('play').find('.ani').addClass('play');
        }, 30);

	});
	$('.btn').hammer().bind('tap',function(){
		location.href = $(this).data('target');
    alert("zl");
	})

});
