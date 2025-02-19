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

    // Hydration Graph
    var ctx = document.getElementById("hydrationChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
            datasets: [{
                label: "Hydration Level",
                data: [90, 85, 80, 75, 70, 65],
                borderColor: "#00ffff",
                backgroundColor: "rgba(0, 255, 255, 0.2)",
                borderWidth: 2
            }]
        },
        options: { responsive: true }
    });
});
