$(document).ready(function () {
    // AI IoT Adjustments
    const aiIotMessages = [
        "Light intensity set to 80% for deep focus.",
        "Lowering sound levels for better concentration.",
        "Adjusting ambient light for evening relaxation.",
        "Dimming lights for optimal sleep preparation.",
        "Sound balance optimized for calm work mode."
    ];

    function updateAIMessage() {
        let message = aiIotMessages[Math.floor(Math.random() * aiIotMessages.length)];
        $("#ai-iot-tip").text(message);
    }

    updateAIMessage();
    setInterval(updateAIMessage, 5000);

    // IoT Adjustment Timeline
    const timelineData = [
        { time: "6:00 AM", action: "Lights On", reason: "Boosts morning wake-up energy" },
        { time: "9:00 AM", action: "Focus Mode Lights", reason: "Enhances work productivity" },
        { time: "5:00 PM", action: "Ambient Lights", reason: "Reduces eye strain" },
        { time: "10:00 PM", action: "Dim Lights", reason: "Prepares body for sleep" }
    ];

    timelineData.forEach(event => {
        $("#timeline-list").append(`<li><strong>${event.time}:</strong> ${event.action} - ${event.reason}</li>`);
    });

    // IoT Monitoring Graph
    var ctx = document.getElementById("iotChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
            datasets: [{
                label: "Light Intensity",
                data: [60, 80, 70, 50, 40, 30],
                borderColor: "#00ffff",
                backgroundColor: "rgba(0, 255, 255, 0.2)",
                borderWidth: 2
            }]
        },
        options: { responsive: true }
    });
});
