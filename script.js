// Toggle Dark Mode
const themeToggle = document.getElementById("theme-toggle");

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const icon = themeToggle.querySelector("i");
    icon.classList.toggle("fa-moon");
    icon.classList.toggle("fa-sun");
  });
}

// Form submit behavior (demo only)
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for booking! We’ll contact you shortly.");
    this.reset();
  });
}

const loginModal = document.getElementById("loginModal");
const mainContent = document.getElementById("mainContent");
const openBtn = document.getElementById("openLogin");

// Create and add close button inside modal
const closeBtn = document.createElement("span");
closeBtn.classList.add("close-modal");
closeBtn.innerHTML = "&times;";
loginModal.querySelector(".login-modal-content").appendChild(closeBtn);

openBtn.addEventListener("click", () => {
  loginModal.classList.add("show");
  mainContent.classList.add("blur");
});

closeBtn.addEventListener("click", () => {
  loginModal.classList.remove("show");
  mainContent.classList.remove("blur");
});

window.addEventListener("click", (e) => {
  if (e.target === loginModal) {
    loginModal.classList.remove("show");
    mainContent.classList.remove("blur");
  }
});

