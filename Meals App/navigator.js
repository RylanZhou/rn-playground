import React from 'react'
import { Platform } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from './Constants'

import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
  FavoritesScreen,
  FiltersScreen
} from './Screens'

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? COLORS.primary : 'white'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primary,
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  }
}

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
    defaultNavigationOptions
  }
)

const FavoritesNavigator = createStackNavigator(
  {
    Favorites: {
      screen: FavoritesScreen,
      navigationOptions: {
        headerTitle: 'Favorites'
      }
    },
    MealDetail: MealDetailScreen
  },
  {
    defaultNavigationOptions
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
      ),
      tabBarColor: COLORS.primary
      // tabBarLabel: 'Meals!!'
      // tabBarLabel: <Text>...</Text>
    }
  },
  Favorites: {
    screen: FavoritesNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites!', // Overwrite default tab label
      tabBarIcon: (tabInfo) => (
        <Ionicons color={tabInfo.tintColor} name="ios-star" size={25} />
      ),
      tabBarColor: COLORS.secondary
    }
  }
}

const MealsFavTabNavigator =
  // NOTE: Pay attention to the different configuration ways
  Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeColor: 'white',
        shifting: true, // icons shift up when activated
        barStyle: {
          backgroundColor: COLORS.secondary // For the default background color of tab bar
        }
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: COLORS.secondary,
          labelStyle: {
            fontFamily: 'open-sans-bold'
          }
        }
      })

const FiltersNavigator = createStackNavigator(
  {
    Filters: {
      screen: FiltersScreen,
      navigationOptions: {
        headerTitle: 'Filter'
      }
    }
  },
  {
    defaultNavigationOptions
  }
)

const MainNavigator = createDrawerNavigator(
  {
    FavoriteMeals: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: 'Meals'
      }
    },
    Filters: FiltersNavigator
  },
  {
    contentOptions: {
      activeTintColor: COLORS.secondary,
      labelStyle: {
        fontFamily: 'open-sans'
      }
    }
  }
)

export default createAppContainer(MainNavigator)
