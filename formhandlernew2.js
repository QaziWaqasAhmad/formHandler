(function () {
  alert("ge")
    function submitFormData(formElement) {
      const formData = new FormData(formElement)
        console.log(window.location.hostname, "host name")
      const data = {
        title: formElement.getAttribute("name") || "Untitled Form", 
        pageName: window.location.pathname || '/', 
      }

      formData.forEach((value, key) => {
        data[key] = value 
      })

      const apiUrl = `http://staging.agencyeleva.com/api/v1/forms/response?host=${window.location.hostname}`
  
      fetch(apiUrl, {
        method: "POST",
        headers: {
          'Content-Type': "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Form submitted successfully:", data)
          alert("Form submitted successfully")
        })
        .catch((error) => {
          console.error("Error submitting form:", error)
        })
    }
  
    document.addEventListener("DOMContentLoaded", () => {
      
      document.querySelectorAll("form").forEach((form) => {
        console.log(form,"form")
        form.addEventListener("submit", (e) => {
          e.preventDefault() 
          submitFormData(form) 
        })
      })
    })

  
  })()
