import * as uiTypes from '../constants/ui'

const uiInitialState = {
    showLoading: false
}

const uiReducer = (state = uiInitialState, action) => {
    switch (action.type) {
        case uiTypes.SHOW_LOADING:
            return { ...state, showLoading: true }
        case uiTypes.HIDE_LOADING:
            return { ...state, showLoading: false }
        default:
            return state
    }
}

export default uiReducer;