document.addEventListener("DOMContentLoaded", function() {
    var scrollDownLink = document.querySelector(".scroll-down");
    var socialLinks = document.querySelector(".social-links");

    if (scrollDownLink) {
        scrollDownLink.addEventListener("click", function(event) {
            event.preventDefault();
            var aboutSection = document.querySelector("#about");

            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: "smooth" });
                socialLinks.classList.remove("social-links-hidden");
            }
        });
    }
});