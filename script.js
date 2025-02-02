document.addEventListener("DOMContentLoaded", function() {
    const greetingElement = document.getElementById("greeting"); // To jest odpowiedzialne za wyświetlanie powitania
    const loginBtn = document.getElementById("loginBtn");

    function updateGreeting() {
        const currentHour = new Date().getHours();
        
        // Powitanie w zależności od godziny
        if (currentHour >= 7 && currentHour < 17) {
            greetingElement.textContent = "Dzień dobry!";
        } else {
            greetingElement.textContent = "Dobry wieczór!";
        }
    }

    // Zmiana powitania w zależności od godziny
    updateGreeting();

    // Przekierowanie po kliknięciu przycisku
    loginBtn.addEventListener("click", function() {
        window.location.href = "dashboard.html";
    });
});
