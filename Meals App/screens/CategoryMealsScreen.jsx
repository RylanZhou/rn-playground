import React from 'react'
import { useSelector } from 'react-redux'
import { View, StyleSheet } from 'react-native'

import MealsList from '../Components/MealsList'
import DefaultText from '../Components/DefaultText'

const CategoryMealsScreen = (props) => {
  // Retrieve data from redux. "state.meals" is to get mealsReducer.
  const mealsAvailable = useSelector((state) => state.meals.filteredMeals)

  const displayMeals = mealsAvailable.filter((each) =>
    each.categoryIds.includes(props.navigation.getParam('category').id)
  )
  if (!displayMeals.length) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found. Maybe check your filters?</DefaultText>
      </View>
    )
  }

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

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
