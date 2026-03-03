document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const alertPlaceholder = document.getElementById('alertPlaceholder');
  
    if (contactForm && alertPlaceholder) {
      contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
  
        // Create the Bootstrap dismissible alert
        const alertHtml = `
          <div class="alert alert-success alert-dismissible fade show" role="alert">
            Message sent successfully!
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          </div>
        `;
  
        // Inject alert
        alertPlaceholder.innerHTML = alertHtml;
  
        // Keep the form fields populated or reset them, usually nice to reset after success
        // contactForm.reset();
      });
    }
  });
