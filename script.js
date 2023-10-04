document.getElementById("carSurveyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // You can add your logic here for handling form data
    // For now, let's just display a confirmation message as a pop-up alert
    alert("Successfully Submitted!");

    // Clear the form fields (optional)
    this.reset();
});
