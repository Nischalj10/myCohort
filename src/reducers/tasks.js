import Task from "../models/task";

let initialState = {
    tasks : [{
        tasksName : '',
        status : '',
        taskId : '',
    }]
}

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TASK" :
            const addedTask = new Task(action.payload.taskName,action.payload.status ,action.payload.id)
            const updatedTasks = state.tasks.concat(addedTask)
            return {
                ...state,
                tasks: updatedTasks
            }
        default :
            return state
    }
}