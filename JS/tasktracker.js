let data = [
    {"name": "Test Task #1", "date": "12/01/2012", "assigned": "John Doe" },
    {"name": "Test Task #2", "date": "12/02/2012", "assigned": "John Doe" },
    {"name": "Test Task #3", "date": "12/03/2012", "assigned": "John Doe" },
    {"name": "Test Task #4", "date": "12/04/2012", "assigned": "John Doe" },
    {"name": "Test Task #5", "date": "12/05/2012", "assigned": "John Doe" },
    {"name": "Test Task #6", "date": "12/06/2012", "assigned": "John Doe" },
    {"name": "Test Task #7", "date": "12/07/2012", "assigned": "John Doe" }
]

const pageLoad = (data) => {
    data.map((task) => {
        let etaskItem = `<div class='etask_item'>
                        <h4 class='etask_name'>${task.name}</h4>
                        <h4 class='etask_date'>${task.date}</h4>
                        <h4 class='etask_assigned'>${task.assigned}</h4>
                        </div>`;
        $(".task-wrapper").prepend(etaskItem);
    });
};

const addTasks = () => {
    let name = $(".name").val();
    let date = $(".date").val();
    let assigned = $(".assigned").val();
    let etaskItem = `<div class='etask_item'>
                    <h4 class='etask_name'>${name}</h4>
                    <h4 class='etask_date'>${date}</h4>
                    <h4 class='etask_assigned'>${assigned}</h4>
                    </div>`;
    $(".task-wrapper").prepend(etaskItem);
};

$(document).ready(() => {

    pageLoad(data);

    $("#task").on('submit',(event) => {
        event.preventDefault();
        addTasks();
        $("#task input[type='text']").val('');
    });

});
