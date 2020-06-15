import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import ProductItem from '../../Components/ProductItem'

const ProductsOverview = (props) => {
  const products = useSelector((state) => state.products.availableProducts)

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductItem
          {...item}
          onViewDetail={() => {
            props.navigation.navigate('ProductDetail', {
              productId: item.id,
              productTitle: item.title
            })
          }}
        />
      )}
    />
  )
}

ProductsOverview.navigationOptions = {
  headerTitle: 'All Products'
}

export default ProductsOverview
