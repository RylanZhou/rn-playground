import React from 'react'
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MyHeaderButton from '../Components/HeaderButton'
import DefaultText from '../Components/DefaultText'
import { MEALS } from '../mock/data'

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}

const MealDetailScreen = (props) => {
  const selectedMeal = MEALS.find(
    (each) => each.id === props.navigation.getParam('mealId')
  )

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.detail}>
        <DefaultText>{selectedMeal.duration}</DefaultText>
        <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
        <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
      </View>
      <Text style={styles.subTitles}>Ingredients</Text>
      {selectedMeal.ingredients.map((each) => (
        <ListItem key={each}>{each}</ListItem>
      ))}
      <Text style={styles.subTitles}>Steps</Text>
      {selectedMeal.steps.map((each) => (
        <ListItem key={each}>{each}</ListItem>
      ))}
    </ScrollView>
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

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  subTitles: {
    textAlign: 'center',
    fontFamily: 'open-sans-bold',
    fontSize: 22
  },
  detail: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 15
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1
  }
})
