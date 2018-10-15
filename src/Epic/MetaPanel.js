import { combineEpics, ofType } from 'redux-observable'
import { delay, map } from 'rxjs/operators'
import { CLOSE, close as closeMetaPanel, closed } from '../Redux/State/MetaPanel'
import { OPEN as OPEN_SEO_PANEL } from '../Redux/State/SeoPanel'

// closeMetaPanelEpic :: Observable Action Error -> Observable Action.CLOSE _
const closeMetaPanelEpic = action$ => action$.pipe(
  ofType(OPEN_SEO_PANEL),
  map(closeMetaPanel),
)

// delayMetaPanelClosingEpic :: Observable Action Error -> Observable Action.CLOSED _
const delayMetaPanelClosingEpic = action$ => action$.pipe(
  ofType(CLOSE),
  // wait for css transition to complete
  delay(200),
  map(closed),
)

export default combineEpics(
  closeMetaPanelEpic,
  delayMetaPanelClosingEpic,
)
