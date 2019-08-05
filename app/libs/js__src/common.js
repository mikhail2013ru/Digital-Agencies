var link = document.querySelector('.m-link');
var close = document.querySelector('.close-menu');
var menu = document.querySelector('.m-menu');


link.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('m-menu__active');
});

close.addEventListener('click', function(e) {
    e.preventDefault();
    menu.classList.toggle('m-menu__active');
});





// $(function () {
// 	var link = $('.m-mobile-link');
// 	var close = $('.close-menu');
// 	var menu = $('.m-mobile-menu');
	
// 	link.on('click', function (event) {
// 		event.preventDefault();
// 		menu.toggleClass('m-mobile-menu');
// 	});
// 	close.on('click', function (event) {
// 		event.preventDefault();
// 		menu.toggleClass('m-menu__active');
// 	});
	
// });