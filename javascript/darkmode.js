// var icon = document.getElementById("icon");
// var body = document.body;

// // Check if the user has a preference stored in local storage
// if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("dark-theme");
//     icon.src = "icons/light-mode.icon.png";
// }

// icon.onclick = function () {
//     // Toggle the dark theme class
//     body.classList.toggle("dark-theme");
    
//     // Update the icon based on the theme
//     if (body.classList.contains("dark-theme")) {
//         icon.src = "icons/light-mode.icon.png";
//         // Store the user's preference in local storage
//         localStorage.setItem("theme", "dark");
//     } else {
//         icon.src = "icons/dark-mode.icon.png";
//         // Remove the stored preference from local storage
//         localStorage.removeItem("theme");
//     }
// }

var icon = document.getElementById("icon");
var body = document.body;
var linkIcons = document.querySelectorAll(".link-icons");
var webIcons = document.querySelectorAll(".web-icons"); // Select all web-icons

// Check if the user has a preference stored in local storage
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    icon.src = "icons/light-mode.icon.png";
    // Apply inverted class to link-icons and web-icons
    linkIcons.forEach(function(linkIcon) {
        linkIcon.classList.add("inverted");
    });
    webIcons.forEach(function(webIcon) {
        webIcon.classList.add("inverted");
    });
}

icon.onclick = function () {
    // Toggle the dark theme class
    body.classList.toggle("dark-theme");
    // Toggle inverted class for link-icons
    linkIcons.forEach(function(linkIcon) {
        linkIcon.classList.toggle("inverted");
    });
    // Toggle inverted class for web-icons
    webIcons.forEach(function(webIcon) {
        webIcon.classList.toggle("inverted");
    });
    
    // Update the icon based on the theme
    if (body.classList.contains("dark-theme")) {
        icon.src = "icons/light-mode.icon.png";
        // Store the user's preference in local storage
        localStorage.setItem("theme", "dark");
    } else {
        icon.src = "icons/dark-mode.icon.png";
        // Remove the stored preference from local storage
        localStorage.removeItem("theme");
    }
}

