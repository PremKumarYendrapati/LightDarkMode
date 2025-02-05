const toggleButton = document.getElementById("theme-toggle");
const body = document.body;

// Check if user has a saved preference
const currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
    body.classList.add("dark-mode");
    toggleButton.textContent = "☀️ Light Mode";
}

// Toggle function
toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
        toggleButton.textContent = "☀️ Light Mode";
    } else {
        localStorage.setItem("theme", "light");
        toggleButton.textContent = "🌙 Dark Mode";
    }
});
