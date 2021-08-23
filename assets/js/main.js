let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    // đổi icon X
    menu.classList.toggle('fa-times');
    //them , xoa acttive
    navbar.classList.toggle('active');
}

let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header .navbar a');

// console.log(navLinks)

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    //     
    section.forEach(sec => {
        let top = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 90; //.home .home-slider .sild: padding-top: 9rem;
        let id = sec.getAttribute('id');

        //    console.log(id); 
        console.log({ sec })
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*=' + id + ']').classList.add('active');
            });
        }
    })
}

document.querySelector('#search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active');
}
document.querySelector('#close').onclick = () => {
        document.querySelector('#search-form').classList.toggle('active');
    }
    // SD https://swiperjs.com/demos#autoplay
var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
});
// cho review
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }
});

function loader() {
    document.querySelector('.loader-container').classList.add('fade-out')
}

function Fadeout() {
    setInterval(loader, 3000);
}
window.onload = Fadeout();