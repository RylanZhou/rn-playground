import React from 'react'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MealsList from '../Components/MealsList'
import MyHeaderButton from '../Components/HeaderButton'
import { MEALS } from '../mock/data'

const FavoritesScreen = (props) => {
  const favoriteMeals = MEALS.filter(
    (each) => each.id === 'm1' || each.id === 'm2'
  )

  return <MealsList data={favoriteMeals} navigation={props.navigation} />
}

FavoritesScreen.navigationOptions = (navigationData) => {
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

export default FavoritesScreen
