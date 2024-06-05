function handlerRightSwipe(event) {
    let doneTaskList = document.getElementById("doneTaskList");
    let clonedElement = this.cloneNode(true);
    $(clonedElement).on('swipeleft', handlerLeftSwipe)
    $(this).hide("slow", () => {
        this.parentNode.removeChild(this);
        if (isDoneTaskListEmpty()) {
            doneTaskList.parentNode.hidden = false;
        }
        doneTaskList.appendChild(clonedElement);
    });
}


function attributSwitchLister(instance) {
    $(instance).on('swiperight', handlerRightSwipe)
    $(instance).on('swipeleft', handlerLeftSwipe)
}

function isDoneTaskListEmpty() {
    const doneTaskList = document.getElementById("doneTaskList");
    const list_li = doneTaskList.getElementsByTagName("li")
    if (list_li.length == 0) {
        return true
    } else {
        return false
    }
}

function handlerLeftSwipe(event) {
    $(this).hide("slow", function () {
        $(this).remove();
    })
}

function ajouter() {
    let console = document.getElementById("console")
    const taskList = document.getElementById("taskList")
    if (taskFieldText.value) {
        const li_element = document.createElement("li");
        li_element.innerHTML = taskFieldText.value;
        attributSwitchLister(li_element)
        taskList.appendChild(li_element);
        $("#taskList").listview('refresh')
        $("#taskFieldText").focus()

    }
}

function reset() {
    const taskList = document.getElementById("taskList");
    const list_li = taskList.getElementsByTagName("li")
    while (list_li[0]) {
        taskList.removeChild(list_li[0])
    }
}