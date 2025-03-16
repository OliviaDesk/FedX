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
    result.classList.remove("fade-in"); // Remove fade-in effect

    // Simulated tracking history with icons
    let trackingHistory = [
        { status: "Label Created", time: "March 15, 2025 - 10:00 AM", icon: "fas fa-file-alt text-gray-500" },
        { status: "Package Received", time: "March 15, 2025 - 2:30 PM", icon: "fas fa-box text-purple-800" },
        { status: "In Transit", time: "March 16, 2025 - 9:15 AM", icon: "fas fa-truck text-orange-500" },
        { status: "Out for Delivery", time: "March 16, 2025 - 3:45 PM", icon: "fas fa-shipping-fast text-purple-800" },
        { status: "Delivered", time: "March 16, 2025 - 7:00 PM", icon: "fas fa-check-circle text-green-500" }
    ];

    let progress = 0;

    let interval = setInterval(() => {
        progress += 25;
        progressBar.style.width = progress + "%";
        progressBar.innerText = progress + "%";
        progressBar.style.animation = "progressAnimation 4s ease-in-out";

        if (progress === 100) {
            clearInterval(interval);
            let randomIndex = Math.floor(Math.random() * trackingHistory.length);
            let trackingStep = trackingHistory[randomIndex];

            setTimeout(() => {
                result.innerHTML = `
                    <i class="${trackingStep.icon} text-3xl"></i>
                    <p class="text-lg font-semibold text-purple-800 mt-2">${trackingStep.status}</p>
                    <p class="text-gray-500">${trackingStep.time}</p>
                `;
                result.classList.add("fade-in"); // Apply fade-in animation
            }, 500);
        }
    }, 1000); // Updates every second
}
