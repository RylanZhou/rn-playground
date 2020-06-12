import React from 'react'
import { FlatList } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import { CATEGORIES } from '../mock/data'
import CategoryGridTile from '../Components/CategoryGridTile'
import MyHeaderButton from '../Components/HeaderButton'

const CategoriesScreen = (props) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <CategoryGridTile
          category={item}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'CategoryMeals',
              params: {
                category: item
              }
            })
          }}
        />
      )}
    />
  )
}

CategoriesScreen.navigationOptions = (navigationData) => {
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

export default CategoriesScreen
