$(function() {

	$('#lightSlider').lightSlider({
    gallery: true,
    item: 1,
    loop:true,
    slideMargin: 0,
    thumbItem: 6
	});

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


