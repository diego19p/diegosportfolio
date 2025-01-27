document.addEventListener("DOMContentLoaded", function () {
    const scrollDownLink = document.querySelector(".scroll-down");
    const socialLinks = document.querySelector(".social-links");
    const darkModeToggle = document.getElementById("dark-mode-toggle");
  
    if (scrollDownLink) {
      scrollDownLink.addEventListener("click", function (event) {
        event.preventDefault();
        const aboutSection = document.querySelector("#about");
  
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: "smooth" });
          socialLinks.classList.remove("social-links-hidden");
        }
      });
    }
  
    if (darkModeToggle) {
      darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const isDarkMode = document.body.classList.contains("dark-mode");
        darkModeToggle.textContent = isDarkMode ? "☀️" : "🌙";
      });
    }
  
    window.addEventListener("error", function (event) {
      console.error("Error:", event.message);
    });
  });
