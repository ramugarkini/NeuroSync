$(document).ready(function () {
    // AI Productivity Insights
    const aiProductivityTips = [
        "Your peak focus hours are usually in the morning. Use this time for deep work.",
        "Take a 5-minute walk every 60 minutes to prevent cognitive fatigue.",
        "Power naps of 20 minutes improve memory and mental clarity.",
        "Avoid distractions by using the Pomodoro technique: 25 min work, 5 min break.",
        "Hydration boosts brain function by 10% – keep drinking water regularly."
    ];

    function updateAIProductivityTip() {
        let tip = aiProductivityTips[Math.floor(Math.random() * aiProductivityTips.length)];
        $("#ai-productivity-tip").text(tip);
    }

    updateAIProductivityTip();
    setInterval(updateAIProductivityTip, 5000);

    // Productivity Timeline Data (Dynamic Tracking)
    const productivityTimeline = [
        ["6:00 AM", "Wake Up + Planning", "Optimizes brain function & sets daily goals"],
        ["8:00 AM", "Deep Work Session (Coding, Writing)", "Brain's peak cognitive performance time"],
        ["10:30 AM", "Short Break + Hydration", "Prevents mental fatigue & restores focus"],
        ["12:00 PM", "Mid-Day Work (Meetings, Reviews)", "Best for collaborative thinking"],
        ["3:00 PM", "Afternoon Focus Block", "Second peak productivity window"],
        ["5:30 PM", "Exercise & Active Break", "Boosts oxygen flow to the brain"],
        ["7:00 PM", "Wind Down + Passive Learning", "Great for absorbing knowledge"],
        ["10:00 PM", "Prepare for Sleep", "Essential for cognitive memory retention"]
    ];

    productivityTimeline.forEach(event => {
        $("#timeline-list").append(`<li><strong>${event[0]}:</strong> ${event[1]} - ${event[2]}</li>`);
    });

    // User Productivity Input (Track Work Sessions)
    let focusScore = 0;
    $("#log-session").click(function () {
        let sessionScore = Math.floor(Math.random() * 30) + 70; // Random efficiency score (70-100)
        focusScore += sessionScore;
        $("#session-score").text(`🔹 Last Session: ${sessionScore}% | Total: ${focusScore}%`);
        updateProductivityChart(sessionScore);
    });

    // Productivity Graph Data
    let productivityLevels = [80, 85, 82, 88, 90, 75, 78, 84];
    let productivityTimes = ["6 AM", "8 AM", "10 AM", "12 PM", "2 PM", "4 PM", "6 PM", "8 PM"];

    function updateProductivityChart(newScore) {
        productivityLevels.shift();
        productivityLevels.push(newScore);
        chart.update();
    }

    // Productivity Graph
    var ctx = document.getElementById("productivityChart").getContext("2d");
    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: productivityTimes,
            datasets: [{
                label: "Productivity Score (%)",
                data: productivityLevels,
                borderColor: "#00ffff",
                backgroundColor: "rgba(0, 255, 255, 0.2)",
                borderWidth: 2,
                pointRadius: 5,
                pointBackgroundColor: "#00ffff"
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: false },
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: "#00ffff" } },
                y: { grid: { color: "rgba(0, 255, 255, 0.2)" }, ticks: { color: "#00ffff" } }
            }
        }
    });
});
