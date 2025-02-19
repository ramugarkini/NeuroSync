$(document).ready(function () {
    // AI Sleep Insights
    const aiSleepTips = [
        "Avoid screens 30 minutes before bed to improve deep sleep.",
        "Maintain a consistent sleep schedule for better REM cycles.",
        "Hydration before sleep prevents sleep disruptions.",
        "Listening to white noise can help in deeper sleep.",
        "Dim lighting one hour before bed for melatonin production."
    ];

    function updateAISleepTip() {
        let tip = aiSleepTips[Math.floor(Math.random() * aiSleepTips.length)];
        $("#ai-sleep-tip").text(tip);
    }

    updateAISleepTip();
    setInterval(updateAISleepTip, 5000);

    // Sleep Timeline Data
    const sleepPlan = [
        ["10:00 PM", "Reduce Screen Time", "Melatonin production for deep sleep"],
        ["10:30 PM", "Drink Water", "Prevents dehydration during sleep"],
        ["11:00 PM", "Lights Dimmed", "Prepares the body for rest"],
        ["11:30 PM", "Sleep Starts", "AI detects REM/NREM balance"],
        ["7:00 AM", "Wake Up", "Optimized for memory retention"]
    ];

    sleepPlan.forEach(item => {
        $("#sleep-timeline").append(`<li><strong>${item[0]}:</strong> ${item[1]} - ${item[2]}</li>`);
    });

    // Sleep Graph
    var ctx = document.getElementById("sleepChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["11 PM", "1 AM", "3 AM", "5 AM", "7 AM"],
            datasets: [{
                label: "Sleep Quality (%)",
                data: [80, 95, 90, 85, 100],
                borderColor: "#00ffff",
                backgroundColor: "rgba(0, 255, 255, 0.2)",
                borderWidth: 2
            }]
        },
        options: { responsive: true }
    });

    // IoT Sleep Mode
    $("#optimize-sleep").click(function () {
        alert("AI Sleep Mode Activated! Lights & sound adjusted for deep sleep.");
    });
});
