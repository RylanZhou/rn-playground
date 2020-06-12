import React from 'react'
import { Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MyHeaderButton from '../Components/HeaderButton'

const FiltersScreen = () => {
  return (
    <View>
      <Text>This is filters screen.</Text>
    </View>
  )
}

FiltersScreen.navigationOptions = (navigationData) => {
  return {
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          iconName="ios-menu"
          onPress={() => {
            navigationData.navigation.toggleDrawer()
          }}
          title="menu"
        />
      </HeaderButtons>
    )
  }
}
export default FiltersScreen
