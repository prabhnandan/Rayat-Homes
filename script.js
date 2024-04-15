// Function to open the side navigation menu
function openNav() {
    document.getElementById("sideNav").style.width = "250px";
    document.body.style.overflow = "hidden"; // Prevent scrolling when side menu is open
    document.getElementById("header").classList.add("menu-open");
    // Add event listener to close side menu when clicking outside of it
    document.addEventListener('click', closeOnClickOutside);
}

// Function to close the side navigation menu
function closeNav() {
    document.getElementById("sideNav").style.width = "0";
    document.body.style.overflow = ""; // Re-enable scrolling when side menu is closed
    document.getElementById("header").classList.remove("menu-open");
    // Remove event listener when side menu is closed
    document.removeEventListener('click', closeOnClickOutside);
}

// Function to toggle the side navigation menu
function toggleNav() {
    var sideNavWidth = document.getElementById("sideNav").style.width;
    if (sideNavWidth === "250px") {
        closeNav();
    } else {
        openNav();
    }
}

// Function to close side menu when clicking outside of it
function closeOnClickOutside(event) {
    var sideNav = document.getElementById("sideNav");
    var hamburger = document.getElementById("hamburger");
    // Check if the click event did not occur inside the sideNav or the hamburger menu
    if (!sideNav.contains(event.target) && !hamburger.contains(event.target)) {
        closeNav();
    }
}
