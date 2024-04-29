document.addEventListener("DOMContentLoaded", function() {
  const announcements = [
      { date: "2024/04/01", title: "Announcement 1" },
      { date: "2024/04/02", title: "Announcement 2" },
      { date: "2024/04/03", title: "Announcement 3" },
      { date: "2024/04/04", title: "Announcement 4" },
      { date: "2024/04/05", title: "Announcement 5" },
      { date: "2024/04/06", title: "Announcement 6" },
      { date: "2024/04/07", title: "Announcement 7" },
      { date: "2024/04/08", title: "Announcement 8" },
      { date: "2024/04/09", title: "Announcement 9" },
      { date: "2024/04/10", title: "Announcement 10" },
      { date: "2024/04/11", title: "Announcement 11" },
      { date: "2024/04/12", title: "Announcement 12" },
      { date: "2024/04/13", title: "Announcement 13" },
      { date: "2024/04/14", title: "Announcement 14" },
      { date: "2024/04/15", title: "Announcement 15" },
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
                  <td class="announcementDate">${announcement.date}</td>
                  <td>${announcement.title}</td>
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
});