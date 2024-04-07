document.addEventListener('DOMContentLoaded', function() {
    // Get all navbar links
    const navbarLinks = document.querySelectorAll('.navbar a');

    // Loop through each navbar link
    navbarLinks.forEach(link => {
        // Add click event listener to each link
        link.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Get the target section ID from the href attribute
            const targetId = this.getAttribute('href').substring(1);
            // Find the corresponding section element
            const targetSection = document.getElementById(targetId);
            
            // Scroll to the target section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});
