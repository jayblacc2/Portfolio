//variables
const scrollUp = document.querySelector('.scroll-up'),
  mobileMenu = document.querySelector('.menu-list'),
  menuIcon = document.querySelector('.menu-mobile'),
  form = document.querySelector('form'),
  myResume = document.querySelector('#my-resume'),
  modal = document.querySelector('.modal'),
  logoBrand = document.querySelector('.logo-brand'),
  links = document.querySelectorAll('.menu-item--link');

AOS.init({
  delay: 0,
  duration: 800,
  easing: 'ease',
  once: false,
  mirror: false,
});
/**/

menuIcon.addEventListener('click', () => {
  if (mobileMenu.style.width === '100%') {
    mobileMenu.style.width = '0%';
  } else {
    mobileMenu.style.width = '100%';
    closeMobileMenu();
  }
});

document.addEventListener('scroll', slideUpBtn);

myResume.addEventListener('click', () => {
  addModalClass(modal, 'open');
});

modal.addEventListener('click', () => {
  modal.classList.remove('open');
  document.body.style['overflow'] = 'scroll';
});

// scrollT to Top button
function slideUpBtn() {
  if (
    document.body.scrollTop > 350 ||
    document.documentElement.scrollTop < 350
  ) {
    scrollUp.style.bottom = '-6rem';
  } else {
    scrollUp.style.bottom = '1rem';
  }
}

function addModalClass(selector, classSelector) {
  selector.classList.add(classSelector);
  document.body.style['overflow'] = 'hidden';
}

function closeMobileMenu() {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      mobileMenu.style.width = '0%';
    });
  });
}
