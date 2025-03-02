const colors = [ "#2C3E50", "#3357FF", "#E74C3C", "#33FF57", "#9B59B6", "#C6E4D6", "#2A4D97", "#F39C12", "#1ABC9C", "#80B4FB", "#FF5733"];
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