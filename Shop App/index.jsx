import React, { useState } from 'react'
import { Provider } from 'react-redux'
import { StatusBar } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'

import store from './Store'
import ShopNavigator from './Navigation/ShopNavigator'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf')
  })
}

const ShopApp = () => {
  const [fontLoaded, setFontLoaded] = useState(false)

  if (!fontLoaded) {
    return (
      <AppLoading
        onFinish={() => setFontLoaded(true)}
        startAsync={fetchFonts}
      />
    )
  }

  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" />
      <ShopNavigator />
    </Provider>
  )
}

export default ShopApp
