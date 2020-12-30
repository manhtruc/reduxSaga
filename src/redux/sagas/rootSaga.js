import { call, delay, fork, put, take, takeEvery, takeLatest } from 'redux-saga/effects'
import { hideFormAddAction } from '../../actions/showFormAdd'
import { addNewDataSuccess, fetchDataTask, fetchDataTaskFailed, fetchDataTaskSuccess } from '../../actions/task'
import { hideLoading, showLoading } from '../../actions/ui'
import { addTask, deleteTask, getListByAxios, updateTask } from '../../apis/task'
import { STATUS_CODE } from '../../constants/index'
import * as taskTypes from '../../constants/task'

// fetch data 
function* watchFetchListTask() {
    while (true) {
        const action = yield take(taskTypes.FETCH_DATA_TASK)
        let resp = yield call(getListByAxios, action.payload)

        const { data, status } = resp

        yield put(showLoading())

        yield delay(300)

        if (status === STATUS_CODE.SUCCESS) {
            yield put(fetchDataTaskSuccess(data))
        } else {
            yield put(fetchDataTaskFailed(data))
        }

        yield put(hideLoading())
    }
}

//search task
function* handleFilterTask(payload) {
    yield delay(500)
    const { keyword } = payload

    yield put(fetchDataTask(
        keyword
    ))

    // const list = yield select(state => state.task.listTask)
    // const filterTask = list.filter(task => task.title.trim().includes(keyword.trim()))


    // yield put(filterTaskSuccess(filterTask))

    // if (!keyword) {
    //     const resp = yield call(getListByAxios)

    //     const { data, status } = resp

    //     if (status === STATUS_CODE.SUCCESS) {
    //         yield put(fetchDataTaskSuccess(data))
    //         yield put(hideFormAddAction())
    //     } else {
    //         yield put(fetchDataTaskFailed(data))
    //     }

    // }

}

//add new task
function* addNewDataSaga(payload) {

    const resp = yield call(addTask, payload.payload)

    const { data, status } = resp
    if (status === STATUS_CODE.CREATE) {
        yield put(addNewDataSuccess(data))
        yield put(hideFormAddAction())

    }
}

//delete task
function* deleteDataSaga(payload) {
    yield call(deleteTask, payload.payload.id)
}

//edit task
function* updateTaskSaga(payload) {
    yield call(updateTask, payload.payload.id, payload.payload)
    yield put(hideFormAddAction())
}


function* rootSaga() {
    yield fork(watchFetchListTask)
    yield takeLatest(taskTypes.FILTER_TASK, handleFilterTask)
    yield takeEvery(taskTypes.ADD_NEW_DATA, addNewDataSaga)
    yield takeEvery(taskTypes.DELETE_TASK_DATA, deleteDataSaga)
    yield takeEvery(taskTypes.UPDATE_TASK_DATA, updateTaskSaga)
}

export default rootSaga;