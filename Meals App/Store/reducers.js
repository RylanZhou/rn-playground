import { combineReducers } from 'redux'
import { MEALS } from '../mock/data'
import { TOGGLE_FAVORITE, SET_FILTERS } from './actions'

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
}

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (each) => each.id === action.mealId
      )
      if (existingIndex !== -1) {
        const updatedFavoriteMeals = [...state.favoriteMeals]
        updatedFavoriteMeals.splice(existingIndex, 1) // Remove favorite
        return {
          ...state,
          favoriteMeals: updatedFavoriteMeals
        }
      } else {
        return {
          ...state,
          // Add favorite
          favoriteMeals: state.favoriteMeals.concat(
            state.meals.find((each) => each.id === action.mealId)
          )
        }
      }
    case SET_FILTERS:
      const { filters } = action
      const updatedFilteredMeals = state.meals.filter((each) => {
        if (
          (filters.isGlutenFree && !each.isGlutenFree) ||
          (filters.isVegan && !each.isVegan) ||
          (filters.isVegetarian && !each.isVegetarian) ||
          (filters.isLactoseFree && !each.isLactoseFree)
        ) {
          return false
        }
        return true
      })
      return {
        ...state,
        filteredMeals: updatedFilteredMeals
      }
    default:
      return state
  }
}

export default combineReducers({
  meals: mealsReducer
})
