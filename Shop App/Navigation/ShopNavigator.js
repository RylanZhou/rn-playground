import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { COLORS } from '../Constants'
import ProductsOverviewScreen from '../Screens/Shop/ProductsOverview'
import ProductDetailScreen from '../Screens/Shop/ProductDetail'

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '' : COLORS.primary
      },
      headerTitleStyle: {
        fontFamily: 'open-sans-bold'
      },
      headerBackTitleStyle: {
        fontFamily: 'open-sans-bold'
      },
      headerTintColor: Platform.OS === 'android' ? COLORS.primary : 'white'
    }
  }
)

export default createAppContainer(ProductsNavigator)
