import React from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'

import store from './Store'
import ShopNavigator from './Navigation/ShopNavigator'

const ShopApp = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <ShopNavigator />
    </Provider>
  )
}

export default ShopApp
