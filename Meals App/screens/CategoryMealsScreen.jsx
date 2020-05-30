import React from 'react'
import { StyleSheet, Text, Button, View } from 'react-native'

const CategoryMealsScreen = (props) => {
  // TODO: Display title in header
  const { id, title } = props.navigation.getParam('category')

  return (
    <View>
      <Text>This is Category Meals Screen</Text>
      <Button
        onPress={() =>
          props.navigation.navigate({
            routeName: 'MealDetail'
          })
        }
        title="Go to Details"
      />
      <Button onPress={() => props.navigation.goBack()} title="Go Back" />
    </View>
  )
}

export default CategoryMealsScreen

const styles = StyleSheet.create({})
