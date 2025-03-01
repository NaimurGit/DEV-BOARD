function updateDate() {
    let today = new Date();
    let options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById("currentDate").innerText = today.toLocaleDateString("en-US", options);
}
updateDate();