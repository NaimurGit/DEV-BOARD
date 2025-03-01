const colors = ["#FF5733", "#33FF57", "#3357FF", "#F39C12", "#9B59B6", "#E74C3C", "#1ABC9C", "#2C3E50"];
let currentIndex = 0;

// Function to change background color
function changeBackgroundColor() {
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentIndex];

    // Save the selected color to localStorage
    localStorage.setItem("backgroundColor", colors[currentIndex]);
}

// Event Listener for button click
document.getElementById("dynamic-bg-change").addEventListener("click", changeBackgroundColor);

// Load saved background color on page load
window.onload = function () {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        currentIndex = colors.indexOf(savedColor);
    }
};