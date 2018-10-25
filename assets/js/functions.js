var pContainerHeight = $('.bird-box').height();


$(window).scroll(function () {
	var fadeOne = $('.animation-test'),
	wh = $(window).height(),
	dt = $(document).scrollTop(),
	fadeOneView = wh - (fadeOne.offset().top - dt);
    $('.animation-test').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            fadeOne.css('opacity', 1 - Math.min(1 / wh * fadeOneView, 1));
			console.log("topOfWindow" + topOfWindow , ",dt= " + dt , ",wh = " + wh, ",fadeOneView= " + fadeOneView);
        }
    });
});


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if (wScroll <= pContainerHeight) {

    $('.logo').css({
      'transform' : 'translate(0px, '+ wScroll /2 +'%)'
    });

    $('.back-bird').css({
      'transform' : 'translate(0px, '+ wScroll /4 +'%)'
    });

    $('.fore-bird').css({
      'transform' : 'translate(0px, -'+ wScroll /40 +'%)'
    });

  }

  // Landing Elements
  if(wScroll > $('.clothes-pics').offset().top - ($(window).height() / 1.2)) {

    $('.clothes-pics figure').each(function(i){

      setTimeout(function(){
        $('.clothes-pics figure').eq(i).addClass('is-showing').addClass('hover');
      }, (700 * (Math.exp(i * 0.14))) - 700);
    });
  }
  
  // Promoscope
  if(wScroll > $('.large-window').offset().top - $(window).height()){

    $('.large-window').css({'background-position':'center '+ (wScroll - $('.large-window').offset().top) +'px'});

    var opacity = (wScroll - $('.large-window').offset().top + 400) / (wScroll / 5);

    $('.window-tint').css({'opacity': opacity});

  }


  // Floating Elements

  if(wScroll > $('.blog-posts').offset().top - $(window).height()){

    var offset = (Math.min(0, wScroll - $('.blog-posts').offset().top +$(window).height() - 350)).toFixed();

    $('.post-1').css({'transform': 'translate('+ offset +'px, '+ Math.abs(offset * 0.2) +'px)'});

    $('.post-3').css({'transform': 'translate('+ Math.abs(offset) +'px, '+ Math.abs(offset * 0.2) +'px)'});

  }
  
  //block reveal
   if(wScroll > $('.content__title').offset().top - $(window).height()){
	   $('.content__title').addClass('block-revealer');
   }
  
});

