// adding the tasks
// Targetting btn class on "add task"
$(".btn").on("click", function(){
    var newTask = prompt("what is the next task?");
    console.log("new task: ", newTask);
// placing new task onto html
    var addedTask = "<li><span>" + newTask + "</span><i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i></li>";
// targetting "ul" with an id "tak-list" and appending the addedTask
    $("#task-list").append(addedTask);
});

//deleting the task:
//targeting "fa" class on the trash can (item appears trashed but does not go away)
$(".fa").click(function(){
    // 
    //targeting the parent element of the "trash can" and applying .remove()method on it (clicking the trash can removes it)

    $(this).parent().remove();
    
});