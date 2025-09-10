document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-button');

    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', () => {
            document.body.classList.toggle('nav-active');
        });
    }

    const dropdowns = document.querySelectorAll('.dropdown > a');
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', (e) => {
            if (document.body.classList.contains('nav-active')) {
                e.preventDefault();
                const parent = dropdown.parentElement;
                parent.classList.toggle('submenu-active');
            }
        });
    });
});