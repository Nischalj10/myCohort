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
        case "DELETE_TASK" :
            var index = state.tasks.findIndex(function (obj){
                return obj.id === action.payload.id
            })
            let updatedTasks2 = state.tasks.filter((item , i) => i !== index)
            return {
                ...state,
                tasks: updatedTasks2
            }
        default :
            return state
    }
}