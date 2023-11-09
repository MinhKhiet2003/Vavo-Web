
var prevScrollPos = window.pageYOffset;
var contact = document.querySelector(".contact");

window.addEventListener("scroll", function() {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        contact.classList.remove("fadeIn");
        contact.classList.add("fadeOut");
    } else {
        contact.classList.remove("fadeOut");
        contact.classList.add("fadeIn");
    }

    prevScrollPos = currentScrollPos;
});

const fixedMenu = document.querySelector('.fixed-menu');
const menuButton = document.querySelector('.fa-bars');
const close = document.querySelector('.fa-x');


menuButton.addEventListener('click', function() {
    if (fixedMenu.style.transform === 'translateX(0%)') {
        fixedMenu.style.transform = 'translateX(100%)';
    } else {
        fixedMenu.style.transform = 'translateX(0%)';
    }
});
close.addEventListener('click', function() {
    if (fixedMenu.style.transform === 'translateX(0%)') {
        fixedMenu.style.transform = 'translateX(100%)';
    } else {
        fixedMenu.style.transform = 'translateX(0%)';
    }
});
