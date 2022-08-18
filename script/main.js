const menu = document.querySelector('.main-nav');
const menuBtn = document.querySelector('.mobile-menu');
const screenWitdh = window.screen.width;

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
});


if(screenWitdh <= 780) {
    menu.addEventListener('click', () => {
        menu.style.display = 'none';
    })
};

