
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


  document.addEventListener("DOMContentLoaded", function () {
  const originalMenu = document.querySelector(".main-menu");
  if (!originalMenu) return;

  // Clone the menu
  const bottomMenu = originalMenu.cloneNode(true);
  bottomMenu.classList.add("bottom-menu-clone");

  // Style it dynamically
  Object.assign(bottomMenu.style, {
    position: "fixed",
    top: "0",
    left: "0",
    right: "0",
    backgroundColor: "#fff",
    padding: "10px 20px",
    zIndex: "9999",
    transform: "translateY(-100%)",
    transition: "transform 0.3s ease",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  });

  // Append to body
  document.body.appendChild(bottomMenu);

  // Show/hide logic
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Scrolling down
      bottomMenu.style.transform = "translateY(0)";
    } else {
      // Scrolling up
      bottomMenu.style.transform = "translateY(-100%)";
    }

    lastScrollY = currentScrollY;
  });
});