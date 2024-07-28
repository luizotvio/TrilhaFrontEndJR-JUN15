const btnMenu = document.getElementById('btn-menu');
const menu = document.querySelector('.menu');
const iconMenu = document.getElementById('icon-menu');
// const btnSwitch = document.querySelector('.switch-label');

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('active');
  if (menu.classList.contains('active')) {
    iconMenu.src = '/assets/images/xmark-svgrepo-com.svg'
  } else {
    iconMenu.src = '/assets/images/menu-svgrepo-com.svg'
  };
})

// btnSwitch.addEventListener('click', () => {
//   let body = document.querySelector('body').style.cssText = 'color:#000;background:var(--background-gradient-white)';
// })

window.addEventListener('scroll', function () {
  const voltarTopo = document.querySelector('.topo');
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > 100) {
    voltarTopo.classList.add('show');
  } else {
    voltarTopo.classList.remove('show');
  }
});