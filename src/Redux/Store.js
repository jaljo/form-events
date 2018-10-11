import { createStore, applyMiddleware } from 'redux'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { combineReducers } from 'redux';
import { default as MetaPanelEpic } from '../Epic/MetaPanel'
import { default as SeoPanelEpic } from '../Epic/SeoPanel'
import MetaPanel from './State/MetaPanel'
import SeoPanel from './State/SeoPanel'

const logger = store => next => action => {
  console.log('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  return result
}

const epicMiddleware = createEpicMiddleware()

const store = createStore(
  combineReducers({
    MetaPanel,
    SeoPanel,
  }),
  applyMiddleware(epicMiddleware),
  applyMiddleware(logger),
)

epicMiddleware.run(combineEpics(
  MetaPanelEpic,
  SeoPanelEpic,
))

export default store
