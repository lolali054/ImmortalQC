document.addEventListener('DOMContentLoaded', function() {
    const slideBtn = document.getElementById('slideBtn');
    const menuOptions = document.getElementById('menuOptions');
    const form = document.querySelector('form');
    const submitBtn = document.querySelector('button[type="submit"]');
  
    slideBtn.addEventListener('click', function() {
      menuOptions.classList.toggle('visible');
    });
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(form);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
  
      // Send form data to server using AJAX or fetch API
      // ...
  
      // Clear form fields and show success message
      form.reset();
      submitBtn.innerText = 'Message Sent!';
      submitBtn.disabled = true;
    });
  });