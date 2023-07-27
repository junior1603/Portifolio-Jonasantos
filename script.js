

//responsivo
const Menu = document.querySelector('.menu')
const Bar = document.querySelector('.nav-menu')


Menu.addEventListener('click', () => {
  Menu.classList.toggle('ativo')
  Bar.classList.toggle('ativo')
})


document.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    Menu.classList.remove('ativo');
    Bar.classList.remove('ativo');
  });
});

