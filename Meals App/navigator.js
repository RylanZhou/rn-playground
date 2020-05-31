import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { Platform } from 'react-native'
import { COLORS } from './Constants'

import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen
} from './Screens'

const MealsNavigator = createStackNavigator(
  {
    Cateogories: {
      screen: CategoriesScreen,
      navigationOptions: {
        headerTitle: 'Meal Categories'
      }
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: {
      screen: MealDetailScreen
    }
  },
  {
    // Apply on every screen header
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? COLORS.primary : 'white'
      },
      headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary
    }
  }
)

export default createAppContainer(MealsNavigator)
