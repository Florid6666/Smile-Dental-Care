// Handle the form submission
document.getElementById("contact-form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    // Collect form data
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const message = formData.get("message");

    // Simulate sending the message (this is where you could use an API)
    alert(
        `Thank you, ${name}! Your message has been received. We will get back to you at ${email} soon.`
    );

    // Optionally clear the form
    event.target.reset();
});
