import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen
} from './screens'

const MealsNavigator = createStackNavigator({
  Cateogories: {
    screen: CategoriesScreen
  },
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: {
    screen: MealDetailScreen
  }
})

export default createAppContainer(MealsNavigator)
