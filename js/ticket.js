/*
Name: Landa Shereves
Student ID: 1808195
Module: CIT2011 - Web Programming
Assignment: IA2
Tutor: Sirisha Badhika
Date: November 7, 2026
*/

/* Display Conference Ticket */

// Get the saved registration details
var fullName = sessionStorage.getItem("fullName");
var github = sessionStorage.getItem("github");
var avatar = sessionStorage.getItem("avatar");
var ticketNumber = sessionStorage.getItem("ticketNumber");

// Check if registration exists
if (
    fullName == null ||
    github == null ||
    avatar == null ||
    ticketNumber == null
) {
    // Return to the home page
    window.location.replace("index.html");
} else {
    // Display the attendee's name in the banner
    document.getElementById("congratsName").textContent = fullName;

    // Display the attendee's name
    document.getElementById("ticketName").textContent = fullName;

    // Display the GitHub username and link to the profile
    document.getElementById("ticketGitHub").textContent = github;
    document.getElementById("ticketGitHub").href =
        "https://github.com/" + github.substring(1);

    // Display the ticket number
    document.getElementById("ticketNumber").textContent = "#" + ticketNumber;

    // Display the uploaded avatar
    document.getElementById("ticketAvatar").src = avatar;
}
