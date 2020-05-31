import React from 'react'
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Platform,
  TouchableNativeFeedback
} from 'react-native'

const CategoryGridTile = ({ category, onSelect }) => {
  let TouchableComponent = TouchableOpacity
  if (Platform.OS === 'android' && Platform.Version > 21) {
    TouchableComponent = TouchableNativeFeedback
  }

  return (
    <View style={styles.gridItem}>
      <TouchableComponent onPress={onSelect} style={{ flex: 1 }}>
        <View style={{ ...styles.container, backgroundColor: category.color }}>
          <Text numberOfLines={2} style={styles.title}>
            {category.title}
          </Text>
        </View>
      </TouchableComponent>
    </View>
  )
}

export default CategoryGridTile

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    // For android's ripple effect
    overflow:
      Platform.OS === 'android' && Platform.Version > 21 ? 'hidden' : 'visible',
    borderRadius: 10,
    elevation: 5 // For android's shadow effects
  },
  container: {
    flex: 1,
    padding: 15,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    borderRadius: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 2 }
  },
  title: {
    fontSize: 22,
    textAlign: 'right',
    fontFamily: 'open-sans-bold'
  }
})
