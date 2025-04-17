// Grab the menu icon and nav links
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.getElementById('nav-links');

// Add event listener to the hamburger menu
menuIcon.addEventListener('click', () => {
    // Toggle the 'active' class to show/hide links
    navLinks.classList.toggle('active');
});
