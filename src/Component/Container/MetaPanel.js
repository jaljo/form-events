import MetaPanel from '../View/MetaPanel.js'
import { compose, pipe, tap } from 'ramda'
import { close, mounted, submitForm } from '../../Redux/State/MetaPanel'
import { connect } from 'react-redux'
import { componentDidMount, componentWillUnmount } from 'react-functional-lifecycle'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  isOpening: state.MetaPanel.isOpening,
})

// mapDispatchToProps :: (State, Action *) -> Props
const mapDispatchToProps = dispatch => ({
  mounted: compose(dispatch, mounted),
  close: pipe(
    // prevent form submission default behavior, which reloads the page
    tap(e => e.preventDefault()),
    compose(dispatch, close)
  ),
  submitForm: pipe(
    () => document.querySelector('.meta-panel form'),
    getFormData,
    submitForm,
    dispatch,
  ),
})

// getFormData :: Element -> Object
const getFormData = formElement => ({
  slug: formElement.slug.value,
  shortTitle: formElement.shortTitle.value,
})

// @FIXME
// didMount :: Props -> Action.MOUNTED
const didMount = ({ mounted }) => setTimeout(mounted, 1)

// willUnmount :: Props -> Action.SUBMIT_FORM
const willUnmount = ({ submitForm }) => submitForm()

// MetaPanelLifecycle :: React.Component -> React.Component
const MetaPanelLifecycle = compose(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount),
)(MetaPanel)

// MetaPanel :: Props -> React.Component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MetaPanelLifecycle)
