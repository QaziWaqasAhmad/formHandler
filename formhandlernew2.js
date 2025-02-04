(function () {
  window.handleFormSubmit = function (event, formTitle) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const data = {}

    formData.forEach((value, key) => {
      data[key] = value
    })

    const pageName = window.location.pathname.split('/').pop() || 'home'
    const host = window.location.hostname

    fetch('http://staging.agencyeleva.com/forms/response?host=' + host, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: formTitle,
        pageName: pageName,
        ...data,
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data)
    })
    .catch((error) => {
      console.error('Error:', error)
    })
  }
})()
