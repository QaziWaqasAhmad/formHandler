(function () {
    function submitFormData(formElement) {
      if (!formElement.checkValidity()) {
        formElement.reportValidity() 
        return
      }
  
      const formData = new FormData(formElement)  
      const data = {
        title: formElement.getAttribute("name") || "Untitled Form",
        pageName: window.location.pathname || "/",
      }
  
      formData.forEach((value, key) => {
        data[key] = value
      })
  
      const apiUrl = `http://staging.agencyeleva.com/api/v1/forms/response?host=${window.location.hostname}`
  
      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
        })
        .catch((error) => {
        })
    }
  
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("form").forEach((form) => {
        form.addEventListener("submit", (e) => {
          e.preventDefault()
          submitFormData(form)
        })
      })
    })
  })()
  
