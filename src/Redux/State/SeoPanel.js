import { createReducer } from '../../Util'
import { always } from 'ramda'

// SeoPanel initial state
export const INITIAL_STATE = {
  isOpened: false,
  isOpening: false,
}

// SeoPanel action creators
export const OPEN = '@form-events/SeoPanel/OPEN'
export const MOUNTED = '@form-events/SeoPanel/MOUNTED'
export const CLOSE = '@form-events/SeoPanel/CLOSE'
export const CLOSED = '@form-events/SeoPanel/CLOSED'
export const SUBMIT_FORM = '@form-events/SeoPanel/SUBMIT_FORM'

// mounted :: () -> Action.MOUNTED
export const mounted = always({ type: MOUNTED })

// open :: () -> Action.OPEN
export const open = always({ type: OPEN })

// close :: () -> Action.CLOSE
export const close = always({ type: CLOSE })

// closed :: () Action.CLOSED
export const closed = always({ type: CLOSED })

// submitForm :: (String, String) -> Action.SUBMIT_FORM
export const submitForm = ({ title, description }) => ({
  type: SUBMIT_FORM,
  title,
  description,
})

// SeoPanel :: (State, Action *) -> State
export default createReducer(INITIAL_STATE, {
  [OPEN]: state => ({
    ...state,
    isOpened: true,
  }),
  [MOUNTED]: state => ({
    ...state,
    isOpening: true,
  }),
  [CLOSE]: state => ({
    ...state,
    isOpening: false,
  }),
  [CLOSED]: state => ({
    ...state,
    isOpened: false,
  }),
})
