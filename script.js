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
    progressBar.innerText = "Processing...";

    // Tracking steps (randomly selected)
    let trackingSteps = [
        { status: "Label Created", time: "March 15, 2025 - 10:00 AM", progress: "10%" },
        { status: "Package Received", time: "March 15, 2025 - 2:30 PM", progress: "40%" },
        { status: "In Transit", time: "March 16, 2025 - 9:15 AM", progress: "70%" },
        { status: "Out for Delivery", time: "March 16, 2025 - 3:45 PM", progress: "90%" },
        { status: "Delivered", time: "March 16, 2025 - 7:00 PM", progress: "100%" }
    ];

    let stepIndex = 0;

    let interval = setInterval(() => {
        let step = trackingSteps[stepIndex];
        progressBar.style.width = step.progress;
        progressBar.innerText = step.progress;
        
        if (step.progress === "100%") {
            clearInterval(interval);
            result.innerHTML = `
                <p class="text-lg font-semibold text-purple-800 mt-2">${step.status}</p>
                <p class="text-gray-500">${step.time}</p>
            `;
        }

        stepIndex++;
    }, 1500);
}
