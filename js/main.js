document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-button');
    const nav = document.getElementById('main-nav');
    const dropdown = document.querySelector('.dropdown');

    // Toggle main navigation
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            document.body.classList.toggle('nav-active');
        });
    }

    // Handle dropdown functionality
    if (dropdown) {
        const dropdownLink = dropdown.querySelector('a');
        dropdownLink.addEventListener('click', function(e) {
            // Check if we are in mobile view (hamburger is visible)
            if (window.getComputedStyle(hamburger).display !== 'none') {
                // Prevent the default link behavior
                e.preventDefault();
                // Toggle the submenu
                dropdown.classList.toggle('submenu-active');
            }
        });
    }

    // Close menus when clicking anywhere else on the document
    document.addEventListener('click', function(e) {
        // Close nav if it's open and the click is outside the nav
        if (document.body.classList.contains('nav-active') && !nav.contains(e.target) && e.target !== hamburger) {
            document.body.classList.remove('nav-active');
        }
    });
});
