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
    closeMobileMenu();
  } else {
    mobileMenu.style.width = '100%';
  }
});

document.addEventListener('scroll', slideUpBtn);
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

myResume.addEventListener('click', () => {
  addClass(modal, 'open');
});

document.querySelector('.modal').addEventListener('click', () => {
  modal.classList.remove('open');
});

function addClass(selector, classSelector) {
  selector.classList.add(classSelector);
}

function closeMobileMenu() {
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      mobileMenu.style.width = '0%';
    });
  });
}

closeMobileMenu();
