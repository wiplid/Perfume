document.addEventListener('DOMContentLoaded', function() {
    const burger = document.querySelector('.burger');
    const menu = document.querySelector('.menu');
    
    burger.addEventListener('click', function() {
        this.classList.toggle('active');
        menu.classList.toggle('open');
    });
    
    const menuLinks = menu.querySelectorAll('a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            burger.classList.remove('active');
            menu.classList.remove('open');
            document.body.style.overflow = '';
        });
    });
});