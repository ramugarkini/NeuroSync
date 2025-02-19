$(document).ready(function () {
    // AI IoT Insights
    const aiIotMessages = [
        "💡 AI suggests reducing light intensity at night for better sleep.",
        "🔊 Soft ambient sound enhances focus during deep work sessions.",
        "💡 Blue light filter enabled to reduce eye strain during late hours.",
        "🔊 White noise can improve sleep quality by 30%.",
        "💡 AI adapts brightness based on your sleep schedule."
    ];

    function updateAIIoTTip() {
        let tip = aiIotMessages[Math.floor(Math.random() * aiIotMessages.length)];
        $("#ai-iot-tip").text(tip);
    }

    updateAIIoTTip();
    setInterval(updateAIIoTTip, 5000);

    // Light & Sound Adjustment
    let lightLevel = $("#light-level").val();
    let soundLevel = $("#sound-level").val();

    $("#light-level").on("input", function () {
        lightLevel = $(this).val();
        updateIoTChart();
    });

    $("#sound-level").on("input", function () {
        soundLevel = $(this).val();
        updateIoTChart();
    });

    // Apply AI Adjustments
    $("#apply-settings").click(function () {
        alert(`✅ AI Adjustments Applied: Light ${lightLevel}%, Sound ${soundLevel}%`);
        updateIoTChart();
    });

    // IoT Adjustment Timeline
    const iotTimeline = [
        ["6:00 AM", "Increase light intensity", "Boosts wakefulness & serotonin"],
        ["9:00 AM", "Lower sound distractions", "Enhances deep focus mode"],
        ["7:00 PM", "Reduce light intensity", "Prepares body for melatonin release"],
        ["10:00 PM", "Enable night mode (Soft light, White noise)", "Improves deep sleep quality"]
    ];

    iotTimeline.forEach(event => {
        $("#timeline-list").append(`<li><strong>${event[0]}:</strong> ${event[1]} - ${event[2]}</li>`);
    });

    // IoT Graph Data
    let lightData = [50, 40, 60, 80, 30, 20, 10];
    let soundData = [30, 50, 40, 70, 20, 10, 5];
    let timeStamps = ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM", "12 AM"];

    function updateIoTChart() {
        lightData.shift();
        soundData.shift();
        lightData.push(lightLevel);
        soundData.push(soundLevel);
        iotChart.update();
    }

    // IoT Monitoring Graph
    var ctx = document.getElementById("iotChart").getContext("2d");
    var iotChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: timeStamps,
            datasets: [
                {
                    label: "💡 Light Intensity (%)",
                    data: lightData,
                    borderColor: "#00ffff",
                    backgroundColor: "rgba(0, 255, 255, 0.2)",
                    borderWidth: 2,
                    pointRadius: 5,
                    pointBackgroundColor: "#00ffff"
                },
                {
                    label: "🔊 Sound Level (%)",
                    data: soundData,
                    borderColor: "#ff00ff",
                    backgroundColor: "rgba(255, 0, 255, 0.2)",
                    borderWidth: 2,
                    pointRadius: 5,
                    pointBackgroundColor: "#ff00ff"
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { display: true },
            },
            scales: {
                x: { grid: { display: false }, ticks: { color: "#00ffff" } },
                y: { grid: { color: "rgba(0, 255, 255, 0.2)" }, ticks: { color: "#00ffff" } }
            }
        }
    });
});
