import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MyHeaderButton from '../Components/HeaderButton'
import { MEALS } from '../mock/data'

const MealDetailScreen = (props) => {
  return (
    <View>
      <Text>This is Meal Detail Screen</Text>
    </View>
  )
}

MealDetailScreen.navigationOptions = (navigationData) => {
  const selectedMeal = MEALS.find(
    (each) => each.id === navigationData.navigation.getParam('mealId')
  )
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item iconName="ios-heart" onPress={() => {}} title="Favorite" />
      </HeaderButtons>
    )
  }
}

export default MealDetailScreen

const styles = StyleSheet.create({})
