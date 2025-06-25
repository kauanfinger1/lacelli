let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');    
}
const form = document.querySelector('.formulario');
  const mensagem = document.getElementById('mensagem-enviada');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

mensagem.style.display = 'block';

    form.reset();
});
