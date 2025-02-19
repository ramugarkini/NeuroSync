$(document).ready(function () {
    // AI Productivity Insights
    const aiProductivityMessages = [
        "Your focus is at its peak! Keep pushing forward.",
        "You're losing concentration—take a 5-minute break.",
        "Hydration levels are low. Drink water for better focus.",
        "Time for a quick meditation session to reset your mind.",
        "Consider a power nap to refresh cognitive ability."
    ];

    function updateAIProductivityMessage() {
        let message = aiProductivityMessages[Math.floor(Math.random() * aiProductivityMessages.length)];
        $("#ai-productivity-tip").text(message);
    }

    updateAIProductivityMessage();
    setInterval(updateAIProductivityMessage, 5000);

    // Timeline Updates
    const timelineData = [
        { time: "6:00 AM", task: "Wake up & Hydration", reason: "Boosts brain oxygen & focus" },
        { time: "7:00 AM - 10:00 AM", task: "Deep Work Session", reason: "Peak cognitive hours" },
        { time: "10:30 AM", task: "Brain Snack (Dark Chocolate, Nuts)", reason: "Enhances memory retention" },
        { time: "12:00 PM", task: "Lunch Break", reason: "Balanced meal to sustain energy" },
        { time: "2:00 PM", task: "Power Nap", reason: "Recharges focus & prevents burnout" },
        { time: "4:00 PM", task: "Afternoon Work Session", reason: "Optimized execution phase" }
    ];

    timelineData.forEach(event => {
        $("#timeline-list").append(`<li><strong>${event.time}:</strong> ${event.task} - ${event.reason}</li>`);
    });

    // Productivity Graph - Now Compact
    var ctx = document.getElementById("productivityChart").getContext("2d");
    var productivityChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
            datasets: [{
                label: "Productivity Level",
                data: [80, 90, 75, 60, 50, 40],
                borderColor: "#00ffff",
                backgroundColor: "rgba(0, 255, 255, 0.2)",
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: { min: 0, max: 100 }
            },
            layout: {
                padding: {
                    left: 10,
                    right: 10,
                    top: 10,
                    bottom: 10
                }
            }
        }
    });
});
