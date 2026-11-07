/*
Name: Landa Shereves
Student ID: 1808195
Module: CIT2011 - Web Programming
Assignment: IA2
Tutor: Sirisha Badhika
Date: November 7, 2026
*/

/* Registration Form Validation */

function validateForm() {
    // Get the values entered in the form
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value.trim();
    var github = document.getElementById("github").value.trim();

    // Clear previous error messages
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("githubError").innerHTML = "";
    document.getElementById("avatarError").innerHTML = "";

    var valid = true;

    // Check Full Name (Must have first and last name)
    if (fullName.trim() == "") {
        document.getElementById("nameError").innerHTML =
            "Please enter your full name.";
        valid = false;
    } else if (fullName.trim().indexOf(" ") == -1) {
        document.getElementById("nameError").innerHTML =
            "Please enter your first and last name.";
        valid = false;
    }

    // Email must match the user@domain.com structure
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        document.getElementById("emailError").innerHTML =
            "Please enter a valid email address.";
        valid = false;
    }

    // GitHub username must start with @ and have at least one character after it
    if (github.length < 2 || github.charAt(0) != "@") {
        document.getElementById("githubError").innerHTML =
            "GitHub username must begin with @.";
        valid = false;
    }

    // Get the uploaded avatar (undefined if nothing was chosen)
    var avatar = document.getElementById("avatar").files[0];

    // Avatar is required, JPG or PNG image and smaller than 500KB (500 * 1024 bytes)
    if (avatar == undefined) {
        document.getElementById("avatarError").innerHTML =
            "Please upload an avatar.";
        valid = false;
    } else if (avatar.type != "image/jpeg" && avatar.type != "image/png") {
        document.getElementById("avatarError").innerHTML =
            "Only JPG and PNG images are allowed.";
        valid = false;
    } else if (avatar.size >= 500 * 1024) {
        document.getElementById("avatarError").innerHTML =
            "Image must be smaller than 500KB.";
        valid = false;
    }

    // Stop form if any information is incorrect
    if (valid == false) {
        return false;
    }

    // Generate a 5-digit ticket number, e.g. 01609
    var number = Math.floor(Math.random() * 99999) + 1;
    var ticketNumber = String(number).padStart(5, "0");

    // Read the avatar file and turn it into text so it can be stored
    var reader = new FileReader();

    // Run this once the file has finished reading
    reader.onload = function () {
        // Save the details for the ticket page
        sessionStorage.setItem("fullName", fullName.trim());
        sessionStorage.setItem("github", github);
        sessionStorage.setItem("avatar", reader.result);
        sessionStorage.setItem("ticketNumber", ticketNumber);

        // Go to the ticket page
        window.location.href = "ticket.html";
    };

    reader.readAsDataURL(avatar);

    // Always stop the normal form submit; the redirect happens above
    return false;
}

// Run validation when the form is submitted
document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
        if (validateForm() == false) {
            event.preventDefault();
        }
    });
