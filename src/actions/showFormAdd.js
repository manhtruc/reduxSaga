import * as showTypes from '../constants/showFormAdd'

export const showFormAddAction = () => {
    return {
        type: showTypes.SHOW_FORM_ADD
    }
}

export const hideFormAddAction = () => {
    return {
        type: showTypes.HIDE_FORM_ADD
    }
}