document.addEventListener('DOMContentLoaded', () => {
    const hamburgerButton = document.getElementById('hamburger-button');

    if (hamburgerButton) {
        hamburgerButton.addEventListener('click', () => {
            document.body.classList.toggle('nav-active');
        });
    }
});