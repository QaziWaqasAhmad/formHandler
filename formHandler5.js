(function () {
  // Function to capture form data and send it to the backend API
  function submitFormData(formElement) {
    const formData = new FormData(formElement);

    // Construct query parameters from form data
    const queryParams = new URLSearchParams();
    formData.forEach((value, key) => {
      queryParams.append(key, value);
    });

    // Add host to the query parameters
    queryParams.append('host', window.location.hostname);

    // API URL with query parameters
    const apiUrl = `http://staging.agencyeleva.com/api/v1/site/preview/676e825676191dd2868a8a8c/services?${queryParams.toString()}`;

    // Send data to the backend using fetch API
    fetch(apiUrl, {
      method: 'GET', // Use GET since data is sent as query parameters
    })
      .then((response) => response.json())
      .then((data) => {
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
    document.querySelectorAll('form').forEach((form) => {
      form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent the default form submission
        submitFormData(form); // Call the function to handle form submission
      });
    });
  });
})();