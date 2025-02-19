$(document).ready(function () {
    // AI Nutrition Insights
    const aiNutritionMessages = [
        "Eat Omega-3 rich food for better memory retention.",
        "Increase water intake to improve brain function.",
        "Avoid refined sugar for stable energy levels.",
        "Eat protein-based meals to sustain focus longer.",
        "Hydrate before deep work sessions for optimal focus."
    ];

    function updateAINutritionMessage() {
        let message = aiNutritionMessages[Math.floor(Math.random() * aiNutritionMessages.length)];
        $("#ai-nutrition-tip").text(message);
    }

    updateAINutritionMessage();
    setInterval(updateAINutritionMessage, 5000);

    // Meal Plan Data
    const mealPlan = [
        ["7:00 AM", "Protein Shake + Nuts", "Boosts brain function and focus"],
        ["10:00 AM", "Oatmeal + Berries", "Provides long-lasting energy"],
        ["1:00 PM", "Grilled Chicken + Quinoa", "Sustains energy for the afternoon"],
        ["4:00 PM", "Green Tea + Dark Chocolate", "Enhances cognitive function"],
        ["7:00 PM", "Salmon + Vegetables", "Promotes relaxation & sleep"]
    ];

    mealPlan.forEach(row => {
        $("#meal-table tbody").append(`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`);
    });

    // Hydration Data Points
    const hydrationLevels = [95, 90, 85, 80, 75, 70, 65, 60];
    const hydrationTimes = ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM", "12 AM", "3 AM"];

    function updateHydrationChart(newValue) {
        hydrationLevels.shift();
        hydrationLevels.push(newValue);
        chart.update();
    }

    // Hydration Chart
    var ctx = document.getElementById("hydrationChart").getContext("2d");
    var chart = new Chart(ctx, {
        type: "line",
        data: {
            labels: hydrationTimes,
            datasets: [{
                label: "Hydration Level (%)",
                data: hydrationLevels,
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

    // Interactive Water Tracker
    let currentWaterIntake = 0;
    const dailyGoal = 2000;

    $("#track-water").click(function () {
        if (currentWaterIntake < dailyGoal) {
            currentWaterIntake += 250; // Add 250ml per click
            $("#current-intake").text(`💧 ${currentWaterIntake}ml / ${dailyGoal}ml`);
            updateHydrationChart(95 - (currentWaterIntake / 2000) * 30);

            if (currentWaterIntake >= dailyGoal) {
                alert("✅ You have met your daily water intake goal!");
            }
        } else {
            alert("🚀 You've already reached your hydration goal!");
        }
    });

    $("#reset-water").click(function () {
        currentWaterIntake = 0;
        $("#current-intake").text(`💧 ${currentWaterIntake}ml / ${dailyGoal}ml`);
        updateHydrationChart(95);
    });

    // Meal Logging
    let loggedMeals = 0;
    $("#log-meal").click(function () {
        loggedMeals++;
        $("#meal-count").text(`🍽 Meals Logged: ${loggedMeals}`);
    });

    $("#reset-meal").click(function () {
        loggedMeals = 0;
        $("#meal-count").text(`🍽 Meals Logged: ${loggedMeals}`);
    });
});
