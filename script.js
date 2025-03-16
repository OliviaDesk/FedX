function trackPackage() {
    let trackingNumber = document.getElementById("trackingNumber").value;
    let result = document.getElementById("trackingResult");
    let progressBarContainer = document.getElementById("progressBarContainer");
    let progressBar = document.getElementById("progressBar");

    if (trackingNumber === "") {
        result.innerHTML = "Please enter a tracking number.";
        result.classList.add("text-red-500");
        return;
    }

    // Reset progress bar
    progressBarContainer.classList.remove("hidden");
    progressBar.style.width = "0%";
    progressBar.innerText = "0%";

    // Simulating tracking progress
    let statuses = ["Label Created", "In Transit", "Out for Delivery", "Delivered"];
    let progress = 0;

    let interval = setInterval(() => {
        progress += 25;
        progressBar.style.width = progress + "%";
        progressBar.innerText = progress + "%";

        if (progress === 100) {
            clearInterval(interval);
            let randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
            result.innerHTML = `Tracking #${trackingNumber}: <strong>${randomStatus}</strong>`;
            result.classList.remove("text-red-500");
        }
    }, 1000); // Progress updates every second
}
