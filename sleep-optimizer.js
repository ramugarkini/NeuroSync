$(document).ready(function () {
    // AI Sleep Insights
    const aiSleepMessages = [
        "Optimal REM sleep improves memory retention by 30%.",
        "A consistent sleep schedule prevents fatigue & brain fog.",
        "AI recommends reducing blue light exposure 1 hour before bed.",
        "Deep sleep boosts cognitive function and learning ability.",
        "Melatonin levels rise after 9 PM – avoid bright screens!"
    ];

    function updateAISleepTip() {
        let tip = aiSleepMessages[Math.floor(Math.random() * aiSleepMessages.length)];
        $("#ai-sleep-tip").text(tip);
    }

    updateAISleepTip();
    setInterval(updateAISleepTip, 5000);

    // Sleep Tracking Data
    let sleepData = [6, 7.5, 8, 6.5, 7, 9, 8]; // Last 7 days sleep hours
    let sleepDays = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

    function updateSleepChart(newValue) {
        sleepData.shift();
        sleepData.push(newValue);
        sleepChart.update();
    }

    // Sleep Chart
    var ctx = document.getElementById("sleepChart").getContext("2d");
    var sleepChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: sleepDays,
            datasets: [{
                label: "Sleep Hours",
                data: sleepData,
                backgroundColor: "rgba(0, 255, 255, 0.5)",
                borderColor: "#00ffff",
                borderWidth: 2
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

    // Sleep Timeline Data
    const sleepTimeline = [
        ["10:00 PM", "Wind Down (No screens)", "Prepares body for melatonin release"],
        ["10:30 PM", "Relaxation (Meditation)", "Lowers cortisol levels for deep sleep"],
        ["11:00 PM", "Sleep (REM & Deep Sleep)", "Essential for brain recovery"],
        ["6:30 AM", "Wake Up (Natural Light)", "Boosts serotonin & energy levels"]
    ];

    sleepTimeline.forEach(event => {
        $("#sleep-timeline").append(`<li><strong>${event[0]}:</strong> ${event[1]} - ${event[2]}</li>`);
    });

    // AI Sleep Tracking
    let totalSleep = 0;
    $("#log-sleep").click(function () {
        let sleepHours = Math.floor(Math.random() * 3) + 6; // Random sleep between 6-9 hours
        totalSleep += sleepHours;
        $("#sleep-hours").text(`💤 Last Night: ${sleepHours} hrs | Total This Week: ${totalSleep} hrs`);
        updateSleepChart(sleepHours);
    });

    // IoT AI Sleep Optimization
    $("#optimize-sleep").click(function () {
        alert("🛌 AI Sleep Mode Enabled: Adjusting lights, temperature, and white noise...");
    });
});
