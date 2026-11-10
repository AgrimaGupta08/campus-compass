
function addTask() {

    var taskInput = document.getElementById("task");

    var taskValue = taskInput.value;

    if (taskValue === "") {
        alert("Please enter a task!");
    }
    else {

        var newTask = document.createElement("li");
        
var checkbox = document.createElement("input");

checkbox.type = "checkbox";

checkbox.onclick = function() {
    if (checkbox.checked) {
        newTask.style.textDecoration = "line-through";
    }
    else {
        newTask.style.textDecoration = "none";
    }
};

var taskText = document.createElement("span");

taskText.textContent = taskValue;

newTask.appendChild(checkbox);
newTask.appendChild(taskText);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.setAttribute("onclick", "removeTask(this)");
        newTask.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(newTask);


    }

}
function removeTask(button) {
    button.parentElement.remove();
}

function calculateAttendance() {

    var attended = Number(document.getElementById("attended").value);

    var total = Number(document.getElementById("total").value);

    if (total <= 0 || attended < 0 || attended > total) {

        document.getElementById("result").textContent =
            "Please enter valid numbers!";

    }
    else {

        var percentage = (attended / total) * 100;

        document.getElementById("result").textContent =
            "Your Attendance: " + percentage.toFixed(2) + "%";

    }

}
