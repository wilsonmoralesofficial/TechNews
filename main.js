console.log("Hello World");
document.querySelector('.menu-btn').addEventListener('click', () =>{
    document.querySelector('.nav-menu').classList.toggle('show');
})

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news-cards', {delay: 500});
ScrollReveal().reveal('.cards-banner-one', {delay: 600});
ScrollReveal().reveal('.cards-banner-two', {delay: 600});
ScrollReveal().reveal('.social', {delay: 600});