const navbar = document.querySelector('nav');
window.addEventListener('scroll', function() {
  if(this.scrollY > 20 ) {
    navbar.classList.add('sticky');
  } else {
    navbar.classList.remove('sticky')
  }
});