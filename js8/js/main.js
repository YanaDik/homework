$(document).ready(function() {
	// tabs
	$('[data-tab-nav]').on('click', function() {
		let that = $(this);
		let tabs = $('.about__tab-content > div');
		$('.about__tab-menu li').removeClass('active');
		$(that).addClass('active');
		$(tabs).removeClass('active');
		$('[' + $(that).attr('data-tab-nav') + ']').addClass('active');
	});

	$('#about__circle').circliful({
		animation: 0,
		animationStep: 6,
		foregroundBorderWidth: 5,
		backgroundColor: '#787c9b',
		fillColor: 'transparent',
		percent: 100 / 10 * 7.8,
		foregroundBorderWidth: 4,
		backgroundBorderWidth: 2,
		text: '7.8',
		textStyle: 'font-size: 32px;',
		animation: 1,
		animationStep: 5,
		foregroundColor: '#13e28d',
		replacePercentageByText: '',
		textColor: '#666'
	});
});
