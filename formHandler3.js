// This is the main JavaScript file that can be included as a CDN

(function () {
    // Function to capture form data and send it to the backend API
    function submitFormData(formElement) {
      const formData = new FormData(formElement);
      
      // Prepare data for the request
      const data = {
        title: formElement.querySelector('[name="formTitle"]').value || formElement.title, // Use form title or default title
        pageName: window.location.pathname || '/', // Get the page name (URL path) or default to "/"
        host: window.location.hostname, // Get the hostname (e.g., www.test.com)
      };
      
      // Add dynamic form fields to the data object
      formData.forEach((value, key) => {
        data[key] = value; // Each input field and its value
      });
  
      // API URL (update this to your backend URL)
      const apiUrl = 'http://staging.agencyeleva.com/api/v1/forms/response';
      
      // Send data to the backend using fetch API
      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Form submitted successfully:', data);
          alert('Form submitted successfully');
        })
        .catch((error) => {
          console.error('Error submitting form:', error);
          alert('There was an error submitting the form.');
        });
    }
  
    // Attach event listeners to the form elements in the DOM
    document.addEventListener('DOMContentLoaded', () => {
      // Attach submit event to all forms
      document.querySelectorAll('form').forEach(form => {
        form.addEventListener('submit', (e) => {
          e.preventDefault(); // Prevent the default form submission
          submitFormData(form); // Call the function to handle form submission
        });
      });
    });
  })();
  