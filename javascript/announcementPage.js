document.addEventListener("DOMContentLoaded", function() {
    const announcements = [
        { time: "09:00", date: "2024/04/01", title: "Announcement 1" },
        { time: "10:00", date: "2024/04/02", title: "Announcement 2" },
        { time: "11:00", date: "2024/04/03", title: "Announcement 3" },
        { time: "12:00", date: "2024/04/04", title: "Announcement 4" },
        { time: "13:00", date: "2024/04/05", title: "Announcement 5" },
        { time: "14:00", date: "2024/04/06", title: "Announcement 6" },
        { time: "15:00", date: "2024/04/07", title: "Announcement 7" },
        { time: "16:00", date: "2024/04/08", title: "Announcement 8" },
        { time: "17:00", date: "2024/04/09", title: "Announcement 9" },
        { time: "18:00", date: "2024/04/10", title: "Announcement 10" },
        { time: "19:00", date: "2024/04/11", title: "Announcement 11" },
        { time: "20:00", date: "2024/04/12", title: "Announcement 12" },
        { time: "21:00", date: "2024/04/13", title: "Announcement 13" },
        { time: "22:00", date: "2024/04/14", title: "Announcement 14" },
        { time: "23:00", date: "2024/04/15", title: "Announcement 15" },
        // Add more announcements here
    ];

    const tableBody = document.querySelector("#announcementTable tbody");
    const pagination = document.getElementById("pagination");
    const previousPage = document.getElementById("previousPage");
    const nextPage = document.getElementById("nextPage");

    let currentPage = 1;
    const announcementsPerPage = 10;
    const totalPages = Math.ceil(announcements.length / announcementsPerPage);

    function displayAnnouncements(page) {
        tableBody.innerHTML = ""; // Clear table body
        const startIndex = (page - 1) * announcementsPerPage;
        const endIndex = startIndex + announcementsPerPage;
        const displayedAnnouncements = announcements.slice(startIndex, endIndex);

        displayedAnnouncements.forEach(announcement => {
            const row = `
                <tr>
                    <td class="announcementTime">${announcement.time}</td>
                    <td class="announcementDate">${announcement.date}</td>
                    <td class="announcementTitle">${announcement.title}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML("beforeend", row);
        });

        previousPage.classList.toggle("disabled", page === 1);
        nextPage.classList.toggle("disabled", page === totalPages);
    }

    displayAnnouncements(currentPage);

    previousPage.addEventListener("click", function(event) {
        event.preventDefault();
        if (currentPage > 1) {
            currentPage--;
            displayAnnouncements(currentPage);
        }
    });

    nextPage.addEventListener("click", function(event) {
        event.preventDefault();
        if (currentPage < totalPages) {
            currentPage++;
            displayAnnouncements(currentPage);
        }
    });

    // Sorting functions
    function sortByTime() {
        announcements.sort((a, b) => {
            return a.time.localeCompare(b.time);
        });
        displayAnnouncements(currentPage);
    }

    function sortByDate() {
        announcements.sort((a, b) => {
            return new Date(a.date) - new Date(b.date);
        });
        displayAnnouncements(currentPage);
    }

    function sortByTitle() {
        announcements.sort((a, b) => {
            return a.title.localeCompare(b.title);
        });
        displayAnnouncements(currentPage);
    }

    // Event listeners for column headers
    document.getElementById("sortTime").addEventListener("click", sortByTime);
    document.getElementById("sortDate").addEventListener("click", sortByDate);
    document.getElementById("sortTitle").addEventListener("click", sortByTitle);
});
