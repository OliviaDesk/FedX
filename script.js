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

    // Reset progress bar and result
    progressBarContainer.classList.remove("hidden");
    progressBar.style.width = "0%";
    progressBar.innerText = "0%";
    result.innerHTML = "Tracking in progress...";

    // Simulated tracking history
    let trackingHistory = [
        { status: "Label Created", time: "March 15, 2025 - 10:00 AM" },
        { status: "Package Received", time: "March 15, 2025 - 2:30 PM" },
        { status: "In Transit", time: "March 16, 2025 - 9:15 AM" },
        { status: "Out for Delivery", time: "March 16, 2025 - 3:45 PM" },
        { status: "Delivered", time: "March 16, 2025 - 7:00 PM" }
    ];

    let progress = 0;
    let step = 0;

    let interval = setInterval(() => {
        progress += 25;
        progressBar.style.width = progress + "%";
        progressBar.innerText = progress + "%";

        if (progress === 100) {
            clearInterval(interval);
            let randomIndex = Math.floor(Math.random() * trackingHistory.length);
            let trackingStep = trackingHistory[randomIndex];

            result.innerHTML = `
                <p class="text-lg font-semibold text-purple-800">${trackingStep.status}</p>
                <p class="text-gray-500">${trackingStep.time}</p>
            `;
        }
    }, 1000); // Updates every second
}
