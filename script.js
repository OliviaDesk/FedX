function trackPackage() {
    let trackingNumber = document.getElementById("trackingNumber").value;
    let result = document.getElementById("trackingResult");

    if (trackingNumber === "") {
        result.innerHTML = "Please enter a tracking number.";
        result.classList.add("text-red-500");
        return;
    }

    // Simulating random tracking status
    let statuses = ["In Transit", "Out for Delivery", "Delivered", "Pending"];
    let randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    result.innerHTML = `Tracking #${trackingNumber}: <strong>${randomStatus}</strong>`;
    result.classList.remove("text-red-500");
}

