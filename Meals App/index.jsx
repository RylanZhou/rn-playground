import React, { useState } from 'react'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import { enableScreens } from 'react-native-screens'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import MealsNavigator from './navigator'
import reducers from './Store/reducers'

// For increasing performance
enableScreens()

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('../assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('../assets/fonts/OpenSans-Bold.ttf')
  })
}

const MealsApp = () => {
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
    <Provider store={createStore(reducers)}>
      <MealsNavigator />
    </Provider>
  )
}

export default MealsApp
