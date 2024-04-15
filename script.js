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

// Load header content
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-placeholder').innerHTML = data;
        // Set currentpage class based on current page
        const currentPage = window.location.pathname.split('/').pop().split('.')[0];
        const links = document.querySelectorAll('.nav-links a');
        var bFoundPage = false;
        links.forEach(link => {
            const linkName = link.href.split('/').pop().split('.')[0];
            if (linkName === currentPage) {
                link.classList.add('currentpage');
                bFoundPage = true;
            }
            else {
                link.classList.remove('currentpage');
            }
        });
        if (bFoundPage == false) {
            links.item(0).classList.add('currentpage')
        }
        const sidelinks = document.querySelectorAll('#sideNav a');
        var bFoundPage = false;
        sidelinks.forEach(link => {
            const linkName = link.href.split('/').pop().split('.')[0];
            if (linkName === currentPage) {
                link.classList.add('currentpage');
                bFoundPage = true;
            }
            else {
                link.classList.remove('currentpage');
            }
        });
        if (bFoundPage == false) {
            sidelinks.item(1).classList.add('currentpage')
        }
    });

// Load footer content
fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer-placeholder').innerHTML = data;
    });