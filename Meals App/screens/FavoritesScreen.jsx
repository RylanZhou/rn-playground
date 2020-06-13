import React from 'react'
import { useSelector } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MealsList from '../Components/MealsList'
import MyHeaderButton from '../Components/HeaderButton'

const FavoritesScreen = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals)

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
