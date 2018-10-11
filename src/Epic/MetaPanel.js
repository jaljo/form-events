import { combineEpics, ofType } from 'redux-observable'
import { delay, map } from 'rxjs/operators'
import { CLOSE, close as closeSeoPanel, closed } from '../Redux/State/SeoPanel'
import { OPEN as OPEN_META_PANEL } from '../Redux/State/MetaPanel'

// closeSeoPanelEpic :: Observable Action Error -> Observable Action.CLOSE _
const closeSeoPanelEpic = action$ => action$.pipe(
  ofType(OPEN_META_PANEL),
  map(closeSeoPanel),
)

// closeSeoPanelEpic :: Observable Action Error -> Observable Action.CLOSED _
const delaySeoPanelClosingEpic = action$ => action$.pipe(
  ofType(CLOSE),
  // wait for css transition to complete
  delay(200),
  map(closed),
)

export default combineEpics(
  closeSeoPanelEpic,
  delaySeoPanelClosingEpic,
)
