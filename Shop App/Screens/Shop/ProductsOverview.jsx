import React from 'react'
import { FlatList } from 'react-native'
import { useSelector } from 'react-redux'

import ProductItem from '../../Components/ProductItem'

const ProductsOverview = () => {
  const products = useSelector((state) => state.products.availableProducts)

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <ProductItem {...item} />}
    />
  )
}

ProductsOverview.navigationOptions = {
  headerTitle: 'All Products'
}

export default ProductsOverview
