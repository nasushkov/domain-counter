import {createAction} from 'redux-actions'

export const SUBMIT_MAIN_FORM = 'SUBMIT_MAIN_FORM'
export const UNLOCK_MAIN_FORM = 'UNLOCK_MAIN_FORM'

export const submitMainForm = createAction(SUBMIT_MAIN_FORM, (data, options) => ({data, options}))
export const unlockMainForm = createAction(UNLOCK_MAIN_FORM)