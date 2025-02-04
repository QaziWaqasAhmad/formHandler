(function() {
  function handleFormSubmit(event, title) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const pageName = window.location.hostname;

    const data = {
      title: title,
      pageName: pageName,
    };

    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch('http://staging.agencyeleva.com/forms/response?host=www.mockup-domain.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
      console.log('Success:', result);
      alert('Form submitted successfully!');
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Form submission failed!');
    });
  }

  window.handleFormSubmit = handleFormSubmit;
})();
