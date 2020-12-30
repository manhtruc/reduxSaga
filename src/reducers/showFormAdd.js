import * as showTypes from '../constants/showFormAdd'

const showFormAddInitialState = {
    showStatus: false
}


const showForm = (state = showFormAddInitialState, action) => {
    switch (action.type) {
        case showTypes.SHOW_FORM_ADD:
            return { ...state, showStatus: true }
        case showTypes.HIDE_FORM_ADD:
            return { ...state, showStatus: false }

        default:
            return state
    }
}

export default showForm; 