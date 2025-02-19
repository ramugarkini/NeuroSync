$(document).ready(function () {
    // AI Notifications
    const notifications = [
        "Time to hydrate! 🥤",
        "Deep Work Session Starts Now! 🚀",
        "Break Reminder: Stretch & Breathe 💨",
        "Sleep Cycle Optimization Recommended 🌙",
        "Avoid screens 30 mins before bed for better sleep. 😴"
    ];

    notifications.forEach(notification => {
        $("#notification-list").append(`<li>${notification}</li>`);
    });

    // AI Chat
    $("#send-btn").click(function () {
        const userMessage = $("#user-input").val();
        if (userMessage) {
            $("#chat-box").append(`<p><strong>You:</strong> ${userMessage}</p>`);
            $("#chat-box").append(`<p><strong>AI:</strong> Let me analyze... 🤖</p>`);
            $("#user-input").val("");
        }
    });

    // AI Graph
    var ctx = document.getElementById("aiChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
            datasets: [{
                label: "AI Interventions",
                data: [2, 4, 5, 3, 2, 1],
                borderColor: "#00ffff",
                backgroundColor: "rgba(0, 255, 255, 0.2)",
                borderWidth: 2
            }]
        },
        options: { responsive: true }
    });
});
