import * as taskConstants from '../constants/task'


export const fetchDataTask = (payload) => {
    return {
        type: taskConstants.FETCH_DATA_TASK,
        payload
    }

}
export const fetchDataTaskSuccess = (payload) => {
    return {
        type: taskConstants.FETCH_DATA_TASK_SUCCESS,
        payload
    }
}

export const fetchDataTaskFailed = (payload) => {
    return {
        type: taskConstants.FETCH_DATA_TASK_FAILED,
        payload
    }
}

export const filterTask = (keyword) => {
    return {
        type: taskConstants.FILTER_TASK,
        keyword
    }
}

export const filterTaskSuccess = (payload) => {
    return {
        type: taskConstants.FILTER_TASK_SUCCESS,
        payload
    }
}

// export const fetchListTask = () => {
//     return dispatch => {
//         dispatch(fetchDataTask())
//         return taskApis.getList().then(res => dispatch(fetchDataTaskSuccess(res.data))).catch(err => dispatch(fetchDataTaskFailed(err)))
//     }
// }

export const addNewData = (payload) => {
    return {
        type: taskConstants.ADD_NEW_DATA,
        payload
    }
}

export const addNewDataSuccess = (payload) => {
    return {
        type: taskConstants.ADD_NEW_DATA_SUCCESS,
        payload
    }
}

// remove 
export const deleteTaskData = (payload) => {
    return {
        type: taskConstants.DELETE_TASK_DATA,
        payload
    }
}

// update 
export const updateTaskData = (payload) => {
    return {
        type: taskConstants.UPDATE_TASK_DATA,
        payload
    }
}

export const updateTaskDataSuccess = (payload) => {
    return {
        type: taskConstants.UPDATE_TASK_DATA_SUCCESS,
        payload
    }
}