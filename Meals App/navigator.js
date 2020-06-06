import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from './Constants'

import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
  FavoritesScreen
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

const tabScreenConfig = {
  Meals: {
    // You can use a stack navigator as a screen
    screen: MealsNavigator,
    // This arg only matters when there is a nested navigator
    navigationOptions: {
      // Take tabInfo and return the icon
      tabBarIcon: (tabInfo) => (
        <Ionicons color={tabInfo.tintColor} name="ios-restaurant" size={25} />
      )
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites!', // Overwrite default tab label
      tabBarIcon: (tabInfo) => (
        <Ionicons color={tabInfo.tintColor} name="ios-star" size={25} />
      )
    }
  }
}

const MealsFavTabNavigator =
  // NOTE: Pay attention to the different configuration ways
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: COLORS.secondary,
        shifting: true // icons shift up when activated
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: COLORS.secondary
        }
      })

export default createAppContainer(MealsFavTabNavigator)
