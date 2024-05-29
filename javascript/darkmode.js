// var icon = document.getElementById("icon");
// var body = document.body;
// var linkIcons = document.querySelectorAll(".link-icons");
// var webIcons = document.querySelectorAll(".web-icons"); // Select all web-icons

// // Check if the user has a preference stored in local storage
// if (localStorage.getItem("theme") === "dark") {
//     body.classList.add("dark-theme");
//     icon.src = "icons/light-mode.icon.png";
//     // Apply inverted class to link-icons and web-icons
//     linkIcons.forEach(function(linkIcon) {
//         linkIcon.classList.add("inverted");
//     });
//     webIcons.forEach(function(webIcon) {
//         webIcon.classList.add("inverted");
//     });
// }

// icon.onclick = function () {
//     // Toggle the dark theme class
//     body.classList.toggle("dark-theme");
//     // Toggle inverted class for link-icons
//     linkIcons.forEach(function(linkIcon) {
//         linkIcon.classList.toggle("inverted");
//     });
//     // Toggle inverted class for web-icons
//     webIcons.forEach(function(webIcon) {
//         webIcon.classList.toggle("inverted");
//     });
    
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
var webIcons = document.querySelectorAll(".web-icons");

// Check and apply initial theme
if (localStorage.getItem("theme") === "dark") {
    console.log("Applying dark theme initially");
    body.classList.add("dark-theme");
    icon.src = "icons/light-mode.icon.png";
    linkIcons.forEach(function (linkIcon) {
        linkIcon.classList.add("inverted");
    });
    webIcons.forEach(function (webIcon) {
        webIcon.classList.add("inverted");
    });
} else {
    console.log("Applying light theme initially");
    body.classList.remove("dark-theme");
    icon.src = "icons/dark-mode.icon.png";
    linkIcons.forEach(function (linkIcon) {
        linkIcon.classList.remove("inverted");
    });
    webIcons.forEach(function (webIcon) {
        webIcon.classList.remove("inverted");
    });
}

// Toggle theme on button click
icon.onclick = function () {
    console.log("Dark mode button clicked");
    body.classList.toggle("dark-theme");
    if (body.classList.contains("dark-theme")) {
        console.log("Switching to dark theme");
        icon.src = "icons/light-mode.icon.png";
        localStorage.setItem("theme", "dark");
        linkIcons.forEach(function (linkIcon) {
            linkIcon.classList.add("inverted");
        });
        webIcons.forEach(function (webIcon) {
            webIcon.classList.add("inverted");
        });
    } else {
        console.log("Switching to light theme");
        icon.src = "icons/dark-mode.icon.png";
        localStorage.setItem("theme", "light");
        linkIcons.forEach(function (linkIcon) {
            linkIcon.classList.remove("inverted");
        });
        webIcons.forEach(function (webIcon) {
            webIcon.classList.remove("inverted");
        });
    }
    drawCharts(); // Redraw charts to reflect the theme change
};

