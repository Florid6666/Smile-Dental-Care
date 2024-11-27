// JavaScript for the Contact Form
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const popupMessage = document.createElement("div");
    const overlay = document.createElement("div");

    // Add popup message structure
    popupMessage.id = "popupMessage";
    popupMessage.innerHTML = `
        <p>Thank you for contacting us!</p>
        <button id="closePopup">Close</button>
    `;

    // Add overlay structure
    overlay.id = "overlay";

    // Append popup and overlay to the body
    document.body.appendChild(overlay);
    document.body.appendChild(popupMessage);

    // Handle form submission
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent form from actually submitting
        overlay.style.display = "block"; // Show overlay
        popupMessage.style.display = "block"; // Show pop-up message
    });

    // Handle pop-up close button
    document.getElementById("closePopup").addEventListener("click", function () {
        popupMessage.style.display = "none"; // Hide pop-up
        overlay.style.display = "none"; // Hide overlay
        contactForm.reset(); // Reset the form
    });

    // Close the pop-up when clicking on the overlay
    overlay.addEventListener("click", function () {
        popupMessage.style.display = "none"; // Hide pop-up
        overlay.style.display = "none"; // Hide overlay
    });
});

