function initMap() {
    var location = { lat: 40.7128, lng: -74.0060 }; // Example coordinates
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}


    // Set the date we're counting down to
    const countDownDate = new Date("June 28, 2025 00:00:00").getTime();

    // Update the countdown every 1 second
    const x = setInterval(function() {
        // Get today's date and time
        const now = new Date().getTime();

        // Find the distance between now and the countdown date
        const distance = countDownDate - now;

        // Time calculations for days, hours, minutes and seconds
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the result in the countdown element
        document.getElementById("countdown").innerHTML = `
            <div class="countdown-item">
                <span class="countdown-number">${days}</span>
                <span class="countdown-label">Dni</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${hours}</span>
                <span class="countdown-label">Ur</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${minutes}</span>
                <span class="countdown-label">Minut</span>
            </div>
            <div class="countdown-item">
                <span class="countdown-number">${seconds}</span>
                <span class="countdown-label">Sekund</span>
            </div>
        `;

        // If the countdown is finished, hide the countdown
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown-section").style.display = "none";
        }
    }, 1000);