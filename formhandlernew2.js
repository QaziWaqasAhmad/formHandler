(() => {
    const API_URL = "http://staging.agencyeleva.com/forms/response?host=www.mockup-domain.com";

    const handleFormSubmit = (event, title) => {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        let formObject = { title, pageName: window.location.pathname };

        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        sendFormData(formObject);
    };

    const sendFormData = async (data) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();
            console.log("Form submitted successfully:", result);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit the form. Please try again.");
        }
    };

    // Attach event listeners to forms
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll("form").forEach(form => {
            form.addEventListener("submit", (event) => handleFormSubmit(event, form.getAttribute("name")));
        });
    });
})();
