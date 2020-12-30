import * as taskConstants from '../constants/task'

const taskInitialState = {
    listTask: []
}

const task = (state = taskInitialState, action) => {
    switch (action.type) {
        // fetch data task 
        case taskConstants.FETCH_DATA_TASK:
            return { ...state, listTask: [] }

        case taskConstants.FETCH_DATA_TASK_SUCCESS:
            const listTask = action.payload

            return { ...state, listTask }


        // search task 
        case taskConstants.FILTER_TASK_SUCCESS:
            const filterTask = action.payload

            return { ...state, listTask: filterTask }

        // add new task 
        case taskConstants.ADD_NEW_DATA_SUCCESS:
            const data = action.payload
            const newListData = [data].concat([...state.listTask])

            return { ...state, listTask: newListData }

        // delete task
        case taskConstants.DELETE_TASK_DATA:
            const deleteData = action.payload
            const { id } = deleteData

            const deletedList = [...state.listTask].filter(item => item.id !== id)

            return { ...state, listTask: deletedList }

        //edit task
        case taskConstants.UPDATE_TASK_DATA:
            const updateData = action.payload
            const titleUpdate = updateData.title
            const descriptionUpdate = updateData.description
            const idUpdate = updateData.id

            // const updateList = [...state.listTask]
            // updateList.forEach(item => {
            //     if (item.id === idUpdate) {
            //         item.title = titleUpdate,
            //             item.description = descriptionUpdate
            //     }
            // })

            const updateList = state.listTask.map(task => (
                task.id === idUpdate ? {
                    ...task,
                    title: titleUpdate,
                    description: descriptionUpdate
                } : task
            ))

            return { ...state, listTask: updateList }
        default:
            return state
    }
}

export default task