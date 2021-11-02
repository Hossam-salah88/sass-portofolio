// Select Dom item

const menuBtn = document.querySelector('.menu-btn');
const navImg = document.querySelector('.nav__img');
const navContent = document.querySelector('.nav__content');
const navMenu = document.querySelector('.nav__menu');
const navItem = document.querySelectorAll('.nav__item');

// Set intial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        navContent.classList.add('show');
        navMenu.classList.add('show');
        navImg.classList.add('show');
        navItem.forEach(item => 
            item.classList.add('show')
        );

        // Set Menu State
        showMenu = true

    }else {
        menuBtn.classList.remove('close');
        navContent.classList.remove('show');
        navMenu.classList.remove('show');
        navImg.classList.remove('show');
        navItem.forEach(item => 
            item.classList.remove('show')
        );

        showMenu = false;
    }
} 


