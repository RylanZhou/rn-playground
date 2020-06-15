import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { COLORS } from '../Constants'
import ProductsOverviewScreen from '../Screens/Shop/ProductsOverview'

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? '' : COLORS.primary
      },
      headerTintColor: Platform.OS === 'android' ? COLORS.primary : 'white'
    }
  }
)

export default createAppContainer(ProductsNavigator)
