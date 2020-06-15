import React from 'react'
import { ScrollView, Button, Text, Image, StyleSheet, View } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { COLORS } from '../../Constants'
import * as cartActions from '../../Store/actions/cart'

const ProductDetail = (props) => {
  const productId = props.navigation.getParam('productId')
  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((each) => each.id === productId)
  )
  const dispatch = useDispatch()

  return (
    <ScrollView>
      <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
      <View style={styles.action}>
        <Button
          color={COLORS.primary}
          onPress={() => {
            dispatch(cartActions.addToCart(selectedProduct))
          }}
          title="Add to Cart"
        />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  )
}

ProductDetail.navigationOptions = (navData) => {
  return {
    headerTitle: navData.navigation.getParam('productTitle')
  }
}

export default ProductDetail

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: '100%'
  },
  action: {
    marginVertical: 10,
    alignItems: 'center'
  },
  price: {
    marginVertical: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#888',
    fontFamily: 'open-sans-bold'
  },
  description: {
    paddingHorizontal: 20,
    fontSize: 14,
    textAlign: 'center',
    fontFamily: 'open-sans'
  }
})
