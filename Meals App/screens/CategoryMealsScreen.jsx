import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { MEALS } from '../mock/data'
import MealItem from '../Components/MealItem'

const CategoryMealsScreen = (props) => {
  const displayMeals = MEALS.filter((each) =>
    each.categoryIds.includes(props.navigation.getParam('category').id)
  )
  return (
    <View style={styles.screen}>
      <FlatList
        data={displayMeals}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            meal={item}
            onSelectMeal={() => {
              props.navigation.navigate({
                routeName: 'MealDetail',
                params: {
                  mealId: item.id
                }
              })
            }}
          />
        )}
        style={{ width: '100%' }}
      />
    </View>
  )
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
