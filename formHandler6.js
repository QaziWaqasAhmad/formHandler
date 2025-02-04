// formSubmission.js

// Function to submit the form data
async function submitForm(formData, host) {
    const url = `http://staging.agencyeleva.com/forms/response?host=${host}`
  
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
  
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
  
      return await response.json()
    } catch (error) {
      console.error("Error submitting form:", error)
      throw error
    }
  }
  
  // Function to handle form submission
  function handleFormSubmit(event, formName, pageName) {
    event.preventDefault()
  
    const form = event.target
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries())
  
    // Add required fields
    data.title = formName
    data.pageName = pageName
  
    // Get the current host
    const host = window.location.hostname
  
    submitForm(data, host)
      .then((response) => {
        console.log("Form submitted successfully:", response)
        // You can add additional success handling here
      })
      .catch((error) => {
        console.error("Form submission failed:", error)
        // You can add additional error handling here
      })
  }
  
  // Attach the handleFormSubmit function to the window object
  // so it can be accessed globally
  window.handleFormSubmit = handleFormSubmit
  
  
