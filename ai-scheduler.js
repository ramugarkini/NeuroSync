$(document).ready(function () {
    // AI-generated schedule data
    const schedules = {
        study: [
            ["7:00 AM", "Wake up + Hydration", "Boosts brain oxygen & mental alertness"],
            ["7:30 AM - 10:00 AM", "Deep Study Session", "Peak cognitive performance time"],
            ["10:00 AM", "Breakfast: Whole grains + Protein", "Provides energy without drowsiness"],
            ["10:30 AM - 1:00 PM", "Practice Tests", "Best time for problem-solving"],
            ["1:00 PM", "Lunch: Balanced carbs + lean protein", "Sustains energy for revision"],
            ["2:00 PM - 3:00 PM", "Power Nap / Meditation", "Boosts memory retention"],
            ["3:00 PM - 5:00 PM", "Revisions & Notes Summarization", "Reinforces long-term memory"],
            ["10:00 PM - 6:00 AM", "AI-Optimized Sleep Cycle", "Enhances memory consolidation"]
        ],
        work: [
            ["6:00 AM", "Wake up + Sunlight & Water", "Regulates circadian rhythm"],
            ["6:30 AM", "Light Exercise", "Activates brain & body for work"],
            ["9:00 AM - 12:00 PM", "Deep Work Mode", "Brain’s peak productivity phase"],
            ["12:00 PM", "Lunch: Balanced meal", "Prevents post-lunch sluggishness"],
            ["2:00 PM - 4:00 PM", "Execution Tasks", "Brain enters structured processing mode"]
        ]
    };

    // Generate schedule on button click
    $("#generate-schedule").click(function () {
        const goal = $("#goal").val();
        const scheduleData = schedules[goal];
        $("#schedule-table tbody").empty();
        scheduleData.forEach(row => {
            $("#schedule-table tbody").append(`<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td></tr>`);
        });
    });
});
