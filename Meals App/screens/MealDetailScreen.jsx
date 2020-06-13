import React, { useEffect, useCallback } from 'react'
import { StyleSheet, ScrollView, Text, Image, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'

import MyHeaderButton from '../Components/HeaderButton'
import DefaultText from '../Components/DefaultText'
import { toggleFavorite } from '../Store/actions'

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <DefaultText>{props.children}</DefaultText>
    </View>
  )
}

const MealDetailScreen = (props) => {
  const id = props.navigation.getParam('mealId')

  const mealsAvailable = useSelector((state) => state.meals.meals)
  const isCurrentMealFavorite = useSelector((state) =>
    state.meals.favoriteMeals.some((each) => each.id === id)
  )
  const selectedMeal = mealsAvailable.find((each) => each.id === id)

  const dispatch = useDispatch()

  const toggleFavoriteHandler = useCallback(() => {
    dispatch(toggleFavorite(selectedMeal.id))
  }, [dispatch, selectedMeal])

  useEffect(() => {
    props.navigation.setParams({ toggleFavorite: toggleFavoriteHandler })
  }, [toggleFavoriteHandler])

  useEffect(() => {
    props.navigation.setParams({ isFavorite: isCurrentMealFavorite })
  }, [isCurrentMealFavorite])

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
  return {
    headerTitle: navigationData.navigation.getParam('mealTitle'),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={MyHeaderButton}>
        <Item
          iconName={
            navigationData.navigation.getParam('isFavorite')
              ? 'ios-heart'
              : 'ios-heart-empty'
          }
          onPress={navigationData.navigation.getParam('toggleFavorite')}
          title="Favorite"
        />
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
