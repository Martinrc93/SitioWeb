document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger-button');
    const nav = document.getElementById('main-nav');
    const dropdown = document.querySelector('.dropdown');
    const dropdownLink = document.querySelector('.dropdown > a');

    // Toggle main navigation
    if (hamburger) {
        hamburger.addEventListener('click', function(e) {
            e.stopPropagation();
            document.body.classList.toggle('nav-active');
        });
    }

    // Handle dropdown functionality
    if (dropdownLink) {
        dropdownLink.addEventListener('click', function(e) {
            // Check if we are in mobile view (hamburger is visible)
            if (window.getComputedStyle(hamburger).display !== 'none') {
                // If the submenu is already open, let the link navigate
                if (dropdown.classList.contains('submenu-active')) {
                    return;
                } else {
                    // If the submenu is closed, prevent navigation and open it
                    e.preventDefault();
                    // Close other open submenus if any
                    document.querySelectorAll('.submenu-active').forEach(item => {
                        item.classList.remove('submenu-active');
                    });
                    dropdown.classList.add('submenu-active');
                }
            }
        });
    }

    // Close menus when clicking anywhere else on the document
    document.addEventListener('click', function(e) {
        // Close nav if it's open and the click is outside the nav
        if (document.body.classList.contains('nav-active') && !nav.contains(e.target)) {
            document.body.classList.remove('nav-active');
        }

        // Close any open submenu if the click is outside the dropdown
        if (dropdown && !dropdown.contains(e.target)) {
            dropdown.classList.remove('submenu-active');
        }
    });
});