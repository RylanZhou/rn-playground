import React from 'react'
import { View, Text } from 'react-native'
import { Provider } from 'react-redux'

import store from './Store'

const ShopApp = () => {
  return (
    <Provider store={store}>
      <View>
        <Text>This is a Shop APP</Text>
      </View>
    </Provider>
  )
}

export default ShopApp
