import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'

import { CATEGORIES } from '../mock/data'
import { COLORS } from '../Constants'

const CategoriesScreen = (props) => {
  return (
    <FlatList
      data={CATEGORIES}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.gridItem}>
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              props.navigation.navigate({
                routeName: 'CategoryMeals',
                params: {
                  category: {
                    id: item.id,
                    title: item.title
                  }
                }
              })
            }}
          >
            <Text>{item.title}</Text>
          </TouchableOpacity>
        </View>
      )}
    />
  )
}

// navigationOptions will be checked by react-navigation
CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories',
  headerStyle: {
    backgroundColor: COLORS.primary
  },
  headerTintColor: 'white'
}

export default CategoriesScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
})
