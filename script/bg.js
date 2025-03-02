const colors = ["#FFFFFF", "#2C3E50", "#3357FF", "#E74C3C", "#33FF57", "#9B59B6", "#C6E4D6", "#2A4D97", "#F39C12", "#1ABC9C", "#80B4FB", "#FF5733"];
let currentIndex = 0;

function changeBackgroundColor() {
    currentIndex = (currentIndex + 1) % colors.length;
    document.body.style.backgroundColor = colors[currentIndex];

    localStorage.setItem("backgroundColor", colors[currentIndex]);
}

document.getElementById("dynamic-bg-change").addEventListener("click", changeBackgroundColor);

window.onload = function () {
    const savedColor = localStorage.getItem("backgroundColor");
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        currentIndex = colors.indexOf(savedColor);
    }
};