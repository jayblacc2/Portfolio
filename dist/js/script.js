//variables
const scrollUp = document.querySelector('.scroll-up'),
  mobileMenu = document.querySelector('.menu-list'),
  menuIcon = document.querySelector('.menu-mobile'),
  form = document.querySelector('form'),
  myResume = document.querySelector('#my-resume');

AOS.init({
  delay: 0,
  duration: 800,
  easing: 'ease',
  once: false,
  mirror: false,
});
/**/

menuIcon.addEventListener('click', () => {
  // if (mobileMenu.style.width == 1) {
  //   mobileMenu.style.width = '100%';
  // } else {
  //   mobileMenu.style.width = 0;
  // }

  if (mobileMenu.style.width === '100%') {
    mobileMenu.style.width = '0%';
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

form.addEventListener('submit', () => {
  const inputs = (document.querySelectorAll('input').value = '');
  const textarea = (document.querySelector('textarea').value = '');
  console.log(inputs);

  setTimeout(() => {
    inputs.forEach((input) => {
      return (input.value = '');
    });
  }, 3000);
});

myResume.addEventListener('click', () => {
  document.querySelector('.modal').classList.add('open');
});
