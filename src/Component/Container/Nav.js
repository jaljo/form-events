import Nav from '../View/Nav'
import { connect } from 'react-redux'
import { compose } from 'ramda'
import {
  open as openSeoPanel,
  close as closeSeoPanel,
} from '../../Redux/State/SeoPanel'
import {
  open as openMetaPanel,
  close as closeMetaPanel,
} from '../../Redux/State/MetaPanel'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  isSeoPanelOpened: state.SeoPanel.isOpened,
  isMetaPanelOpened: state.MetaPanel.isOpened,
})

// mapDispatchToProps :: (Action * -> State) -> Props
const mapDispatchToProps = dispatch => ({
  openSeoPanel: compose(dispatch, openSeoPanel),
  closeSeoPanel: compose(dispatch, closeSeoPanel),
  openMetaPanel: compose(dispatch, openMetaPanel),
  closeMetaPanel: compose(dispatch, closeMetaPanel),
})

// Nav :: Props -> React.Component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Nav)
