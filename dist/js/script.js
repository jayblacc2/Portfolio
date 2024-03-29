'use strict';

//variables
const scrollUp = document.querySelector('.scroll-up'),
  logoBrand = document.querySelector('.logo-brand'),
  mobileMenu = document.querySelector('.menu-list'),
  menuIcon = document.querySelector('.menu-mobile'),
  myResume = document.querySelector('#my-resume'),
  form = document.querySelector('form'),
  inputs = document.querySelectorAll('.validate-input'),
  modal = document.querySelector('.modal'),
  links = document.querySelectorAll('.menu-item--link');

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
