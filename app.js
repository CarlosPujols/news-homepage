var menuButton = document.getElementById('menu-button');
var navBar = document.getElementById('navbar');

menuButton.addEventListener("click", showMenu);

function  showMenu(){
    console.log('Clicked menu button');
    navBar.classList.toggle('active');
    menuButton.classList.toggle('close-menu');
}