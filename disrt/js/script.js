// Select Dom item

const menuBtn = document.querySelector('.menu-btn');
const navImg = document.querySelector('.nav__img');
const navContent = document.querySelector('.nav__content');
const navList = document.querySelector('.nav__list');
const navItem = document.querySelectorAll('.nav__item');

// Set intial state of menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        navContent.classList.add('show');
        navList.classList.add('show');
        navImg.classList.add('show');
        navItem.forEach(item => 
            item.classList.add('show')
        );

        // Set Menu State
        showMenu = true

    }else {
        menuBtn.classList.remove('close');
        navContent.classList.remove('show');
        navList.classList.remove('show');
        navImg.classList.remove('show');
        navItem.forEach(item => 
            item.classList.remove('show')
        );

        showMenu = false;
    }
} 


