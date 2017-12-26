$(function() {

	$('.mobile-menu').click( function(){
		$('.user-block').slideToggle();
	});

	$('.filter__mobile').click( function(){
		$('.filter').slideToggle();
	});

	$('.filter select').material_select();
	$('.content__info-top select').material_select();
	$('.form-block select').material_select();
	$('.reviews select').material_select();

	$('.category__item-hidden').slideUp(200);

	$('.see-more').on('click', function() {
		$(this).closest('.filter__form__category').find('.category__item-hidden').slideToggle(200);
	});

});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1,
    smartSpeed: 200,
    nav:true,
    loop: true
  });
}); 


// the following to the end is whats needed for the thumbnails.
jQuery( document ).ready(function() {
	 
  
        // 1) ASSIGN EACH 'DOT' A NUMBER
			dotcount = 1;
	 
			jQuery('.owl-dot').each(function() {
			  jQuery( this ).addClass( 'dotnumber' + dotcount);
			  jQuery( this ).attr('data-info', dotcount);
			  dotcount=dotcount+1;
			});
			
			 // 2) ASSIGN EACH 'SLIDE' A NUMBER
			slidecount = 1;
	 
			jQuery('.owl-item').not('.cloned').each(function() {
			  jQuery( this ).addClass( 'slidenumber' + slidecount);
			  slidecount=slidecount+1;
			});
			
			// SYNC THE SLIDE NUMBER IMG TO ITS DOT COUNTERPART (E.G SLIDE 1 IMG TO DOT 1 BACKGROUND-IMAGE)
			jQuery('.owl-dot').each(function() {
			
          grab = jQuery(this).data('info');

          slidegrab = jQuery('.slidenumber'+ grab +' img').attr('src');
          console.log(slidegrab);

          jQuery(this).css("background-image", "url("+slidegrab+")");  

      });
			
			// THIS FINAL BIT CAN BE REMOVED AND OVERRIDEN WITH YOUR OWN CSS OR FUNCTION, I JUST HAVE IT
        // TO MAKE IT ALL NEAT 
			amount = jQuery('.owl-dot').length;
			gotowidth = 100/amount;
			
			jQuery('.owl-dot').css("width", gotowidth+"%");
			newwidth = jQuery('.owl-dot').width();
			jQuery('.owl-dot').css("height", newwidth+"px");
			
			
	
});
