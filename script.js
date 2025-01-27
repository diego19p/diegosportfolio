document.addEventListener("DOMContentLoaded", function () {
    const scrollDownLink = document.querySelector(".scroll-down");
    const socialLinks = document.querySelector(".social-links");
  
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
  
    window.addEventListener("error", function (event) {
      console.error("Error:", event.message);
    });
});
