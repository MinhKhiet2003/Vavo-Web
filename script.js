
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

// const productBlocks = document.querySelectorAll('.product_block');

//   // Lặp qua từng phần tử và thêm sự kiện click
//   productBlocks.forEach((productBlock, index) => {
//     productBlock.addEventListener('click', () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//       // Tải nội dung từ tệp new_content.html bằng XMLHttpRequest hoặc Fetch API
//       fetch('./secondary_page/product.html')
//         .then(response => response.text())
//         .then(data => {
//           // Thay thế nội dung của container bằng nội dung mới
//           const container = document.querySelector('.container');
//           container.innerHTML = data;
//         })
//         .catch(error => {
//           console.error('Lỗi khi tải nội dung mới:', error);
//         });
//     });
//   });
function PayPage() {
    window.location.href = "/pay/pay.html";
}
var productBlocks = document.querySelectorAll('.sample');

productBlocks.forEach(function (block) {
    block.addEventListener('click', function () {
        window.location.href = '/secondary_page/product.html';
    });
});


  $(document).ready(function () {
    $("#addQuantity").click(function () {
        var qty = parseInt($("#quantity").val());
        if (!isNaN(qty)) {
            qty++;
            $("#quantity").val(qty);
        }
        return false;
    });

    $("#minusQuantity").click(function () {
        var qty = parseInt($("#quantity").val());
        if (!isNaN(qty) && qty > 1) {
            qty--;
            $("#quantity").val(qty);
        }
        return false;
    });
});

const images = ["/img/mau1.jpg", "/img/mau2.jpg", "/img/mau3.jpg", "/img/mau4.jpg"];
let currentIndex = 0;

const prevSlide = document.getElementById("prev-slide");
const nextSlide = document.getElementById("next-slide");
const imageDisplay = document.getElementById("image-display");

function showImage(index) {
    imageDisplay.src = images[index];
}

prevSlide.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
});

nextSlide.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
});
showImage(currentIndex);
