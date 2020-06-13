import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import MealItem from './MealItem'
import { useSelector } from 'react-redux'

const MealsList = (props) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals)

  return (
    <View style={styles.screen}>
      <FlatList
        data={props.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isFavorite = favoriteMeals.some((each) => each.id === item.id)
          return (
            // ATTENTION: Using hooks not in the root level of a component is NOT allowed.
            <MealItem
              meal={item}
              onSelectMeal={() => {
                props.navigation.navigate({
                  routeName: 'MealDetail',
                  params: {
                    mealId: item.id,
                    mealTitle: item.title,
                    isFavorite
                  }
                })
              }}
            />
          )
        }}
        style={{ width: '100%' }}
      />
    </View>
  )
}

export default MealsList

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
