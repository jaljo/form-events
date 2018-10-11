import React from 'react';
import { Provider } from 'react-redux'
import Store from '../../Redux/Store'
import Nav from '../Container/Nav'
import './App.css'

// App :: Props -> React.Component
export default ({store = Store}) =>
  <Provider store={store}>
    <Nav />
  </Provider>
