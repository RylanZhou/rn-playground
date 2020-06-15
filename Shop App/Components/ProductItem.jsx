import React from 'react'
import { View, Image, Text, StyleSheet, Button } from 'react-native'

import { COLORS } from '../Constants'

const ProductItem = (props) => {
  return (
    <View style={styles.productContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: props.imageUrl }} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.price}>${props.price.toFixed(2)}</Text>
      </View>
      <View style={styles.actions}>
        <Button
          color={COLORS.primary}
          onPress={props.onViewDetail}
          title="View Details"
        />
        <Button
          color={COLORS.primary}
          onPress={props.onAddToCart}
          title="Add to Cart"
        />
      </View>
    </View>
  )
}

export default ProductItem

const styles = StyleSheet.create({
  productContainer: {
    height: 300,
    margin: 20,
    borderRadius: 10,
    shadowColor: 'black',
    backgroundColor: 'white',
    shadowOpacity: 0.62,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5 // For android
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  textContainer: {
    height: '15%',
    padding: 10
  },
  title: {
    marginVertical: 3,
    fontSize: 18
  },
  price: {
    fontSize: 14,
    color: '#888'
  },
  actions: {
    height: '25%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
