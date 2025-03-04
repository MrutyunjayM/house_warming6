document.addEventListener("DOMContentLoaded", function () {
    // Countdown Timer
    const eventDate = new Date("March 30, 2025 00:00:00").getTime();
    const countdownElement = document.getElementById("countdown");

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        if (timeLeft < 0) {
            countdownElement.innerHTML = "The event has started!";
            clearInterval(countdownInterval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }

    const countdownInterval = setInterval(updateCountdown, 1000);
    updateCountdown(); // Initial call

    // Toggle Navigation Menu
    window.toggleMenu = function () {
        const navLinks = document.getElementById("navLinks");
        navLinks.classList.toggle("active");
    };

    // Handle RSVP Name Input and Redirect
    document.querySelector(".rsvp-form button").addEventListener("click", function (event) {
        const guestName = document.getElementById("guest-name").value.trim();
        if (guestName === "") {
            alert("Please enter your name before confirming attendance.");
            event.preventDefault();
            return;
        }

        const rsvpFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdWFKPpkKotqRt7SG4fUY-8XrJmAGhvBRTVg34N9IC6L1mayw/viewform?usp=dialog";
        window.open(rsvpFormUrl, "_blank");
    });

    // Copy RSVP Link
    document.getElementById("copy-link").addEventListener("click", function () {
        const rsvpLink = document.getElementById("rsvp-link");
        rsvpLink.select();
        document.execCommand("copy");
        alert("RSVP link copied!");
    });
});
