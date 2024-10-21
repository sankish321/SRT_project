const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

// header container
ScrollReveal().reveal(".header__container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container h1", {
  ...scrollRevealOption,
  delay: 500,
});

// about container
ScrollReveal().reveal(".about__image img", {
  ...scrollRevealOption,
  origin: "left",
});

ScrollReveal().reveal(".about__content .section__subheader", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".about__content .section__header", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".about__content .section__description", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about__btn", {
  ...scrollRevealOption,
  delay: 2000,
});

// room container
ScrollReveal().reveal(".room__card", {
  ...scrollRevealOption,
  interval: 500,
});

// service container
ScrollReveal().reveal(".service__list li", {
  ...scrollRevealOption,
  interval: 500,
  origin: "right",
});


document.addEventListener("DOMContentLoaded", function () {
  const loginModal = document.getElementById("login-modal");
  const loginBtn = document.getElementById("login-btn");
  const closeBtn = document.querySelector(".close-btn");
  const loginForm = document.getElementById("login-form");
  const errorText = document.getElementById("login-error");
  const navBar = document.querySelector("nav");

  // Show the modal when login button is clicked
  loginBtn.onclick = function () {
      loginModal.style.display = "flex";  // Show modal
  };

  // Close the modal when the close button is clicked
  closeBtn.onclick = function () {
      loginModal.style.display = "none";
  };

  // Close the modal if user clicks outside the modal
  window.onclick = function (event) {
      if (event.target === loginModal) {
          loginModal.style.display = "none";
      }
  };

  // Authentication Logic
  loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Hardcoded manager credentials
      const managerUsername = "manager";
      const managerPassword = "password123";

      if (username === managerUsername && password === managerPassword) {
          alert("Login successful. Welcome Manager!");

          // Replace Login button with a profile picture
          loginModal.style.display = "none";  // Close the modal after login
          const profilePic = document.createElement("img");
          profilePic.src = "assets/profile-pic.png";  // Replace with your profile picture path
          profilePic.classList.add("profile-pic");

          // Remove the login button and replace with profile pic
          loginBtn.remove();  
          navBar.appendChild(profilePic);  // Add profile pic to navbar
      } else {
          errorText.style.display = "block";  // Show error message
      }
  });
});
