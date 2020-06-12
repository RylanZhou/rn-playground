import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground
} from 'react-native'
import DefaultText from '../Components/DefaultText'

const MealItem = ({ meal, onSelectMeal }) => {
  return (
    <View style={styles.mealItem}>
      <TouchableOpacity onPress={onSelectMeal}>
        <View style={{ ...styles.mealHeader, ...styles.mealRow }}>
          <ImageBackground
            source={{ uri: meal.imageUrl }}
            style={styles.bgImage}
          >
            <View style={styles.titleContainer}>
              <Text numberOfLines={1} style={styles.title}>
                {meal.title}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealDetail, ...styles.mealRow }}>
          <DefaultText>{meal.duration}</DefaultText>
          <DefaultText>{meal.complexity.toUpperCase()}</DefaultText>
          <DefaultText>{meal.affordability.toUpperCase()}</DefaultText>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    margin: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f5f5f5'
  },
  mealRow: {
    flexDirection: 'row'
  },
  mealHeader: {
    height: '85%'
  },
  mealDetail: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '15%',
    paddingHorizontal: 10
  },
  bgImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end'
  },
  titleContainer: {
    paddingVertical: 5,
    paddingHorizontal: 12,
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 20,
    textAlign: 'center',
    color: 'white'
  }
})
