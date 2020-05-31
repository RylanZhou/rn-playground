import React from 'react'
import { FlatList } from 'react-native'

import { CATEGORIES } from '../mock/data'
import CategoryGridTile from '../Components/CategoryGridTile'

const CategoriesScreen = (props) => {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      numColumns={2}
      renderItem={({ item }) => (
        <CategoryGridTile
          category={item}
          onSelect={() => {
            props.navigation.navigate({
              routeName: 'CategoryMeals',
              params: {
                category: item
              }
            })
          }}
        />
      )}
    />
  )
}

export default CategoriesScreen
