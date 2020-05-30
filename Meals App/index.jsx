import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import * as Font from 'expo-font'
import { AppLoading } from 'expo'
import MealsNavigator from './navigator'

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

  return <MealsNavigator />
}

export default MealsApp

const styles = StyleSheet.create({})
