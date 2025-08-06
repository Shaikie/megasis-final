
  // Smooth scroll to top when clicked
  document.querySelector('#back-top a').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });


  const backTop = document.getElementById('back-top');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
      backTop.style.display = 'block';
    } else {
      backTop.style.display = 'none';
    }
  });


  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.main-menu nav ul');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });