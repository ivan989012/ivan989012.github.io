function showTime() {
    const options = {
        timeZone: "America/Los_Angeles",
        timeZoneName: "short" // Optional: Displays "PST" or "PDT"
    };

    // Use toLocaleString to apply the specific time zone
    document.getElementById('currentTime').innerHTML = new Date().toLocaleString("en-US", options);
}

showTime();

setInterval(function () {
    showTime();
}, 1000);

