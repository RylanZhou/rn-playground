import React from 'react'
import { MEALS } from '../mock/data'
import MealsList from '../Components/MealsList'

const CategoryMealsScreen = (props) => {
  const displayMeals = MEALS.filter((each) =>
    each.categoryIds.includes(props.navigation.getParam('category').id)
  )
  return <MealsList data={displayMeals} navigation={props.navigation} />
}

// NOTE: navigationOptions can also be a function for automatically getting current navigationData as a parameter. Return an object for final render config.
CategoryMealsScreen.navigationOptions = (navigationData) => {
  const { title } = navigationData.navigation.getParam('category')
  return {
    headerTitle: title
  }
}

export default CategoryMealsScreen
