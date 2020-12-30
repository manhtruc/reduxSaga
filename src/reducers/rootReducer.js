import { combineReducers } from "redux";

import task from './task'
import uiReducer from './uiReducer'
import showForm from './showFormAdd'


const rootReducer = combineReducers({
    task,
    uiReducer,
    showForm
})

export default rootReducer