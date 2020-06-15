import { ADD_TO_CART } from '../actions/cart'
import CartItem from '../../Models/CartItem'

const initialState = {
  items: {},
  totalAmount: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const {
        product: { id, title, price }
      } = action
      let updateOrNewCartItem = null
      if (id in state.items) {
        // This item already exists in the cart, so add one to the quantity.
        updateOrNewCartItem = state.items[id]
        updateOrNewCartItem.changeQuantity(1)
      } else {
        updateOrNewCartItem = new CartItem(1, price, title, price)
      }
      return {
        ...state,
        items: {
          ...state.items,
          [id]: updateOrNewCartItem
        },
        totalAmount: state.totalAmount + price
      }
    default:
      return state
  }
}
