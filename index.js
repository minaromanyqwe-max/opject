document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Navbar Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-list .nav-link');

    // Function to toggle the menu
    function toggleMenu() {
        navbar.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        if (navbar.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times'); // Change to 'X' icon when open
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }

    menuToggle.addEventListener('click', toggleMenu);

    // Close menu when a link is clicked (useful for single-page apps)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbar.classList.contains('active')) {
                toggleMenu(); // Close the menu
            }
        });
    });

    // 2. Scrollspy - Highlight active menu item based on scroll position
    const sections = document.querySelectorAll('section');

    function scrollActive() {
        // Get the current scroll position plus a small offset (like the header height)
        const scrollY = window.pageYOffset + 70;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop;
            // Get the ID of the section (e.g., 'home', 'chefs')
            const sectionId = current.getAttribute('id');
            const navLink = document.querySelector(nav-list .a[href*='${sectionId}']);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    // Current section is in view
                    navLink.classList.add('active');
                } else {
                    // Section is out of view
                    navLink.classList.remove('active');
                }
            }
        });
    }

    // Run the function on initial load and on scroll
    window.addEventListener('scroll', scrollActive);
    scrollActive(); // Initial check

    // 3. Simple Form Submission Handling (Prevents default and gives feedback)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Stop the default form submission

            // Simple validation check
            const nameInput = document.getElementById('name-input').value.trim();
            const emailInput = document.getElementById('email-input').value.trim();

            if (nameInput === "" || emailInput === "") {
                alert("Please fill in all required fields (Name and Email).");
                return;
            }

            // Simulate sending data to a server
            console.log("Form Data Sent:", new FormData(this));

            alert("Thank you! Your message has been sent successfully.");

            // Optionally, clear the form after successful submission
            this.reset();
    });
}
});
