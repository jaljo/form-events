import SeoPanel from '../View/SeoPanel.js'
import { compose, pipe, tap } from 'ramda'
import { close, mounted, submitForm } from '../../Redux/State/SeoPanel'
import { connect } from 'react-redux'
import { componentDidMount, componentWillUnmount } from 'react-functional-lifecycle'

// mapStateToProps :: State -> Props
const mapStateToProps = state => ({
  isOpening: state.SeoPanel.isOpening,
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
    () => document.querySelector('.seo-panel form'),
    getFormData,
    submitForm,
    dispatch,
  ),
})

// getFormData :: Element -> Object
const getFormData = formElement => ({
  title: formElement.title.value,
  description: formElement.description.value,
})

// @FIXME
// didMount :: Props -> Action.MOUNTED
const didMount = ({ mounted }) => setTimeout(mounted, 1)

// willUnmount :: Props -> Action.SUBMIT_FORM
const willUnmount = ({ submitForm }) => submitForm()

// SeoPanelLifecycle :: React.Component -> React.Component
const SeoPanelLifecycle = compose(
  componentDidMount(didMount),
  componentWillUnmount(willUnmount),
)(SeoPanel)

// SeoPanel :: Props -> React.Component
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SeoPanelLifecycle)
