// OPEN MENU
// Busca elemento con id 'menu-icon'
let menu = document.querySelector('#menu-icon');
// Busca elemento con clase navlist
let navlist = document.querySelector('.navlist');


menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}
// Para que al hacer scroll desaparezca el menu
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}

//Para que el color del menú cambie al hacer scroll
const header = document.querySelector('header');
window.addEventListener('scroll', () => { 
    header.classList.toggle('sticky', this.window.scrollY > 80);
})