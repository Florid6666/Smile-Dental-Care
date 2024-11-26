// Get the root element
const root = document.getElementById("root");

// Create the header
const header = document.createElement("header");
header.innerHTML = `
    <h1>Smile Dental Care</h1>
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About Us</a></li>
            <li><a href="contact.html">Contact Us</a></li>
        </ul>
    </nav>
`;
root.appendChild(header);

// Create the About Us section
const aboutUsSection = document.createElement("section");
aboutUsSection.className = "about-us";
aboutUsSection.innerHTML = `
    <h2>About Us</h2>
    <p>
        At Smile Dental Care, we are committed to providing exceptional dental services to enhance your oral health 
        and overall well-being. Our experienced team of dentists and state-of-the-art technology ensures you receive 
        the highest quality care in a warm and welcoming environment.
    </p>
`;

// Create About Details
const aboutDetails = document.createElement("div");
aboutDetails.className = "about-details";

const details = [
    {
        title: "Our Mission",
        content: "To deliver outstanding dental care and build lasting relationships with our patients based on trust and compassion."
    },
    {
        title: "Our Vision",
        content: "To be a leader in modern dentistry by continuously improving our services and incorporating the latest advancements in dental technology."
    },
    {
        title: "Our Values",
        content: "Integrity, excellence, and patient-focused care form the foundation of our practice. We believe in making every visit a positive and empowering experience."
    }
];

details.forEach(detail => {
    const box = document.createElement("div");
    box.className = "about-box";
    box.innerHTML = `
        <h3>${detail.title}</h3>
        <p>${detail.content}</p>
    `;
    aboutDetails.appendChild(box);
});

aboutUsSection.appendChild(aboutDetails);

// Create Team Section
const teamSection = document.createElement("div");
teamSection.className = "team";
teamSection.innerHTML = `
    <h3>Meet Our Expert Dentists</h3>
    <p>Our team of skilled professionals is dedicated to making your smile brighter and healthier.</p>
`;

const teamMembers = [
    {
        img: "emily.jpg",
        name: "Dr. Emily Smith",
        specialization: "Specialist in Orthodontics"
    },
    {
        img: "john.avif",
        name: "Dr. John Doe",
        specialization: "Cosmetic Dentistry Expert"
    },
    {
        img: "sarah.jpg",
        name: "Dr. Sarah Lee",
        specialization: "Periodontist and Implant Specialist"
    }
];

const teamContainer = document.createElement("div");
teamContainer.className = "team-members";

teamMembers.forEach(member => {
    const memberDiv = document.createElement("div");
    memberDiv.className = "member";
    memberDiv.innerHTML = `
        <img src="${member.img}" alt="${member.name}">
        <h4>${member.name}</h4>
        <p>${member.specialization}</p>
    `;
    teamContainer.appendChild(memberDiv);
});

teamSection.appendChild(teamContainer);
aboutUsSection.appendChild(teamSection);

// Append the About Us section to root
root.appendChild(aboutUsSection);

// Create Footer
const footer = document.createElement("footer");
footer.innerHTML = `<p>&copy; 2024 Dental Care | All Rights Reserved</p>`;
root.appendChild(footer);
