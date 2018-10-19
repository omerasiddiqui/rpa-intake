var addProjectBtn = $(".addProject"),
    addTaskBtn = $(".addTask"),
    newProject = $(".newProject"),
    exit = $(".exit");

$(document).ready(function() {
    newProject.hide();

    addProjectBtn.on("click", function() {
        newProject.toggle();
    })

    exit.on("click", function() {
        newProject.hide();
    })
})