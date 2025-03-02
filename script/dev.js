const completeButtons= document.querySelectorAll(".complete-task");

for(let i = 0; i < completeButtons.length; i++){
    const completeBtn= completeButtons[i];
    completeBtn.addEventListener("click", function(event){
        completeBtn.setAttribute("disabled", true);
        alert("You have Completed The Task Successfully");
        const completeTask= completeBtn.getAttribute("disabled") === "true" ? 1 : 0;
        const currentTask= parseInt(document.getElementById("Task-Count").innerText);
        const TotalCompletejob= parseInt(document.getElementById("Complete-Task-Count").innerText);
        const remainingTask= currentTask - completeTask;

        if(remainingTask === 0){
            alert("Congratulation your job is done. Now you can enjoy.");
        }
        document.getElementById("Task-Count").innerText= remainingTask;
        const numOfCompleteJob= TotalCompletejob + completeTask;
        document.getElementById("Complete-Task-Count").innerText= numOfCompleteJob;

        const taskTitle= document.querySelectorAll(".title")[i].innerText;
        
        // Get real-time
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

        const taskLog= document.getElementById("activityLog");

        if (taskLog.innerHTML.trim() === "No activity yet...") {
            taskLog.innerHTML = "";
        }

        const div= document.createElement("div");
        div.innerHTML= `
            <div class="bg-[#F4F7FF] p-4 text-justify rounded-lg space-y-3 logs">
                <p> You have completed <b> ${taskTitle} </b> at ${timeString}</p>      
            </div>
        `
        taskLog.appendChild(div);
    });
}
document.getElementById("Clear-History").addEventListener("click", function(event){
    const taskLog = document.getElementById("activityLog");
    const logs= document.getElementsByClassName("logs");
    for(let i= 0; i < logs.length; i++){
        const log= logs[i];
        log.classList.add("hidden");
    }

    taskLog.innerHTML = "No activity yet...";
});

