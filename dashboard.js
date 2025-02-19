$(document).ready(function () {
    // AI-generated smart recommendations
    const aiMessages = [
        "Optimize your schedule for better memory retention.",
        "Time for a quick hydration break!",
        "Your focus is dropping—take a deep breath.",
        "Good sleep ensures better performance. Plan accordingly.",
        "Boost your brain with Omega-3 rich food!"
    ];

    function updateAIMessage() {
        let message = aiMessages[Math.floor(Math.random() * aiMessages.length)];
        $("#ai-message").text(message);
    }

    updateAIMessage();
    setInterval(updateAIMessage, 5000);

    // Redirect to other pages
    window.redirectTo = function(page) {
        window.location.href = page;
    };
});
