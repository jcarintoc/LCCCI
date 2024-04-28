

// START OF UPCOMING EVENTS SCRIPT
var buttons = document.querySelectorAll('.show-details-btn');

// Add click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the image source, title, and description related to the clicked button's card
    var card = button.closest('.card');
    var imageSrc = card.querySelector('.upcoming-events-pictures').getAttribute('src');
    var title = card.querySelector('.card-title').textContent;
    var description = card.querySelector('.card-text').textContent;

    // Set the modal content
    document.getElementById('modalImage').src = imageSrc;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;

    // Show the modal
    var myModal = new bootstrap.Modal(document.getElementById('eventDetailsModal'));
    myModal.show();
  });
});
// END OF UPCOMING EVENTS SCRIPT




// START OF PAST EVENTS SCRIPT
var buttons = document.querySelectorAll('.show-details-btn2');

// Add click event listener to each button
buttons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Get the title and description related to the clicked button's card
    var card = button.closest('.card-modal');
    var title = card.querySelector('.card-modal-title').textContent;
    var description = card.querySelector('.card-modal-text').textContent;

    // Set the modal content
    document.getElementById('modalTitle2').textContent = title;
    document.getElementById('modalDescription2').textContent = description;

    // Show the modal
    var myModal = new bootstrap.Modal(document.getElementById('eventDetailsModal2'));
    myModal.show();
  });
});
// END OF PAST EVENTS SCRIPT



  
// START OF PAGINATION FOR PAST EVENTS
// Function to update pagination based on number of cards and current page
function updatePagination(totalCards, currentPage) {
  var pageSize = 3; // Number of cards per page
  var totalPages = Math.ceil(totalCards / pageSize);
  var paginationHtml = '';

  // Previous button
  paginationHtml += '<li class="page-item ' + (currentPage === 1 ? 'disabled' : '') + '">';
  paginationHtml += '<a class="page-link" href="#" aria-label="Previous" data-page="' + (currentPage - 1) + '">';
  paginationHtml += '<span aria-hidden="true">&laquo;</span>';
  paginationHtml += '</a>';
  paginationHtml += '</li>';

  // Calculate starting and ending page numbers for pagination
  var startPage = Math.max(1, currentPage - 1);
  var endPage = Math.min(startPage + 2, totalPages);

  // Page numbers
  for (var i = startPage; i <= endPage; i++) {
    paginationHtml += '<li class="page-item ' + (currentPage === i ? 'active' : '') + '">';
    paginationHtml += '<a class="page-link" href="#" data-page="' + i + '">' + i + '</a>';
    paginationHtml += '</li>';
  }

  // Next button
  paginationHtml += '<li class="page-item ' + (currentPage === totalPages ? 'disabled' : '') + '">';
  paginationHtml += '<a class="page-link" href="#" aria-label="Next" data-page="' + (currentPage + 1) + '">';
  paginationHtml += '<span aria-hidden="true">&raquo;</span>';
  paginationHtml += '</a>';
  paginationHtml += '</li>';

  document.getElementById('pagination').innerHTML = paginationHtml;

  // Attach click event listeners to pagination links
  var paginationLinks = document.querySelectorAll('.page-link');
  paginationLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var pageNumber = parseInt(this.getAttribute('data-page'));
      if (!isNaN(pageNumber)) {
        updatePagination(totalCards, pageNumber); // Update pagination with the selected page
        showPage(pageNumber, pageSize); // Show the selected page
      }
    });
  });

  // Show the first page by default
  showPage(currentPage, pageSize);
}

// Function to show the selected page
function showPage(pageNumber, pageSize) {
  var cards = document.querySelectorAll('.card-modal');

  // Calculate start and end index of cards to be displayed
  var startIndex = (pageNumber - 1) * pageSize;
  var endIndex = Math.min(startIndex + pageSize, cards.length);

  // Hide all cards
  cards.forEach(function(card) {
    card.style.display = 'none';
  });

  // Show cards for the selected page
  for (var i = startIndex; i < endIndex; i++) {
    cards[i].style.display = 'block';
  }
}

// Update pagination initially
updatePagination(document.querySelectorAll('.card-modal').length, 1);
// END OF PAGINATION FOR PAST EVENTS
