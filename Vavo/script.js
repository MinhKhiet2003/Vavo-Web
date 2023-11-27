
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
const menuButton = document.querySelector('.Menu_bar');
const fixedCart = document.querySelector('.fixed-cart');
const cartButton = document.querySelector('.Menu_Cart');
const fixedSeach = document.querySelector('.fixed-seach');
const SeachButton = document.querySelector('.Menu_Seach');
const close1 = document.querySelector('.close1');
const close2 = document.querySelector('.close2');
const close3 = document.querySelector('.close3');


menuButton.addEventListener('click', function() {
    if (fixedMenu.style.transform === 'translateX(0%)') {
        fixedMenu.style.transform = 'translateX(100%)';
    } else {
        fixedMenu.style.transform = 'translateX(0%)';
    }
});

cartButton.addEventListener('click', function() {
    if (fixedCart.style.transform === 'translateX(0%)') {
        fixedCart.style.transform = 'translateX(100%)';
    } else {
        fixedCart.style.transform = 'translateX(0%)';
    }
});
close1.addEventListener('click', function() {
    if (fixedMenu.style.transform === 'translateX(0%)') {
        fixedMenu.style.transform = 'translateX(100%)';
    } 
});

SeachButton.addEventListener('click', function() {
    if (fixedSeach.style.transform === 'translateX(0%)') {
        fixedSeach.style.transform = 'translateX(100%)';
    } else {
        fixedSeach.style.transform = 'translateX(0%)';
    }
});
close2.addEventListener('click', function() {
    if (fixedCart.style.transform === 'translateX(0%)') {
        fixedCart.style.transform = 'translateX(100%)';
    }
});
close3.addEventListener('click', function() {
    if (fixedSeach.style.transform === 'translateX(0%)') {
        fixedSeach.style.transform = 'translateX(100%)';
    }
});

