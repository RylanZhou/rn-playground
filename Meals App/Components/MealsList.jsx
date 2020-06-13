import React from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import MealItem from './MealItem'

const MealsList = (props) => {
  return (
    <View style={styles.screen}>
      <FlatList
        data={props.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <MealItem
            meal={item}
            onSelectMeal={() => {
              props.navigation.navigate({
                routeName: 'MealDetail',
                params: {
                  mealId: item.id,
                  mealTitle: item.title
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

export default MealsList

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
