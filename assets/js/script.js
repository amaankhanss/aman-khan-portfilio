// Smooth Scroll
document.querySelectorAll('a[href^="body"]').forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
new Typed("#typed", {
  strings: ["Aman Khan", "Front-End Developer", "Web Designer"],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
  
});




const eduBars = document.querySelectorAll(".progress-fill");

const eduObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const value = entry.target.dataset.progress;
        entry.target.style.width = value + "%";
      }
    });
  },
  { threshold: 0.6 }
);

eduBars.forEach(bar => eduObserver.observe(bar));

const bars = document.querySelectorAll(".level-progress");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.width =
          entry.target.dataset.level + "%";
      }
    });
  },
  { threshold: 0.6 }
);

bars.forEach(bar => observer.observe(bar));


document.getElementById("emailLink").addEventListener("click", function (e) {
  e.preventDefault();

  const email = "digitalorbitals7819@gmail.com";
  const subject = "Project Inquiry";

  const isMobile =
    /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

  if (isMobile) {
    // MOBILE → default email app
    window.location.href =
      `mailto:${email}?subject=${encodeURIComponent(subject)}`;
  } else {
    // DESKTOP → Gmail web
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`,
      "_blank"
    );
  }
});


// ===== MOBILE NAV TOGGLE =====
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector(".nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenu.classList.toggle("active");
});

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


