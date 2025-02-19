$(document).ready(function () {
    // AI-generated insights
    const aiInsights = [
        "Optimize deep work in the morning when your focus is highest.",
        "Avoid heavy meals before study sessions to prevent sluggishness.",
        "Power naps of 20 minutes improve memory retention.",
        "Regular hydration boosts brain function by 10%.",
        "AI suggests alternating between study and active breaks for better concentration."
    ];

    function updateAITip() {
        let tip = aiInsights[Math.floor(Math.random() * aiInsights.length)];
        $("#ai-tip").text(tip);
    }

    updateAITip();
    setInterval(updateAITip, 5000);

    // AI Schedule Templates
    const schedules = {
        "study": [
            ["6:30 AM", "Wake Up & Hydration", "Boosts brain oxygen & mental alertness"],
            ["7:00 AM - 10:00 AM", "Deep Study Session (Focus Topics)", "Best cognitive performance time"],
            ["10:00 AM", "Breakfast (Whole grains + Protein + Green Tea)", "Provides energy without post-meal drowsiness"],
            ["10:30 AM - 1:00 PM", "Practice Tests (Logic-Based Subjects)", "Peak problem-solving ability"],
            ["1:00 PM", "Lunch (Balanced Carbs + Lean Protein)", "Sustains energy for revision"],
            ["2:00 PM - 3:00 PM", "Break or Power Nap (20 min)", "Boosts memory retention"],
            ["3:00 PM - 5:00 PM", "Revision & Notes Summarization", "Reinforces long-term memory"],
            ["5:30 PM - 6:30 PM", "Exercise / Walk", "Increases brain oxygen for better focus"],
            ["7:00 PM", "Dinner (Omega-3 & Magnesium-Rich Foods)", "Enhances relaxation & sleep quality"],
            ["8:00 PM - 9:30 PM", "Passive Learning (Videos, Flashcards)", "Best for absorbing conceptual knowledge"],
            ["10:00 PM", "Prepare for Bedtime", "Ensures deep REM sleep for memory consolidation"]
        ],
        "work": [
            ["6:00 AM", "Wake Up + Sunlight Exposure", "Regulates circadian rhythm"],
            ["6:30 AM", "Light Exercise (Stretching, Walking)", "Activates brain & body for work"],
            ["7:30 AM", "Breakfast (Protein + Complex Carbs)", "Sustains energy for morning work"],
            ["9:00 AM - 12:00 PM", "Deep Work Mode (High-Focus Tasks)", "Brain’s peak productivity phase"],
            ["12:00 PM", "Lunch (Balanced Meal - No Heavy Carbs)", "Prevents post-lunch sluggishness"],
            ["1:00 PM - 2:00 PM", "Break or Power Nap (20 min)", "Prevents afternoon energy dip"],
            ["2:00 PM - 4:00 PM", "Execution Tasks (Coding, Writing, Analysis)", "Brain enters structured processing mode"],
            ["4:00 PM", "Green Tea + Brain Snack (Dark Chocolate, Nuts)", "Restores mental energy"],
            ["5:00 PM - 6:00 PM", "Exercise or Walk", "Reduces stress & resets focus"],
            ["7:00 PM", "Dinner (Light Meal, No Caffeine)", "Prepares body for relaxation"],
            ["9:00 PM", "Unplug from Work (Reading, Music, Meditation)", "Helps wind down before sleep"],
            ["10:00 PM", "Sleep Cycle Optimization", "Ensures deep recovery for the next day"]
        ]
    };

    // Generate Schedule on User Selection
    $("#generate-schedule").click(function () {
        let goal = $("#goal").val();
        let scheduleData = schedules[goal];

        // Clear previous schedule
        $("#schedule-table tbody").empty();

        // Populate new AI-generated schedule
        scheduleData.forEach(row => {
            $("#schedule-table tbody").append(`<tr>
                <td>${row[0]}</td>
                <td>${row[1]}</td>
                <td>${row[2]}</td>
            </tr>`);
        });
    });
});
