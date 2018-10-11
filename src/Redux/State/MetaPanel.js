import { createReducer } from '../../Util'
import { always } from 'ramda'

// MetaPanel initial state
export const INITIAL_STATE = {
  isOpened: false,
  isOpening: false,
}

// MetaPanel action creators
export const OPEN = '@form-events/MetaPanel/OPEN'
export const MOUNTED = '@form-events/MetaPanel/MOUNTED'
export const CLOSE = '@form-events/MetaPanel/CLOSE'
export const CLOSED = '@form-events/MetaPanel/CLOSED'
export const SUBMIT_FORM = '@form-events/MetaPanel/SUBMIT_FORM'

// mounted :: () -> Action.MOUNTED
export const mounted = always({ type: MOUNTED })

// open :: () -> Action.OPEN
export const open = always({ type: OPEN })

// close :: () -> Action.CLOSE
export const close = always({ type: CLOSE })

// closed :: () Action.CLOSED
export const closed = always({ type: CLOSED })

// submitForm :: (String, String) -> Action.SUBMIT_FORM
export const submitForm = ({ slug, shortTitle }) => ({
  type: SUBMIT_FORM,
  slug,
  shortTitle,
})

// MetaPanel :: (State, Action *) -> State
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
