import Status from "../models/status";
import Task from "../models/task";

let initialState = {
    status :  [{
        statusName: '',
        color : '',
        tasks : [Task],
        id : '',
    }]
}

export const statusReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_STATUS' :
            const addedStatus = new Status(action.payload.statusName,
                action.payload.labelColor, action.payload.tasks,
                action.payload.id)
            const updatedStatus = state.status.concat(addedStatus)
            return {
                ...state,
                status: updatedStatus
            }
        default :
            return state
    }
}