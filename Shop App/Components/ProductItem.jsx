import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform
} from 'react-native'

import { COLORS } from '../Constants'

const ProductItem = (props) => {
  const TouchableComponent =
    Platform.OS === 'android' && Platform.Version >= 21
      ? TouchableNativeFeedback
      : TouchableOpacity

  return (
    <View style={styles.productContainer}>
      <TouchableComponent
        onPress={props.onViewDetail}
        style={styles.touchable}
        useForeground
      >
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
      </TouchableComponent>
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
  touchable: {
    overflow: 'hidden'
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
    height: '20%',
    padding: 10
  },
  title: {
    marginVertical: 3,
    fontSize: 18,
    fontFamily: 'open-sans-bold'
  },
  price: {
    fontSize: 14,
    color: '#888',
    fontFamily: 'open-sans'
  },
  actions: {
    height: '20%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
