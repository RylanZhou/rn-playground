import React from 'react'
import { FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import ProductItem from '../../Components/ProductItem'
import * as cartActions from '../../Store/actions/cart'

const ProductsOverview = (props) => {
  const products = useSelector((state) => state.products.availableProducts)
  const dispatch = useDispatch()

  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <ProductItem
          {...item}
          onAddToCart={() => {
            dispatch(cartActions.addToCart(item))
          }}
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
