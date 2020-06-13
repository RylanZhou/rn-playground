import { combineReducers } from 'redux'
import { MEALS } from '../mock/data'
import { TOGGLE_FAVORITE } from './actions'

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
    default:
      return state
  }
}

export default combineReducers({
  meals: mealsReducer
})
