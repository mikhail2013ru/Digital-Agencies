var link = document.querySelector('.m-mobile-link');
var close
var menu = document.querySelector('.m-mobile-menu');

link.addEventListener('click', function(e) {
    e.classList.add(menu);
    console.log(e);
});